import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { generateAiChatContext } from './gen-ai-chat-context.ts'
import { buildChatIndex, getTranslationGapReport, buildGlossaryScan } from './build-sidebar.ts'
import { walkSiteMarkdown } from './utils/markdown-walker.ts'
import { filesToArticles, buildSidebarData } from './sidebar-transforms.ts'

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

const zhArticles = filesToArticles(allFiles, 'space-news/', '/space-news/')
const enArticles = filesToArticles(allFiles, 'en/space-news/', '/en/space-news/')

fs.writeFileSync(
  path.join(__dirname, 'space-news-articles.json'),
  JSON.stringify({ zh: zhArticles, en: enArticles }, null, 2),
)
console.log(`Generated space-news-articles.json (${zhArticles.length} zh, ${enArticles.length} en)`)

// ── Space News sidebar data ──

const sidebarData = {
  zh: buildSidebarData(zhArticles, '/space-news/', 'zh', categoryMeta),
  en: buildSidebarData(enArticles, '/en/space-news/', 'en', categoryMeta),
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
