# 构建失败快速修复

这些是**与新文章无关**的已有问题，构建失败时应首先检查。

## A. Image Extension Mismatch

**症状**：`[UNRESOLVED_IMPORT] Could not resolve './figures/.../hero.jpg'` 但 figures 目录中存在 `hero.png`。

**原因**：markdown body 中图片路径引用的扩展名与实际文件不符。

**修复**：

```bash
grep -n "hero\.jpg" web/space-news/YYYY/MM/YYYY-MM-DD-slug.md
# 如果文件引用 hero.jpg 但目录中是 hero.png，修改 markdown 中的引用
```

## B. Missing EN Figures Directory

**症状**：`[UNRESOLVED_IMPORT] Could not resolve './figures/.../hero.png' in en/space-news/...`

**原因**：英文稿的 `figures/` 目录不存在或为空（仅创建了中文 figures）。

**修复**：

```bash
mkdir -p web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
cp web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/hero.* \
   web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/
```

**预防**：创建新文章后，**立即**将中文 figures 目录复制到英文侧，再 commit。

## C. ZH vs EN Figures Sync（批量检测脚本）

检测并修复缺失的英文 figures 目录：

```python
import os, shutil
workdir = '/home/ouyangjiahong/codes/cislunarspace'
month = '04'
zh_figs = set(os.listdir(f'{workdir}/web/space-news/2026/{month}/figures/'))
en_figs = set(os.listdir(f'{workdir}/web/en/space-news/2026/{month}/figures/'))
missing_en = zh_figs - en_figs
for fig_dir in missing_en:
    src = f'{workdir}/web/space-news/2026/{month}/figures/{fig_dir}'
    dst = f'{workdir}/web/en/space-news/2026/{month}/figures/{fig_dir}'
    if os.path.isdir(src) and not os.path.exists(dst):
        shutil.copytree(src, dst)
        print(f"Copied EN figures: {fig_dir}")
```

## D. Cron Script Skips Build Steps（图片不显示根因）

**症状**：`gen-sidebar.js` 运行正常但首页图片为空框。

**原因**：cron 脚本只运行 `gen-sidebar`，**从未运行 `vuepress build` 和 `sync-figures.js`**。

**修复 — 推荐方式（本地构建 + 上传）**：

```bash
rm -rf web/.vuepress/.temp
cd web && NODE_OPTIONS='--max-old-space-size=65536' npm run docs:build
tar -cf - -C web .vuepress/dist/ | \
  ***REMOVED*** -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no "$SSH_USER@$SSH_HOST" \
    "sudo tar -xf - -C /var/www/cislunarspace/ && sudo chmod -R 755 /var/www/cislunarspace/dist"
```

## E. Git Push / Deployment Notes

**分支名是 `master` 不是 `main`**：执行 `git push origin main` 会报 "src refspec main does not match any"。

**HTTP2 降级**：`git push origin master` 报 "Error in the HTTP2 framing layer" 时，降级方法：

```bash
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

**cron 环境 GitHub push**（pushurl 含 token 会导致 token 无法读取）：

```bash
PASS=$(python3 -c "import re; c=open('/home/ouyangjiahong/.git-credentials').read(); m=re.search(r'https://cislunarspace:([^@]+)@', c); print(m.group(1) if m else '')")
GIT_ASKPASS=true GIT_TERMINAL_PROMPT=0 GIT_HTTP_VERSION=HTTP/1.1 \
  git -c credential.helper=store \
  push https://cislunarspace:$PASS@github.com/cislunarspace/cislunarspace.git master
```

**服务器内存 OOM**：服务器仅 945MB RAM，**无法构建 VuePress**。所有构建必须在本地完成。

## F. JSON 文件结构提醒

⚠️ **`space-news-articles.json` 的 JSON 结构是嵌套字典**：`{"zh": [...], "en": [...]}`。遍历时应先取 `data['zh']` 和 `data['en']`，再对每个元素调用 `.get()`。

⚠️ **检查新稿件是否入库**时，应检查 `path` 字段（而非 `permalink` 字段，`permalink` 始终为 `null`）。

⚠️ **`gitignore` 与 JSON 文件行为**：`sidebar.auto.json`、`space-news-articles.json` 在 `.gitignore` 中，不跟踪版本。每次 `npm run docs:build` 重新生成。服务器 `git pull` 后必须运行 `npm run docs:build` 才能重新生成 JSON 和同步图片。
