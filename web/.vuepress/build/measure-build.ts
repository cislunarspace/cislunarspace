// web/.vuepress/build/measure-build.ts
// Read-only measurement wrapper around the standard build pipeline.
//
// Usage:
//   tsx .vuepress/build/measure-build.ts                       # measure current build
//   tsx .vuepress/build/measure-build.ts --label my-run        # tag the log files
//   tsx .vuepress/build/measure-build.ts --skip-build          # only measure dist stats
//   tsx .vuepress/build/measure-build.ts --no-clean            # do not clear dist first
//
// This script does NOT change the build. It runs the same three commands as
// `docs:build` (gen-sidebar, vuepress build, sync-figures), records per-phase
// wall time, and writes a machine-readable JSON + a human log under
// logs/build-speed/<timestamp>-<label>.{json,log}.
//
// Exit codes:
//   0  build succeeded
//   1  build failed (a phase exited non-zero)
//   2  invocation error

import { spawnSync } from 'node:child_process';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.join(__dirname, '..', '..');
const repoRoot = path.join(webDir, '..');
const logsDir = path.join(repoRoot, 'logs', 'build-speed');
const distDir = path.join(webDir, '.vuepress', 'dist');

interface CliArgs {
  label: string;
  skipBuild: boolean;
  noClean: boolean;
  showHelp: boolean;
  outDir: string;
}

function parseArgs(argv: readonly string[]): CliArgs {
  const args: CliArgs = {
    label: 'measure',
    skipBuild: false,
    noClean: false,
    showHelp: false,
    outDir: logsDir,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === undefined) continue;
    if (a === '-h' || a === '--help') {
      args.showHelp = true;
    } else if (a === '--label') {
      const v = argv[++i];
      if (!v) throw new Error('--label requires a value');
      args.label = sanitizeLabel(v);
    } else if (a === '--skip-build') {
      args.skipBuild = true;
    } else if (a === '--no-clean') {
      args.noClean = true;
    } else if (a === '--out-dir') {
      const v = argv[++i];
      if (!v) throw new Error('--out-dir requires a value');
      args.outDir = path.resolve(v);
    } else {
      throw new Error(`Unknown argument: ${a}`);
    }
  }
  return args;
}

function sanitizeLabel(s: string): string {
  const cleaned = s.replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
  return cleaned.length > 0 ? cleaned : 'measure';
}

function printHelp(): void {
  console.log(`measure-build — run docs:build with per-phase timing

Usage:
  tsx .vuepress/build/measure-build.ts [options]

Options:
  --label <text>       Tag the output files (default: measure)
  --skip-build         Measure the existing dist/ only, do not rebuild
  --no-clean           Do not remove dist/ before building
  --out-dir <path>     Where to write logs (default: <repo>/logs/build-speed)
  -h, --help           Show this help

Outputs (per run):
  <timestamp>-<label>.log   human-readable transcript
  <timestamp>-<label>.json  { phases, totals, dist, host, label }
`);
}

interface PhaseResult {
  name: string;
  command: string;
  exitCode: number;
  durationMs: number;
  startMs: number;
  endMs: number;
}

function runPhase(
  name: string,
  command: string,
  args: readonly string[],
  env: NodeJS.ProcessEnv,
  logPath: string,
): PhaseResult {
  const start = Date.now();
  const result = spawnSync(command, args, {
    cwd: webDir,
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 1024 * 1024 * 200,
  });
  const end = Date.now();
  const durationMs = end - start;
  const exitCode = result.status ?? -1;

  const stdout = result.stdout?.toString('utf8') ?? '';
  const stderr = result.stderr?.toString('utf8') ?? '';
  const phaseLog =
    `\n=== ${name} (exit=${exitCode}, ${durationMs}ms) ===\n` +
    `$ ${command} ${args.join(' ')}\n` +
    (stdout ? `--stdout--\n${stdout}\n` : '') +
    (stderr ? `--stderr--\n${stderr}\n` : '');
  appendFileSync(logPath, phaseLog);

  return {
    name,
    command: `${command} ${args.join(' ')}`,
    exitCode,
    durationMs,
    startMs: start,
    endMs: end,
  };
}

function appendLog(p: string, chunk: string): void {
  appendFileSync(p, chunk);
}

interface DistStats {
  exists: boolean;
  fileCount: number;
  htmlCount: number;
  totalBytes: number;
  sizeHuman: string;
}

function collectDistStats(): DistStats {
  if (!existsSync(distDir)) {
    return { exists: false, fileCount: 0, htmlCount: 0, totalBytes: 0, sizeHuman: '0 B' };
  }
  let fileCount = 0;
  let htmlCount = 0;
  let totalBytes = 0;
  const walk = (dir: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.isFile()) {
        fileCount++;
        totalBytes += statSync(full).size;
        if (e.name.endsWith('.html')) htmlCount++;
      }
    }
  };
  walk(distDir);
  return {
    exists: true,
    fileCount,
    htmlCount,
    totalBytes,
    sizeHuman: humanBytes(totalBytes),
  };
}

function humanBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  const units = ['KB', 'MB', 'GB', 'TB'];
  let v = n / 1024;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(1)} ${units[i]}`;
}

function parseRenderTiming(logPath: string): {
  pagesRendered?: number;
  renderSeconds?: number;
  viteCompileSeconds?: number;
  initSeconds?: number;
  totalSeconds?: number;
} {
  let log = '';
  try {
    log = readFileSync(logPath, 'utf8');
  } catch {
    return {};
  }
  const out: ReturnType<typeof parseRenderTiming> = {};
  // VuePress Vite bundler prints lines like:
  //   ✔ Initialize and prepare data in 6.77s.
  //   ✔ Compile with Vite in 7.57s.
  //   ✔ Render pages (1628 pages) in 269.68s.
  //   ✔ Total build time: 284.45s.
  const init = /Initialize and prepare data in ([\d.]+)s/i.exec(log);
  if (init && init[1]) out.initSeconds = parseFloat(init[1]);
  const compile = /Compile with Vite in ([\d.]+)s/i.exec(log);
  if (compile && compile[1]) out.viteCompileSeconds = parseFloat(compile[1]);
  const render = /Render pages \((\d+) pages\) in ([\d.]+)s/i.exec(log);
  if (render && render[1] && render[2]) {
    out.pagesRendered = parseInt(render[1], 10);
    out.renderSeconds = parseFloat(render[2]);
  }
  const total = /Total build time:\s*([\d.]+)s/i.exec(log);
  if (total && total[1]) out.totalSeconds = parseFloat(total[1]);
  return out;
}

function main(): void {
  let args: CliArgs;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (e) {
    console.error(`error: ${(e as Error).message}`);
    process.exit(2);
  }

  if (args.showHelp) {
    printHelp();
    return;
  }

  mkdirSync(args.outDir, { recursive: true });

  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const base = `${ts}-${args.label}`;
  const logPath = path.join(args.outDir, `${base}.log`);
  const jsonPath = path.join(args.outDir, `${base}.json`);

  // Fresh transcript
  writeFileSync(
    logPath,
    `measure-build @ ${new Date().toISOString()}\n` +
      `host=${hostSummary()}\n` +
      `label=${args.label}\n`,
  );

  const env: NodeJS.ProcessEnv = { ...process.env };

  const phases: PhaseResult[] = [];
  let buildFailed = false;

  if (!args.skipBuild) {
    if (!args.noClean && existsSync(distDir)) {
      appendFileSync(logPath, `\n--- cleaning ${distDir} ---\n`);
      rmSync(distDir, { recursive: true, force: true });
    }

    const sidebar = runPhase(
      'gen-sidebar',
      'npm',
      ['run', '--silent', 'gen-sidebar'],
      env,
      logPath,
    );
    phases.push(sidebar);
    if (sidebar.exitCode !== 0) buildFailed = true;

    if (!buildFailed) {
      const vp = runPhase(
        'vuepress-build',
        'node',
        ['--max-old-space-size=8192', './node_modules/vuepress/bin/vuepress.js', 'build', '.'],
        env,
        logPath,
      );
      phases.push(vp);
      if (vp.exitCode !== 0) buildFailed = true;
    }

    if (!buildFailed) {
      const sf = runPhase('sync-figures', 'npm', ['run', '--silent', 'sync-figures'], env, logPath);
      phases.push(sf);
      if (sf.exitCode !== 0) buildFailed = true;
    }
  }

  const dist = collectDistStats();
  const internalTiming = parseRenderTiming(logPath);
  const totalDurationMs = phases.reduce((a, p) => a + p.durationMs, 0);

  const report = {
    label: args.label,
    timestamp: new Date().toISOString(),
    host: hostSummary(),
    phases: phases.map((p) => ({
      name: p.name,
      command: p.command,
      exitCode: p.exitCode,
      durationMs: p.durationMs,
    })),
    totals: {
      realMs: totalDurationMs,
      buildFailed,
    },
    vuepress: internalTiming,
    dist,
  };

  writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  console.log('\n=== measure-build summary ===');
  console.log(`label:    ${args.label}`);
  console.log(`host:     ${hostSummary()}`);
  for (const p of phases) {
    console.log(`  ${p.name.padEnd(16)} exit=${p.exitCode}  ${(p.durationMs / 1000).toFixed(1)}s`);
  }
  if (internalTiming.pagesRendered !== undefined) {
    console.log(
      `  ${'vuepress'.padEnd(16)} pages=${internalTiming.pagesRendered}  render=${internalTiming.renderSeconds?.toFixed(2)}s  total=${internalTiming.totalSeconds?.toFixed(2)}s`,
    );
  }
  console.log(
    `  ${'dist'.padEnd(16)} files=${dist.fileCount}  html=${dist.htmlCount}  size=${dist.sizeHuman}`,
  );
  console.log(`log:      ${logPath}`);
  console.log(`json:     ${jsonPath}`);

  if (buildFailed) process.exit(1);
}

function hostSummary(): string {
  const cpus = os.cpus();
  return `${process.platform}/${process.arch} node=${process.version} cpus=${cpus.length} model=${cpus[0]?.model ?? 'unknown'}`;
}

main();
