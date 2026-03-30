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
      title: year,
      link: `/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${year}年${m.month}月`]),
    })
  }
  return [{ title: 'Space News', collapsible: false, children }]
}

function buildEnSidebar() {
  const children = [
    ['/en/space-news/', 'Home'],
    ['/en/space-news/archive', 'Archive by date'],
  ]
  for (const { year, months } of enYears) {
    children.push({
      title: year,
      link: `/en/space-news/${year}/`,
      collapsible: true,
      children: months.map(m => [`/en/space-news/${year}/${String(m.month).padStart(2, '0')}/`, `${monthsEn[m.month - 1]} ${year}`]),
    })
  }
  return [{ title: 'Space News', collapsible: false, children }]
}

fs.writeFileSync(
  path.join(__dirname, 'sidebar.auto.json'),
  JSON.stringify({ zh: buildZhSidebar(), en: buildEnSidebar() }, null, 2),
)
console.log('Generated sidebar.auto.json')
