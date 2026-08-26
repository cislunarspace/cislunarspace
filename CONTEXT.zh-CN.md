[English](CONTEXT.md) | 简体中文

# CONTEXT：地月空间入门指南

一个关于地月空间的双语（zh/en）知识库。本文件记录应在 issue、ADR、测试、代码与 PR 中保持一致使用的领域词汇。如果你需要的概念不在这里，这是一个信号：要么重新斟酌术语，要么通过 `/grill-with-docs` 扩充本文件。

## 词汇表

### 分类法模块（Taxonomy）

站点上每个知识库章节、页面、词条类别、新闻类别、导航栏项、特殊表面与导引项的结构化目录，连同它们的身份、排序与双语文档路径。见统一分类法模块的 [ADR-0001](docs/adr/0001-unified-taxonomy-module.md)。

### TaxonomyNode

分类法中的一个条目。携带稳定的、与语言无关的 `id`，一个 `kind`（开放枚举：section、group、page、index、glossary-category、navbar-link、external-link……），双语 `label`，按语言解析的 `path`，同级 `order` 与 `parentId`。定义于 `web/.vuepress/taxonomy/types.ts`（目标形态）。

### 身份（NodeId）

`TaxonomyNode` 的稳定、语言无关字符串 id（如 `research-frontiers/directions/orbit-design`）。由规范 zh slug 链派生。重命名 slug 会产生新 id 并附带一条重定向（id 永不无声复用）。重命名 **label** 不改变 id。

### VuePress locale root/config（VuePress 语言根/配置）

框架级的语言路由与主题配置。站点目前用 `/` 对应 zh-CN、`/en/` 对应 en-US。它不是分类法身份，不是 `LocalePath`，也不是用户偏好；它是 VuePress 用来选择特定语言的标题、描述、导航栏、侧边栏与语言选择器文案的路由根约定。

### LocalePath

`TaxonomyNode` 已解析 URL 路径的对儿 `{ zh, en }`。某一侧为 `null` 表示该节点有意缺席该语言（见 Locale gating），或该节点是有意无路径的元数据/分组/类别 kind。`LocalePath` 是在语言根、路径约定与门控都已应用之后的路由数据；消费方从中选取 `path[locale]`，不得临时拼凑，也绝不拼接 `'/en' + zhPath`。

### Locale gating（语言门控）

约定：`TaxonomyNode` 通过可选字段 `locales: ('zh'|'en')[]` 声明其语言存在性。未定义 = 双语皆有。`['zh']` = 仅中文（反之亦然）。用于刻意不做翻译的内容（如 `navbar/dialectic` 下的辩证表面）。

### Runtime locale detection（运行时语言检测）

为当前页面决定渲染哪个语言分支的运行时判定。对当前页渲染而言，路由优先：`/en/` 下的页面渲染 en 界面/数据，其余页面渲染 zh 界面/数据。运行时语言检测回答的是**用户现在在哪？**它与存储的语言偏好、分类法的语言存在性彼此独立。

### Locale preference（语言偏好，`cislunar-lang-chosen`）

持久的浏览器本地偏好/哨兵值，用于影响落地页重定向，并记住访客跨越过语言根。它存储短值 `zh`/`en`。它不是当前语言本身，且不得压过当前路由、不可用的 `LocalePath`、语言门控或缺失的双语对应物。

### Bilingual counterpart（双语对应物）

跨语言共享同一稳定身份的 zh/en 内容项对儿。对分类法页面而言，对应关系锚定在同一 `NodeId` 加上节点的 `LocalePath` 上。对应物的存在只关乎语言可用性；它不保证文本一致、翻译完备或发布时机相同。

### Translation gap（翻译缺口）

在某个本应存在该概念的 locale 里，无意缺失的双语对应物。目前跟踪的是存在于 zh 而缺失于 en 的词条页面，由 `TranslationGapIntake` 和 AI 路由索引中的 **(needs translation)** 占位符呈现。语言门控是有意缺席；被门控的页面不是翻译缺口。分类法模块不把二者混为一谈。

### Locale-partitioned generated artifact(按语言分区的生成工件)

构建产物中按 locale 分组或过滤的记录，形如 `{ zh: ..., en: ... }`。例如 AI 路由索引与 AI 上下文语料。语言分区是从源内容、分类法、intake 和 adapter 派生的产物，不是语言政策的源头。

### Locale selection order（语言选取次序）

渲染当前页面时，当前路由/运行时语言优先。仅当存在有效目标时，存储的语言偏好才可影响落地重定向或显式语言切换。`LocalePath` 与双语对应物的可用性决定目标路由/内容项能否存在。语言门控与翻译缺口解释为何预期语言缺席：有意缺席 vs 无意缺失对应物。

### Adapter（适配器）

从分类法模块派生特定站点表面输出形状的纯函数。每个既有输出（navbar、sidebar、glossary-categories、news-categories、wayfinding、ai-chat-index）都是 adapter 而非事实来源。清单见 ADR-0001。

### Intake（采集器）

构建期数据采集的既有流水线阶段名（位于 `web/.vuepress/intakes/`）。Intake 消费文件系统扫描并产出类型化中间件（如 `GlossaryScan`、`ChatIndexIntake`、`TranslationGapIntake`）。在统一分类法的世界里，intake 从 adapter 读取数据，而不是直接读 `glossary-meta.ts` 或 `sidebar/data.ts`。

### NodeKind

`TaxonomyNode` 上的判别字段。**开放枚举**：可以新增 kind 而无需修订 ADR-0001，前提是 `TaxonomyNode` 接口形状、语言门控规则、身份规则与路径约定规则不变。Adapter 以忽略未知 kind 的方式保持容忍。

### Section / group / page / index

侧边栏树中的四个结构 kind。

- **Section**：侧边栏顶层条目（如 `cislunar-orbits`、`research-frontiers`）。
- **Group**：section 内可折叠的簇（如 `nrho`、`dro`）。
- **Page**：叶子内容页。
- **Index**：section/group 根上的 README；与其父节点共用路径（现 `sidebar/data.ts` 中 `slug === ''`）。

### Sidebar source of truth（侧边栏事实来源）

`web/.vuepress/taxonomy/data.ts`（目标态）。今天这一职责分散在 `sidebar/data.ts`、`navbar.ts`、`navbar-en.ts`、`glossary-meta.ts`、`category-meta.json` 以及 `wayfinding-intake.ts` 的内联数组里。迁移计划见 ADR-0001。

### AI route index（AI 路由索引）

以 `/ai-chat-index.json` 伺服的生成型 AI 问答路线规划工件。规范形态按 locale 再按 `ChatIndexCategory` 分组：`{ zh: ChatIndexCategory[], en: ChatIndexCategory[] }`。每个 `ChatIndexCategory` 含一个分组键加若干 `IndexRow`；每个 `IndexRow` 携带一条 AI 检索路径和标题。AI 路由索引只用于路线选择与有效链接约束（它不是完整答案语料，也不是侧边栏树的 **Index** kind）。

### AI context corpus（AI 上下文语料）

以 `/ai-chat-context.json` 伺服的生成型 AI 问答答案上下文工件。它是按语言分区、以 AI 检索路径为键的语料：`{ zh: Record<path, { title, text }>, en: Record<path, { title, text }> }`。Router 从 AI 路由索引选出 AI 检索路径之后，Answer 阶段才从 AI 上下文语料读取。这里的缺失行是 AI 上下文缺口，除非缺失内容恰是仅 zh 存在的词条页面，否则不算翻译缺口。

### AI retrieval path（AI 检索路径）

Router 选出的运行时 URL 路径，用来把 AI 路由索引中的 `IndexRow` 连接到 AI 上下文语料中的 `{ title, text }` 记录。它是检索/连接键，不是分类法身份：不要与 `NodeId`、`LocalePath`、`relativePath`、文章 slug 或文章文件名混淆。

### ChatIndexCategory

分组后的 AI 路由索引内的一种 AI 专用分组键。它为路由/提示结构聚合 `IndexRow` 条目，但它不是 `glossary-category`，不是编辑标签，也不是 `TaxonomyNode` 的 category kind。

### Two-phase retrieval（两阶段检索）

AI 问答流程：先对 AI 路由索引跑 Router 阶段，再用按 AI 检索路径从 AI 上下文语料连接出的摘录跑 Answer 阶段。关闭两阶段检索即仅答案模式：Answer 阶段仍把路由索引视为有效链接列表，但不加载 AI 上下文语料。

### Layout（布局）

由页面 frontmatter 或 VuePress 路由配置选择的 VuePress 页面外壳（例如 `AiChatLayout`）。布局控制页面镶边与渲染结构；它不是页面的领域身份，不是 `TaxonomyNode.kind`，不是路由身份，也不是功能或表面本身。

### LayoutTypes

自定义默认 `Layout.vue` 用来决定哪些全局外壳类与镶边规则生效的外壳钩子分类器。`LayoutTypes` 不是 VuePress 布局组件的完整注册表：一些真实布局完全绕过默认外壳，一些特殊表面可能使用默认 `Layout` 加 markdown 中的组件。

### Special surface（特殊表面）

不只是知识库树中普通 markdown 内容页的非标准站点体验。特殊表面可能有布局、分类法节点、导航栏项、生成工件、运行时状态或外壳类钩子，但没有哪一样单独构成表面的身份。如今的例子是 AI 问答。

### Interactive surface（交互表面）

主要价值来自用户交互或运行时行为而非阅读静态 markdown 内容的特殊表面。如今 AI 问答就是交互表面。

### VuePress sidebar config（VuePress 侧边栏配置）

供 VuePress 默认主题消费的原生主题侧边栏路由前缀映射，用于左侧导航。它是从分类法与构建输入派生的 adapter 输出；不是分类法的事实来源。

### Section sidebar（章节侧边栏）

知识库各章节（如 `what-is-cislunarspace`、`cislunar-orbits`、`research-frontiers`、`resources-tools`）各自的 `VueSidebarItem` 树。章节侧边栏从分类法的 `section`、`group`、`page`、`index` 节点派生，再插入 VuePress 侧边栏配置以匹配路由前缀。

### Wayfinding disclosure（导引披露）

前置在普通章节侧边栏之前的全局站点地图披露。帮助用户跨站点顶层区域跳转。导引本身不是侧边栏，不是侧边栏 index，也不是 AI 路由索引。

### Glossary category（词条类别）

kind 为 `glossary-category` 的 `TaxonomyNode`（今日：`glossary-meta.ts` 中 `glossaryCategories` 的条目)。定义 `/glossary/` 与 `/en/glossary/` 下的桶（fundamentals、dynamics、orbits……）。类别可嵌套**一级子类别**：子类别节点挂在所属类别节点下（如 `glossary/orbits`），其 `meta.slug` 为完整路径形式（`orbits/halo`），词条存放在 `glossary/<cat>/<sub>/<slug>.md`。词条也可以直接放在类别根下（未归类）。

### Content module（内容模块）

`web/.vuepress/content/` 处的模块（见 ADR-0003;骨架已于 2026-08-19 落地:list/read/write/refreshIndex,create/delete/categories 待续),用一个领域接口承接所有内容操作。内容写入方(admin GUI、agent/人类)都经由它。内容模块之于内容操作,如分类法模块之于结构数据;它不是数据库,不是服务进程,不属于构建流水线。其 frontmatter 往返使用 `yaml` 包(`parseMarkdownDoc`/`renderMarkdown`),而非 `utils/frontmatter-parser.ts`——后者的简化解析无法往返嵌套 frontmatter。

### Content family(内容族)

内容模块操作的两种内容类型之一:`glossary`、`kb-section`。路径约定、frontmatter 规则与双语配对按族定义在内容 router 中,调用方永不重复表达。内容族不是 `NodeKind`,也不是布局。

### Content source / Derived artifact / Build output（内容源 / 派生工件 / 构建输出）

仓库的三个资产层（见 ADR-0004）：

- **Content source（内容源）**：markdown、`taxonomy/`、`sidebar/data.ts`、图片（仅保留 zh 一份）、`ref.bib`、手工维护的 public 资产。纳入 git。
- **Derived artifact（派生工件）**：`generate.ts` 产出的一切（`*.auto.json`、articles/AI-chat/bibliography JSON）。只写入 `.vuepress/public/`,绝不纳入 git。**Derived artifact** 指称这个层;既有术语 generated artifact 继续指称单个 JSON 文件。
- **Build output（构建输出)**:`dist/`。永不纳入 git。

规则：派生工件任何时候都能从内容源重建（任何消费方都不得依赖它在 git 里的存在）；sync-figures 是把图片放进构建输出的唯一通道；en 侧 md 里的图片引用是构建期解析的 URL 约定，不是物理文件要求。

## 应避免的术语

- 用 **Sidebar config** 作 taxonomy 的同义词：taxonomy 是**概念**，侧边栏配置只是其中一种 **adapter 输出**。
- 把 **Layout** 当 AI 问答或任何非文章自定义体验的统称：**Layout** 只指 VuePress 页面外壳；面向用户的体验请用 **special surface** 或 **interactive surface**。
- 不加限定地说 **Sidebar**：要说 **VuePress sidebar config**、**section sidebar** 或 **wayfinding disclosure**。
- 把 **Wayfinding** 叫成 index 或侧边栏：导引是全局站点地图披露，既不是侧边栏树的 **Index** kind，也不是 AI 路由索引。
- 在需要精确的场合不加限定地说 **Surface**：要说 **special surface**、**interactive surface**、content page 或 site-surface-specific adapter output。
- 用 **i18n key** 指 `NodeId`:id 不是 i18n key，它们是稳定身份。
- 把 **Locale root**、**VuePress root**、**LocalePath**、**route prefix** 混用:**VuePress locale root/config** 是框架配置;**LocalePath** 是分类法解析后的路由数据。
- 把 `'/en' + zhPath` 当路径构造规则:消费方从 `LocalePath` 中选取,不手动给中文路径加前缀。
- 不说明指的是**运行时语言检测**、**语言偏好**还是显式用户切换,就笼统说**当前语言**。
- 把 `cislunar-lang-chosen` 当作站点当前语言:它只是持久偏好/哨兵值,不是当前路由语言。
- 不为强调稳定分类法身份就对 zh/en 内容说**同一页面**:成对的多语言内容叫**双语对应物**,它们的路由叫 **LocalePath 条目**。
- 不点名分区模型就用 **Bilingual** 形容生成工件:形如 `{ zh: ..., en: ... }` 的形状请说 **locale-partitioned generated artifact**。
- 不加限定词的 **Category**:要说 **glossary-category**。（`news-category` kind 已随太空新闻模块移除，见 ADR-0005。）
- 不区分 **hero/card image**、**figure set**、**source figure path**、**built dist asset path**、**share image**,笼统说 **Image** 或 **image path**。
- 指代完整文件名时说 **Slug**: `YYYY-MM-DD-` 之后的标识符叫 **article slug**, `YYYY-MM-DD-slug.md` 整体叫 **article filename**。
- 用 **AI index** 或光秃秃的 **index** 指 `/ai-chat-index.json`:要说 **AI route index**。**Index** 已经表示侧边栏树中 section/group 根上的 README。
- 用 **Context index**、**AI context index**、**site index** 指 `/ai-chat-context.json`:要说 **AI context corpus**。
- 讨论 AI 检索时不加限定地说 **Path**:指 Router 选出、用于连接路由行与上下文记录的键时,要说 **AI retrieval path**。
- 把 **ChatIndexCategory** 当普通 category:它是 AI 专用分组键,不是 **glossary-category**、编辑标签或文章属性。
- 把 AI 生成工件描述为 **Adapters** 或 **Intakes**:adapter 从分类法派生站点表面输出;intake 采集构建期数据。`/ai-chat-index.json` 与 `/ai-chat-context.json` 是生成的 AI 问答工件。
- 把 **Translation missing** 与 **locale gated** 混用：见 Translation gap 与 Locale gating 的区别。

## 另见

- [ADR-0001：统一分类法模块](docs/adr/0001-unified-taxonomy-module.zh-CN.md)
- [ADR-0003：内容模块](docs/adr/0003-content-module.zh-CN.md)
- [ADR-0004：资产分层](docs/adr/0004-asset-layering.zh-CN.md)
- [ADR-0005：移除太空新闻模块](docs/adr/0005-remove-space-news-module.zh-CN.md)
- [docs/agents/domain.zh-CN.md](docs/agents/domain.zh-CN.md)：agent 应如何消费本文件
- [docs/agents/issue-tracker.zh-CN.md](docs/agents/issue-tracker.zh-CN.md)
- [docs/agents/triage-labels.zh-CN.md](docs/agents/triage-labels.zh-CN.md)
