// web/.vuepress/build/ssr-render-cache.ts
// SSR 渲染缓存 — 跳过未变更页面的 renderToString，大幅加速增量构建。
//
// 工作原理:
//   1. Vite 插件在 SSR 编译期拦截 @vuepress/bundlerutils 模块
//   2. 替换 renderPageToString 为缓存包装版本
//   3. 对未变更页面 (content hash 相同) 直接返回缓存的 SSR 输出
//   4. build 结束后通过 process.on('beforeExit') 持久化到磁盘
//
// 预期效果:
//   - 冷构建: 无变化 (cache miss → 正常渲染 + 写入缓存)
//   - 热构建 (0 页变更): 从 ~221s 降到 ~5-10s
//   - 增量 (50 页变更): 从 ~221s 降到 ~15-25s

const CACHE_MAX_ENTRIES = 5000

/**
 * Create a Vite plugin that intercepts @vuepress/bundlerutils during SSR
 * compilation and replaces renderPageToString with a cache-aware version.
 *
 * Cache is persisted to web/.vuepress/.cache/render-cache.json via
 * process exit handlers embedded in the generated module code.
 */
export function createSsrRenderCachePlugin(): {
  name: string
  enforce: string
  load(id: string): string | null
} {
  return {
    name: 'vuepress:ssr-render-cache',
    enforce: 'pre',

    load(id: string): string | null {
      // Only intercept the bundlerutils module during SSR build.
      // Vite resolves bare specifiers to absolute paths in node_modules.
      if (
        !id.includes('@vuepress/bundlerutils') ||
        !id.includes('dist/index')
      ) {
        return null
      }

      // Resolve absolute path to webDir at plugin creation time (not at
      // runtime) so the generated code has a hardcoded correct path.
      const webDir = new URL('../../', import.meta.url).pathname
        .replace(/^\/([A-Z]:)/, '$1') // Windows: /D:/ → D:/

      // Return modified module: renderPageToString → cached wrapper.
      // createVueServerApp and getSsrTemplate are re-exported unchanged
      // from the original module via top-level await import().
      return `
// Patched by vuepress:ssr-render-cache — cache-aware renderPageToString
import { renderToString } from 'vue/server-renderer';
import { ssrContextKey } from 'vue';
import { createHash } from 'node:crypto';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// ── Original createVueServerApp and getSsrTemplate ──
const _orig = await import('@vuepress/bundlerutils');

// ── Load cache from disk ──
const CACHE_DIR = path.join(${JSON.stringify(webDir)}, '.vuepress', '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'render-cache.json');
let _cache = { version: 1, entries: {} };
let _stats = { hits: 0, misses: 0 };
try {
  const raw = readFileSync(CACHE_FILE, 'utf-8');
  const parsed = JSON.parse(raw);
  if (parsed.version === 1 && parsed.entries) _cache = parsed;
} catch {}

// ── Cached renderPageToString ──
async function cachedRenderPageToString({ page, vueApp, vueRouter }) {
  // Always navigate (needed for router state, cheap ~1ms)
  await vueRouter.push(page.path);
  await vueRouter.isReady();
  delete vueApp._context.provides[ssrContextKey];

  // Compute content hash from page identity + content
  const fm = JSON.stringify(page.frontmatter || {});
  const hash = createHash('md5')
    .update((page.filePath || page.path) + (page.content || '') + fm)
    .digest('hex');

  // Cache hit → skip expensive renderToString (~100-200ms)
  const cached = _cache.entries[page.path];
  if (cached && cached.hash === hash) {
    _stats.hits++;
    return {
      ssrContext: { lang: 'en', url: page.path, head: cached.head },
      ssrString: cached.ssrString,
    };
  }

  // Cache miss → render normally + store result
  _stats.misses++;
  const ssrContext = { lang: 'en', url: page.path };
  vueApp.provide(ssrContextKey, ssrContext);
  const ssrString = await renderToString(vueApp, ssrContext);
  _cache.entries[page.path] = {
    hash,
    ssrString,
    head: ssrContext.head || [],
  };
  return { ssrContext, ssrString };
}

// ── Exports (original functions re-exported, renderPageToString replaced) ──
export const createVueServerApp = _orig.createVueServerApp;
export const getSsrTemplate = _orig.getSsrTemplate;
export { cachedRenderPageToString as renderPageToString };

// ── Persist cache on process exit ──
function _saveCache() {
  if (_stats.hits + _stats.misses === 0) return;
  try {
    // Prune stale entries (keep ${CACHE_MAX_ENTRIES} most recent)
    const keys = Object.keys(_cache.entries);
    if (keys.length > ${CACHE_MAX_ENTRIES}) {
      for (let i = 0; i < keys.length - ${CACHE_MAX_ENTRIES}; i++) {
        delete _cache.entries[keys[i]];
      }
    }
    mkdirSync(CACHE_DIR, { recursive: true });
    writeFileSync(CACHE_FILE, JSON.stringify(_cache));
    console.log('[ssr-render-cache] saved ' + Object.keys(_cache.entries).length + ' entries (hits=' + _stats.hits + ', misses=' + _stats.misses + ')');
  } catch {}
}
process.on('beforeExit', _saveCache);
process.on('SIGINT', () => { _saveCache(); process.exit(0); });
process.on('SIGTERM', () => { _saveCache(); process.exit(0); });
`
    },
  }
}
