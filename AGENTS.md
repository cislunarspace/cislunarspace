# AGENTS.md - Cislunarspace

## What This Is

VuePress 2 bilingual (zh/en) knowledge base about cislunar space. Published at https://cislunarspace.cn via Nginx on the same machine.

## Commands

All from `web/`:

```bash
npm run docs:dev      # gen-sidebar → vuepress dev
npm run docs:build    # gen-sidebar → vuepress build → sync-figures
npm run gen-sidebar   # regenerates sidebar.auto.json + space-news-articles.json
npm run sync-figures  # copies figures/ into dist/ (images won't display without this)
```

Node 18+ required. CI and cron use v22.22.2.

## Architecture

```
web/.vuepress/
├── config.ts               # Main config (locales, plugins, Vite bundler)
├── sidebar.ts / sidebar-en.ts  # Manual sidebar sections + import sidebar.auto.json
├── navbar.ts / navbar-en.ts    # Top nav
├── gen-sidebar.js          # Scans space-news dirs → sidebar.auto.json + space-news-articles.json
├── sync-figures.js         # Copies figures/ dirs from content into dist/
├── og-meta-plugin.ts       # Injects OG meta from frontmatter
├── theme2/                 # Custom theme (extends @vuepress/theme-default)
│   ├── index.ts            # Overrides Layout.vue via alias
│   ├── layouts/            # SpaceNewsArticle, SpaceNewsHome, SpaceNewsArchive, AiChatLayout
│   └── components/         # SpaceNewsHome, SpaceNewsArchive, AiChat, etc.
├── theme/                  # Legacy v1 theme — do NOT use
├── components-v1/          # Legacy v1 components — do NOT use
└── sidebar.auto.json       # GENERATED — do not edit
```

**Content dirs:** `space-news/YYYY/MM/` (zh), `en/space-news/YYYY/MM/` (en). Each has a `README.md` index.

## Critical Build Order

`npm run docs:build` runs these in sequence. Never skip `sync-figures` — images won't appear in dist.

## Space News Conventions

- **Article path:** `space-news/YYYY/MM/YYYY-MM-DD-slug.md` (en mirror under `en/`)
- **Same slug** for zh/en, no `-en` suffix
- **Layout:** always `layout: SpaceNewsArticle`
- **Images:** in `figures/YYYY-MM-DD-slug/` next to the `.md`, referenced as `./figures/...`
- **Category:** single value or YAML array (`category: [spacex, commercial]`)
- **Draft:** `draft: true` hides from homepage and sidebar
- **New year/month:** create `README.md` index, then re-run `npm run gen-sidebar`
- See `.cursor/skills/space-news-publish/SKILL.md` for full automation workflow

## Sidebar Is Auto-Generated

`sidebar.ts` and `sidebar-en.ts` define manual sections (glossary, research, blue-team, etc.) and import `sidebar.auto.json` for Space News. **Never edit `sidebar.auto.json` directly** — edit `gen-sidebar.js` and re-run it.

## Deployment

Nginx serves from `web/.vuepress/dist/` with SPA fallback (`try_files $uri $uri/ /index.html`). Config at `web/deploy/nginx-ai-proxy.conf`. The `/api/ai/` path proxies to DeepSeek API.

## OpenCode Session Startup

1. Read `SOUL.md` — identity
2. Read `USER.md` — who you're helping
3. Read `memory/YYYY-MM-DD.md` (today + yesterday)
4. If main session: also read `MEMORY.md`

## Red Lines

- Don't exfiltrate private data. Ever.
- Don't run destructive commands without asking.
- `trash` > `rm`
- When in doubt, ask.
- **Ask first** before anything that leaves the machine (emails, tweets, posts).

## Heartbeats

Read `HEARTBEAT.md` if it exists. Follow it strictly — don't infer from prior chats. Reply `HEARTBEAT_OK` if nothing needs attention.

## Platform Formatting

- Discord/WhatsApp: no markdown tables — use bullets
- Discord links: wrap in `<>` to suppress embeds
- WhatsApp: no headers — use **bold** or CAPS
