/**
 * Unified sidebar builder — single source of truth for both locales.
 *
 * Generates:
 * 1. VuePress sidebar configs (zh/en)
 * 2. Hierarchical AI chat index (zh/en)
 * 3. Translation gap report
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { glossaryCategories, type GlossaryCategoryMeta } from './glossary-meta.js'
import { sidebarSections, type SidebarSection, type SidebarEntry } from './sidebar-data.js'
import { type MarkdownFile } from './utils/markdown-walker.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

// ── Types ──

interface VueSidebarItem {
  text: string
  link?: string
  collapsible?: boolean
  children?: Array<string | VueSidebarItem>
}

interface ChatIndexEntry {
  path: string
  title: string
}

interface ChatIndexCategory {
  category: string
  entries: ChatIndexEntry[]
}

interface TranslationGap {
  category: string
  slug: string
  zhTitle: string
}

export interface GlossaryScanEntry {
  slug: string
  title: string
  path: string
  category: GlossaryCategoryMeta
}

export interface GlossaryScan {
  zh: { entries: GlossaryScanEntry[]; missing: TranslationGap[] }
  en: { entries: GlossaryScanEntry[] }
}

// ── Glossary scan (pure transform on pre-walked files) ──

export function buildGlossaryScan(files: MarkdownFile[]): GlossaryScan {
  const isReadme = (f: MarkdownFile) => path.basename(f.relPath).startsWith('README')

  const zhFiles = files.filter(f => f.relPath.startsWith('glossary/') && !isReadme(f))
  const enFiles = files.filter(f => f.relPath.startsWith('en/glossary/') && !isReadme(f))

  const enRelPaths = new Set(enFiles.map(f => f.relPath))

  const zhEntries: GlossaryScanEntry[] = []
  const missing: TranslationGap[] = []

  for (const file of zhFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    // relPath: "glossary/<categorySlug>/<slug>.md"
    const parts = file.relPath.split('/')
    if (parts.length !== 3) continue
    const [, categorySlug, filename] = parts
    const slug = filename.replace(/\.md$/i, '')
    const category = glossaryCategories.find(c => c.slug === categorySlug)
    if (!category) continue

    const title = (file.frontmatter.title && String(file.frontmatter.title)) || slug
    zhEntries.push({ slug, title, path: `/glossary/${categorySlug}/${slug}/`, category })

    if (!enRelPaths.has(`en/glossary/${categorySlug}/${filename}`)) {
      missing.push({ category: category.label.zh, slug, zhTitle: title })
    }
  }

  const enEntries: GlossaryScanEntry[] = []

  for (const file of enFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    // relPath: "en/glossary/<categorySlug>/<slug>.md"
    const parts = file.relPath.split('/')
    if (parts.length !== 4) continue
    const [, , categorySlug, filename] = parts
    const slug = filename.replace(/\.md$/i, '')
    const category = glossaryCategories.find(c => c.slug === categorySlug)
    if (!category) continue

    const title = (file.frontmatter.title && String(file.frontmatter.title)) || slug
    enEntries.push({ slug, title, path: `/en/glossary/${categorySlug}/${slug}/`, category })
  }

  return { zh: { entries: zhEntries, missing }, en: { entries: enEntries } }
}

// ── Wayfinding groups ──

function buildWayfindingGroup(locale: 'zh' | 'en') {
  const items = locale === 'en'
    ? [
        { link: '/en/', text: 'Home (overview)', children: [] as string[] },
        { link: '/en/what-is-cislunarspace/', text: 'Intro · what is cislunar space', children: [] as string[] },
        { link: '/en/cislunar-orbits/', text: 'Orbits · spacecraft trajectories', children: [] as string[] },
        { link: '/en/research-frontiers/', text: 'Frontiers · directions & labs', children: [] as string[] },
        { link: '/en/glossary/', text: 'Glossary · terms & definitions', children: [] as string[] },
        { link: '/en/resources-tools/', text: 'Tools · data & code', children: [] as string[] },
        { link: '/en/space-news/', text: 'News · space industry archive', children: [] as string[] },
        { link: '/en/blue-team-research/', text: 'Topic · blue-team research', children: [] as string[] },
      ]
    : [
        { link: '/', text: '首页（知识总览）', children: [] as string[] },
        { link: '/what-is-cislunarspace/', text: '入门 · 地月空间是什么', children: [] as string[] },
        { link: '/cislunar-orbits/', text: '轨道 · 飞行器运行轨道', children: [] as string[] },
        { link: '/research-frontiers/', text: '前沿 · 科研方向与机构', children: [] as string[] },
        { link: '/glossary/', text: '术语 · 定义与概念', children: [] as string[] },
        { link: '/resources-tools/', text: '工具 · 数据与代码', children: [] as string[] },
        { link: '/space-news/', text: '动态 · 航天新闻归档', children: [] as string[] },
        { link: '/blue-team-research/', text: '专题 · 蓝军研究', children: [] as string[] },
      ]

  return {
    text: locale === 'en' ? 'Site map' : '全站导览',
    collapsible: false,
    children: items,
  }
}

// ── Non-glossary section builder ──

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

// ── Main builder: sidebar configs ──

export function buildSidebarConfigs(scan: GlossaryScan): { zh: Record<string, any>; en: Record<string, any> } {
  const wayfindingZh = buildWayfindingGroup('zh')
  const wayfindingEn = buildWayfindingGroup('en')

  const autoSidebarPath = path.join(__dirname, 'sidebar.auto.json')
  let autoSidebar: { zh: any[]; en: any[] } = { zh: [], en: [] }
  if (fs.existsSync(autoSidebarPath)) {
    autoSidebar = JSON.parse(fs.readFileSync(autoSidebarPath, 'utf-8'))
  }

  function buildGlossarySidebar(locale: 'zh' | 'en'): VueSidebarItem {
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

  const sectionSidebars: Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> = {}
  for (const section of sidebarSections) {
    sectionSidebars[section.slug] = {
      zh: buildSectionSidebar(section, 'zh'),
      en: buildSectionSidebar(section, 'en'),
    }
  }

  const zhConfig: Record<string, any> = {
    '/': [wayfindingZh],
    '/what-is-cislunarspace/': [wayfindingZh, sectionSidebars['what-is-cislunarspace'].zh],
    '/cislunar-orbits/': [wayfindingZh, sectionSidebars['cislunar-orbits'].zh],
    '/research-frontiers/': [wayfindingZh, sectionSidebars['research-frontiers'].zh],
    '/glossary/': [wayfindingZh, buildGlossarySidebar('zh')],
    '/background/': [wayfindingZh, sectionSidebars['background'].zh],
    '/resources-tools/': [wayfindingZh, sectionSidebars['resources-tools'].zh],
    '/blue-team-research/': [wayfindingZh, sectionSidebars['blue-team-research'].zh],
    '/space-news/': [wayfindingZh, ...autoSidebar.zh],
    '/en/space-news/': [wayfindingZh, ...autoSidebar.zh],
    '/satellite-simulation/': false,
  }

  const enConfig: Record<string, any> = {
    '/en/': [wayfindingEn],
    '/en/what-is-cislunarspace/': [wayfindingEn, sectionSidebars['what-is-cislunarspace'].en],
    '/en/cislunar-orbits/': [wayfindingEn, sectionSidebars['cislunar-orbits'].en],
    '/en/research-frontiers/': [wayfindingEn, sectionSidebars['research-frontiers'].en],
    '/en/glossary/': [wayfindingEn, buildGlossarySidebar('en')],
    '/en/background/': [wayfindingEn, sectionSidebars['background'].en],
    '/en/resources-tools/': [wayfindingEn, sectionSidebars['resources-tools'].en],
    '/en/blue-team-research/': [wayfindingEn, sectionSidebars['blue-team-research'].en],
    '/en/space-news/': [wayfindingEn, ...autoSidebar.en],
    '/en/satellite-simulation/': false,
  }

  return { zh: zhConfig, en: enConfig }
}

// ── Chat index builder ──

export function buildChatIndex(scan: GlossaryScan): { zh: ChatIndexCategory[]; en: ChatIndexCategory[] } {
  function buildLocaleIndex(locale: 'zh' | 'en'): ChatIndexCategory[] {
    const categories: ChatIndexCategory[] = []
    const prefix = locale === 'en' ? '/en' : ''
    const entries = locale === 'en' ? scan.en.entries : scan.zh.entries

    const byCategory = new Map<string, ChatIndexEntry[]>()
    for (const entry of entries) {
      const catLabel = entry.category.label[locale]
      if (!byCategory.has(catLabel)) byCategory.set(catLabel, [])
      byCategory.get(catLabel)!.push({ path: entry.path, title: entry.title })
    }

    if (locale === 'en') {
      for (const gap of scan.zh.missing) {
        const catMeta = glossaryCategories.find(c => c.label.zh === gap.category)
        if (!catMeta) continue
        const catLabel = catMeta.label.en
        const existing = byCategory.get(catLabel) || []
        const gapPath = `/en/glossary/${catMeta.slug}/${gap.slug}/`
        if (!existing.some(e => e.path === gapPath)) {
          existing.push({ path: gapPath, title: `${gap.zhTitle} (needs translation)` })
          byCategory.set(catLabel, existing)
        }
      }
    }

    for (const catMeta of glossaryCategories) {
      const catLabel = catMeta.label[locale]
      const catEntries = byCategory.get(catLabel) || []
      if (catEntries.length > 0) {
        categories.push({ category: catLabel, entries: catEntries })
      }
    }

    for (const section of sidebarSections) {
      const sectionEntries: ChatIndexEntry[] = []
      const sectionPath = `${prefix}/${section.slug}/`
      sectionEntries.push({ path: sectionPath, title: section.label[locale] })

      function collectPaths(children: SidebarEntry[], basePath: string) {
        for (const entry of children) {
          if (entry.locales && !entry.locales.includes(locale)) continue
          if (entry.slug === undefined) {
            if (entry.children) collectPaths(entry.children, basePath)
            continue
          }
          if (entry.slug === '') continue
          const entryPath = `${basePath}${entry.slug}/`
          sectionEntries.push({ path: entryPath, title: entry.label[locale] })
          if (entry.children) collectPaths(entry.children, entryPath)
        }
      }

      const childrenSource = section.childrenByLocale
        ? section.childrenByLocale[locale]
        : section.children
      collectPaths(childrenSource, sectionPath)

      categories.push({ category: section.label[locale], entries: sectionEntries })
    }

    return categories
  }

  return {
    zh: buildLocaleIndex('zh'),
    en: buildLocaleIndex('en'),
  }
}

// ── Translation gap report ──

export function getTranslationGapReport(scan: GlossaryScan): { total: number; byCategory: Map<string, number>; gaps: TranslationGap[] } {
  const { missing } = scan.zh
  const byCategory = new Map<string, number>()
  for (const gap of missing) {
    byCategory.set(gap.category, (byCategory.get(gap.category) || 0) + 1)
  }
  return { total: missing.length, byCategory, gaps: missing }
}
