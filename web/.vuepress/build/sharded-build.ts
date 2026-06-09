// web/.vuepress/build/sharded-build.ts
// Multi-process parallel full build for VuePress.
//
// Strategy:
//   1. Reuse existing gen-sidebar output (no metadata recompute per shard).
//   2. Split Space News months across N shards, round-robin.
//      - shard 0 (baseline): renders everything EXCEPT the months assigned to shards 1..N-1
//      - shard k>0 (delta):  renders ONLY its assigned months
//      This ensures global pages (index, glossary, ai-chat, etc.) are produced
//      by exactly one shard, keeping the merge unambiguous.
//   3. Each shard runs in its own Node process via shard-build.mjs.
//   4. Merge each shard's dist into web/.vuepress/dist.
//   5. Merge route tables from all shards into a single app.js.
//   6. Run sync-figures and verify-dist; exit non-zero on any FAIL.
//
// Usage:
//   tsx .vuepress/build/sharded-build.ts                   # default BUILD_SHARDS=2
//   BUILD_SHARDS=4 tsx .vuepress/build/sharded-build.ts
//   tsx .vuepress/build/sharded-build.ts --shards 4
//   tsx .vuepress/build/sharded-build.ts --label myrun
//
// Exit codes:
//   0  build succeeded and verify-dist passed
//   1  build or verify-dist failed
//   2  invocation error

import { spawn, spawnSync } from 'node:child_process'
import { existsSync, readdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { cpSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import os from 'node:os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..', '..')
const repoRoot = path.join(webDir, '..')
const shardBuildMjs = path.join(__dirname, '..', 'shard-build.mjs')

interface CliArgs {
  label: string
  showHelp: boolean
  shards: number
}

function parseArgs(argv: readonly string[]): CliArgs {
  const env = process.env.BUILD_SHARDS
  const args: CliArgs = {
    label: process.env.BUILD_LABEL ?? 'parallel',
    showHelp: false,
    shards: env && /^\d+$/.test(env) ? parseInt(env, 10) : 2,
  }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === undefined) continue
    if (a === '-h' || a === '--help') args.showHelp = true
    else if (a === '--label') {
      const v = argv[++i]
      if (!v) throw new Error('--label requires a value')
      args.label = v
    } else if (a === '--shards') {
      const v = argv[++i]
      if (!v || !/^\d+$/.test(v)) throw new Error('--shards requires a positive integer')
      args.shards = parseInt(v, 10)
    } else throw new Error(`Unknown argument: ${a}`)
  }
  if (args.shards < 1) throw new Error('BUILD_SHARDS must be >= 1')
  return args
}

function printHelp(): void {
  console.log(`sharded-build — N-way parallel VuePress build

Usage:
  tsx .vuepress/build/sharded-build.ts [--shards N] [--label text]
  BUILD_SHARDS=4 tsx .vuepress/build/sharded-build.ts

Environment:
  BUILD_SHARDS     number of shards (default 2)
  BUILD_LABEL      tag for log files (default: parallel)
`)
}

// ── Month discovery ────────────────────────────────────────────────────────

function listMonths(dir: string): string[] {
  if (!existsSync(dir)) return []
  const months: string[] = []
  for (const y of readdirSync(dir, { withFileTypes: true })) {
    if (!y.isDirectory() || !/^\d{4}$/.test(y.name)) continue
    const yDir = path.join(dir, y.name)
    for (const m of readdirSync(yDir, { withFileTypes: true })) {
      if (!m.isDirectory() || !/^\d{2}$/.test(m.name)) continue
      months.push(path.join(y.name, m.name))
    }
  }
  return months.sort()
}

// ── Shard planning ─────────────────────────────────────────────────────────

interface ShardSpec {
  index: number
  role: 'global' | 'content'
  // Months that this shard EXCLUDES.
  excludeMonths: string[]
}

function planShards(allMonths: string[], n: number): ShardSpec[] {
  const specs: ShardSpec[] = []
  if (n === 1) {
    // Single shard — no exclusions (equivalent to full build).
    specs.push({ index: 0, role: 'global', excludeMonths: [] })
    return specs
  }
  // For N>=2: distribute months across N shards, each excludes the months
  // it does NOT own. Shard 0 is designated "global" (it will be merged last
  // to ensure global pages like index, glossary, ai-chat, forum, 404 etc.
  // are present even if a content shard somehow fails to render them).
  const monthBuckets: string[][] = Array.from({ length: n }, () => [])
  allMonths.forEach((m, i) => monthBuckets[i % n]?.push(m))
  for (let k = 0; k < n; k++) {
    const own = monthBuckets[k] ?? []
    const exclude = allMonths.filter(m => !own.includes(m))
    specs.push({ index: k, role: k === 0 ? 'global' : 'content', excludeMonths: exclude })
  }
  return specs
}

// ── Child process runner ───────────────────────────────────────────────────

function runShard(spec: ShardSpec, logPrefix: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const excludeArgs = spec.excludeMonths.flatMap(m => [
      '--exclude-pattern', `!space-news/${m}/**`,
      '--exclude-pattern', `!en/space-news/${m}/**`,
    ])
    const args = [
      shardBuildMjs,
      '--label', `shard-${spec.index}`,
      ...excludeArgs,
    ]
    const nodeOptions = [process.env.NODE_OPTIONS, '--max-old-space-size=8192']
      .filter(Boolean)
      .join(' ')
    const child = spawn(process.execPath, args, {
      cwd: webDir,
      env: { ...process.env, NODE_OPTIONS: nodeOptions },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    child.stdout.on('data', (d: Buffer) => {
      process.stdout.write(`${logPrefix} ${d}`)
    })
    child.stderr.on('data', (d: Buffer) => {
      process.stderr.write(`${logPrefix} ${d}`)
    })
    child.on('error', reject)
    child.on('close', (code) => resolve(code ?? 1))
  })
}

// ── Merge ──────────────────────────────────────────────────────────────────

function clearDir(p: string): void {
  if (existsSync(p)) rmSync(p, { recursive: true, force: true })
  mkdirSync(p, { recursive: true })
}

function copyDir(src: string, dst: string): number {
  if (!existsSync(src)) return 0
  let n = 0
  const countSource = (d: string): void => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) countSource(full)
      else n++
    }
  }
  countSource(src)
  cpSync(src, dst, { recursive: true, dereference: false })
  return n
}

function listFiles(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) listFiles(full, out)
    else out.push(full)
  }
  return out
}

function routeFromHtml(distDir: string, file: string): string | null {
  const rel = path.relative(distDir, file).replace(/\\/g, '/')
  if (rel === '404.html') return null
  if (/^baidu_verify_[^/]+\.html$/.test(rel)) return null
  if (/(?:[^/]+\/)*figures\//.test(rel)) return null
  if (!rel.endsWith('.html')) return null
  if (rel === 'index.html') return '/'
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`
  return `/${rel}`
}

function regenerateSitemap(distDir: string): void {
  const domain = 'https://cislunarspace.cn'
  const routes = listFiles(distDir)
    .filter(f => f.endsWith('.html'))
    .map(f => routeFromHtml(distDir, f))
    .filter((r): r is string => Boolean(r))
    .sort()
  const urls = routes
    .map(route => `  <url>\n    <loc>${domain}${route}</loc>\n  </url>`)
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`
  writeFileSync(path.join(distDir, 'robots.txt'), robots)
  console.log(`[sharded-build] regenerated sitemap.xml with ${routes.length} routes`)
}

// ── Route table merge ──────────────────────────────────────────────────────

/**
 * Each shard's app.js contains a self-contained route table (only the pages
 * that shard rendered).  After merging all shard dists we must produce a
 * single app.js whose route table is the **union** of every shard's routes;
 * otherwise the client-side router cannot SPA-navigate to pages that were
 * rendered by a different shard.
 *
 * Strategy:
 *   1. Use shard 0's (global) app.js as the base — it contains all
 *      non-space-news routes plus its own month subset.
 *   2. For every other shard, regex-extract route entries from its app.js.
 *   3. Merge: shard 0 routes first, then each content shard's entries
 *      overwrite (space-news routes only — global pages are identical).
 *   4. String-replace the routes section in shard 0's app.js and write it
 *      under shard 0's original filename so index.html stays valid.
 */

interface RouteEntry { path: string; body: string }

function findAppJs(distDir: string): string | null {
  // Find the app.js that index.html actually references (not just any app.js).
  const indexPath = path.join(distDir, 'index.html')
  if (existsSync(indexPath)) {
    const html = readFileSync(indexPath, 'utf8')
    const m = html.match(/assets\/(app-[^"']+\.js)/)
    if (m) return path.join(distDir, 'assets', m[1]!)
  }
  // Fallback: first app.js in assets/
  const files = readdirSync(path.join(distDir, 'assets'))
    .filter(f => /^app-.*\.js$/.test(f))
  return files.length > 0 ? path.join(distDir, 'assets', files[0]!) : null
}

function extractRouteEntries(appJsContent: string): RouteEntry[] {
  const entries: RouteEntry[] = []
  // Match: [`/path/`,{loader:()=>...}]  — the route entry format VuePress emits.
  // The inner {…} may contain nested {meta:{title:`…`}} so we allow one level
  // of nesting via the non-greedy [^}]* (?: {[^}]*} [^}]* )* pattern.
  const entryRe = /\[(`[^`]*`),(\{[^}]*(?:\{[^}]*\}[^}]*)*\})\]/g
  let m: RegExpExecArray | null
  while ((m = entryRe.exec(appJsContent)) !== null) {
    const routePath = m[1]!.slice(1, -1) // strip backticks
    entries.push({ path: routePath, body: m[0]! })
  }
  return entries
}

function mergeRouteTables(specs: ShardSpec[], distDir: string): void {
  const destAppPath = findAppJs(distDir)
  if (!destAppPath) {
    console.warn('[sharded-build] WARN: no app.js in merged dist; skipping route merge')
    return
  }

  // Collect app.js paths from each shard's dist (they still exist in .shard/).
  const shardAppPaths = specs.map(s => {
    const shardDist = shardDestDir(s.index)
    return existsSync(shardDist) ? findAppJs(shardDist) : null
  })

  // Extract route entries from each shard.
  const allEntries = new Map<string, string>() // routePath → full entry text
  for (let i = 0; i < shardAppPaths.length; i++) {
    const p = shardAppPaths[i]
    if (!p || !existsSync(p)) continue
    const content = readFileSync(p, 'utf8')
    const entries = extractRouteEntries(content)
    for (const e of entries) allEntries.set(e.path, e.body)
    console.log(`  shard ${i}: extracted ${entries.length} route entries`)
  }

  // Build merged routes array text.
  const mergedArrayText = Array.from(allEntries.values()).join(',')

  // Find and replace the routes section in the merged dist's app.js.
  // The routes live inside Object.fromEntries([[...]]) — locate the outermost
  // [[ ... ]] pair and replace its content.
  let baseContent = readFileSync(destAppPath, 'utf8')
  const routesStart = baseContent.indexOf('Object.fromEntries(')
  if (routesStart === -1) {
    console.warn('[sharded-build] WARN: could not find Object.fromEntries in app.js; skipping route merge')
    return
  }
  const arrayStart = baseContent.indexOf('[[', routesStart)
  if (arrayStart === -1) return
  // Walk brackets to find the matching ]]
  let depth = 0
  let arrayEnd = -1
  for (let j = arrayStart; j < baseContent.length; j++) {
    if (baseContent[j] === '[') depth++
    else if (baseContent[j] === ']') {
      depth--
      if (depth === 0) { arrayEnd = j + 1; break }
    }
  }
  if (arrayEnd === -1) return

  const before = baseContent.slice(0, arrayStart)
  const after = baseContent.slice(arrayEnd)
  const merged = before + '[' + mergedArrayText + ']' + after
  writeFileSync(destAppPath, merged)
  console.log(`[sharded-build] merged route table: ${allEntries.size} total routes into ${path.basename(destAppPath)}`)
}

// ── Main ───────────────────────────────────────────────────────────────────

function shardDestDir(index: number): string {
  return path.join(webDir, '.vuepress', '.shard', `shard-${index}-dest`)
}

async function main(): Promise<void> {
  let args: CliArgs
  try {
    args = parseArgs(process.argv.slice(2))
  } catch (e) {
    console.error(`error: ${(e as Error).message}`)
    process.exit(2)
  }
  if (args.showHelp) { printHelp(); return }

  const cores = os.cpus().length
  console.log(`\n[sharded-build] shards=${args.shards} label=${args.label} cores=${cores}`)

  // Clean up any previous shard dest dirs.
  const shardDir = path.join(webDir, '.vuepress', '.shard')
  if (existsSync(shardDir)) rmSync(shardDir, { recursive: true, force: true })

  // Discover months.
  const zh = listMonths(path.join(webDir, 'space-news'))
  const en = listMonths(path.join(webDir, 'en', 'space-news'))
  const allMonths = Array.from(new Set([...zh, ...en])).sort()
  console.log(`[sharded-build] space-news months: ${allMonths.length}`)

  const specs = planShards(allMonths, args.shards)
  for (const s of specs) {
    const own = allMonths.filter(m => !s.excludeMonths.includes(m))
    console.log(`  shard ${s.index} (${s.role}): own=${own.length} exclude=${s.excludeMonths.length} months [${own.join(', ')}]`)
  }

  // Run shards in parallel.
  const t0 = Date.now()
  const results = await Promise.all(
    specs.map(spec => {
      const prefix = `[shard-${spec.index}/${spec.role}]`
      return runShard(spec, prefix).then(code => ({ spec, code }))
    }),
  )
  const anyFail = results.some(r => r.code !== 0)
  for (const { spec, code } of results) {
    const dt = 'n/a' // We could record per-shard timings via a richer protocol.
    if (code !== 0) {
      console.error(`[sharded-build] shard ${spec.index} (${spec.role}) exited ${code}`)
    }
  }
  if (anyFail) {
    console.error('[sharded-build] FATAL: at least one shard failed.')
    process.exit(1)
  }
  const tBuild = ((Date.now() - t0) / 1000).toFixed(1)
  console.log(`[sharded-build] all ${args.shards} shards completed in ${tBuild}s`)

  // Merge into web/.vuepress/dist.
  const distDir = path.join(webDir, '.vuepress', 'dist')
  clearDir(distDir)
  let totalFiles = 0
  // Merge order: shard 0 first (own months), then shards 1..N-1 overwrite
  // their own space-news paths. Each shard also emits a shard-local sitemap
  // and robots.txt; we discard those in favor of a freshly computed sitemap
  // covering every merged route (see regenerateSitemap below).
  for (const s of specs) {
    const src = shardDestDir(s.index)
    const n = copyDir(src, distDir)
    console.log(`  merged shard ${s.index} (${s.role}): ${n} files`)
    totalFiles += n
  }
  console.log(`[sharded-build] merged total: ${totalFiles} files into ${distDir}`)

  // Merge route tables from all shards into a single app.js.
  // Each shard's app.js only has routes for the pages it rendered;
  // the merged app.js needs the union of all routes for SPA navigation.
  if (args.shards > 1) {
    console.log('[sharded-build] merging route tables from all shards...')
    mergeRouteTables(specs, distDir)
  }

  // Regenerate a unified sitemap and robots.txt from the merged dist.
  // Reason: each shard's sitemap/search plugins only see the shard's page
  // graph, so the last shard's sitemap.xml would otherwise ship with a
  // partial URL set.
  regenerateSitemap(distDir)

  // Sync figures (critical — figures are not part of vuepress build output).
  console.log('[sharded-build] running sync-figures...')
  const sf = spawnSync('npm', ['run', '--silent', 'sync-figures'], {
    cwd: webDir,
    env: process.env,
    stdio: 'inherit',
  })
  if ((sf.status ?? -1) !== 0) {
    console.error('[sharded-build] sync-figures FAILED')
    process.exit(1)
  }

  // Verify dist.
  console.log('[sharded-build] running verify-dist...')
  const vd = spawnSync('npm', ['run', '--silent', 'docs:build:verify-dist'], {
    cwd: webDir,
    env: process.env,
    stdio: 'inherit',
  })
  if ((vd.status ?? -1) !== 0) {
    console.error('[sharded-build] verify-dist FAILED')
    process.exit(1)
  }

  const tTotal = ((Date.now() - t0) / 1000).toFixed(1)
  console.log(`\n[sharded-build] DONE in ${tTotal}s (build + merge + sitemap + sync + verify).`)
}

main().catch(err => {
  console.error('[sharded-build] fatal:', err)
  process.exit(1)
})
