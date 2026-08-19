import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { walkDir, DEFAULT_EXCLUDED } from '../utils/markdown-walker.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.join(__dirname, '..', '..');
const distDir = path.join(webDir, '.vuepress', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist/ directory not found. Run vuepress build first.');
  process.exit(1);
}

function syncFigures(sourceBase, destBase) {
  if (!fs.existsSync(sourceBase)) return { count: 0, errors: 0 };
  let count = 0;
  let errors = 0;

  function copyRecursive(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const e of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, e.name);
      const t = path.join(dest, e.name);
      if (e.isDirectory()) {
        copyRecursive(s, t);
      } else {
        try {
          fs.copyFileSync(s, t);
          count++;
        } catch (err) {
          console.warn(`  Failed to copy ${s}: ${err.message}`);
          errors++;
        }
      }
    }
  }

  walkDir(sourceBase, {
    excludedDirs: DEFAULT_EXCLUDED,
    onEnterDir: (abs, rel) => {
      if (path.basename(abs) === 'figures') {
        const dest = path.join(destBase, rel);
        copyRecursive(abs, dest);
        return false; // skip recursing into figures — already copied
      }
      return true;
    },
  });

  return { count, errors };
}

// 图片单一来源（ADR-0004）：figures 只存 zh 侧一份，构建时同时拷入 dist 的
// zh/en 两个位置（en md 的 ./figures/... 引用是 URL 约定，不依赖仓库内副本）。
// en 侧仓库中仅保留内容确实不同的图片（如 -en 后缀目录），最后拷入并覆盖同名文件。
const zhResult = syncFigures(path.join(webDir, 'space-news'), path.join(distDir, 'space-news'));
const zhToEnResult = syncFigures(
  path.join(webDir, 'space-news'),
  path.join(distDir, 'en/space-news'),
);
const enResult = syncFigures(
  path.join(webDir, 'en/space-news'),
  path.join(distDir, 'en/space-news'),
);

const totalErrors = zhResult.errors + zhToEnResult.errors + enResult.errors;
console.log(
  `Synced ${zhResult.count + zhToEnResult.count + enResult.count} figure files to dist/ ` +
    `(${zhResult.count} zh, ${zhToEnResult.count} zh→en, ${enResult.count} en-only)${totalErrors ? ` — ${totalErrors} errors` : ''}`,
);
if (totalErrors > 0) {
  process.exitCode = 1;
}
