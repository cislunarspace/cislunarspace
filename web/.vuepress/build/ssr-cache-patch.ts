// web/.vuepress/build/ssr-cache-patch.ts
//
// 让 SSR 渲染吃满多核 + 增量缓存的唯一切入点。构建前在磁盘上 patch 两个
// node_modules 文件，构建后还原（含异常/信号）。
//
// 心法：为什么要 patch、为什么是这个形态
// ─────────────────────────────────────────
// VuePress 的渲染循环（bundler-vite/dist/index.js）是串行 for 循环：
//     for (page of app.pages) await renderPage(...)
// 一次一页，一个 Node 进程一个 JS 线程 → 只用 1 个核。本机 48 线程全闲。
//
// 要用多核必须并行化渲染。多进程（旧 sharded-build）能用核，但引入路由表
// 合并、app.js 重写、缓存互冲等脆弱活。这里走**进程内 worker 线程池**：
// 一个进程、一次构建、无合并。两层 patch：
//
// 1. bundlerutils：renderPageToString 改成"查缓存 → 未命中派发给 worker 池"。
//    worker 各自 import server bundle、建独立 Vue app（独立核）。
// 2. bundler-vite：把串行 for 循环换成并发限流（并发数 = worker 数），
//    这样多个 renderPage 同时在飞、喂满 worker 池。
//
// 缓存（增量构建用）：每页 md5(serverBundleName + filePath + content + frontmatter)。
// server bundle 文件名（含内容 hash）作 buildKey，主题/配置一改 → bundle 重打 →
// 文件名变 → 全量失效，避免脏缓存。只改个别 md → 只那几页重算。

import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webDir = path.resolve(__dirname, '..', '..');

const target = {
  bu: path.join(webDir, 'node_modules/@vuepress/bundlerutils/dist/index.js'),
  bv: path.join(webDir, 'node_modules/@vuepress/bundler-vite/dist/index.js'),
};
const backup = { bu: target.bu + '.orig', bv: target.bv + '.orig' };
const workerFile = path.join(webDir, '.vuepress/.cache/render-worker.mjs');

// ─── worker 模块源码（每个 worker 独立 Vue app，自包含、不引用 patched 模块） ───
function workerSource(): string {
  return `// 由 ssr-cache-patch.ts 生成。每个 worker 一个独立 Vue app = 一个核。
import { importFile } from "@vuepress/utils";
import { renderToString } from "vue/server-renderer";
import { ssrContextKey } from "vue";
import { parentPort } from "node:worker_threads";

let app, router;

parentPort.on("message", async (msg) => {
  try {
    if (msg.type === "init") {
      const mod = await importFile(msg.serverAppPath);
      const r = await mod.createVueApp();
      app = r.app;
      router = r.router;
      parentPort.postMessage({ type: "ready" });
    } else if (msg.type === "render") {
      await router.push(msg.path);
      await router.isReady();
      delete app._context.provides[ssrContextKey];
      const ssrContext = { lang: "en", head: [] };
      app.provide(ssrContextKey, ssrContext);
      const ssrString = await renderToString(app, ssrContext);
      parentPort.postMessage({ type: "rendered", id: msg.id, ssrString: ssrString, head: ssrContext.head || [] });
    }
  } catch (e) {
    parentPort.postMessage({ type: "error", id: msg.id, message: (e && e.message) || String(e), stack: e && e.stack });
  }
});
`;
}

// ─── patched bundlerutils：worker 池 + 缓存 ───
function bundlerutilsSource(): string {
  const webDirLit = JSON.stringify(webDir);
  const workerLit = JSON.stringify(workerFile);
  return `// Patched by ssr-cache-patch.ts — 构建结束后自动还原原文件。
import { fs, importFile, importFileDefault } from "@vuepress/utils";
import { ssrContextKey } from "vue";
import { Worker } from "node:worker_threads";
import { createHash } from "node:crypto";
import { readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const CACHE_DIR = path.join(${webDirLit}, ".vuepress", ".cache", "render");
const BUILDKEY_FILE = path.join(${webDirLit}, ".vuepress", ".cache", "render-buildkey");
const WORKER_FILE = ${workerLit};
const POOL_SIZE = (Number(process.env.SSR_WORKERS) > 0)
  ? Number(process.env.SSR_WORKERS)
  : Math.max(2, Math.min(16, (os.availableParallelism ? os.availableParallelism() : (os.cpus().length || 4))));

// ── 缓存状态（每页一文件，内存里只留当前页）──
let _buildKey = null;
const _stats = { hits: 0, misses: 0 };

function _cacheFileFor(pagePath) {
  const h = createHash("md5").update(pagePath).digest("hex");
  return path.join(CACHE_DIR, h.slice(0, 2), h + ".json"); // 按 md5 前两位分桶 → 256 子目录
}

// 首次渲染前校验 envHash：构建环境变了（主题/配置/生成 JSON 改动）就清空整片缓存。
// envHash 由 build-cached.ts 从 .vuepress/ 源文件内容算得，确定性；不能用 server
// bundle 文件名——Rolldown 那个非确定性。
function _checkBuildKey() {
  let prev = "";
  try { prev = readFileSync(BUILDKEY_FILE, "utf-8"); } catch (e) {}
  if (prev && prev !== _buildKey) {
    try { rmSync(CACHE_DIR, { recursive: true, force: true }); } catch (e) {}
    process.stderr.write("[ssr-render-cache] env 变更，清空缓存\\n");
  }
  try {
    mkdirSync(path.dirname(BUILDKEY_FILE), { recursive: true });
    writeFileSync(BUILDKEY_FILE, _buildKey);
  } catch (e) {}
}

// ── worker 池 ──
const _workers = [];
const _free = [];        // 空闲 worker 下标
const _pending = new Map(); // id -> { resolve, reject }
const _queue = [];       // { id, path, resolve, reject }
let _nextId = 1;
let _readyCount = 0;
let _readyResolver = null;

function _onWorkerMessage(workerIdx, msg) {
  if (msg.type === "ready") {
    _readyCount++;
    _free.push(workerIdx);
    if (_readyCount === POOL_SIZE && _readyResolver) _readyResolver();
    _pump();
    return;
  }
  if (msg.type === "rendered" || msg.type === "error") {
    const req = _pending.get(msg.id);
    if (req) {
      _pending.delete(msg.id);
      _free.push(workerIdx);
      if (msg.type === "error") req.reject(new Error(msg.message));
      else req.resolve({ ssrString: msg.ssrString, head: msg.head || [] });
    }
    _pump();
  }
}

function _pump() {
  while (_queue.length && _free.length) {
    const req = _queue.shift();
    const idx = _free.shift();
    _pending.set(req.id, req);
    _workers[idx].postMessage({ type: "render", id: req.id, path: req.path });
  }
}

function _dispatch(path) {
  return new Promise((resolve, reject) => {
    _queue.push({ id: _nextId++, path: path, resolve: resolve, reject: reject });
    _pump();
  });
}

function _initPool(serverAppPath) {
  if (_readyResolver) return Promise.resolve();
  const p = new Promise((res) => { _readyResolver = res; });
  for (let i = 0; i < POOL_SIZE; i++) {
    const w = new Worker(WORKER_FILE);
    const idx = i;
    w.on("message", (m) => _onWorkerMessage(idx, m));
    w.on("error", (e) => console.error("[ssr-worker] worker " + idx + " error:", e));
    w.on("exit", (code) => {
      if (code !== 0) console.error("[ssr-worker] worker " + idx + " exited code=" + code);
    });
    _workers.push(w);
    w.postMessage({ type: "init", serverAppPath: serverAppPath });
  }
  return p;
}

// 渲染结束后由 patched bundler-vite 调用：终止 worker，否则它们会阻止进程退出。
function _terminatePool() {
  for (const w of _workers) { try { w.terminate(); } catch (e) {} }
  _workers.length = 0;
}
globalThis.__ssrTerminatePool = _terminatePool;

const createVueServerApp = async (serverAppPath) => {
  if (_buildKey === null) {
    _buildKey = process.env.SSR_ENV_HASH || path.basename(serverAppPath);
    _checkBuildKey();
  }
  await _initPool(serverAppPath);
  // 主线程 app 也建一份，bundler-vite 的 renderPage 形参还要它（虽然渲染走 worker）。
  const { createVueApp } = await (serverAppPath.endsWith(".cjs") ? importFileDefault : importFile)(serverAppPath);
  const { app, router } = await createVueApp();
  return { vueApp: app, vueRouter: router };
};

const getSsrTemplate = async (app) => fs.readFile(app.options.templateBuild, { encoding: "utf8" });

const renderPageToString = async ({ page, vueApp, vueRouter, ssrContextInit }) => {
  const fm = JSON.stringify(page.frontmatter || {});
  const hash = createHash("md5")
    .update(_buildKey + "|" + (page.filePath || page.path) + (page.content || "") + fm)
    .digest("hex");
  const file = _cacheFileFor(page.path);
  try {
    const cached = JSON.parse(readFileSync(file, "utf-8"));
    if (cached && cached.hash === hash) {
      _stats.hits++;
      return {
        ssrContext: { lang: "en", head: cached.head, ...(ssrContextInit || {}) },
        ssrString: cached.ssrString,
      };
    }
  } catch (e) {} // ENOENT 或解析失败 → 当 miss
  _stats.misses++;
  const r = await _dispatch(page.path);
  try {
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify({ hash: hash, ssrString: r.ssrString, head: r.head }));
  } catch (e) {
    process.stderr.write("[ssr-render-cache] write fail " + page.path + ": " + (e && e.message) + "\\n");
  }
  return { ssrContext: { lang: "en", head: r.head, ...(ssrContextInit || {}) }, ssrString: r.ssrString };
};

export { createVueServerApp, getSsrTemplate, renderPageToString };

// 仅打印统计；缓存条目是随渲染逐页落盘的，无需 save-on-exit。
process.on("exit", () => {
  process.stderr.write("[ssr-render-cache] hits=" + _stats.hits + " misses=" + _stats.misses + "\\n");
});
`;
}

// ─── patched bundler-vite：把串行 for 循环换成并发限流 ───
// 策略：定位 "\t\tfor (const page of app.pages) {" 锚点，找同级闭合 "\t\t}"，整段替换。
function patchBundlerViteSource(src: string): string {
  const anchor = '\t\tfor (const page of app.pages) {';
  const start = src.indexOf(anchor);
  if (start === -1) {
    throw new Error('[ssr-cache-patch] bundler-vite 中找不到渲染循环锚点（版本不兼容？）');
  }
  const close = src.indexOf('\n\t\t}', start);
  if (close === -1) {
    throw new Error('[ssr-cache-patch] bundler-vite 中找不到渲染循环闭合括号');
  }
  const end = close + '\n\t\t}'.length;
  const before = src.slice(0, start);
  const after = src.slice(end);
  // 注意：生成的 JS 里用了模板字面量，\${ 转义避免被本文件的 TS 模板插值。
  const concurrent = [
    '\t\tconst __ssrN = Number(process.env.SSR_WORKERS) || 8;',
    '\t\tconst __ssrQueue = [...app.pages];',
    '\t\tawait Promise.all(Array.from({ length: __ssrN }, async () => {',
    '\t\t\twhile (__ssrQueue.length) {',
    '\t\t\t\tconst page = __ssrQueue.shift();',
    '\t\t\t\tif (page === undefined) break;',
    '\t\t\t\tif (spinner) spinner.text = `Rendering pages ${colors.magenta(page.path)}`;',
    '\t\t\t\tawait renderPage({',
    '\t\t\t\t\tapp,',
    '\t\t\t\t\tpage,',
    '\t\t\t\t\tvueApp,',
    '\t\t\t\t\tvueRouter,',
    '\t\t\t\t\tssrTemplate,',
    '\t\t\t\t\toutput: clientOutput.output,',
    '\t\t\t\t\toutputEntryChunk: clientEntryChunk,',
    '\t\t\t\t\toutputCssAsset: clientCssAsset',
    '\t\t\t\t});',
    '\t\t\t}',
    '\t\t}));',
    '\t\tif (globalThis.__ssrTerminatePool) globalThis.__ssrTerminatePool();',
  ].join('\n');
  return before + concurrent + after;
}

export function installPatch(): void {
  if (existsSync(backup.bu) || existsSync(backup.bv)) {
    throw new Error(
      `[ssr-cache-patch] 已是 patched 状态（${backup.bu} 或 ${backup.bv} 存在）。先 restore 再重试。`,
    );
  }
  // 先生成所有补丁内容（任何失败都在此之前抛出，不污染 node_modules）
  const buSrc = bundlerutilsSource();
  const bvSrc = patchBundlerViteSource(readFileSync(target.bv, 'utf8'));
  const wSrc = workerSource();

  copyFileSync(target.bu, backup.bu);
  copyFileSync(target.bv, backup.bv);
  mkdirSync(path.dirname(workerFile), { recursive: true });
  writeFileSync(workerFile, wSrc);
  writeFileSync(target.bu, buSrc);
  writeFileSync(target.bv, bvSrc);
  process.stderr.write(
    `[ssr-cache-patch] patched bundlerutils + bundler-vite (pool=${process.env.SSR_WORKERS || 'auto'})\n`,
  );
}

export function restorePatch(): void {
  // 幂等：只还原存在 backup 的那个
  for (const k of ['bu', 'bv'] as const) {
    if (existsSync(backup[k])) {
      copyFileSync(backup[k], target[k]);
      rmSync(backup[k]);
      process.stderr.write(`[ssr-cache-patch] restored ${path.basename(target[k])}\n`);
    }
  }
}

/** 在 patch 保护下执行 fn：执行前 install，结束后（含异常/信号）restore。 */
export function withPatch<T>(fn: () => T): T {
  installPatch();
  const onSignal = (): void => {
    restorePatch();
    process.exit(130);
  };
  process.on('SIGINT', onSignal);
  process.on('SIGTERM', onSignal);
  try {
    return fn();
  } finally {
    restorePatch();
    process.off('SIGINT', onSignal);
    process.off('SIGTERM', onSignal);
  }
}
