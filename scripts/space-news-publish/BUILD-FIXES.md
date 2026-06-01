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
month = '06'
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

## D. 构建管线被跳过 / 图片不显示

**症状**：`gen-sidebar` 运行正常但首页图片为空框，或新文章根本没出现在首页。

**原因**：`npm run docs:build` 没被完整执行（只跑了 `gen-sidebar` 一步；或 `vuepress build` 中途崩溃但 dist 部分已生成；或部署只同步了 ZH 路径——见下方"部署只同步部分路径"）。

**修复 — 完整重建 + 部署**：

```bash
# 0. 清理缓存
rm -rf web/.vuepress/.temp

# 1. 本地构建（npm script 已绑定 8GB 堆 + sync-figures）
cd web && npm run docs:build

# 2. 验证新文章 HTML 真正落地
ls web/.vuepress/dist/space-news/YYYY/MM/YYYY-MM-DD-slug/index.html
ls web/.vuepress/dist/en/space-news/YYYY/MM/YYYY-MM-DD-slug/index.html
# 两份文件都应 > 200 行（空文件 < 50 行 = 渲染失败）

# 3. 部署（rsync 两条命令覆盖 4 个子树）
rsync -avz --delete -e "***REMOVED*** -p \"$SSH_PASS\" ssh -o StrictHostKeyChecking=no" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/space-news/ \
  ubuntu@cislunarspace.cn:/var/www/cislunarspace/dist/space-news/
rsync -avz --delete -e "***REMOVED*** -p \"$SSH_PASS\" ssh -o StrictHostKeyChecking=no" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/en/space-news/ \
  ubuntu@cislunarspace.cn:/var/www/cislunarspace/dist/en/space-news/
```

⚠️ **部署只同步部分路径导致静默缺失**（2026-05-27 EN 文章缺失、2026-05-28 ZH+EN figures 缺失实例）：
- `dist/space-news/` 与 `dist/en/space-news/` 是**独立目录树**
- `dist/space-news/YYYY/MM/figures/` 与 `dist/space-news/YYYY/MM/*.html` 是**同级 sibling 目录**
- 只 rsync `dist/space-news/` 一条命令实际已覆盖 ZH articles + ZH figures，但要 EN 必须单独再同步 `dist/en/space-news/`

## E. Git Push / Deployment Notes

**分支名是 `master` 不是 `main`**：执行 `git push origin main` 会报 "src refspec main does not match any"。

**HTTP2 降级**：`git push origin master` 报 "Error in the HTTP2 framing layer" 时，降级方法：

```bash
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

**网络层失败立即切部署**：`Failed to connect to github.com port 443` / `Empty reply from server` 表明 GitHub 不可达——**不要 retry**，直接 rsync 部署；下次 cron 会补 push。

**cron 环境 GitHub push**（pushurl 含 token 会导致 token 无法读取）：

```bash
PASS=$(python3 -c "import re; c=open('/home/ouyangjiahong/.git-credentials').read(); m=re.search(r'https://cislunarspace:([^@]+)@', c); print(m.group(1) if m else '')")
GIT_ASKPASS=true GIT_TERMINAL_PROMPT=0 GIT_HTTP_VERSION=HTTP/1.1 \
  git -c credential.helper=store \
  push https://cislunarspace:$PASS@github.com/cislunarspace/cislunarspace.git master
```

**服务器内存 OOM**：服务器仅 945MB RAM，**无法构建 VuePress**。所有构建必须在本地完成。

## F. JSON 文件结构与生成脚本

⚠️ `gen-sidebar` **已经**是 `tsx .vuepress/gen-sidebar.ts`（不是 `.js`）。该脚本一次生成以下文件：

- `web/.vuepress/sidebar.auto.json` — 总侧边栏
- `web/.vuepress/sidebar-glossary.auto.json` — 术语侧边栏（含翻译缺口报告）
- `web/.vuepress/space-news-articles.json` — 航天动态首页数据源
- `web/.vuepress/space-news-sidebar-data.json` — 文章页侧栏数据
- `web/.vuepress/public/ai-chat-index.json` — AI chat 索引（分层）
- `web/.vuepress/public/ai-chat-context.json` — AI chat 上下文

**全部在 `.gitignore` 中**，不跟踪版本。每次 `npm run docs:build` 重新生成。

⚠️ **`space-news-articles.json` 的 JSON 结构是嵌套字典**：`{"zh": [...], "en": [...]}`。遍历时应先取 `data['zh']` 和 `data['en']`，再对每个元素调用 `.get()`。

⚠️ **检查新稿件是否入库**时，应检查 `path` 字段（而非 `permalink` 字段，`permalink` 始终为 `null`）。

⚠️ **若 `space-news-articles.json` 全是 `unknown` year-month** 而 sidebar.auto.json 正常：说明 gen-sidebar 序列化逻辑断裂但未抛错。先用脚本对比 `space-news-articles.json` 的 year-month 分布与磁盘实际文件数；若侧边栏可用但首页/存档页数据损坏，说明问题在 `space-news-articles.json` 的某条转换路径，需要重跑 gen-sidebar 或看参考资料（`references/gen-sidebar-silent-unknown-yearmonth-20260520.md`）。
