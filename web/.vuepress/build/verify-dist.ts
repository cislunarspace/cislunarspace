// web/.vuepress/build/verify-dist.ts
// Read-only verification of the VuePress dist/ output.
//
// Usage:
//   tsx .vuepress/build/verify-dist.ts                        # verify dist/ relative to web/
//   tsx .vuepress/build/verify-dist.ts --dist <path>          # verify a different dist dir
//   tsx .vuepress/build/verify-dist.ts --compare <old> <new>  # diff two dist dirs (read-only)
//
// Exit codes:
//   0  all checks passed
//   1  one or more checks failed
//   2  invocation error (missing dist, bad args)

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.join(__dirname, '..', '..');

// ── CLI parsing ──────────────────────────────────────────────────────────────

interface CliArgs {
  dist?: string;
  compare?: { oldDir: string; newDir: string };
  showHelp: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = { showHelp: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === undefined) continue;
    if (a === '-h' || a === '--help') {
      args.showHelp = true;
    } else if (a === '--dist') {
      const v = argv[++i];
      if (!v) throw new Error('--dist requires a path');
      args.dist = v;
    } else if (a === '--compare') {
      const oldDir = argv[++i];
      const newDir = argv[++i];
      if (!oldDir || !newDir) throw new Error('--compare requires <old> <new>');
      args.compare = { oldDir, newDir };
    } else {
      throw new Error(`Unknown argument: ${a}`);
    }
  }
  return args;
}

function printHelp(): void {
  console.log(`verify-dist — read-only VuePress dist/ verification

Usage:
  tsx .vuepress/build/verify-dist.ts [options]

Options:
  --dist <path>           Verify a different dist directory (default: web/.vuepress/dist)
  --compare <old> <new>   Compare two dist dirs (added/changed/removed files)
  -h, --help              Show this help

Checks (current-dist mode):
  1. dist exists
  2. Routes             every sidebar entry resolves to a file in dist
  3. HTML shape         every .html has doctype, </html>, <title>
  4. Metadata           og:title/description/url/type, twitter:card, description
  5. Hreflang           zh and en homes cross-link via rel=alternate
  6. Figures sync       every source figures/ file is present in dist
  7. Key pages          index/glossary/space-news/ai-chat/forum/404/sitemap/robots
  8. Asset sanity       no broken local hrefs/src on sampled pages
  9. JSON endpoints     ai-chat-config/context/index parse as JSON

Output: human-readable sections, per-check [OK]/[WARN]/[FAIL] tags, summary.
Any [FAIL] exits 1. [WARN] is informational and never blocks.
`);
}

// ── Result accumulator ──────────────────────────────────────────────────────

type Severity = 'ok' | 'warn' | 'fail';
interface CheckResult {
  name: string;
  severity: Severity;
  summary: string;
  details: string[];
}
interface Summary {
  oks: number;
  warns: number;
  fails: number;
  total: number;
}

const results: CheckResult[] = [];

function record(c: CheckResult): void {
  results.push(c);
  printCheck(c);
}

function summarize(): Summary {
  return {
    oks: results.filter((x) => x.severity === 'ok').length,
    warns: results.filter((x) => x.severity === 'warn').length,
    fails: results.filter((x) => x.severity === 'fail').length,
    total: results.length,
  };
}

const C = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function tag(s: Severity): string {
  const label = s === 'ok' ? 'OK  ' : s === 'warn' ? 'WARN' : 'FAIL';
  const color = s === 'ok' ? C.green : s === 'warn' ? C.yellow : C.red;
  return `${color}[${label}]${C.reset}`;
}

function printCheck(c: CheckResult): void {
  console.log(`${tag(c.severity)} ${C.bold}${c.name}${C.reset} — ${c.summary}`);
  for (const d of c.details.slice(0, 10)) {
    console.log(`        ${C.dim}${d}${C.reset}`);
  }
  if (c.details.length > 10) {
    console.log(`        ${C.dim}… and ${c.details.length - 10} more${C.reset}`);
  }
}

// ── Filesystem helpers ──────────────────────────────────────────────────────

function exists(p: string): boolean {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function listFiles(dir: string, exts: string[], out: string[] = []): string[] {
  if (!exists(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) listFiles(full, exts, out);
    else if (exts.some((x) => e.name.endsWith(x))) out.push(full);
  }
  return out;
}

function readSafe(p: string): string {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return '';
  }
}

function hashFile(p: string): string {
  return crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex');
}

// ── Route resolution (mirrors VuePress output conventions) ─────────────────

/**
 * VuePress turns `/foo/bar/` into either:
 *   - /foo/bar/index.html  (when the source dir is named `bar`)
 *   - /foo/bar.html        (when the source file is `bar.md`)
 * The sidebar may contain either form. We resolve both.
 */
function resolveRoute(distRoot: string, route: string): string | null {
  const clean = route.split('#')[0]?.split('?')[0] ?? '';
  if (!clean.startsWith('/')) return null;
  const rel = clean.replace(/^\//, '');

  if (rel.endsWith('.html') || /\.[a-z0-9]+$/i.test(rel)) {
    const p = path.join(distRoot, rel);
    return exists(p) ? p : null;
  }
  const idx = path.join(distRoot, rel, 'index.html');
  if (exists(idx)) return idx;
  const html = path.join(distRoot, rel + '.html');
  if (exists(html)) return html;
  return null;
}

// ── HTML checks ─────────────────────────────────────────────────────────────

function checkHtmlShape(html: string, file: string): string[] {
  const issues: string[] = [];
  if (!/^<!doctype html>/i.test(html.trimStart())) {
    issues.push(`missing <!doctype html>: ${file}`);
  }
  if (!/<\/html>\s*$/i.test(html)) {
    issues.push(`missing </html> close: ${file}`);
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) {
    issues.push(`missing <title>: ${file}`);
  }
  return issues;
}

function checkMetadata(html: string): { ok: boolean; missing: string[] } {
  // The set of meta tags the og-meta-plugin and VuePress default head are expected to emit.
  const required: ReadonlyArray<readonly [RegExp, string]> = [
    [/<meta\s+property=["']og:title["']/i, 'og:title'],
    [/<meta\s+property=["']og:description["']/i, 'og:description'],
    [/<meta\s+property=["']og:url["']/i, 'og:url'],
    [/<meta\s+property=["']og:type["']/i, 'og:type'],
    [/<meta\s+property=["']og:site_name["']/i, 'og:site_name'],
    [/<meta\s+name=["']twitter:card["']/i, 'twitter:card'],
    [/<meta\s+name=["']description["']/i, 'description'],
  ];
  const missing = required.filter(([re]) => !re.test(html)).map(([, k]) => k);
  return { ok: missing.length === 0, missing };
}

// ── Asset sanity (no broken local hrefs on sampled pages) ───────────────────

function checkLocalRefs(html: string, file: string, distRoot: string): string[] {
  const re = /(?:href|src)=["']([^"']+)["']/gi;
  const issues: string[] = [];
  const absFile = path.isAbsolute(file) ? file : path.join(distRoot, file);
  const displayFile = path.relative(distRoot, absFile);
  const fileDir = path.dirname(absFile);
  let m: RegExpExecArray | null;
  let scanned = 0;
  while ((m = re.exec(html)) !== null && scanned < 500) {
    scanned++;
    const url = m[1];
    if (!url) continue;
    if (/^(https?:|mailto:|tel:|data:|#|javascript:)/i.test(url)) continue;
    if (url.startsWith('//')) continue;
    const clean = url.split('#')[0]?.split('?')[0] ?? '';
    if (!clean) continue;
    // Site-absolute paths (e.g. /assets/app-XXX.js) resolve against the dist root,
    // not the file's directory. The site is mounted at "/", so /assets/foo = dist/assets/foo.
    const abs = clean.startsWith('/')
      ? path.join(distRoot, clean.replace(/^\/+/, ''))
      : path.resolve(fileDir, clean);
    if (!exists(abs)) {
      issues.push(`${displayFile}: broken local ref ${url}`);
    }
  }
  return issues;
}

// ── Sidebar loading ─────────────────────────────────────────────────────────

interface SidebarNode {
  text?: string;
  link?: string;
  children?: SidebarNode[] | Array<[string, string]>;
}
type SidebarSection = Array<[string, string]> | SidebarNode[] | undefined;
type SidebarJson = Record<string, SidebarSection>;

function loadSidebar(distRoot: string): SidebarJson | null {
  const p = path.join(path.dirname(distRoot), 'sidebar.auto.json');
  if (!exists(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8')) as SidebarJson;
  } catch {
    return null;
  }
}

function flattenRoutes(sidebar: SidebarJson): string[] {
  const out: string[] = [];
  const visit = (node: SidebarNode | [string, string]): void => {
    if (Array.isArray(node)) {
      if (typeof node[0] === 'string') {
        out.push(node[0]);
        return;
      }
    }
    if (node && typeof node === 'object' && !Array.isArray(node)) {
      if (node.link) out.push(node.link);
      if (node.children) {
        for (const c of node.children) {
          if (Array.isArray(c) && typeof c[0] === 'string') {
            out.push(c[0]);
          } else if (Array.isArray(c) && Array.isArray(c[0])) {
            for (const sub of c as unknown as Array<[string, string]>) {
              if (typeof sub[0] === 'string') out.push(sub[0]);
            }
          } else {
            visit(c as SidebarNode);
          }
        }
      }
    }
  };
  for (const section of Object.values(sidebar)) {
    if (Array.isArray(section)) {
      for (const n of section) {
        if (Array.isArray(n) && typeof n[0] === 'string') {
          out.push(n[0]);
        } else {
          visit(n as SidebarNode);
        }
      }
    }
  }
  return Array.from(new Set(out));
}

// ── Main check: current dist ────────────────────────────────────────────────

function isOpaqueDistFile(rel: string): boolean {
  // Files we never treat as site pages:
  //   - baidu_verify_*.html : third-party SEO verification (no doctype)
  //   - anything under */figures/* : image-internal HTML (some image hosts
  //     ship .html siblings; VuePress/sync-figures passes them through)
  return /^baidu_verify_[^/]+\.html$/.test(rel) || /\/(?:[^/]+\/)*figures\//.test(rel);
}

function verifyCurrent(distRoot: string): void {
  console.log(`\n${C.cyan}Verifying dist:${C.reset} ${distRoot}\n`);

  if (!exists(distRoot)) {
    record({
      name: 'dist exists',
      severity: 'fail',
      summary: `dist directory not found at ${distRoot}`,
      details: ['run `npm run build` first'],
    });
    return;
  }
  record({ name: 'dist exists', severity: 'ok', summary: distRoot, details: [] });

  // 1. Route inventory
  const sidebar = loadSidebar(distRoot);
  if (!sidebar) {
    record({
      name: 'routes',
      severity: 'warn',
      summary: 'sidebar.auto.json not found; skipping route inventory',
      details: [],
    });
  } else {
    const routes = flattenRoutes(sidebar);
    const missing = routes.map((r) => ({ r, p: resolveRoute(distRoot, r) })).filter((x) => !x.p);
    const ok = routes.length - missing.length;
    record({
      name: 'routes',
      severity: missing.length === 0 ? 'ok' : 'fail',
      summary: `${ok}/${routes.length} sidebar routes resolve to a file`,
      details: missing.slice(0, 20).map((x) => `missing: ${x.r}`),
    });
  }

  // 2. HTML shape — scan every html except opaque non-VuePress files
  const allHtml = listFiles(distRoot, ['.html']);
  const htmlFiles = allHtml.filter((f) => !isOpaqueDistFile(path.relative(distRoot, f)));
  const shapeIssues: string[] = [];
  for (const f of htmlFiles) {
    shapeIssues.push(...checkHtmlShape(readSafe(f), path.relative(distRoot, f)));
  }
  record({
    name: 'html shape',
    severity: shapeIssues.length === 0 ? 'ok' : 'fail',
    summary: `${htmlFiles.length} html files scanned (${allHtml.length - htmlFiles.length} opaque skipped), ${shapeIssues.length} issues`,
    details: shapeIssues,
  });

  // 3. Metadata — sample a handful of representative pages (404 is exempt:
  // VuePress's 404 template intentionally omits og-meta.)
  const metaSamples: string[] = [
    path.join(distRoot, 'index.html'),
    path.join(distRoot, 'en', 'index.html'),
    path.join(distRoot, 'space-news', 'index.html'),
    path.join(distRoot, 'en', 'space-news', 'index.html'),
  ];
  const zhArticles = listFiles(path.join(distRoot, 'space-news'), ['.html'])
    .filter((f) => /space-news\/\d{4}\/\d{2}\/[\d-]+-[^/]+\/index\.html$/.test(f))
    .sort()
    .reverse();
  if (zhArticles[0]) metaSamples.push(zhArticles[0]);

  const metaIssues: string[] = [];
  for (const f of metaSamples) {
    if (!exists(f)) {
      metaIssues.push(`sample missing: ${path.relative(distRoot, f)}`);
      continue;
    }
    const m = checkMetadata(readSafe(f));
    if (!m.ok) metaIssues.push(`${path.relative(distRoot, f)}: missing ${m.missing.join(', ')}`);
  }
  record({
    name: 'metadata',
    severity: metaIssues.length === 0 ? 'ok' : 'fail',
    summary: `${metaSamples.length} pages sampled, ${metaIssues.length} pages incomplete`,
    details: metaIssues,
  });

  // 4. Hreflang — cross-link zh and en homes
  const enHome = path.join(distRoot, 'en', 'index.html');
  const zhHome = path.join(distRoot, 'index.html');
  const hreflangIssues: string[] = [];
  if (exists(zhHome)) {
    const html = readSafe(zhHome);
    if (!/hreflang=["']zh-CN["']/.test(html)) {
      hreflangIssues.push('index.html: missing hreflang="zh-CN" self');
    }
    if (!/hreflang=["']en-US["']/.test(html)) {
      hreflangIssues.push('index.html: missing hreflang="en-US" alternate');
    }
  } else {
    hreflangIssues.push('index.html missing');
  }
  if (exists(enHome)) {
    const html = readSafe(enHome);
    if (!/hreflang=["']en-US["']/.test(html)) {
      hreflangIssues.push('en/index.html: missing hreflang="en-US" self');
    }
    if (!/hreflang=["']zh-CN["']/.test(html)) {
      hreflangIssues.push('en/index.html: missing hreflang="zh-CN" alternate');
    }
  } else {
    hreflangIssues.push('en/index.html missing');
  }
  record({
    name: 'hreflang',
    severity: hreflangIssues.length === 0 ? 'ok' : 'warn',
    summary:
      hreflangIssues.length === 0
        ? 'zh and en homes cross-link via hreflang'
        : 'hreflang wiring incomplete (SEO best-practice, not blocking)',
    details: hreflangIssues,
  });

  // 5. Figures sync — every source figures/ file must exist in dist
  const sourceSpaces = [
    { src: path.join(webDir, 'space-news'), mirror: 'space-news' },
    { src: path.join(webDir, 'en', 'space-news'), mirror: path.join('en', 'space-news') },
  ];
  const figureMisses: string[] = [];
  let totalFigures = 0;
  for (const { src: srcRoot, mirror } of sourceSpaces) {
    if (!exists(srcRoot)) continue;
    const figuresDirs: string[] = [];
    const walk = (dir: string): void => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
          if (e.name === 'figures') figuresDirs.push(full);
          else walk(full);
        }
      }
    };
    walk(srcRoot);
    const collectFiles = (dir: string): string[] => {
      const out: string[] = [];
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory()) out.push(...collectFiles(path.join(dir, e.name)));
        else if (e.isFile()) out.push(path.join(dir, e.name));
      }
      return out;
    };
    for (const fdir of figuresDirs) {
      const rel = path.relative(srcRoot, fdir);
      const distMirror = path.join(distRoot, mirror, rel);
      for (const srcFile of collectFiles(fdir)) {
        totalFigures++;
        const dstFile = path.join(distMirror, path.relative(fdir, srcFile));
        if (!exists(dstFile)) {
          figureMisses.push(
            `missing: ${path.relative(distRoot, dstFile)} (source: ${path.relative(webDir, srcFile)})`,
          );
        }
      }
    }
  }
  record({
    name: 'figures sync',
    severity: figureMisses.length === 0 ? 'ok' : 'fail',
    summary: `${totalFigures - figureMisses.length}/${totalFigures} source figures present in dist`,
    details: figureMisses,
  });

  // 6. Key pages — user-facing entry points
  // Glossary pages are deliberately excluded from the build (config.ts
  // pagePatterns); no glossary entries here (ADR-0004).
  const keyPages = [
    'index.html',
    'en/index.html',
    'glossary/index.html',
    'en/glossary/index.html',
    'space-news/index.html',
    'en/space-news/index.html',
    'space-news/archive.html',
    'en/space-news/archive.html',
    'ai-chat.html',
    'en/ai-chat.html',
    'forum.html',
    'en/forum.html',
    '404.html',
    'sitemap.xml',
    'robots.txt',
  ];
  const missingKeys = keyPages.filter((rel) => !exists(path.join(distRoot, rel)));
  record({
    name: 'key pages',
    severity: missingKeys.length === 0 ? 'ok' : 'fail',
    summary: `${keyPages.length - missingKeys.length}/${keyPages.length} key pages present`,
    details: missingKeys.map((rel) => `missing: ${rel}`),
  });

  // 6b. Key page content — guard against route-content mismatch
  // (e.g. a parallel-render bug that writes the wrong HTML to the right path).
  // For each key page, the title must CONTAIN at least one expected keyword and
  // must NOT contain any banned keyword.
  const contentRules: ReadonlyArray<{
    rel: string;
    mustInclude?: string[];
    mustExclude?: string[];
  }> = [
    {
      rel: 'index.html',
      mustInclude: ['地月空间入门指南'],
      mustExclude: ['社区论坛', 'AI 问答', 'AI问答', '术语词典', '按日期查阅'],
    },
    {
      rel: 'en/index.html',
      mustInclude: ["Cislunar Space Beginner's Guide"],
      mustExclude: ['Community Forum', 'AI Q&A', 'Glossary', 'Archive'],
    },
    {
      rel: 'glossary/index.html',
      mustInclude: ['地月空间术语词典'],
      mustExclude: ['社区论坛', 'AI 问答', 'AI问答'],
    },
    {
      rel: 'en/glossary/index.html',
      mustInclude: ['Cislunar Space Glossary'],
      mustExclude: ['Community Forum', 'AI Q&A'],
    },
    {
      rel: 'space-news/index.html',
      mustInclude: ['航天动态', 'Space News'],
      mustExclude: ['社区论坛', '术语词典', 'AI 问答', 'AI问答'],
    },
    {
      rel: 'en/space-news/index.html',
      mustInclude: ['Space News'],
      mustExclude: ['Community Forum', 'Glossary', 'AI Q&A'],
    },
    {
      rel: 'space-news/archive.html',
      mustInclude: ['按日期查阅', 'Space News'],
    },
    {
      rel: 'en/space-news/archive.html',
      mustInclude: ['Archive', 'Space News'],
    },
    {
      rel: 'ai-chat.html',
      mustInclude: ['AI问答', '地月空间'],
    },
    {
      rel: 'en/ai-chat.html',
      mustInclude: ['AI Q&A', 'Cislunar Space'],
    },
    {
      rel: 'forum.html',
      mustInclude: ['社区论坛'],
    },
    {
      rel: 'en/forum.html',
      mustInclude: ['Community Forum'],
    },
  ];
  const contentIssues: string[] = [];
  for (const rule of contentRules) {
    const fp = path.join(distRoot, rule.rel);
    if (!exists(fp)) continue; // already reported by key-pages
    const title = (/<title>([^<]+)<\/title>/i.exec(readSafe(fp))?.[1] ?? '').trim();
    const og = (
      /<meta\s+property=["']og:title["']\s+content=["']([^"']+)/i.exec(readSafe(fp))?.[1] ?? ''
    ).trim();
    const haystack = `${title}\n${og}`;
    const includeMisses = (rule.mustInclude ?? []).filter((k) => !haystack.includes(k));
    const excludeHits = (rule.mustExclude ?? []).filter((k) => haystack.includes(k));
    if (includeMisses.length > 0 || excludeHits.length > 0) {
      contentIssues.push(
        `${rule.rel}: include misses [${includeMisses.join(', ')}], exclude hits [${excludeHits.join(', ')}] (title="${title}", og="${og}")`,
      );
    }
  }
  record({
    name: 'key page content',
    severity: contentIssues.length === 0 ? 'ok' : 'fail',
    summary: `${contentRules.length - contentIssues.length}/${contentRules.length} key pages have expected content`,
    details: contentIssues,
  });

  // 7. Asset sanity — homepage + 2 articles
  const assetSamples: string[] = [
    path.join(distRoot, 'index.html'),
    path.join(distRoot, 'en', 'index.html'),
    ...zhArticles.slice(0, 2),
  ];
  const assetIssues: string[] = [];
  for (const f of assetSamples) {
    if (!exists(f)) continue;
    assetIssues.push(...checkLocalRefs(readSafe(f), path.relative(distRoot, f), distRoot));
  }
  record({
    name: 'asset sanity',
    severity: assetIssues.length === 0 ? 'ok' : 'fail',
    summary: `${assetSamples.length} pages scanned for broken local hrefs/src`,
    details: assetIssues,
  });

  // 8. JSON endpoints — runtime configs the AI chat loads
  const jsonEndpoints = ['ai-chat-config.json', 'ai-chat-context.json', 'ai-chat-index.json'];
  const jsonIssues: string[] = [];
  for (const rel of jsonEndpoints) {
    const p = path.join(distRoot, rel);
    if (!exists(p)) {
      jsonIssues.push(`missing: ${rel}`);
      continue;
    }
    try {
      JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch (e) {
      jsonIssues.push(`${rel}: invalid JSON (${(e as Error).message})`);
    }
  }
  record({
    name: 'json endpoints',
    severity: jsonIssues.length === 0 ? 'ok' : 'fail',
    summary: `${jsonEndpoints.length - jsonIssues.length}/${jsonEndpoints.length} runtime JSONs parse`,
    details: jsonIssues,
  });
}

// ── Compare mode: two dists ─────────────────────────────────────────────────

interface CompareReport {
  added: string[];
  removed: string[];
  changed: string[];
  unchanged: number;
}

function compareDists(oldDir: string, newDir: string): CompareReport {
  const oldFiles = new Set(
    listFiles(oldDir, ['.html', '.css', '.js', '.json', '.xml', '.txt']).map((f) =>
      path.relative(oldDir, f),
    ),
  );
  const newFiles = new Set(
    listFiles(newDir, ['.html', '.css', '.js', '.json', '.xml', '.txt']).map((f) =>
      path.relative(newDir, f),
    ),
  );
  const added: string[] = [];
  const removed: string[] = [];
  const changed: string[] = [];
  let unchanged = 0;
  for (const rel of newFiles) {
    if (!oldFiles.has(rel)) {
      added.push(rel);
      continue;
    }
    if (hashFile(path.join(oldDir, rel)) !== hashFile(path.join(newDir, rel))) {
      changed.push(rel);
    } else {
      unchanged++;
    }
  }
  for (const rel of oldFiles) {
    if (!newFiles.has(rel)) removed.push(rel);
  }
  return { added, removed, changed, unchanged };
}

function reportCompare(oldDir: string, newDir: string): void {
  console.log(`\n${C.cyan}Comparing:${C.reset} ${oldDir}  →  ${newDir}\n`);
  if (!exists(oldDir)) {
    record({
      name: 'compare',
      severity: 'fail',
      summary: `old dir not found: ${oldDir}`,
      details: [],
    });
    return;
  }
  if (!exists(newDir)) {
    record({
      name: 'compare',
      severity: 'fail',
      summary: `new dir not found: ${newDir}`,
      details: [],
    });
    return;
  }
  const r = compareDists(oldDir, newDir);
  record({
    name: 'compare',
    severity: 'ok',
    summary: `unchanged=${r.unchanged}, changed=${r.changed.length}, added=${r.added.length}, removed=${r.removed.length}`,
    details: [
      ...r.changed.slice(0, 5).map((s) => `changed: ${s}`),
      ...r.added.slice(0, 5).map((s) => `added:   ${s}`),
      ...r.removed.slice(0, 5).map((s) => `removed: ${s}`),
    ],
  });
}

// ── Entry ──────────────────────────────────────────────────────────────────

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

  if (args.compare) {
    reportCompare(args.compare.oldDir, args.compare.newDir);
  } else {
    const distRoot = args.dist ? path.resolve(args.dist) : path.join(webDir, '.vuepress', 'dist');
    verifyCurrent(distRoot);
  }

  const s = summarize();
  console.log(
    `\n${C.bold}summary${C.reset}: ${C.green}${s.oks} ok${C.reset}, ${C.yellow}${s.warns} warn${C.reset}, ${C.red}${s.fails} fail${C.reset}`,
  );
  if (s.fails > 0) process.exit(1);
}

main();
