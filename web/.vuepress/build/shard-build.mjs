// web/.vuepress/build/shard-build.mjs
// One-shot shard build: generates a shard-specific config that inherits from
// web/.vuepress/config.ts with extra page-pattern exclusions, then runs
// `vuepress build --config <shard-config.ts>`.
//
// Usage:
//   node .vuepress/build/shard-build.mjs \
//     --label shard0 \
//     --dest /tmp/shard-build/shard0-dest \
//     --temp /tmp/shard-build/shard0-temp \
//     --cache /tmp/shard-build/shard0-cache \
//     --exclude-pattern '!space-news/2026/05/**' \
//     --exclude-pattern '!en/space-news/2026/05/**'

import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.join(__dirname, '..', '..');

function parseArgs(argv) {
  const args = { label: 'shard', dest: '', temp: '', cache: '', exclude: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--label') args.label = argv[++i];
    else if (a === '--dest') args.dest = argv[++i];
    else if (a === '--temp') args.temp = argv[++i];
    else if (a === '--cache') args.cache = argv[++i];
    else if (a === '--exclude-pattern') args.exclude.push(argv[++i]);
    else throw new Error(`Unknown argument: ${a}`);
  }
  // dest/temp/cache are optional — when omitted they are auto-generated
  // under webDir/.vuepress/.shard/ by generateShardDest.
  return args;
}

function generateShardConfig(args) {
  // Write shard config into web/.vuepress/build/.shard/; the relative import
  // ../../config.ts resolves to web/.vuepress/config.ts (the real user config).
  const shardDir = path.join(__dirname, '.shard');
  mkdirSync(shardDir, { recursive: true });
  const cfgPath = path.join(shardDir, `${args.label}.ts`);
  const excludesTs = args.exclude.map((e) => `    '${e.replace(/'/g, "\\'")}'`).join(',\n');
  const cfgCode = `// Auto-generated shard config for ${args.label}.
import userConfig from '../../config.ts'

export default {
  ...userConfig,
  pagePatterns: [
    ...(userConfig.pagePatterns ?? ['**/*.md']),
${excludesTs}
  ],
}
`;
  writeFileSync(cfgPath, cfgCode);
  return cfgPath;
}

function runVuepressBuild(configPath, args) {
  const cli = path.join(webDir, 'node_modules', 'vuepress', 'bin', 'vuepress.js');
  // sourceDir is webDir (not .vuepress); config is passed via --config.
  // temp and cache live under webDir/.vuepress/.shard/ so Vite/Rolldown can
  // resolve local node_modules for SSR bundles.
  const res = spawnSync(
    process.execPath,
    [
      '--max-old-space-size=32768',
      cli,
      'build',
      webDir,
      '--config',
      configPath,
      '--dest',
      args.dest,
      '--temp',
      args.temp,
      '--cache',
      args.cache,
    ],
    { cwd: webDir, stdio: 'inherit' },
  );
  return res.status ?? 1;
}

function generateShardDest(args) {
  // All shard outputs live under webDir/.vuepress/.shard/ by default so dest,
  // temp, cache are on the same filesystem as webDir and node_modules. If a
  // caller passes explicit locations, honor them for debugging/integration.
  const shardDir = path.join(__dirname, '.shard');
  mkdirSync(shardDir, { recursive: true });
  const dest = args.dest || path.join(shardDir, `${args.label}-dest`);
  const temp = args.temp || path.join(shardDir, `${args.label}-temp`);
  const cache = args.cache || path.join(shardDir, `${args.label}-cache`);
  return { dest, temp, cache };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const { dest, temp, cache } = generateShardDest(args);
  console.log(`[shard-build] label=${args.label}`);
  console.log(`  dest=${dest}`);
  console.log(`  temp=${temp}`);
  console.log(`  cache=${cache}`);
  console.log(`  exclude patterns: ${args.exclude.length}`);
  const cfgPath = generateShardConfig(args);
  console.log(`  shard config: ${cfgPath}`);
  const code = runVuepressBuild(cfgPath, { ...args, dest, temp, cache });
  if (code !== 0) {
    console.error(`[shard-build] vuepress build exited ${code}`);
    process.exit(code);
  }
  console.log(`[shard-build] done. dest=${dest}`);
}

try {
  main();
} catch (err) {
  console.error('[shard-build] fatal:', err);
  process.exit(1);
}
