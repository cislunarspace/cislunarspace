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
| 门户展示 | `SpaceNewsHome.vue` 读 `space-news-articles.json`（`gen-sidebar` 生成）；`draft: true` 隐藏 |
| 存档 | `SpaceNewsArchive.vue` 读月索引 `web/space-news/YYYY/MM/README.md` |
| 侧栏 | `SpaceNewsSidebar.vue` 读 `space-news-sidebar-data.json`（按月聚合） |
| 布局 | 正文页统一 `layout: SpaceNewsArticle` |
| 配图 | `.md` 同目录下的 `figures/<slug>/` 内（中英两侧都需存在） |

新建年/月时：补 `README.md` 索引（中英镜像），然后运行 `npm run gen-sidebar`（在 `web/` 下）。

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
2. **检索**：政府/机构官网、通讯社、主承包商、主流航天垂媒（→ 详见 [SOURCES.md](SOURCES.md)）。**记住 skip 规则**（CRON.md 阶段一步骤 6）：未发生事件、预发射观礼指南、画廊/照片汇编、军事弹道导弹一律跳过
3. **核对**：每篇至少一条可引用的原文 URL；冲突时以机构稿为准
4. **下载配图**：每篇至少 1-3 张配图到 `figures/<slug>/`（→ 详见 [IMAGES.md](IMAGES.md)）。**先下中文 figures，再 `cp -r` 到英文 figures 目录**——缺一会构建失败
5. **撰写**：摘要 3-6 句；信息来源用 Markdown 列表
6. **更新月度 README**：中英两侧
7. **重新生成索引 + 构建**：`cd web && npm run docs:build`（一步到位，npm script 内部已含 gen-sidebar + build + sync-figures）
8. **验证**：`ls dist/space-news/YYYY/MM/2026-06-01-<slug>/index.html` 与对应 EN 路径文件都存在且 > 200 行

## Frontmatter 模板

### 最小可用 frontmatter（基于实际产出）

参考 2026-06 三篇已上线稿件，下面这套**必填字段**已经能正常构建、上线和被首页读取：

```yaml
---
layout: SpaceNewsArticle
title: "完整中文标题"
description: "一句话中文摘要"
permalink: /space-news/YYYY/MM/YYYY-MM-DD-slug/
author: 天疆说
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
---
```

英文稿把 `title` / `description` 译为英文，permalink 加 `/en/` 前缀，`author: Tianjiangshuo`：

```yaml
---
layout: SpaceNewsArticle
title: "Full English title"
description: "One-line English summary"
permalink: /en/space-news/YYYY/MM/YYYY-MM-DD-slug/
author: Tianjiangshuo
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
---
```

### 可选字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `layout` | ✅ | 固定 `SpaceNewsArticle` |
| `permalink` | ✅ | 末尾带 `/`；中文 `/space-news/`，英文 `/en/space-news/` |
| `author` | ✅ | 中文 `天疆说`；英文 `Tianjiangshuo` |
| `date` | ✅ | 事件日期 `YYYY-MM-DD` |
| `category` | ✅ | 见上方分类表 |
| `image` | ❌ | 首页卡片缩略图，**引用 `figures/<slug>/hero.{webp,jpg}`**。⚠️ **必须存在否则触发 Vite 解析错误**——若配图不可用，**直接删除 `image:` 字段**，不要留空路径或相对占位符 |
| `wechatShare` | ❌ | 微信卡片分享元数据（`title`/`desc`/`image`）。**实际稿件很少使用**，仅在主动需要微信分享时手填；不自动生成 |
| `tags` / `related` / `draft` | ❌ | 标签 / 关联稿件 / 草稿 |

### 字段填法要点

- **不要在 frontmatter 字符串里使用中文弯引号 `""`（U+201C/U+201D）** —— 会导致 `gray-matter` 解析失败。需要嵌套引号时用直角引号「」或单引号。
- **`image:` 必须以 `./figures/...` 开头**（相对该 `.md` 文件），扩展名必须与磁盘文件一致（hero.jpg 引用但实际是 hero.png 会触发构建失败）

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

1. 图片存在 `web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/` 与 `web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`（**中英两侧都需存在**），markdown 用相对路径引用
2. `gen-sidebar.ts` 扫描 frontmatter 并把生成的文章元数据写入 `space-news-articles.json`、`space-news-sidebar-data.json`、`ai-chat-index.json` 等
3. `SpaceNewsHome.vue` 的 `cardBg()` 用 `background-image: url(...)` 加载封面
4. **`npm run docs:build` 自动执行 `sync-figures.js`**，将 `figures/` 复制到 `dist/`（VuePress 不会自动复制）

⚠️ 以下自动生成文件**都在 `.gitignore` 中**（每次构建重新生成，不要尝试 commit）：
- `sidebar.auto.json`、`space-news-articles.json`、`space-news-sidebar-data.json`
- `sidebar-glossary.auto.json`
- `ai-chat-index.json`、`ai-chat-context.json`（在 `public/` 下）

详见 [BUILD-FIXES.md](BUILD-FIXES.md) 章节 F。

## 相关代码

| 文件 | 用途 |
|------|------|
| `web/.vuepress/theme2/components/SpaceNewsHome.vue` | 门户首页（卡片网格 + 月份导航） |
| `web/.vuepress/theme2/components/SpaceNewsArchive.vue` | 存档页（月度索引） |
| `web/.vuepress/theme2/components/SpaceNewsSidebar.vue` | 文章页侧栏（按月聚合） |
| `web/.vuepress/theme2/layouts/SpaceNewsArticle.vue` | 文章布局 |
| `web/.vuepress/gen-sidebar.ts` | 索引生成（`tsx` 运行，扫描 frontmatter + 写所有 auto JSON） |
| `web/.vuepress/sync-figures.js` | 图片同步（`tsx` 运行） |
| `web/.vuepress/sidebar-data.ts` / `extraSideBar.ts` | 侧边栏配置 |
| `web/.vuepress/config.ts` | VuePress 主配置（locales、plugins、Katex、/api/ai 代理） |
| `web/.vuepress/scripts/audit-share-frontmatter.mjs` | 微信分享 frontmatter 体检（CI 可选） |

## 环境注意事项

- **工作区路径**：`/home/ouyangjiahong/codes/cislunarspace/`
- **Node 版本**：要求 Node 18+（CI 与 cron 使用 v20.20.2）
- **PATH 修复（无 nvm node 时）**：
  ```bash
  PATH="/home/ouyangjiahong/.nvm/versions/node/v20.20.2/bin:$PATH"
  ```
- **浏览器不可用**：cron 环境无 Playwright，依赖 `curl -L` 或 Python `urllib.request`
- **HTTP URL 安全扫描**：用 Python `urllib.request` 替代 `curl + grep`
- **Hermes cron**：本 skill 由 Hermes Agent 内部的 `cron` 子系统调度（Job `f72a7e645135`，`0 * * * *`），不在系统 crontab 中。详见 [CRON.md](CRON.md)

## 参考文档

| 文档 | 内容 |
|------|------|
| [IMAGES.md](IMAGES.md) | 图片获取流程、压缩、各网站抓取技巧、版权标注 |
| [SOURCES.md](SOURCES.md) | 中外航天新闻源全表 + 可靠 API + 中国关键事件日历 |
| [CRON.md](CRON.md) | 定时任务执行流程 + 本地构建 + 服务器部署 |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | 撰稿陷阱、检索技术细节、各家站点解析方法 |
| [BUILD-FIXES.md](BUILD-FIXES.md) | 构建失败快速修复清单 |
