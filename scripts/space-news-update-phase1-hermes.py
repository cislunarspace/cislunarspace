#!/usr/bin/env python3
"""
Space News Phase 1 (Hermes) — Python 只负责去重 + 落盘 + README。
搜索/筛选/写稿全部委托给 Hermes Agent v0.16.0 via `hermes chat -q -t web`。

用法:
    python3 scripts/space-news-update-phase1-hermes.py

环境变量:
    SKIP_PHASE1=1   — 跳过整个 phase 1（保留旧 SKIP_HERMES 别名）
    无需 MINIMAX_API_KEY（hermes 自己管理凭证于 ~/.hermes/.env）

失败模式：hermes 任何错误/超时/空结果 → [SILENT] 退出，**不回退**到 MiniMax 直连。
"""

import concurrent.futures
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

# ============================================================================
# 常量
# ============================================================================

REPO = Path("/home/ouyangjiahong/codes/cislunarspace")
WEB = REPO / "web"
LOG = sys.stderr

# Hermes 适配
HERMES_BIN = shutil.which("hermes") or "hermes"  # PATH miss 时 fallback 字符串
HERMES_MODEL = "MiniMax-M3"        # MiniMax-Text-01 被 API 拒（>40000 tokens 上限）
HERMES_MAX_TURNS = "3"             # search/select 都给 3 turns
HERMES_DRAFT_MAX_TURNS = "2"       # draft 给 2 turns
HERMES_TIMEOUT_SEARCH = 180        # 实测 120s，留 50% 余量
HERMES_TIMEOUT_SELECT = 180        # 1 次 LLM 调用
HERMES_TIMEOUT_DRAFT = 240         # 1 篇文章
HERMES_SEARCH_WORKERS = 9          # 9 query 真并行
CUTOFF_DAYS = 3

# ============================================================================
# 查询关键词（与 phase1.py 完全一致）
# ============================================================================

_yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
_today = datetime.now().strftime("%Y-%m-%d")
_month_short = datetime.now().strftime("%Y年%-m月")

# 中文搜索关键词（D 方案：日期硬锚 + 砍量到 4 条）
CN_QUERIES = [
    f"中国航天 发射 完成 {_yesterday} {_today} 长征 神舟 天舟 天龙 朱雀",
    f"千帆星座 垣信卫星 {_yesterday} {_today} 发射 部署",
    f"嫦娥 天问 探月 火星 {_yesterday} {_today} 进展",
    f"商业航天 融资 政策 商业火箭 {_month_short}",
]

# 国际搜索关键词（D 方案：日期硬锚 + 砍量到 5 条）
INTL_QUERIES = [
    f"SpaceX Starlink launch {_yesterday} {_today} Falcon 9",
    f"NASA mission news {_yesterday} {_today} Artemis ISS",
    f"Rocket Lab Blue Origin ULA launch {_yesterday} {_today}",
    f"ISRO JAXA mission {_yesterday} {_today} launch",
    f"exoplanet black hole JWST discovery {_yesterday} {_today}",
]

# ============================================================================
# ALLOWED_CATEGORIES（v2 扩展：覆盖 2026-06 实际活跃机构）
# ============================================================================

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
# Hermes 适配层
# ============================================================================

def _strip_session_id(text: str) -> str:
    """hermes -Q 模式 stdout 仍含 'session_id: <uuid>\n' 前缀 + 偶发 warning 行，需要剥掉。"""
    m = re.search(r"^session_id:\s*\S+", text, re.MULTILINE)
    if m:
        text = text[m.end():]
    # 干掉所有 warning 行（含 '⚠️ Reached maximum iterations...' 等）
    text = re.sub(r"^⚠️[^\n]*\n?", "", text, re.MULTILINE)
    return text.strip()


def hermes_chat_json(prompt: str, *, timeout: int,
                     max_turns: str = HERMES_MAX_TURNS) -> Optional[object]:
    """调 hermes chat -q，返回解析后的 JSON（dict 或 list）。失败返回 None。"""
    full_prompt = prompt + (
        "\n\n--- OUTPUT RULE ---\n"
        "Return ONLY the requested JSON. Start your response with { or [."
    )
    try:
        proc = subprocess.run(
            [HERMES_BIN, "chat", "-q", full_prompt,
             "-t", "web", "-m", HERMES_MODEL,
             "--max-turns", max_turns, "-Q"],
            capture_output=True, text=True,
            timeout=timeout, check=False,
        )
    except subprocess.TimeoutExpired:
        print(f"  HERMES TIMEOUT after {timeout}s", file=LOG)
        return None
    except FileNotFoundError:
        print(f"  FATAL: hermes not found at {HERMES_BIN}", file=LOG)
        return None

    if proc.returncode != 0:
        print(f"  HERMES rc={proc.returncode}: {proc.stderr[:300]}", file=LOG)
        return None

    out = _strip_session_id(proc.stdout)
    # 边界定位：取首个 { 或 [ 到末尾的 } 或 ]
    first_b, first_k = out.find("{"), out.find("[")
    starts = [i for i in (first_b, first_k) if i != -1]
    if not starts:
        print(f"  HERMES no JSON: {out[:200]}", file=LOG)
        return None
    end = max(out.rfind("}"), out.rfind("]"))
    if end <= min(starts):
        print(f"  HERMES truncated JSON: {out[:200]}", file=LOG)
        return None
    try:
        return json.loads(out[min(starts):end + 1])
    except json.JSONDecodeError as e:
        print(f"  HERMES JSON parse: {e}; raw[:200]={out[:200]}", file=LOG)
        return None


def hermes_chat_raw(prompt: str, *, timeout: int,
                    max_turns: str = HERMES_DRAFT_MAX_TURNS) -> Optional[str]:
    """draft 用 — 期望返回纯文本（含 === 标记），不解析 JSON。"""
    try:
        proc = subprocess.run(
            [HERMES_BIN, "chat", "-q", prompt,
             "-t", "web", "-m", HERMES_MODEL,
             "--max-turns", max_turns, "-Q"],
            capture_output=True, text=True,
            timeout=timeout, check=False,
        )
    except subprocess.TimeoutExpired:
        print(f"  HERMES DRAFT TIMEOUT after {timeout}s", file=LOG)
        return None
    if proc.returncode != 0:
        print(f"  HERMES DRAFT rc={proc.returncode}: {proc.stderr[:300]}", file=LOG)
        return None
    out = _strip_session_id(proc.stdout)
    return out if out else None


# ============================================================================
# 搜索
# ============================================================================

def search_query_hermes(query: str) -> List[Dict]:
    """单 query → hermes → 标准化结果列表。"""
    prompt = f"""Use web_search to find up to 5 most recent, newsworthy space-news articles for:

QUERY: {query}

Return a single JSON object with this exact schema:
{{
  "query": "<the original query>",
  "results": [
    {{
      "title": "<article title>",
      "url": "<canonical URL>",
      "description": "<1-2 sentences; include any visible date>",
      "date_iso": "<YYYY-MM-DD if visible, else empty string>",
      "source_name": "<publisher hostname or Chinese outlet name>"
    }}
  ]
}}

Rules:
- Only return articles from the last 7 days
- If no relevant results: {{"query": "...", "results": []}}
- Skip press kits, photo galleries, and how-to-watch guides
- Prefer primary sources (NASA, ESA, SpaceX, JAXA, ISRO, CNSA, CMSA, Reuters, AP, Xinhua)"""
    raw = hermes_chat_json(prompt, timeout=HERMES_TIMEOUT_SEARCH)
    if not isinstance(raw, dict):
        return []
    results = raw.get("results", [])
    if not isinstance(results, list):
        return []
    return [
        {"title": r.get("title", ""), "url": r.get("url", ""),
         "description": r.get("description", ""), "date_iso": r.get("date_iso", "")}
        for r in results if isinstance(r, dict)
    ]


def search_all_hermes() -> List[Dict]:
    """9 query 真并行 + URL 去重。"""
    all_queries = CN_QUERIES + INTL_QUERIES
    all_results: List[Dict] = []
    with ThreadPoolExecutor(max_workers=HERMES_SEARCH_WORKERS) as ex:
        futures = {ex.submit(search_query_hermes, q): q for q in all_queries}
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
            seen.add(url); deduped.append(r)
    return deduped


def _search_cn_only_hermes() -> List[Dict]:
    """CN 30% 后置校验用 — 只跑 CN queries。"""
    all_results: List[Dict] = []
    with ThreadPoolExecutor(max_workers=len(CN_QUERIES)) as ex:
        futures = {ex.submit(search_query_hermes, q): q for q in CN_QUERIES}
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
            seen.add(url); deduped.append(r)
    return deduped


# ============================================================================
# 加载已有稿件 + 去重（与 phase1.py 行为完全一致）
# ============================================================================

def load_existing_recent(cutoff_days: int = CUTOFF_DAYS) -> Tuple[set, set, set, List[Dict]]:
    """加载最近 cutoff_days 天内所有月份的已有稿件（跨月去重）。"""
    urls = set()
    titles = set()
    slugs = set()
    metas: List[Dict] = []

    now = datetime.now()
    # 扫描最近 2 个月的所有目录（覆盖跨月边界）
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

                # 提取 slug（从文件名）
                m = re.match(r"\d{4}-\d{2}-\d{2}-(.+)\.md$", md.name)
                if m:
                    slugs.add(m.group(1))

                # 提取 frontmatter
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

                # 提取 sources URL
                for line in content.split("\n"):
                    for url_m in re.finditer(r"\((https?://[^\)]+)\)", line):
                        urls.add(url_m.group(1).strip())

                # 从 title + slug 提"事件 fingerprint"
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
    """从 title/slug 提'事件 fingerprint'（核心实体词集合）。"""
    text_lower = text.lower()
    # 先去掉日期串（避免 2026-06-12 被切成 2026/06/12 三个 fingerprint）
    text_no_dates = re.sub(r"\d{4}[-/]\d{1,2}[-/]\d{1,2}", " ", text_lower)
    text_no_dates = re.sub(r"\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日", " ", text_no_dates)
    # 英文 token
    en_tokens = re.findall(r"[a-z][a-z0-9-]{3,}", text_no_dates)
    # 中文 token（连续 2+ 个汉字）
    zh_tokens = re.findall(r"[一-鿿]{2,}", text)
    # 关键数字串（≥ 2 位数 + 允许 1 位小数）
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
# 筛选
# ============================================================================

def select_articles_hermes(results: List[Dict], existing_urls: set,
                           existing_titles: set, existing_slugs: set,
                           existing_metas: List[Dict]) -> List[Dict]:
    """用 hermes 筛选值得写的新闻。返回文章元数据列表。"""
    if not results:
        return []

    # 先简单过滤掉 URL 已存在的
    filtered = [r for r in results if r.get("url", "").strip() not in existing_urls]
    if not filtered:
        return []

    # 只取前 15 条传给 LLM，避免上下文过长 + 超时
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
    response = hermes_chat_json(prompt, timeout=HERMES_TIMEOUT_SELECT)
    if not isinstance(response, list):
        print(f"  SELECT: hermes returned non-array: {str(response)[:200]}", file=LOG)
        return []

    # ===== post-validation（D-plan v3 多层防御） =====
    cutoff_date = datetime.now() - timedelta(days=CUTOFF_DAYS)
    valid = []
    for a in response:
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

        # category 必须从 ALLOWED_CATEGORIES 里选
        cat = a.get("category", "launch").lower().strip()
        if cat not in ALLOWED_CATEGORIES:
            matched = None
            for c in ALLOWED_CATEGORIES:
                if c in cat or cat in c:
                    matched = c
                    break
            cat = matched or "launch"
        a["category"] = cat

        # date 硬过滤 + date 格式校验
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

        # fingerprint 强去重
        slug_for_fp = a.get("slug", "") + " " + a.get("title_en", "") + " " + a.get("title_zh", "")
        fps = _extract_event_fingerprints(slug_for_fp)
        if fps and _is_duplicate_event(fps, existing_metas, cat, cutoff_days=8):
            print(f"  SKIP duplicate event (fingerprint): {slug}", file=LOG)
            continue

        valid.append(a)

    return valid


# ============================================================================
# 写稿
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
            .replace(":", "：")  # 英文冒号 → 中文全角冒号
            .strip())


def draft_article_hermes(meta: Dict) -> Tuple[Optional[str], Optional[str]]:
    """调 hermes 生成中英双语稿件。"""
    date = meta["date"]
    year, month = date[:4], date[5:7]
    slug = meta["slug"]

    # 兜底清洗一次
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
- **严禁**在 title / description / 摘要 / 正文标题 1 字段里出现任何形式的引号字符：双引号 " " " "、单引号 ' ' ' '，以及英文冒号 :
- 如果原文出现引号，统一去掉引号或换成中文标点（如「」或省略）
- 摘要正文（不是 frontmatter 字段）里如果需要引用术语，请用中文方括号【】或直接去除引号

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
    response_text = hermes_chat_raw(prompt, timeout=HERMES_TIMEOUT_DRAFT)
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
    # 兼容 SKIP_PHASE1=1
    if os.environ.get("SKIP_PHASE1") == "1":
        print("phase 1: SKIPPED (SKIP_PHASE1=1)", file=LOG)
        return 0

    # hermes 必须在 PATH 上
    if not shutil.which(HERMES_BIN):
        print(f"FATAL: hermes not on PATH (looked for {HERMES_BIN!r})", file=LOG)
        return 1

    now = datetime.now()

    print(f"[{now.isoformat()}] Space News Phase 1 (Hermes) start", file=LOG)

    # 1. 9 query 并行搜索
    print(f"  Searching {len(CN_QUERIES)} CN + {len(INTL_QUERIES)} INTL via hermes...", file=LOG)
    results = search_all_hermes()
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
    articles = select_articles_hermes(results, existing_urls, existing_titles,
                                       existing_slugs, existing_metas)
    if not articles:
        print("[SILENT]")
        print(f"[{datetime.now().isoformat()}] No newsworthy articles found.", file=LOG)
        return 0

    # 4. CN 30% 后置校验（D-plan v3）
    cn_count = sum(1 for a in articles if _is_chinese_event(a))
    total = len(articles)
    if total > 0 and cn_count / total < 0.3:
        print(f"  CN ratio low ({cn_count}/{total} = {cn_count/total:.0%}), "
              f"running CN supplement pass...", file=LOG)
        try:
            cn_results = _search_cn_only_hermes()
            print(f"  -> CN supplement: {len(cn_results)} unique results", file=LOG)
            supplement = select_articles_hermes(cn_results, existing_urls, existing_titles,
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
        zh, en = draft_article_hermes(meta)
        if zh and en:
            if save_article(zh, en, meta["slug"], meta["date"]):
                saved.append(meta)
        else:
            print(f"  FAILED to draft {meta['slug']} (zh={zh is not None}, en={en is not None})", file=LOG)

    # 6. 更新 README
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
