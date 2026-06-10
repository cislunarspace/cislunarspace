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

# 中文搜索关键词（4轮，合并相近关键词减少调用数）
CN_QUERIES = [
    "长征 发射 2026 神舟 天宫 嫦娥 天问",
    "商业航天 发射 2026 朱雀 天龙 谷神星 力箭 双曲线 引力",
    "中国航天 最新消息 2026 北斗 导航卫星",
    "千帆星座 2026 国网星座 卫星互联网 中国",
]

# 国际搜索关键词
INTL_QUERIES = [
    "SpaceX launch June 2026",
    "NASA news June 2026",
    "ESA news June 2026",
    "Rocket Lab launch 2026",
    "Blue Origin New Glenn 2026",
    "Starlink launch June 2026",
    "Artemis program 2026",
    "Starship test 2026",
    "space science news June 2026",
    "commercial space funding 2026",
]

MAX_SEARCH_WORKERS = 5
SEARCH_TIMEOUT = 45
CHAT_TIMEOUT = 60

# 只关注最近 N 天的新闻（cron 场景）
CUTOFF_DAYS = 3

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

def load_existing_recent(cutoff_days: int = CUTOFF_DAYS) -> Tuple[set, set, set]:
    """加载最近 cutoff_days 天内所有月份的已有稿件（跨月去重）。"""
    urls = set()
    titles = set()
    slugs = set()

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

                # 提取 frontmatter title
                fm = re.search(r"^---\n(.*?)\n---", content, re.DOTALL)
                if fm:
                    title_m = re.search(r'^title:\s*["\']?(.*?)["\']?$', fm.group(1), re.MULTILINE)
                    if title_m:
                        titles.add(title_m.group(1).strip())

                # 提取 sources URL
                for line in content.split("\n"):
                    for url_m in re.finditer(r"\((https?://[^\)]+)\)", line):
                        urls.add(url_m.group(1).strip())

    return urls, titles, slugs


# ============================================================================
# 筛选：LLM 判断哪些值得写
# ============================================================================

def select_articles(results: List[Dict], existing_urls: set, existing_titles: set, existing_slugs: set, cutoff_days: int = CUTOFF_DAYS) -> List[Dict]:
    """用一次 LLM 调用筛选值得写的新闻。返回文章元数据列表。"""
    if not results:
        return []

    # 先简单过滤掉 URL 已存在的
    filtered = [r for r in results if r.get("url", "").strip() not in existing_urls]
    if not filtered:
        return []

    # 只取前 20 条传给 LLM，避免上下文过长
    candidates = filtered[:20]

    existing_titles_text = "\n".join(f"- {t}" for t in sorted(existing_titles)[:25])
    candidates_text = "\n".join(
        f"{i+1}. 标题: {r['title']}\n   URL: {r['url']}\n   摘要: {r['description'][:180]}"
        for i, r in enumerate(candidates)
    )

    today_str = datetime.now().strftime("%Y-%m-%d")
    cutoff_str = (datetime.now() - timedelta(days=cutoff_days)).strftime("%Y-%m-%d")

    prompt = f"""你是一位资深航天新闻编辑。请从以下搜索结果中，筛选出最近24-48小时内（即 {cutoff_str} 到 {today_str} 之间）值得单独成稿的航天新闻。

## 已有稿件（同一事件不要重复写）
{existing_titles_text}

## 候选新闻
{candidates_text}

## 筛选规则
1. 【时间硬约束】只选日期在 {cutoff_str} 之后的新闻。早于 {cutoff_str} 的绝对跳过。
2. 可写：重大任务里程碑、发射完成结果、官方政策/预算、商业航天关键融资/合同、重要空间科学发现
3. 跳过：预发射观礼指南、to launch / targets / scheduled for 且无完成信号、gallery/照片汇编、娱乐/购物/podcast、军事ICBM试射
4. 同一事件已有稿时跳过；Starlink等高频常规发射合并，不逐条写
5. 每篇至少一条可引用原文URL，优先官方/权威来源（新华社、NASA、ESA、SpaceX等），避免聚合站
6. 中国航天相关新闻占比目标不低于30%；不足时回到中文搜索补检
7. 无值得写的新闻时返回空数组 []

## 输出格式
请以 JSON 数组返回，每个元素包含：
{{
  "index": 候选序号（1-based）,
  "title_zh": "中文标题",
  "title_en": "英文标题",
  "slug": "简短英文slug，用-连接，不含日期",
  "category": "分类，如china/spacex/nasa/esa/launch/commercial/science/policy/rocket-lab/blue-origin/artemis/iss",
  "date": "YYYY-MM-DD",
  "summary_zh": "中文一句话摘要",
  "summary_en": "英文一句话摘要",
  "source_url": "来源URL",
  "source_name": "来源名称"
}}

只输出 JSON 数组，不要其他文字。"""

    response = minimax_chat([{"role": "user", "content": prompt}], temperature=0.2, timeout=90)
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

    # 验证和清理
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
        # 确保 category 合法
        cat = a.get("category", "launch").lower().strip()
        a["category"] = cat
        # 确保 date 格式，并做 cutoff 过滤
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
    existing_urls, existing_titles, existing_slugs = load_existing_recent()
    print(f"  Existing: {len(existing_urls)} URLs, {len(existing_titles)} titles, {len(existing_slugs)} slugs", file=LOG)

    # 3. LLM 筛选
    articles = select_articles(results, existing_urls, existing_titles, existing_slugs)
    if not articles:
        print("[SILENT]")
        print(f"[{datetime.now().isoformat()}] No newsworthy articles found.", file=LOG)
        return 0

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
