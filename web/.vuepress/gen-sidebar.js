import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { generateAiChatContext } from './gen-ai-chat-context.js'

const require = createRequire(import.meta.url)
const categoryMeta = require('./category-meta.json')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function scanSpaceNewsDir(baseDir) {
  const years = []
  if (!fs.existsSync(baseDir)) return years

  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const yearMatch = entry.name.match(/^(\d{4})$/)
    if (!yearMatch) continue
    const year = yearMatch[1]
    const yearPath = path.join(baseDir, entry.name)
    const months = []

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
  years.sort((a, b) => b.year - a.year)
  return years
}

const zhYears = scanSpaceNewsDir(path.join(__dirname, '../space-news'))
const enYears = scanSpaceNewsDir(path.join(__dirname, '../en/space-news'))

const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function buildZhSidebar() {
  const children = [
    ['/space-news/', '门户首页（最新动态与摘要）'],
    ['/space-news/archive', '按月存档（查阅全部条目）'],
  ]
  for (const { year, months } of zhYears) {
    children.push({
      text: year,
      link: `/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${year}年${m.month}月`]),
    })
  }
  return [{ text: '航天动态（行业新闻与按月归档）', collapsible: false, children }]
}

function buildEnSidebar() {
  const children = [
    ['/en/space-news/', 'Portal (latest & highlights)'],
    ['/en/space-news/archive', 'Monthly archive (all posts)'],
  ]
  for (const { year, months } of enYears) {
    children.push({
      text: year,
      link: `/en/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/en/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${monthsEn[m.month - 1]} ${year}`]),
    })
  }
  return [{ text: 'Space news (industry & monthly archive)', collapsible: false, children }]
}

fs.writeFileSync(
  path.join(__dirname, 'sidebar.auto.json'),
  JSON.stringify({ zh: buildZhSidebar(), en: buildEnSidebar() }, null, 2),
)
console.log('Generated sidebar.auto.json')

/**
 * Lightweight frontmatter parser. Handles flat key-value pairs and simple lists only.
 * Does NOT support: nested objects, multi-line strings, YAML anchors, complex types.
 * If frontmatter becomes more complex, switch to a proper YAML parser (e.g., gray-matter).
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const fm = {}
  const lines = match[1].split('\n')
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([\w][\w.-]*):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if (val === '') {
      // Check for multi-line list (e.g. `related:\n  - item1\n  - item2`)
      const items = []
      let j = i + 1
      while (j < lines.length) {
        const itemMatch = lines[j].match(/^\s+-\s+(.+)$/)
        if (!itemMatch) break
        items.push(itemMatch[1].trim().replace(/^['"]|['"]$/g, ''))
        j++
      }
      if (items.length > 0) {
        fm[key] = items
        i = j - 1
        continue
      }
    }
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (val === 'true') val = true
    else if (val === 'false') val = false
    else if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
    }
    fm[key] = val
  }
  return fm
}

function collectArticles(baseDir, urlPrefix) {
  const articles = []
  if (!fs.existsSync(baseDir)) return articles

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (/\.md$/i.test(entry.name) && !/^README/i.test(entry.name)) {
        const content = fs.readFileSync(full, 'utf-8')
        const fm = parseFrontmatter(content)
        if (fm.draft === true) continue
        const relativePath = path.relative(path.join(__dirname, '..'), full).replace(/\\/g, '/')
        const relFromBase = path.relative(baseDir, full).replace(/\\/g, '/')
        const pagePath = fm.permalink || (urlPrefix + relFromBase.replace(/\.md$/i, '/'))
        // Resolve relative image path to absolute URL based on md file location
        let imageUrl = fm.image || null
        if (imageUrl && imageUrl.startsWith('./')) {
          const mdDir = '/' + path.relative(path.join(__dirname, '..'), dir).replace(/\\/g, '/') + '/'
          imageUrl = mdDir + imageUrl.slice(2)
        }

        const rawCategory = fm.category || null
        const categories = Array.isArray(rawCategory)
          ? rawCategory
          : rawCategory ? [rawCategory] : []

        articles.push({
          relativePath,
          path: pagePath,
          title: fm.title || '',
          description: fm.description || '',
          date: fm.date || null,
          lastUpdated: fm.lastUpdated || null,
          author: fm.author || null,
          category: categories.length ? categories : null,
          image: imageUrl,
        })
      }
    }
  }

  walk(baseDir)
  return articles
}

const zhArticles = collectArticles(
  path.join(__dirname, '../space-news'),
  '/space-news/',
)
const enArticles = collectArticles(
  path.join(__dirname, '../en/space-news'),
  '/en/space-news/',
)

fs.writeFileSync(
  path.join(__dirname, 'space-news-articles.json'),
  JSON.stringify({ zh: zhArticles, en: enArticles }, null, 2),
)
console.log(`Generated space-news-articles.json (${zhArticles.length} zh, ${enArticles.length} en)`)

// ============================================
// 生成 Space News 自定义侧边栏数据
// ============================================

function buildSidebarData(articles, urlPrefix, lang) {
  const isEn = lang === 'en'

  // 1. 最新文章（最近 8 篇，按日期倒序）
  const latest = [...articles]
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

  // 2. 分类统计（按文章数倒序，取前 10）
  const catCount = {}
  for (const a of articles) {
    const cats = Array.isArray(a.category) ? a.category : a.category ? [a.category] : []
    for (const c of cats) {
      catCount[c] = (catCount[c] || 0) + 1
    }
  }
  const categories = Object.entries(catCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([key, count]) => {
      const meta = categoryMeta[key] || { zh: key, en: key, color: '#64748b' }
      return {
        key,
        label: isEn ? meta.en : meta.zh,
        count,
        color: meta.color,
      }
    })

  // 3. 年月归档
  const archiveMap = new Map()
  for (const a of articles) {
    if (!a.date) continue
    const d = new Date(a.date)
    const y = d.getFullYear()
    const m = d.getMonth() + 1
    const yk = String(y)
    if (!archiveMap.has(yk)) archiveMap.set(yk, new Map())
    const monthMap = archiveMap.get(yk)
    if (!monthMap.has(m)) monthMap.set(m, { count: 0, path: `${urlPrefix}${yk}/${String(m).padStart(2, '0')}/` })
    monthMap.get(m).count++
  }
  const archive = []
  for (const [year, monthMap] of [...archiveMap.entries()].sort((a, b) => b[0].localeCompare(a[0]))) {
    const months = []
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

  // 4. 统计
  const stats = { total: articles.length }

  return { latest, categories, archive, stats }
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

generateAiChatContext()
