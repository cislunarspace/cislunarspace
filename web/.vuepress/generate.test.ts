/**
 * Tests for generate.ts pipeline functions.
 * Run with: vitest run generate.test.ts
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import type { Article, SidebarLatestItem, SidebarCategory, SidebarMonth, SidebarYear, SidebarData } from './sidebar/types.ts'
import { filesToArticles, buildSidebarData } from './generators/space-news.ts'

afterEach(() => {
  vi.restoreAllMocks()
  vi.resetModules()
})

// We'll import the functions we need to test.
// Since generate.ts runs inline script-style, we test individual
// helper functions by importing them directly from the source.

// ── Public import behavior ──────────────────────────────────────────────────

describe('gen-sidebar command generation', () => {
  it('does not write artifacts when imported', async () => {
    const writeFileSync = vi.spyOn(fs, 'writeFileSync').mockImplementation(() => {})

    await import('./generate.ts')

    expect(writeFileSync).not.toHaveBeenCalled()
  })

  it('writes expected artifacts when run explicitly', async () => {
    const writtenFilePaths = new Set<string>()
    const originalStatSync = fs.statSync
    const writeFileSync = vi.spyOn(fs, 'writeFileSync').mockImplementation((filePath) => {
      writtenFilePaths.add(String(filePath))
    })
    vi.spyOn(fs, 'statSync').mockImplementation(((filePath: fs.PathLike) => {
      if (writtenFilePaths.has(String(filePath))) {
        return { size: 1024 } as fs.Stats
      }
      return originalStatSync(filePath)
    }) as typeof fs.statSync)
    const { runGenerationCli } = await import('./generate.ts')

    runGenerationCli()

    const writtenPaths = writeFileSync.mock.calls.map(([filePath]) => path.basename(String(filePath)))
    expect(writtenPaths).toEqual(expect.arrayContaining([
      'sidebar.auto.json',
      'space-news-articles.json',
      'space-news-sidebar-data.json',
      'ai-chat-index.json',
      'ai-chat-context.json',
      'sidebar-glossary.auto.json',
    ]))
  })
})

// ── Mock MarkdownFile factory ──────────────────────────────────────────────────

/**
 * Helper to create a MarkdownFile with frontmatter.
 * The content string is what parseFrontmatterAndBody expects.
 */
function makeMarkdownFile(partial: {
  relPath?: string
  frontmatter?: Record<string, unknown>
}) {
  const fm = partial.frontmatter ?? {}
  const fmLines = Object.entries(fm).map(([k, v]) => {
    if (Array.isArray(v)) {
      return `${k}:\n${v.map(item => `  - ${item}`).join('\n')}`
    }
    return `${k}: ${v}`
  })
  const content = fmLines.length > 0
    ? `---\n${fmLines.join('\n')}\n---\n\n# Body`
    : '# Just content'

  return {
    absPath: `/web/${partial.relPath ?? 'test.md'}`,
    relPath: partial.relPath ?? 'test.md',
    content,
  }
}

// ── Test data ────────────────────────────────────────────────────────────────

const categoryMeta: Record<string, { zh: string; en: string; color: string }> = {
  artemis: { zh: '阿耳忒弥斯计划', en: 'Artemis Program', color: '#3b82f6' },
  commercial: { zh: '商业航天', en: 'Commercial Space', color: '#10b981' },
}

// ── filesToArticles logic (extracted for testing) ────────────────────────────

describe('filesToArticles', () => {
  it('filters out README files', () => {
    const files = [
      makeMarkdownFile({ relPath: 'space-news/2024/01/README.md', frontmatter: { title: 'Index' } }),
      makeMarkdownFile({ relPath: 'space-news/2024/01/article.md', frontmatter: { title: 'Article' } }),
    ]
    const result = filesToArticles(files, 'space-news/', '/space-news/')
    expect(result.map(r => r.relativePath)).toEqual(['space-news/2024/01/article.md'])
  })

  it('filters out draft files', () => {
    const files = [
      makeMarkdownFile({ relPath: 'space-news/2024/01/draft.md', frontmatter: { title: 'Draft', draft: true } }),
      makeMarkdownFile({ relPath: 'space-news/2024/01/published.md', frontmatter: { title: 'Published' } }),
    ]
    const result = filesToArticles(files, 'space-news/', '/space-news/')
    expect(result.map(r => r.title)).toEqual(['Published'])
  })

  it('uses permalink when present', () => {
    const files = [
      makeMarkdownFile({
        relPath: 'space-news/2024/01/article.md',
        frontmatter: { title: 'Article', permalink: '/custom/path/' },
      }),
    ]
    const result = filesToArticles(files, 'space-news/', '/space-news/')
    expect(result[0].path).toBe('/custom/path/')
  })

  it('rewrites relative image paths to absolute', () => {
    const files = [
      makeMarkdownFile({
        relPath: 'space-news/2024/01/article.md',
        frontmatter: { title: 'A', image: './fig1.png' },
      }),
    ]
    const result = filesToArticles(files, 'space-news/', '/space-news/')
    expect(result[0].image).toBe('/space-news/2024/01/fig1.png')
  })

  it('handles single and array category', () => {
    const files = [
      makeMarkdownFile({ relPath: 'space-news/2024/01/a.md', frontmatter: { title: 'A', category: 'artemis' } }),
      makeMarkdownFile({ relPath: 'space-news/2024/01/b.md', frontmatter: { title: 'B', category: ['artemis', 'commercial'] } }),
    ]
    const result = filesToArticles(files, 'space-news/', '/space-news/')
    expect(result[0].category).toEqual(['artemis'])
    expect(result[1].category).toEqual(['artemis', 'commercial'])
  })
})

// ── buildSidebarData logic (extracted for testing) ───────────────────────────

describe('buildSidebarData', () => {
  it('returns latest sorted by date desc, capped at 8', () => {
    const articles: Article[] = [
      { relativePath: 'a.md', path: '/a', title: 'A', description: '', date: '2024-01-01', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'b.md', path: '/b', title: 'B', description: '', date: '2024-03-01', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'c.md', path: '/c', title: 'C', description: '', date: '2024-02-01', lastUpdated: null, author: null, category: null, image: null },
    ]
    const result = buildSidebarData(articles, '/space-news/', 'zh', categoryMeta)
    expect(result.latest.map(l => l.title)).toEqual(['B', 'C', 'A'])
    expect(result.latest.length).toBe(3)
  })

  it('aggregates categories with counts and colors', () => {
    const articles: Article[] = [
      { relativePath: 'a.md', path: '/a', title: 'A', description: '', date: null, lastUpdated: null, author: null, category: ['artemis'], image: null },
      { relativePath: 'b.md', path: '/b', title: 'B', description: '', date: null, lastUpdated: null, author: null, category: ['artemis'], image: null },
      { relativePath: 'c.md', path: '/c', title: 'C', description: '', date: null, lastUpdated: null, author: null, category: ['commercial'], image: null },
    ]
    const result = buildSidebarData(articles, '/space-news/', 'zh', categoryMeta)
    expect(result.categories.find(c => c.key === 'artemis')?.count).toBe(2)
    expect(result.categories.find(c => c.key === 'commercial')?.color).toBe('#10b981')
    expect(result.categories[0].label).toBe('阿耳忒弥斯计划') // sorted desc by count
  })

  it('archives articles by year/month', () => {
    const articles: Article[] = [
      { relativePath: 'a.md', path: '/a', title: 'A', description: '', date: '2024-01-15', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'b.md', path: '/b', title: 'B', description: '', date: '2024-01-20', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'c.md', path: '/c', title: 'C', description: '', date: '2023-06-01', lastUpdated: null, author: null, category: null, image: null },
    ]
    const result = buildSidebarData(articles, '/space-news/', 'zh', categoryMeta)
    expect(result.archive[0].year).toBe(2024)
    expect(result.archive[0].months[0].month).toBe(1)
    expect(result.archive[0].months[0].count).toBe(2)
    expect(result.archive[1].year).toBe(2023)
  })
})
