# CONTEXT：地月空间入门指南

一个关于地月空间的中文知识库（单语，见 [ADR-0006](docs/adr/0006-remove-english-site.md)）。本文件记录应在 issue、ADR、测试、代码与 PR 中保持一致使用的领域词汇。如果你需要的概念不在这里，这是一个信号：要么重新斟酌术语，要么通过 `/grill-with-docs` 扩充本文件。

## 词汇表

### 分类法模块（Taxonomy）

站点上每个知识库章节、页面、词条类别、导航栏项、特殊表面与导引项的结构化目录，连同它们的身份、排序与文档路径。见统一分类法模块的 [ADR-0001](docs/adr/0001-unified-taxonomy-module.md)。

### TaxonomyNode

分类法中的一个条目。携带稳定的 `id`，一个 `kind`（开放枚举：section、group、page、index、glossary-category、navbar-link、external-link……），`label`，`path`，同级 `order` 与 `parentId`。定义于 `web/.vuepress/taxonomy/types.ts`。

### 身份（NodeId）

`TaxonomyNode` 的稳定字符串 id（如 `research-frontiers/directions/orbit-design`）。由规范 zh slug 链派生。重命名 slug 会产生新 id 并附带一条重定向（id 永不无声复用）。重命名 **label** 不改变 id。

### NodeKind

`TaxonomyNode` 上的判别字段。**开放枚举**：可以新增 kind 而无需修订 ADR-0001，前提是 `TaxonomyNode` 接口形状、身份规则与路径约定规则不变。Adapter 以忽略未知 kind 的方式保持容忍。

### Section / group / page / index

侧边栏树中的四个结构 kind。

- **Section**：侧边栏顶层条目（如 `cislunar-orbits`、`research-frontiers`）。
- **Group**：section 内可折叠的簇（如 `nrho`、`dro`）。
- **Page**：叶子内容页。
- **Index**：section/group 根上的 README；与其父节点共用路径（现 `sidebar/data.ts` 中 `slug === ''`）。

### Sidebar source of truth（侧边栏事实来源）

`web/.vuepress/taxonomy/data.ts`（目标态）。今天这一职责分散在 `sidebar/data.ts`、`navbar.ts`、`glossary-meta.ts`、`category-meta.json` 以及 `wayfinding-intake.ts` 的内联数组里。迁移计划见 ADR-0001。

### 词条 frontmatter 关系字段（aliases / related）
词条 frontmatter 中的知识库数据字段：`aliases` 为非空不重复的别名数组；`related` 为 `{ ref, relation }` 数组，`ref` 是词条 slug 路径（如 `orbits/halo-orbit`），必须解析到存在的词条文件 `glossary/<ref>.md`；`relation` 属于开放枚举 `{broader, transfer, related}`。由 `check-glossary-frontmatter` 在 `npm run check` 中强制校验。正文"相关概念"列表是该数据的人工视图。

### 引用键（\cite 键）

正文中 `\cite{key}` 引用的 key，指向 `web/.vuepress/ref.bib` 的 BibTeX 条目。渲染为指向 `/references#key` 的编号链接；`check-links` 对其做存在性校验。手写参考文献表已废弃：正文引用即数据，编号与题录由 bibliography 生成器从 ref.bib 派生。

### AI route index（AI 路由索引）

以 `/ai-chat-index.json` 伺服的生成型 AI 问答路线规划工件。按 `ChatIndexCategory` 分组；每个 `ChatIndexCategory` 含一个分组键加若干 `IndexRow`；每个 `IndexRow` 携带一条 AI 检索路径和标题。AI 路由索引只用于路线选择与有效链接约束（它不是完整答案语料，也不是侧边栏树的 **Index** kind）。

### AI context corpus（AI 上下文语料）

以 `/ai-chat-context.json` 伺服的生成型 AI 问答答案上下文工件。以 AI 检索路径为键的语料：`Record<path, { title, text }>`。Router 从 AI 路由索引选出 AI 检索路径之后，Answer 阶段才从 AI 上下文语料读取。

### AI retrieval path（AI 检索路径）

Router 选出的运行时 URL 路径，用来把 AI 路由索引中的 `IndexRow` 连接到 AI 上下文语料中的 `{ title, text }` 记录。它是检索/连接键，不是分类法身份：不要与 `NodeId`、`relativePath`、文章 slug 或文章文件名混淆。

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

kind 为 `glossary-category` 的 `TaxonomyNode`（今日：`glossary-meta.ts` 中 `glossaryCategories` 的条目)。定义 `/glossary/` 下的桶（fundamentals、dynamics、orbits……）。类别可嵌套**一级子类别**：子类别节点挂在所属类别节点下（如 `glossary/orbits`），其 `meta.slug` 为完整路径形式（`orbits/halo`），词条存放在 `glossary/<cat>/<sub>/<slug>.md`。词条也可以直接放在类别根下（未归类）。

### Content module（内容模块）

`web/.vuepress/content/` 处的模块（见 ADR-0003；骨架已于 2026-08-19 落地：list/read/write/refreshIndex，create/delete/categories 待续），用一个领域接口承接所有内容操作。内容写入方（admin GUI、agent/人类）都经由它。内容模块之于内容操作，如分类法模块之于结构数据；它不是数据库，不是服务进程，不属于构建流水线。其 frontmatter 往返使用 `yaml` 包（`parseMarkdownDoc`/`renderMarkdown`），而非 `utils/frontmatter-parser.ts`——后者的简化解析无法往返嵌套 frontmatter。

### Content family（内容族）

内容模块操作的两种内容类型之一：`glossary`、`kb-section`。路径约定与 frontmatter 规则按族定义在内容 router 中，调用方永不重复表达。内容族不是 `NodeKind`，也不是布局。

### Content source / Derived artifact / Build output（内容源 / 派生工件 / 构建输出）

仓库的三个资产层（见 ADR-0004）：

- **Content source（内容源）**：markdown、`taxonomy/`、`sidebar/data.ts`、图片、`ref.bib`、手工维护的 public 资产。纳入 git。
- **Derived artifact（派生工件）**：`generate.ts` 产出的一切（`*.auto.json`、AI-chat/bibliography JSON）。只写入 `.vuepress/public/`，绝不纳入 git。**Derived artifact** 指称这个层；既有术语 generated artifact 继续指称单个 JSON 文件。
- **Build output（构建输出）**：`dist/`。永不纳入 git。

规则：派生工件任何时候都能从内容源重建（任何消费方都不得依赖它在 git 里的存在）；sync-figures 是把图片放进构建输出的唯一通道。

## 应避免的术语

- 用 **Sidebar config** 作 taxonomy 的同义词：taxonomy 是**概念**，侧边栏配置只是其中一种 **adapter 输出**。
- 把 **Layout** 当 AI 问答或任何非文章自定义体验的统称：**Layout** 只指 VuePress 页面外壳；面向用户的体验请用 **special surface** 或 **interactive surface**。
- 不加限定地说 **Sidebar**：要说 **VuePress sidebar config**、**section sidebar** 或 **wayfinding disclosure**。
- 把 **Wayfinding** 叫成 index 或侧边栏：导引是全局站点地图披露，既不是侧边栏树的 **Index** kind，也不是 AI 路由索引。
- 在需要精确的场合不加限定地说 **Surface**：要说 **special surface**、**interactive surface**、content page 或 site-surface-specific adapter output。
- 用 **i18n key** 指 `NodeId`：id 不是 i18n key，它们是稳定身份。
- 不加限定词的 **Category**：要说 **glossary-category**。（`news-category` kind 已随太空新闻模块移除，见 ADR-0005。）
- 不区分 **hero/card image**、**figure set**、**source figure path**、**built dist asset path**、**share image**，笼统说 **Image** 或 **image path**。
- 指代完整文件名时说 **Slug**：`YYYY-MM-DD-` 之后的标识符叫 **article slug**，`YYYY-MM-DD-slug.md` 整体叫 **article filename**。
- 用 **AI index** 或光秃秃的 **index** 指 `/ai-chat-index.json`：要说 **AI route index**。**Index** 已经表示侧边栏树中 section/group 根上的 README。
- 用 **Context index**、**AI context index**、**site index** 指 `/ai-chat-context.json`：要说 **AI context corpus**。
- 讨论 AI 检索时不加限定地说 **Path**：指 Router 选出、用于连接路由行与上下文记录的键时，要说 **AI retrieval path**。
- 把 **ChatIndexCategory** 当普通 category：它是 AI 专用分组键，不是 **glossary-category**、编辑标签或文章属性。
- 把 AI 生成工件描述为 **Adapters** 或 **Intakes**：adapter 从分类法派生站点表面输出；intake 采集构建期数据。`/ai-chat-index.json` 与 `/ai-chat-context.json` 是生成的 AI 问答工件。
- 用 **hand-written reference list**（手写参考文献表）指词条尾部的文献列表：该形态已由**引用键**取代，题录一律由 ref.bib 派生。

- [ADR-0001：统一分类法模块](docs/adr/0001-unified-taxonomy-module.md)
- [ADR-0003：内容模块](docs/adr/0003-content-module.md)
- [ADR-0004：资产分层](docs/adr/0004-asset-layering.md)
- [ADR-0005：移除太空新闻模块](docs/adr/0005-remove-space-news-module.md)
- [ADR-0006：删除英文版本](docs/adr/0006-remove-english-site.md)
- [ADR-0007：贡献流程](docs/adr/0007-contribution-workflow.md)
- [docs/agents/domain.md](docs/agents/domain.md)：agent 应如何消费本文件
- [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md)
- [docs/agents/triage-labels.md](docs/agents/triage-labels.md)
