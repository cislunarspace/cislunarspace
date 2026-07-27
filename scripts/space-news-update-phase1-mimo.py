#!/usr/bin/env python3
"""
Space News Phase 1 (MIMO) — 使用小米 MIMO API 的 web_search 工具搜索新闻。
不再依赖 hermes，直接调用 OpenAI 兼容接口。

用法:
    python3 scripts/space-news-update-phase1-mimo.py

环境变量:
    MIMO_API_KEY    — 小米 MIMO API 密钥（必需）
    SKIP_PHASE1=1   — 跳过整个 phase 1
"""

import json
import os
import re
import shutil
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from openai import OpenAI

# ============================================================================
# 常量
# ============================================================================

REPO = Path("/home/ouyangjiahong/codes/cislunarspace")
WEB = REPO / "web"
LOG = sys.stderr

# MIMO API 配置
MIMO_API_KEY = os.environ.get("MIMO_API_KEY", "")
MIMO_BASE_URL = "https://token-plan-cn.xiaomimimo.com/v1"
MIMO_MODEL = "mimo-v2.5-pro"

# 搜索配置
SEARCH_WORKERS = 4          # 并行搜索数（API 限流，不宜太多）
SEARCH_TIMEOUT = 60         # 单次搜索超时（秒）
DRAFT_TIMEOUT = 120         # 单次写稿超时（秒）
SELECT_TIMEOUT = 60         # 单次筛选超时（秒）
CUTOFF_DAYS = 3

# 初始化 OpenAI 客户端
client = None

def get_client() -> OpenAI:
    """获取或初始化 OpenAI 客户端"""
    global client
    if client is None:
        if not MIMO_API_KEY:
            print("FATAL: MIMO_API_KEY not set", file=LOG)
            sys.exit(1)
        client = OpenAI(
            api_key=MIMO_API_KEY,
            base_url=MIMO_BASE_URL,
            timeout=SEARCH_TIMEOUT,
        )
    return client

# ============================================================================
# 查询关键词（与原脚本一致）
# ============================================================================

CN_QUERIES = [
    "中国航天 发射 最新 长征 神舟 天舟",
    "商业航天 朱雀 力箭 快舟 蓝箭 中科宇航 发射",
    "千帆星座 垣信卫星 卫星互联网 发射 部署",
    "中国空间站 天宫 航天员 科学实验",
    "嫦娥 天问 北斗 探月 火星 深空探测 进展",
]

INTL_QUERIES = [
    "SpaceX Starlink Falcon launch pad Vandenberg Cape Canaveral",
    "NASA mission ISS Crew Dragon Artemis",
    "ESA JAXA space mission launch science",
    "space news launch rocket Blue Origin Rocket Lab ULA Ariane",
    "JWST Webb telescope exoplanet black hole space science discovery",
]

# ============================================================================
# ALLOWED_CATEGORIES
# ============================================================================

ALLOWED_CATEGORIES = {
    "china", "nasa", "esa", "isro", "jaxa", "kasa", "roscosmos", "cnes", "uae",
    "spacex", "rocket-lab", "blue-origin", "ula", "arianespace", "axiom", "vast",
    "firefly", "relativity", "stoke-space", "ispace", "k2", "cas-space", "galactic-energy",
    "landspace", "space-pioneer", "orientspace", "deep-blue-aerospace", "link-space",
    "quantum-space",
    "artemis", "iss", "tiangong", "gateway", "starship-test", "starlink", "qianfan",
    "guowang", "beidou", "chandra",
    "exoplanet", "blackhole", "gravitational-wave", "space-telescope", "mars",
    "moon", "solar", "meteor", "cluster", "asteroid",
    "launch", "commercial", "science", "policy", "funding",
}

# ============================================================================
# MIMO API 调用层
# ============================================================================

def mimo_chat(messages: list, *, temperature: float = 0.7,
              max_tokens: int = 2048,
              tools: list = None) -> Optional[str]:
    """调用 MIMO API，返回文本响应。失败返回 None。"""
    try:
        c = get_client()
        kwargs = {
            "model": MIMO_MODEL,
            "messages": messages,
            "temperature": temperature,
            "max_completion_tokens": max_tokens,
            "extra_body": {"thinking": {"type": "disabled"}},
        }
        if tools:
            kwargs["tools"] = tools
            kwargs["tool_choice"] = "auto"

        resp = c.chat.completions.create(**kwargs)
        if not resp.choices:
            return None
        return resp.choices[0].message.content
    except Exception as e:
        print(f"  MIMO API error: {e}", file=LOG)
        return None


def mimo_chat_with_citations(messages: list, *, temperature: float = 0.7,
                              max_tokens: int = 2048,
                              tools: list = None) -> Tuple[Optional[str], list]:
    """调用 MIMO API，返回 (文本响应, citations列表)。"""
    try:
        c = get_client()
        kwargs = {
            "model": MIMO_MODEL,
            "messages": messages,
            "temperature": temperature,
            "max_completion_tokens": max_tokens,
            "extra_body": {"thinking": {"type": "disabled"}},
        }
        if tools:
            kwargs["tools"] = tools
            kwargs["tool_choice"] = "auto"

        resp = c.chat.completions.create(**kwargs)
        if not resp.choices:
            return None, []

        msg = resp.choices[0].message
        content = msg.content or ""
        citations = []
        if hasattr(msg, 'annotations') and msg.annotations:
            for ann in msg.annotations:
                if hasattr(ann, 'type') and ann.type == 'url_citation':
                    citations.append({
                        'url': getattr(ann, 'url', ''),
                        'title': getattr(ann, 'title', ''),
                        'summary': getattr(ann, 'summary', ''),
                        'site_name': getattr(ann, 'site_name', ''),
                        'publish_time': getattr(ann, 'publish_time', ''),
                    })
        return content, citations
    except Exception as e:
        print(f"  MIMO API error: {e}", file=LOG)
        return None, []


def mimo_chat_json(prompt: str) -> Optional[object]:
    """调用 MIMO API，期望返回 JSON。失败返回 None。"""
    full_prompt = prompt + (
        "\n\n--- OUTPUT RULE ---\n"
        "Return ONLY the requested JSON. Start your response with { or [."
    )
    messages = [
        {"role": "user", "content": full_prompt}
    ]
    text = mimo_chat(messages, temperature=0.3, max_tokens=4096)
    if not text:
        return None

    # 提取 JSON
    first_b, first_k = text.find("{"), text.find("[")
    starts = [i for i in (first_b, first_k) if i != -1]
    if not starts:
        print(f"  MIMO no JSON: {text[:200]}", file=LOG)
        return None
    end = max(text.rfind("}"), text.rfind("]"))
    if end <= min(starts):
        print(f"  MIMO truncated JSON: {text[:200]}", file=LOG)
        return None
    try:
        return json.loads(text[min(starts):end + 1])
    except json.JSONDecodeError as e:
        print(f"  MIMO JSON parse: {e}; raw[:200]={text[:200]}", file=LOG)
        return None


# ============================================================================
# 搜索（使用 MIMO web_search 工具）
# ============================================================================

def _build_web_search_tool(country: str = "China") -> dict:
    """构建 web_search 工具配置"""
    return {
        "type": "web_search",
        "max_keyword": 3,
        "force_search": True,
        "limit": 5,
        "user_location": {
            "type": "approximate",
            "country": country,
            "region": "Beijing",
            "city": "Beijing"
        }
    }


def search_query_mimo(query: str) -> List[Dict]:
    """单 query → MIMO web_search → 标准化结果列表。"""
    # 根据查询语言选择位置
    is_cn = any('一' <= c <= '鿿' for c in query[:20])
    tool = _build_web_search_tool("China" if is_cn else "United States")

    messages = [
        {"role": "system", "content": (
            "你是一位航天新闻搜索助手。请使用 web_search 工具搜索最新的航天新闻。"
            "搜索完成后，从结果中提取每篇文章的标题、URL、摘要和发布日期。"
            "只返回最近 5 天内的新闻。"
        )},
        {"role": "user", "content": f"搜索最新的航天新闻：{query}"}
    ]

    content, citations = mimo_chat_with_citations(
        messages, tools=[tool], temperature=0.3, max_tokens=2048
    )

    results = []
    seen_urls = set()

    # 从 citations 中提取搜索结果
    for cite in citations:
        url = cite.get('url', '').strip()
        if not url or url in seen_urls:
            continue
        seen_urls.add(url)
        results.append({
            'title': cite.get('title', ''),
            'url': url,
            'description': cite.get('summary', ''),
            'date_iso': _extract_date_from_publish_time(cite.get('publish_time', '')),
            'source_name': cite.get('site_name', ''),
        })

    # 如果 citations 不够，尝试从 content 中提取 URL
    if len(results) < 3 and content:
        for m in re.finditer(r'https?://[^\s\)\]\>]+', content):
            url = m.group(0).rstrip('.,;:')
            if url not in seen_urls and len(url) > 20:
                seen_urls.add(url)
                results.append({
                    'title': '',
                    'url': url,
                    'description': '',
                    'date_iso': '',
                    'source_name': _extract_domain(url),
                })

    return results[:5]  # 最多 5 条


def _extract_date_from_publish_time(publish_time: str) -> str:
    """从 publish_time 字符串提取 YYYY-MM-DD 格式日期"""
    if not publish_time:
        return ""
    m = re.search(r'(\d{4})-(\d{2})-(\d{2})', publish_time)
    if m:
        return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return ""


def _extract_domain(url: str) -> str:
    """从 URL 提取域名"""
    m = re.search(r'https?://([^/]+)', url)
    return m.group(1) if m else ""


def search_all_mimo() -> List[Dict]:
    """所有 query 并行搜索 + URL 去重。"""
    all_queries = CN_QUERIES + INTL_QUERIES
    all_results: List[Dict] = []
    with ThreadPoolExecutor(max_workers=SEARCH_WORKERS) as ex:
        futures = {ex.submit(search_query_mimo, q): q for q in all_queries}
        for fut in as_completed(futures):
            q = futures[fut]
            try:
                items = fut.result()
            except Exception as e:
                print(f"  SEARCH EXC [{q[:40]!r}]: {e}", file=LOG)
                items = []
            all_results.extend(items)
            print(f"  [{len(items):>2}] {q[:60]}", file=LOG)
    # URL 去重
    seen, deduped = set(), []
    for r in all_results:
        url = r.get("url", "").strip()
        if url and url not in seen:
            seen.add(url)
            deduped.append(r)
    return deduped


def _search_cn_only_mimo() -> List[Dict]:
    """CN 30% 后置校验用 — 只跑 CN queries。"""
    all_results: List[Dict] = []
    with ThreadPoolExecutor(max_workers=len(CN_QUERIES)) as ex:
        futures = {ex.submit(search_query_mimo, q): q for q in CN_QUERIES}
        for fut in as_completed(futures):
            q = futures[fut]
            try:
                items = fut.result() or []
            except Exception as e:
                print(f"  CN SEARCH EXC [{q[:40]!r}]: {e}", file=LOG)
                items = []
            all_results.extend(items)
            print(f"  [CN+ {len(items):>2}] {q[:60]}", file=LOG)
    seen, deduped = set(), []
    for r in all_results:
        url = r.get("url", "").strip()
        if url and url not in seen:
            seen.add(url)
            deduped.append(r)
    return deduped


# ============================================================================
# 加载已有稿件 + 去重（与原脚本完全一致）
# ============================================================================

def load_existing_recent(cutoff_days: int = CUTOFF_DAYS) -> Tuple[set, set, set, List[Dict]]:
    """加载最近 cutoff_days 天内所有月份的已有稿件（跨月去重）。"""
    urls = set()
    titles = set()
    slugs = set()
    metas: List[Dict] = []

    now = datetime.now()
    months_to_scan = []
    for offset in range(0, 2):
        d = now - timedelta(days=offset * 30)
        months_to_scan.append((d.year, d.month))
    months_to_scan = list(dict.fromkeys(months_to_scan))

    for lang in ["space-news", "en/space-news"]:
        for year, month in months_to_scan:
            month_dir = WEB / f"{lang}/{year:04d}/{month:02d}"
            if not month_dir.exists():
                continue
            for md in month_dir.glob("*.md"):
                if md.name == "README.md":
                    continue
                content = md.read_text(encoding="utf-8")

                m = re.match(r"\d{4}-\d{2}-\d{2}-(.+)\.md$", md.name)
                if m:
                    slugs.add(m.group(1))

                fm = re.search(r"^---\n(.*?)\n---", content, re.DOTALL)
                fm_text = fm.group(1) if fm else ""
                title_zh = ""
                date_str = ""
                category = ""
                if fm:
                    title_m = re.search(r'^title:\s*["\']?(.*?)["\']?$', fm_text, re.MULTILINE)
                    if title_m:
                        title_zh = title_m.group(1).strip()
                        titles.add(title_zh)
                    date_m = re.search(r'^date:\s*(\d{4}-\d{2}-\d{2})', fm_text, re.MULTILINE)
                    if date_m:
                        date_str = date_m.group(1)
                    cat_m = re.search(r'^category:\s*["\']?(\S+)', fm_text, re.MULTILINE)
                    if cat_m:
                        category = cat_m.group(1).strip().strip('"\'')

                for line in content.split("\n"):
                    for url_m in re.finditer(r"\((https?://[^\)]+)\)", line):
                        urls.add(url_m.group(1).strip())

                fingerprint_source = (m.group(1) if m else "") + " " + title_zh
                fps = _extract_event_fingerprints(fingerprint_source)
                if fps:
                    metas.append({
                        "date": date_str,
                        "category": category,
                        "fingerprints": fps,
                        "title_zh": title_zh,
                        "slug": m.group(1) if m else "",
                    })

    return urls, titles, slugs, metas


# ============================================================================
# 事件 fingerprint（与原脚本完全一致）
# ============================================================================

_FP_STOPWORDS = {
    "the", "a", "an", "of", "in", "to", "for", "on", "at", "by", "with", "from",
    "is", "are", "was", "were", "be", "as", "and", "or", "but", "its",
    "after", "first", "new", "via", "over", "into", "up", "out",
    "宣布", "完成", "成功", "最新", "消息", "新闻", "报道", "公司", "机构", "国家",
    "发射", "任务", "项目", "计划", "中国", "美国", "欧洲", "俄罗斯", "日本", "印度",
    "2026", "2025", "2024", "june", "may", "july", "august", "september",
    "6月", "5月", "7月", "8月", "9月",
}


def _extract_event_fingerprints(text: str) -> set:
    """从 title/slug 提'事件 fingerprint'（核心实体词集合）。"""
    text_lower = text.lower()
    text_no_dates = re.sub(r"\d{4}[-/]\d{1,2}[-/]\d{1,2}", " ", text_lower)
    text_no_dates = re.sub(r"\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日", " ", text_no_dates)
    en_tokens = re.findall(r"[a-z][a-z0-9-]{3,}", text_no_dates)
    zh_tokens = re.findall(r"[一-鿿]{2,}", text)
    num_tokens = re.findall(r"\d{2,}(?:\.\d+)?", text_no_dates)
    fps = set()
    for tok in en_tokens:
        if tok not in _FP_STOPWORDS:
            fps.add(tok)
    for tok in zh_tokens:
        if tok not in _FP_STOPWORDS:
            fps.add(tok)
    for tok in num_tokens:
        fps.add(tok)
    return fps


def _is_duplicate_event(new_fps: set, existing_metas: List[Dict], category: str,
                        cutoff_days: int = 8) -> bool:
    """判断新候选事件是否与已有稿件（cutoff_days 内）'同事件'。"""
    if not new_fps:
        return False
    cutoff_date = datetime.now() - timedelta(days=cutoff_days)
    strong_combos = [
        {"spcx", "nasdaq"},
        {"spcx", "trillion"},
        {"135", "trillion"},
        {"135", "nasdaq"},
        {"挂牌", "nasdaq"},
        {"135", "挂牌"},
    ]
    for meta in existing_metas:
        if not meta.get("date"):
            continue
        try:
            d = datetime.strptime(meta["date"], "%Y-%m-%d")
            if d < cutoff_date:
                continue
        except ValueError:
            continue
        existing_fps = meta.get("fingerprints", set())
        overlap = new_fps & existing_fps
        if len(overlap) >= 3:
            return True
        for combo in strong_combos:
            if combo.issubset(new_fps) and combo.issubset(existing_fps):
                return True
    return False


# ============================================================================
# URL 验证（与原脚本一致）
# ============================================================================

def _has_chinese_chars(url: str) -> bool:
    return bool(re.search(r'[一-龥]', url))

def _has_placeholder_numbers(url: str) -> bool:
    return bool(re.search(r'\d{9,}', url))

def _is_suspicious_url(url: str) -> bool:
    return _has_chinese_chars(url) or _has_placeholder_numbers(url)

def _verify_url_accessible(url: str, timeout: int = 10) -> bool:
    if not url or not url.startswith("http"):
        return False
    try:
        proc = subprocess.run(
            ["curl", "-I", "-s", "-o", "/dev/null", "-w", "%{http_code}",
             "--max-time", str(timeout), "--http1.1",
             "-A", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
             url],
            capture_output=True, text=True, timeout=timeout + 5,
        )
        http_code = proc.stdout.strip()
        return http_code in ["200", "301", "302", "429", "403"]
    except Exception:
        return False


# ============================================================================
# 筛选（使用 MIMO API）
# ============================================================================

def select_articles_mimo(results: List[Dict], existing_urls: set,
                         existing_titles: set, existing_slugs: set,
                         existing_metas: List[Dict]) -> List[Dict]:
    """用 MIMO API 筛选值得写的新闻。"""
    if not results:
        return []

    filtered = [r for r in results if r.get("url", "").strip() not in existing_urls]
    if not filtered:
        return []

    candidates = filtered[:15]

    existing_titles_text = "\n".join(f"- {t}" for t in sorted(existing_titles)[:20])
    candidates_text = "\n".join(
        f"{i+1}. 标题: {r['title']}\n   URL: {r['url']}\n   摘要: {r['description'][:200]}"
        for i, r in enumerate(candidates)
    )

    today_str = datetime.now().strftime("%Y-%m-%d")
    cutoff_str = (datetime.now() - timedelta(days=CUTOFF_DAYS)).strftime("%Y-%m-%d")
    categories_doc = ", ".join(sorted(ALLOWED_CATEGORIES))

    prompt = f"""你是一位资深航天新闻编辑。请从以下搜索结果中，筛选出 **{cutoff_str} 到 {today_str}** 之间值得单独成稿的航天新闻。

## 已有稿件（同一事件不要重复写）
{existing_titles_text}

## 候选新闻
{candidates_text}

## 筛选规则
1. 【时间硬约束】只选日期在 {cutoff_str} 之后的新闻。早于 {cutoff_str} 的绝对跳过。
2. 【已发生事件】优先选择已经发生/完成的事件（如"发射成功""宣布""签约""公布"等）。
3. 可写：重大任务里程碑、发射结果（成功/失败）、官方政策/预算、商业航天关键融资/合同/上市、重要空间科学发现、在轨重大事件
4. 跳过：纯图片汇总 gallery、娱乐/podcast/购物内容、军事 ICBM 试射
5. 同一事件已有稿时跳过；Starlink 等高频常规发射合并，不逐条写
6. 每篇至少一条可引用原文URL
7. 中国航天相关新闻占比目标不低于30%
8. 无值得写的新闻时返回空数组 []

## 输出格式
请以 JSON 数组返回，每个元素包含：
{{
  "index": 候选序号（1-based）,
  "title_zh": "中文标题",
  "title_en": "英文标题",
  "slug": "简短英文slug，用-连接，不含日期",
  "category": "必须是下列之一：{categories_doc}",
  "date": "YYYY-MM-DD（必须是 {cutoff_str} 到 {today_str} 之间）",
  "summary_zh": "中文一句话摘要（含具体事件 + 日期 + 关键数字）",
  "summary_en": "英文一句话摘要（含具体事件 + 日期 + 关键数字）",
  "source_url": "来源URL（必须是候选里出现的）",
  "source_name": "来源名称"
}}

只输出 JSON 数组，不要其他文字。"""

    response = mimo_chat_json(prompt)
    if not isinstance(response, list):
        print(f"  SELECT: MIMO returned non-array: {str(response)[:200]}", file=LOG)
        return []

    # post-validation
    cutoff_date = datetime.now() - timedelta(days=CUTOFF_DAYS)
    valid = []
    for a in response:
        if not isinstance(a, dict):
            continue
        slug = a.get("slug", "").strip()
        slug = re.sub(r"[^a-zA-Z0-9-]", "", slug).lower()
        if not slug or len(slug) < 3:
            continue
        if slug in existing_slugs:
            print(f"  SKIP duplicate slug: {slug}", file=LOG)
            continue

        cat = a.get("category", "launch").lower().strip()
        if cat not in ALLOWED_CATEGORIES:
            matched = None
            for c in ALLOWED_CATEGORIES:
                if c in cat or cat in c:
                    matched = c
                    break
            cat = matched or "launch"
        a["category"] = cat

        date_str = a.get("date", "").strip()
        if not re.match(r"\d{4}-\d{2}-\d{2}$", date_str):
            a["date"] = today_str
            date_str = a["date"]
        try:
            article_date = datetime.strptime(date_str, "%Y-%m-%d")
            if article_date < cutoff_date:
                print(f"  SKIP outdated ({date_str} < cutoff): {slug}", file=LOG)
                continue
        except ValueError:
            a["date"] = today_str

        slug_for_fp = a.get("slug", "") + " " + a.get("title_en", "") + " " + a.get("title_zh", "")
        fps = _extract_event_fingerprints(slug_for_fp)
        if fps and _is_duplicate_event(fps, existing_metas, cat, cutoff_days=8):
            print(f"  SKIP duplicate event (fingerprint): {slug}", file=LOG)
            continue

        # URL 验证
        source_url = a.get("source_url", "").strip()
        if not source_url:
            print(f"  SKIP no source_url: {slug}", file=LOG)
            continue
        if _is_suspicious_url(source_url):
            print(f"  SKIP suspicious URL ({source_url}): {slug}", file=LOG)
            continue
        if not _verify_url_accessible(source_url):
            print(f"  SKIP inaccessible URL ({source_url}): {slug}", file=LOG)
            continue

        valid.append(a)

    return valid


# ============================================================================
# 写稿（使用 MIMO API）
# ============================================================================

def _sanitize_for_yaml(text: str) -> str:
    """清掉 description 里的双引号/单引号/冒号，避免破坏 YAML frontmatter。"""
    if not text:
        return ""
    return (text
            .replace('"', '')
            .replace('"', '')
            .replace("'", '')
            .replace("'", '')
            .replace(" # ", " ")
            .replace(":", "：")
            .strip())


def draft_article_mimo(meta: Dict) -> Tuple[Optional[str], Optional[str]]:
    """调 MIMO API 生成中英双语稿件。"""
    date = meta["date"]
    year, month = date[:4], date[5:7]
    slug = meta["slug"]

    summary_zh_safe = _sanitize_for_yaml(meta.get("summary_zh", ""))
    summary_en_safe = _sanitize_for_yaml(meta.get("summary_en", ""))
    title_zh_safe = _sanitize_for_yaml(meta.get("title_zh", ""))
    title_en_safe = _sanitize_for_yaml(meta.get("title_en", ""))

    prompt = f"""请为以下航天新闻撰写中英双语稿件。

## 事件信息
- 中文标题：{title_zh_safe}
- 英文标题：{title_en_safe}
- 日期：{date}
- 分类：{meta['category']}
- 来源URL：{meta['source_url']}
- 来源名称：{meta['source_name']}
- 中文摘要：{summary_zh_safe}
- 英文摘要：{summary_en_safe}

## YAML 铁律（必读，不遵守会导致站点 build 崩）
- frontmatter title / description 字段是 YAML 双引号包裹的字符串
- **严禁**在 title / description / 摘要 / 正文标题 1 字段里出现任何形式的引号字符
- 如果原文出现引号，统一去掉引号或换成中文标点（如「」或省略）

## URL 使用铁律（必读）
- **严禁编造或猜测 URL** - 只能使用上方提供的"来源URL"
- **不得创建新的 URL** - 即使你认为某个 URL 可能存在，也不要编造
- **如果需要引用其他来源，必须从原文中提取真实 URL** - 不得自行构造
- **宁可少引用，不可乱引用**

## 格式要求

=== 中文稿开始 ===
---
layout: SpaceNewsArticle
title: "{title_zh_safe}"
description: "{summary_zh_safe}"
permalink: /space-news/{year}/{month}/{date}-{slug}/
author: 天疆说
date: {date}
lastUpdated: {date}
category: {meta['category']}
---

# {title_zh_safe}

**摘要：** {summary_zh_safe}

（请在这里展开正文，2-4段，包含关键事实、数据、时间。不确定的信息写「据报道」「待机构确认」，不要编造。）

## 信息来源（原文）

- [{meta['source_name']}]({meta['source_url']})
=== 中文稿结束 ===

=== 英文稿开始 ===
---
layout: SpaceNewsArticle
title: "{title_en_safe}"
description: "{summary_en_safe}"
permalink: /en/space-news/{year}/{month}/{date}-{slug}/
author: Tianjiangshuo
date: {date}
lastUpdated: {date}
category: {meta['category']}
---

# {title_en_safe}

**Summary:** {summary_en_safe}

（请在这里展开英文正文，2-4段，与中文稿事实对等，不要少于中文稿的信息量。）

## Sources (original pages)

- [{meta['source_name']}]({meta['source_url']})
=== 英文稿结束 ===

请严格按照 === 标记的边界输出，不要输出其他内容。注意再次确认：所有 frontmatter 字段里没有引号。"""

    messages = [
        {"role": "system", "content": "你是一位资深航天新闻撰稿人，擅长撰写中英双语航天新闻稿件。"},
        {"role": "user", "content": prompt}
    ]
    response_text = mimo_chat(messages, temperature=0.5, max_tokens=4096)
    if not response_text:
        return None, None

    zh_m = re.search(r"=== 中文稿开始 ===\s*(.*?)\s*=== 中文稿结束 ===", response_text, re.DOTALL)
    en_m = re.search(r"=== 英文稿开始 ===\s*(.*?)\s*=== 英文稿结束 ===", response_text, re.DOTALL)

    zh = zh_m.group(1).strip() if zh_m else None
    en = en_m.group(1).strip() if en_m else None

    if not zh and not en:
        print(f"  WARN: format mismatch for {slug}, using raw response as zh", file=LOG)
        zh = response_text.strip()
        en = None

    return zh, en


# ============================================================================
# 落盘（与原脚本完全一致）
# ============================================================================

def save_article(zh: str, en: str, slug: str, date: str) -> bool:
    """保存稿件到正确路径。"""
    year, month = date[:4], date[5:7]

    cn_dir = WEB / f"space-news/{year}/{month}"
    en_dir = WEB / f"en/space-news/{year}/{month}"
    cn_dir.mkdir(parents=True, exist_ok=True)
    en_dir.mkdir(parents=True, exist_ok=True)

    filename = f"{date}-{slug}.md"
    cn_path = cn_dir / filename
    en_path = en_dir / filename

    try:
        cn_path.write_text(zh, encoding="utf-8")
        en_path.write_text(en, encoding="utf-8")
        print(f"  Saved: {cn_path}", file=LOG)
        print(f"  Saved: {en_path}", file=LOG)
        return True
    except Exception as exc:
        print(f"  ERROR saving {slug}: {exc}", file=LOG)
        return False


# ============================================================================
# 图片下载（与原脚本完全一致）
# ============================================================================

def _fetch_og_image(url: str) -> Optional[str]:
    """从 URL 提取 og:image（用 curl 绕过部分 UA 封锁）。"""
    if not url or not url.startswith("http"):
        return None
    try:
        proc = subprocess.run(
            ["curl", "-sL", "--http1.1", "--max-time", "10",
             "-A", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                   "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
             url],
            capture_output=True, text=True, timeout=15,
        )
    except Exception:
        return None
    if proc.returncode != 0:
        return None
    html = proc.stdout[:100_000]
    m = re.search(
        r'<meta[^>]+(?:property|name)=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']',
        html, re.I,
    )
    if not m:
        m = re.search(
            r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\']og:image["\']',
            html, re.I,
        )
    if not m:
        m = re.search(
            r'<meta[^>]+name=["\']twitter:image(?::src)?["\'][^>]+content=["\']([^"\']+)["\']',
            html, re.I,
        )
    if m:
        return m.group(1)
    body_imgs = re.findall(r'<img[^>]+src="(https?://[^"]+)"', html)
    _skip = ('logo', 'icon', 'avatar', 'favicon', '1x1', 'pixel', 'tracking',
             '400x400', '200x200', '100x100', 'badge', 'sprite', 'spinner')
    for img_url in body_imgs:
        if not any(x in img_url.lower() for x in _skip):
            return img_url
    return None


def _download_image(img_url: str, dest: Path) -> bool:
    """下载图片到 dest，成功返回 True。"""
    if not img_url or not img_url.startswith("http"):
        return False
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        proc = subprocess.run(
            ["curl", "-sL", "--http1.1", "--max-time", "15",
             "-A", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
             "-o", str(dest), img_url],
            capture_output=True, timeout=20,
        )
    except Exception as exc:
        print(f"    IMG download error: {exc}", file=LOG)
        return False
    if proc.returncode != 0 or not dest.exists():
        return False
    size = dest.stat().st_size
    if size < 5000:
        dest.unlink(missing_ok=True)
        print(f"    IMG too small ({size}B), skipped", file=LOG)
        return False
    print(f"    IMG downloaded: {dest.name} ({size // 1024}KB)", file=LOG)
    return True


def fetch_and_save_hero(meta: Dict) -> None:
    """尝试从 source_url 抓取 hero 图片，存入 figures/ 目录并更新 frontmatter。"""
    source_url = meta.get("source_url", "")
    slug = meta["slug"]
    date = meta["date"]
    year, month = date[:4], date[5:7]

    img_url = _fetch_og_image(source_url)
    if not img_url:
        print(f"  IMG: no og:image for {slug}", file=LOG)
        return

    cn_fig_dir = WEB / f"space-news/{year}/{month}/figures/{date}-{slug}"
    en_fig_dir = WEB / f"en/space-news/{year}/{month}/figures/{date}-{slug}"

    ext = ".jpg"
    lower = img_url.split("?")[0].lower()
    if lower.endswith(".png"):
        ext = ".png"
    elif lower.endswith(".webp"):
        ext = ".webp"

    hero_path = cn_fig_dir / f"hero{ext}"
    ok = _download_image(img_url, hero_path)
    if not ok:
        return

    en_fig_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(hero_path, en_fig_dir / f"hero{ext}")

    image_rel = f"./figures/{date}-{slug}/hero{ext}"
    for lang_prefix in ("", "en/"):
        md_path = WEB / f"{lang_prefix}space-news/{year}/{month}/{date}-{slug}.md"
        if not md_path.exists():
            continue
        content = md_path.read_text(encoding="utf-8")
        parts = content.split("---", 2)
        if len(parts) < 3:
            continue
        fm = parts[1]
        if "image:" in fm:
            continue
        fm_new = fm.rstrip() + f"\nimage: {image_rel}\n"
        content = f"---{fm_new}---{parts[2]}"
        md_path.write_text(content, encoding="utf-8")
        print(f"  IMG: added image field to {md_path.name}", file=LOG)


# ============================================================================
# 更新 README（与原脚本完全一致）
# ============================================================================

def _insert_after_table_header(text: str, lines_to_add: List[str]) -> str:
    """在 README 表格分隔符后插入新行。"""
    pattern = r"(\|\s*[-:]+\s*\|\s*[-:]+\s*\|\n)"
    replacement = r"\1" + "\n".join(lines_to_add) + "\n"
    new_text, count = re.subn(pattern, replacement, text, count=1)
    if count == 0:
        pattern2 = r"(\|\s*日期\s*\|\s*标题\s*\|\n\|\s*[-:]+\s*\|\s*[-:]+\s*\|\n)"
        replacement2 = r"\1" + "\n".join(lines_to_add) + "\n"
        new_text, count = re.subn(pattern2, replacement2, text, count=1)
    return new_text


def update_readme_for_month(year: int, month: int, articles: List[Dict]) -> None:
    """更新指定月份的中英 README 索引。"""
    for lang_prefix, is_en in [("", False), ("en/", True)]:
        readme_path = WEB / f"{lang_prefix}space-news/{year:04d}/{month:02d}/README.md"
        if not readme_path.exists():
            continue

        content = readme_path.read_text(encoding="utf-8")

        today = datetime.now().strftime("%Y-%m-%d")
        content = re.sub(
            r"^lastUpdated:\s*\d{4}-\d{2}-\d{2}$",
            f"lastUpdated: {today}",
            content,
            flags=re.MULTILINE,
        )

        new_lines = []
        for a in articles:
            day = int(a["date"][8:10])
            date_short = f"{int(month)}-{day:02d}"
            slug = a["slug"]
            title = _sanitize_for_yaml(a["title_en"] if is_en else a["title_zh"])
            link = f"./{a['date']}-{slug}/"
            new_lines.append(f"| {date_short} | [{title}]({link}) |")

        if new_lines:
            content = _insert_after_table_header(content, new_lines)

        readme_path.write_text(content, encoding="utf-8")
        print(f"  Updated README: {readme_path}", file=LOG)


def update_readme(articles: List[Dict]) -> None:
    """按文章实际月份分组更新 README。"""
    grouped: Dict[Tuple[int, int], List[Dict]] = {}
    for a in articles:
        d = a["date"]
        key = (int(d[:4]), int(d[5:7]))
        grouped.setdefault(key, []).append(a)

    for (year, month), group in grouped.items():
        update_readme_for_month(year, month, group)


# ============================================================================
# CN 30% 后置校验辅助
# ============================================================================

def _is_chinese_event(article: Dict) -> bool:
    """判断一篇文章是否属"中国航天"事件。"""
    cat = article.get("category", "").lower()
    if any(k in cat for k in ("china", "tiangong", "qianfan", "guowang", "beidou",
                                "landspace", "galactic-energy", "cas-space",
                                "space-pioneer", "orientspace", "deep-blue", "link-space",
                                "ispace", "k2", "firefly")):
        return True
    title = (article.get("title_zh", "") or article.get("title_en", ""))
    if re.search(r"[一-鿿]", title):
        return True
    url = article.get("source_url", "")
    cn_domains = (".cn", ".com.cn", "qq.com", "weibo.com", "163.com", "sohu.com",
                  "thepaper.cn", "sina.com", "ifeng.com", "people.com.cn", "xinhuanet")
    return any(d in url for d in cn_domains)


# ============================================================================
# 主流程
# ============================================================================

def main() -> int:
    if os.environ.get("SKIP_PHASE1") == "1":
        print("phase 1: SKIPPED (SKIP_PHASE1=1)", file=LOG)
        return 0

    if not MIMO_API_KEY:
        print("FATAL: MIMO_API_KEY not set", file=LOG)
        return 1

    now = datetime.now()
    print(f"[{now.isoformat()}] Space News Phase 1 (MIMO) start", file=LOG)

    # 1. 并行搜索
    print(f"  Searching {len(CN_QUERIES)} CN + {len(INTL_QUERIES)} INTL via MIMO web_search...", file=LOG)
    results = search_all_mimo()
    print(f"  -> {len(results)} unique results", file=LOG)

    if not results:
        print("[SILENT]")
        print(f"[{datetime.now().isoformat()}] No search results.", file=LOG)
        return 0

    # 2. 加载已有稿件（跨月去重）
    existing_urls, existing_titles, existing_slugs, existing_metas = load_existing_recent()
    print(f"  Existing: {len(existing_urls)} URLs, {len(existing_titles)} titles, "
          f"{len(existing_slugs)} slugs, {len(existing_metas)} metas", file=LOG)

    # 3. 筛选
    articles = select_articles_mimo(results, existing_urls, existing_titles,
                                     existing_slugs, existing_metas)
    if not articles:
        print("[SILENT]")
        print(f"[{datetime.now().isoformat()}] No newsworthy articles found.", file=LOG)
        return 0

    # 4. CN 30% 后置校验
    cn_count = sum(1 for a in articles if _is_chinese_event(a))
    total = len(articles)
    if total > 0 and cn_count / total < 0.3:
        print(f"  CN ratio low ({cn_count}/{total} = {cn_count/total:.0%}), "
              f"running CN supplement pass...", file=LOG)
        try:
            cn_results = _search_cn_only_mimo()
            print(f"  -> CN supplement: {len(cn_results)} unique results", file=LOG)
            supplement = select_articles_mimo(cn_results, existing_urls, existing_titles,
                                               existing_slugs, existing_metas)
            for s in supplement:
                if _is_chinese_event(s) and len(articles) < 5:
                    articles.append(s)
        except Exception as exc:
            print(f"  CN supplement failed: {exc}", file=LOG)

    if not articles:
        print("[SILENT]")

    print(f"  -> {len(articles)} articles selected:", file=LOG)
    for a in articles:
        print(f"     - {a['date']}-{a['slug']}: {a['title_zh']}", file=LOG)

    # 5. 写稿 + 落盘
    saved = []
    for meta in articles:
        print(f"  Drafting {meta['slug']}...", file=LOG)
        zh, en = draft_article_mimo(meta)
        if zh and en:
            if save_article(zh, en, meta["slug"], meta["date"]):
                saved.append(meta)
        else:
            print(f"  FAILED to draft {meta['slug']} (zh={zh is not None}, en={en is not None})", file=LOG)

    # 5b. 图片下载
    for meta in saved:
        print(f"  Fetching image for {meta['slug']}...", file=LOG)
        try:
            fetch_and_save_hero(meta)
        except Exception as exc:
            print(f"  IMG error for {meta['slug']}: {exc}", file=LOG)

    # 6. 更新 README
    if saved:
        update_readme(saved)

    # 输出结果
    print(f"Done. Added {len(saved)}/{len(articles)} articles.")
    for a in saved:
        print(f"  + {a['date']}-{a['slug']}: {a['title_zh']}")

    print(f"[{datetime.now().isoformat()}] Phase 1 finish", file=LOG)
    return 0


if __name__ == "__main__":
    sys.exit(main())
