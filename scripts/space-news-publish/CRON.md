# 自动化执行流程（cron / 定时任务）

本仓库的 Space News 自动更新由本机 cron/Hermes 调用 `scripts/space-news-update-local.sh`。脚本在本机完成检索、构建、提交推送和 rsync 部署；服务器只提供静态文件，不承担 VuePress 构建。

## 阶段一：检索与筛选

1. **先搜索中国航天新闻**，使用 [SOURCES.md](SOURCES.md) 的中文关键词轮次，并加当前年份限定。
2. 搜索国际航天新闻：Artemis、SpaceX、Starship、ESA、NASA、Rocket Lab、Blue Origin 等。
3. 补充搜索空间科学、政策、商业航天投融资、JAXA/KASA/ISRO、空间站、太空旅游等。
4. 排序：重大任务里程碑 > 发射结果 > 政策/商业动态 > 常规发射。
5. Starlink 等高频常规发射合并，不逐条写。
6. 去重：扫描当月目录、近 7 天稿件标题关键词和 sources URL。
7. 中国航天占比目标不低于 30%；不足时继续中文检索。
8. 扩展搜索后仍无值得报道新闻时，cron 场景输出 `[SILENT]`，不要硬凑内容。

## 阶段二：核对与撰稿

1. 每篇至少有一条可引用原文 URL；冲突时以官方/机构稿为准。
2. 跳过预发射观礼指南、未完成发射、gallery、娱乐/购物/podcast、军事 ICBM 试射等低相关内容。
3. 同一事件已有稿时优先更新原稿，不另开新 slug。
4. 按 [IMAGES.md](IMAGES.md) 准备中英两侧 `figures/<slug>/`。
5. 按 [WRITING.md](WRITING.md) 写中英双语稿件和月度 README。

## 阶段三：索引与构建

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
npm run docs:build
```

只需快速刷新/检查索引时，才单独运行 `npm run gen-sidebar`。完整构建不要手动重复跑两次生成器。

`npm run docs:build` 已串联：

1. `npm run gen-sidebar`（当前 npm script 指向 `tsx .vuepress/generate.ts`，再调度 `.vuepress/generators/*`）
2. `vuepress build`
3. `npm run sync-figures`（当前 npm script 指向 `tsx .vuepress/build/sync-figures.js`）

构建前后需验证：

- `web/.vuepress/space-news-articles.json` 中中英新稿均已收录。
- `web/.vuepress/dist/space-news/YYYY/MM/<slug>/index.html` 存在且包含新稿关键词。
- `web/.vuepress/dist/en/space-news/YYYY/MM/<slug>/index.html` 存在且包含英文新稿关键词。
- 新稿图片在中英 dist 路径可访问。

## 阶段四：commit / push

`git add` 不等于完成。新增稿件、README、figures 和相关修正必须 commit。

```bash
git add web/space-news/YYYY/MM/YYYY-MM-DD-slug.md \
        web/space-news/YYYY/MM/README.md \
        web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/ \
        web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md \
        web/en/space-news/YYYY/MM/README.md \
        web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/

git commit -m "news: add YYYY-MM-DD space news article"
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

若 push 被远端拒绝，先 `git pull --rebase` 再 push。若 GitHub 网络不可达，可先完成 rsync 部署，下次 cron 再补 push。

## 阶段五：rsync 部署

当前部署使用 SSH key，不使用 sshpass；目标是远端 nginx root 对应的裸 dist 内容。

```bash
REMOTE_KEY="${REMOTE_KEY:-/home/ouyangjiahong/.ssh/thinkstation.pem}"
REMOTE_DEST="${REMOTE_DEST:-/home/ubuntu/cislunarspace/}"
RSYNC_SSH="ssh -i $REMOTE_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"

rsync -avz --compress-level=6 --delete \
  -e "$RSYNC_SSH" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/ \
  "ubuntu@cislunarspace.cn:$REMOTE_DEST"

ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=15 \
  ubuntu@cislunarspace.cn \
  "sudo chmod -R 755 $REMOTE_DEST && sudo chmod o+x /home/ubuntu"
```

部署后同时检查中文、英文和 figures：

```bash
ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes ubuntu@cislunarspace.cn \
  'ls /home/ubuntu/cislunarspace/space-news/YYYY/MM/ | grep SLUG; \
   ls /home/ubuntu/cislunarspace/en/space-news/YYYY/MM/ | grep SLUG; \
   ls /home/ubuntu/cislunarspace/space-news/YYYY/MM/figures/SLUG/; \
   ls /home/ubuntu/cislunarspace/en/space-news/YYYY/MM/figures/SLUG/'
```

## 环境注意

- 服务器内存不足以构建 VuePress；构建必须在本机完成。
- 构建产物路径是 `web/.vuepress/dist/`，不是仓库根 `dist/`。
- cron 中优先用 shell/terminal 命令；长构建需足够超时。
- 详细历史故障见 [FIELD-NOTES.md](FIELD-NOTES.md) 和 [BUILD-FIXES.md](BUILD-FIXES.md)。
