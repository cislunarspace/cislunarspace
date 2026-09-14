
# ADR 0003: 内容操作模块（Content Module）

- **Status:** Proposed
- **Date:** 2026-08-19
- **Supersedes:** —
- **Superseded by:** —

## Context

站点的 markdown 内容今天有三个互不相通的写入者：

| 写入者 | 形态 | 频率 |
|---|---|---|
| Space News 自动更新管线 | Python 写 md + bash 提交（`scripts/space-news-update-local.sh`） | 每小时 |
| admin 本地管理器 | Express 服务直接读写文件（`admin/`，约 4000 行） | 人工 |
| agent / 人工 | 编辑器直接改文件 + git 工作流 | 日常 |

每个写入者各自实现同一组底层知识：

1. **路径约定**（哪类内容放哪个目录、中英如何配对）：管线写在 Python 里；admin 是 `lib/scan.js` 的正则加一个手工维护的 `KB_SECTIONS` 数组；`build/check-bilingual-mirror.ts` 又持有一份。
2. **frontmatter 规则**：管线在 Python 里拼；admin 的 `lib/validate.js` 一份；`build/check-space-news-frontmatter.ts` 一份。
3. **索引刷新**（内容变更后须重跑 `gen-sidebar`，侧边栏、文章列表、AI 索引才会更新）：管线在 phase 2 无条件全量构建，天然覆盖；admin 只有删除和分类操作重跑，**普通保存不跑**，这就是保存后列表仍是旧内容的直接原因。
4. **README 索引行维护**（月份 README、glossary README）：`admin/lib/delete.js` 一份，`scripts/build-glossary-index.py` 一份。
5. **分类数据写入**：`admin/lib/categories.js` 用 `indexOf`/字符串拼接直接修改 `web/.vuepress/taxonomy/data.ts` 的 TS 源码，注释自己写明不能用全文件最后一个 `];`，会写错数组。后果已经发生：`taxonomy/data.ts` 里 `commercial` 与 `commercial-space` 两个节点的中文标签同为商业航天、颜色同为 `#059669`，重复分类，没有任何机制拦截。

ADR-0001 统一了**结构数据**（taxonomy 模块：导航、侧边栏、分类的定义）。但**内容操作**（新建、编辑、配对、删除、分类、索引刷新）至今没有对应的模块。admin 的定位是内容管理 GUI，但它没有自己的数据层：每个功能都直连文件系统与源码文本。它不能新建内容（`saveMdFile` 要求文件已存在），保存后不同步索引，双语编辑靠人工双开两栏。这些不是界面问题，是缺一层领域接口的问题。agent 与自动管线做同类操作时，也各有各的旁路。

## Decision

引入**内容操作模块（Content Module）**，位于 `web/.vuepress/content/`，与 `taxonomy/` 平级：taxonomy 回答站点结构是什么，content 回答内容如何被安全地增删改查。三个写入者都通过它操作内容。

### 接口（目标形状）

```ts
// web/.vuepress/content/types.ts（评审通过后实施，细节可在实现期微调）

export type ContentFamily = 'space-news' | 'glossary' | 'kb-section';

export interface ContentEntry {
  /** 相对 web/ 的 md 路径，如 'space-news/2026/04/2026-04-01-x.md' */
  relPath: string;
  family: ContentFamily;
  locale: 'zh' | 'en';
  /** 双语对应文件路径，按目录约定推导；null 表示该侧缺失 */
  counterpartPath: string | null;
  frontmatter: Frontmatter;
}

export interface ContentModule {
  /** 列出一个内容族的条目（含配对状态、草稿、分类、frontmatter 错误）。 */
  list(family: ContentFamily, filter?: { keyword?: string; category?: string }): ContentEntry[];
  /** 读一篇：frontmatter + 正文。 */
  read(relPath: string): { frontmatter: Frontmatter; body: string };
  /** 改一篇（须已存在）。写后自动刷新派生索引。 */
  write(relPath: string, next: { frontmatter?: Frontmatter; body?: string }): void;
  /** 新建一篇：定路径、建 figures 目录、插 README 索引行、刷新索引；返回 relPath。 */
  create(family: ContentFamily, input: CreateInput): string;
  /** 删一篇（可选连同双语对应与 figures）：入回收站、清 README 索引行、刷新索引。 */
  delete(relPath: string, opts: { withCounterpart: boolean }): DeleteReport;
  /** 分类增删（改分类数据文件，不直接改文章）。 */
  addCategory(family: 'space-news' | 'glossary', label: { zh: string; en: string }, meta?: { color?: string }): void;
  removeCategory(family: 'space-news' | 'glossary', id: string, opts: { deleteEntries: boolean }): RemoveCategoryReport;
  /** 重跑派生索引生成（幂等；write/create/delete 内部已调用）。 */
  refreshIndex(): void;
}
```

### 规则

#### 接口即全部知识

调用者（admin server、CLI、agent）不需要知道目录约定、frontmatter 必填字段、README 索引行格式、回收站位置，这些全部在 content/ 实现内。新增一类内容只需实现该族的路径路由与校验规则，接口不变。

#### 路径约定只表达一次

`content/router.ts` 是路径约定的唯一表达（双向：`family + locale + 标识 → relPath`，`relPath → family + locale + 配对路径`）。admin 的正则、`check-bilingual-mirror` 的规则、Python 管线的路径逻辑全部改为消费它。Python 侧通过导出的 JSON 清单或 CLI 获取（本期只要求约定不再新增副本，Python 内部重写可放后续）。

#### 写操作统一管线

每个写操作走同一序列：参数校验 → frontmatter 校验（复用 `build/check-*` 的规则，抽成共享函数）→ 落盘 → 周边维护（README 索引行、figures 目录、回收站）→ `refreshIndex()`。保存后索引不同步的问题在这一层终结，而不是靠每个调用点各自记得。

#### 分类数据拆文件，写回用整文件生成

- `taxonomy/data.ts` 中的 `newsCategoryNodes` 拆到 `taxonomy/news-categories.ts`（独立声明式数据文件，`defineTaxonomy` 照常合并；glossary 分类如仍需要可同样处理）。
- `addCategory`/`removeCategory` 的写回采用内存中改数组 → 整文件序列化生成 → 格式化 → 落盘，禁止文本拼接与正则手术。生成式写回天然幂等，不会写坏文件结构。
- 写回前校验：同族标签重复（`commercial`/`commercial-space` 这类重复自此被拦截）、颜色格式非法、order 冲突。

#### admin 的角色

admin 保留并重构为该模块的 GUI 壳：

- `admin/lib` 的 scan/validate/categories/delete 逻辑迁入 `content/`（TS 化）；admin server 改用 tsx 运行并 import 该模块。
- 补两个缺口：新建内容（调 `create`）、保存后索引刷新（`write` 内建）。
- admin 前端与 HTTP API 形状基本不变。

#### CLI 入口

`web/` 下提供 `npm run content -- <op>`。agent、人工与 Python 管线用它执行领域操作，与 GUI 走同一套校验与索引刷新。

## Non-goals

1. 不改 taxonomy 模块本身（ADR-0001 的接口与数据不动；`news-categories.ts` 只是数据文件拆分，`defineTaxonomy` 合并逻辑不变）。
2. 不引入数据库或常驻服务：文件系统仍是唯一存储，回收站与操作日志沿用 admin 既有形式。
3. 不重写 Python 管线为 TS；它对 md 的直接写入本期保留，只要求消费共享规则与索引刷新。
4. 不做 admin 前端改版。

## Consequences

### Positive

- 新建内容从手写文件 + 记住目录约定变成一次 `create` 调用，GUI 与 CLI 同源。
- 保存后派生索引必新鲜（写操作内建刷新）。
- 路径、frontmatter、配对规则从三处副本变一处；`check-*` 校验器与内容操作共享同一规则源。
- 分类管理不再可能写坏 taxonomy 源文件，重复分类被拦截。
- admin 的 `lib/` 九个文件大部分逻辑移入共享模块，自身代码量显著下降。

### Negative

- admin 从纯 JS 变为需要 tsx 运行（一次性成本）。
- content/ 需要接口级测试基建（fixture 目录驱动，不 mock 文件系统）。
- 过渡期内 Python 管线仍是半个旁路写入者（直到 follow-up 6 完成）。

## Follow-up（建议顺序，每条可独立成 issue）

1. **content/ 骨架**：`types.ts` + `router.ts` + `read`/`write` + fixture 目录驱动的接口测试。
2. **分类数据拆文件**：`news-categories.ts` + 序列化写回 + 重复校验；admin 分类 API 切换，删除字符串手术代码。
3. **admin 迁移**：scan/validate/delete 逻辑迁入；admin 补 `create` 与保存后刷新；`admin/README.md` 同步。
4. **CLI 入口**：`npm run content`；更新引用旧路径约定的 agent skill 文档（如 `scripts/research-frontiers-publish/SKILL.md`）。
5. **校验器收编**：`check-bilingual-mirror`、`check-space-news-frontmatter` 改为消费 content/ 的共享规则，删除最后的规则副本。
6. **管线对齐**（可后置）：Python phase 1 产出的 md 过 CLI 校验，路径逻辑对齐 router。

## Alternatives considered

- **继续在 admin 内完善，不建共享模块**：否决。admin 的问题恰是它独占了一层本该共享的逻辑；再加功能只会加深与站点数据模型的耦合，agent 与管线也无法受益。
- **做成 VuePress 插件或构建钩子**：否决。内容操作发生在构建之外（写源文件），插件是构建期概念，时机不对。
- **数据库 + API 服务（headless CMS）**：否决。对单人加 AFK agent 的维护模式，文件系统加 git 就是存储与版本控制；引入数据库换不来对等收益，反而多一个要运维的东西。

## 实施后记

**Follow-up 1（骨架）已于 2026-08-19 落地**：`content/` 的 `types.ts`、`router.ts`、`frontmatter-writer.ts`、`module.ts`、`index.ts` 与 17 个接口测试（fixture 目录驱动）。落地时的偏差与发现：

1. **frontmatter 读写改用 `yaml` 包**，未复用 `utils/frontmatter-parser.ts`。该简化解析器读侧覆盖不了嵌套对象（wechatShare 等解析为空串）与多行数组，作为写侧往返会损坏真实词条的 frontmatter。content 模块的 `parseMarkdownDoc`/`renderMarkdown` 走完整 YAML 解析与序列化；generators 的读路径不受影响。
2. **kb-section 的 section 列表从 taxonomy 的 `kind:'section'` 节点动态派生**（`index.ts`），未引入第二份清单。
3. **write 的合并语义**为键级合并（给出的键覆盖、未给出的保留），序列化不保留注释与空行：现有内容不使用注释。
4. create/delete 与分类操作留给 follow-up 2/3，接口届时按 ADR 定义加入。
