/**
 * 整站预览模块
 *
 * 预览依赖 web/ 下的 VuePress dev server（npm run dev，默认 8080 端口）。
 * 本模块负责：探测 dev server 是否在跑、一键拉起、md 路径 → 站点路由映射。
 * dev server 作为 admin 的子进程运行，admin 退出时随之结束。
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { WEB_ROOT, LOG_DIR, PathError } from './paths.js';
import { readMd } from './scan.js';

/** 预览站点地址：默认本地 8080，可用环境变量指向外部已运行的实例 */
const SITE_URL = (process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:8080').replace(/\/+$/, '');
const LOG_FILE = path.join(LOG_DIR, 'site-preview.log');
const START_TIMEOUT_MS = 180_000;

let child = null;
let starting = null; // Promise | null，保证重复调用幂等

async function ping() {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch(SITE_URL, { signal: ctrl.signal });
    clearTimeout(timer);
    return res.ok || res.status === 404; // 服务起来即算就绪，404 也是 VuePress 的响应
  } catch {
    return false;
  }
}

/** 探测 dev server 是否在运行 */
export async function status() {
  return { running: await ping(), url: SITE_URL, starting: !!starting };
}

/**
 * 启动 dev server 并等待就绪（幂等：已在跑或正在启动直接复用）。
 * 失败时抛出带日志尾部的错误，便于前端展示排查。
 */
export async function start() {
  if (await ping()) return { url: SITE_URL, already: true };
  if (starting) return starting;

  starting = (async () => {
    fs.mkdirSync(LOG_DIR, { recursive: true });
    const out = fs.openSync(LOG_FILE, 'a');
    child = spawn('npm', ['run', 'dev'], {
      cwd: WEB_ROOT,
      stdio: ['ignore', out, out],
      // 不 detach：作为 admin 的子进程，admin 退出时一起结束
    });
    child.on('error', () => {});
    process.once('exit', () => {
      try { child?.kill(); } catch { /* 退出清理，忽略 */ }
    });

    const deadline = Date.now() + START_TIMEOUT_MS;
    while (Date.now() < deadline) {
      await new Promise((r) => setTimeout(r, 2000));
      if (await ping()) return { url: SITE_URL, already: false };
      if (child.exitCode !== null) break; // 进程已死，不必再等
    }
    throw new PathError(
      `站点预览服务启动超时或失败。最近日志：\n${logTail()}`
    );
  })();

  try {
    return await starting;
  } finally {
    starting = null;
  }
}

function logTail(lines = 20) {
  try {
    const content = fs.readFileSync(LOG_FILE, 'utf8');
    return content.trim().split('\n').slice(-lines).join('\n');
  } catch {
    return '(日志不可用)';
  }
}

/**
 * md 相对路径 → 站点路由。
 * 页面 frontmatter 里带目录式 permalink（news/glossary 均有），优先用；
 * 否则退化为「去 .md + 尾部 /」的目录式路由（与 dist 产物形状一致）。
 */
export function pathToRoute(relPath) {
  const rel = String(relPath).replace(/\\/g, '/').replace(/^\/+/, '');
  const info = readMd(rel);
  const permalink = info?.fm?.permalink;
  if (typeof permalink === 'string' && permalink.startsWith('/')) return permalink;
  return '/' + rel.replace(/\.md$/, '') + '/';
}
