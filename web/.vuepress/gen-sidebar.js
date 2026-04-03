import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

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
    ['/space-news/', '首页'],
    ['/space-news/archive', '按日期查阅'],
  ]
  for (const { year, months } of zhYears) {
    children.push({
      text: year,
      link: `/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${year}年${m.month}月`]),
    })
  }
  return [{ text: 'Space News', collapsible: false, children }]
}

function buildEnSidebar() {
  const children = [
    ['/en/space-news/', 'Home'],
    ['/en/space-news/archive', 'Archive by date'],
  ]
  for (const { year, months } of enYears) {
    children.push({
      text: year,
      link: `/en/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/en/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${monthsEn[m.month - 1]} ${year}`]),
    })
  }
  return [{ text: 'Space News', collapsible: false, children }]
}

fs.writeFileSync(
  path.join(__dirname, 'sidebar.auto.json'),
  JSON.stringify({ zh: buildZhSidebar(), en: buildEnSidebar() }, null, 2),
)
console.log('Generated sidebar.auto.json')

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const fm = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (val === 'true') val = true
    else if (val === 'false') val = false
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
        const pagePath = fm.permalink || (urlPrefix + entry.name.replace(/\.md$/i, '/'))
        // Resolve relative image path to absolute URL based on md file location
        let imageUrl = fm.image || null
        if (imageUrl && imageUrl.startsWith('./')) {
          const mdDir = '/' + path.relative(path.join(__dirname, '..'), dir).replace(/\\/g, '/') + '/'
          imageUrl = mdDir + imageUrl.slice(2)
        }

        articles.push({
          relativePath,
          path: pagePath,
          title: fm.title || '',
          description: fm.description || '',
          date: fm.date || null,
          lastUpdated: fm.lastUpdated || null,
          author: fm.author || null,
          category: fm.category || null,
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
