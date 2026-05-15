import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import { generateAiChatContext } from './gen-ai-chat-context.ts'
import { walkSiteMarkdown } from './utils/markdown-walker.ts'
import { filesToArticles, buildSidebarData } from './sidebar-transforms.ts'
import { glossaryCategories } from './glossary-meta.ts'
import { sidebarSections, type SidebarSection, type SidebarEntry } from './sidebar-data.ts'
import type { VueSidebarItem } from './sidebar-types.ts'
import { buildGlossaryScan } from './intakes/glossary-intake.ts'
import { buildWayfindingIntake } from './intakes/wayfinding-intake.ts'
import { buildChatIndexIntake as buildChatIndex } from './intakes/chat-index-intake.ts'
import { buildTranslationGapIntake as getTranslationGapReport } from './intakes/translation-gap-intake.ts'

const require = createRequire(import.meta.url)
const categoryMeta: Record<string, { zh: string; en: string; color: string }> = require('./category-meta.json')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

// ── Re-exports for backward compatibility ────────────────────────────────────

export { buildGlossaryScan }
export { buildChatIndex }
export { getTranslationGapReport }

// ── Sidebar builder helpers (moved from build-sidebar.ts) ──────────────────

function buildSectionChildren(
  children: SidebarEntry[],
  basePath: string,
  locale: 'zh' | 'en',
): Array<string | VueSidebarItem> {
  const result: Array<string | VueSidebarItem> = []

  for (const child of children) {
    if (child.locales && !child.locales.includes(locale)) continue

    const label = child.label[locale]

    if (child.slug === undefined) {
      const builtChildren = child.children ? buildSectionChildren(child.children, basePath, locale) : []
      result.push({
        text: label,
        collapsible: child.collapsible ?? true,
        children: builtChildren,
      })
      continue
    }

    if (child.slug === '') {
      result.push(`${basePath}`)
      continue
    }

    const childPath = `${basePath}${child.slug}/`

    if (child.children && child.children.length > 0) {
      const builtChildren = buildSectionChildren(child.children, childPath, locale)
      result.push({
        text: label,
        link: childPath,
        collapsible: child.collapsible ?? true,
        children: builtChildren,
      })
    } else {
      result.push(childPath)
    }
  }

  return result
}

function buildSectionSidebar(section: SidebarSection, locale: 'zh' | 'en'): VueSidebarItem {
  const prefix = locale === 'en' ? '/en/' : '/'
  const basePath = `${prefix}${section.slug}/`

  const childrenSource = section.childrenByLocale
    ? section.childrenByLocale[locale]
    : section.children

  const children: Array<string | VueSidebarItem> = [
    basePath,
    ...buildSectionChildren(childrenSource, basePath, locale),
  ]

  return {
    text: section.label[locale],
    collapsible: false,
    children,
  }
}

function buildGlossarySidebar(
  scan: ReturnType<typeof buildGlossaryScan>,
  locale: 'zh' | 'en',
): VueSidebarItem {
  const prefix = locale === 'en' ? '/en' : ''
  const entries = locale === 'en' ? scan.en.entries : scan.zh.entries

  const byCategory = new Map<string, Array<{ slug: string; title: string; path: string }>>()
  for (const entry of entries) {
    const catSlug = entry.category.slug
    if (!byCategory.has(catSlug)) byCategory.set(catSlug, [])
    byCategory.get(catSlug)!.push(entry)
  }

  if (locale === 'en') {
    for (const gap of scan.zh.missing) {
      const catMeta = glossaryCategories.find(c => c.label.zh === gap.category)
      if (!catMeta) continue
      const enCatEntries = byCategory.get(catMeta.slug) || []
      if (!enCatEntries.some(e => e.slug === gap.slug)) {
        enCatEntries.push({
          slug: gap.slug,
          title: `${gap.zhTitle} (needs translation)`,
          path: `/en/glossary/${catMeta.slug}/${gap.slug}/`,
        })
        byCategory.set(catMeta.slug, enCatEntries)
      }
    }
  }

  const glossaryLabel = locale === 'en'
    ? 'Cislunar glossary (terms & definitions)'
    : '地月空间术语词典（定义与概念检索）'

  const categoryChildren: Array<string | VueSidebarItem> = [`${prefix}/glossary/`]

  for (const catMeta of glossaryCategories) {
    const catEntries = byCategory.get(catMeta.slug) || []
    if (catEntries.length === 0) continue
    categoryChildren.push({
      text: catMeta.label[locale],
      collapsible: true,
      children: catEntries.map(e => e.path),
    })
  }

  return { text: glossaryLabel, collapsible: false, children: categoryChildren }
}

// ── Main orchestrator (no JSON file fallback) ─────────────────────────────────

export function buildSidebarConfigs(
  scan?: ReturnType<typeof buildGlossaryScan>,
): { zh: Record<string, any>; en: Record<string, any> } {
  const effectiveScan = scan ?? buildGlossaryScan(walkSiteMarkdown(webRoot))

  const wayfinding = buildWayfindingIntake()

  const sectionSidebars: Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> = {}
  for (const section of sidebarSections) {
    sectionSidebars[section.slug] = {
      zh: buildSectionSidebar(section, 'zh'),
      en: buildSectionSidebar(section, 'en'),
    }
  }

  const glossaryZh = buildGlossarySidebar(effectiveScan, 'zh')
  const glossaryEn = buildGlossarySidebar(effectiveScan, 'en')

  const zhConfig: Record<string, any> = {
    '/': [wayfinding.zh],
    '/what-is-cislunarspace/': [wayfinding.zh, sectionSidebars['what-is-cislunarspace'].zh],
    '/cislunar-orbits/': [wayfinding.zh, sectionSidebars['cislunar-orbits'].zh],
    '/research-frontiers/': [wayfinding.zh, sectionSidebars['research-frontiers'].zh],
    '/glossary/': [wayfinding.zh, glossaryZh],
    '/background/': [wayfinding.zh, sectionSidebars['background'].zh],
    '/resources-tools/': [wayfinding.zh, sectionSidebars['resources-tools'].zh],
    '/space-news/': [wayfinding.zh],
    '/en/space-news/': [wayfinding.zh],
    '/satellite-simulation/': false,
  }

  const enConfig: Record<string, any> = {
    '/en/': [wayfinding.en],
    '/en/what-is-cislunarspace/': [wayfinding.en, sectionSidebars['what-is-cislunarspace'].en],
    '/en/cislunar-orbits/': [wayfinding.en, sectionSidebars['cislunar-orbits'].en],
    '/en/research-frontiers/': [wayfinding.en, sectionSidebars['research-frontiers'].en],
    '/en/glossary/': [wayfinding.en, glossaryEn],
    '/en/background/': [wayfinding.en, sectionSidebars['background'].en],
    '/en/resources-tools/': [wayfinding.en, sectionSidebars['resources-tools'].en],
    '/en/space-news/': [wayfinding.en],
    '/en/satellite-simulation/': false,
  }

  return { zh: zhConfig, en: enConfig }
}

// ── Entry point: generate all artifacts ────────────────────────────────────────

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

const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function buildZhSidebar(zhYears: YearDir[]) {
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

function buildEnSidebar(enYears: YearDir[]) {
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

export function runGenerationCli(): void {
  const allFiles = walkSiteMarkdown(webRoot)
  const zhYears = scanSpaceNewsDir(path.join(webRoot, 'space-news'))
  const enYears = scanSpaceNewsDir(path.join(webRoot, 'en/space-news'))

  fs.writeFileSync(
    path.join(__dirname, 'sidebar.auto.json'),
    JSON.stringify({ zh: buildZhSidebar(zhYears), en: buildEnSidebar(enYears) }, null, 2),
  )
  console.log('Generated sidebar.auto.json')

  const zhArticles = filesToArticles(allFiles, 'space-news/', '/space-news/')
  const enArticles = filesToArticles(allFiles, 'en/space-news/', '/en/space-news/')

  fs.writeFileSync(
    path.join(__dirname, 'space-news-articles.json'),
    JSON.stringify({ zh: zhArticles, en: enArticles }, null, 2),
  )
  console.log(`Generated space-news-articles.json (${zhArticles.length} zh, ${enArticles.length} en)`)

  const sidebarData = {
    zh: buildSidebarData(zhArticles, '/space-news/', 'zh', categoryMeta),
    en: buildSidebarData(enArticles, '/en/space-news/', 'en', categoryMeta),
  }

  fs.writeFileSync(
    path.join(__dirname, 'space-news-sidebar-data.json'),
    JSON.stringify(sidebarData, null, 2),
  )
  console.log('Generated space-news-sidebar-data.json')

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
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  runGenerationCli()
}
