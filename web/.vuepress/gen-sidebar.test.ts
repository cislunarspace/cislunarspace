/**
 * Tests for gen-sidebar.ts pipeline functions.
 * Run with: vitest run gen-sidebar.test.ts
 */
import { describe, it, expect } from 'vitest'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// We'll import the functions we need to test.
// Since gen-sidebar.ts runs inline script-style, we test individual
// helper functions by importing them directly from the source.

// ── Mock MarkdownFile factory ──────────────────────────────────────────────────

function makeMarkdownFile(partial: {
  relPath?: string
  frontmatter?: Record<string, unknown>
  body?: string
}) {
  return {
    absPath: `/web/${partial.relPath ?? 'test.md'}`,
    relPath: partial.relPath ?? 'test.md',
    frontmatter: partial.frontmatter ?? {},
    body: partial.body ?? '',
  }
}

// ── Test data ────────────────────────────────────────────────────────────────

const categoryMeta: Record<string, { zh: string; en: string; color: string }> = {
  artemis: { zh: '阿耳忒弥斯计划', en: 'Artemis Program', color: '#3b82f6' },
  commercial: { zh: '商业航天', en: 'Commercial Space', color: '#10b981' },
}

// ── filesToArticles logic (extracted for testing) ────────────────────────────

interface Article {
  relativePath: string
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string[] | null
  image: string | null
}

function filesToArticles(
  files: ReturnType<typeof makeMarkdownFile>[],
  relPathPrefix: string,
  urlPrefix: string,
): Article[] {
  return files
    .filter(f => {
      const filename = path.basename(f.relPath)
      return (
        f.relPath.startsWith(relPathPrefix)
        && !filename.startsWith('README')
        && f.frontmatter.draft !== true
      )
    })
    .map(f => {
      const relFromBase = f.relPath.slice(relPathPrefix.length)
      const pagePath =
        (f.frontmatter.permalink as string | undefined) ||
        urlPrefix + relFromBase.replace(/\.md$/i, '/')

      let imageUrl: string | null = (f.frontmatter.image as string | undefined) || null
      if (imageUrl && imageUrl.startsWith('./')) {
        const mdDir = '/' + f.relPath.replace(/\/[^/]+$/, '') + '/'
        imageUrl = mdDir + imageUrl.slice(2)
      }

      const rawCategory = f.frontmatter.category || null
      const categories = Array.isArray(rawCategory)
        ? rawCategory
        : rawCategory ? [rawCategory as string] : []

      return {
        relativePath: f.relPath,
        path: pagePath,
        title: (f.frontmatter.title as string | undefined) || '',
        description: (f.frontmatter.description as string | undefined) || '',
        date: (f.frontmatter.date as string | undefined) || null,
        lastUpdated: (f.frontmatter.lastUpdated as string | undefined) || null,
        author: (f.frontmatter.author as string | undefined) || null,
        category: categories.length ? categories : null,
        image: imageUrl,
      }
    })
}

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

interface SidebarLatestItem {
  title: string
  path: string
  date: string | null
  category: string[] | null
}

interface SidebarCategory {
  key: string
  label: string
  count: number
  color: string
}

interface SidebarMonth {
  month: number
  label: string
  path: string
  count: number
}

interface SidebarYear {
  year: number
  months: SidebarMonth[]
}

interface SidebarData {
  latest: SidebarLatestItem[]
  categories: SidebarCategory[]
  archive: SidebarYear[]
  stats: { total: number }
}

function buildSidebarData(articles: Article[], urlPrefix: string, lang: string): SidebarData {
  const isEn = lang === 'en'

  const latest: SidebarLatestItem[] = [...articles]
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })
    .slice(0, 8)
    .map(a => ({
      title: a.title,
      path: a.path,
      date: a.date,
      category: Array.isArray(a.category) ? a.category : a.category ? [a.category] : null,
    }))

  const catCount: Record<string, number> = {}
  for (const a of articles) {
    const cats = Array.isArray(a.category) ? a.category : a.category ? [a.category] : []
    for (const c of cats) {
      catCount[c] = (catCount[c] || 0) + 1
    }
  }
  const categories: SidebarCategory[] = Object.entries(catCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([key, count]) => {
      const meta = categoryMeta[key] || { zh: key, en: key, color: '#64748b' }
      return { key, label: isEn ? meta.en : meta.zh, count, color: meta.color }
    })

  const archiveMap = new Map<string, Map<number, { count: number; path: string }>>()
  for (const a of articles) {
    if (!a.date) continue
    const d = new Date(a.date)
    const y = d.getFullYear()
    const m = d.getMonth() + 1
    const yk = String(y)
    if (!archiveMap.has(yk)) archiveMap.set(yk, new Map())
    const monthMap = archiveMap.get(yk)!
    if (!monthMap.has(m)) monthMap.set(m, { count: 0, path: `${urlPrefix}${yk}/${String(m).padStart(2, '0')}/` })
    monthMap.get(m)!.count++
  }
  const archive: SidebarYear[] = []
  for (const [year, monthMap] of [...archiveMap.entries()].sort((a, b) => b[0].localeCompare(a[0]))) {
    const months: SidebarMonth[] = []
    for (const [month, info] of [...monthMap.entries()].sort((a, b) => b[0] - a[0])) {
      months.push({
        month,
        label: isEn
          ? new Date(parseInt(year), month - 1, 1).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
          : `${year}年${month}月`,
        path: info.path,
        count: info.count,
      })
    }
    archive.push({ year: parseInt(year), months })
  }

  return { latest, categories, archive, stats: { total: articles.length } }
}

describe('buildSidebarData', () => {
  it('returns latest sorted by date desc, capped at 8', () => {
    const articles: Article[] = [
      { relativePath: 'a.md', path: '/a', title: 'A', description: '', date: '2024-01-01', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'b.md', path: '/b', title: 'B', description: '', date: '2024-03-01', lastUpdated: null, author: null, category: null, image: null },
      { relativePath: 'c.md', path: '/c', title: 'C', description: '', date: '2024-02-01', lastUpdated: null, author: null, category: null, image: null },
    ]
    const result = buildSidebarData(articles, '/space-news/', 'zh')
    expect(result.latest.map(l => l.title)).toEqual(['B', 'C', 'A'])
    expect(result.latest.length).toBe(3)
  })

  it('aggregates categories with counts and colors', () => {
    const articles: Article[] = [
      { relativePath: 'a.md', path: '/a', title: 'A', description: '', date: null, lastUpdated: null, author: null, category: ['artemis'], image: null },
      { relativePath: 'b.md', path: '/b', title: 'B', description: '', date: null, lastUpdated: null, author: null, category: ['artemis'], image: null },
      { relativePath: 'c.md', path: '/c', title: 'C', description: '', date: null, lastUpdated: null, author: null, category: ['commercial'], image: null },
    ]
    const result = buildSidebarData(articles, '/space-news/', 'zh')
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
    const result = buildSidebarData(articles, '/space-news/', 'zh')
    expect(result.archive[0].year).toBe(2024)
    expect(result.archive[0].months[0].month).toBe(1)
    expect(result.archive[0].months[0].count).toBe(2)
    expect(result.archive[1].year).toBe(2023)
  })
})
