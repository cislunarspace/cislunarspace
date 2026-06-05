/**
 * check-bilingual-mirror — read-only checker for bilingual mirror gaps.
 *
 * Scans user-visible Markdown content and reports missing English mirrors
 * with configurable exceptions.
 *
 * Usage:
 *   npm run check:bilingual
 *   npm run check:bilingual -- --max-severity error
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { walkSiteMarkdown } from '../utils/markdown-walker.ts'
import { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'
import type {
  BilingualGap,
  ContentFamily,
  ExceptionRule,
  FamilySummary,
  GlossaryGapScanner,
  MatchedExceptionRule,
  Severity,
} from './check-bilingual-mirror-types.ts'

// ── Severity defaults per family ─────────────────────────────────────────────

const FAMILY_SEVERITY: Record<ContentFamily, Severity> = {
  'glossary': 'error',
  'knowledge-base': 'error',
  'space-news': 'warning',
  'root': 'warning',
}

// ── Knowledge-base detection ─────────────────────────────────────────────────

const KB_PREFIXES = [
  'cislunar-orbits/',
  'research-frontiers/',
  'background/',
  'resources-tools/',
  'what-is-cislunarspace/',
  'satellite-simulation/',
]

const isReadme = (relPath: string) => path.basename(relPath).startsWith('README')

/**
 * Detect knowledge-base pages that exist in zh but not in en.
 */
export function detectKnowledgeBaseGaps(files: MarkdownFile[]): BilingualGap[] {
  const enPaths = new Set(
    files
      .filter(f => f.relPath.startsWith('en/') && f.relPath.endsWith('.md'))
      .map(f => f.relPath),
  )

  const gaps: BilingualGap[] = []

  for (const f of files) {
    if (!f.relPath.endsWith('.md')) continue
    if (f.relPath.startsWith('en/')) continue
    if (isReadme(f.relPath)) continue

    const matchedPrefix = KB_PREFIXES.find(p => f.relPath.startsWith(p))
    if (!matchedPrefix) continue

    const expectedEn = `en/${f.relPath}`
    if (!enPaths.has(expectedEn)) {
      const { frontmatter } = parseFrontmatterAndBody(f.content)
      const title = (frontmatter.title && String(frontmatter.title)) || path.basename(f.relPath, '.md')
      gaps.push({
        zhPath: f.relPath,
        expectedEnPath: expectedEn,
        family: 'knowledge-base',
        severity: FAMILY_SEVERITY['knowledge-base'],
        zhTitle: title,
      })
    }
  }

  return gaps.sort((a, b) => a.zhPath.localeCompare(b.zhPath))
}

// ── Space News detection ─────────────────────────────────────────────────────

const SPACE_NEWS_RE = /^(?:en\/)?space-news\/\d{4}\/\d{2}\/(\d{4}-\d{2}-\d{2}-.+)\.md$/

/**
 * Extract the article slug from a space-news relPath.
 * Returns null for READMEs and non-article files.
 */
export function extractSpaceNewsSlug(relPath: string): string | null {
  const m = SPACE_NEWS_RE.exec(relPath)
  return m?.[1] ?? null
}

/**
 * Detect space-news articles that exist in one locale but not the other.
 */
export function detectSpaceNewsGaps(files: MarkdownFile[]): BilingualGap[] {
  // Collect article slugs per locale, excluding drafts
  const zhSlugs = new Map<string, MarkdownFile>()
  const enSlugs = new Map<string, MarkdownFile>()

  for (const f of files) {
    const slug = extractSpaceNewsSlug(f.relPath)
    if (!slug) continue

    // Skip drafts
    const { frontmatter } = parseFrontmatterAndBody(f.content)
    if (frontmatter.draft === true) continue

    if (f.relPath.startsWith('en/')) {
      enSlugs.set(slug, f)
    } else {
      zhSlugs.set(slug, f)
    }
  }

  const gaps: BilingualGap[] = []

  // Articles in zh but not en
  for (const [slug, file] of zhSlugs) {
    if (!enSlugs.has(slug)) {
      const { frontmatter } = parseFrontmatterAndBody(file.content)
      const title = (frontmatter.title && String(frontmatter.title)) || slug
      gaps.push({
        zhPath: file.relPath,
        expectedEnPath: `en/${file.relPath}`,
        family: 'space-news',
        severity: FAMILY_SEVERITY['space-news'],
        zhTitle: title,
      })
    }
  }

  // Articles in en but not zh
  for (const [slug, file] of enSlugs) {
    if (!zhSlugs.has(slug)) {
      const zhEquivalent = file.relPath.replace(/^en\//, '')
      const { frontmatter } = parseFrontmatterAndBody(file.content)
      const title = (frontmatter.title && String(frontmatter.title)) || slug
      gaps.push({
        zhPath: file.relPath,
        expectedEnPath: zhEquivalent,
        family: 'space-news',
        severity: FAMILY_SEVERITY['space-news'],
        zhTitle: title,
      })
    }
  }

  return gaps.sort((a, b) => a.zhPath.localeCompare(b.zhPath))
}

// ── Root/special page detection ──────────────────────────────────────────────

/**
 * Detect root-level pages that exist in zh but not in en.
 */
export function detectRootPageGaps(files: MarkdownFile[]): BilingualGap[] {
  const enRootFiles = new Set(
    files
      .filter(f => {
        if (!f.relPath.startsWith('en/')) return false
        // Only root-level: en/<filename>.md (no subdirectories beyond the filename)
        const afterEn = f.relPath.slice('en/'.length)
        return afterEn.endsWith('.md') && !afterEn.includes('/')
      })
      .map(f => f.relPath),
  )

  const gaps: BilingualGap[] = []

  for (const f of files) {
    if (!f.relPath.endsWith('.md')) continue
    if (f.relPath.startsWith('en/')) continue
    if (f.relPath.includes('/')) continue // only root-level files
    if (isReadme(f.relPath)) continue // README.md is site homepage

    const expectedEn = `en/${f.relPath}`
    if (!enRootFiles.has(expectedEn)) {
      const { frontmatter } = parseFrontmatterAndBody(f.content)
      const title = (frontmatter.title && String(frontmatter.title)) || path.basename(f.relPath, '.md')
      gaps.push({
        zhPath: f.relPath,
        expectedEnPath: expectedEn,
        family: 'root',
        severity: FAMILY_SEVERITY['root'],
        zhTitle: title,
      })
    }
  }

  return gaps.sort((a, b) => a.zhPath.localeCompare(b.zhPath))
}

// ── Exception matching ───────────────────────────────────────────────────────

/**
 * Hardcoded exception rules for known zh-only pages and non-user-visible content.
 */
export const EXCEPTION_RULES: ExceptionRule[] = [
  { pattern: 'research-frontiers/directions/_templates/**', reason: 'non-user-visible template directory' },
  { pattern: 'research-frontiers/directions/security-governance/orbital-game/**', reason: 'zh-only content' },
  { pattern: 'dialectic.md', reason: 'zh-only special surface' },
]

/**
 * Check if a path matches any exception rule.
 * Supports exact match and prefix match with ** glob.
 */
export function matchesException(zhPath: string, rules: ExceptionRule[]): boolean {
  return rules.some(rule => {
    if (rule.pattern.endsWith('/**')) {
      const prefix = rule.pattern.slice(0, -3) // remove /**
      return zhPath.startsWith(prefix)
    }
    return zhPath === rule.pattern
  })
}

/**
 * Filter gaps by exception rules. Returns filtered gaps and matched exceptions with their paths.
 */
export function applyExceptions(
  gaps: BilingualGap[],
  rules: ExceptionRule[],
): { filtered: BilingualGap[]; matchedExceptions: MatchedExceptionRule[] } {
  const matchedMap = new Map<string, string[]>()

  const filtered = gaps.filter(gap => {
    const matched = rules.find(rule => {
      if (rule.pattern.endsWith('/**')) {
        const prefix = rule.pattern.slice(0, -3)
        return gap.zhPath.startsWith(prefix)
      }
      return gap.zhPath === rule.pattern
    })

    if (matched) {
      const paths = matchedMap.get(matched.pattern) ?? []
      paths.push(gap.zhPath)
      matchedMap.set(matched.pattern, paths)
      return false // exclude from gaps
    }
    return true
  })

  const matchedExceptions: MatchedExceptionRule[] = [...matchedMap.entries()]
    .map(([pattern, paths]) => {
      const rule = rules.find(r => r.pattern === pattern)!
      return { pattern, reason: rule.reason, matchedPaths: paths }
    })

  return { filtered, matchedExceptions }
}

// ── Core detection (all families) ────────────────────────────────────────────

export interface DetectionResult {
  gaps: BilingualGap[]
  byFamily: FamilySummary[]
  total: number
}

/**
 * Detect bilingual mirror gaps across all content families.
 *
 * @param files — all site markdown files from walkSiteMarkdown
 * @param glossaryGapScanner — injectable for testing; defaults to buildGlossaryScan
 */
export function detectGaps(
  files: MarkdownFile[],
  glossaryGapScanner?: GlossaryGapScanner,
): DetectionResult {
  const scanner = glossaryGapScanner ?? defaultGlossaryScanner

  const gaps: BilingualGap[] = [
    // Glossary
    ...scanner(files).map(g => ({
      zhPath: `glossary/${g.category}/${g.slug}.md`,
      expectedEnPath: `en/glossary/${g.category}/${g.slug}.md`,
      family: 'glossary' as ContentFamily,
      severity: FAMILY_SEVERITY['glossary'],
      zhTitle: g.zhTitle,
    })),
    // Knowledge-base
    ...detectKnowledgeBaseGaps(files),
    // Space News
    ...detectSpaceNewsGaps(files),
    // Root/special pages
    ...detectRootPageGaps(files),
  ]

  // Aggregate by family
  const familyMap = new Map<ContentFamily, number>()
  for (const gap of gaps) {
    familyMap.set(gap.family, (familyMap.get(gap.family) ?? 0) + 1)
  }

  const byFamily: FamilySummary[] = [...familyMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, gapCount]) => ({
      family,
      severity: FAMILY_SEVERITY[family],
      gapCount,
    }))

  return { gaps, byFamily, total: gaps.length }
}

// ── Terminal formatting ──────────────────────────────────────────────────────

const C = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
}

export interface TerminalOutput {
  summary: string
  details: string[]
  exceptions: string[]
}

export function formatTerminalOutput(
  gaps: BilingualGap[],
  byFamily: FamilySummary[],
  exceptions: MatchedExceptionRule[],
): TerminalOutput {
  // Summary line
  const summaryParts = byFamily.map(
    f => `${f.family}: ${f.gapCount} gap(s) [${f.severity}]`,
  )
  const summary = gaps.length === 0
    ? `${C.cyan}No bilingual mirror gaps found.${C.reset}`
    : `${C.bold}${gaps.length} bilingual mirror gap(s) found:${C.reset}\n  ${summaryParts.join('\n  ')}`

  // Detail lines grouped by family
  const details: string[] = []
  const gapsByFamily = new Map<ContentFamily, BilingualGap[]>()
  for (const gap of gaps) {
    const list = gapsByFamily.get(gap.family) ?? []
    list.push(gap)
    gapsByFamily.set(gap.family, list)
  }

  for (const [family, familyGaps] of gapsByFamily) {
    details.push(`\n  ${C.bold}── ${family} ──${C.reset}`)
    for (const g of familyGaps) {
      details.push(`  ${g.zhPath} → ${g.expectedEnPath}  ${C.dim}(${g.zhTitle})${C.reset}`)
    }
  }

  // Exception lines
  const exceptionLines = exceptions.map(e => {
    const count = e.matchedPaths.length
    return `  ${C.dim}⏭ ${e.pattern} — ${e.reason} (${count} matched)${C.reset}`
  })

  return { summary, details, exceptions: exceptionLines }
}

// ── JSON report ──────────────────────────────────────────────────────────────

export interface JsonReport {
  generatedAt: string
  summary: {
    total: number
    byFamily: Record<string, number>
    bySeverity: Record<string, number>
  }
  gaps: Array<{
    zhPath: string
    expectedEnPath: string
    family: ContentFamily
    severity: Severity
    zhTitle: string
  }>
  exceptions: Array<{
    pattern: string
    reason: string
    matchedPaths: string[]
  }>
}

export function buildJsonReport(
  gaps: BilingualGap[],
  exceptions: MatchedExceptionRule[],
): JsonReport {
  const byFamily: Record<string, number> = {}
  const bySeverity: Record<string, number> = {}

  for (const gap of gaps) {
    byFamily[gap.family] = (byFamily[gap.family] ?? 0) + 1
    bySeverity[gap.severity] = (bySeverity[gap.severity] ?? 0) + 1
  }

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      total: gaps.length,
      byFamily,
      bySeverity,
    },
    gaps: gaps.map(g => ({
      zhPath: g.zhPath,
      expectedEnPath: g.expectedEnPath,
      family: g.family,
      severity: g.severity,
      zhTitle: g.zhTitle,
    })),
    exceptions: exceptions.map(e => ({
      pattern: e.pattern,
      reason: e.reason,
      matchedPaths: e.matchedPaths,
    })),
  }
}

export function writeJsonReport(report: JsonReport, outPath: string): void {
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n')
}

// ── Exit code ────────────────────────────────────────────────────────────────

const SEVERITY_RANK: Record<Severity, number> = { warning: 0, error: 1 }

export function computeExitCode(gaps: BilingualGap[], maxSeverity: Severity): number {
  const threshold = SEVERITY_RANK[maxSeverity]
  const hasBlockingGap = gaps.some(g => SEVERITY_RANK[g.severity] >= threshold)
  return hasBlockingGap ? 1 : 0
}

// ── Default glossary scanner ─────────────────────────────────────────────────

function defaultGlossaryScanner(files: MarkdownFile[]) {
  const scan = buildGlossaryScan(files)
  return scan.zh.missing
}

// ── CLI ──────────────────────────────────────────────────────────────────────

function parseArgs(argv: string[]): { maxSeverity: Severity; showHelp: boolean } {
  let maxSeverity: Severity = 'warning'
  let showHelp = false

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '-h' || a === '--help') {
      showHelp = true
    } else if (a === '--max-severity') {
      const v = argv[++i]
      if (v !== 'warning' && v !== 'error') {
        console.error(`error: --max-severity must be "warning" or "error", got "${v}"`)
        process.exit(2)
      }
      maxSeverity = v
    } else {
      console.error(`error: unknown argument: ${a}`)
      process.exit(2)
    }
  }

  return { maxSeverity, showHelp }
}

function printHelp(): void {
  console.log(`check-bilingual-mirror — bilingual content mirror gap checker

Usage:
  npm run check:bilingual [-- options]

Options:
  --max-severity <level>  Minimum severity to exit non-zero (default: warning)
                          Values: "warning", "error"
  -h, --help              Show this help

Exit codes:
  0  No gaps at or above the severity threshold
  1  One or more gaps at or above the threshold
  2  Invocation error
`)
}

function main(): void {
  const args = parseArgs(process.argv.slice(2))

  if (args.showHelp) {
    printHelp()
    return
  }

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const webRoot = path.join(__dirname, '..', '..')

  console.log(`${C.cyan}Scanning for bilingual mirror gaps...${C.reset}\n`)

  const files = walkSiteMarkdown(webRoot)
  const result = detectGaps(files)

  // Apply exception rules
  const { filtered, matchedExceptions } = applyExceptions(result.gaps, EXCEPTION_RULES)

  // Recompute family summaries for filtered gaps
  const familyMap = new Map<ContentFamily, number>()
  for (const gap of filtered) {
    familyMap.set(gap.family, (familyMap.get(gap.family) ?? 0) + 1)
  }
  const filteredByFamily: FamilySummary[] = [...familyMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, gapCount]) => ({
      family,
      severity: FAMILY_SEVERITY[family],
      gapCount,
    }))

  // Terminal output
  const terminal = formatTerminalOutput(filtered, filteredByFamily, matchedExceptions)

  console.log(terminal.summary)
  if (terminal.details.length > 0) {
    for (const line of terminal.details) {
      console.log(line)
    }
  }
  if (terminal.exceptions.length > 0) {
    console.log(`\n  ${C.bold}── exceptions ──${C.reset}`)
    for (const line of terminal.exceptions) {
      console.log(line)
    }
  }

  // JSON report
  const reportPath = path.join(webRoot, '..', 'docs', 'audits', 'bilingual-gap-report.json')
  const report = buildJsonReport(filtered, matchedExceptions)
  writeJsonReport(report, reportPath)
  console.log(`\n${C.cyan}Report written to:${C.reset} ${path.relative(webRoot, reportPath)}`)

  const exitCode = computeExitCode(filtered, args.maxSeverity)
  process.exit(exitCode)
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  main()
}
