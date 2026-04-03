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
3. **核对**：至少一条 **可引用的原文 URL**；能打开则用 `fetch`/浏览器核对标题与日期；冲突则以机构稿为准。
4. **撰写**：每条新闻一篇 md；**摘要** 3～6 句；**信息来源** 小节用 Markdown 列表列出 `[标题](https://...)`，勿抄袭长段落。
5. **配图**：若原报道有公开可引用的图片（或机构图库明确允许使用的素材），**下载到本地**并写入正文；路径规则见 **「图片与 figures 目录」**。
6. **更新月度 README**：在当月 `README.md`（中文 + 英文）的表格中增加一行链到该文。
7. **重新生成索引**：运行 `node web/.vuepress/gen-sidebar.js` 更新 sidebar 和 articles JSON。
8. **构建**：在 `web/` 下执行 `npx vuepress build .`（必要时先清理损坏的 `@vuepress/core/.temp`）确认无报错。

## 图片与 `figures` 目录（必须遵守）

- **位置**：与稿件 `YYYY-MM-DD-slug.md` 位于**同一月份目录**下，建子目录：
  - 中文：`web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`
  - 英文：`web/en/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/`（与中文 **同结构**；文件可相同，便于中英页面各自用相对路径解析）
- **命名**：图片文件名用英文/拼音短名 + 序号，如 `01-launch.webp`、`hero.jpg`；避免中文文件名与空格。
- **Markdown 引用**：使用**相对路径**（相对该 `.md` 文件），便于 VuePress 打包，例如：
  ```markdown
  ![长征三号乙发射现场（新华社配图，来源见下）](./figures/2025-03-26-china-tianlian-ii-04/01-launch.webp)
  ```
  英文稿中路径写法相同（`./figures/同一slug/...`），因英文 md 与中文在同一层级结构下。
- **说明文字**：每张图下用一句 *斜体* 或单独一行标注 **版权/来源**（如 NASA image、新华社、机构新闻稿配图）；若版权不明或禁止转载，**不下载、仅用外链**：
  `[![alt](https://原站图片URL)](https://原文链接)` 或正文中说明「配图见来源页面」。
- **体积**：优先压缩为 WebP/JPEG；单张不宜过大（建议单文件不超过约 500KB，视仓库策略调整）。

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
