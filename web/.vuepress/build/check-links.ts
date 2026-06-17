// web/.vuepress/build/check-links.ts
// Read-only link/image/cite resolver for VuePress markdown source.
//
// Usage:
//   tsx .vuepress/build/check-links.ts              # report broken links (default)
//   tsx .vuepress/build/check-links.ts --verbose     # report all links
//   tsx .vuepress/build/check-links.ts --json        # JSON output
//
// Exit codes:
//   0  all links resolved
//   1  one or more broken links found
//   2  invocation error

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..', '..')

// ── Types ─────────────────────────────────────────────────────────────────────

export interface MarkdownFile {
  absPath: string
  relPath: string
  content: string
}

export type LinkKind = 'link' | 'image' | 'cite'
export type LinkStatus =
  | 'ok'
  | 'broken'
  | 'external'
  | 'anchor-unchecked'
  | 'in-comment'
  | 'missing-key'

export interface ResolvedLink {
  file: string
  line: number
  kind: LinkKind
  original: string
  resolved: string | null
  status: LinkStatus
  error: string | null
}

// ── Route table ───────────────────────────────────────────────────────────────

/**
 * Build a map of VuePress route → relative source file path.
 *
 * Resolution priority:
 *   1. frontmatter `permalink` (explicit route)
 *   2. VuePress filesystem convention:
 *      - README.md / index.md → /directory/
 *      - foo.md → /directory/foo (no .md suffix)
 */
export function buildRouteTable(files: MarkdownFile[]): Map<string, string> {
  const table = new Map<string, string>()

  for (const file of files) {
    const permalink = extractFrontmatterField(file.content, 'permalink')

    const fileRoute = filePathToRoute(file.relPath)
    if (fileRoute) table.set(fileRoute, file.relPath)

    if (permalink) {
      table.set(permalink, file.relPath)
    }
  }

  return table
}

// ── Frontmatter parsing ───────────────────────────────────────────────────────

/**
 * Extract a single-line string value from YAML frontmatter.
 * Returns null if the field is absent or frontmatter is missing.
 */
export function extractFrontmatterField(
  content: string,
  field: string,
): string | null {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match?.[1]) return null

  const fm = match[1]
  // Match `field: value` at any indentation level within frontmatter
  // Handles quoted and unquoted values
  const re = new RegExp(`^${escapeRegExp(field)}:\\s*["']?([^"'\\n\\r]+?)["']?\\s*$`, 'm')
  const m = fm.match(re)
  return m?.[1]?.trim() ?? null
}

// ── Filesystem convention ─────────────────────────────────────────────────────

/**
 * Convert a relative file path to its VuePress route (no permalink case).
 *
 * - glossary/orbits/dro.md   → /glossary/orbits/dro
 * - glossary/README.md       → /glossary/
 * - glossary/index.md        → /glossary/
 */
export function filePathToRoute(relPath: string): string | null {
  const parsed = path.parse(relPath)
  const dir = parsed.dir // e.g. "glossary/orbits"
  const name = parsed.name // e.g. "dro" or "README"

  if (name === 'README' || name === 'index') {
    // Directory index → route is the directory with trailing slash
    return '/' + (dir ? dir + '/' : '')
  }

  // Regular file → route is dir/name (no extension, no trailing slash)
  return '/' + (dir ? dir + '/' : '') + name
}

// ── Link extraction ───────────────────────────────────────────────────────────

export interface ExtractedLink {
  line: number
  text: string
  target: string
  kind: 'link' | 'image'
}

/**
 * Extract markdown links [text](target) and images ![alt](src) from body text.
 * Line numbers are 1-based (first line of body = line 1).
 */
export function extractLinks(body: string): ExtractedLink[] {
  const results: ExtractedLink[] = []
  const lines = body.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!
    // Images first (must come before links to avoid matching `![](x)` as `[]()`)
    const imgRe = /!\[([^\]]*)\]\(([^)]+)\)/g
    let m: RegExpExecArray | null
    while ((m = imgRe.exec(line)) !== null) {
      results.push({ line: i + 1, text: m[1]!, target: m[2]!, kind: 'image' })
    }
    // Links (but not images — skip if preceded by `!`)
    const linkRe = /(?<!!)\[([^\]]*)\]\(([^)]+)\)/g
    while ((m = linkRe.exec(line)) !== null) {
      results.push({ line: i + 1, text: m[1]!, target: m[2]!, kind: 'link' })
    }
  }

  return results
}

// ── HTML comment detection ─────────────────────────────────────────────────────

/**
 * Find line numbers that are inside HTML comments (<!-- ... -->).
 * Returns a Set of 1-based line numbers.
 */
export function findCommentedLines(body: string): Set<number> {
  const lines = body.split('\n')
  const commented = new Set<number>()
  let inComment = false

  for (let i = 0; i < lines.length; i++) {
    let remaining = lines[i]!
    while (remaining.length > 0) {
      if (inComment) {
        const endIdx = remaining.indexOf('-->')
        if (endIdx === -1) {
          commented.add(i + 1)
          remaining = ''
        } else {
          commented.add(i + 1)
          remaining = remaining.slice(endIdx + 3)
          inComment = false
        }
      } else {
        const startIdx = remaining.indexOf('<!--')
        if (startIdx === -1) {
          remaining = ''
        } else {
          remaining = remaining.slice(startIdx + 4)
          inComment = true
        }
      }
    }
  }

  return commented
}

// ── Link resolution ───────────────────────────────────────────────────────────

/**
 * Resolve all links across all files against the route table.
 * Returns one ResolvedLink per extracted link.
 * rootDir: web/ directory for filesystem image checks. Pass null to skip fs checks (tests).
 */
export function resolveLinks(files: MarkdownFile[], rootDir: string | null = null): ResolvedLink[] {
  const routeTable = buildRouteTable(files)
  const results: ResolvedLink[] = []

  for (const file of files) {
    // Strip frontmatter to get body; track line offset for accurate reporting
    const fmMatch = file.content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/)
    const body = fmMatch ? file.content.slice(fmMatch[0].length) : file.content
    const lineOffset = fmMatch ? fmMatch[0].replace(/\r?\n?$/, '').split('\n').length : 0

    // Frontmatter image field
    const fmImage = extractFrontmatterField(file.content, 'image')
    if (fmImage) {
      const resolved = resolveOneLink(fmImage, file.relPath, routeTable, 'image', rootDir)
      results.push({
        file: file.relPath,
        line: 0, // frontmatter — line 0 signals "not in body"
        kind: 'image',
        original: fmImage,
        ...resolved,
      })
    }

    // Body links and images
    const links = extractLinks(body)
    const commentedLines = findCommentedLines(body)

    for (const link of links) {
      const bodyLine = link.line
      const fileLine = bodyLine + lineOffset

      // Classify as in-comment if the link is inside an HTML comment
      if (commentedLines.has(bodyLine)) {
        results.push({
          file: file.relPath,
          line: fileLine,
          kind: link.kind,
          original: link.target,
          resolved: null,
          status: 'in-comment',
          error: null,
        })
        continue
      }

      const resolved = resolveOneLink(link.target, file.relPath, routeTable, link.kind, rootDir)
      results.push({
        file: file.relPath,
        line: link.line + lineOffset,
        kind: link.kind,
        original: link.target,
        ...resolved,
      })
    }
  }

  return results
}

// ── Cite validation ───────────────────────────────────────────────────────────

/**
 * Extract and validate \cite{key} references against a bibliography key set.
 * Returns one ResolvedLink per cite key found.
 */
export function resolveCites(
  files: MarkdownFile[],
  bibKeys: Set<string>,
): ResolvedLink[] {
  const results: ResolvedLink[] = []

  for (const file of files) {
    const fmMatch = file.content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/)
    const body = fmMatch ? file.content.slice(fmMatch[0].length) : file.content
    const lineOffset = fmMatch ? fmMatch[0].replace(/\r?\n?$/, '').split('\n').length : 0
    const lines = body.split('\n')

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]!
      const re = /\\cite\{([^}]+)\}/g
      let m: RegExpExecArray | null
      while ((m = re.exec(line)) !== null) {
        const fullMatch = m[0]!
        const keys = m[1]!.split(',').map((k) => k.trim())
        for (const key of keys) {
          const status: LinkStatus = bibKeys.has(key) ? 'ok' : 'missing-key'
          results.push({
            file: file.relPath,
            line: i + 1 + lineOffset,
            kind: 'cite',
            original: fullMatch,
            resolved: key,
            status,
            error: status === 'missing-key' ? 'key-not-in-bibliography' : null,
          })
        }
      }
    }
  }

  return results
}

function resolveOneLink(
  target: string,
  sourceRelPath: string,
  routeTable: Map<string, string>,
  kind: 'link' | 'image' = 'link',
  fsRoot: string | null = null,
): { resolved: string | null; status: LinkStatus; error: string | null } {
  const normalizedTarget = target.trim()

  // External link
  if (/^https?:\/\//i.test(normalizedTarget)) {
    return { resolved: null, status: 'external', error: null }
  }

  // Strip anchor fragment
  const [pathPart, anchor] = splitAnchor(normalizedTarget)
  const hasAnchor = anchor !== null

  // For images with absolute paths, check filesystem (web/.vuepress/public/ first, then web/)
  if (kind === 'image' && fsRoot && pathPart.startsWith('/')) {
    const publicFile = path.join(fsRoot, '.vuepress', 'public', pathPart)
    if (fs.existsSync(publicFile)) {
      return { resolved: pathPart, status: 'ok', error: null }
    }

    const sourceFile = path.join(fsRoot, pathPart)
    if (fs.existsSync(sourceFile)) {
      return { resolved: pathPart, status: 'ok', error: null }
    }

    return { resolved: null, status: 'broken', error: 'file-not-found' }
  }

  // Relative link (starts with ./ or ../)
  if (pathPart.startsWith('./') || pathPart.startsWith('../')) {
    const sourceDir = path.dirname(sourceRelPath)
    const resolvedPath = path.normalize(path.join(sourceDir, pathPart))

    // For images, check filesystem first
    if (kind === 'image' && fsRoot) {
      const absFile = path.join(fsRoot, resolvedPath)
      if (fs.existsSync(absFile)) {
        return { resolved: resolvedPath, status: 'ok', error: null }
      }
    }

    // Strategy 1: direct file path match (e.g., ./dro.md → sibling file)
    const found = Array.from(routeTable.values()).includes(resolvedPath)
    if (found) {
      return {
        resolved: resolvedPath,
        status: hasAnchor ? 'anchor-unchecked' : 'ok',
        error: null,
      }
    }
    // Strategy 2: route-based resolution for directory-style links (e.g., ./dro/)
    // Resolve the relative path against the source file's route parent directory.
    const sourceRoute = reverseLookup(routeTable, sourceRelPath)
    if (sourceRoute) {
      // For directory indexes (README.md / index.md), the route IS the
      // directory — use it directly as parent.  For other files the route
      // is a leaf, so go up one level to get the parent directory.
      const isDirIndex = /(?:^|\/)(?:README|index)\.md$/.test(sourceRelPath)
      const parentDir = isDirIndex
        ? sourceRoute
        : path.posix.dirname(sourceRoute) + '/'
      const resolvedRoute = new URL(pathPart, 'file://' + parentDir).pathname
      const file = routeTable.get(resolvedRoute)
        ?? routeTable.get(resolvedRoute + '/')
        ?? routeTable.get(resolvedRoute.replace(/\/$/, ''))
      if (file) {
        return {
          resolved: file,
          status: hasAnchor ? 'anchor-unchecked' : 'ok',
          error: null,
        }
      }
    }
    return { resolved: null, status: 'broken', error: 'file-not-found' }
  }

  // Absolute link — try direct lookup
  const cleanPath = pathPart.endsWith('.md')
    ? pathPart.replace(/\.md$/, '')
    : pathPart

  // Try exact match first, then with/without trailing slash
  const candidates = [cleanPath, cleanPath + '/', cleanPath.replace(/\/$/, '')]
  for (const candidate of candidates) {
    const file = routeTable.get(candidate)
    if (file) {
      return {
        resolved: file,
        status: hasAnchor ? 'anchor-unchecked' : 'ok',
        error: null,
      }
    }
  }

  return { resolved: null, status: 'broken', error: 'route-not-found' }
}

function reverseLookup(table: Map<string, string>, relPath: string): string | null {
  for (const [route, file] of table) {
    if (file === relPath) return route
  }
  return null
}

function splitAnchor(target: string): [string, string | null] {
  const hashIdx = target.indexOf('#')
  if (hashIdx === -1) return [target, null]
  return [target.slice(0, hashIdx) || '/', target.slice(hashIdx + 1)]
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// ── File discovery ────────────────────────────────────────────────────────────

/**
 * Collect all site markdown files under webDir, matching VuePress pagePatterns.
 * Excludes: .vuepress/, node_modules/, docs/, _*.md
 */
export function collectMarkdownFiles(root: string): MarkdownFile[] {
  const excludes = ['.vuepress', 'node_modules', 'docs']
  const files: MarkdownFile[] = []

  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (excludes.includes(entry.name) || entry.name.startsWith('_')) continue
        walk(path.join(dir, entry.name))
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        if (entry.name.startsWith('_')) continue
        const absPath = path.join(dir, entry.name)
        const relPath = path.relative(root, absPath)
        const content = fs.readFileSync(absPath, 'utf8')
        files.push({ absPath, relPath, content })
      }
    }
  }

  walk(root)
  return files
}

// ── Terminal output ───────────────────────────────────────────────────────────

const STATUS_LABELS: Record<LinkStatus, string> = {
  ok: 'ok',
  broken: 'broken',
  external: 'external',
  'anchor-unchecked': 'anchor-unchecked',
  'in-comment': 'in-comment',
  'missing-key': 'missing-key',
}

export interface LinkCheckArgs {
  verbose: boolean
  json: boolean
}

export function formatTerminalOutput(
  results: ResolvedLink[],
  args: LinkCheckArgs,
): { summary: string; details: string[] } {
  if (args.json) {
    const report = buildJsonReport(results)
    if (!args.verbose) {
      report.entries = report.entries.filter(
        (r) => r.status === 'broken' || r.status === 'missing-key',
      )
    }
    return { summary: JSON.stringify(report, null, 2), details: [] }
  }

  const broken = results.filter((r) => r.status === 'broken' || r.status === 'missing-key')
  const toShow = args.verbose ? results : broken

  const summary = broken.length === 0
    ? `all links resolved (${results.length} checked)`
    : `${broken.length} broken link(s) found (${results.length} total checked)`

  const details = toShow.map((r) => {
    const lineStr = r.line === 0 ? 'fm' : String(r.line)
    return `  ${r.file}:${lineStr}  ${STATUS_LABELS[r.status]}  ${r.original}${r.resolved ? `  →  ${r.resolved}` : ''}`
  })

  return { summary, details }
}

// ── JSON output ──────────────────────────────────────────────────────────────

export interface JsonReport {
  summary: {
    total: number
    ok: number
    broken: number
    'in-comment': number
    external: number
    'anchor-unchecked': number
    'missing-key': number
  }
  entries: ResolvedLink[]
}

export function buildJsonReport(results: ResolvedLink[]): JsonReport {
  const counts = { total: results.length, ok: 0, broken: 0, 'in-comment': 0, external: 0, 'anchor-unchecked': 0, 'missing-key': 0 }
  for (const r of results) {
    counts[r.status]++
  }
  return { summary: counts, entries: results }
}

// ── CLI entry via shared runner ──────────────────────────────────────────────

import { runChecker } from './checker-runner'

function parseArgs(argv: string[]): LinkCheckArgs {
  const args: LinkCheckArgs = { verbose: false, json: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--verbose') args.verbose = true
    else if (a === '--json') args.json = true
    else if (a === '--max-severity') i++
    else if (a === '-h' || a === '--help') {
      // help is handled by runner
    } else {
      throw new Error(`unknown argument: ${a}`)
    }
  }
  return args
}

function loadBibliographyKeys(root: string): Set<string> {
  const bibPath = path.join(root, '.vuepress', 'public', 'bibliography.json')
  try {
    const raw = JSON.parse(fs.readFileSync(bibPath, 'utf8'))
    return new Set(Object.keys(raw.entries ?? {}))
  } catch {
    return new Set()
  }
}

function scanLinks(files: MarkdownFile[], webRoot: string): ResolvedLink[] {
  const linkResults = resolveLinks(files, webRoot)
  const bibKeys = loadBibliographyKeys(webRoot)
  const citeResults = resolveCites(files, bibKeys)
  return [...linkResults, ...citeResults]
}

const isMain =
  process.argv[1] &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  runChecker<LinkCheckArgs, ResolvedLink[]>({
    name: 'check-links',
    description: 'VuePress link/image/cite resolver.',
    scanMessage: 'links across site markdown',
    usageExamples: [
      'npx tsx .vuepress/build/check-links.ts',
      'npx tsx .vuepress/build/check-links.ts --verbose',
      'npx tsx .vuepress/build/check-links.ts --json',
    ],
    extraOptions: [
      { flag: '--verbose', description: 'Show all entries (default: only broken/missing)' },
      { flag: '--json', description: 'Output JSON instead of terminal table' },
    ],
    defaultSeverity: 'error',
    supportedSeverities: ['error'],
    scriptDir: __dirname,
    parseArgs,
    scan: (files, args) => scanLinks(files, args.webRoot),
    formatTerminal: (results, args) => formatTerminalOutput(results, args),
    buildJsonReport: (results) => buildJsonReport(results),
    reportPath: 'link-check-report.json',
    computeExitCode: (results) =>
      results.some((r) => r.status === 'broken' || r.status === 'missing-key') ? 1 : 0,
    shouldWriteReport: () => false,
  }, {
    walkSiteMarkdown: collectMarkdownFiles,
  })
}
