/**
 * One-off cleanup script for English-locale Chinese remnants.
 *
 * Handles mechanical replacements per issue #65 decisions:
 * - author: normalize to "Tianjiang Shuo" or "CislunarSpace"
 * - wechatShare.desc: replace Chinese with standard English
 * - title: remove Chinese parentheticals
 *
 * @see https://github.com/cislunarspace/cislunarspace/issues/132
 * @see https://github.com/cislunarspace/cislunarspace/issues/65
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const WEB_ROOT = path.join(__dirname, '..', 'web')

// ── Author normalization ─────────────────────────────────────────────────────

const AUTHOR_REPLACEMENTS: Array<[RegExp, string]> = [
  // 天疆说 variants → Tianjiang Shuo
  [/^(\s*author:\s*)天疆说\s*$/, '$1Tianjiang Shuo'],
  [/^(\s*author:\s*)Tianjiangshuo\s*$/i, '$1Tianjiang Shuo'],
  [/^(\s*author:\s*)Tianjiang\s+Says?\s*$/i, '$1Tianjiang Shuo'],
  [/^(\s*author:\s*)Tianjiang\s+Talks?\s*$/i, '$1Tianjiang Shuo'],
  [/^(\s*author:\s*)Tianjiang说\s*$/, '$1Tianjiang Shuo'],
  [/^(\s*author:\s*)天疆\s*$/, '$1Tianjiang Shuo'],
  // CislunarSpace stays unchanged
]

function normalizeAuthor(line: string): string | null {
  for (const [pattern, replacement] of AUTHOR_REPLACEMENTS) {
    if (pattern.test(line)) {
      return line.replace(pattern, replacement)
    }
  }
  return null
}

// ── wechatShare.desc replacement ─────────────────────────────────────────────

const STANDARD_EN_DESC = 'One-stop learning for cislunar space research frontiers, terminology, and tool resources.'

function replaceWechatShareDesc(line: string): string | null {
  // Match wechatShare.desc lines that contain Chinese
  const m = line.match(/^(\s*desc:\s*)(.+)$/)
  if (!m) return null
  const value = m[2].trim()
  // Check if value contains CJK characters
  if (/[一-鿿㐀-䶿]/.test(value)) {
    return `${m[1]}${STANDARD_EN_DESC}`
  }
  return null
}

// ── Title Chinese parenthetical removal ──────────────────────────────────────

function cleanTitle(line: string): string | null {
  const m = line.match(/^(\s*title:\s*)(.+)$/)
  if (!m) return null
  const value = m[2].trim()

  // Remove Chinese parentheticals: "English Title (中文)" → "English Title"
  // Also handles: "English Title（中文）" (fullwidth parens)
  // Also handles mixed: "Halo Orbit (Halo 轨道)" → "Halo Orbit"
  const cleaned = value
    .replace(/\s*[（(][^）)]*[一-鿿㐀-䶿][^）)]*[）)]/g, '')  // parens containing any CJK
    .replace(/\s*[（(]\s*[）)]/g, '') // remove empty parens left behind
    .trim()

  if (cleaned !== value && cleaned.length > 0) {
    return `${m[1]}${cleaned}`
  }
  return null
}

// ── Body text replacements ───────────────────────────────────────────────────

const BODY_REPLACEMENTS: Array<[RegExp, string]> = [
  // 天疆说 inline → Tianjiang Shuo (in body and link text)
  [/天疆说/g, 'Tianjiang Shuo'],
  // 天疆 inline → Tianjiang (standalone)
  [/天疆(?![说])/g, 'Tianjiang'],
]

function replaceBodyText(line: string): string | null {
  let result = line
  let changed = false
  for (const [pattern, replacement] of BODY_REPLACEMENTS) {
    if (pattern.test(result)) {
      result = result.replace(pattern, replacement)
      changed = true
      // Reset regex lastIndex for global patterns
      pattern.lastIndex = 0
    }
  }
  return changed ? result : null
}

// ── File processing ──────────────────────────────────────────────────────────

interface Change {
  file: string
  line: number
  before: string
  after: string
  category: string
}

function processFile(absPath: string, relPath: string): Change[] {
  const content = fs.readFileSync(absPath, 'utf-8')
  const lines = content.split('\n')
  const changes: Change[] = []
  const newLines: string[] = []

  let inFrontmatter = false
  let delimiterCount = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.trim() === '---') {
      delimiterCount++
      if (delimiterCount === 1) inFrontmatter = true
      else if (delimiterCount === 2) inFrontmatter = false
      newLines.push(line)
      continue
    }

    if (inFrontmatter) {
      let newLine = line

      // Author normalization
      const authorResult = normalizeAuthor(newLine)
      if (authorResult) {
        changes.push({ file: relPath, line: i + 1, before: line, after: authorResult, category: 'author' })
        newLine = authorResult
      }

      // wechatShare.desc replacement
      const wsResult = replaceWechatShareDesc(newLine)
      if (wsResult) {
        changes.push({ file: relPath, line: i + 1, before: line, after: wsResult, category: 'wechatShare' })
        newLine = wsResult
      }

      // Title cleaning
      const titleResult = cleanTitle(newLine)
      if (titleResult) {
        changes.push({ file: relPath, line: i + 1, before: line, after: titleResult, category: 'title' })
        newLine = titleResult
      }

      newLines.push(newLine)
    } else {
      // Body/link text: apply inline replacements
      const bodyResult = replaceBodyText(line)
      if (bodyResult) {
        changes.push({ file: relPath, line: i + 1, before: line, after: bodyResult, category: 'inline-text' })
        newLines.push(bodyResult)
      } else {
        newLines.push(line)
      }
    }
  }

  if (changes.length > 0) {
    fs.writeFileSync(absPath, newLines.join('\n'))
  }

  return changes
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main(): void {
  const enDir = path.join(WEB_ROOT, 'en')
  const allChanges: Change[] = []

  function walkDir(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
      const abs = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walkDir(abs)
      } else if (entry.name.endsWith('.md')) {
        const rel = path.relative(WEB_ROOT, abs)
        const changes = processFile(abs, rel)
        allChanges.push(...changes)
      }
    }
  }

  walkDir(enDir)

  // Summary
  const byCategory: Record<string, number> = {}
  for (const c of allChanges) {
    byCategory[c.category] = (byCategory[c.category] ?? 0) + 1
  }

  console.log(`\nProcessed ${allChanges.length} changes:`)
  for (const [cat, count] of Object.entries(byCategory)) {
    console.log(`  ${cat}: ${count}`)
  }

  // Show details
  for (const c of allChanges) {
    console.log(`\n  ${c.file}:${c.line} [${c.category}]`)
    console.log(`    - ${c.before.trim()}`)
    console.log(`    + ${c.after.trim()}`)
  }
}

main()
