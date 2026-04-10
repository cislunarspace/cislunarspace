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

稿件 frontmatter 中 **`category`** 字段用于门户首页分类展示。支持**多分类**——当一条新闻同时属于多个类别时，使用 YAML 数组格式。

### 单分类格式

```yaml
category: spacex
```

### 多分类格式

```yaml
category: [spacex, commercial]
```

使用多分类的场景示例：
- SpaceX IPO 新闻：`[spacex, commercial]`（既是 SpaceX 动态，也是商业航天新闻）
- 中国空间站科学实验：`[china, science]`（既是中国航天，也是科学发现）
- Artemis 任务中的 ESA 参与新闻：`[artemis, esa]`

### 预定义分类值

| category 值 | 中文标签 | 英文标签 | 适用范围 |
|-------------|---------|---------|---------|
| `artemis` | Artemis | Artemis | Artemis 计划相关任务 |
| `spacex` | SpaceX | SpaceX | SpaceX 发射、Starship、Starlink、公司动态 |
| `china` | 中国航天 | China Space | 中国航天发射、航天工程 |
| `nasa` | NASA | NASA | NASA 重大任务/计划（非 Artemis） |
| `esa` | ESA | ESA | 欧洲航天局相关 |
| `iss` | 空间站 | Space Station | ISS、天宫空间站运营 |
| `launch` | 发射 | Launches | 其他商业/国际发射 |
| `commercial` | 商业航天 | Commercial Space | 商业航天公司动态、投融资 |
| `science` | 科学发现 | Science | 空间科学、天文发现 |
| `policy` | 政策战略 | Policy & Strategy | 各国航天政策、预算、战略 |

如不确定，优先选择最具体的分类。中国发射用 `china`，SpaceX 发射用 `spacex`，普通国际发射用 `launch`。跨领域新闻使用多分类数组。

## 推荐工作流

1. **确认范围**：用户指定的日期或「近 N 天」、是否中英文双语、是否合并同类简讯。
2. **检索**：用联网搜索多关键词（中/英），优先 **政府/机构官网、通讯社、任务主承包商、主流航天垂直媒体**；避免论坛、匿名搬运为唯一来源。
3. **核对**：至少一条 **可引用的原文 URL**；能打开则用 `fetch`/浏览器核对标题与日期；冲突则以机构稿为准。**同时识别原文中的高质量配图**，为下一步下载做准备。
4. **下载配图**：从原文中识别 **1~3 张** 高质量、与新闻直接相关的图片，下载到本地 `figures/` 目录。详见下方 **「图片获取与处理」** 专节——**这是必做步骤，每篇稿件至少配一张图**。
5. **撰写**：每条新闻一篇 md；**摘要** 3～6 句；**信息来源** 小节用 Markdown 列表列出 `[标题](https://...)`，勿抄袭长段落。正文中嵌入已下载的图片。
6. **更新月度 README**：在当月 `README.md`（中文 + 英文）的表格中增加一行链到该文。
7. **重新生成索引**：运行 `node web/.vuepress/gen-sidebar.js` 更新 sidebar 和 articles JSON。
8. **构建**：在仓库根目录执行 `cd web && npm run docs:build`（该命令依次执行 gen-sidebar → vuepress build → sync-figures），确认无报错。

## 图片获取与处理（必做，每篇至少一张）

**每篇稿件必须配图**——没有图片的稿件是不完整的。获取图片是标准工作流的一部分，不是可选项。

### 图片来源原则（核心规则）

**配图必须与新闻主题直接匹配，且优先从正文中引用的「信息来源」原文链接获取。**

例如：如果新闻是「SpaceX 向 SEC 提交 IPO 申请」，配图应该从 Bloomberg、Reuters 等引用的原文报道中获取相关图片（如 SpaceX 公司总部、马斯克、SEC 相关等），**而不是**随便找一张 SpaceX 火箭发射的照片凑数。如果是发射新闻，则配图应该是该次发射的实拍照片。

### 图片来源优先级

1. **正文中引用的原文链接中的配图**（最优先——确保图文一致）— 从「信息来源」中列出的第一个或最权威的原文 URL 获取
2. **NASA 官网 / NASA Image Library**（公共领域，可自由使用）
3. **ESA 官网**（通常允许注明出处后使用）
4. **各国航天机构官方发布的新闻稿配图**（CNSA、JAXA、KASA 等，通常允许注明出处后使用）
5. **SpaceX 官方 Flickr / X 账号发布的图片**（通常允许媒体使用）
6. **Rocket Lab、Blue Origin 等公司官方发布的图片**
7. **主流航天媒体（Spaceflight Now、Space News 等）文章配图**（需判断版权）

### 获取流程

1. **打开正文中引用的原文链接**（即「信息来源」小节中列出的 URL），用 `fetch` 或浏览器抓取页面内容
2. **从原文页面中识别主图**：提取 `<img>` 或 `<picture>` 标签中的图片地址，优先选择：文章顶部 hero 图、宽度 ≥ 1000px 的高分辨率版本、与新闻主题最相关的图片
3. **下载图片**：用 `curl -L -o <本地路径> <图片URL>` 下载到 `figures/` 目录
4. **如果原文没有高质量图片**，再按「图片来源优先级」列表依次寻找替代来源
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
author: Tianjiangshuo
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
| `author` | ✅ | 中文固定 `天疆说`，英文固定 `Tianjiangshuo` |
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

## 图片处理架构（重要！）

**空间新闻首页卡片图片显示的关键路径：**

1. 图片文件存放在 `web/space-news/YYYY/MM/figures/YYYY-MM-DD-slug/` 中（Markdown 中使用相对路径引用）
2. `gen-sidebar.js` 将 frontmatter 中的相对 `image` 路径转为绝对 URL（如 `/space-news/2026/04/figures/.../hero.jpg`）写入 `space-news-articles.json`
3. `SpaceNewsHome.vue` 的 `cardBg()` 函数使用 `background-image: url(...)` 加载图片
4. **关键步骤**：VuePress 构建**不会**自动将 `figures/` 目录复制到 `dist/`。`npm run docs:build` 在 VuePress 构建后自动执行 `npm run sync-figures`（即 `node .vuepress/sync-figures.js`），将所有 `figures/` 文件复制到 `dist/` 对应路径

**⚠️ 如果图片不显示，排查步骤：**
1. 确认 `figures/` 目录中有实际的图片文件
2. 确认 `npm run docs:build` 完整执行（包含 sync-figures 步骤）
3. 确认 `space-news-articles.json` 中 image 字段为正确的绝对路径（非 `null`）

**⚠️ 如果使用自定义构建命令（如自动化脚本），必须在 vuepress build 之后手动运行 `node web/.vuepress/sync-figures.js`，否则图片不会出现在 dist/ 中。**

## 相关代码（维护时查阅）

- **门户首页**：`web/.vuepress/theme2/components/SpaceNewsHome.vue`（读取 articles JSON，按 category 分组展示）
- **存档页**：`web/.vuepress/theme2/components/SpaceNewsArchive.vue`
- **布局**：`web/.vuepress/theme2/layouts/SpaceNewsArticle.vue`（PageToc + Footer）
- **索引生成**：`web/.vuepress/gen-sidebar.js`（生成 `sidebar.auto.json` + `space-news-articles.json`）
- **图片同步**：`web/.vuepress/sync-figures.js`（构建后将 `figures/` 复制到 `dist/`，确保首页卡片图片可访问）
- **侧边栏**：`web/.vuepress/sidebar.ts` / `sidebar-en.ts`（引用 `sidebar.auto.json`）
- **分类定义**：`SpaceNewsHome.vue` 中的 `categoryMeta` 对象

## 自动化执行流程（cron / 定时任务，每小时执行）

当以自动化方式执行更新时，按以下步骤**严格顺序**执行。每一步依赖前一步的产出。由于每小时执行一次，单次更新通常只有 0~2 条新闻是正常的——不要为了凑数量而降低质量标准。

### 阶段一：检索与筛选

1. **搜索中国航天新闻**（中文关键词：神舟、天宫、长征、嫦娥、天问、北斗、商业航天、天龙、朱雀、双曲线、谷神星、引力、力箭等），时间范围为最近一个更新周期（通常 1 小时）
2. **搜索国际航天新闻**（英文关键词：Artemis、SpaceX、Starship、ESA、NASA、Rocket Lab 等），同一时间范围
3. **搜索其他值得报道的新闻**（补充性搜索，覆盖前两轮未涉及的事件）
4. 按重要程度排序：**重大任务里程碑 > 发射 > 政策/商业动态 > 常规发射**
5. Starlink 等高频常规发射合并为一条汇总，不逐条报道
6. 检查当月目录已有稿件，**去重**（同一事件不重复撰写）
7. 统计中国 vs 国际新闻比例——中国航天新闻占比**不得低于 30%**；如不足，回到步骤 1 补充搜索
8. **如果主要领域未搜到足够新闻（< 2 条），扩展搜索以下领域：**
   - 深空探测进展（火星、小行星、深空探测器状态更新）
   - 卫星运营与商业应用（通信卫星、遥感卫星、导航系统）
   - 航天政策与预算（各国航天预算、法案、战略规划）
   - 空间科学与天文发现（天文观测、物理学实验、宇宙学发现）
   - 商业航天投融资（融资、并购、IPO、合作）
   - 航天技术与创新（新材料、推进技术、在轨制造、太空 3D 打印）
   - 太空碎片与轨道安全（碎片监测、碰撞预警、清理任务）
   - 各国航天计划动态（印度 ISRO、日本 JAXA、韩国 KASA、阿联酋航天局等）
   - 航天员与空间站（训练、健康研究、科普活动）
   - 太空旅游与载人航天商业化
9. **如果扩展搜索后仍无值得报道的新闻**，简短汇报即可，**不要硬凑内容**

### 阶段二：核对与撰稿

10. 核实每条新闻的来源（优先机构官网、通讯社、主流航天媒体），确保每篇稿件至少有一条可引用的原文 URL
11. 为每条新闻**下载配图**到 `figures/<slug>/`（每篇至少一张，详见「图片获取与处理」专节）
12. 撰写中英双语稿件（中国新闻先写中文再译英文；国际新闻先写英文再译中文），遵循上方 frontmatter 模板和正文结构
13. `category` 必须从「新闻分类」预定义列表选择；`layout` 固定 `SpaceNewsArticle`；英文稿 slug 与中文一致（无 `-en` 后缀），permalink 以 `/en/` 开头

### 阶段三：索引与构建（⚠️ 关键步骤，不可跳过）

**这一步是将新稿件呈现到首页卡片上的必要操作。跳过此步骤 = 新稿件只存在于磁盘上，不会出现在航天动态首页。**

14. 更新当月 `README.md` 索引（中文 `web/space-news/YYYY/MM/README.md` + 英文 `web/en/space-news/YYYY/MM/README.md`）；如需新建年/月目录，同步更新年索引
15. 运行构建流程：`cd web && npm run docs:build`（该命令依次执行 `gen-sidebar.js` → `vuepress build` → `sync-figures.js`）
    - **`gen-sidebar.js`**：扫描所有 md 文件的 frontmatter，生成 `space-news-articles.json`——这是首页 `SpaceNewsHome.vue` 读取新闻列表的数据源。**不运行此脚本，新稿件不会出现在首页卡片中。**
    - **`vuepress build`**：构建静态站点
    - **`sync-figures.js`**：将 `figures/` 目录中的图片复制到 `dist/`，确保首页卡片图片可加载
16. **验证**：确认 `space-news-articles.json` 中包含了本次新增的稿件条目（检查 `title` 和 `image` 字段是否正确）

### 阶段四：汇报

17. 汇报本次更新结果：新增 N 条中文 / M 条英文稿件，并列出各稿件标题
18. 如该周期内无值得报道的新闻，简短说明即可，不必硬凑

## 中英文平衡策略（必须遵守）

**每次更新时，中英文新闻数量应大致相当。** 当前网站定位面向中文用户为主，中国航天新闻是核心内容，不应被国际新闻淹没。

### 平衡规则

1. **中国航天新闻优先搜索**：每次更新时，先搜索中国航天新闻（中文关键词），再搜索国际新闻
2. **最低比例**：每次更新中，中国航天相关新闻（category 为 `china`、`iss` 中天宫相关）占比不应低于 30%
3. **对等原则**：如果有 3 条国际新闻，至少应有 2 条中国航天新闻
4. **中文原创，英文翻译**：所有新闻必须中英文双语发布，但中国航天新闻应先写中文版，再翻译英文版；国际新闻先写英文版，再翻译中文版

### 具体执行方法

搜索新闻时按以下顺序执行：

1. 第一轮搜索：中国航天新闻（中文关键词：神舟、天宫、长征、嫦娥、天问、北斗、商业航天等）
2. 第二轮搜索：国际重大新闻（英文关键词：Artemis、SpaceX、Starship、ESA 等）
3. 第三轮搜索：其他值得报道的新闻
4. 统计中国 vs 国际新闻比例，如中国新闻不足，回到第一轮补充

## 航天新闻发布渠道全面指南

### 中国航天新闻源

| 来源 | 网址 | 内容 | 图片获取方式 |
|------|------|------|-------------|
| **国家航天局（CNSA）** | `https://www.cnsa.gov.cn/n6758823/n6758838/` | 要闻动态、政策公告 | HTML 中 `<img src="../../../n6758823/.../part/{id}.jpg">` → 拼接为 `https://www.cnsa.gov.cn/n6758823/.../part/{id}.jpg`，可直接 `curl -L` 下载 |
| **中国载人航天工程办公室（CMSA）** | `http://www.cmse.gov.cn/` | 载人航天任务官方信息、航天员动态 | 页面图片可直接下载，URL 格式类似 CMSA 静态资源路径 |
| **我们的太空（新媒体平台）** | 微信公众号、新华网合作 | 航天员在轨动态、科普 | CNSA 网站转载的文章底部标注"来源：我们的太空"，图片在 CNSA 页面中可获取 |
| **中国航天科技集团（CASC）** | `http://www.spacechina.com/` | 长征火箭、卫星、重大工程 | 新闻页面有配图，可直接下载 |
| **中国航天科工集团（CASIC）** | `http://www.casic.com.cn/` | 防务、快舟火箭等 | 新闻页面有配图 |
| **新华社 / 央视网** | `https://www.news.cn/` `https://news.cctv.com/` | 权威中文新闻报道 | 新华社图片需注意版权，优先从 CNSA 获取同一事件的官方配图 |
| **中国探月与深空探测网** | `http://www.clep.org.cn/` | 嫦娥、天问等深空探测任务 | 任务图片和科学数据 |
| **北斗网** | `http://m.beidou.gov.cn/` | 北斗导航系统动态 | 新闻配图 |
| **高分专项** | `https://www.cpeos.org.cn/` | 高分辨率对地观测 | 卫星图像、工程进展 |

### 中国商业航天公司新闻源

| 公司 | 主要火箭 | 新闻渠道 | 图片获取 |
|------|---------|---------|---------|
| **天兵科技（Space Pioneer）** | 天龙系列 | 微信公众号、微博 | 官方发布的高清图片通常可截图/保存 |
| **蓝箭航天（LandSpace）** | 朱雀系列 | 微信公众号、官网 `https://www.landspace.com/` | 官网有高清配图 |
| **星际荣耀（iSpace）** | 双曲线系列 | 微信公众号、微博 | 官方社交媒体发布 |
| **星河动力（Galactic Energy）** | 谷神星系列 | 微信公众号 | 官方发布 |
| **东方空间（Orienspace）** | 引力系列 | 微信公众号 | 官方发布 |
| **中科宇航（CAS Space）** | 力箭系列 | 微信公众号 | 官方发布 |
| **天兵科技/箭元科技等** | 各类 | 微信公众号、微博 | 通常发布在社交媒体 |

**注意**：中国商业航天公司的新闻主要通过**微信公众号和微博**发布，官网更新频率较低。获取图片的方式：
- 优先从公司官网获取（如有）
- 微信公众号文章中的图片可以通过浏览器打开文章后下载
- 微博图片 URL 格式通常为 `https://wx*.sinaimg.cn/large/{id}.jpg`，可直接 curl 下载
- 如果无法下载，在正文中使用外链指向原始发布页面

### 国际航天新闻源

| 来源 | 网址 | 内容 | 图片获取方式 |
|------|------|------|-------------|
| **NASA 官网** | `https://www.nasa.gov/blogs/missions/` | 任务博客（Artemis、ISS 等） | `og:image` meta 标签中有高清图片 URL，通常在 `https://www.nasa.gov/wp-content/uploads/` 下，可直接 `curl -L` 下载；**公共领域，可自由使用** |
| **NASA Image and Video Library** | `https://images.nasa.gov/` | NASA 历史图片库 | API：`https://images-api.nasa.gov/search?q=...`，返回 JSON 含图片 URL |
| **ESA 官网** | `https://www.esa.int/` | 欧洲航天局新闻 | 图片 URL 在 `https://www.esa.int/var/esa/storage/images/` 下，可下载；注明出处即可 |
| **SpaceX** | `https://www.flickr.com/photos/spacex/` `https://x.com/SpaceX` | 发射照片、任务更新 | Flickr 图片可直接下载（多尺寸可选）；X 上的图片 URL 格式 `https://pbs.twimg.com/media/{id}.jpg` |
| **Rocket Lab** | `https://www.rocketlabusa.com/updates/` | Electron 发射、Photon 任务 | 官网 Update 页面有高清配图 |
| **Blue Origin** | `https://www.blueorigin.com/news` | New Shepard/New Glenn 发射 | 新闻页面有配图 |
| **ULA** | `https://www.ulalaunch.com/missions` | Atlas V、Vulcan 发射 | 任务页面有高清配图 |
| **Arianespace** | `https://www.arianespace.com/mission-updates/` | Ariane、Vega 发射 | 任务更新页面有配图 |
| **Spaceflight Now** | `https://spaceflightnow.com/` | 全球发射综合报道 | 文章配图需判断版权；优先从原始机构获取 |
| **Space News** | `https://spacenews.com/` | 航天产业新闻 | 文章配图需判断版权 |
| **NASASpaceflight.com** | `https://www.nasaspaceflight.com/` | 深度技术报道 | 论坛和文章配图 |
| **JAXA** | `https://www.jaxa.jp/` | 日本航天任务 | 新闻配图可下载，注明出处 |
| **KASA（韩国）** | `https://www.kasa.kr/` | 韩国航天 | 新闻配图 |
| **ISRO** | `https://www.isro.gov.in/` | 印度航天任务 | 新闻配图可下载 |

### 各网站图片下载方法速查

| 网站 | HTML 中图片特征 | 下载命令 | 注意事项 |
|------|---------------|---------|---------|
| **NASA Blogs** | `<meta property="og:image">` 或 `<img>` 在文章内 | `curl -L -o hero.png "$URL"` | 公共领域，最自由 |
| **CNSA** | `<img src="../../../n6758823/.../part/{id}.jpg">` | 拼接 `https://www.cnsa.gov.cn` + 相对路径，然后 `curl -L` | 注明"我们的太空 / 国家航天局" |
| **ESA** | `<picture><source>` 或 `<img>` | 直接 `curl -L` | 注明 `Credit: ESA` |
| **SpaceX Flickr** | `https://live.staticflickr.com/.../{id}_o.jpg`（原图） | `curl -L -o hero.jpg "$URL"` | Flickr 标注可商用 |
| **SpaceX X** | `https://pbs.twimg.com/media/{id}?format=jpg&name=large` | `curl -L -o hero.jpg "$URL"` | 需注明来源 |
| **Rocket Lab** | `<img>` in `.update-card` | `curl -L` | 注明来源 |
| **CMSA** | `<img>` 相对路径 | 拼接完整 URL 后 `curl -L` | 注明来源 |
| **微信公众号** | `<img data-src="https://mmbiz.qpic.cn/...">` | 浏览器打开后 `curl -L`，需带 Referer | 微信图片防盗链，可能需要特殊处理 |
| **微博** | `https://wx*.sinaimg.cn/large/{id}.jpg` | `curl -L` | 通常可直接下载 |

### 中国航天关键事件日历（定期发生的可预期新闻）

| 事件 | 大致频率 | 搜索关键词 |
|------|---------|-----------|
| 长征系列发射 | 每月 3-5 次 | "长征 发射"、"CZ-* 发射" |
| 神舟/天宫任务更新 | 在轨期间每周 | "神舟"、"天宫"、"出舱" |
| 嫦娥/天问任务更新 | 按任务阶段 | "嫦娥"、"天问" |
| 商业火箭首飞/新火箭 | 不定期 | "天龙"、"朱雀"、"双曲线"、"谷神星"、"引力"、"力箭" |
| 航天政策/规划发布 | 每季度 | "航天白皮书"、"航天计划"、"商业航天政策" |
| 北斗系统更新 | 不定期 | "北斗" |
