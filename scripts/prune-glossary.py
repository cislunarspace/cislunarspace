#!/usr/bin/env python3
"""
根据 e2m2e 相关性分析，删除弱相关/无关术语的 .md 文件，保留强相关术语。

用法：
    python3 scripts/prune-glossary.py
"""
import json
import re
import sys
from pathlib import Path
from collections import defaultdict

REPO = Path("/home/ouyangjiahong/codes/cislunarspace")
CLASS_FILE = REPO / "scripts/terms-classification.json"
ZH_DIR = REPO / "web/glossary"
EN_DIR = REPO / "web/en/glossary"
DRY_RUN = "--apply" not in sys.argv


def slug_normal(en, abbr=""):
    s = abbr or en
    s = s.lower()
    s = re.sub(r"[\s\-/]+", "-", s)
    s = re.sub(r"[^a-z0-9\-]", "", s)
    s = re.sub(r"-+", "-", s)
    return s.strip("-")[:100]


def main():
    data = json.loads(CLASS_FILE.read_text(encoding="utf-8"))

    # 收集弱相关+无关的 slug 集合（按 category + slug）
    to_delete = set()
    for category, terms in data["classified"].items():
        for term in terms:
            if term["strength"] in ("weak", "irrelevant"):
                slug = slug_normal(term["en"], term.get("abbr", ""))
                if slug:
                    to_delete.add((category, slug))

    print(f"待删除的术语数: {len(to_delete)}")

    # 统计
    to_delete_zh = 0
    to_delete_en = 0
    to_keep_zh = 0
    to_keep_en = 0

    for category, slug in to_delete:
        zh_path = ZH_DIR / category / f"{slug}.md"
        en_path = EN_DIR / category / f"{slug}.md"
        if zh_path.exists():
            to_delete_zh += 1
        if en_path.exists():
            to_delete_en += 1

    # 统计总数
    for md in ZH_DIR.rglob("*.md"):
        to_keep_zh += 1
    for md in EN_DIR.rglob("*.md"):
        to_keep_en += 1

    print(f"中文: 现有 {to_keep_zh} 个, 将删除 {to_delete_zh} 个, 保留 {to_keep_zh - to_delete_zh} 个")
    print(f"英文: 现有 {to_keep_en} 个, 将删除 {to_delete_en} 个, 保留 {to_keep_en - to_delete_en} 个")

    if DRY_RUN:
        print("\n这是 DRY RUN 模式（不加 --apply 不会真删除）")
        print("确认要删除请执行: python3 scripts/prune-glossary.py --apply")
        return

    # 实际删除
    deleted_zh = 0
    deleted_en = 0
    for category, slug in to_delete:
        zh_path = ZH_DIR / category / f"{slug}.md"
        en_path = EN_DIR / category / f"{slug}.md"
        if zh_path.exists():
            zh_path.unlink()
            deleted_zh += 1
        if en_path.exists():
            en_path.unlink()
            deleted_en += 1

    print(f"\n已删除中文: {deleted_zh}, 英文: {deleted_en}")

    # 最终统计
    final_zh = sum(1 for _ in ZH_DIR.rglob("*.md"))
    final_en = sum(1 for _ in EN_DIR.rglob("*.md"))
    print(f"最终: 中文 {final_zh}, 英文 {final_en}")


if __name__ == "__main__":
    main()