/**
 * check-space-news-frontmatter — Space News frontmatter / bilingual consistency checker.
 *
 * Scans all Space News markdown files and reports frontmatter metadata defects
 * and cross-locale inconsistencies.
 *
 * Usage:
 *   npx tsx .vuepress/build/check-space-news-frontmatter.ts
 *   npx tsx .vuepress/build/check-space-news-frontmatter.ts --max-severity error
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'
import type { Frontmatter } from '../utils/frontmatter-parser.ts'
import type {
  FrontmatterIssue,
  RuleSummary,
  Severity,
  CheckDimension,
  ValidationResult,
} from './check-space-news-frontmatter-types.ts'
import { runChecker } from './checker-runner'

// ── Constants ────────────────────────────────────────────────────────────────

const SPACE_NEWS_RE = /^(?:en\/)?space-news\/\d{4}\/\d{2}\/(\d{4}-\d{2}-\d{2}-.+)\.md$/
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const PERMALINK_DATE_RE = /\/space-news\/\d{4}\/\d{2}\/(\d{4}-\d{2}-\d{2})-/

const SEVERITY_RANK: Record<Severity, number> = { warning: 0, error: 1 }

// ── Terminal colors ──────────────────────────────────────────────────────────

const C = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
} as const

// ── Article info extraction ──────────────────────────────────────────────────

export interface ArticleInfo {
  slug: string
  slugDate: string
  isEn: boolean
}

/**
 * Extract the slug and slug date from a Space News article path.
 * Returns null for READMEs and non-article files.
 */
export function extractArticleInfo(relPath: string): ArticleInfo | null {
  const m = SPACE_NEWS_RE.exec(relPath)
  if (!m) return null
  const slug = m[1]
  const dateMatch = /^(\d{4}-\d{2}-\d{2})-/.exec(slug)
  if (!dateMatch) return null
  return {
    slug,
    slugDate: dateMatch[1],
    isEn: relPath.startsWith('en/'),
  }
}

// ── Helper: check if article should be skipped ───────────────────────────────

function shouldSkip(file: MarkdownFile): boolean {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  return frontmatter.draft === true
}

// ── Helper: create issue ─────────────────────────────────────────────────────

function issue(
  filePath: string,
  ruleId: string,
  severity: Severity,
  message: string,
  dimension: CheckDimension,
  field?: string,
): FrontmatterIssue {
  return { filePath, ruleId, severity, message, dimension, field }
}

// ── Helper: normalize category to sorted string for comparison ───────────────

function normalizeCategory(fm: Frontmatter): string {
  const cat = fm.category
  if (!cat) return ''
  const arr = Array.isArray(cat) ? cat : [cat]
  return [...arr].sort().join(',')
}

// ── Helper: get raw image value from content (bypass parser trimming) ────────

function getRawImageValue(content: string): string | null {
  const { frontmatter } = parseFrontmatterAndBody(content)
  if (frontmatter.image === undefined) return null
  return String(frontmatter.image)
}

// ── Single-file detection rules ──────────────────────────────────────────────

export function detectMissingLayout(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  if (!frontmatter.layout) {
    return [issue(file.relPath, 'missing-layout', 'error', 'Missing layout field', 'single-file', 'layout')]
  }
  if (frontmatter.layout !== 'SpaceNewsArticle') {
    return [issue(file.relPath, 'wrong-layout', 'error', `Layout must be SpaceNewsArticle, got "${frontmatter.layout}"`, 'single-file', 'layout')]
  }
  return []
}

export function detectMissingTitle(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  if (!frontmatter.title || String(frontmatter.title).trim() === '') {
    return [issue(file.relPath, 'missing-title', 'error', 'Missing or empty title', 'single-file', 'title')]
  }
  return []
}

export function detectMissingDescription(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  if (!frontmatter.description || String(frontmatter.description).trim() === '') {
    return [issue(file.relPath, 'missing-description', 'error', 'Missing or empty description', 'single-file', 'description')]
  }
  return []
}

export function detectDateSlugMismatch(file: MarkdownFile): FrontmatterIssue[] {
  const info = extractArticleInfo(file.relPath)
  if (!info) return []
  const { frontmatter } = parseFrontmatterAndBody(file.content)

  if (!frontmatter.date) {
    return [issue(file.relPath, 'missing-date', 'error', 'Missing date field', 'single-file', 'date')]
  }

  const dateStr = String(frontmatter.date)
  if (dateStr !== info.slugDate) {
    return [issue(
      file.relPath, 'date-slug-mismatch', 'error',
      `Date "${dateStr}" does not match slug date "${info.slugDate}"`,
      'single-file', 'date',
    )]
  }
  return []
}

export function detectMissingCategory(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  const cat = frontmatter.category
  if (!cat || (typeof cat === 'string' && cat.trim() === '') || (Array.isArray(cat) && cat.length === 0)) {
    return [issue(file.relPath, 'missing-category', 'error', 'Missing or empty category', 'single-file', 'category')]
  }
  return []
}

export function detectImageIssues(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)

  if (frontmatter.image === undefined) {
    return [issue(file.relPath, 'missing-image', 'error', 'Missing image field', 'single-file', 'image')]
  }

  const rawImage = String(frontmatter.image)

  if (rawImage === 'null') {
    return [issue(file.relPath, 'null-image', 'error', 'Image value is the string "null"', 'single-file', 'image')]
  }

  // Check for leading/trailing whitespace in raw frontmatter line.
  // The frontmatter parser's \s* after `:` consumes leading spaces, so we
  // must inspect the raw YAML line directly to detect leading-space issues.
  const lines = file.content.split('\n')
  for (const line of lines) {
    // Match raw YAML line with no leading whitespace (frontmatter key line)
    const m = /^(image):(\s*)(.*)$/.exec(line)
    if (m) {
      const spaceAfterColon = m[2]
      const rawValue = m[3]
      if (spaceAfterColon.length > 1) {
        // More than one space after colon indicates leading whitespace in value
        return [issue(file.relPath, 'image-leading-space', 'error', `Image path has leading whitespace: "${spaceAfterColon}${rawValue}"`, 'single-file', 'image')]
      }
      if (rawValue !== rawValue.trimEnd()) {
        return [issue(file.relPath, 'image-trailing-space', 'error', `Image path has trailing whitespace: "${rawValue}"`, 'single-file', 'image')]
      }
      break
    }
  }

  return []
}

export function detectPermalinkDateMismatch(file: MarkdownFile): FrontmatterIssue[] {
  const info = extractArticleInfo(file.relPath)
  if (!info) return []
  const { frontmatter } = parseFrontmatterAndBody(file.content)

  if (!frontmatter.permalink) {
    return [issue(file.relPath, 'missing-permalink', 'warning', 'Missing permalink', 'single-file', 'permalink')]
  }

  const permalink = String(frontmatter.permalink)
  const m = PERMALINK_DATE_RE.exec(permalink)
  if (m && m[1] !== info.slugDate) {
    return [issue(
      file.relPath, 'permalink-date-mismatch', 'warning',
      `Permalink date "${m[1]}" does not match slug date "${info.slugDate}"`,
      'single-file', 'permalink',
    )]
  }
  return []
}

export function detectMissingAuthor(file: MarkdownFile): FrontmatterIssue[] {
  const { frontmatter } = parseFrontmatterAndBody(file.content)
  if (!frontmatter.author || String(frontmatter.author).trim() === '') {
    return [issue(file.relPath, 'missing-author', 'warning', 'Missing or empty author', 'single-file', 'author')]
  }
  return []
}

// ── Cross-locale detection rules ─────────────────────────────────────────────

export function detectCategoryCrossLocale(zh: MarkdownFile, en: MarkdownFile): FrontmatterIssue[] {
  const zhFm = parseFrontmatterAndBody(zh.content).frontmatter
  const enFm = parseFrontmatterAndBody(en.content).frontmatter

  const zhCat = normalizeCategory(zhFm)
  const enCat = normalizeCategory(enFm)

  if (zhCat && enCat && zhCat !== enCat) {
    return [issue(
      zh.relPath, 'category-mismatch', 'error',
      `Category mismatch: zh=[${zhCat}] vs en=[${enCat}]`,
      'cross-locale', 'category',
    )]
  }
  return []
}

export function detectDateCrossLocale(zh: MarkdownFile, en: MarkdownFile): FrontmatterIssue[] {
  const zhFm = parseFrontmatterAndBody(zh.content).frontmatter
  const enFm = parseFrontmatterAndBody(en.content).frontmatter

  const zhDate = zhFm.date ? String(zhFm.date) : ''
  const enDate = enFm.date ? String(enFm.date) : ''

  if (zhDate && enDate && zhDate !== enDate) {
    return [issue(
      zh.relPath, 'date-cross-locale-mismatch', 'error',
      `Date mismatch: zh=${zhDate} vs en=${enDate}`,
      'cross-locale', 'date',
    )]
  }
  return []
}

export function detectImageCrossLocale(zh: MarkdownFile, en: MarkdownFile): FrontmatterIssue[] {
  const zhFm = parseFrontmatterAndBody(zh.content).frontmatter
  const enFm = parseFrontmatterAndBody(en.content).frontmatter

  const zhImg = zhFm.image ? String(zhFm.image).trim() : ''
  const enImg = enFm.image ? String(enFm.image).trim() : ''

  if (zhImg && enImg && zhImg !== enImg) {
    return [issue(
      zh.relPath, 'image-cross-locale-mismatch', 'warning',
      `Image mismatch: zh="${zhImg}" vs en="${enImg}"`,
      'cross-locale', 'image',
    )]
  }
  return []
}

export function detectUntranslatedTitle(zh: MarkdownFile, en: MarkdownFile): FrontmatterIssue[] {
  const zhFm = parseFrontmatterAndBody(zh.content).frontmatter
  const enFm = parseFrontmatterAndBody(en.content).frontmatter

  const zhTitle = zhFm.title ? String(zhFm.title).trim() : ''
  const enTitle = enFm.title ? String(enFm.title).trim() : ''

  if (zhTitle && enTitle && zhTitle === enTitle) {
    return [issue(
      zh.relPath, 'untranslated-title', 'warning',
      `Title is identical across locales: "${zhTitle}"`,
      'cross-locale', 'title',
    )]
  }
  return []
}

// ── Orchestration ────────────────────────────────────────────────────────────

const SINGLE_FILE_DETECTORS: Array<(file: MarkdownFile) => FrontmatterIssue[]> = [
  detectMissingLayout,
  detectMissingTitle,
  detectMissingDescription,
  detectDateSlugMismatch,
  detectMissingCategory,
  detectImageIssues,
  detectPermalinkDateMismatch,
  detectMissingAuthor,
]

/**
 * Collect all issues from a set of Space News files.
 * Cross-locale checks require both CN and EN files for the same slug.
 */
export function collectIssues(files: MarkdownFile[]): FrontmatterIssue[] {
  // Filter to space news articles only
  const articles = files.filter(f => extractArticleInfo(f.relPath) !== null)

  // Build slug → files map for cross-locale pairing
  const slugMap = new Map<string, { zh?: MarkdownFile; en?: MarkdownFile }>()
  for (const f of articles) {
    const info = extractArticleInfo(f.relPath)!
    const entry = slugMap.get(info.slug) ?? {}
    if (info.isEn) {
      entry.en = f
    } else {
      entry.zh = f
    }
    slugMap.set(info.slug, entry)
  }

  const allIssues: FrontmatterIssue[] = []

  // Single-file checks
  for (const f of articles) {
    if (shouldSkip(f)) continue
    for (const detect of SINGLE_FILE_DETECTORS) {
      allIssues.push(...detect(f))
    }
  }

  // Cross-locale checks (only when both files exist and neither is draft)
  for (const [_slug, { zh, en }] of slugMap) {
    if (!zh || !en) continue
    if (shouldSkip(zh) || shouldSkip(en)) continue

    allIssues.push(...detectCategoryCrossLocale(zh, en))
    allIssues.push(...detectDateCrossLocale(zh, en))
    allIssues.push(...detectImageCrossLocale(zh, en))
    allIssues.push(...detectUntranslatedTitle(zh, en))
  }

  return allIssues.sort((a, b) => {
    const dimOrder = a.dimension.localeCompare(b.dimension)
    if (dimOrder !== 0) return dimOrder
    const sevOrder = SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity]
    if (sevOrder !== 0) return sevOrder
    return a.filePath.localeCompare(b.filePath)
  })
}

// ── Result aggregation ───────────────────────────────────────────────────────

export function buildValidationResult(issues: FrontmatterIssue[]): ValidationResult {
  const ruleMap = new Map<string, { count: number; severity: Severity }>()
  for (const i of issues) {
    const entry = ruleMap.get(i.ruleId) ?? { count: 0, severity: i.severity }
    entry.count++
    ruleMap.set(i.ruleId, entry)
  }

  const byRule: RuleSummary[] = [...ruleMap.entries()]
    .map(([ruleId, { count, severity }]) => ({ ruleId, count, severity }))
    .sort((a, b) => SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] || b.count - a.count)

  return { issues, byRule, total: issues.length }
}

// ── Exit code ────────────────────────────────────────────────────────────────

export function computeExitCode(issues: FrontmatterIssue[], maxSeverity: Severity): number {
  const threshold = SEVERITY_RANK[maxSeverity]
  return issues.some(i => SEVERITY_RANK[i.severity] >= threshold) ? 1 : 0
}

// ── Terminal formatting ──────────────────────────────────────────────────────

export function formatTerminalOutput(result: ValidationResult): { summary: string; details: string[] } {
  if (result.total === 0) {
    return {
      summary: `${C.cyan}No Space News frontmatter issues found.${C.reset}`,
      details: [],
    }
  }

  const summaryParts = result.byRule.map(
    r => `  ${r.ruleId}: ${r.count} [${r.severity}]`,
  )
  const summary = `${C.bold}${result.total} issue(s) found:${C.reset}\n${summaryParts.join('\n')}`

  // Group by dimension
  const byDimension = new Map<CheckDimension, FrontmatterIssue[]>()
  for (const i of result.issues) {
    const list = byDimension.get(i.dimension) ?? []
    list.push(i)
    byDimension.set(i.dimension, list)
  }

  const details: string[] = []
  for (const [dim, dimIssues] of byDimension) {
    details.push(`\n  ${C.bold}── ${dim} ──${C.reset}`)
    for (const i of dimIssues) {
      const sevColor = i.severity === 'error' ? C.red : C.yellow
      details.push(`  ${sevColor}[${i.severity}]${C.reset} ${i.filePath}: ${i.message}`)
    }
  }

  return { summary, details }
}

// ── JSON report ──────────────────────────────────────────────────────────────

export function buildJsonReport(result: ValidationResult): {
  generatedAt: string
  summary: {
    total: number
    bySeverity: Record<string, number>
    byDimension: Record<string, number>
  }
  issues: FrontmatterIssue[]
} {
  const bySeverity: Record<string, number> = {}
  const byDimension: Record<string, number> = {}

  for (const i of result.issues) {
    bySeverity[i.severity] = (bySeverity[i.severity] ?? 0) + 1
    byDimension[i.dimension] = (byDimension[i.dimension] ?? 0) + 1
  }

  return {
    generatedAt: new Date().toISOString(),
    summary: { total: result.total, bySeverity, byDimension },
    issues: result.issues,
  }
}

export function scanSpaceNewsFrontmatter(files: MarkdownFile[]): ValidationResult {
  const issues = collectIssues(files)
  return buildValidationResult(issues)
}

// ── CLI entry via shared runner ──────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  runChecker({
    name: 'check-space-news-frontmatter',
    description: 'Space News frontmatter / bilingual consistency checker.',
    scanMessage: 'Space News frontmatter',
    usageExamples: [
      'npx tsx .vuepress/build/check-space-news-frontmatter.ts',
      'npx tsx .vuepress/build/check-space-news-frontmatter.ts --max-severity error',
    ],
    defaultSeverity: 'error',
    supportedSeverities: ['error', 'warning'],
    scriptDir: __dirname,
    scan: (files) => scanSpaceNewsFrontmatter(files),
    formatTerminal: formatTerminalOutput,
    buildJsonReport,
    reportPath: 'space-news-frontmatter-report.json',
    computeExitCode: (result, maxSeverity) => computeExitCode(result.issues, maxSeverity),
  })
}
