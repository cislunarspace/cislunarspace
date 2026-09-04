
# ADR 0001：zh/en 站点的统一分类法模块

- **状态:** 已接受
- **日期:** 2026-05-15
- **Issue:** [#30](https://github.com/cislunarspace/cislunarspace/issues/30)
- **取代:** —
- **被取代:** —

## 背景

站点目前的分类法（每个知识库章节的身份、语言路径、排序、导航标签、侧边栏结构、词条类别、新闻类别与 AI 问答索引输入）分散在**至少七个文件**里，形状重叠但不一致：

| 文件 | 拥有什么 | 语言处理 |
|---|---|---|
| `web/.vuepress/navbar.ts` | 顶部导航条目（zh） | 仅 zh |
| `web/.vuepress/navbar-en.ts` | 顶部导航条目（en） | 仅 en |
| `web/.vuepress/sidebar-data.ts` | 非词条侧边栏的章节 + 条目树 | 双语节点 `label.{zh,en}` 加可选 `locales`，另有 `childrenByLocale` 逃生口 |
| `web/.vuepress/glossary-meta.ts` | 词条类别身份 + 排序 | 双语 `label.{zh,en}` + `order` |
| `web/.vuepress/category-meta.json` | 新闻类别身份 + 颜色 | 双语 `label.{zh,en}` + `color` |
| `web/.vuepress/intakes/wayfinding-intake.ts` | 硬编码的站点地图侧边栏树 | zh/en 数组成对复制 |
| `web/.vuepress/intakes/chat-index-intake.ts` | AI 问答索引输入 | 从 `glossary-meta.ts` + 文件系统派生 |

今天新增或重命名一个章节要同步改 **三到五个**文件，而且"zh 有 en 没有"时会发生什么,各模块规则不同:

- `sidebar-data.ts` 用显式 `locales: ['zh']` 门控。
- `chat-index-intake.ts` 合成一个标注需翻译条目的英文占位。
- `navbar-en.ts` 是一份手工维护的拷贝,与其 zh 姊妹毫无关联。
- `wayfinding-intake.ts` 把一切内联复制。

这种漂移是已知的 bug 来源(孤儿侧边栏条目、失效的 `/en/` 链接、跨语言排序不一致)。它也阻止 AFK agent 放心添加新章节——因为不存在一个说清"分类法节点是什么"的概念模型。

本 ADR 定下统一分类法模块的**架构形状**,让后续 issue 可以实施、迁移、适配而不必重新争论接口。它**不**实现模块;实现留给后续 AFK issue。

## 决策

引入唯一的**分类法模块(Taxonomy Module)**,位于 `web/.vuepress/taxonomy/`:持有一个概念(`TaxonomyNode`),暴露站点各表面(navbar、sidebar、glossary、news、AI-chat、wayfinding)消费的类型化视图。上面列出的每个既有输出都变成从分类法模块派生自身形状的 **adapter**,而不再各自携带真相。

### TaxonomyNode 接口(仅形状)

```ts
// web/.vuepress/taxonomy/types.ts (target shape — not yet implemented)

/** Stable, locale-independent identity for a taxonomy node. */
export type NodeId = string  // e.g. 'research-frontiers/directions/orbit-design'

/** Open enum — new kinds may be added without an ADR amendment. */
export type NodeKind =
  | 'section'           // top-level sidebar section (e.g. cislunar-orbits)
  | 'group'             // collapsible group inside a section
  | 'page'              // leaf page
  | 'index'             // section/group index page (slug === '')
  | 'glossary-category' // glossary bucket (fundamentals, dynamics, …)
  | 'news-category'     // space-news category (artemis, spacex, …)
  | 'navbar-link'       // top-nav entry (may be external)
  | 'external-link'     // off-site link (forum, gitee, github)

export interface LocalePath {
  /** Path under the zh root, e.g. '/cislunar-orbits/nrho/' */
  zh: string | null
  /** Path under the en root, e.g. '/en/cislunar-orbits/nrho/'.
   *  `null` means this node is intentionally zh-only (see "Missing translations"). */
  en: string | null
}

export interface TaxonomyNode {
  /** Stable identity. Never reused after rename — renames mean new id + redirect. */
  id: NodeId

  /** Open-enum classification. Adapters filter by kind. */
  kind: NodeKind

  /** Bilingual display label. Both locales required unless `locales` gates it out. */
  label: { zh: string; en: string }

  /** Resolved URL paths per locale. `null` = not present in that locale. */
  path: LocalePath

  /** Explicit locale gating. Undefined = present in both. */
  locales?: Array<'zh' | 'en'>

  /** Sibling sort order. Lower = earlier. Stable within parent. */
  order: number

  /** Parent node id, or null for roots. */
  parentId: NodeId | null

  /** Optional adapter-specific metadata (colour for news categories, collapsible
   *  for sidebar groups, external href for navbar links). Adapters narrow on `kind`. */
  meta?: Record<string, unknown>
}

export interface TaxonomyModule {
  /** All nodes, in deterministic order. */
  all(): readonly TaxonomyNode[]

  /** Get one node by id. Throws if absent (caller's bug). */
  get(id: NodeId): TaxonomyNode

  /** Children of a node, already sorted by `order` and filtered by locale. */
  children(parentId: NodeId | null, locale: 'zh' | 'en'): readonly TaxonomyNode[]

  /** Filter by kind, optionally within a parent. */
  byKind(kind: NodeKind, parentId?: NodeId): readonly TaxonomyNode[]
}
```

### 规则

#### 身份

- `id` **稳定**且语言无关。它由规范 zh 路径的 slug 链派生,但**不是**路径:重命名 slug 需要新 id 加一条重定向。
- 重命名 zh **label** 不改变 id。
- 在任一层级重命名 slug 会改变所有后代节点的 id;这是一次迁移,不是就地编辑。

#### 语言路径

- `path.zh` 是规范的。`path.en` 由加 `/en` 前缀并替换 en 特有 slug 派生(如 `blue-team-research` 的 `childrenByLocale` 情形)。
- 需要单个字符串的 adapter 必须按 locale 选取,绝不拼接 `'/en' + zhPath`。
- 节点可以有 `path.en === null`,当且仅当 `locales === ['zh']`(仅 en 的情形对称)。

#### 缺失翻译

我们采用**显式语言门控**(与既有 `sidebar-data.ts` 约定一致):

- 每个节点携带可选 `locales?: ('zh'|'en')[]`。未定义表示双语皆有。
- 被某语言门控掉的节点在该语言的 navbar、sidebar、wayfinding adapter 中**不可见**。
- 词条 adapter 额外产出一份 `TranslationGapIntake`,列出仅 zh 存在的词条页面;AI 问答 adapter 以 (needs translation) 占位符呈现它们。此行为是 **adapter 本地**的,不改变节点的 `locales` 字段。
- 理由:显式门控让维护者意图可见(`locales: ['zh']` 一眼看出是有意的),并防止半翻译内容意外发布。现有 `sidebar-data.ts` 已遵循此规则,采纳只是改名,不是行为变化。

#### 排序

- `order` 是数字;小者在前;平局按 `id` 字典序。
- 排序是**同级作用域**的:没有全局顺序。
- 需要不同呈现顺序的 adapter(如新闻类别按字母排)排自己的视图;不改 `order`。

#### 路径约定

- zh 根:`/`;en 根:`/en/`。
- 章节路径以 `/` 结尾。页面路径以 `/` 结尾。Index 页面与所属 section/group 共用路径(`path.zh === parent.path.zh`)。
- 外链在 `meta.href` 用完整 URL,`path.{zh,en}` 留 `null`。

### Adapter(既有输出变为消费者,而非来源)

| 现有文件 | 变为 | 经由读取 |
|---|---|---|
| `navbar.ts` | `adapters/navbar-zh.ts` | `taxonomy.byKind('navbar-link')` + `taxonomy.children(navbarId, 'zh')` |
| `navbar-en.ts` | `adapters/navbar-en.ts` | 同上,locale `'en'` |
| `sidebar-data.ts`(导出 `sidebarSections`) | `adapters/sidebar-sections.ts` | `taxonomy.byKind('section')` + 递归 `taxonomy.children` |
| `glossary-meta.ts`(导出 `glossaryCategories`) | `adapters/glossary-categories.ts` | `taxonomy.byKind('glossary-category')` |
| `category-meta.json` | `adapters/news-categories.ts`(TypeScript) | `taxonomy.byKind('news-category')` 取 `meta.color` |
| `intakes/wayfinding-intake.ts` | `adapters/wayfinding.ts` | `taxonomy.byKind('section')` 过滤顶层 |
| `intakes/chat-index-intake.ts` | 不变的消费者 | 读 `glossary-categories` 与 `sidebar-sections` adapter(不再直接 import `glossary-meta.ts` 或 `sidebar-data.ts`) |
| `intakes/translation-gap-intake.ts` | 不变的消费者 | 读 taxonomy + 文件系统扫描 |
| `gen-sidebar.ts` | 不变的编排器 | 组合 adapters |

Adapter 是从 `TaxonomyModule`(加可选文件系统扫描)到其既有输出形状的**纯函数**。流水线(`gen-sidebar.ts`)保持相同入口与输出文件;adapter 改变数据从哪来,不改变产出什么。

### 事实来源

分类法模块的数据存于**一个声明式文件** `web/.vuepress/taxonomy/data.ts`(或 `.json`),结构为扁平的 `TaxonomyNode` 数组。编辑友好性靠两点保留:

- 一个 `defineTaxonomy()` 助手,接受嵌套字面量并在模块加载时拍平;
- 一个构建期校验器(由 `gen-sidebar.ts` 运行),检查:id 唯一、父节点存在、无环、语言门控与 `path` 一致、`order` 是数字。

扁平形态供 adapter 消费;嵌套字面量供人编辑。

### 可扩展性

`NodeKind` 是**开放枚举**(TypeScript 字符串字面量联合,但 adapter 以忽略未知 kind 的方式保持容忍)。新增 kind(如 `'forum-thread'`、`'tool-page'`)**不需要**修订本 ADR,只需要:

1. 把字面量加入 `NodeKind`;
2. 编写或扩展消费它的 adapter;
3. 不改任何既有 adapter(它们按自己认识的 kind 过滤)。

只有这些变更才需要修订本 ADR:`TaxonomyNode` 接口形状、语言门控规则、身份规则或路径约定规则。

## 后果

### 正面

- 新增章节变成对 `taxonomy/data.ts` 的**单文件改动**。构建流水线把 navbar、sidebar、wayfinding 与 AI-chat 一并更新。
- zh/en 漂移变成校验错误,而不是运行时 404。
- AFK agent 只需一个概念(`TaxonomyNode`)和一个待改文件,外加一个构建期抓错类型化校验器。
- 既有输出(`sidebar.auto.json`、`space-news-articles-zh.json`、`space-news-articles-en.json`、navbar 数组)形状不变,下游消费者(VuePress、主题组件)不受影响。

### 负面

- 一次性迁移成本:把七个既有文件重新表达为 taxonomy + adapters。预计 4–6 个后续 issue。
- "扁平+助手"的形态在今天的嵌套字面量上增加了一小层间接。
- `childrenByLocale`(今天只有 `blue-team-research` 使用)失去逃生口性质:en 特有子树变成带 `locales: ['en']` 的普通节点。这是有意的简化。凡今日 `childrenByLocale` 编码的是**同一树位置上按语言不同的 slug**(如 `blue-team-research/doctrine-strategy/us-doctrine-system` 仅 zh vs `…/us-strategy-doctrine` 仅 en),迁移产出**两个兄弟节点**,`locales` 不相交,而不是一个带语言开关的节点;各自拥有稳定的 `id`。

### 中性

- 性能:taxonomy 构建期构建一次并缓存。无运行时成本。
- 测试面:校验器与每个 adapter 都是纯函数,天然可单测。既有 `gen-sidebar.test.ts`、`glossary-meta.test.ts`、`page-metadata.test.ts` 继续可用。

## 后续 AFK issue(本 ADR 解除阻塞)

每个可独立认领:

1. **`taxonomy/types.ts` + `data.ts` 骨架**:定义接口,用当前 `sidebar-data.ts` 内容播种,加构建期校验器。暂无 adapter。
2. **词条类别 adapter**:迁移 `glossary-meta.ts` 的消费者改为读 taxonomy。删除 `glossaryCategories` 导出。
3. **章节侧边栏 adapter**:迁移 `sidebar-data.ts` 消费者。删除 `sidebarSections` 导出。
4. **导航 adapter(zh + en)**:用派生数组替换 `navbar.ts` 与 `navbar-en.ts`。
5. **新闻类别 adapter**:把 `category-meta.json` 迁入 taxonomy(kind `'news-category'`,`meta.color`)。
6. **Wayfinding adapter**:替换 `wayfinding-intake.ts` 中的硬编码数组。

每个后续 issue 都是 TDD 形状的垂直切片(一个 adapter、一个测试文件、一次切换)。无需再决定接口。

## 考虑过的替代方案

- **维持现状加更严的约定**:否决。约定没能阻止漂移;需要结构性修复。
- **一切从文件系统自动生成**:否决。排序与标签需要人工策划;文件系统表达不了双语标签和同级顺序。
- **强制双语言配翻译缺口报告**:否决。会迫使为仅 zh 内容(如 NUDT、NPU)伪造 en 标签,继而泄漏进 navbar/sidebar。显式门控让意图保持可读。
- **封闭 `NodeKind` 枚举,每种新 kind 都修订 ADR**:否决。站点表面(论坛、辩证、工具)的演化比 ADR 节奏快;开放枚举加 adapter 本地知识是摩擦最低的平衡点。
