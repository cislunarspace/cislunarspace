// web/.vuepress/build/build-cached.ts
//
// `npm run build` 的入口：在 SSR 缓存 patch 保护下跑 vuepress build。
// patch 在构建前安装、构建后还原（含异常和 Ctrl+C）。见 ssr-cache-patch.ts。

import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { withPatch } from './ssr-cache-patch.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webDir = path.resolve(__dirname, '..', '..');

// 两层 patch（worker 池 + 并发循环）都读这个值，保持 worker 数与循环并发数一致。
// 默认取 min(16, 核数)：每个 worker 一个独立 Vue app（~数百 MB 内存），16 个上限
// 是内存与吞吐的折中；机器核心多时可设 SSR_WORKERS=24/32 进一步提速。
if (!process.env.SSR_WORKERS) {
  const cpus = (os.availableParallelism?.() as number | undefined) ?? os.cpus().length;
  process.env.SSR_WORKERS = String(Math.max(2, Math.min(16, cpus || 4)));
}

// 计算"构建环境"哈希：.vuepress/ 下所有源文件（config/theme/生成的 JSON）内容。
// Rolldown 的 server bundle 文件名非确定性，不能直接当缓存 key；源文件内容是稳定
// 的——零改动两次构建 envHash 相同 → 缓存命中；改主题/配置 → envHash 变 → 清缓存。
// 每个 SSR 页面都渲染全局布局（侧边栏等），所以任一源文件变都应使全量失效。
// 排除 build/：那是纯构建工具（patch/sync/verify），不影响页面渲染输出，纳入会
// 让"改构建脚本"误清缓存（且让调试插桩自废）。
function computeEnvHash(): string {
  const vuepressDir = path.join(webDir, '.vuepress');
  const exclude = new Set(['.cache', '.temp', 'dist', '.shard', 'node_modules', 'build']);
  const exts = new Set(['.ts', '.js', '.mjs', '.vue', '.scss', '.css', '.json']);
  const h = createHash('md5');
  const walk = (dir: string): void => {
    let entries: string[] = [];
    try {
      entries = readdirSync(dir);
    } catch {
      return;
    }
    for (const name of entries) {
      if (exclude.has(name)) continue;
      const full = path.join(dir, name);
      let st;
      try {
        st = statSync(full);
      } catch {
        continue;
      }
      if (st.isDirectory()) {
        walk(full);
      } else if (exts.has(path.extname(name))) {
        h.update(full.slice(vuepressDir.length));
        try {
          h.update(readFileSync(full));
        } catch {
          h.update('unreadable');
        }
      }
    }
  };
  walk(vuepressDir);
  return h.digest('hex');
}

process.env.SSR_ENV_HASH = computeEnvHash();

const code = withPatch(() => {
  const cli = path.join(webDir, 'node_modules/vuepress/bin/vuepress.js');
  // 单进程要同时在内存里持有 4000+ 页的数据，给足堆避免 GC 拖慢渲染。
  const res = spawnSync(process.execPath, ['--max-old-space-size=32768', cli, 'build', '.'], {
    cwd: webDir,
    stdio: 'inherit',
  });
  return res.status ?? 1;
});

process.exit(code);
