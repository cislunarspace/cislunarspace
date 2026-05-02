---
name: space-news-publish
description: >
  Searches open web for recent space and launch news (China and international),
  writes bilingual Markdown under web/space-news/YYYY/MM/ with primary-source
  links, saves illustrative images under a per-article figures/ folder next to each
  post, updates month index and sidebar when needed, and verifies VuePress build.
  Use when the user asks to update Space News, ingest or crawl space news, add
  dated news posts, or automate 航天动态 / space-news content for cislunarspace.
---

# Space News 撰稿与入库

面向仓库 `web/` 下的 **Space News（航天动态）** 栏目：智能体应**先检索、再落盘、后校验**，与现有门户首页与存档页逻辑一致。

## 站点约定

| 项目 | 规则 |
|------|------|
| 中文稿 | `web/space-news/YYYY/MM/YYYY-MM-DD-slug.md` |
| 英文稿 | `web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md`（同 slug，无 `-en` 后缀） |
| 排除 | 各层 `README.md` 仅为索引页，**不算**新闻稿件 |
| 门户展示 | `SpaceNewsHome` 读 `space-news-articles.json`（`gen-sidebar.js` 生成）；`draft: true` 隐藏 |
| 布局 | 正文页统一 `layout: SpaceNewsArticle` |
| 配图 | `.md` 同目录下的 `figures/<slug>/` 内 |

新建年/月时：补 `README.md` 索引（中英镜像），然后运行 `node web/.vuepress/gen-sidebar.js`。

## 新闻分类（category）

| category | 中文 | 英文 |
|----------|------|------|
| `artemis` | Artemis | Artemis |
| `spacex` | SpaceX | SpaceX |
| `china` | 中国航天 | China Space |
| `nasa` | NASA | NASA |
| `esa` | ESA | ESA |
| `iss` | 空间站 | Space Station |
| `launch` | 发射 | Launches |
| `commercial` | 商业航天 | Commercial Space |
| `science` | 科学发现 | Science |
| `policy` | 政策战略 | Policy & Strategy |
| `rocket-lab` | Rocket Lab | Rocket Lab |
| `blue-origin` | Blue Origin | Blue Origin |

支持多分类（YAML 数组）：`category: [spacex, commercial]`。如不确定，优先选最具体的分类。

## 推荐工作流

1. **确认范围**：用户指定的日期或「近 N 天」、是否双语、是否合并简讯
2. **检索**：政府/机构官网、通讯社、主承包商、主流航天垂媒（→ 详见 [SOURCES.md](SOURCES.md)）
3. **核对**：每篇至少一条可引用的原文 URL；冲突时以机构稿为准
4. **下载配图**：每篇至少 1-3 张配图（→ 详见 [IMAGES.md](IMAGES.md)）
5. **撰写**：摘要 3-6 句；信息来源用 Markdown 列表
6. **更新月度 README**：中英两侧
7. **重新生成索引**：`node web/.vuepress/gen-sidebar.js`
8. **构建验证**：`cd web && npm run docs:build`

## Frontmatter 模板

### 中文

```yaml
---
layout: SpaceNewsArticle
title: "简短标题"
description: "一句话摘要（用于 SEO 与首页卡片）"
permalink: /space-news/YYYY/MM/YYYY-MM-DD-slug/
author: 天疆说
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
image: ./figures/YYYY-MM-DD-slug/hero.jpg
---
```

### 英文

```yaml
---
layout: SpaceNewsArticle
title: "Short English title"
description: "One-line summary"
permalink: /en/space-news/YYYY/MM/YYYY-MM-DD-slug/
author: Tianjiangshuo
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
image: ./figures/YYYY-MM-DD-slug/hero.jpg
---
```

| 字段 | 必填 | 说明 |
|------|------|------|
| `layout` | ✅ | 固定 `SpaceNewsArticle` |
| `permalink` | ✅ | 末尾带 `/`；中文 `/space-news/`，英文 `/en/space-news/` |
| `author` | ✅ | 中文 `天疆说`；英文 `Tianjiangshuo` |
| `date` | ✅ | 事件日期 `YYYY-MM-DD` |
| `category` | ✅ | 见上方分类表 |
| `image` | ❌ | 首页卡片缩略图 |
| `tags` / `related` / `draft` | ❌ | 标签 / 关联稿件 / 草稿 |

## 正文结构

### 中文

```markdown
# 与 title 一致或略短

**摘要：** …

(可选：主图 `./figures/YYYY-MM-DD-slug/...`)

## 信息来源（原文）

- [来源名称](https://...)
```

### 英文

```markdown
# English title

**Summary:** ...

## Sources (original pages)

- [Source name](https://...)
```

## 中英文平衡策略

每次更新中，**中国航天相关新闻占比不应低于 30%**。中国航天先写中文再译英文；国际新闻先写英文再译中文。

## 质量与合规

- **日期**：跨时区写清 UTC/当地并指向原报道
- **不确定**：写「据报道」「待机构确认」，勿编造轨参/载荷细节
- **版权**：仅摘要 + 链接；不整篇粘贴付费墙
- **图片**：遵守原站版权；NASA/ESA 等公共领域优先；商业媒体配图无授权则仅外链
- **去重**：撰稿前检查当月目录是否已有同事件稿件
- **预发稿件更新**：事件实际发生后修改原文而非新建（slug 不变）

## 图片处理架构

1. 图片存在 `web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`，markdown 用相对路径引用
2. `gen-sidebar.js` 将相对 `image` 路径转为绝对 URL 写入 `space-news-articles.json`
3. `SpaceNewsHome.vue` 的 `cardBg()` 用 `background-image: url(...)` 加载
4. **`npm run docs:build` 自动执行 `sync-figures.js`**，将 `figures/` 复制到 `dist/`（VuePress 不会自动复制）

⚠️ `sidebar.auto.json` / `space-news-articles.json` 在 `.gitignore` 中，每次构建重新生成。详见 [BUILD-FIXES.md](BUILD-FIXES.md) 章节 F。

## 相关代码

| 文件 | 用途 |
|------|------|
| `web/.vuepress/theme2/components/SpaceNewsHome.vue` | 门户首页 |
| `web/.vuepress/theme2/components/SpaceNewsArchive.vue` | 存档页 |
| `web/.vuepress/theme2/layouts/SpaceNewsArticle.vue` | 文章布局 |
| `web/.vuepress/gen-sidebar.js` | 索引生成 |
| `web/.vuepress/sync-figures.js` | 图片同步 |
| `web/.vuepress/sidebar.ts` / `sidebar-en.ts` | 侧边栏 |

## 环境注意事项

- **工作区路径**：`/home/ouyangjiahong/codes/cislunarspace/`
- **PATH 修复（无 nvm node 时）**：
  ```bash
  PATH="/home/ouyangjiahong/.nvm/versions/node/v20.20.2/bin:$PATH"
  ```
- **浏览器不可用**：cron 环境无 Playwright，依赖 `curl -L`
- **HTTP URL 安全扫描**：用 Python `urllib.request` 替代 `curl + grep`

## 参考文档

| 文档 | 内容 |
|------|------|
| [IMAGES.md](IMAGES.md) | 图片获取流程、压缩、各网站抓取技巧、版权标注 |
| [SOURCES.md](SOURCES.md) | 中外航天新闻源全表 + 可靠 API + 中国关键事件日历 |
| [CRON.md](CRON.md) | 定时任务执行流程 + 本地构建 + 服务器部署 |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | 撰稿陷阱、检索技术细节、各家站点解析方法 |
| [BUILD-FIXES.md](BUILD-FIXES.md) | 构建失败快速修复清单 |
