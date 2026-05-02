import fs from 'fs'
import path from 'path'
import { parseFrontmatterAndBody, type Frontmatter } from './frontmatter-parser.js'

export interface MarkdownFile {
  absPath: string
  relPath: string   // relative to webRoot, forward slashes
  frontmatter: Frontmatter
  body: string
}

const EXCLUDED_DIRS = new Set(['node_modules', 'figures', 'dist', '.vuepress'])

export function walkSiteMarkdown(webRoot: string): MarkdownFile[] {
  const result: MarkdownFile[] = []

  function walk(dir: string): void {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (EXCLUDED_DIRS.has(entry.name)) continue
        walk(full)
      } else if (/\.md$/i.test(entry.name)) {
        const content = fs.readFileSync(full, 'utf-8')
        const { frontmatter, body } = parseFrontmatterAndBody(content)
        const relPath = path.relative(webRoot, full).replace(/\\/g, '/')
        result.push({ absPath: full, relPath, frontmatter, body })
      }
    }
  }

  walk(webRoot)
  return result
}
