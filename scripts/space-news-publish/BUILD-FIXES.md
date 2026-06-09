# 构建、索引与部署故障快速修复

先确认问题属于哪一层：源稿件、生成索引、VuePress 构建、dist 内容、rsync 部署。不要只看命令退出码；新文章 HTML 内容和图片路径都要验证。

## 1. 生成索引异常

### 新稿未出现在首页/存档

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
npm run gen-sidebar
```

检查 `space-news-articles.json`：

```python
import json
from pathlib import Path
p = Path('/home/ouyangjiahong/codes/cislunarspace/web/.vuepress/space-news-articles.json')
data = json.loads(p.read_text())
for locale in ['zh', 'en']:
    hits = [a for a in data.get(locale, []) if 'YYYY-MM-DD-slug' in a.get('relativePath', '')]
    print(locale, len(hits), hits[:1])
```

注意：该 JSON 是 `{ "zh": [...], "en": [...] }`，不是单层 dict；不要只检查 `sidebar.auto.json`。

### year/month 变 `unknown`

说明生成器序列化或 frontmatter 解析断裂。先检查新稿和 README 的 YAML，再重跑 `npm run gen-sidebar`。历史案例见 [FIELD-NOTES.md](FIELD-NOTES.md)。

## 2. 图片 import / figures 错误

| 症状 | 常见原因 | 修复 |
|------|----------|------|
| `Could not resolve './figures/.../hero.jpg'` | 文件不存在、扩展名不匹配、路径未以 `./` 开头 | 改为真实路径，或删除 `image:` 和正文图片段落 |
| EN 文章构建失败 | 英文侧 figures 缺失 | 删除 EN 目标目录后从 ZH 复制 |
| `figures/figures/` 嵌套 | `cp -r` 合并旧目录 | `rm -rf` 目标目录后重拷 |
| `ELOOP` / symlink 循环 | 历史 symlink 损坏 | 删除坏 symlink，修正引用，重建 |

复制 EN figures：

```bash
rm -rf web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug
cp -r web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug \
      web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug
```

批量检查引用的 figure slug 是否存在：

```python
import os, re
root = '/home/ouyangjiahong/codes/cislunarspace/web'
for locale in ['space-news', 'en/space-news']:
    base = f'{root}/{locale}'
    for dirpath, dirs, files in os.walk(base):
        if 'figures' not in dirs:
            continue
        actual = set(os.listdir(os.path.join(dirpath, 'figures')))
        for name in files:
            if not name.endswith('.md') or name == 'README.md':
                continue
            path = os.path.join(dirpath, name)
            text = open(path, encoding='utf-8').read()
            for slug in re.findall(r'\./figures/([^/]+)/', text):
                if slug not in actual:
                    print('MISMATCH', path, slug)
```

## 3. VuePress 构建

完整构建：

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
npm run docs:build
```

`docs:build` 应完成：生成索引 → VuePress build → `sync-figures.js`。构建产物在 `web/.vuepress/dist/`。

若构建需要更长超时，可用：

```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
NODE_OPTIONS='--max-old-space-size=65536' npm run docs:build
```

### 构建成功但内容错位

退出码 0 不等于 HTML 内容正确。新稿必须 grep 关键词：

```bash
fgrep -c "中文稿标志性关键词" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/space-news/YYYY/MM/YYYY-MM-DD-slug/index.html

fgrep -c "English distinctive keyword" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/en/space-news/YYYY/MM/YYYY-MM-DD-slug/index.html
```

如果 dist HTML 缺关键词或多篇 md5 异常相同，清理缓存和 dist 后重建：

```bash
rm -rf /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/.temp \
       /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/.cache \
       /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist
cd /home/ouyangjiahong/codes/cislunarspace/web && npm run docs:build
```

## 4. 布局与 YAML 错误

| 报错 | 处理 |
|------|------|
| `YAMLException` | 检查 frontmatter 未闭合引号、stray `|`、README 表格是否进了 YAML 块 |
| `Cannot resolve layout: Forum` | 搜索 `layout: Forum`，改成已注册 layout 或修复主题注册 |
| `Cannot resolve layout: OrbitSimLab` | 搜索对应 layout；确认是否站级历史问题，不要忽略新稿验证 |

验证 YAML frontmatter：

```python
from pathlib import Path
import yaml
for p in Path('/home/ouyangjiahong/codes/cislunarspace/web/space-news/YYYY/MM').glob('*.md'):
    text = p.read_text(encoding='utf-8')
    if text.startswith('---'):
        yaml.safe_load(text.split('---', 2)[1])
        print('ok', p.name)
```

## 5. Git push

- 分支是 `master`。
- HTTP/2 push 报错时用 `GIT_HTTP_VERSION=HTTP/1.1 git push origin master`。
- push 被拒绝时先 `git pull --rebase`。
- GitHub 网络不可达时可先 rsync；下次 cron 再补 push。

## 6. rsync 部署

当前架构只需整树同步 `web/.vuepress/dist/` 到 `/home/ubuntu/cislunarspace/`，不要再使用旧的 `/var/www/cislunarspace/dist/` 或 sshpass/tar 流程。

```bash
REMOTE_KEY="${REMOTE_KEY:-/home/ouyangjiahong/.ssh/thinkstation.pem}"
REMOTE_DEST="${REMOTE_DEST:-/home/ubuntu/cislunarspace/}"
RSYNC_SSH="ssh -i $REMOTE_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"

rsync -avz --compress-level=6 --delete \
  -e "$RSYNC_SSH" \
  /home/ouyangjiahong/codes/cislunarspace/web/.vuepress/dist/ \
  "ubuntu@cislunarspace.cn:$REMOTE_DEST"
```

部署后检查裸路径（不要加 `dist/` 前缀）：

```bash
ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes ubuntu@cislunarspace.cn \
  'ls /home/ubuntu/cislunarspace/space-news/YYYY/MM/ | grep SLUG; \
   ls /home/ubuntu/cislunarspace/en/space-news/YYYY/MM/ | grep SLUG'
```
