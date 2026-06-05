/**
 * check-en-chinese — English-locale Chinese-character scanner.
 *
 * Scans English Markdown pages (web/en/) for residual Chinese characters
 * and classifies each finding by zone (frontmatter, heading, body, etc.)
 * with configurable allowlist support.
 *
 * @see https://github.com/cislunarspace/cislunarspace/issues/126
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { walkSiteMarkdown } from '../utils/markdown-walker.ts'
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'
import type {
  AllowlistEntry,
  Finding,
  Rule,
  ScanReport,
  Severity,
  Zone,
} from './check-en-chinese-types.ts'

// ── CJK detection regex ─────────────────────────────────────────────────────
// CJK Unified Ideographs, Extension A, Compat, CJK punctuation, fullwidth forms

const CJK_RE = /[一-鿿㐀-䶿豈-﫿　-〿！-～]/g

// ── References heading pattern ───────────────────────────────────────────────
// Matches ## References, ## Source, ## Bibliography, ## 参考文献, ## 参考资料, ## 来源

const REFERENCES_HEADING_RE = /^#{1,3}\s+(References?|Sources?|Bibliography|参考文献|参考资料|来源)\s*$/i

// ── Frontmatter field to zone mapping ────────────────────────────────────────

const FM_FIELD_ZONE: Record<string, Zone> = {
  title: 'frontmatter-title',
  description: 'frontmatter-description',
  author: 'frontmatter-author',
  keywords: 'frontmatter-keywords',
  'wechatShare.desc': 'frontmatter-wechatShare',
}

// ── Known English author patterns ────────────────────────────────────────────

const KNOWN_EN_AUTHORS = /^(\s*)(Tianjiang Shuo|CislunarSpace)(\s*)$/

// ── Core scanning ────────────────────────────────────────────────────────────

/**
 * Scan a single markdown content string for Chinese characters.
 * Returns all findings with zone classification, severity, and allowlist status.
 */
export function scanContent(
  content: string,
  relPath: string,
  allowlist: AllowlistEntry[] = [],
): Finding[] {
  const findings: Finding[] = []
  const lines = content.split('\n')

  // Build allowlist lookup: file → Set of line numbers
  const allowlistByFile = new Map<string, Map<number, AllowlistEntry>>()
  for (const entry of allowlist) {
    if (!allowlistByFile.has(entry.file)) {
      allowlistByFile.set(entry.file, new Map())
    }
    allowlistByFile.get(entry.file)!.set(entry.line, entry)
  }
  const fileAllowlist = allowlistByFile.get(relPath) ?? new Map<number, AllowlistEntry>()

  // Track which allowlist lines were actually matched
  const matchedAllowlistLines = new Set<number>()

  let inFrontmatter = false
  let frontmatterDelimiterCount = 0
  let currentZone: Zone = 'body'
  let fmLines: string[] = []
  let fmStartLine = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineNum = i + 1 // 1-indexed

    // ── Frontmatter state machine ──────────────────────────────────────────

    if (line.trim() === '---') {
      frontmatterDelimiterCount++
      if (frontmatterDelimiterCount === 1) {
        inFrontmatter = true
        fmStartLine = lineNum
        fmLines = []
        continue
      } else if (frontmatterDelimiterCount === 2) {
        inFrontmatter = false
        // Process collected frontmatter lines
        processFrontmatterLines(fmLines, fmStartLine, relPath, findings, fileAllowlist, matchedAllowlistLines)
        continue
      }
    }

    if (inFrontmatter) {
      fmLines.push(line)
      continue
    }

    // ── Body state machine ─────────────────────────────────────────────────

    // Skip empty lines
    if (line.trim() === '') continue

    // Check for references heading
    if (REFERENCES_HEADING_RE.test(line)) {
      currentZone = 'references'
      continue
    }

    // Check for any heading (switches zone)
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/)
    if (headingMatch) {
      const headingText = headingMatch[2]
      scanLine(headingText, lineNum, headingText, relPath, 'heading', findings, fileAllowlist, matchedAllowlistLines)
      currentZone = 'body'
      continue
    }

    // Scan link text and image paths first (more specific zones)
    const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]*)\)/)
    if (imgMatch) {
      const altText = imgMatch[1]
      const imgPath = imgMatch[2]
      const combined = altText + imgPath
      const imgStart = line.indexOf(imgMatch[0])
      scanLine(combined, lineNum, line, relPath, 'image-path', findings, fileAllowlist, matchedAllowlistLines, imgStart)
    }

    const linkRe = /\[([^\]]+)\]\(([^)]*)\)/g
    let linkMatch: RegExpExecArray | null
    while ((linkMatch = linkRe.exec(line)) !== null) {
      const linkText = linkMatch[1]
      const linkStart = linkMatch.index + 1 // +1 for the opening bracket
      if (currentZone === 'references') {
        scanLine(linkText, lineNum, line, relPath, 'references', findings, fileAllowlist, matchedAllowlistLines, linkStart)
      } else {
        scanLine(linkText, lineNum, line, relPath, 'link-text', findings, fileAllowlist, matchedAllowlistLines, linkStart)
      }
    }

    // Scan the full line for body/references zone, stripping out link/image patterns
    // to avoid double-counting Chinese already captured above
    if (currentZone !== 'heading') {
      const stripped = line.replace(/!\[([^\]]*)\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '')
      scanLine(stripped, lineNum, line, relPath, currentZone, findings, fileAllowlist, matchedAllowlistLines)
    }
  }

  // Check for stale allowlist entries
  for (const [lineNum, entry] of fileAllowlist) {
    if (!matchedAllowlistLines.has(lineNum)) {
      findings.push({
        file: relPath,
        line: lineNum,
        column: 0,
        zone: 'body',
        text: entry.text,
        severity: 'warn',
        rule: 'stale-allowlist',
        allowlisted: false,
      })
    }
  }

  // Deduplicate: one finding per (line, zone) — keep the first match
  const seen = new Set<string>()
  const deduped: Finding[] = []
  for (const f of findings.sort((a, b) => a.line - b.line || a.column - b.column)) {
    const key = `${f.line}:${f.zone}`
    if (f.rule === 'stale-allowlist' || !seen.has(key)) {
      seen.add(key)
      deduped.push(f)
    }
  }

  return deduped
}

// ── Frontmatter processing ───────────────────────────────────────────────────

function processFrontmatterLines(
  fmLines: string[],
  startLine: number,
  relPath: string,
  findings: Finding[],
  fileAllowlist: Map<number, AllowlistEntry>,
  matchedAllowlistLines: Set<number>,
): void {
  for (let i = 0; i < fmLines.length; i++) {
    const line = fmLines[i]
    const lineNum = startLine + 1 + i // +1 to skip the opening ---

    // Match top-level fields: key: value
    const topMatch = line.match(/^([\w][\w.-]*):\s*(.*)$/)
    if (!topMatch) continue

    const key = topMatch[1]
    const value = topMatch[2].trim()

    // Handle wechatShare nested fields
    if (key === 'wechatShare') {
      // Scan subsequent indented lines for desc
      for (let j = i + 1; j < fmLines.length; j++) {
        const nestedMatch = fmLines[j].match(/^\s+([\w][\w.-]*):\s*(.*)$/)
        if (!nestedMatch) break
        const nestedKey = nestedMatch[1]
        const nestedValue = nestedMatch[2].trim()
        if (nestedKey === 'desc' && nestedValue) {
          const nestedLineNum = startLine + 1 + j
          scanLine(nestedValue, nestedLineNum, fmLines[j], relPath, 'frontmatter-wechatShare', findings, fileAllowlist, matchedAllowlistLines)
        }
      }
      continue
    }

    const zone = FM_FIELD_ZONE[key]
    if (!zone) continue

    if (zone === 'frontmatter-keywords') {
      // Keywords may be a multi-line list: subsequent lines start with "  - "
      // The inline value might be "[keyword1, keyword2]" or empty
      if (value.startsWith('[')) {
        scanLine(value, lineNum, line, relPath, zone, findings, fileAllowlist, matchedAllowlistLines)
      }
      // Check subsequent list items
      for (let j = i + 1; j < fmLines.length; j++) {
        const itemMatch = fmLines[j].match(/^\s+-\s+(.+)$/)
        if (!itemMatch) break
        const itemValue = itemMatch[1].trim()
        const itemLineNum = startLine + 1 + j
        scanLine(itemValue, itemLineNum, fmLines[j], relPath, zone, findings, fileAllowlist, matchedAllowlistLines)
      }
      continue
    }

    if (value) {
      // Author zone: check for known English patterns first
      if (zone === 'frontmatter-author' && KNOWN_EN_AUTHORS.test(value)) {
        continue
      }
      scanLine(value, lineNum, line, relPath, zone, findings, fileAllowlist, matchedAllowlistLines)
    }
  }
}

// ── Line scanner ─────────────────────────────────────────────────────────────

function scanLine(
  text: string,
  lineNum: number,
  fullLine: string,
  relPath: string,
  zone: Zone,
  findings: Finding[],
  fileAllowlist: Map<number, AllowlistEntry>,
  matchedAllowlistLines: Set<number>,
  columnOffset = 0,
): void {
  // Reset regex lastIndex
  CJK_RE.lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = CJK_RE.exec(text)) !== null) {
    // Capture the full CJK run starting at this position
    const cjkRun = text.slice(match.index).match(/^[一-鿿㐀-䶿-䶿豈-﫿　-〿！-～]+/)
    const cjkText = cjkRun ? cjkRun[0] : match[0]
    const column = match.index + 1 + columnOffset // 1-indexed

    // Check allowlist: any entry for this file+line whose text appears in the full line
    const allowlistEntry = fileAllowlist.get(lineNum)
    const isAllowlisted = allowlistEntry !== undefined && fullLine.includes(allowlistEntry.text)

    if (isAllowlisted) {
      matchedAllowlistLines.add(lineNum)
      findings.push({
        file: relPath,
        line: lineNum,
        column: columnOffset > 0 ? columnOffset + 1 : 1,
        zone,
        text: allowlistEntry!.text,
        severity: 'info',
        rule: 'allowlisted',
        allowlisted: true,
      })
      return // skip further CJK findings on this line for this zone
    }

    // Auto-whitelist references zone
    if (zone === 'references') {
      findings.push({
        file: relPath,
        line: lineNum,
        column,
        zone,
        text: cjkText,
        severity: 'info',
        rule: 'auto-whitelist-references',
        allowlisted: true,
      })
      continue
    }

    // Determine rule and severity
    const rule = zoneToRule(zone)
    findings.push({
      file: relPath,
      line: lineNum,
      column,
      zone,
      text: cjkText,
      severity: 'error',
      rule,
      allowlisted: false,
    })

    // Skip past the rest of the CJK run
    CJK_RE.lastIndex = match.index + cjkText.length
  }
}

function zoneToRule(zone: Zone): Rule {
  if (zone.startsWith('frontmatter-')) return 'chinese-in-frontmatter'
  if (zone === 'heading') return 'chinese-in-heading'
  if (zone === 'link-text') return 'chinese-in-link-text'
  if (zone === 'image-path') return 'chinese-in-image-path'
  return 'chinese-in-body'
}

// ── Multi-file scanner ───────────────────────────────────────────────────────

/**
 * Scan all English markdown files and produce a report.
 */
export function scanEnglishFiles(
  files: MarkdownFile[],
  allowlist: AllowlistEntry[] = [],
): ScanReport {
  const enFiles = files.filter(f => f.relPath.startsWith('en/') && f.relPath.endsWith('.md'))

  const allFindings: Finding[] = []
  for (const file of enFiles) {
    const findings = scanContent(file.content, file.relPath, allowlist)
    allFindings.push(...findings)
  }

  const byZone: Partial<Record<Zone, number>> = {}
  let allowlisted = 0

  for (const f of allFindings) {
    byZone[f.zone] = (byZone[f.zone] ?? 0) + 1
    if (f.allowlisted) allowlisted++
  }

  return {
    scanTime: new Date().toISOString(),
    filesScanned: enFiles.length,
    findings: allFindings,
    summary: {
      total: allFindings.length,
      byZone,
      allowlisted,
      unexplained: allFindings.length - allowlisted,
    },
  }
}

// ── CLI ──────────────────────────────────────────────────────────────────────

const C = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
}

interface CliArgs {
  json: boolean
  output: boolean
  maxSeverity: 'error' | 'warn' | null
  showHelp: boolean
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = { json: false, output: false, maxSeverity: null, showHelp: false }

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '-h' || a === '--help') {
      args.showHelp = true
    } else if (a === '--json') {
      args.json = true
    } else if (a === '--output') {
      args.output = true
    } else if (a === '--max-severity') {
      const v = argv[++i]
      if (v !== 'error' && v !== 'warn') {
        console.error(`error: --max-severity must be "error" or "warn", got "${v}"`)
        process.exit(2)
      }
      args.maxSeverity = v
    } else {
      console.error(`error: unknown argument: ${a}`)
      process.exit(2)
    }
  }

  return args
}

function printHelp(): void {
  console.log(`check-en-chinese — English-locale Chinese-character scanner

Usage:
  npm run check:en-chinese [-- options]

Options:
  --json                  Output JSON to stdout
  --output                Write JSON report to docs/audits/en-chinese-report.json
                          (requires --json)
  --max-severity <level>  Exit non-zero if findings at or above level
                          Values: "error", "warn"
  -h, --help              Show this help

Exit codes:
  0  No findings at or above the severity threshold (or no --max-severity)
  1  One or more findings at or above the threshold
  2  Invocation error
`)
}

function severityColor(severity: string): string {
  if (severity === 'error') return C.red
  if (severity === 'warn') return C.yellow
  return C.dim
}

function printTerminal(report: ScanReport): void {
  const { findings, summary } = report

  console.log(`${C.cyan}Scanning English pages for Chinese characters...${C.reset}\n`)
  console.log(`${C.bold}Scanned ${report.filesScanned} files${C.reset}\n`)

  if (findings.length === 0) {
    console.log(`${C.cyan}No Chinese characters found.${C.reset}`)
    return
  }

  // Group findings by file
  const byFile = new Map<string, Finding[]>()
  for (const f of findings) {
    const list = byFile.get(f.file) ?? []
    list.push(f)
    byFile.set(f.file, list)
  }

  for (const [file, fileFindings] of byFile) {
    console.log(`\n  ${C.bold}── ${file} ──${C.reset}`)
    for (const f of fileFindings) {
      const color = severityColor(f.severity)
      const label = f.allowlisted ? '⏭' : f.severity === 'error' ? '✗' : f.severity === 'warn' ? '⚠' : '○'
      console.log(
        `  ${color}${label} L${f.line}:${f.column} [${f.zone}] ${f.text} ${C.dim}(${f.rule})${C.reset}`,
      )
    }
  }

  // Summary
  const errorCount = findings.filter(f => f.severity === 'error').length
  const warnCount = findings.filter(f => f.severity === 'warn').length
  const infoCount = findings.filter(f => f.severity === 'info').length

  console.log(`\n${C.bold}Summary:${C.reset}`)
  console.log(`  Total: ${summary.total} | ${C.red}Error: ${errorCount}${C.reset} | ${C.yellow}Warn: ${warnCount}${C.reset} | ${C.dim}Info: ${infoCount}${C.reset} | Allowlisted: ${summary.allowlisted} | Unexplained: ${summary.unexplained}`)
}

function computeExitCode(findings: Finding[], maxSeverity: 'error' | 'warn'): number {
  const rank: Record<string, number> = { info: 0, warn: 1, error: 2 }
  const threshold = rank[maxSeverity]
  return findings.some(f => rank[f.severity] >= threshold) ? 1 : 0
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

  // Load allowlist
  const allowlistPath = path.join(__dirname, 'en-chinese-allowlist.json')
  let allowlist: AllowlistEntry[] = []
  if (fs.existsSync(allowlistPath)) {
    allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf-8'))
  }

  // Scan
  const files = walkSiteMarkdown(webRoot)
  const report = scanEnglishFiles(files, allowlist)

  // Output
  if (args.json) {
    const json = JSON.stringify(report, null, 2)
    if (args.output) {
      const outPath = path.join(webRoot, '..', 'docs', 'audits', 'en-chinese-report.json')
      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      fs.writeFileSync(outPath, json + '\n')
      console.log(`Report written to: ${path.relative(webRoot, outPath)}`)
    } else {
      console.log(json)
    }
  } else {
    printTerminal(report)
  }

  // Exit code
  if (args.maxSeverity) {
    process.exit(computeExitCode(report.findings, args.maxSeverity))
  }
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  main()
}
