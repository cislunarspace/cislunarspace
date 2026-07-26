# CONTEXT — Web (VuePress)

This file captures the web context domain vocabulary for VuePress configuration, theme, plugins, and build tooling.

## Glossary

### VuePress

The static site generator used to build this knowledge base. VuePress 2 + Vue 3 + Vite. See `web/.vuepress/config.ts` for the main configuration.

### Theme

The custom theme extends `@vuepress/theme-default` at `web/.vuepress/theme2/`. It overrides Layout.vue and VPSidebar.vue via alias, and provides custom layouts for Space News, AI Chat, and Dialectic surfaces.

### Sidebar

The sidebar configuration is generated from multiple sources:

- Manual section definitions in `web/.vuepress/sidebar/data.ts`
- Auto-generated JSON artifacts: `sidebar.auto.json`, `sidebar-glossary.auto.json`
- Runtime construction in `web/.vuepress/sidebar/config.ts`

### Taxonomy Module

The unified taxonomy module at `web/.vuepress/taxonomy/` owns all taxonomy data and exposes typed views consumed by every site surface. See [ADR-0001](../docs/adr/0001-unified-taxonomy-module.md).

### Generators

Build-time generators in `web/.vuepress/generators/` produce JSON artifacts:

- `space-news.ts` — Space News sidebar, articles, and sidebar data
- `ai-chat.ts` — AI Chat context and index
- `glossary.ts` — Glossary sidebar and translation gaps
- `bibliography.ts` — Bibliography from `ref.bib`

### Intakes

Build-time data collection in `web/.vuepress/intakes/`:

- `glossary-intake.ts` — scans glossary markdown files
- `chat-index-intake.ts` — builds AI chat index from taxonomy
- `translation-gap-intake.ts` — identifies missing glossary translations

### Content Families

The site has four content families:

1. **Knowledge-base sections** — `web/what-is-cislunarspace/`, `web/cislunar-orbits/`, etc.
2. **Glossary** — `web/glossary/`, `web/en/glossary/`
3. **Space News** — `web/space-news/YYYY/MM/`, `web/en/space-news/YYYY/MM/`
4. **Special surfaces** — `web/ai-chat.md`, `web/dialectic.md`, `web/forum.md`

### Build Pipeline

`npm run docs:build` runs three steps:

1. `generate.ts` (`npm run gen-sidebar`) — generates all JSON artifacts
2. `vuepress build` — builds static site
3. `sync-figures.js` (`npm run sync-figures`) — copies `figures/` dirs into `dist/`

### Deployment

Nginx serves from `web/.vuepress/dist/` with SPA fallback. Config at `web/deploy/nginx-ai-proxy.conf`. The `/api/ai/` path proxies to DeepSeek API.
