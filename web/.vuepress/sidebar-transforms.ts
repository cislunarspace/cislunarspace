/**
 * Pure sidebar transform functions.
 * These functions have no side effects — given the same inputs, they always return the same outputs.
 */
import path from 'path'
import { parseFrontmatterAndBody } from './utils/frontmatter-parser'
import type {
  Article,
  SidebarLatestItem,
  SidebarCategory,
  SidebarMonth,
  SidebarYear,
  SidebarData,
} from './sidebar-types'
import type { MarkdownFile } from './utils/markdown-walker'

const categoryMetaDefault = { zh: '', en: '', color: '#64748b' }

export function filesToArticles(
  files: MarkdownFile[],
  relPathPrefix: string,
  urlPrefix: string,
): Article[] {
  return files
    .filter(f => {
      const filename = path.basename(f.relPath)
      const { frontmatter } = parseFrontmatterAndBody(f.content)
      return (
        f.relPath.startsWith(relPathPrefix) &&
        !filename.startsWith('README') &&
        frontmatter.draft !== true
      )
    })
    .map(f => {
      const { frontmatter } = parseFrontmatterAndBody(f.content)
      const relFromBase = f.relPath.slice(relPathPrefix.length)
      const pagePath =
        (frontmatter.permalink as string | undefined) ||
        urlPrefix + relFromBase.replace(/\.md$/i, '/')

      let imageUrl: string | null = (frontmatter.image as string | undefined) || null
      if (imageUrl && imageUrl.startsWith('./')) {
        const mdDir = '/' + f.relPath.replace(/\/[^/]+$/, '') + '/'
        imageUrl = mdDir + imageUrl.slice(2)
      }

      const rawCategory = frontmatter.category || null
      const categories = Array.isArray(rawCategory)
        ? rawCategory
        : rawCategory ? [rawCategory as string] : []

      return {
        relativePath: f.relPath,
        path: pagePath,
        title: (frontmatter.title as string | undefined) || '',
        description: (frontmatter.description as string | undefined) || '',
        date: (frontmatter.date as string | undefined) || null,
        lastUpdated: (frontmatter.lastUpdated as string | undefined) || null,
        author: (frontmatter.author as string | undefined) || null,
        category: categories.length ? categories : null,
        image: imageUrl,
      }
    })
}

export function buildSidebarData(
  articles: Article[],
  urlPrefix: string,
  lang: string,
  categoryMeta: Record<string, { zh: string; en: string; color: string }>,
): SidebarData {
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
      const meta = categoryMeta[key] || categoryMetaDefault
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
