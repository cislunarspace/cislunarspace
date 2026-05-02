import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { generateAiChatContext } from './gen-ai-chat-context.js'
import { buildChatIndex, getTranslationGapReport, buildGlossaryScan } from './build-sidebar.js'
import { walkSiteMarkdown, type MarkdownFile } from './utils/markdown-walker.js'

const require = createRequire(import.meta.url)
const categoryMeta: Record<string, { zh: string; en: string; color: string }> = require('./category-meta.json')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

// Single filesystem walk — all downstream consumers filter from this result.
const allFiles = walkSiteMarkdown(webRoot)

// ── Space News directory scan (structure only, not content) ──

interface MonthDir {
  month: number
  path: string
}

interface YearDir {
  year: string
  months: MonthDir[]
}

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

const zhYears = scanSpaceNewsDir(path.join(webRoot, 'space-news'))
const enYears = scanSpaceNewsDir(path.join(webRoot, 'en/space-news'))

const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function buildZhSidebar() {
  const children: Array<[string, string] | { text: string; link: string; collapsible: boolean; children: Array<[string, string]> }> = [
    ['/space-news/', '门户首页（最新动态与摘要）'],
    ['/space-news/archive', '按月存档（查阅全部条目）'],
  ]
  for (const { year, months } of zhYears) {
    children.push({
      text: year,
      link: `/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${year}年${m.month}月`] as [string, string]),
    })
  }
  return [{ text: '航天动态（行业新闻与按月归档）', collapsible: false, children }]
}

function buildEnSidebar() {
  const children: Array<[string, string] | { text: string; link: string; collapsible: boolean; children: Array<[string, string]> }> = [
    ['/en/space-news/', 'Portal (latest & highlights)'],
    ['/en/space-news/archive', 'Monthly archive (all posts)'],
  ]
  for (const { year, months } of enYears) {
    children.push({
      text: year,
      link: `/en/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/en/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${monthsEn[m.month - 1]} ${year}`] as [string, string]),
    })
  }
  return [{ text: 'Space news (industry & monthly archive)', collapsible: false, children }]
}

fs.writeFileSync(
  path.join(__dirname, 'sidebar.auto.json'),
  JSON.stringify({ zh: buildZhSidebar(), en: buildEnSidebar() }, null, 2),
)
console.log('Generated sidebar.auto.json')

// ── Article collection (filter + transform from allFiles) ──

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

function filesToArticles(files: MarkdownFile[], relPathPrefix: string, urlPrefix: string): Article[] {
  return files
    .filter(f => {
      const filename = path.basename(f.relPath)
      return f.relPath.startsWith(relPathPrefix) &&
             !filename.startsWith('README') &&
             f.frontmatter.draft !== true
    })
    .map(f => {
      const relFromBase = f.relPath.slice(relPathPrefix.length)
      const pagePath = (f.frontmatter.permalink as string | undefined) ||
                       (urlPrefix + relFromBase.replace(/\.md$/i, '/'))

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

const zhArticles = filesToArticles(allFiles, 'space-news/', '/space-news/')
const enArticles = filesToArticles(allFiles, 'en/space-news/', '/en/space-news/')

fs.writeFileSync(
  path.join(__dirname, 'space-news-articles.json'),
  JSON.stringify({ zh: zhArticles, en: enArticles }, null, 2),
)
console.log(`Generated space-news-articles.json (${zhArticles.length} zh, ${enArticles.length} en)`)

// ── Space News sidebar data ──

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

const sidebarData = {
  zh: buildSidebarData(zhArticles, '/space-news/', 'zh'),
  en: buildSidebarData(enArticles, '/en/space-news/', 'en'),
}

fs.writeFileSync(
  path.join(__dirname, 'space-news-sidebar-data.json'),
  JSON.stringify(sidebarData, null, 2),
)
console.log('Generated space-news-sidebar-data.json')

// ── AI chat artifacts ──

generateAiChatContext(allFiles)

const glossaryScan = buildGlossaryScan(allFiles)
const chatIndex = buildChatIndex(glossaryScan)
const chatIndexPath = path.join(__dirname, 'public', 'ai-chat-index.json')
if (!fs.existsSync(path.dirname(chatIndexPath))) {
  fs.mkdirSync(path.dirname(chatIndexPath), { recursive: true })
}
fs.writeFileSync(chatIndexPath, JSON.stringify(chatIndex))
console.log(
  `Generated hierarchical ai-chat-index.json (${chatIndex.zh.length} zh categories, ${chatIndex.en.length} en categories)`,
)

const gapReport = getTranslationGapReport(glossaryScan)
if (gapReport.total > 0) {
  console.log(`\n📋 Glossary translation gaps: ${gapReport.total} entries missing English translations`)
  for (const [cat, count] of Object.entries(gapReport.byCategory)) {
    console.log(`   ${cat}: ${count} missing`)
  }
}

fs.writeFileSync(
  path.join(__dirname, 'sidebar-glossary.auto.json'),
  JSON.stringify(glossaryScan, null, 2),
)
console.log('Generated sidebar-glossary.auto.json')
