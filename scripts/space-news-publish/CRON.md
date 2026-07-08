# 自动化执行流程（cron / 定时任务）

本仓库的 Space News 自动更新由 Hermes cron 调用 `scripts/space-news-update-local.sh`。脚本在本机完成检索、构建、提交推送和 rsync 部署；服务器只提供静态文件，不承担 VuePress 构建。

## 5 阶段流程

### 阶段一：检索 / 筛选 / 写稿（Hermes Agent）

通过 Hermes Agent v0.16.0 调度，Python 只负责去重、文件 I/O 和 README 更新。

- 入口：`scripts/space-news-update-phase1-hermes.py`
- 调用：`hermes chat -q -t web --provider minimax-cn -m MiniMax-M3 --max-turns 3`
- 9 条 query 并行（4 CN + 5 INTL，关键词见 [SOURCES.md](SOURCES.md)）
- 凭证：`~/.hermes/.env`
- 检索窗口默认 3 天（`CUTOFF_DAYS=3`），中国航天占比目标 ≥30%
- 没有值得写的新闻时输出 `[SILENT]`，不硬凑内容

写稿决策（可写/跳过/去重）见 [SKILL.md](SKILL.md)，不在此重复。

### 阶段二：构建

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
BUILD_SHARDS=4 npm run docs:build:parallel
```

`docs:build:parallel` 串联：`gen-sidebar` → 4-way sharded `vuepress build` → `sync-figures` → `verify-dist`。构建产物在 `web/.vuepress/dist/`。

构建后验证：

- `web/.vuepress/space-news-articles.json` 中中英新稿均已收录。
- `web/.vuepress/dist/space-news/YYYY/MM/<slug>/index.html` 存在且包含新稿关键词。
- `web/.vuepress/dist/en/space-news/YYYY/MM/<slug>/index.html` 同上。
- 新稿图片在中英 dist 路径可访问。

构建/索引/dist 故障见 [TROUBLESHOOTING.md](TROUBLESHOOTING.md)。

### 阶段三：commit / push

```bash
cd /home/ouyangjiahong/codes/cislunarspace
git add web/space-news/ web/en/space-news/ \
       web/.vuepress/sidebar.auto.json \
       web/.vuepress/space-news-articles.json
git commit -m "Update space news — $(date -u '+%Y-%m-%d %H:%M UTC')"
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

- 分支是 `master`。
- HTTP/2 push 报错时用 `GIT_HTTP_VERSION=HTTP/1.1`。
- push 被拒时先 `git pull --rebase` 再 push。
- GitHub 网络不可达时可先 rsync，下次 cron 再补 push。

### 阶段四：rsync 部署

```bash
REMOTE_KEY="${REMOTE_KEY:-/home/ouyangjiahong/.ssh/thinkstation.pem}"
REMOTE_DEST="${REMOTE_DEST:-/home/ubuntu/cislunarspace/}"
RSYNC_SSH="ssh -i $REMOTE_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"

rsync -avz --compress-level=6 --delete \
  -e "$RSYNC_SSH" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/ \
  "ubuntu@cislunarspace.cn:$REMOTE_DEST"
```

整树同步 `web/.vuepress/dist/` 到远端 nginx root。不再使用旧的 `/var/www/cislunarspace/dist/` 或 sshpass/tar 流程。

### 阶段五：fix dist perms

```bash
ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=15 \
  ubuntu@cislunarspace.cn "sudo chmod -R 755 $REMOTE_DEST && sudo chmod o+x /home/ubuntu"
```

nginx www-data 需要读权限。

## 手动触发

```bash
# 完整流程（检索 + 构建 + commit + push + rsync + chmod）
bash /home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh

# 跳过检索，只跑构建 + 部署（测构建链路）
SKIP_PHASE1=1 bash /home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh

# 跑检索 + 构建但不 commit/push/rsync（staging 或验证）
SKIP_DEPLOY=1 bash /home/ouyangjiahong/codes/cislunarspace/scripts/space-news-update-local.sh
```

## cron 注册

```bash
hermes cron list                              # 查看现有任务
# 当前任务：space-news-hourly，0 * * * *，调用 space-news-update-local.sh
```

新建/修改 cron 走 `hermes cron` 子命令；本仓库已有 `space-news-hourly`，无需重复创建。

## 环境注意

- 服务器内存不足以构建 VuePress；构建必须在本机完成。
- 构建产物路径是 `web/.vuepress/dist/`，不是仓库根 `dist/`。
- 长构建需足够超时（hermes cron 默认 gateway_timeout=1800s）。
