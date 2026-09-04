
# ADR 0002：按职责整理 VuePress 支撑代码

- **状态:** 已接受
- **日期:** 2026-06-03
- **取代:** —
- **被取代:** —

## 背景

`web/.vuepress/` 根目录在多个开发阶段中积累了大量支撑文件，达到约 25 个源文件、职责混杂：

- **构建工具**（sync-figures, sharded-build, measure-build, verify-dist）：不具内容知识的基建脚本
- **主题展示数据**（extraSideBar, footer）：仅被主题组件消费，却放在 config 目录
- **侧边栏支撑代码**（sidebar-data, sidebar-types, sidebar-transforms）：知识库侧边栏树的类型与定义
- **内容生成器**（gen-sidebar, gen-ai-chat-context）：构建期 JSON 工件生产者，把七种互异的输出族混在一个 255 行的编排器里
- **已废弃兼容文件**（build-sidebar）：无运行时引用者的 re-export

这种布局让维护者和 agent 很难不读多个文件就找到 X 在哪。增改任何内容族都得在一个混杂无关关切的扁平目录里穿行。

## 决策

按职责划分目录来组织 VuePress 支撑代码：

| 目录 | 职责 | 示例 |
|-----------|---------------|---------|
| `.vuepress/sidebar/` | 侧边栏数据定义、类型与运行时配置组装 | `data.ts`, `types.ts`, `config.ts`, `intake.ts`, `runtime.ts` |
| `.vuepress/generators/` | 构建期 JSON 工件生成器（每种输出族一个） | `space-news.ts`, `ai-chat.ts`, `glossary.ts` |
| `.vuepress/build/` | 构建基建脚本（无内容知识） | `sync-figures.js`, `sharded-build.ts`, `measure-build.ts`, `verify-dist.ts` |
| `.vuepress/theme2/data/` | 仅被主题组件消费的主题展示数据 | `wechat-widget.ts`, `footer.ts` |
| `.vuepress/taxonomy/` | 统一分类法模块（不变） | `types.ts`, `data.ts`, `define.ts`, `adapters/` |
| `.vuepress/intakes/` | 构建期数据采集（不变） | `glossary-intake.ts`, `chat-index-intake.ts` |

VuePress 配置根文件（`.vuepress/config.ts`, `navbar.ts`, `navbar-en.ts`, `og-meta-plugin.ts`)保留在顶层:它们由 `config.ts` 直接消费,数量少到不值得单设目录。`page-metadata.ts`(及 `.mjs` 同伴)是插件、主题和独立 CLI 脚本共用的工具,放在 `.vuepress/utils/page-metadata.ts`,与其他 VuePress 配置助手同处。

构建期编排器（`generate.ts`）是薄 CLI 入口，委托给三个生成器；不再内联任何生成逻辑。

## 非目标

1. **不改路由 URL 与页面内容。** 所有 markdown 文件、页面路径与语言根（zh 用 `/`，en 用 `/en/`）保持不变。
2. **不改 ADR-0001 分类法规则。** `TaxonomyNode`, `NodeId`, `LocalePath`, 语言门控与 adapter 模式照旧。
3. **不改内容数据源。** `sidebar/data.ts` 仍是知识库章节的手工定义源；glossary 与 Space News 仍走文件系统扫描。
4. **不设插件目录。** 只有唯一的 VuePress 插件（`og-meta-plugin.ts`）且被 `config.ts` 直接 import,`plugins/` 目录尚无必要。
5. **不重组 `gen-ai-chat-context.ts`。** 它留在根目录:`generators/ai-chat.ts` 在现路径上消费它,且无其他依赖方。

## 后果

### 正面

- 每个职责区域一个目录；“X 放哪”由目录名回答。
- `generate.test.ts` 检验新生成器结构，确认工件等价。
- 废弃的 `build-sidebar.ts` 移除；不再有过期 re-export。
- 微信签名服务示例移入 `scripts/`——它本就是项目级工具而非 VuePress 构建代码。

### 负面

- 被移动文件的 import 路径变了；树外 fork 若引用这些路径需要更新。
- `pagePatterns` 配置必须继续排除 `.vuepress/**/*.md`，避免把新增的 `.ts` 邻居当作页面（现有模式已满足）。
- `web/.vuepress/sidebar/types.ts` 是为向后兼容保留的薄 re-export 中枢（`intake.ts` + `runtime.ts`）；待所有直接 namespace import 迁移完即可移除。

## 验证

- `npm run gen-sidebar` 产出全部六种 JSON 工件，内容与重构前一致。
- `npm run test` 全过，唯一例外是 `navbar.test.ts` 的 dialectic route（与本改动无关的既存失败）。
- 为省构建成本，本 issue 未跑 `npm run docs:build`；应在 CI 里验证。

## 实施后记

ADR 批准后实际落地时有以下偏差：

1. **`sidebar/types.ts` 合并为单一文件**：ADR 原计划拆为 `intake.ts` + `runtime.ts` + `types.ts`（re-export hub），实际直接合并到 `types.ts` 一个文件，`intake.ts` 和 `runtime.ts` 未创建。re-export 层已在后续清理中移除。
2. **`page-metadata.ts` 位置**：ADR 写 lives in `.vuepress/utils/page-metadata.ts`，实际同时有 `.ts`（封装层）和 `.mjs`（核心实现）两个文件，测试后来从 `.vuepress/` 根移入 `utils/`。
3. **`gb-t-7714.csl` 已删除**：bibliography generator 重写为自实现 GB/T 7714 格式化，不再依赖 CSL 文件。
4. **`view-engine.ts` 的 `select`/`build`/`hasSourceChildren` 已移除**：这三个方法仅被测试调用，属于死代码。
