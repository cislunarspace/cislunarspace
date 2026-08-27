[English](CONTEXT.md) | 简体中文

# CONTEXT：Web（VuePress）

本文件记录 Web 上下文的领域词汇，覆盖 VuePress 配置、主题、插件与构建工具链。

## 词汇表

### VuePress

构建本知识库的静态站点生成器。VuePress 2 + Vue 3 + Vite。主配置见 `web/.vuepress/config.ts`。

### 主题（Theme）

自定义主题扩展自 `@vuepress/theme-default`，位于 `web/.vuepress/theme/`。它通过 alias 覆盖 Layout.vue 与 VPSidebar.vue，并提供 AI 问答布局。

### 侧边栏（Sidebar）

侧边栏配置由多个来源生成：

- `web/.vuepress/sidebar/data.ts` 中的手工章节定义
- 自动生成的 JSON 工件：`sidebar.auto.json`、`sidebar-glossary.auto.json`
- `web/.vuepress/sidebar/config.ts` 中的运行时组装

### 分类法模块（Taxonomy Module）

位于 `web/.vuepress/taxonomy/` 的统一分类法模块持有全部分类法数据，并暴露站点各表面消费的类型化视图。见 [ADR-0001](https://github.com/cislunarspace/cislunarspace/blob/master/docs/adr/0001-unified-taxonomy-module.md)。

### 生成器（Generators）

`web/.vuepress/generators/` 中的构建期生成器产出 JSON 工件：

- `ai-chat.ts`：AI 问答上下文与索引
- `glossary.ts`：术语侧边栏与翻译缺口
- `bibliography.ts`：来自 `ref.bib` 的参考文献

### 采集器（Intakes）

`web/.vuepress/intakes/` 中的构建期数据采集：

- `glossary-intake.ts`：扫描术语 markdown 文件
- `chat-index-intake.ts`：从分类法构建 AI 问答索引
- `translation-gap-intake.ts`:识别缺失的术语翻译

### 内容族（Content Families）

站点有四类内容族：

1. **知识库章节**：`web/what-is-cislunarspace/`、`web/cislunar-orbits/` 等。
2. **术语词典**：`web/glossary/`、`web/en/glossary/`
3. **特殊表面**：`web/ai-chat.md`

### 构建流水线（Build Pipeline）

`npm run docs:build` 分三步执行：

1. `generate.ts`（`npm run gen-sidebar`）：生成全部 JSON 工件
2. `vuepress build`：构建静态站点
3. `sync-figures.js`（`npm run sync-figures`）：把 `figures/` 目录复制进 `dist/`

### 部署（Deployment）

Nginx 以 SPA fallback 方式伺服 `web/.vuepress/dist/`。配置在 `web/deploy/nginx-ai-proxy.conf`。`/api/ai/` 路径代理到 DeepSeek API。
