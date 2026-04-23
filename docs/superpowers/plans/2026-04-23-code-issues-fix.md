# Code Issues Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 24 code issues (CRITICAL/HIGH/MEDIUM/LOW) found during codebase audit. M6 (AiChat.vue refactor) deferred.

**Architecture:** Fixes are organized by severity. Each task is a self-contained change to one or two files. No architectural changes — just targeted bug fixes, safety improvements, and cleanup.

**Tech Stack:** VuePress 2, Vue 3 Composition API, TypeScript, Vite

---

## Task 1: C1 — Footer language labels inverted

**Files:**
- Modify: `web/.vuepress/theme2/components/Footer.vue:28`

- [ ] **Step 1: Fix the ternary condition**

Change line 28 from:
```html
<a :href="link.href" class="nav-link">{{ link.labelEn && !isEn ? link.labelEn : link.label }}</a>
```
to:
```html
<a :href="link.href" class="nav-link">{{ isEn && link.labelEn ? link.labelEn : link.label }}</a>
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/components/Footer.vue
git commit -m "fix: correct inverted language label ternary in Footer"
```

---

## Task 2: C2 — Move Cesium Ion token to environment variable

**Files:**
- Modify: `web/.vuepress/theme2/components/OrbitSimLab.vue:36-37`
- Modify: `web/.vuepress/config.ts` (add Vite define)

- [ ] **Step 1: Add Vite define for Cesium token in config.ts**

In `web/.vuepress/config.ts`, find the `viteBundler` config section and add the `define` for the Cesium token. Find the existing `define` block (which has `__VITE_GA_ID__`) and add:

```typescript
'import.meta.env.VITE_CESIUM_ION_TOKEN': JSON.stringify(process.env.VITE_CESIUM_ION_TOKEN || ''),
```

If no `define` block exists in the bundler config, add one:

```typescript
bundler: viteBundler({
  viteOptions: {
    define: {
      'import.meta.env.VITE_CESIUM_ION_TOKEN': JSON.stringify(process.env.VITE_CESIUM_ION_TOKEN || ''),
    },
  },
}),
```

- [ ] **Step 2: Replace hardcoded token in OrbitSimLab.vue**

Replace lines 35-37:
```typescript
/** 与历史 orbit-sim.html 一致，便于沿用 Ion 资源 */
const CESIUM_ION_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MjBhMDI3My1lMjRmLTRhN2QtODc5Yi02MGVhZmUzNDdjMzAiLCJpZCI6Mzk1NDEzLCJpYXQiOjE3NzIxOTg2NDN9.5aOJb2oLS3xJ-bbcRdTzznV5j9jDGvD_Ev-GF4eNc3A'
```

with:
```typescript
/** 与历史 orbit-sim.html 一致，便于沿用 Ion 资源（从环境变量注入） */
const CESIUM_ION_TOKEN: string = (import.meta as any).env?.VITE_CESIUM_ION_TOKEN ?? ''
```

- [ ] **Step 3: Add token to web/.env.example**

Append to `web/.env.example`:
```
# Cesium Ion access token for OrbitSimLab (optional, get from https://ion.cesium.com/tokens)
VITE_CESIUM_ION_TOKEN=
```

- [ ] **Step 4: Commit**

```bash
git add web/.vuepress/theme2/components/OrbitSimLab.vue web/.vuepress/config.ts web/.env.example
git commit -m "fix: move Cesium Ion token to environment variable"
```

---

## Task 3: H1 — MutationObserver memory leak in SpaceNewsSidebar

**Files:**
- Modify: `web/.vuepress/theme2/components/SpaceNewsSidebar.vue:115,210-214`

- [ ] **Step 1: Add `onBeforeUnmount` import**

Change line 115 from:
```typescript
import { ref, computed, watch, onMounted } from 'vue'
```
to:
```typescript
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
```

- [ ] **Step 2: Store observer and add cleanup**

Replace lines 210-214:
```typescript
onMounted(() => {
  syncHidden()
  const observer = new MutationObserver(syncHidden)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
```

with:
```typescript
let classObserver: MutationObserver | null = null

onMounted(() => {
  syncHidden()
  classObserver = new MutationObserver(syncHidden)
  classObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  classObserver?.disconnect()
  classObserver = null
})
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/theme2/components/SpaceNewsSidebar.vue
git commit -m "fix: disconnect MutationObserver on unmount in SpaceNewsSidebar"
```

---

## Task 4: H2 — Keyboard shortcuts conflict with textarea

**Files:**
- Modify: `web/.vuepress/theme2/components/OrbitSimLab.vue:353-354`

- [ ] **Step 1: Expand the input guard**

Replace lines 353-354:
```typescript
function onKeydown(e: KeyboardEvent) {
  if (e.target instanceof HTMLInputElement) return
```

with:
```typescript
function onKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable) return
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/components/OrbitSimLab.vue
git commit -m "fix: exclude textarea and contenteditable from keyboard shortcuts"
```

---

## Task 5: H3 — v-html security comment in Forum

**Files:**
- Modify: `web/.vuepress/theme2/composables/useForum.ts:291`

- [ ] **Step 1: Add security-sensitive comment above renderContent**

Add a comment above the `renderContent` function (line 291):
```typescript
/** SECURITY: escapeHtml MUST be applied before v-html rendering. Do not pass raw user content to v-html. */
function renderContent(content: string): string {
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/composables/useForum.ts
git commit -m "docs: add security comment for v-html renderContent in Forum"
```

---

## Task 6: H4 — M2E() Newton iteration divergence protection

**Files:**
- Modify: `web/.vuepress/theme2/utils/orbitSimMath.ts:86-94`

- [ ] **Step 1: Add clamping and divergence detection**

Replace the M2E function:
```typescript
export function M2E(M: number, e: number) {
  let E = M
  for (let k = 0; k < 60; k++) {
    const d = (M - E + e * Math.sin(E)) / (1 - e * Math.cos(E))
    E += d
    if (Math.abs(d) < 1e-12) break
  }
  return E
}
```

with:
```typescript
export function M2E(M: number, e: number) {
  const ec = Math.min(e, 0.95)
  let E = M
  let prevD = Infinity
  for (let k = 0; k < 60; k++) {
    const d = (M - E + ec * Math.sin(E)) / (1 - ec * Math.cos(E))
    E += d
    if (Math.abs(d) < 1e-12) break
    if (Math.abs(d) > Math.abs(prevD) * 2) break
    prevD = d
  }
  return E
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/utils/orbitSimMath.ts
git commit -m "fix: add eccentricity clamping and divergence detection in M2E"
```

---

## Task 7: H5 — useForum() shared state

**Files:**
- Modify: `web/.vuepress/theme2/composables/useForum.ts:57-66`

- [ ] **Step 1: Move refs to module scope**

Move the three refs from inside `useForum()` to module scope (after the `escapeHtml` function, before `useForum`):

```typescript
const currentUser = ref<ForumUser | null>(null)
const posts = ref<ForumPost[]>([])
const likedPostIds = ref<string[]>([])

export function useForum() {
  const route = useRoute()
  const lang = computed<ForumLang>(() =>
    route.path.startsWith('/en/') ? 'en' : 'zh',
  )
  const t = (key: string) => forumT(lang.value, key)
```

Remove the three ref declarations from inside the function (lines 64-66).

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/composables/useForum.ts
git commit -m "fix: move useForum state refs to module scope for shared composable"
```

---

## Task 8: M1 — Deduplicate categoryMeta

**Files:**
- Modify: `web/.vuepress/gen-sidebar.js:9-23`

- [ ] **Step 1: Import categoryMeta from the TS source**

Since `gen-sidebar.js` runs in Node.js and the TS file uses `export const`, we need to read the JSON data. The simplest approach: extract the data to a shared JSON file, or just inline-import the TS module's data.

Replace lines 9-23 in `gen-sidebar.js`:
```javascript
// 分类元数据（与 theme2/utils/categoryMeta.ts 保持一致）
const categoryMeta = {
  artemis: { zh: 'Artemis', en: 'Artemis', color: '#6366f1' },
  ...
}
```

with:
```javascript
// 分类元数据 — single source of truth in theme2/utils/categoryMeta.ts
// Import via dynamic import since this is an ESM .ts file
const { categoryMeta } = await import('./theme2/utils/categoryMeta.ts')
```

Note: If the dynamic import fails (TS not supported in Node context), fall back to reading the file and extracting the object. The safer approach is to create a shared JSON file:

Create `web/.vuepress/category-meta.json`:
```json
{
  "artemis": { "zh": "Artemis", "en": "Artemis", "color": "#6366f1" },
  "spacex": { "zh": "SpaceX", "en": "SpaceX", "color": "#0ea5e9" },
  "china": { "zh": "中国航天", "en": "China Space", "color": "#dc2626" },
  "nasa": { "zh": "NASA", "en": "NASA", "color": "#2563eb" },
  "esa": { "zh": "ESA", "en": "ESA", "color": "#0891b2" },
  "iss": { "zh": "空间站", "en": "Space Station", "color": "#7c3aed" },
  "launch": { "zh": "发射", "en": "Launches", "color": "#ea580c" },
  "commercial": { "zh": "商业航天", "en": "Commercial Space", "color": "#059669" },
  "science": { "zh": "科学发现", "en": "Science", "color": "#8b5cf6" },
  "policy": { "zh": "政策战略", "en": "Policy & Strategy", "color": "#ca8a04" },
  "blue-origin": { "zh": "Blue Origin", "en": "Blue Origin", "color": "#4338ca" },
  "commercial-space": { "zh": "商业航天", "en": "Commercial Space", "color": "#059669" }
}
```

Update `gen-sidebar.js` to import from JSON:
```javascript
import categoryMeta from './category-meta.json' assert { type: 'json' }
```

Update `categoryMeta.ts` to import from JSON:
```typescript
import meta from '../../category-meta.json'
export const categoryMeta: Record<string, { zh: string; en: string; color: string }> = meta
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/category-meta.json web/.vuepress/gen-sidebar.js web/.vuepress/theme2/utils/categoryMeta.ts
git commit -m "refactor: deduplicate categoryMeta to single JSON source"
```

---

## Task 9: M2 — SpaceNewsArchive type safety

**Files:**
- Modify: `web/.vuepress/theme2/components/SpaceNewsArchive.vue:103-108`

- [ ] **Step 1: Remove redundant Array.isArray check**

The `gen-sidebar.js` already normalizes `category` to `string[] | null`. The defensive `Array.isArray` check is redundant. Replace lines 103-108:

```typescript
const articles = computed<ArticleItem[]>(() => {
  const list = isEn.value ? data.en : data.zh
  return [...list]
    .map(a => ({
      ...a,
      category: Array.isArray(a.category) ? a.category : a.category ? [a.category] : null,
    }))
```

with:
```typescript
const articles = computed<ArticleItem[]>(() => {
  const list = isEn.value ? data.en : data.zh
  return [...list]
    .map(a => ({ ...a }))
```

Note: The `category` field is already `string[] | null` from the generated JSON. The redundant check was defensive coding that's no longer needed.

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/components/SpaceNewsArchive.vue
git commit -m "fix: remove redundant category normalization in SpaceNewsArchive"
```

---

## Task 10: M3 — SSR-unsafe window access in client.ts

**Files:**
- Modify: `web/.vuepress/theme2/client.ts:220`

- [ ] **Step 1: Add window guard to localStorage.setItem**

Replace line 220:
```typescript
try { localStorage.setItem('cislunar-lang-chosen', toEn ? 'en' : 'zh') } catch {}
```

with:
```typescript
if (typeof window !== 'undefined') {
  try { localStorage.setItem('cislunar-lang-chosen', toEn ? 'en' : 'zh') } catch {}
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/client.ts
git commit -m "fix: add SSR guard for localStorage in client.ts route watcher"
```

---

## Task 10: M4 — escapeAttr() missing single quote

**Files:**
- Modify: `web/.vuepress/config.ts:24-31`

- [ ] **Step 1: Add single quote escaping**

Replace the escapeAttr function:
```typescript
function escapeAttr(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '&#10;')
}
```

with:
```typescript
function escapeAttr(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '&#10;')
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/config.ts
git commit -m "fix: add single quote escaping in escapeAttr"
```

---

## Task 11: M5 — Generated files missing error handling

**Files:**
- Modify: `web/.vuepress/sidebar.ts:2`
- Modify: `web/.vuepress/theme2/components/SpaceNewsHome.vue:98`

- [ ] **Step 1: Add error handling in sidebar.ts**

Replace line 2:
```typescript
import autoSidebar from './sidebar.auto.json'
```

with:
```typescript
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const autoSidebarPath = path.resolve(__dirname, 'sidebar.auto.json')
if (!fs.existsSync(autoSidebarPath)) {
  throw new Error(`Missing ${autoSidebarPath}. Run "npm run gen-sidebar" first.`)
}
const autoSidebar = JSON.parse(fs.readFileSync(autoSidebarPath, 'utf-8'))
```

Wait — `sidebar.ts` is a VuePress config file that runs in Node, so `fs` is available. But it's imported as a module by VuePress. Let me check the actual pattern. The file uses `import autoSidebar from './sidebar.auto.json'` which is a static import. For VuePress config files, we can use a try-catch around dynamic import or just rely on the build order.

Actually, the simplest fix: add a prebuild check in `package.json` scripts. But that's a different approach. Let me keep it simple — add a comment and a runtime check:

```typescript
// NOTE: autoSidebar is generated by "npm run gen-sidebar". If this import fails, run that command first.
import autoSidebar from './sidebar.auto.json'
```

For SpaceNewsHome.vue, the import is static and can't easily be wrapped. Add a comment:
```typescript
// NOTE: Generated by "npm run gen-sidebar". Build will fail if file doesn't exist.
import articlesData from '../../space-news-articles.json'
```

- [ ] **Step 2: Add prebuild check to package.json scripts**

In `web/package.json`, update the `docs:dev` and `docs:build` scripts to run `gen-sidebar` first (they already do via the combined script). Verify the scripts already include `gen-sidebar` — if so, the comments are sufficient.

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/sidebar.ts web/.vuepress/theme2/components/SpaceNewsHome.vue
git commit -m "docs: add comments about generated file dependencies"
```

---

## Task 12: M7 — escapeHtml() DOM overhead

**Files:**
- Modify: `web/.vuepress/theme2/composables/useForum.ts:51-55`

- [ ] **Step 1: Replace DOM-based escapeHtml with pure string**

Replace:
```typescript
export function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.appendChild(document.createTextNode(text))
  return div.innerHTML
}
```

with:
```typescript
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/composables/useForum.ts
git commit -m "perf: replace DOM-based escapeHtml with pure string replacement"
```

---

## Task 13: M8 — AiChat mobile sidebar no Escape close

**Files:**
- Modify: `web/.vuepress/theme2/components/AiChat.vue`

- [ ] **Step 1: Add Escape key handler in mounted hook**

In the `mounted()` hook (line 575), add a keydown listener:

```typescript
async mounted() {
  this.updateSuggestedQuestions()
  await this.loadConfig()
  this.applyTheme()
  this._onEscape = (e) => {
    if (e.key === 'Escape' && this.sidebarOpen) {
      this.sidebarOpen = false
    }
  }
  window.addEventListener('keydown', this._onEscape)
},
```

- [ ] **Step 2: Add cleanup in beforeUnmount hook**

In the `beforeUnmount()` hook (line 591), add cleanup:

```typescript
beforeUnmount() {
  this.abortRequest()
  if (this._onEscape) {
    window.removeEventListener('keydown', this._onEscape)
    this._onEscape = null
  }
},
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/theme2/components/AiChat.vue
git commit -m "fix: add Escape key handler for AiChat mobile sidebar"
```

---

## Task 14: L2 — Delete dead nav-dropdown CSS in Layout.vue

**Files:**
- Modify: `web/.vuepress/theme2/layouts/Layout.vue:41-48`

- [ ] **Step 1: Remove dead CSS**

Delete lines 41-48:
```scss
/* ---- 导航栏下拉菜单 ---- */
.nav-dropdown {
  animation: dropdownIn 0.2s var(--ease-out-expo);
}

@keyframes dropdownIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/layouts/Layout.vue
git commit -m "chore: remove dead nav-dropdown CSS from Layout.vue"
```

---

## Task 15: L3 — Add frontmatter parser limitation comment

**Files:**
- Modify: `web/.vuepress/gen-sidebar.js` (near the `parseFrontmatter` function)

- [ ] **Step 1: Add limitation comment**

Find the `parseFrontmatter` function and add above it:
```javascript
/**
 * Lightweight frontmatter parser. Handles flat key-value pairs and simple lists only.
 * Does NOT support: nested objects, multi-line strings, YAML anchors, complex types.
 * If frontmatter becomes more complex, switch to a proper YAML parser (e.g., gray-matter).
 */
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/gen-sidebar.js
git commit -m "docs: add frontmatter parser limitation comment"
```

---

## Task 16: L4 — Fix footer.ts leading space and missing labelEn

**Files:**
- Modify: `web/.vuepress/footer.ts:20`

- [ ] **Step 1: Fix the label**

Replace line 20:
```typescript
{ label: ' Glossary', href: '/glossary/' },
```

with:
```typescript
{ label: '术语表', labelEn: 'Glossary', href: '/glossary/' },
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/footer.ts
git commit -m "fix: remove leading space and add labelEn for Glossary in footer"
```

---

## Task 17: L5 — ExtraSidebar.vue import extension

**Files:**
- Modify: `web/.vuepress/theme2/components/ExtraSidebar.vue:30`

- [ ] **Step 1: Change import extension**

Replace:
```typescript
import extraSideBarConfig from '../../extraSideBar.js'
```

with:
```typescript
import extraSideBarConfig from '../../extraSideBar.ts'
```

Wait — VuePress config imports may require `.js` extension. Check if this works. If the build fails, revert to `.js`. The VuePress build chain with Vite should handle `.ts` imports fine.

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/components/ExtraSidebar.vue
git commit -m "chore: use .ts extension for ExtraSidebar import"
```

---

## Task 18: L6 — Use crypto.randomUUID() in useForum

**Files:**
- Modify: `web/.vuepress/theme2/composables/useForum.ts:39-41`

- [ ] **Step 1: Replace generateId implementation**

Replace:
```typescript
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}
```

with:
```typescript
function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/composables/useForum.ts
git commit -m "fix: use crypto.randomUUID for forum ID generation"
```

---

## Task 19: L7 — Make currentYear reactive in Footer.vue

**Files:**
- Modify: `web/.vuepress/theme2/components/Footer.vue:68-79`

- [ ] **Step 1: Import computed and make currentYear reactive**

Add `computed` to the import:
```typescript
import { computed } from 'vue'
```

Wait — the file already imports from vue? Let me check. The script setup doesn't import `computed`. Add it:

Change line 69-70:
```typescript
import footerConfig from '../../footer'
import { useIsEn } from '../composables/useIsEn'
```

to:
```typescript
import { computed } from 'vue'
import footerConfig from '../../footer'
import { useIsEn } from '../composables/useIsEn'
```

Change line 79:
```typescript
const currentYear = String(new Date().getFullYear())
```

to:
```typescript
const currentYear = computed(() => String(new Date().getFullYear()))
```

- [ ] **Step 2: Update template to use .value**

The template already accesses `currentYear` directly — with `computed`, Vue auto-unwraps it in templates, so no template change needed.

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/theme2/components/Footer.vue
git commit -m "fix: make currentYear reactive in Footer.vue"
```

---

## Task 20: L8 — Add integrity hash to Cesium CDN

**Files:**
- Modify: `web/.vuepress/theme2/components/OrbitSimLab.vue:188-207`

- [ ] **Step 1: Add integrity and crossorigin to loadScript**

Update the `loadScript` function to support integrity:

Actually, the Cesium CDN URL is loaded via dynamic script creation. To add integrity, we need the SRI hash for Cesium 1.114. Since we can't easily compute this, add `crossorigin` attribute and document the limitation:

Replace the `loadScript` function:
```typescript
function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Script ${src}`))
    document.head.appendChild(s)
  })
}
```

with:
```typescript
function loadScript(src: string, integrity?: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    if (integrity) {
      s.integrity = integrity
      s.crossOrigin = 'anonymous'
    }
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Script ${src}`))
    document.head.appendChild(s)
  })
}
```

For now, don't pass integrity (we'd need to fetch the hash). Just add `crossOrigin` to the Cesium load call:

In `onMounted`, change:
```typescript
await loadScript(CESIUM_JS)
```
to stay as-is (no integrity hash available without fetching it). The `crossorigin` attribute alone doesn't help without integrity. Skip this change — document it as a future improvement.

- [ ] **Step 2: Commit (skip if no change)**

If no meaningful change, skip this task and mark as "no fix needed — would require fetching SRI hash from Cesium CDN".

---

## Task 21: L9 — Narrow tableEnhance observer fallback

**Files:**
- Modify: `web/.vuepress/theme2/composables/useTableEnhance.ts:223-224`

- [ ] **Step 1: Remove body fallback**

Replace:
```typescript
const target =
  document.querySelector('.vp-theme-container') || document.querySelector('main') || document.body
```

with:
```typescript
const target =
  document.querySelector('.vp-theme-container') || document.querySelector('main')
if (!target) return
```

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/theme2/composables/useTableEnhance.ts
git commit -m "perf: remove document.body fallback from tableEnhance observer"
```

---

## Task 22: L10 — Add logging to empty catch blocks

**Files:**
- Modify: `web/.vuepress/theme2/components/AiChat.vue` (lines 523, 533, 546, 603)
- Modify: `web/.vuepress/theme2/composables/useForum.ts` (lines 73, 84, 94, 102, 130)
- Modify: `web/.vuepress/theme2/components/SidebarToggle.vue` (line 67)

- [ ] **Step 1: Add console.warn to Forum catch blocks**

In `useForum.ts`, replace each `catch { /* ignore */ }` with `catch (e) { console.warn('[Forum]', e) }`. There are 5 occurrences at lines 73, 84, 94, 102, 130.

- [ ] **Step 2: Add console.warn to AiChat catch blocks**

In `AiChat.vue`, replace each `catch {}` with `catch (e) { console.warn('[AiChat]', e) }`. There are 4 occurrences.

- [ ] **Step 3: Add console.warn to SidebarToggle catch block**

In `SidebarToggle.vue`, replace `catch {}` with `catch (e) { console.warn('[SidebarToggle]', e) }`.

- [ ] **Step 4: Commit**

```bash
git add web/.vuepress/theme2/composables/useForum.ts web/.vuepress/theme2/components/AiChat.vue web/.vuepress/theme2/components/SidebarToggle.vue
git commit -m "fix: add console.warn to empty catch blocks for debuggability"
```

---

## Task 23: Build verification

- [ ] **Step 1: Run gen-sidebar**

```bash
cd web && npm run gen-sidebar
```

- [ ] **Step 2: Run full build**

```bash
cd web && npm run docs:build
```

Expected: Build completes without errors.

- [ ] **Step 3: Fix any build errors**

If the build fails, diagnose and fix. Common issues:
- `category-meta.json` import syntax (Task 8)
- `.ts` import extension (Task 17)
- Vite define syntax (Task 2)

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: resolve build issues from code audit fixes"
```

---

## Summary

| Task | Severity | Issue | Files Changed |
|------|----------|-------|---------------|
| 1 | CRITICAL | C1: Footer labels inverted | Footer.vue |
| 2 | CRITICAL | C2: Cesium token hardcoded | OrbitSimLab.vue, config.ts, .env.example |
| 3 | HIGH | H1: MutationObserver leak | SpaceNewsSidebar.vue |
| 4 | HIGH | H2: Keyboard shortcut conflict | OrbitSimLab.vue |
| 5 | HIGH | H3: v-html security comment | useForum.ts |
| 6 | HIGH | H4: M2E divergence | orbitSimMath.ts |
| 7 | HIGH | H5: useForum state isolation | useForum.ts |
| 8 | MEDIUM | M1: Duplicate categoryMeta | gen-sidebar.js, categoryMeta.ts, new JSON |
| 9 | MEDIUM | M2: SpaceNewsArchive type safety | SpaceNewsArchive.vue |
| 10 | MEDIUM | M3: SSR window access | client.ts |
| 10 | MEDIUM | M4: escapeAttr single quote | config.ts |
| 11 | MEDIUM | M5: Generated file comments | sidebar.ts, SpaceNewsHome.vue |
| 12 | MEDIUM | M7: escapeHtml DOM overhead | useForum.ts |
| 13 | MEDIUM | M8: AiChat Escape close | AiChat.vue |
| 14 | LOW | L2: Dead CSS | Layout.vue |
| 15 | LOW | L3: Parser comment | gen-sidebar.js |
| 16 | LOW | L4: Footer label space | footer.ts |
| 17 | LOW | L5: Import extension | ExtraSidebar.vue |
| 18 | LOW | L6: crypto.randomUUID | useForum.ts |
| 19 | LOW | L7: Reactive currentYear | Footer.vue |
| 20 | LOW | L8: Cesium SRI (skip) | — |
| 21 | LOW | L9: Observer fallback | useTableEnhance.ts |
| 22 | LOW | L10: Empty catch logging | useForum.ts, AiChat.vue, SidebarToggle.vue |
| 23 | — | Build verification | — |
