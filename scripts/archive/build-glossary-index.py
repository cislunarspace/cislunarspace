#!/usr/bin/env python3
"""
生成 web/glossary/README.md 索引页（按分类列出全部条目）。
"""
import re
import sys
from pathlib import Path
from collections import defaultdict

REPO = Path("/home/ouyangjiahong/codes/cislunarspace")
GLOSSARY_ZH = REPO / "web/glossary"

CATEGORIES = [
    ("fundamentals", "基础概念"),
    ("dynamics", "动力学与数学基础"),
    ("orbits", "任务轨道"),
    ("navigation", "导航技术与系统"),
    ("observation", "天文观测技术"),
    ("doctrine", "军事太空条令"),
    ("organizations", "机构和组织"),
    ("communication", "通信"),
    ("programs", "计划与项目"),
    ("minerals", "矿物与资源"),
    ("other", "其他技术"),
]


def get_title(md_path):
    """读取 frontmatter 中的 title 字段"""
    try:
        content = md_path.read_text(encoding="utf-8")
        m = re.search(r"^---\s*\n(.+?)\n---", content, re.DOTALL)
        if m:
            for line in m.group(1).splitlines():
                if line.startswith("title:"):
                    return line.split(":", 1)[1].strip().strip("\"'")
        # fallback: 用第一行 # 标题
        for line in content.splitlines():
            if line.startswith("# "):
                return line[2:].strip()
    except Exception:
        pass
    return md_path.stem


def main():
    # 收集每个分类的条目
    cat_items = defaultdict(list)
    for cat, _ in CATEGORIES:
        cat_dir = GLOSSARY_ZH / cat
        if not cat_dir.exists():
            continue
        for md in sorted(cat_dir.glob("*.md")):
            if md.name.lower() == "readme.md":
                continue
            title = get_title(md)
            cat_items[cat].append((md.stem, title))

    # 生成 README
    lines = [
        "---",
        "permalink: /glossary/",
        "title: 地月空间术语词典",
        "description: 地月空间领域专业术语权威释义，覆盖动力学模型、任务轨道、导航制导、观测技术等核心概念。",
        "keywords: 地月空间术语, 词典, CR3BP, DRO, NRHO, 平动点, 导航, 观测, 军事太空, 通信",
        "author: 天疆说",
        "date: 2026-07-31",
        "lastUpdated: 2026-07-31",
        "wechatShare:",
        "  title: 地月空间术语词典",
        "  desc: 地月空间领域专业术语权威释义。",
        "  image: /logo.png",
        "og:",
        "  title: 地月空间术语词典",
        "  description: 地月空间领域专业术语权威释义",
        "  image: /logo.png",
        "  type: article",
        "twitter:",
        "  card: summary_large_image",
        "  title: 地月空间术语词典",
        "  description: 地月空间领域专业术语权威释义",
        "  image: /logo.png",
        "---",
        "",
        "> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)",
        ">",
        "> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)",
        "",
        "# 地月空间术语词典",
        "",
        "地月空间研究涉及轨道动力学、导航制导与控制、深空探测任务设计、空间环境建模等多个方向，相关术语具有明显的学科交叉特征。本词典收录从基础概念到前沿方向的术语，按分类列出，便于查阅。",
        "",
        "## 索引",
        "",
    ]

    total = 0
    for cat, cn_name in CATEGORIES:
        items = cat_items.get(cat, [])
        if not items:
            continue
        total += len(items)
        lines.append(f"### {cn_name}（{cat}，{len(items)} 条）")
        lines.append("")
        # 按中文标题排序
        items_sorted = sorted(items, key=lambda x: x[1])
        for slug, title in items_sorted:
            # 显示格式：标题（英文缩写）
            lines.append(f"- [{title}](/glossary/{cat}/{slug}/)")
        lines.append("")

    lines.extend([
        f"## 统计",
        "",
        f"- 总计：{total} 个术语",
        f"- 分类：{len([c for c in CATEGORIES if cat_items.get(c[0])])} 个",
        "",
        "## 说明",
        "",
        "- 本词典持续更新中，词条按主题分类组织。",
        "- 每个词条包含定义、应用价值、相关概念、参考文献等部分。",
        "- 中文与英文版同步维护。",
        "",
    ])

    out = REPO / "web/glossary/README.md"
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"已生成 {out}")
    print(f"总条目: {total}")


if __name__ == "__main__":
    main()