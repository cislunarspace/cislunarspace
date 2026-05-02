/**
 * Lightweight frontmatter parser.
 *
 * Handles flat key-value pairs, simple lists, quoted strings, booleans, and
 * inline arrays. Does NOT support nested objects, multi-line strings, YAML
 * anchors, or complex types.
 *
 * If frontmatter becomes more complex, swap the internal implementation for a
 * proper YAML parser (e.g. gray-matter) without changing this module's
 * interface.
 */

export interface Frontmatter {
  title?: string
  description?: string
  date?: string
  lastUpdated?: string
  author?: string
  category?: string | string[]
  draft?: boolean
  permalink?: string
  image?: string
  related?: string[]
  [key: string]: unknown
}

export interface ParsedFrontmatter {
  frontmatter: Frontmatter
  body: string
}

const FRONTMATTER_DELIMITER = /^---\r?\n([\s\S]*?)\r?\n---/

function unquote(value: string): string {
  if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
  }
  return value
}

function parseValue(raw: string): unknown {
  const val = raw.trim()
  if (val === 'true') return true
  if (val === 'false') return false
  if (val.startsWith('[') && val.endsWith(']')) {
    return val
      .slice(1, -1)
      .split(',')
      .map(s => unquote(s.trim()))
      .filter(Boolean)
  }
  return unquote(val)
}

function parseLines(lines: string[]): Frontmatter {
  const fm: Frontmatter = {}
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([\w][\w.-]*):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()

    if (val === '') {
      // Multi-line list: check subsequent indented `- ` lines
      const items: string[] = []
      let j = i + 1
      while (j < lines.length) {
        const itemMatch = lines[j].match(/^\s+-\s+(.+)$/)
        if (!itemMatch) break
        items.push(unquote(itemMatch[1].trim()))
        j++
      }
      if (items.length > 0) {
        fm[key] = items
        i = j - 1
        continue
      }
    }

    fm[key] = parseValue(val)
  }
  return fm
}

function extractFrontmatterBlock(content: string): { lines: string[]; endIndex: number } | null {
  const match = content.match(FRONTMATTER_DELIMITER)
  if (!match) return null
  // Strip \r from captured group to handle CRLF line endings
  const lines = match[1].replace(/\r/g, '').split('\n')
  return { lines, endIndex: match[0].length }
}

/**
 * Parse frontmatter metadata from markdown content.
 * Returns an empty object if no frontmatter block is found.
 */
export function parseFrontmatter(content: string): Frontmatter {
  const block = extractFrontmatterBlock(content)
  if (!block) return {}
  return parseLines(block.lines)
}

/**
 * Parse frontmatter metadata and return the remaining body content.
 * If no frontmatter block is found, returns empty frontmatter and the
 * original content as body.
 */
export function parseFrontmatterAndBody(content: string): ParsedFrontmatter {
  const block = extractFrontmatterBlock(content)
  if (!block) {
    return { frontmatter: {}, body: content }
  }
  return {
    frontmatter: parseLines(block.lines),
    body: content.slice(block.endIndex),
  }
}
