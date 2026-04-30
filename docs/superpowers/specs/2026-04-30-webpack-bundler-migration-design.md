# Webpack Bundler Migration Design

**Date:** 2026-04-30
**Status:** Approved
**Goal:** Replace Vite bundler with Webpack bundler to build 1217 pages within 945MB RAM on a 2-core server.

## Problem

VuePress 2 + Vite compiles 1217 markdown pages via parallel transpilation and minification, consuming far more than 945MB RAM. The build OOMs on the deployment server.

## Approach

Switch from `@vuepress/bundler-vite` to `@vuepress/bundler-webpack`. Webpack processes files more sequentially and has lower peak memory for large builds. The VuePress plugin API is bundler-agnostic, so all plugins, theme, and content remain unchanged.

## Scope

**Changes (2 files):**
- `web/package.json` — swap bundler dependency, add `http-proxy-middleware`, update build script
- `web/.vuepress/config.ts` — swap bundler import, rewrite proxy config, add memory tuning

**No changes:**
- All theme code (13 components, 5 layouts, 4 composables, 2 utils)
- All markdown content (1217 files)
- Sidebar/navbar configs
- Build scripts (`gen-sidebar.js`, `sync-figures.js`)
- Nginx deployment config

## Detailed Design

### 1. Package Dependencies

```diff
  devDependencies:
-   "@vuepress/bundler-vite": "2.0.0-rc.27",
+   "@vuepress/bundler-webpack": "2.0.0-rc.27",
+   "http-proxy-middleware": "^2.0.9",
```

### 2. Build Script

```diff
- "docs:build": "npm run gen-sidebar && vuepress build . && npm run sync-figures",
+ "docs:build": "npm run gen-sidebar && NODE_OPTIONS='--max-old-space-size=3072' vuepress build . && npm run sync-figures",
```

3072MB heap limit as safety net above 945MB physical + swap.

### 3. Config Changes (`config.ts`)

**Bundler swap:**
```ts
// Remove:
import { viteBundler } from '@vuepress/bundler-vite'

// Add:
import { webpackBundler } from '@vuepress/bundler-webpack'
import { createProxyMiddleware } from 'http-proxy-middleware'
```

**Bundler config:**
```ts
bundler: webpackBundler({
  // Memory optimization for 945MB server
  chainWebpack: (config) => {
    config.parallelism(1)  // serialize file processing to minimize peak memory
  },
  // AI chat proxy (replaces Vite's server.proxy)
  devServerSetupMiddlewares: (middlewares, devServer) => {
    devServer.app?.use(
      '/api/ai',
      createProxyMiddleware({
        target: 'https://api.deepseek.com',
        changeOrigin: true,
        pathRewrite: { '^/api/ai': '' },
        on: {
          proxyReq: (proxyReq) => {
            proxyReq.setHeader('Authorization', `Bearer ${process.env.DEEPSEEK_API_KEY || ''}`)
          },
        },
      })
    )
    return middlewares
  },
}),
```

**Remove old Vite-specific config:**
```ts
// Delete the entire viteOptions block:
- bundler: viteBundler({
-   viteOptions: {
-     server: {
-       proxy: { ... }
-     }
-   }
- }),
```

### 4. What Stays the Same

- `defineUserConfig` and all top-level options (`lang`, `title`, `head`, `locales`, `theme`, `plugins`, `markdown`)
- All plugins (`googleAnalyticsPlugin`, `sitemapPlugin`, `searchPlugin`, custom `katexPlugin`, `rawContentPlugin`, `ogMetaPlugin`)
- Theme configuration and all theme code
- `.env` loading via `dotenv`
- `markdown.lineNumbers`

## Key Technical Notes

1. **Webpack filesystem cache** is enabled by default — first build is slow, incremental builds are fast.
2. **`parallelism(1)`** serializes file I/O to minimize peak memory. Tradeoff: slower builds.
3. **`http-proxy-middleware` v2 API** — matches webpack-dev-server@5.2.3's bundled version. Uses `on: { proxyReq }` syntax, not v3's flat structure.
4. **KaTeX and markdown-it plugins** are bundler-agnostic (they hook into VuePress core's markdown pipeline).
5. **All VuePress plugins** use core hooks (`extendsMarkdown`, `extendsPage`), not bundler-specific hooks.

## Verification Plan

1. `npm run docs:dev` — dev server starts, pages render, sidebar works, search works
2. `/api/ai` proxy — AI chat page loads, can send messages to DeepSeek
3. `npm run docs:build` — completes without OOM on the 945MB server
4. `npm run sync-figures` — figures copy correctly
5. Spot-check built pages — KaTeX renders, images load, bilingual switching works

## Rollback

Revert `config.ts` and `package.json` to the Vite versions via git. No data migration needed.
