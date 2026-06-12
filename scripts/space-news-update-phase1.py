#!/usr/bin/env python3
"""
Space News Phase 1 — 轻量替代 hermes chat
直接调用 MiniMax search + LLM API，无需启动完整 agent session。

用法:
    python3 scripts/space-news-update-phase1.py

环境变量:
    MINIMAX_API_KEY 或 MINIMAX_CN_API_KEY — 必需
    MINIMAX_API_HOST — 可选，默认 https://api.minimaxi.com
"""

import json
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Optional, Tuple
import urllib.request
import urllib.error

# ============================================================================
# 配置
# ============================================================================

REPO = Path("/home/ouyangjiahong/codes/cislunarspace")
WEB = REPO / "web"
LOG = sys.stderr

def _load_env_keys():
    """尝试从 ~/.hermes/.env 加载 API key（供手动运行时使用）。
    只加载 key 变量，不加载 BASE_URL/HOST（避免 hermes 自定义 endpoint 干扰）。"""
    env_path = Path.home() / ".hermes" / ".env"
    if not env_path.exists():
        return
    key_names = {"MINIMAX_API_KEY", "MINIMAX_CN_API_KEY"}
    with env_path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                key = key.strip()
                if key in key_names and key not in os.environ:
                    os.environ[key] = val.strip().strip('"').strip("'")

_load_env_keys()

MINIMAX_KEY = os.environ.get("MINIMAX_API_KEY") or os.environ.get("MINIMAX_CN_API_KEY") or ""
MINIMAX_BASE = "https://api.minimaxi.com"

SEARCH_MODEL = "MiniMax-Text-01"   # 支持 web_search tool
CHAT_MODEL = "MiniMax-M3"            # 写稿/筛选用

# 中文搜索关键词（D 方案：日期硬锚 + 砍量到 4 条 = 90s 预算）
# 关键改动：每条都带"2026-06-{昨天}/{今天}"，避免命中 2013 神舟十、2025 火星陈粮
# 历史教训：web_search 不响应 site: 操作符，所以不写 site:cnsa.gov.cn
# 但能用具体站点关键词 + 年月日 串把结果导向新文章
_yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
_today = datetime.now().strftime("%Y-%m-%d")
_month_short = datetime.now().strftime("%Y年%-m月")  # 中文月

CN_QUERIES = [
    f"中国航天 发射 完成 {_yesterday} {_today} 长征 神舟 天舟 天龙 朱雀",  # 5条最热
    f"千帆星座 垣信卫星 {_yesterday} {_today} 发射 部署",  # 国网 + 千帆
    f"嫦娥 天问 探月 火星 {_yesterday} {_today} 进展",  # 重大科学
    f"商业航天 融资 政策 商业火箭 {_month_short}",  # 商业动态
]

# 国际搜索关键词（D 方案：日期硬锚 + 砍量到 5 条 = 110s 预算）
# 历史经验：合并相近主题避免返回高度重叠的结果
INTL_QUERIES = [
    f"SpaceX Starlink launch {_yesterday} {_today} Falcon 9",
    f"NASA mission news {_yesterday} {_today} Artemis ISS",
    f"Rocket Lab Blue Origin ULA launch {_yesterday} {_today}",
    f"ISRO JAXA mission {_yesterday} {_today} launch",  # 亚洲双印 + 日
    f"exoplanet black hole JWST discovery {_yesterday} {_today}",  # 学科
]

MAX_SEARCH_WORKERS = 5
SEARCH_TIMEOUT = 45
CHAT_TIMEOUT = 60

# 只关注最近 N 天的新闻（cron 场景）
CUTOFF_DAYS = 3

# 允许的 category 集合（v2 扩展：覆盖 2026-06 实际活跃机构）
# D 方案：原 12 个太窄，缺 isro/jaxa/kasa/arianespace/ula/vulcan/
# axiom/vast/starship-test/exoplanet/blackhole/gravitational-wave/
# solar/space-telescope/mars/moon/meteor/cluster 等实际近期热点
ALLOWED_CATEGORIES = {
    # 国家/机构
    "china", "nasa", "esa", "isro", "jaxa", "kasa", "roscosmos", "cnes", "uae",
    # 公司
    "spacex", "rocket-lab", "blue-origin", "ula", "arianespace", "axiom", "vast",
    "firefly", "relativity", "stoke-space", "ispace", "k2", "cas-space", "galactic-energy",
    "landspace", "space-pioneer", "orientspace", "deep-blue-aerospace", "link-space",
    # 项目
    "artemis", "iss", "tiangong", "gateway", "starship-test", "starlink", "qianfan",
    "guowang", "beidou",
    # 学科
    "exoplanet", "blackhole", "gravitational-wave", "space-telescope", "mars",
    "moon", "solar", "meteor", "cluster", "asteroid",
    # 通用
    "launch", "commercial", "science", "policy", "funding",
}

# ============================================================================
# HTTP / API
# ============================================================================

def _minimax_post(payload: dict, timeout: int = 45) -> Optional[dict]:
    """调用 MiniMax chat completions API，返回完整 JSON dict。"""
    if not MINIMAX_KEY:
        print("ERROR: MINIMAX_API_KEY not set", file=LOG)
        return None

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        f"{MINIMAX_BASE}/v1/chat/completions",
        data=data,
        headers={
            "Authorization": f"Bearer {MINIMAX_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")[:500]
        print(f"MiniMax HTTP {e.code}: {body}", file=LOG)
        return None
    except Exception as exc:
        print(f"MiniMax API error: {exc}", file=LOG)
        return None


def minimax_search(query: str, limit: int = 5) -> List[Dict]:
    """调用 MiniMax web_search tool，返回搜索结果列表。"""
    payload = {
        "model": SEARCH_MODEL,
        "messages": [{"role": "user", "content": query}],
        "tools": [{"type": "web_search", "function": {"name": "web_search"}}],
        "temperature": 0.1,
    }
    raw = _minimax_post(payload, timeout=SEARCH_TIMEOUT)
    if not raw:
        return []

    results = []
    for choice in raw.get("choices", []):
        for msg in choice.get("messages", []):
            if msg.get("role") != "tool":
                continue
            content = msg.get("content", "")
            if not content:
                continue
            try:
                items = json.loads(content)
                if not isinstance(items, list):
                    continue
                for item in items:
                    if isinstance(item, dict):
                        results.append({
                            "title": item.get("title", ""),
                            "url": item.get("url", ""),
                            "description": item.get("content", ""),
                        })
            except json.JSONDecodeError:
                continue

    return results[:limit]


def minimax_chat(messages: List[Dict], temperature: float = 0.3, timeout: int = 60) -> Optional[str]:
    """调用 MiniMax chat completions（纯文本），返回 assistant content。"""
    payload = {
        "model": CHAT_MODEL,
        "messages": messages,
        "temperature": temperature,
    }
    raw = _minimax_post(payload, timeout=timeout)
    if not raw:
        return None

    for choice in raw.get("choices", []):
        msg = choice.get("message", {})
        content = msg.get("content", "")
        if content:
            return content
    return None


# ============================================================================
# 搜索
# ============================================================================

def search_all() -> List[Dict]:
    """并行搜索所有关键词，合并去重结果。"""
    all_queries = CN_QUERIES + INTL_QUERIES
    all_results: List[Dict] = []

    def _search_one(query: str) -> Tuple[str, List[Dict]]:
        try:
            items = minimax_search(query)
            return query, items
        except Exception as exc:
            return query, []

    with ThreadPoolExecutor(max_workers=MAX_SEARCH_WORKERS) as executor:
        futures = {executor.submit(_search_one, q): q for q in all_queries}
        for future in as_completed(futures):
            q, items = future.result()
            all_results.extend(items)
            print(f"  [{len(items):>2}] {q[:60]}", file=LOG)

    # 按 URL 去重
    seen_urls = set()
    deduped = []
    for r in all_results:
        url = r.get("url", "").strip()
        if url and url not in seen_urls:
            seen_urls.add(url)
            deduped.append(r)

    return deduped


# ============================================================================
# 去重：加载已有稿件
# ============================================================================

def load_existing_recent(cutoff_days: int = CUTOFF_DAYS) -> Tuple[set, set, set, List[Dict]]:
    """加载最近 cutoff_days 天内所有月份的已有稿件（跨月去重）。

    D 方案：除了 url/title/slug，还返回每篇稿件的元数据列表（包含
    frontmatter date / category / 事件 fingerprint），用于在 select_articles
    里做"同事件重复"去重（仅 URL 比对挡不住 6/5 SpaceX IPO 完整稿
    跟 6/11 IPO 谣言翻版）。
    """
    urls = set()
    titles = set()
    slugs = set()
    metas: List[Dict] = []  # [{date, category, fingerprints: set[str], title_zh, title_en}]

    now = datetime.now()
    # 扫描最近 2 个月的所有目录（覆盖跨月边界）
    months_to_scan = []
    for offset in range(0, 2):
        d = now - timedelta(days=offset * 30)
        months_to_scan.append((d.year, d.month))
    # 去重
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

                # 提取 slug（从文件名）
                m = re.match(r"\d{4}-\d{2}-\d{2}-(.+)\.md$", md.name)
                if m:
                    slugs.add(m.group(1))

                # 提取 frontmatter
                fm = re.search(r"^---\n(.*?)\n---", content, re.DOTALL)
                fm_text = fm.group(1) if fm else ""
                title_zh = title_en = ""
                date_str = ""
                category = ""
                if fm:
                    title_m = re.search(r'^title:\s*["\']?(.*?)["\']?$', fm_text, re.MULTILINE)
                    if title_m:
                        title_zh = title_m.group(1).strip()  # zh + en 文件分别存
                        titles.add(title_zh)
                    date_m = re.search(r'^date:\s*(\d{4}-\d{2}-\d{2})', fm_text, re.MULTILINE)
                    if date_m:
                        date_str = date_m.group(1)
                    cat_m = re.search(r'^category:\s*["\']?(\S+)', fm_text, re.MULTILINE)
                    if cat_m:
                        category = cat_m.group(1).strip().strip('"\'')

                # 提取 sources URL
                for line in content.split("\n"):
                    for url_m in re.finditer(r"\((https?://[^\)]+)\)", line):
                        urls.add(url_m.group(1).strip())

                # D 方案：从 title + slug 提"事件 fingerprint"
                # 取核心实体关键词（小写、去标点），用于跨语言同事件识别
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


# 事件 fingerprint 提取用的停用词（高频但无语义）
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
    """从 title/slug 提'事件 fingerprint'（核心实体词集合）。

    规则：保留长度 ≥ 4 的英文 token + 长度 ≥ 2 的中文 token + 关键数字串，
    过滤停用词。同一事件（如 'spacex-ipo-spcx' 跟
    'spacex-sb-amti-contract'）的 fingerprint 集合会有显著重叠
    （都含 'spacex'、'spcx'、'ipo' 之类）。

    D 方案 v2：增加数字 token 提取（135, 1.77, 750 等关键数字）。
    理由：135 美元 / 1.77T / 750 亿这种"关键数字组合"是同事件最强
    指纹之一，仅靠英文/中文实体词会漏掉（数字不在 [a-z] 字符类）。
    """
    text_lower = text.lower()
    # 先去掉日期串（避免 2026-06-12 被切成 2026/06/12 三个 fingerprint）
    # 匹配 YYYY-MM-DD 或 YYYY 年 M 月 D 日
    text_no_dates = re.sub(r"\d{4}[-/]\d{1,2}[-/]\d{1,2}", " ", text_lower)
    text_no_dates = re.sub(r"\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日", " ", text_no_dates)
    # 英文 token
    en_tokens = re.findall(r"[a-z][a-z0-9-]{3,}", text_no_dates)
    # 中文 token（连续 2+ 个汉字）
    zh_tokens = re.findall(r"[\u4e00-\u9fff]{2,}", text)
    # 关键数字串（1.77, 135, 750, 1.1, 1296 等，≥ 2 位数 + 允许 1 位小数）
    # 限制：必须是 ≥ 2 位连续数字（避免命中无意义单数字）
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
    """判断新候选事件是否与已有稿件（cutoff_days 内）'同事件'。

    D 方案 v3：仅 URL 去重挡不住不同来源报道同一事件。
    判定：fingerprint 集合交集 ≥ 3 个核心词 → 视为同事件 → skip。

    历史教训：
    v1：category 严格相等预筛导致漏拦（6/5 commercial vs 6/11 funding）
    v1.5：slug 改了就不拦 → 同一事件改个日期 slug 即可绕过
    v2：去掉 category 预筛 + 提高阈值到 3 + 强信号词组合
    v3：cutoff_days 默认 8。理由：cron 跑在 14:18 UTC(6/12)，cutoff=7
    = 6/5 14:18 之前。但已发布的 6/5 稿 date=6/5 00:00（北京时间换算后
    早于该时刻）→ 被错误排除。8 天能确保覆盖 7 天前整日。
    """
    if not new_fps:
        return False
    cutoff_date = datetime.now() - timedelta(days=cutoff_days)
    # 强信号词组合：这些词在两个不同事件里都出现概率极低
    # 例：{135, 1.77, spcx, nasdaq, 挂牌, 上市, 估值} 同时出现
    # 大概率是"SpaceX IPO 定价/挂牌" 这同一事件链
    strong_combos = [
        {"spcx", "nasdaq"},       # SpaceX IPO 交易所 + 代码
        {"spcx", "trillion"},     # SpaceX IPO 估值
        {"135", "trillion"},      # 135 美元 1.77T
        {"135", "nasdaq"},
        {"挂牌", "nasdaq"},       # 中文"挂牌" + 英文"nasdaq"
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
        # 强信号词组合：两个组合词组都命中 → 必拦
        for combo in strong_combos:
            if combo.issubset(new_fps) and combo.issubset(existing_fps):
                return True
    return False


# ============================================================================
# 筛选：LLM 判断哪些值得写
# ============================================================================

def select_articles(results: List[Dict], existing_urls: set, existing_titles: set,
                    existing_slugs: set, existing_metas: List[Dict],
                    cutoff_days: int = CUTOFF_DAYS) -> List[Dict]:
    """用一次 LLM 调用筛选值得写的新闻。返回文章元数据列表。

    D 方案改动：
    - 接 existing_metas 做强去重（fingerprint 交集 ≥ 2 → skip）
    - 把 category 校验从 12 个扩到 ALLOWED_CATEGORIES
    - prompt 强调"完成信号"判断（动词 + 具体日期）而非 LLM 自由发挥
    - 返回前再做 date 硬过滤（即便 LLM 看错 description）
    """
    if not results:
        return []

    # 先简单过滤掉 URL 已存在的
    filtered = [r for r in results if r.get("url", "").strip() not in existing_urls]
    if not filtered:
        return []

    # 只取前 15 条传给 LLM，避免上下文过长 + 超时
    candidates = filtered[:15]

    # existing_titles 限到 20 条，省 token；同类（同 slug 前缀）合并
    existing_titles_text = "\n".join(f"- {t}" for t in sorted(existing_titles)[:20])
    candidates_text = "\n".join(
        f"{i+1}. 标题: {r['title']}\n   URL: {r['url']}\n   摘要: {r['description'][:200]}"
        for i, r in enumerate(candidates)
    )

    today_str = datetime.now().strftime("%Y-%m-%d")
    cutoff_str = (datetime.now() - timedelta(days=cutoff_days)).strftime("%Y-%m-%d")

    # 列出所有合法 category，避免 LLM 自由发挥成 brand cruft
    categories_doc = ", ".join(sorted(ALLOWED_CATEGORIES))

    # D 方案：prompt 改写 "完成信号" 规则，基于 description 里的具体动作词+日期
    # 历史教训：让 LLM 自由判断"是否新"会导致 cutoff_days 形同虚设
    prompt = f"""你是一位资深航天新闻编辑。请从以下搜索结果中，筛选出 **{cutoff_str} 到 {today_str}** 之间值得单独成稿的航天新闻。

## 已有稿件（同一事件不要重复写）
{existing_titles_text}

## 候选新闻
{candidates_text}

## 筛选规则（严格）
1. 【时间硬约束】只选日期在 {cutoff_str} 之后的新闻。早于 {cutoff_str} 的绝对跳过。看摘要里的具体日期串（如 "June 11, 2026" / "2026年6月11日" / 任何 YYYY-MM-DD / YYYY 年 M 月 D 日 格式）做判断。
2. 【完成信号】必须满足下列至少一项才算"已发生"：
   - 英文：lifts off / launched / launches successfully / launch failure / lands / completes / confirms / announces / reveals / detected / signs / closes funding / files S-1 / IPO / wins contract
   - 中文：发射成功 / 抵达 / 成功 / 失败 / 宣布 / 公布 / 签约 / 完成 / 突破 / 检测到 / 着陆
   - 跳过：to launch / targets / scheduled for / will / plans to / watch guide / how to / gallery / photos / what to know
3. 可写：重大任务里程碑、发射完成结果、官方政策/预算、商业航天关键融资/合同、重要空间科学发现
4. 跳过：预发射观礼指南、to launch / targets / scheduled for 且无完成信号、gallery/照片汇编、娱乐/购物/podcast、军事ICBM试射
5. 同一事件已有稿时跳过；Starlink等高频常规发射合并，不逐条写
6. 每篇至少一条可引用原文URL，优先官方/权威来源（新华社、NASA、ESA、SpaceX、SFN、Space.com、CNSA、CMSA），避免聚合站（百度百科 / so.html5.qq.com / caifuhao.eastmoney / 网易订阅）
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
  "date": "YYYY-MM-DD（必须是摘要里出现的具体日期，{cutoff_str} 到 {today_str} 之间）",
  "summary_zh": "中文一句话摘要（含具体事件 + 日期 + 关键数字）",
  "summary_en": "英文一句话摘要（含具体事件 + 日期 + 关键数字）",
  "source_url": "来源URL（必须是候选里出现的）",
  "source_name": "来源名称"
}}

只输出 JSON 数组，不要其他文字、不要 markdown 包装。"""

    # 120s 超时（之前 90s 经常撞 MiniMax read timeout）
    response = minimax_chat([{"role": "user", "content": prompt}], temperature=0.2, timeout=120)
    if not response:
        return []

    # 提取 JSON
    json_str = response
    m = re.search(r"```(?:json)?\s*([\s\S]*?)\s*```", response)
    if m:
        json_str = m.group(1)
    # 去掉可能的 markdown 包装
    json_str = json_str.strip()
    if json_str.startswith("[") and json_str.endswith("]"):
        pass
    else:
        # 尝试找到数组边界
        start = json_str.find("[")
        end = json_str.rfind("]")
        if start != -1 and end != -1:
            json_str = json_str[start:end+1]

    try:
        articles = json.loads(json_str)
    except Exception as e:
        print(f"Failed to parse LLM JSON: {e}\nRaw:\n{response[:800]}", file=LOG)
        return []

    if not isinstance(articles, list):
        return []

    # 验证和清理（D 方案：多层防御）
    cutoff_date = datetime.now() - timedelta(days=cutoff_days)
    valid = []
    for a in articles:
        if not isinstance(a, dict):
            continue
        slug = a.get("slug", "").strip()
        # slug 合法性检查
        slug = re.sub(r"[^a-zA-Z0-9-]", "", slug).lower()
        if not slug or len(slug) < 3:
            continue
        if slug in existing_slugs:
            print(f"  SKIP duplicate slug: {slug}", file=LOG)
            continue

        # D 方案：category 必须从 ALLOWED_CATEGORIES 里选，未知则降级到最相近的
        cat = a.get("category", "launch").lower().strip()
        if cat not in ALLOWED_CATEGORIES:
            # 模糊匹配：找包含子串的合法 category
            matched = None
            for c in ALLOWED_CATEGORIES:
                if c in cat or cat in c:
                    matched = c
                    break
            cat = matched or "launch"
        a["category"] = cat

        # D 方案：date 硬过滤 + date 格式校验
        date_str = a.get("date", "").strip()
        if not re.match(r"\d{4}-\d{2}-\d{2}$", date_str):
            a["date"] = datetime.now().strftime("%Y-%m-%d")
            date_str = a["date"]
        try:
            article_date = datetime.strptime(date_str, "%Y-%m-%d")
            if article_date < cutoff_date:
                print(f"  SKIP outdated ({date_str} < cutoff): {slug}", file=LOG)
                continue
        except ValueError:
            a["date"] = datetime.now().strftime("%Y-%m-%d")

        # D 方案：fingerprint 强去重（同 category + cutoff 内 + 交集 ≥ 2）
        slug_for_fp = a.get("slug", "") + " " + a.get("title_en", "") + " " + a.get("title_zh", "")
        fps = _extract_event_fingerprints(slug_for_fp)
        if fps and _is_duplicate_event(fps, existing_metas, cat, cutoff_days=8):
            print(f"  SKIP duplicate event (fingerprint): {slug}", file=LOG)
            continue

        valid.append(a)

    return valid


# ============================================================================
# 写稿：LLM 生成中英双语
# ============================================================================

def draft_article(meta: Dict) -> Tuple[Optional[str], Optional[str]]:
    """调用 LLM 生成中英双语稿件。"""
    date = meta["date"]
    year, month = date[:4], date[5:7]
    slug = meta["slug"]

    prompt = f"""请为以下航天新闻撰写中英双语稿件。

## 事件信息
- 中文标题：{meta['title_zh']}
- 英文标题：{meta['title_en']}
- 日期：{date}
- 分类：{meta['category']}
- 来源URL：{meta['source_url']}
- 来源名称：{meta['source_name']}
- 中文摘要：{meta['summary_zh']}
- 英文摘要：{meta['summary_en']}

## 格式要求

=== 中文稿开始 ===
---
layout: SpaceNewsArticle
title: "{meta['title_zh']}"
description: "{meta['summary_zh']}"
permalink: /space-news/{year}/{month}/{date}-{slug}/
author: 天疆说
date: {date}
lastUpdated: {date}
category: {meta['category']}
---

# {meta['title_zh']}

**摘要：** {meta['summary_zh']}

（请在这里展开正文，2-4段，包含关键事实、数据、时间。不确定的信息写「据报道」「待机构确认」，不要编造。）

## 信息来源（原文）

- [{meta['source_name']}]({meta['source_url']})
=== 中文稿结束 ===

=== 英文稿开始 ===
---
layout: SpaceNewsArticle
title: "{meta['title_en']}"
description: "{meta['summary_en']}"
permalink: /en/space-news/{year}/{month}/{date}-{slug}/
author: Tianjiangshuo
date: {date}
lastUpdated: {date}
category: {meta['category']}
---

# {meta['title_en']}

**Summary:** {meta['summary_en']}

（请在这里展开英文正文，2-4段，与中文稿事实对等，不要少于中文稿的信息量。）

## Sources (original pages)

- [{meta['source_name']}]({meta['source_url']})
=== 英文稿结束 ===

请严格按照 === 标记的边界输出，不要输出其他内容。"""

    response = minimax_chat([{"role": "user", "content": prompt}], temperature=0.4, timeout=120)
    if not response:
        return None, None

    zh_m = re.search(r"=== 中文稿开始 ===\s*(.*?)\s*=== 中文稿结束 ===", response, re.DOTALL)
    en_m = re.search(r"=== 英文稿开始 ===\s*(.*?)\s*=== 英文稿结束 ===", response, re.DOTALL)

    zh = zh_m.group(1).strip() if zh_m else None
    en = en_m.group(1).strip() if en_m else None

    # 如果正则没匹配到，尝试直接分割
    if not zh and not en:
        # 可能是模型没按格式输出，尝试整体作为中文稿
        print(f"  WARN: format mismatch for {slug}, using raw response as zh", file=LOG)
        zh = response.strip()
        en = None

    return zh, en


# ============================================================================
# 落盘
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
# 更新 README
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

        # 更新 lastUpdated
        today = datetime.now().strftime("%Y-%m-%d")
        content = re.sub(
            r"^lastUpdated:\s*\d{4}-\d{2}-\d{2}$",
            f"lastUpdated: {today}",
            content,
            flags=re.MULTILINE,
        )

        # 构建新表格行（最新的放最前面）
        new_lines = []
        for a in articles:
            day = int(a["date"][8:10])
            date_short = f"{int(month)}-{day:02d}"
            slug = a["slug"]
            title = a["title_en"] if is_en else a["title_zh"]
            link = f"./{a['date']}-{slug}/"
            new_lines.append(f"| {date_short} | [{title}]({link}) |")

        if new_lines:
            content = _insert_after_table_header(content, new_lines)

        readme_path.write_text(content, encoding="utf-8")
        print(f"  Updated README: {readme_path}", file=LOG)


def update_readme(articles: List[Dict]) -> None:
    """按文章实际月份分组更新 README。"""
    # 按 (year, month) 分组
    grouped: Dict[Tuple[int, int], List[Dict]] = {}
    for a in articles:
        d = a["date"]
        key = (int(d[:4]), int(d[5:7]))
        grouped.setdefault(key, []).append(a)

    for (year, month), group in grouped.items():
        update_readme_for_month(year, month, group)


def _is_chinese_event(article: Dict) -> bool:
    """判断一篇文章是否属"中国航天"事件。

    D 方案：CN 30% 后置校验里要用。
    判定规则：category 含 china / tiangong / qianfan / guowang / beidou / 商业火箭
    系列名 之一，或 title 包含中文字符且 source_url 是中文域名。
    """
    cat = article.get("category", "").lower()
    if any(k in cat for k in ("china", "tiangong", "qianfan", "guowang", "beidou",
                                "landspace", "galactic-energy", "cas-space",
                                "space-pioneer", "orientspace", "deep-blue", "link-space",
                                "ispace", "k2", "firefly")):
        return True
    title = (article.get("title_zh", "") or article.get("title_en", ""))
    if re.search(r"[\u4e00-\u9fff]", title):
        return True
    url = article.get("source_url", "")
    cn_domains = (".cn", ".com.cn", "qq.com", "weibo.com", "163.com", "sohu.com",
                  "thepaper.cn", "sina.com", "ifeng.com", "people.com.cn", "xinhuanet")
    return any(d in url for d in cn_domains)


def _search_cn_only() -> List[Dict]:
    """只跑中文 query。给 CN 30% 后置校验用。

    D 方案：补检阶段只用 CN_QUERIES，不浪费 INTL 配额。
    复用 search_all 的并行 + 去重逻辑。
    """
    all_results: List[Dict] = []

    def _search_one(query: str) -> Tuple[str, List[Dict]]:
        try:
            items = minimax_search(query)
            return query, items
        except Exception:
            return query, []

    with ThreadPoolExecutor(max_workers=MAX_SEARCH_WORKERS) as executor:
        futures = {executor.submit(_search_one, q): q for q in CN_QUERIES}
        for future in as_completed(futures):
            q, items = future.result()
            all_results.extend(items)
            print(f"  [CN+ {len(items):>2}] {q[:60]}", file=LOG)

    seen_urls = set()
    deduped = []
    for r in all_results:
        url = r.get("url", "").strip()
        if url and url not in seen_urls:
            seen_urls.add(url)
            deduped.append(r)
    return deduped


# ============================================================================
# 主流程
# ============================================================================

def main() -> int:
    if not MINIMAX_KEY:
        print("ERROR: MINIMAX_API_KEY or MINIMAX_CN_API_KEY must be set", file=LOG)
        return 1

    now = datetime.now()
    year, month = now.year, now.month

    print(f"[{now.isoformat()}] Space News Phase 1 start", file=LOG)

    # 1. 并行搜索
    print(f"  Searching {len(CN_QUERIES)} CN + {len(INTL_QUERIES)} INTL queries...", file=LOG)
    results = search_all()
    print(f"  -> {len(results)} unique results", file=LOG)

    # 2. 加载已有稿件（跨月去重）
    existing_urls, existing_titles, existing_slugs, existing_metas = load_existing_recent()
    print(f"  Existing: {len(existing_urls)} URLs, {len(existing_titles)} titles, {len(existing_slugs)} slugs, {len(existing_metas)} metas", file=LOG)

    # 3. LLM 筛选
    articles = select_articles(results, existing_urls, existing_titles, existing_slugs, existing_metas)
    if not articles:
        print("[SILENT]")
        print(f"[{datetime.now().isoformat()}] No newsworthy articles found.", file=LOG)
        return 0

    # D 方案：CN 30% 后置校验。
    # 如果 LLM 没出或只出少量中文稿（< 30%），用剩下的时间预算再跑一次
    # 中文 query 抓候选 → 重新 select。
    cn_count = sum(1 for a in articles if _is_chinese_event(a))
    total = len(articles)
    if total > 0 and cn_count / total < 0.3:
        print(f"  CN ratio low ({cn_count}/{total} = {cn_count/total:.0%}), running CN supplement pass...", file=LOG)
        try:
            cn_results = _search_cn_only()
            print(f"  -> CN supplement: {len(cn_results)} unique results", file=LOG)
            supplement = select_articles(cn_results, existing_urls, existing_titles,
                                          existing_slugs, existing_metas)
            # 把补检到的中文章追加，限制总产出 ≤ 5 篇（避免膨胀）
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

    # 4. 写稿 + 落盘
    saved = []
    for meta in articles:
        print(f"  Drafting {meta['slug']}...", file=LOG)
        zh, en = draft_article(meta)
        if zh and en:
            if save_article(zh, en, meta["slug"], meta["date"]):
                saved.append(meta)
        else:
            print(f"  FAILED to draft {meta['slug']} (zh={zh is not None}, en={en is not None})", file=LOG)

    # 5. 更新 README（按文章实际月份分组）
    if saved:
        update_readme(saved)

    # 输出结果到 stdout（供 shell 脚本捕获）
    print(f"Done. Added {len(saved)}/{len(articles)} articles.")
    for a in saved:
        print(f"  + {a['date']}-{a['slug']}: {a['title_zh']}")

    print(f"[{datetime.now().isoformat()}] Phase 1 finish", file=LOG)
    return 0


if __name__ == "__main__":
    sys.exit(main())
