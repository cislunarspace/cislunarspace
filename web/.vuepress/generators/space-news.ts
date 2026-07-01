import fs from 'fs'
import path from 'path'
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'
import { categoryMeta } from '../taxonomy/adapters/news-categories.ts'
import type {
  Article,
  SidebarLatestItem,
  SidebarCategory,
  SidebarMonth,
  SidebarYear,
  SidebarData,
  MonthDir,
  YearDir,
} from '../sidebar/types.ts'

const categoryMetaDefault = { zh: '', en: '', color: '#64748b' }
const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const localeSidebarConfig = {
  zh: {
    prefix: '/space-news/',
    links: [['/space-news/', '门户首页（最新动态与摘要）'], ['/space-news/archive', '按月存档（查阅全部条目）']] as Array<[string, string]>,
    monthLabel: (year: string, month: number) => `${year}年${month}月`,
    title: '航天动态（行业新闻与按月归档）',
  },
  en: {
    prefix: '/en/space-news/',
    links: [['/en/space-news/', 'Portal (latest & highlights)'], ['/en/space-news/archive', 'Monthly archive (all posts)']] as Array<[string, string]>,
    monthLabel: (_year: string, month: number) => `${monthsEn[month - 1]} ${_year}`,
    title: 'Space news (industry & monthly archive)',
  },
} as const

function scanSpaceNewsDir(baseDir: string): YearDir[] {
  const years: YearDir[] = []
  if (!fs.existsSync(baseDir)) return years

  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const yearMatch = entry.name.match(/^(\d{4})$/)
    if (!yearMatch) continue
    const year = yearMatch[1]
    const yearPath = path.join(baseDir, entry.name)
    const months: MonthDir[] = []

    const monthEntries = fs.readdirSync(yearPath, { withFileTypes: true })
    for (const monthEntry of monthEntries) {
      if (!monthEntry.isDirectory()) continue
      const monthMatch = monthEntry.name.match(/^(\d{2})$/)
      if (!monthMatch) continue
      const month = parseInt(monthMatch[1], 10)
      const monthDir = path.join(yearPath, monthEntry.name)
      if (fs.existsSync(path.join(monthDir, 'README.md'))) {
        months.push({ month, path: monthDir })
      }
    }
    if (months.length > 0) {
      months.sort((a, b) => b.month - a.month)
      years.push({ year, months })
    }
  }
  years.sort((a, b) => parseInt(b.year) - parseInt(a.year))
  return years
}

function buildLocaleSidebar(years: YearDir[], locale: 'zh' | 'en') {
  const cfg = localeSidebarConfig[locale]
  const children: Array<[string, string] | { text: string; link: string; collapsible: boolean; children: Array<[string, string]> }> = [...cfg.links]
  for (const { year, months } of years) {
    children.push({
      text: year,
      link: `${cfg.prefix}${year}/`,
      collapsible: true,
      children: months.map(m => [`${cfg.prefix}${year}/${String(m.month).padStart(2, '0')}/`, cfg.monthLabel(year, m.month)] as [string, string]),
    })
  }
  return [{ text: cfg.title, collapsible: false, children }]
}

export function filesToArticles(
  files: MarkdownFile[],
  relPathPrefix: string,
  urlPrefix: string,
): Article[] {
  return files
    .filter(f => {
      const filename = path.basename(f.relPath)
      if (!f.relPath.startsWith(relPathPrefix) || filename.startsWith('README')) return false
      const { frontmatter } = parseFrontmatterAndBody(f.content)
      return frontmatter.draft !== true
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
  newsCategoryMeta: Record<string, { zh: string; en: string; color: string }>,
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
      const meta = newsCategoryMeta[key] || categoryMetaDefault
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

export function generateSpaceNewsArtifacts(files: MarkdownFile[], webRoot: string, outDir: string): void {
  const zhYears = scanSpaceNewsDir(path.join(webRoot, 'space-news'))
  const enYears = scanSpaceNewsDir(path.join(webRoot, 'en/space-news'))

  fs.writeFileSync(
    path.join(outDir, 'sidebar.auto.json'),
    JSON.stringify({ zh: buildLocaleSidebar(zhYears, 'zh'), en: buildLocaleSidebar(enYears, 'en') }, null, 2),
  )
  console.log('Generated sidebar.auto.json')

  const zhArticles = filesToArticles(files, 'space-news/', '/space-news/')
  const enArticles = filesToArticles(files, 'en/space-news/', '/en/space-news/')

  fs.writeFileSync(
    path.join(outDir, 'space-news-articles.json'),
    JSON.stringify({ zh: zhArticles, en: enArticles }, null, 2),
  )
  console.log(`Generated space-news-articles.json (${zhArticles.length} zh, ${enArticles.length} en)`)

  const sidebarData = {
    zh: buildSidebarData(zhArticles, '/space-news/', 'zh', categoryMeta),
    en: buildSidebarData(enArticles, '/en/space-news/', 'en', categoryMeta),
  }

  fs.writeFileSync(
    path.join(outDir, 'space-news-sidebar-data.json'),
    JSON.stringify(sidebarData, null, 2),
  )
  console.log('Generated space-news-sidebar-data.json')
}
