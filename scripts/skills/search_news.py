#!/usr/bin/env python3
"""
Space News Skills - 搜索新闻

用法：
    python3 scripts/skills/search_news.py --queries "query1" "query2" --cutoff-days 3

输出：
    JSON 格式的搜索结果
"""

import argparse
import json
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Dict, List

# 添加项目根目录到 Python 路径
REPO_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(REPO_ROOT))

# 导入现有模块
from scripts.space_news_update_phase1_hermes import (
    search_query_hermes,
    CN_QUERIES,
    INTL_QUERIES,
    HERMES_TIMEOUT_SEARCH,
    HERMES_SEARCH_WORKERS
)


def search_news(queries: List[str], cutoff_days: int = 3) -> Dict:
    """
    搜索新闻

    Args:
        queries: 搜索关键词列表
        cutoff_days: 时间窗口（天）

    Returns:
        搜索结果字典
    """
    all_results = []
    query_results = {}

    # 并行搜索
    with ThreadPoolExecutor(max_workers=HERMES_SEARCH_WORKERS) as executor:
        futures = {
            executor.submit(search_query_hermes, q): q
            for q in queries
        }

        for future in as_completed(futures):
            query = futures[future]
            try:
                items = future.result()
                query_results[query] = items
                all_results.extend(items)
            except Exception as e:
                query_results[query] = []
                print(f"  ERROR [{query[:40]}]: {e}", file=sys.stderr)

    # URL 去重
    seen = set()
    deduped = []
    for r in all_results:
        url = r.get("url", "").strip()
        if url and url not in seen:
            seen.add(url)
            deduped.append(r)

    return {
        "total_queries": len(queries),
        "total_results": len(all_results),
        "unique_results": len(deduped),
        "query_results": query_results,
        "results": deduped
    }


def main():
    parser = argparse.ArgumentParser(description="Space News Skills - 搜索新闻")
    parser.add_argument(
        "--queries",
        nargs="+",
        help="搜索关键词列表（默认使用内置关键词）"
    )
    parser.add_argument(
        "--cutoff-days",
        type=int,
        default=3,
        help="时间窗口（天，默认 3）"
    )
    parser.add_argument(
        "--cn-only",
        action="store_true",
        help="只搜索中文关键词"
    )
    parser.add_argument(
        "--intl-only",
        action="store_true",
        help="只搜索英文关键词"
    )

    args = parser.parse_args()

    # 确定搜索关键词
    if args.queries:
        queries = args.queries
    elif args.cn_only:
        queries = CN_QUERIES
    elif args.intl_only:
        queries = INTL_QUERIES
    else:
        queries = CN_QUERIES + INTL_QUERIES

    # 执行搜索
    result = search_news(queries, args.cutoff_days)

    # 输出 JSON
    print(json.dumps(result, ensure_ascii=False, indent=2))

    return 0


if __name__ == "__main__":
    sys.exit(main())
