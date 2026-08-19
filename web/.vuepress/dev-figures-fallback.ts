import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, '..');

/**
 * 图片单一来源（ADR-0004）：en 侧 space-news 不保留与 zh 字节相同的
 * figures 物理副本。en md 的图片引用统一为站点绝对路径
 * （/space-news/YYYY/MM/figures/...，不进 vite 资产 import 管线），
 * dist 的原始路径文件由 sync-figures 双拷提供。dev server 直接 serve
 * 源目录，因此把「en 侧不存在的 figures 请求」改写到 zh 侧同名文件；
 * en 侧确实存在的差异文件（-en 后缀目录等）优先。
 */
export function devEnFiguresFallback(): Plugin {
  return {
    name: 'cislunar-dev-en-figures-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const raw = (req.url ?? '').split('?')[0];
        const m = raw.match(/^\/en\/(space-news\/.+\/figures\/.+)$/);
        if (m) {
          const rel = decodeURIComponent(m[1]);
          const zhAbs = path.resolve(webRoot, rel);
          const enAbs = path.join(webRoot, 'en', rel);
          if (
            zhAbs.startsWith(webRoot + path.sep) &&
            !fs.existsSync(enAbs) &&
            fs.existsSync(zhAbs)
          ) {
            req.url = '/' + rel;
          }
        }
        next();
      });
    },
  };
}
