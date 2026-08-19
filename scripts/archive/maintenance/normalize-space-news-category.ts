/**
 * normalize-space-news-category — one-off normalization for Space News
 * frontmatter `category` field.
 *
 * Walks every article under `web/(en/)space-news/<year>/<month>/*.md`,
 * parses frontmatter, and rewrites scalar `category: foo` into the array
 * form `category: [foo]` so downstream consumers can drop their
 * `Array.isArray` branches.
 *
 * Usage:
 *   npx tsx scripts/maintenance/normalize-space-news-category.ts            # dry-run (default)
 *   npx tsx scripts/maintenance/normalize-space-news-category.ts --apply    # actually rewrite files
 *   npx tsx scripts/maintenance/normalize-space-news-category.ts --apply --quiet
 *
 * Exit codes:
 *   0  dry-run completed / apply completed
 *   1  invalid CLI args
 *   2  malformed frontmatter encountered
 *
 * @see https://github.com/cislunarspace/cislunarspace/issues/192 (F-09)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.join(__dirname, '..', '..')
const WEB_ROOT = path.join(REPO_ROOT, 'web')

const SPACE_NEWS_RE = /^(?:en\/)?space-news\/\d{4}\/\d{2}\/\d{4}-\d{2}-\d{2}-.+\.md$/

interface PlannedChange {
  relPath: string
  before: string
  after: string
}

interface CliOptions {
  apply: boolean
  quiet: boolean
}

function parseArgs(argv: string[]): CliOptions {
  const opts: CliOptions = { apply: false, quiet: false }
  for (const arg of argv) {
    if (arg === '--apply') opts.apply = true
    else if (arg === '--dry-run') opts.apply = false
    else if (arg === '--quiet') opts.quiet = true
    else if (arg === '--help' || arg === '-h') {
      console.log(
        'Usage: normalize-space-news-category [--apply] [--dry-run] [--quiet]',
      )
      process.exit(0)
    } else {
      console.error(`Unknown argument: ${arg}`)
      process.exit(1)
    }
  }
  return opts
}

/**
 * Return the line in `lines` that sets the `category` frontmatter key, or
 * null if the article has no `category` field at all.
 *
 * The parser here is intentionally minimal — it only needs to identify the
 * category line for the rewrite. We do NOT use the project's frontmatter
 * parser because we must round-trip the original formatting exactly.
 */
function findCategoryLine(lines: string[]): { index: number; raw: string } | null {
  let inBlock = false
  let sawDelimiter = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim() === '---') {
      sawDelimiter++
      if (sawDelimiter === 1) inBlock = true
      else if (sawDelimiter === 2) return null
      continue
    }
    if (!inBlock) continue
    const m = line.match(/^([ \t]*)category:[ \t]*(.*)$/)
    if (m) return { index: i, raw: line }
  }
  return null
}

function rewriteCategoryLine(line: string): string {
  const m = line.match(/^([ \t]*)category:[ \t]*(.*)$/)
  if (!m) throw new Error(`unexpected: line did not match category pattern: ${line}`)
  const indent = m[1]
  const value = m[2].trim()

  if (value === '') return `${indent}category: []`
  // Already an inline array — leave it alone.
  if (value.startsWith('[') && value.endsWith(']')) return line
  // Quoted scalar: strip quotes.
  const unquoted = value.replace(/^['"]|['"]$/g, '')
  // Block-list form `category:\n  - foo` is handled by `rewriteBlockCategory`.
  return `${indent}category: [${unquoted}]`
}

function rewriteBlockCategory(lines: string[], startIndex: number): { lines: string[]; replaced: number } {
  const replaced: string[] = []
  let j = startIndex + 1
  while (j < lines.length) {
    const itemMatch = lines[j].match(/^\s+-\s+(.+)$/)
    if (!itemMatch) break
    replaced.push(itemMatch[1].trim().replace(/^['"]|['"]$/g, ''))
    j++
  }
  const newLine = `${lines[startIndex].match(/^([ \t]*)category:/)?.[1] ?? ''}category: [${replaced.join(', ')}]`
  return {
    lines: [...lines.slice(0, startIndex), newLine, ...lines.slice(j)],
    replaced: replaced.length,
  }
}

function planFile(relPath: string, absPath: string): PlannedChange | 'skip-no-category' | 'skip-already-array' | 'error-malformed' {
  if (!SPACE_NEWS_RE.test(relPath)) return 'skip-no-category'

  const content = fs.readFileSync(absPath, 'utf-8')
  const lines = content.split('\n')
  const hit = findCategoryLine(lines)
  if (!hit) return 'skip-no-category'

  const valuePart = hit.raw.match(/^([ \t]*)category:[ \t]*(.*)$/)
  const value = valuePart?.[2].trim() ?? ''

  // Block-list form: rewrite as inline array.
  if (value === '') {
    const newLines = rewriteBlockCategory(lines, hit.index)
    const newContent = newLines.lines.join('\n')
    return { relPath, before: content, after: newContent }
  }

  // Already inline array — nothing to do.
  if (value.startsWith('[') && value.endsWith(']')) return 'skip-already-array'

  // Scalar — rewrite to single-element array.
  const newLine = rewriteCategoryLine(hit.raw)
  const newLines = [...lines.slice(0, hit.index), newLine, ...lines.slice(hit.index + 1)]
  return { relPath, before: content, after: newLines.join('\n') }
}

function walkSpaceNews(rootDir: string, out: string[]): void {
  if (!fs.existsSync(rootDir)) return
  const stack = [rootDir]
  while (stack.length > 0) {
    const dir = stack.pop()!
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const abs = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        stack.push(abs)
      } else if (entry.name.endsWith('.md')) {
        out.push(abs)
      }
    }
  }
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2))

  const candidates: string[] = []
  walkSpaceNews(path.join(WEB_ROOT, 'space-news'), candidates)
  walkSpaceNews(path.join(WEB_ROOT, 'en', 'space-news'), candidates)

  const changes: PlannedChange[] = []
  let skippedNoCategory = 0
  let skippedAlreadyArray = 0
  let malformed = 0

  for (const abs of candidates) {
    const rel = path.relative(WEB_ROOT, abs)
    const result = planFile(rel, abs)
    if (result === 'skip-no-category') {
      skippedNoCategory++
    } else if (result === 'skip-already-array') {
      skippedAlreadyArray++
    } else if (result === 'error-malformed') {
      malformed++
    } else {
      changes.push(result)
    }
  }

  if (!opts.quiet) {
    console.log(`Scanned ${candidates.length} candidate files under web/space-news and web/en/space-news.`)
    console.log(`  scalar → array rewrites planned: ${changes.length}`)
    console.log(`  already array (skipped):        ${skippedAlreadyArray}`)
    console.log(`  missing category (skipped):     ${skippedNoCategory}`)
    if (malformed > 0) console.log(`  malformed frontmatter:          ${malformed}`)
  }

  if (changes.length > 0 && !opts.quiet) {
    console.log('\nPlanned rewrites:')
    for (const c of changes) {
      const beforeLine = c.before.split('\n').find(l => /^category:/.test(l)) ?? ''
      const afterLine = c.after.split('\n').find(l => /^category:/.test(l)) ?? ''
      console.log(`  ${c.relPath}`)
      console.log(`    - ${beforeLine.trim()}`)
      console.log(`    + ${afterLine.trim()}`)
    }
  }

  if (!opts.apply) {
    if (!opts.quiet) {
      console.log('\n(dry run — pass --apply to write the changes)')
    }
    process.exit(malformed > 0 ? 2 : 0)
  }

  for (const c of changes) {
    fs.writeFileSync(path.join(WEB_ROOT, c.relPath), c.after)
  }

  if (!opts.quiet) {
    console.log(`\nWrote ${changes.length} file(s).`)
  }
  process.exit(malformed > 0 ? 2 : 0)
}

main()