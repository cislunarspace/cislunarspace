# CONTEXT: Web（VuePress）

本文件记录 web 上下文域词汇：VuePress 配置、主题、插件与构建工具链。

## 词汇表

### VuePress

构建本知识库的静态站点生成器。VuePress 2 + Vue 3 + Vite。主配置见 `web/.vuepress/config.ts`。

### Theme

自定义主题，扩展自 `@vuepress/theme-default`，位于 `web/.vuepress/theme/`。通过 alias 覆盖 Layout.vue 与 VPSidebar.vue，并提供 AI Chat 布局。

### Sidebar

侧边栏配置从多来源生成：

- 手工章节定义：`web/.vuepress/sidebar/data.ts`
- 自动生成 JSON 工件：`sidebar.auto.json`、`sidebar-glossary.auto.json`
- 运行时构建：`web/.vuepress/sidebar/config.ts`

### Taxonomy Module

统一分类法模块位于 `web/.vuepress/taxonomy/`，持有全部分类法数据并向每个站点表面提供类型化视图。见 [ADR-0001](https://github.com/cislunarspace/cislunarspace/blob/master/docs/adr/0001-unified-taxonomy-module.md)。单语模型（`path: string | null`、`label: string`）见 [ADR-0006](https://github.com/cislunarspace/cislunarspace/blob/master/docs/adr/0006-remove-english-site.md)。

### Generators

`web/.vuepress/generators/` 的构建期生成器，产出 JSON 工件：

- `ai-chat.ts`：AI Chat 路由索引与上下文语料（单语）
- `glossary.ts`：词典侧边栏数据
- `bibliography.ts`：从 `ref.bib` 生成全站参考文献表

### Intakes

`web/.vuepress/intakes/` 的构建期数据采集：

- `glossary-intake.ts`：扫描词条 markdown
- `chat-index-intake.ts`：从分类法构建 AI chat 索引

### Content Families

两类内容：

1. **知识库章节**：`web/what-is-cislunarspace/`、`web/cislunar-orbits/` 等
2. **词典**：`web/glossary/`
3. **特殊表面**：`web/ai-chat.md`

### Build Pipeline

`npm run build` 三步：

1. `generate.ts`（`npm run gen-sidebar`）：生成全部 JSON 工件
2. `vuepress build`：构建静态站点
3. `sync-figures.js`：把 `figures/` 目录拷入 `dist/`

### Checks

`npm run check` 两个检查器：

- `check-links.ts`：站内链接、图片与 `\cite` 引用键校验
- `check-glossary-frontmatter.ts`：词条 frontmatter 的 aliases / related 字段校验

### Deployment

Nginx 从 `web/.vuepress/dist/` 伺服，SPA 回退。配置见 `web/deploy/nginx-ai-proxy.conf`。`/api/ai/` 路径反代 DeepSeek API。
