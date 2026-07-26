#!/usr/bin/env python3
"""
Space News Skills - 筛选新闻

用法：
    python3 scripts/skills/filter_news.py --candidates candidates.json --existing existing.json

输出：
    JSON 格式的筛选结果
"""

import argparse
import json
import sys
from pathlib import Path

# 添加项目根目录到 Python 路径
REPO_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(REPO_ROOT))

# 导入现有模块
from scripts.space_news_update_phase1_hermes import (
    select_articles_hermes,
    load_existing_recent,
    ALLOWED_CATEGORIES,
    CUTOFF_DAYS
)


def filter_news(
    candidates: list[dict],
    existing_urls: set,
    existing_titles: set,
    existing_slugs: set,
    existing_metas: list[dict],
    cutoff_days: int = CUTOFF_DAYS
) -> dict:
    """
    筛选新闻

    Args:
        candidates: 候选新闻列表
        existing_urls: 已有 URL
        existing_titles: 已有标题
        existing_slugs: 已有 slug
        existing_metas: 已有元数据
        cutoff_days: 时间窗口（天）

    Returns:
        筛选结果字典
    """
    # 调用现有的筛选函数
    articles = select_articles_hermes(
        candidates,
        existing_urls,
        existing_titles,
        existing_slugs,
        existing_metas
    )

    # 统计 CN 占比
    cn_count = sum(1 for a in articles if _is_chinese_event(a))
    total = len(articles)
    cn_ratio = cn_count / total if total > 0 else 0

    return {
        "total_candidates": len(candidates),
        "total_filtered": len(articles),
        "cn_count": cn_count,
        "cn_ratio": cn_ratio,
        "meets_cn_target": cn_ratio >= 0.3,
        "articles": articles
    }


def _is_chinese_event(article: dict) -> bool:
    """判断是否为中国航天事件"""
    cat = article.get("category", "").lower()
    if any(k in cat for k in ("china", "tiangong", "qianfan", "guowang", "beidou",
                                "landspace", "galactic-energy", "cas-space",
                                "space-pioneer", "orientspace", "deep-blue", "link-space",
                                "ispace", "k2", "firefly")):
        return True
    title = (article.get("title_zh", "") or article.get("title_en", ""))
    if any('一' <= c <= '鿿' for c in title):
        return True
    url = article.get("source_url", "")
    cn_domains = (".cn", ".com.cn", "qq.com", "weibo.com", "163.com", "sohu.com",
                  "thepaper.cn", "sina.com", "ifeng.com", "people.com.cn", "xinhuanet")
    return any(d in url for d in cn_domains)


def main():
    parser = argparse.ArgumentParser(description="Space News Skills - 筛选新闻")
    parser.add_argument(
        "--candidates",
        required=True,
        help="候选新闻 JSON 文件路径"
    )
    parser.add_argument(
        "--existing",
        help="已有稿件 JSON 文件路径（可选）"
    )
    parser.add_argument(
        "--cutoff-days",
        type=int,
        default=CUTOFF_DAYS,
        help=f"时间窗口（天，默认 {CUTOFF_DAYS}）"
    )

    args = parser.parse_args()

    # 加载候选新闻
    with open(args.candidates, 'r', encoding='utf-8') as f:
        candidates = json.load(f)

    # 加载已有稿件
    if args.existing:
        with open(args.existing, 'r', encoding='utf-8') as f:
            existing = json.load(f)
            existing_urls = set(existing.get("urls", []))
            existing_titles = set(existing.get("titles", []))
            existing_slugs = set(existing.get("slugs", []))
            existing_metas = existing.get("metas", [])
    else:
        # 从文件系统加载
        existing_urls, existing_titles, existing_slugs, existing_metas = load_existing_recent()

    # 执行筛选
    result = filter_news(
        candidates,
        existing_urls,
        existing_titles,
        existing_slugs,
        existing_metas,
        args.cutoff_days
    )

    # 输出 JSON
    print(json.dumps(result, ensure_ascii=False, indent=2))

    return 0


if __name__ == "__main__":
    sys.exit(main())
