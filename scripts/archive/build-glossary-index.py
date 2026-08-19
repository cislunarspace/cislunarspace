#!/usr/bin/env python3
"""
生成 web/glossary/README.md 索引页（按分类列出全部条目）。
"""
import re
import sys
from pathlib import Path

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

# 子分类中文名（slug 路径 → 显示名），未收录的子目录按 slug 原样显示
SUBCATEGORY_LABELS = {}


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


def collect_entries(dir_path):
    """收集一个目录下的直接词条（不递归），返回 [(slug, title)] 按标题排序"""
    items = []
    if not dir_path.exists():
        return items
    for md in sorted(dir_path.glob("*.md")):
        if md.name.lower() == "readme.md":
            continue
        items.append((md.stem, get_title(md)))
    return sorted(items, key=lambda x: x[1])


def main():
    # 收集每个分类的条目：根级条目 + 一层子目录（子分类）
    cat_items = {}
    for cat, _ in CATEGORIES:
        cat_dir = GLOSSARY_ZH / cat
        if not cat_dir.exists():
            continue
        root_items = collect_entries(cat_dir)
        subs = []
        for sub_dir in sorted(p for p in cat_dir.iterdir() if p.is_dir()):
            sub_items = collect_entries(sub_dir)
            if sub_items:
                subs.append((sub_dir.name, sub_items))
        cat_items[cat] = (root_items, subs)

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
        if cat not in cat_items:
            continue
        root_items, subs = cat_items[cat]
        count = len(root_items) + sum(len(items) for _, items in subs)
        if count == 0:
            continue
        total += count
        lines.append(f"### {cn_name}（{cat}，{count} 条）")
        lines.append("")
        for slug, title in root_items:
            lines.append(f"- [{title}](/glossary/{cat}/{slug}/)")
        if root_items:
            lines.append("")
        for sub, items in subs:
            sub_path = f"{cat}/{sub}"
            sub_label = SUBCATEGORY_LABELS.get(sub_path, sub)
            lines.append(f"#### {sub_label}（{sub_path}，{len(items)} 条）")
            lines.append("")
            for slug, title in items:
                lines.append(f"- [{title}](/glossary/{sub_path}/{slug}/)")
            lines.append("")

    lines.extend([
        f"## 统计",
        "",
        f"- 总计：{total} 个术语",
        f"- 分类：{sum(1 for c, _ in CATEGORIES if c in cat_items and (cat_items[c][0] or cat_items[c][1]))} 个",
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