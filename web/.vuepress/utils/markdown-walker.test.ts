/**
 * Tests for markdown-walker.ts
 * Run with: vitest run utils/markdown-walker.test.ts
 */
import { describe, it, expect, beforeEach } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { walkSiteMarkdown, type MarkdownFile, DEFAULT_EXCLUDED } from './markdown-walker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixturesDir = path.join(__dirname, '__fixtures__')

// ── Fixtures ──────────────────────────────────────────────────────────────────

function writeFixture(relativePath: string, content: string): void {
  const absPath = path.join(fixturesDir, relativePath)
  fs.mkdirSync(path.dirname(absPath), { recursive: true })
  fs.writeFileSync(absPath, content, 'utf-8')
}

function removeFixtures(): void {
  if (fs.existsSync(fixturesDir)) {
    fs.rmSync(fixturesDir, { recursive: true })
  }
}

beforeEach(() => {
  removeFixtures()
})

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('walkSiteMarkdown', () => {
  it('returns files with raw content, not parsed frontmatter', () => {
    writeFixture('article.md', `---\ntitle: Test\ndate: 2024-01-01\n---\n\n# Hello`)
    writeFixture('en/article.md', `---\ntitle: English\n---\n\n# Title`)

    const files = walkSiteMarkdown(fixturesDir)

    // Interface check: should have content, NOT frontmatter + body
    expect(files.length).toBe(2)

    const file = files.find(f => f.relPath === 'article.md')!
    expect(file).toBeDefined()
    expect(file).toHaveProperty('absPath')
    expect(file).toHaveProperty('relPath')
    expect(file).toHaveProperty('content')
    // Should NOT have parsed properties
    expect(file).not.toHaveProperty('frontmatter')
    expect(file).not.toHaveProperty('body')
  })

  it('content includes raw markdown with frontmatter markers', () => {
    writeFixture('test.md', `---\ntitle: Raw\n---\n\nBody text`)

    const files = walkSiteMarkdown(fixturesDir)
    const file = files.find(f => f.relPath === 'test.md')!

    expect(file.content).toBe(`---\ntitle: Raw\n---\n\nBody text`)
  })

  it('can be called without frontmatter parsing', () => {
    writeFixture('simple.md', `# Just markdown`)

    // This should work without calling any parser
    const files = walkSiteMarkdown(fixturesDir)
    expect(files[0].content).toBe('# Just markdown')
  })

  it('relPath is relative to webRoot with forward slashes', () => {
    writeFixture('deep/nested/article.md', 'content')

    const files = walkSiteMarkdown(fixturesDir)
    const file = files.find(f => f.relPath.includes('nested'))!

    expect(file.relPath).toBe('deep/nested/article.md')
    expect(file.relPath).not.toContain('\\')
  })

  it('excludes node_modules, dist, .vuepress by default', () => {
    writeFixture('valid.md', 'content')
    writeFixture('node_modules/evil.md', 'should be excluded')
    writeFixture('dist/built.md', 'should be excluded')
    writeFixture('.vuepress/config.md', 'should be excluded')

    const files = walkSiteMarkdown(fixturesDir)
    const relPaths = files.map(f => f.relPath)

    expect(relPaths).toContain('valid.md')
    expect(relPaths).not.toContain('node_modules/evil.md')
    expect(relPaths).not.toContain('dist/built.md')
    expect(relPaths).not.toContain('.vuepress/config.md')
  })
})

describe('MarkdownFile interface', () => {
  it('type allows content property', () => {
    const file: MarkdownFile = {
      absPath: '/abs/path.md',
      relPath: 'path.md',
      content: 'raw markdown',
    }

    expect(file.content).toBe('raw markdown')
    // TypeScript would error if interface still had frontmatter/body
  })
})
