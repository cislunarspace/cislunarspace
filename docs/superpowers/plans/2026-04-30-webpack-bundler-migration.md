# Webpack Bundler Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `@vuepress/bundler-vite` with `@vuepress/bundler-webpack` so the 1217-page site builds within 945MB RAM.

**Architecture:** Config-level migration only. Swap the bundler dependency, rewrite the dev server proxy using `http-proxy-middleware`, add `parallelism(1)` for memory tuning. All plugins, theme, and content are unchanged.

**Tech Stack:** VuePress 2.0.0-rc.27, @vuepress/bundler-webpack 2.0.0-rc.27, webpack 5, http-proxy-middleware v2

---

### Task 1: Swap dependencies in package.json

**Files:**
- Modify: `web/package.json`

- [ ] **Step 1: Replace bundler-vite with bundler-webpack**

In `web/package.json`, change the `devDependencies`:

```diff
-   "@vuepress/bundler-vite": "2.0.0-rc.27",
+   "@vuepress/bundler-webpack": "2.0.0-rc.27",
+   "http-proxy-middleware": "^2.0.9",
```

- [ ] **Step 2: Update build script with memory limit**

In `web/package.json`, change the `scripts`:

```diff
-   "docs:build": "npm run gen-sidebar && vuepress build . && npm run sync-figures",
+   "docs:build": "npm run gen-sidebar && NODE_OPTIONS='--max-old-space-size=3072' vuepress build . && npm run sync-figures",
```

- [ ] **Step 3: Commit**

```bash
git add web/package.json
git commit -m "chore: swap bundler-vite for bundler-webpack, add http-proxy-middleware"
```

---

### Task 2: Update config.ts bundler and proxy

**Files:**
- Modify: `web/.vuepress/config.ts`

- [ ] **Step 1: Replace bundler import**

In `web/.vuepress/config.ts`, replace the import:

```diff
- import { viteBundler } from '@vuepress/bundler-vite'
+ import { webpackBundler } from '@vuepress/bundler-webpack'
+ import { createProxyMiddleware } from 'http-proxy-middleware'
```

- [ ] **Step 2: Replace bundler config**

Replace the entire `bundler: viteBundler(...)` block (lines 118-133) with:

```ts
  bundler: webpackBundler({
    chainWebpack: (config) => {
      config.parallelism(1)
    },
    devServerSetupMiddlewares: (middlewares, devServer) => {
      devServer.app?.use(
        '/api/ai',
        createProxyMiddleware({
          target: 'https://api.deepseek.com',
          changeOrigin: true,
          pathRewrite: { '^/api/ai': '' },
          on: {
            proxyReq: (proxyReq) => {
              proxyReq.setHeader(
                'Authorization',
                `Bearer ${process.env.DEEPSEEK_API_KEY || ''}`
              )
            },
          },
        })
      )
      return middlewares
    },
  }),
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/config.ts
git commit -m "feat: migrate bundler config from Vite to Webpack"
```

---

### Task 3: Install dependencies and verify build

**Files:**
- None (verification only)

- [ ] **Step 1: Install dependencies**

```bash
cd web && npm install
```

Expected: `@vuepress/bundler-webpack@2.0.0-rc.27` and `http-proxy-middleware@^2.0.9` installed. `@vuepress/bundler-vite` removed.

- [ ] **Step 2: Verify production build completes**

```bash
cd web && npm run docs:build
```

Expected: Build completes without OOM. `dist/` directory is populated with HTML files.

- [ ] **Step 3: Verify figures are synced**

```bash
ls web/.vuepress/dist/figures/ | head -5
```

Expected: Figure directories exist in dist.

- [ ] **Step 4: Commit lockfile**

```bash
git add web/package-lock.json
git commit -m "chore: update lockfile for webpack bundler"
```

---

### Task 4: Verify dev server and AI proxy

**Files:**
- None (verification only)

- [ ] **Step 1: Start dev server**

```bash
cd web && npm run docs:dev
```

Expected: Dev server starts on `0.0.0.0:8080` without errors.

- [ ] **Step 2: Verify pages render**

Open `http://localhost:8080/` in a browser. Check:
- Homepage loads
- Sidebar navigation works
- A content page renders with KaTeX math
- English locale (`/en/`) works

- [ ] **Step 3: Verify AI chat proxy**

Open `http://localhost:8080/ai-chat/` in a browser. Send a test message. Expected: Response from DeepSeek API (requires `DEEPSEEK_API_KEY` in `web/.env`).

- [ ] **Step 4: Stop dev server and commit verification**

```bash
# No code to commit — verification complete
```

---

### Task 5: Clean up and final commit

**Files:**
- None

- [ ] **Step 1: Verify no Vite remnants**

```bash
grep -r "bundler-vite\|viteBundler\|viteOptions" web/.vuepress/ --include="*.ts" --include="*.js"
```

Expected: No matches (except possibly in comments or legacy dirs).

- [ ] **Step 2: Remove node_modules Vite cache if present**

```bash
rm -rf web/node_modules/.vite 2>/dev/null
```

- [ ] **Step 3: Final status check**

```bash
git status
```

Expected: Clean working tree (all changes committed).
