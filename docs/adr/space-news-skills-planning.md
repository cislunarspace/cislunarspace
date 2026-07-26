# Space News 更新 Skills 规划

## 现有实施架构

基于详细的实施分析，当前系统包含以下核心组件：

### 1. **搜索层** (Search Layer)
- **工具**：Hermes Agent + Web Search (`-t web`)
- **模型**：Xiaomi MIMO (`mimo-v2.5-pro`)
- **策略**：9 query 并行（4 CN + 5 INTL）
- **窗口**：最近 3 天（`CUTOFF_DAYS=3`）

### 2. **筛选层** (Filter Layer)
- **工具**：MIMO LLM
- **策略**：
  - URL 去重
  - 日期硬约束
  - 已发生事件优先
  - CN 30% 占比保障
  - Fingerprint 强去重

### 3. **写稿层** (Draft Layer)
- **工具**：MIMO LLM
- **输出**：中英双语稿件
- **格式**：YAML frontmatter + Markdown
- **约束**：YAML 铁律（无引号）

### 4. **构建层** (Build Layer)
- **工具**：VuePress + sharded-build
- **策略**：4 路并行构建
- **验证**：dist 内容检查

### 5. **部署层** (Deploy Layer)
- **工具**：rsync + SSH
- **目标**：腾讯云服务器 (106.54.4.220)
- **权限**：sudo chmod

---

## Skills 分层设计

基于现有架构，我建议将 skills 分为以下层次：

### Level 1：基础 Skills（单步操作）

#### 1.1 `search-news`
**功能**：搜索新闻
**输入**：
- `queries`: 搜索关键词列表
- `cutoff_days`: 时间窗口（默认 3）

**输出**：
```json
{
  "results": [
    {
      "title": "标题",
      "url": "URL",
      "description": "摘要",
      "date_iso": "YYYY-MM-DD",
      "source_name": "来源"
    }
  ]
}
```

**实现**：
```python
# 调用 hermes chat -q -t web
# 并行执行多个 query
# URL 去重
```

#### 1.2 `filter-news`
**功能**：筛选新闻
**输入**：
- `candidates`: 候选新闻列表
- `existing_urls`: 已有 URL
- `existing_titles`: 已有标题
- `existing_slugs`: 已有 slug
- `cutoff_days`: 时间窗口

**输出**：
```json
{
  "articles": [
    {
      "index": 1,
      "title_zh": "中文标题",
      "title_en": "英文标题",
      "slug": "slug",
      "category": "category",
      "date": "YYYY-MM-DD",
      "summary_zh": "中文摘要",
      "summary_en": "英文摘要",
      "source_url": "URL",
      "source_name": "来源"
    }
  ]
}
```

**实现**：
```python
# 调用 hermes chat -q
# 应用筛选规则
# CN 30% 校验
# Fingerprint 去重
```

#### 1.3 `draft-article`
**功能**：撰写文章
**输入**：
- `title_zh`: 中文标题
- `title_en`: 英文标题
- `date`: 日期
- `category`: 分类
- `source_url`: 来源 URL
- `source_name`: 来源名称
- `summary_zh`: 中文摘要
- `summary_en`: 英文摘要

**输出**：
```json
{
  "zh": "中文稿（YAML frontmatter + Markdown）",
  "en": "英文稿（YAML frontmatter + Markdown）"
}
```

**实现**：
```python
# 调用 hermes chat -q
# 生成中英双语稿件
# 应用 YAML 铁律
```

#### 1.4 `save-article`
**功能**：保存文章
**输入**：
- `zh`: 中文稿
- `en`: 英文稿
- `slug`: slug
- `date`: 日期

**输出**：
```json
{
  "cn_path": "web/space-news/YYYY/MM/YYYY-MM-DD-slug.md",
  "en_path": "web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md"
}
```

**实现**：
```python
# 创建目录
# 写入文件
# 更新 README
```

#### 1.5 `fetch-hero-image`
**功能**：获取文章配图
**输入**：
- `source_url`: 来源 URL
- `slug`: slug
- `date`: 日期

**输出**：
```json
{
  "image_url": "图片 URL",
  "image_path": "本地路径",
  "success": true
}
```

**实现**：
```python
# 提取 og:image
# 下载图片
# 更新 frontmatter
```

---

### Level 2：组合 Skills（多步流程）

#### 2.1 `search-and-filter`
**功能**：搜索并筛选新闻
**输入**：
- `queries`: 搜索关键词列表
- `cutoff_days`: 时间窗口
- `existing_data`: 已有稿件数据

**输出**：
```json
{
  "articles": [...],
  "total_searched": 45,
  "total_filtered": 5
}
```

**流程**：
1. 调用 `search-news`
2. 加载已有稿件
3. 调用 `filter-news`
4. CN 30% 校验

#### 2.2 `draft-and-save`
**功能**：撰写并保存文章
**输入**：
- `articles`: 文章元数据列表

**输出**：
```json
{
  "saved": [
    {
      "slug": "slug",
      "date": "YYYY-MM-DD",
      "cn_path": "...",
      "en_path": "..."
    }
  ],
  "failed": []
}
```

**流程**：
1. 遍历 articles
2. 调用 `draft-article`
3. 调用 `save-article`
4. 调用 `fetch-hero-image`
5. 更新 README

#### 2.3 `build-and-deploy`
**功能**：构建并部署
**输入**：
- `skip_phase1`: 是否跳过 Phase 1
- `skip_deploy`: 是否跳过部署

**输出**：
```json
{
  "phase1": "success/skipped",
  "phase2": "success/failed",
  "phase3": "success/skipped",
  "phase4": "success/skipped",
  "phase5": "success/skipped",
  "duration": "15m"
}
```

**流程**：
1. Phase 2：构建
2. Phase 3：提交和推送
3. Phase 4：rsync 部署
4. Phase 5：修复权限

---

### Level 3：高级 Skills（完整流程）

#### 3.1 `update-space-news`
**功能**：完整的新闻更新流程
**输入**：
- `mode`: full/search-only/build-only/deploy-only
- `cutoff_days`: 时间窗口（默认 3）
- `max_articles`: 最大文章数（默认 5）

**输出**：
```json
{
  "status": "success/failed",
  "articles_added": 3,
  "duration": "18m",
  "log_file": "logs/space-news-update.log"
}
```

**流程**：
1. 调用 `search-and-filter`
2. 调用 `draft-and-save`
3. 调用 `build-and-deploy`
4. 记录日志

#### 3.2 `diagnose-update`
**功能**：诊断更新问题
**输入**：
- `check_ssh`: 是否检查 SSH
- `check_api`: 是否检查 API
- `check_gateway`: 是否检查 Gateway
- `check_cron`: 是否检查 Cron

**输出**：
```json
{
  "ssh": {"status": "ok", "latency": "120ms"},
  "api": {"status": "ok", "model": "mimo-v2.5-pro"},
  "gateway": {"status": "running", "pid": 505110},
  "cron": {"status": "active", "next_run": "2026-07-26T16:00:00+08:00"}
}
```

#### 3.3 `monitor-update`
**功能**：监控更新状态
**输入**：
- `tail_lines`: 显示最近几行日志
- `check_articles`: 是否检查文章数量

**输出**：
```json
{
  "last_execution": {
    "start": "2026-07-26T16:00:00+08:00",
    "end": "2026-07-26T16:18:00+08:00",
    "status": "success",
    "articles_added": 2
  },
  "articles_today": 5,
  "log_tail": "..."
}
```

---

## Skills 实现建议

### 1. 独立脚本
每个 skill 应该是一个独立的 Python 脚本，位于：
```
scripts/skills/
├── search_news.py
├── filter_news.py
├── draft_article.py
├── save_article.py
├── fetch_hero_image.py
├── search_and_filter.py
├── draft_and_save.py
├── build_and_deploy.py
├── update_space_news.py
├── diagnose_update.py
└── monitor_update.py
```

### 2. 统一接口
每个 skill 应该：
- 接受 JSON 输入（stdin 或参数）
- 返回 JSON 输出（stdout）
- 错误输出到 stderr
- 返回退出码（0=成功，非0=失败）

### 3. 配置管理
使用 `scripts/space-news-config.sh` 集中管理配置，skill 读取环境变量。

### 4. 日志集成
每个 skill 应该：
- 记录执行日志
- 支持 verbose 模式
- 集成到主日志文件

---

## 与现有系统集成

### 1. Cron 集成
```bash
# ~/.hermes/scripts/space-news-update.sh
cd /home/ouyangjiahong/codes/cislunarspace
python3 scripts/skills/update_space_news.py --mode full
```

### 2. 手动调用
```bash
# 搜索新闻
python3 scripts/skills/search_news.py --queries "..." --cutoff-days 3

# 诊断问题
python3 scripts/skills/diagnose_update.py --check-all

# 监控状态
python3 scripts/skills/monitor_update.py --tail 50
```

### 3. Hermes Agent 集成
```bash
# 通过 hermes chat 调用
hermes chat -q "搜索最近 3 天的航天新闻" -t web --provider xiaomi -m mimo-v2.5-pro
```

---

## 优势

1. **模块化**：每个 skill 独立，易于测试和维护
2. **可组合**：高级 skill 组合低级 skill
3. **可复用**：skill 可用于不同场景（cron、手动、agent）
4. **可监控**：统一的日志和错误处理
5. **可扩展**：易于添加新的 skill

---

## 下一步

1. 实现 Level 1 skills（单步操作）
2. 实现 Level 2 skills（组合流程）
3. 实现 Level 3 skills（完整流程）
4. 更新 Cron wrapper 使用新 skills
5. 添加测试和文档

---

**规划时间**：2026-07-26
**维护者**：Claude Code
**版本**：v1.0
