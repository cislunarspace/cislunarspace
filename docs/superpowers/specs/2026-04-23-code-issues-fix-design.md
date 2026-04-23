# Code Issues Fix Design

Date: 2026-04-23
Scope: Fix 24 code issues found during codebase audit (M6 AiChat.vue refactor deferred)

## Strategy

Fix by severity: CRITICAL → HIGH → MEDIUM → LOW. M6 (AiChat.vue 2300-line refactor) deferred to separate work.

## CRITICAL (2 fixes)

### C1. Footer language labels inverted
- **File:** `web/.vuepress/theme2/components/Footer.vue:28`
- **Bug:** `link.labelEn && !isEn ? link.labelEn : link.label` shows English in Chinese mode and vice versa
- **Fix:** `isEn && link.labelEn ? link.labelEn : link.label`

### C2. Hardcoded Cesium Ion API token
- **File:** `web/.vuepress/theme2/components/OrbitSimLab.vue:36-37`
- **Risk:** Token exposed in built JS bundle, anyone can exhaust account quota
- **Fix:** Move token to env var `VITE_CESIUM_ION_TOKEN`, inject via Vite `define` in config.ts (same pattern as DEEPSEEK_API_KEY). Add fallback empty string.

## HIGH (5 fixes)

### H1. MutationObserver memory leak
- **File:** `web/.vuepress/theme2/components/SpaceNewsSidebar.vue:211-214`
- **Bug:** Observer created in `onMounted` but never disconnected; leaks on every route navigation
- **Fix:** Store observer in ref, call `observer.disconnect()` in `onBeforeUnmount()`

### H2. Keyboard shortcuts conflict with textarea
- **File:** `web/.vuepress/theme2/components/OrbitSimLab.vue:353-354`
- **Fix:** Add `HTMLTextAreaElement` and `isContentEditable` checks to `onKeydown` guard

### H3. v-html security concern
- **File:** `web/.vuepress/theme2/components/Forum.vue:237,276`
- **Fix:** Add `// SECURITY: escapeHtml must be applied before v-html rendering` comment above `renderContent()`. Current implementation is safe but fragile.

### H4. M2E() Newton iteration divergence
- **File:** `web/.vuepress/theme2/utils/orbitSimMath.ts:86-94`
- **Fix:** Clamp `e` to max 0.95 at function entry. Add divergence detection: if `|d|` increases, break and return best estimate.

### H5. useForum() state isolation
- **File:** `web/.vuepress/theme2/composables/useForum.ts:57`
- **Fix:** Move `currentUser`, `posts`, `users` refs to module scope (outside function). Function returns refs from module scope.

## MEDIUM (7 fixes, M6 deferred)

### M1. Duplicate categoryMeta
- **Files:** `gen-sidebar.js:10-23`, `theme2/utils/categoryMeta.ts`
- **Fix:** Import from `categoryMeta.ts` in gen-sidebar.js. Since gen-sidebar.js runs in Node, use dynamic import or extract shared JSON.

### M2. SpaceNewsArchive type safety
- **File:** `web/.vuepress/theme2/components/SpaceNewsArchive.vue:103-115`
- **Fix:** Remove redundant `Array.isArray` check, fix `activeFilter.value!` to use nullish coalescing

### M3. SSR-unsafe window access
- **File:** `web/.vuepress/theme2/client.ts:215`
- **Fix:** Wrap `localStorage.setItem` in `typeof window !== 'undefined'` guard

### M4. escapeAttr() missing single quote
- **File:** `web/.vuepress/config.ts:24-31`
- **Fix:** Add `.replace(/'/g, '&#39;')` to chain

### M5. Generated files no error on missing
- **Files:** `sidebar.ts:2`, `SpaceNewsHome.vue:98`
- **Fix:** Add try-catch with descriptive error message suggesting `npm run gen-sidebar`

### M7. escapeHtml() DOM overhead
- **File:** `web/.vuepress/theme2/composables/useForum.ts:51-55`
- **Fix:** Replace with pure string: `text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')`

### M8. AiChat mobile sidebar no Escape close
- **File:** `web/.vuepress/theme2/components/AiChat.vue`
- **Fix:** Add `keydown` listener for Escape key to close sidebar overlay

## LOW (10 fixes)

| # | Fix |
|---|-----|
| L1 | Keep `.js` imports (VuePress build chain requirement) |
| L2 | Delete dead `.nav-dropdown` CSS in Layout.vue |
| L3 | Add comment about frontmatter parser limitations in gen-sidebar.js |
| L4 | Fix leading space in footer.ts label, add missing `labelEn` |
| L5 | Change ExtraSidebar.vue import to `.ts` extension |
| L6 | Use `crypto.randomUUID()` in useForum generateId() |
| L7 | Make `currentYear` a `computed` in Footer.vue |
| L8 | Add `integrity` and `crossorigin` to Cesium CDN script tag |
| L9 | Narrow tableEnhance observer fallback selector |
| L10 | Add `console.warn` or explanatory comments to empty catch blocks |

## Excluded

- **M6 (AiChat.vue refactor):** 2300-line Options API component needs full decomposition into composables. Deferred to separate planning cycle.

## Verification

After all fixes:
1. `npm run docs:build` must pass
2. Manual check: Footer shows correct language labels
3. Manual check: OrbitSimLab loads without token error
4. Manual check: SpaceNewsSidebar works after route navigation (no observer leak)
