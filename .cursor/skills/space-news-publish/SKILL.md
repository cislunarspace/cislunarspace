---
name: space-news-publish
description: >-
  Searches open web for recent space and launch news (China and international),
  writes bilingual Markdown under web/space-news/YYYY/MM/ with primary-source
  links, saves illustrative images under a per-article figures/ folder next to each
  post, updates month index and sidebar when needed, and verifies VuePress build.
  Use when the user asks to update Space News, ingest or crawl space news, add
  dated news posts, or automate 航天动态 / space-news content for cislunarspace.
---

# Space News 撰稿与入库

面向仓库 `web/` 下的 **Space News（航天动态）** 栏目：智能体应**先检索、再落盘、后校验**，与现有门户首页与存档页逻辑一致。

## 站点约定（必须遵守）

| 项目 | 规则 |
|------|------|
| 中文稿 | `web/space-news/YYYY/MM/YYYY-MM-DD-slug.md` |
| 英文稿 | `web/en/space-news/YYYY/MM/YYYY-MM-DD-slug.md`（同 slug，无 `-en` 后缀） |
| 排除 | 各层 **`README.md`** 仅为索引页，**不算**一篇新闻；勿把索引当稿件统计 |
| 门户展示 | `SpaceNewsHome` 读取 `space-news-articles.json`（由 `gen-sidebar.js` 自动生成）；`draft: true` 可隐藏 |
| 布局 | 正文页统一 `layout: SpaceNewsArticle`（含页脚 + TOC） |
| 配图 | 正文中嵌入新闻相关图片；**静态文件**放在与该 `.md` **同目录**下的 **`figures/<稿件 slug>/`** 内 |

新建 **新年/新月** 时：在 `web/space-news/YYYY/README.md`、`YYYY/MM/README.md`（及 `web/en/space-news/` 镜像）补索引表；然后**重新运行 `node web/.vuepress/gen-sidebar.js`** 以更新 `sidebar.auto.json` 和 `space-news-articles.json`。

## 新闻分类（category）

稿件 frontmatter 中 **`category`** 字段用于门户首页分类展示。使用以下预定义值之一：

| category 值 | 中文标签 | 英文标签 | 适用范围 |
|-------------|---------|---------|---------|
| `artemis` | Artemis | Artemis | Artemis 计划相关任务 |
| `spacex` | SpaceX | SpaceX | SpaceX 发射、Starship、Starlink |
| `china` | 中国航天 | China Space | 中国航天发射、航天工程 |
| `nasa` | NASA | NASA | NASA 重大任务/计划（非 Artemis） |
| `esa` | ESA | ESA | 欧洲航天局相关 |
| `iss` | 空间站 | Space Station | ISS、天宫空间站运营 |
| `launch` | 发射 | Launches | 其他商业/国际发射 |
| `commercial` | 商业航天 | Commercial Space | 商业航天公司动态 |
| `science` | 科学发现 | Science | 空间科学、天文发现 |
| `policy` | 政策战略 | Policy & Strategy | 各国航天政策、预算、战略 |

如不确定，优先选择最具体的分类。中国发射用 `china`，SpaceX 发射用 `spacex`，普通国际发射用 `launch`。

## 推荐工作流

1. **确认范围**：用户指定的日期或「近 N 天」、是否中英文双语、是否合并同类简讯。
2. **检索**：用联网搜索多关键词（中/英），优先 **政府/机构官网、通讯社、任务主承包商、主流航天垂直媒体**；避免论坛、匿名搬运为唯一来源。
3. **核对**：至少一条 **可引用的原文 URL**；能打开则用 `fetch`/浏览器核对标题与日期；冲突则以机构稿为准。**同时识别原文中的高质量配图**，为下一步下载做准备。
4. **下载配图**：从原文中识别 **1~3 张** 高质量、与新闻直接相关的图片，下载到本地 `figures/` 目录。详见下方 **「图片获取与处理」** 专节——**这是必做步骤，每篇稿件至少配一张图**。
5. **撰写**：每条新闻一篇 md；**摘要** 3～6 句；**信息来源** 小节用 Markdown 列表列出 `[标题](https://...)`，勿抄袭长段落。正文中嵌入已下载的图片。
6. **更新月度 README**：在当月 `README.md`（中文 + 英文）的表格中增加一行链到该文。
7. **重新生成索引**：运行 `node web/.vuepress/gen-sidebar.js` 更新 sidebar 和 articles JSON。
8. **构建**：在 `web/` 下执行 `npx vuepress build .`（必要时先清理损坏的 `@vuepress/core/.temp`）确认无报错。

## 图片获取与处理（必做，每篇至少一张）

**每篇稿件必须配图**——没有图片的稿件是不完整的。获取图片是标准工作流的一部分，不是可选项。

### 图片来源优先级

1. **NASA 官网 / NASA Image Library**（公共领域，可自由使用）— 最优先
2. **ESA 官网**（通常允许注明出处后使用）
3. **各国航天机构官方发布的新闻稿配图**（CNSA、JAXA、KASA 等，通常允许注明出处后使用）
4. **SpaceX 官方 Flickr / X 账号发布的图片**（通常允许媒体使用）
5. **Rocket Lab、Blue Origin 等公司官方发布的图片**
6. **主流航天媒体（Spaceflight Now、Space News 等）文章配图**（需判断版权）

### 获取流程

1. **打开原文页面**，用 `fetch` 或浏览器抓取页面内容
2. **识别图片 URL**：从页面 HTML 中提取 `<img>` 或 `<picture>` 标签中的图片地址，优先选择宽度 ≥ 1000px 的高分辨率版本
3. **下载图片**：用 `curl -L -o <本地路径> <图片URL>` 下载到 `figures/` 目录
4. **压缩（可选）**：如果图片超过 500KB，用 `cwebp` 或 `convert`（ImageMagick）压缩为 WebP/JPEG
   ```bash
   # WebP 压缩（推荐）
   cwebp -q 80 input.jpg -o output.webp
   # JPEG 压缩
   convert input.jpg -quality 85 -resize '1200>' output.jpg
   ```
5. **英文版复用**：中文和英文稿件共用同一套图片文件，分别放在各自目录的 `figures/` 下（可以只下载一次后 `cp` 过去）

### `figures` 目录结构

- **位置**：与稿件 `YYYY-MM-DD-slug.md` 位于**同一月份目录**下
  - 中文：`web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`
  - 英文：`web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`
- **命名**：英文/拼音短名 + 序号，如 `hero.webp`、`01-launch.webp`、`02-crew.jpg`；避免中文文件名与空格
- **首图（hero）**：第一张图命名为 `hero.webp` 或 `hero.jpg`，作为 frontmatter `image` 字段和首页卡片缩略图

### Markdown 引用

使用**相对路径**（相对该 `.md` 文件）：

```markdown
![猎户座飞船视角的地球（NASA 图像）](./figures/2026-04-01-artemis-2-launch/hero.webp)
*Credit: NASA*
```

英文稿路径写法相同：
```markdown
![Earth seen from Orion spacecraft (NASA image)](./figures/2026-04-01-artemis-2-launch/hero.webp)
*Credit: NASA*
```

### 版权标注

每张图下方**必须**标注来源，格式：
- 公共领域：`*Credit: NASA*` 或 `*图片来源：NASA（公共领域）*`
- 需注明出处：`*Credit: ESA / Stephan Bidou*` 或 `*图片来源：ESA，已获授权*`
- 版权不明：**不下载**，改用外链 `[查看配图](原文URL)`

### 图片获取失败时的降级策略

- 如果 `curl` 下载失败（403/404），尝试浏览器抓取
- 如果浏览器也无法获取，在正文中使用外链指向原图：`[查看现场图片（来源页面）](原文URL)`
- **不要留无图稿件**——至少用外链指向配图页面

### 图片体积控制

- 单张建议不超过 **500KB**
- 优先使用 WebP 格式（同等质量体积更小）
- 原图过大的用 `cwebp -q 80` 或 `convert -resize '1200>'` 压缩

## Frontmatter 模板（中文）

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

可选字段：`tags`（数组）、`related`（关联稿件 slug 列表）。

## Frontmatter 模板（英文）

```yaml
---
layout: SpaceNewsArticle
title: "Short English title"
description: "One-line summary"
permalink: /en/space-news/YYYY/MM/YYYY-MM-DD-slug/
author: 天疆说
date: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
category: china
image: ./figures/YYYY-MM-DD-slug/hero.jpg
---
```

### Frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `layout` | ✅ | 固定 `SpaceNewsArticle`（含页脚和 TOC） |
| `title` | ✅ | 稿件标题 |
| `description` | ✅ | 一句话摘要，首页卡片 + SEO 用 |
| `permalink` | ✅ | 末尾带 `/`，中文以 `/space-news/` 开头，英文以 `/en/space-news/` 开头 |
| `author` | ✅ | 固定 `天疆说` |
| `date` | ✅ | 事件日期 `YYYY-MM-DD` |
| `lastUpdated` | ✅ | 最后更新日期，初始同 `date` |
| `category` | ✅ | 分类，见上方「新闻分类」表 |
| `image` | ❌ | 首页卡片缩略图，相对路径指向 figures 中的图片 |
| `tags` | ❌ | 标签数组，便于搜索和关联 |
| `related` | ❌ | 关联稿件 slug 列表 |
| `draft` | ❌ | `true` 时不在首页和存档展示 |

## 正文结构

### 中文稿

```markdown
# 与 title 一致或略短

**摘要：** …

（可选：一张主图，路径 `./figures/YYYY-MM-DD-slug/...`）

## 信息来源（原文）

- [来源名称或报道标题](https://...)
- …

> 可选：转载说明或日期/时区备注。
```

### 英文稿

```markdown
# English title matching frontmatter

**Summary:** ...

(Optional: hero image from ./figures/YYYY-MM-DD-slug/...)

## Sources (original pages)

- [Source name or article title](https://...)
- ...

> Optional: republication notes or timezone remarks.
```

## 质量与合规

- **日期**：事件日期写入 `date`；跨时区发射写清 UTC/当地时间并指向原报道。
- **不确定**：写「据报道」「待机构确认」，勿编造轨参、载荷细节。
- **版权**：仅摘要 + 链接；不整篇粘贴付费墙或通讯社全文。
- **图片**：遵守原站版权与使用条款；优先使用 NASA/ESA 等标注为公共领域的素材；商业媒体配图无授权则不入库、仅链向原页。
- **去重**：撰稿前检查当月目录是否已有同一事件稿件，避免重复。

## 相关代码（维护时查阅）

- **门户首页**：`web/.vuepress/theme2/components/SpaceNewsHome.vue`（读取 articles JSON，按 category 分组展示）
- **存档页**：`web/.vuepress/theme2/components/SpaceNewsArchive.vue`
- **布局**：`web/.vuepress/theme2/layouts/SpaceNewsArticle.vue`（PageToc + Footer）
- **索引生成**：`web/.vuepress/gen-sidebar.js`（生成 `sidebar.auto.json` + `space-news-articles.json`）
- **侧边栏**：`web/.vuepress/sidebar.ts` / `sidebar-en.ts`（引用 `sidebar.auto.json`）
- **分类定义**：`SpaceNewsHome.vue` 中的 `categoryMeta` 对象

## 定期更新注意事项

当以自动化方式（cron / 定时任务）执行更新时：

1. 搜索最近一个更新周期内的新闻，使用中英文双语关键词
2. 按重要程度排序：重大任务里程碑 > 发射 > 政策/商业动态 > 常规 Starlink 发射
3. Starlink 等高频常规发射可合并为「本周 Starlink 发射汇总」而非逐条报道
4. 如该周期内无值得报道的新闻，简短记录即可，不必硬凑
5. 每次更新完毕后汇报：新增 N 条中文 / M 条英文稿件
