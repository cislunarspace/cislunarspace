# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Cislunar Space Beginner's Guide** (地月空间入门指南) — an open-source bilingual (zh/en) knowledge base about cislunar space science, technology, and engineering. Published at https://cislunarspace.cn. Built with VuePress 2 + Vue 3 + Vite.

## 语言要求

始终使用中文与用户交流（代码注释和 commit message 保持英文）。

## 写作要求

所有面向人读的文本——CONTEXT.md、ADR、issue 评论、PR 描述、agent brief、triage notes、Sphinx 文档——遵守以下原则（原话引用）：

- **善于总结材料**：材料弄全弄准，去粗取精、去伪存真、由此及彼、由表及里，反映事物本质；不堆砌细节、不拼凑清单。
- **不用夸大的修饰词**：不写"权威""强大""完整""单一事实来源"之类的修饰，它们减损力量。
- **注意词语的逻辑界限**：相邻概念要划清（如"配置"与"运行规格"、"力模型"与"力模型聚合"），不混用、不模糊。
- **废话应当尽量除去**。
- **通俗、亲切，由小讲到大，由近讲到远，引人入胜**：先讲读者已知／当前的事物，再推到陌生／抽象的；忌一上来就宏大叙事或先搬死人、外国人。
- **与读者完全平等**：靠分析说服，不要装腔作势来吓人；老老实实办事。

## Commands

All commands run from `web/`:

```bash
npm run docs:dev      # gen-sidebar → vuepress dev server (host 0.0.0.0)
npm run docs:build    # gen-sidebar → vuepress build → sync-figures
npm run gen-sidebar   # regenerate all JSON artifacts (sidebar, articles, AI, glossary)
npm run sync-figures  # copy figures/ into dist/ (required for images to display)
```

Requires Node.js 18+ (CI and cron use v22.22.2).

**Local AI chat (`/ai-chat`):** copy `web/.env.example` to `web/.env` and set `DEEPSEEK_API_KEY`. Vite dev server proxies `/api/ai` → `https://api.deepseek.com` (see `web/.vuepress/config.ts`). Production uses Nginx (`web/deploy/nginx-ai-proxy.conf`).

## Architecture

### VuePress Config

- `web/.vuepress/config.ts` — main config (locales, plugins, Vite bundler, KaTeX, proxy to DeepSeek API at `/api/ai`)
- `web/.vuepress/navbar.ts` / `navbar-en.ts` — top navigation
- `web/.vuepress/og-meta-plugin.ts` — Open Graph meta tag plugin
- `web/.vuepress/page-metadata.ts` — page metadata utilities

### Sidebar Module (`web/.vuepress/sidebar/`)

All sidebar-related data, types, and runtime config construction:

- `data.ts` — manual sidebar section definitions for knowledge-base sections
- `types.ts` — unified sidebar type re-exports (from `intake.ts` + `runtime.ts`)
- `intake.ts` — build-time sidebar types (VueSidebarItem, GlossaryScan, ChatIndexEntry, etc.)
- `runtime.ts` — runtime sidebar types (Article, SidebarData, SidebarYear, etc.)
- `config.ts` — runtime VuePress sidebar config builder (called by `config.ts`)

### Build-Time Generators (`web/.vuepress/generators/`)

One generator per output family. Orchestrated by `generate.ts` (the `npm run gen-sidebar` entry point):

- `space-news.ts` — generates `sidebar.auto.json`, `space-news-articles.json`, `space-news-sidebar-data.json`
- `ai-chat.ts` — generates `ai-chat-context.json` and `ai-chat-index.json`
- `glossary.ts` — generates `sidebar-glossary.auto.json` and translation-gap reports

### Build Tooling (`web/.vuepress/build/`)

Build infrastructure scripts (no content knowledge):

- `sync-figures.js` — copies `figures/` dirs into `dist/`
- `sharded-build.ts` — N-way parallel VuePress build
- `measure-build.ts` — build performance measurement
- `verify-dist.ts` — dist verification checks

### Taxonomy Module (`web/.vuepress/taxonomy/`)

Unified taxonomy module. See [ADR-0001](docs/adr/0001-unified-taxonomy-module.md).

- `types.ts` — TaxonomyNode, NodeId, LocalePath, NodeKind definitions
- `data.ts` — navbar, wayfinding, glossary-category, news-category nodes
- `define.ts` — flattens sidebar/data.ts + flatNodes into unified TaxonomyModule
- `adapters/` — sidebar-sections, wayfinding, navbar, glossary-categories, news-categories, chat-index-sections

### Intakes (`web/.vuepress/intakes/`)

Build-time data collection:

- `glossary-intake.ts` — scans glossary markdown files
- `chat-index-intake.ts` — builds AI chat index from taxonomy
- `translation-gap-intake.ts` — identifies missing glossary translations

### Custom Theme (`web/.vuepress/theme2/`)

Extends `@vuepress/theme-default`:

- `index.ts` — overrides Layout.vue and VPSidebar.vue via alias
- `layouts/` — `Layout`, `SpaceNewsArticle`, `SpaceNewsHome`, `SpaceNewsArchive`, `AiChatLayout`, `DialecticLayout`
- `components/` — `SpaceNewsHome`, `SpaceNewsArchive`, `AiChat`, `SpaceNewsSidebar`, `Dialectic`, `Forum`, `OrbitSimLab`, etc.
- `data/` — theme display data (`wechat-widget.ts`, `footer.ts`)

### Content Framework

The site has four content families with different management models:

**1. Knowledge-base sections**
- Source directories: `web/what-is-cislunarspace/`, `web/cislunar-orbits/`, `web/research-frontiers/`, `web/background/`, `web/resources-tools/`, `web/satellite-simulation/`
- Navigation source: `web/.vuepress/sidebar/data.ts` (manual definitions)
- Generated via: `web/.vuepress/sidebar/config.ts` → taxonomy adapters
- Bilingual: Chinese at root, English under `web/en/` (same directory names)

**2. Glossary**
- Source directories: `web/glossary/`, `web/en/glossary/` (11 topic subdirectories)
- Categories: defined as taxonomy `glossary-category` nodes in `taxonomy/data.ts`
- Generated via: `web/.vuepress/generators/glossary.ts` → `sidebar-glossary.auto.json`
- Bilingual: zh entries are authoritative; en gaps tracked by `translation-gap-intake.ts`

**3. Space News**
- Source directories: `web/space-news/YYYY/MM/` (zh), `web/en/space-news/YYYY/MM/` (en)
- Naming: `YYYY-MM-DD-slug.md` (same slug for both locales)
- Layout: always `layout: SpaceNewsArticle`
- Images: `figures/YYYY-MM-DD-slug/` next to the `.md`, referenced as `./figures/...`
- Category: single value or YAML array (`category: [spacex, commercial]`)
- Draft: `draft: true` hides from generation
- Generated via: `web/.vuepress/generators/space-news.ts` → 3 JSON artifacts

**4. Special surfaces**
- Source: standalone `.md` files at `web/` root (`ai-chat.md`, `dialectic.md`, `forum.md`)
- Rendering: custom layouts and components in `theme2/`
- Bilingual: `ai-chat.md` and `forum.md` have en counterparts; `dialectic.md` is zh-only

### Auto-Generated Files (DO NOT EDIT)

- `web/.vuepress/sidebar.auto.json` — Space News sidebar tree
- `web/.vuepress/space-news-articles.json` — Space News article metadata
- `web/.vuepress/space-news-sidebar-data.json` — Space News custom sidebar data
- `web/.vuepress/sidebar-glossary.auto.json` — glossary scan data
- `web/.vuepress/public/ai-chat-index.json` — AI chat route index
- `web/.vuepress/public/ai-chat-context.json` — AI chat context corpus

To regenerate: run `npm run gen-sidebar` or the full `npm run docs:build`.

## Critical Build Pipeline

`npm run docs:build` runs three steps in sequence. **Never skip `sync-figures`** — images won't appear in dist:

1. `generate.ts` (`npm run gen-sidebar`) — generates all JSON artifacts
2. `vuepress build` — builds static site
3. `sync-figures.js` (`npm run sync-figures`) — copies `figures/` dirs into `dist/`

## Deployment

Nginx serves from `web/.vuepress/dist/` with SPA fallback. Config at `web/deploy/nginx-ai-proxy.conf`. The `/api/ai/` path proxies to DeepSeek API.

## Space News Automation

- `scripts/space-news-update-local.sh` — triggered by system crontab every 3 hours
- Full workflow documented in `scripts/space-news-publish/SKILL.md`
- Adding a new year/month: create `README.md` index, then re-run `npm run gen-sidebar`

## Maintenance Rules

- **Do not edit auto-generated JSON files** — regenerate them via `npm run gen-sidebar`
- **Add knowledge-base section/page** — update `web/.vuepress/sidebar/data.ts`
- **Add Space News article** — create `YYYY-MM-DD-slug.md` in both `web/space-news/YYYY/MM/` and `web/en/space-news/YYYY/MM/`
- **Add glossary entry** — create markdown in `web/glossary/<category>/`; categories defined in `taxonomy/data.ts`
- **Add theme display data** — place in `web/.vuepress/theme2/data/`
- **Add build tooling** — place in `web/.vuepress/build/`
- **Add VuePress plugin** — place in `web/.vuepress/` root (only 2 files; subdirectory not yet justified)
- Math rendering uses KaTeX via `@traptitech/markdown-it-katex`

## Agent skills

### Issue tracker

Issues tracked in GitHub (github.com/cislunarspace/cislunarspace) via `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Using default label vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout. One `CONTEXT.md` + `docs/adr/` at repo root. See `docs/agents/domain.md`.
