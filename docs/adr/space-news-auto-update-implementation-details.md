# Space News 自动更新实施细节

## 架构概览

```
┌─────────────────────────────────────────────────────────────┐
│                    Hermes Cron Scheduler                     │
│                    (每小时整点触发)                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              ~/.hermes/scripts/space-news-update.sh          │
│                   (Cron Wrapper)                            │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│         scripts/space-news-update-local.sh                  │
│                   (主更新脚本)                              │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
   Phase 1             Phase 2-5          日志记录
   (搜索/写稿)         (构建/部署)        (logs/)
        │                   │
        ▼                   ▼
  Python 脚本          Shell 脚本
  Hermes Agent         npm/git/rsync
```

## 详细实施流程

### Phase 1：搜索、筛选、写稿

**入口**：`scripts/space-news-update-phase1-hermes.py`

**执行方式**：
```bash
python3 scripts/space-news-update-phase1-hermes.py
```

**技术栈**：
- Hermes Agent CLI
- Xiaomi MIMO (`mimo-v2.5-pro`)
- Web Search 工具 (`-t web`)
- 并发：`ThreadPoolExecutor` (9 workers)

**详细流程**：

#### 1.1 并行搜索 (9 queries)

```python
# 配置
HERMES_PROVIDER = "xiaomi"
HERMES_MODEL = "mimo-v2.5-pro"
HERMES_MAX_TURNS = "3"
HERMES_TIMEOUT_SEARCH = 180  # 秒
HERMES_SEARCH_WORKERS = 9    # 真并行

# 搜索关键词
CN_QUERIES = [
    "中国航天 发射 最新 长征 神舟 天舟",
    "商业航天 朱雀 力箭 快舟 蓝箭 中科宇航 发射",
    "千帆星座 垣信卫星 卫星互联网 发射 部署",
    "中国空间站 天宫 航天员 科学实验",
    "嫦娥 天问 北斗 探月 火星 深空探测 进展",
]

INTL_QUERIES = [
    "SpaceX Starlink Falcon launch pad Vandenberg Cape Canaveral",
    "NASA mission ISS Crew Dragon Artemis",
    "ESA JAXA space mission launch science",
    "space news launch rocket Blue Origin Rocket Lab ULA Ariane",
    "JWST Webb telescope exoplanet black hole space science discovery",
]
```

**Hermes 调用细节**：
```bash
hermes chat -q "$PROMPT" \
  -t web \                    # 启用 web_search 工具
  -m mimo-v2.5-pro \          # 指定模型
  --provider xiaomi \         # 指定 provider
  --max-turns 3 \             # 最多 3 轮对话
  -Q                          # 静默模式（无交互）
```

**Prompt 模板**：
```
Use web_search to find up to 5 most recent, newsworthy space-news articles for:

QUERY: {query}

Return a single JSON object with this exact schema:
{
  "query": "<the original query>",
  "results": [
    {
      "title": "<article title>",
      "url": "<canonical URL>",
      "description": "<1-2 sentences; include any visible date>",
      "date_iso": "<YYYY-MM-DD if visible, else empty string>",
      "source_name": "<publisher hostname or Chinese outlet name>"
    }
  ]
}

Rules:
- Only return articles from the last 5 days
- If no relevant results: {"query": "...", "results": []}
- Skip press kits, photo galleries, and how-to-watch guides
- Prefer primary sources: Tier 1-3 sources...
- Avoid aggregation wrappers...
```

**返回值处理**：
```python
def hermes_chat_json(prompt, timeout, max_turns):
    # 调用 hermes
    proc = subprocess.run(
        [HERMES_BIN, "chat", "-q", full_prompt,
         "-t", "web", "-m", HERMES_MODEL,
         "--provider", HERMES_PROVIDER,
         "--max-turns", max_turns, "-Q"],
        capture_output=True, text=True,
        timeout=timeout, check=False,
    )

    # 解析 session_id 前缀
    out = _strip_session_id(proc.stdout)

    # 提取 JSON（首个 { 或 [ 到末尾的 } 或 ]）
    first_b, first_k = out.find("{"), out.find("[")
    starts = [i for i in (first_b, first_k) if i != -1]
    end = max(out.rfind("}"), out.rfind("]"))
    return json.loads(out[min(starts):end + 1])
```

#### 1.2 加载已有稿件（去重）

```python
def load_existing_recent(cutoff_days=3):
    """加载最近 3 天内所有月份的已有稿件（跨月去重）"""
    urls = set()      # 所有来源 URL
    titles = set()    # 所有标题
    slugs = set()     # 所有 slug
    metas = []        # 事件 fingerprint

    # 扫描最近 2 个月的目录
    for lang in ["space-news", "en/space-news"]:
        for year, month in months_to_scan:
            month_dir = WEB / f"{lang}/{year:04d}/{month:02d}"
            for md in month_dir.glob("*.md"):
                # 提取 frontmatter
                # 提取来源 URL
                # 提取事件 fingerprint
                pass

    return urls, titles, slugs, metas
```

**Fingerprint 去重算法**：
```python
def _extract_event_fingerprints(text):
    """从 title/slug 提取事件 fingerprint（核心实体词集合）"""
    # 去掉日期串
    # 英文 token：[a-z][a-z0-9-]{3,}
    # 中文 token：连续 2+ 个汉字
    # 关键数字串：≥ 2 位数
    # 过滤停用词
    return fps

def _is_duplicate_event(new_fps, existing_metas, category, cutoff_days=8):
    """判断是否与已有稿件'同事件'"""
    # overlap >= 3 → 重复
    # 强组合匹配（如 {"spcx", "nasdaq"}）
    pass
```

#### 1.3 LLM 筛选

```python
def select_articles_hermes(results, existing_urls, ...):
    # 先简单过滤掉 URL 已存在的
    filtered = [r for r in results if r['url'] not in existing_urls]

    # 只取前 15 条传给 LLM
    candidates = filtered[:15]

    # 构建 prompt
    prompt = f"""你是一位资深航天新闻编辑。请从以下搜索结果中，筛选出 **{cutoff_str} 到 {today_str}** 之间值得单独成稿的航天新闻。

## 已有稿件（同一事件不要重复写）
{existing_titles_text}

## 候选新闻
{candidates_text}

## 筛选规则
1. 【时间硬约束】只选日期在 {cutoff_str} 之后的新闻
2. 【已发生事件】优先选择已经发生/完成的事件
3. 可写：重大任务里程碑、发射结果、官方政策/预算...
4. 跳过：纯图片汇总、娱乐内容、军事试射
5. 同一事件已有稿时跳过
6. 每篇至少一条可引用原文URL
7. 中国航天相关新闻占比目标不低于30%
8. 无值得写的新闻时返回空数组 []

## 输出格式
请以 JSON 数组返回...
"""

    response = hermes_chat_json(prompt, timeout=180)

    # Post-validation
    # - slug 合法性检查
    # - category 必须从 ALLOWED_CATEGORIES 里选
    # - date 硬过滤
    # - fingerprint 强去重
    return valid
```

**ALLOWED_CATEGORIES**：
```python
ALLOWED_CATEGORIES = {
    # 国家/机构
    "china", "nasa", "esa", "isro", "jaxa", "kasa", "roscosmos", "cnes", "uae",
    # 公司
    "spacex", "rocket-lab", "blue-origin", "ula", "arianespace", "axiom", "vast",
    "firefly", "relativity", "stoke-space", "ispace", "k2", "cas-space", "galactic-energy",
    "landspace", "space-pioneer", "orientspace", "deep-blue-aerospace", "link-space",
    "quantum-space",
    # 项目
    "artemis", "iss", "tiangong", "gateway", "starship-test", "starlink", "qianfan",
    "guowang", "beidou", "chandra",
    # 学科
    "exoplanet", "blackhole", "gravitational-wave", "space-telescope", "mars",
    "moon", "solar", "meteor", "cluster", "asteroid",
    # 通用
    "launch", "commercial", "science", "policy", "funding",
}
```

#### 1.4 CN 30% 后置校验

```python
# 主流程中
cn_count = sum(1 for a in articles if _is_chinese_event(a))
total = len(articles)
if total > 0 and cn_count / total < 0.3:
    # 运行 CN 补充搜索
    cn_results = _search_cn_only_hermes()  # 只跑 CN queries
    supplement = select_articles_hermes(cn_results, ...)
    for s in supplement:
        if _is_chinese_event(s) and len(articles) < 5:
            articles.append(s)
```

#### 1.5 写稿

```python
def draft_article_hermes(meta):
    prompt = f"""请为以下航天新闻撰写中英双语稿件。

## 事件信息
- 中文标题：{title_zh_safe}
- 英文标题：{title_en_safe}
- 日期：{date}
- 分类：{meta['category']}
- 来源URL：{meta['source_url']}
- 来源名称：{meta['source_name']}
- 中文摘要：{summary_zh_safe}
- 英文摘要：{summary_en_safe}

## YAML 铁律（必读，不遵守会导致站点 build 崩）
- frontmatter title / description 字段是 YAML 双引号包裹的字符串
- **严禁**在 title / description / 摘要 / 正文标题 1 字段里出现任何形式的引号字符
- 如果原文出现引号，统一去掉引号或换成中文标点

## 格式要求
=== 中文稿开始 ===
---
layout: SpaceNewsArticle
title: "{title_zh_safe}"
description: "{summary_zh_safe}"
permalink: /space-news/{year}/{month}/{date}-{slug}/
author: 天疆说
date: {date}
lastUpdated: {date}
category: {meta['category']}
---

# {title_zh_safe}

**摘要：** {summary_zh_safe}

（请在这里展开正文，2-4段...）

## 信息来源（原文）

- [{meta['source_name']}]({meta['source_url']})
=== 中文稿结束 ===

=== 英文稿开始 ===
...
=== 英文稿结束 ===

请严格按照 === 标记的边界输出，不要输出其他内容。"""

    response_text = hermes_chat_raw(prompt, timeout=240)

    # 解析中英文稿
    zh_m = re.search(r"=== 中文稿开始 ===\s*(.*?)\s*=== 中文稿结束 ===", response_text, re.DOTALL)
    en_m = re.search(r"=== 英文稿开始 ===\s*(.*?)\s*=== 英文稿结束 ===", response_text, re.DOTALL)

    return zh_m.group(1), en_m.group(1)
```

#### 1.6 落盘

```python
def save_article(zh, en, slug, date):
    year, month = date[:4], date[5:7]

    # 保存中文稿
    cn_path = WEB / f"space-news/{year}/{month}/{date}-{slug}.md"
    cn_path.write_text(zh, encoding="utf-8")

    # 保存英文稿
    en_path = WEB / f"en/space-news/{year}/{month}/{date}-{slug}.md"
    en_path.write_text(en, encoding="utf-8")
```

#### 1.7 图片下载

```python
def fetch_and_save_hero(meta):
    # 从 source_url 提取 og:image
    img_url = _fetch_og_image(meta['source_url'])

    # 下载图片
    cn_fig_dir = WEB / f"space-news/{year}/{month}/figures/{date}-{slug}"
    hero_path = cn_fig_dir / f"hero{ext}"
    _download_image(img_url, hero_path)

    # 复制到英文侧
    shutil.copy2(hero_path, en_fig_dir / f"hero{ext}")

    # 更新 markdown frontmatter（添加 image 字段）
    for lang_prefix in ("", "en/"):
        md_path = WEB / f"{lang_prefix}space-news/{year}/{month}/{date}-{slug}.md"
        content = md_path.read_text(encoding="utf-8")
        # 在 frontmatter 末尾追加 image 行
        ...
```

#### 1.8 更新 README

```python
def update_readme(articles):
    # 按月份分组
    grouped = {}
    for a in articles:
        key = (int(a["date"][:4]), int(a["date"][5:7]))
        grouped.setdefault(key, []).append(a)

    # 更新每个月份的 README
    for (year, month), group in grouped.items():
        update_readme_for_month(year, month, group)
```

---

### Phase 2：构建

**执行方式**：
```bash
cd /home/ouyangjiahong/codes/cislunarspace/web
BUILD_SHARDS=4 npm run docs:build:parallel
```

**详细流程**：

#### 2.1 generate.ts
```bash
npm run gen-sidebar
```

**生成的文件**：
- `web/.vuepress/sidebar.auto.json` - Space News sidebar tree
- `web/.vuepress/space-news-articles.json` - 文章元数据
- `web/.vuepress/sidebar-glossary.auto.json` - Glossary scan data
- `web/.vuepress/public/ai-chat-index.json` - AI chat route index
- `web/.vuepress/public/ai-chat-context.json` - AI chat context corpus

#### 2.2 sharded-build.ts
```bash
BUILD_SHARDS=4 npm run docs:build:parallel
```

**并行构建策略**：
```typescript
// web/.vuepress/build/sharded-build.ts
const SHARDS = parseInt(process.env.BUILD_SHARDS || '4', 10);

// 分片策略：按页面路径 hash 分配到不同 shard
// 每个 shard 独立运行 vuepress build
// 最后合并 dist 目录
```

#### 2.3 sync-figures.js
```bash
npm run sync-figures
```

**功能**：
```javascript
// web/.vuepress/build/sync-figures.js
// 将 figures/ 目录复制到 dist/
// 确保图片在构建产物中可用
```

#### 2.4 verify-dist.ts
```bash
npm run verify-dist
```

**验证项**：
- 检查新文章的 HTML 文件存在
- 检查图片文件存在
- 检查 JSON 文件格式正确

---

### Phase 3：提交和推送

**执行方式**：
```bash
cd /home/ouyangjiahong/codes/cislunarspace

# 添加文件
git add web/space-news/ web/en/space-news/ \
       web/.vuepress/sidebar.auto.json \
       web/.vuepress/space-news-articles.json

# 提交
git commit -m "Update space news — $(date -u '+%Y-%m-%d %H:%M UTC')"

# 推送（使用 HTTP/1.1 避免 HTTP/2 问题）
GIT_HTTP_VERSION=HTTP/1.1 git push origin master
```

**错误处理**：
```bash
# 如果 push 被拒
if ! git push origin master; then
    git pull --rebase origin master
    git push origin master
fi

# 如果 GitHub 不可达，跳过 push，下次 cron 补
```

---

### Phase 4：部署

**执行方式**：
```bash
REMOTE_KEY="$HOME/.ssh/thinkstation.pem"
REMOTE_DEST="/home/ubuntu/cislunarspace/"
RSYNC_SSH="ssh -i $REMOTE_KEY -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=30 -o ServerAliveInterval=15 -o ServerAliveCountMax=6"

rsync -avz --compress-level=6 \
    --delete \
    -e "$RSYNC_SSH" \
    "$WEB/.vuepress/dist/" \
    "ubuntu@cislunarspace.cn:$REMOTE_DEST"
```

**rsync 参数详解**：
- `-a`：归档模式（保留权限、时间戳等）
- `-v`：详细输出
- `-z`：压缩传输
- `--compress-level=6`：压缩级别（平衡速度和压缩率）
- `--delete`：删除目标端多余文件（保持同步）
- `-e`：指定 SSH 命令

**为什么用域名而不是 IP**：
```bash
# 域名 cislunarspace.cn 解析到 106.54.4.220
# 但 rsync 必须用域名，因为：
# 1. SSL 证书绑定域名
# 2. 未来 IP 可能变更
# 3. 域名更易维护
```

---

### Phase 5：修复权限

**执行方式**：
```bash
ssh -i "$REMOTE_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -o ConnectTimeout=15 \
    ubuntu@cislunarspace.cn "sudo chmod -R 755 $REMOTE_DEST && sudo chmod o+x /home/ubuntu"
```

**为什么需要**：
- nginx 以 www-data 用户运行
- 需要读取 /home/ubuntu/cislunarspace/ 下的文件
- 需要 o+x 权限进入 /home/ubuntu 目录

---

## 日志系统

### 日志配置
```bash
LOGDIR="$REPO/logs"
LOGFILE="$LOGDIR/space-news-update.log"
LOG_MAX_LINES=2000
```

### 日志格式
```
=== Space News update started at 2026-07-26T16:00:00+08:00 ===
PWD=/home/ouyangjiahong/codes/cislunarspace
[2026-07-26T16:00:01+08:00] phase 1: python3 scripts/space-news-update-phase1-hermes.py
[2026-07-26T16:00:02+08:00]   Searching 5 CN + 5 INTL via hermes...
[2026-07-26T16:00:15+08:00]   [3] 中国航天 发射 最新 长征 神舟 天舟
[2026-07-26T16:00:16+08:00]   [2] SpaceX Starlink Falcon launch...
...
[2026-07-26T16:05:00+08:00] phase 1 exit=0
[2026-07-26T16:05:01+08:00] phase 2: npm run docs:build:parallel
...
=== Space News update finished at 2026-07-26T16:20:00+08:00 — phase1=0 phase2=0 phase3=0 phase4=0 phase5=0 ===
```

### 日志截断
```bash
tail -n 2000 "$LOGFILE" > "$LOGFILE.tmp" && mv "$LOGFILE.tmp" "$LOGFILE"
```

---

## 错误处理机制

### 1. 超时处理
```python
try:
    proc = subprocess.run(
        [HERMES_BIN, "chat", "-q", ...],
        timeout=timeout,  # 180s 或 240s
        check=False,
    )
except subprocess.TimeoutExpired:
    print(f"  HERMES TIMEOUT after {timeout}s", file=LOG)
    return None
```

### 2. API 调用失败
```python
if proc.returncode != 0:
    print(f"  HERMES rc={proc.returncode}: {proc.stderr[:300]}", file=LOG)
    return None
```

### 3. JSON 解析失败
```python
try:
    return json.loads(out[min(starts):end + 1])
except json.JSONDecodeError as e:
    print(f"  HERMES JSON parse: {e}; raw[:200]={out[:200]}", file=LOG)
    return None
```

### 4. 构建失败
```bash
# 如果构建失败，拒绝 rsync
if [ "$PHASE2_RC" -ne 0 ]; then
    echo "FATAL: phase 2 failed (rc=$PHASE2_RC), aborting before rsync"
    exit 1
fi
```

### 5. 静默退出
```python
# 没有新文章时
if not results:
    print("[SILENT]")
    return 0
```

---

## 环境变量

### 主脚本
```bash
SKIP_PHASE1=1     # 跳过 Phase 1（只测试构建+部署）
SKIP_DEPLOY=1     # 跳过 Phase 3-5（只测试搜索+构建）
BUILD_SHARDS=4    # 构建并行度
REMOTE_KEY=...    # SSH 密钥路径
REMOTE_DEST=...   # 服务器目标路径
```

### Hermes 配置
```bash
# ~/.hermes/.env
XIAOMI_API_KEY=tp-ctaabhnrj88tl0bw0p3a0orjfadgkcdqsmhnjpki6nov13so
XIAOMI_BASE_URL=https://token-plan-cn.xiaomimimo.com/anthropic
```

---

## 性能指标

| 阶段 | 耗时 | 资源消耗 |
|------|------|----------|
| Phase 1 | 10-15 分钟 | 9 并发 API 调用 |
| Phase 2 | 5-10 分钟 | 4 并发构建进程 |
| Phase 3 | 1-2 分钟 | Git 操作 |
| Phase 4 | 2-3 分钟 | rsync 传输 |
| Phase 5 | 10 秒 | SSH 命令 |
| **总计** | **15-25 分钟** | - |

---

## 关键配置文件

| 文件 | 用途 |
|------|------|
| `scripts/space-news-update-local.sh` | 主更新脚本 |
| `scripts/space-news-update-phase1-hermes.py` | Phase 1 实现 |
| `scripts/space-news-config.sh` | 集中配置 |
| `~/.hermes/scripts/space-news-update.sh` | Cron wrapper |
| `~/.hermes/.env` | API 配置 |
| `~/.ssh/thinkstation.pem` | SSH 密钥 |
| `logs/space-news-update.log` | 日志文件 |

---

**文档时间**：2026-07-26
**维护者**：Claude Code
