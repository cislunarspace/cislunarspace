/**
 * Sidebar orchestrator — thin coordinator between intake modules.
 *
 * Generates:
 * 1. VuePress sidebar configs (zh/en)
 * 2. Hierarchical AI chat index (zh/en)
 * 3. Translation gap report
 *
 * All heavy logic lives in intakes/. This file wires them together and
 * re-exports for backward compatibility with gen-sidebar.ts and config.ts.
 */
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { glossaryCategories } from './glossary-meta.ts'
import { sidebarSections, type SidebarSection, type SidebarEntry } from './sidebar-data.ts'
import { walkSiteMarkdown, type MarkdownFile } from './utils/markdown-walker.ts'
import type { VueSidebarItem } from './sidebar-intake.ts'

import { buildGlossaryScan } from './intakes/glossary-intake.ts'
import { buildWayfindingIntake } from './intakes/wayfinding-intake.ts'
import { buildChatIndexIntake as buildChatIndex } from './intakes/chat-index-intake.ts'
import { buildTranslationGapIntake as getTranslationGapReport } from './intakes/translation-gap-intake.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

// ── Re-exports for backward compatibility ────────────────────────────────────

export { buildGlossaryScan }
export { buildChatIndex }
export { getTranslationGapReport }

// ── Section sidebar builder (kept local — pure orchestrator machinery) ────────

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

// ── Glossary sidebar ──────────────────────────────────────────────────────────

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

// ── Main builder ──────────────────────────────────────────────────────────────

export function buildSidebarConfigs(
  scan?: ReturnType<typeof buildGlossaryScan>,
): { zh: Record<string, any>; en: Record<string, any> } {
  // If scan not provided, read the pre-generated file (written by gen-sidebar.ts).
  // Fall back to live scan only when the pre-generated file is missing
  // (e.g., fresh clone before first gen-sidebar run).
  const effectiveScan = scan ?? (() => {
    const preGenPath = path.join(__dirname, 'sidebar-glossary.auto.json')
    if (fs.existsSync(preGenPath)) {
      try {
        return JSON.parse(fs.readFileSync(preGenPath, 'utf-8'))
      } catch {
        // corrupt file — fall through to live scan
      }
    }
    console.warn('[build-sidebar] sidebar-glossary.auto.json not found, falling back to live scan')
    return buildGlossaryScan(walkSiteMarkdown(webRoot))
  })()

  const wayfinding = buildWayfindingIntake()

  const autoSidebarPath = path.join(__dirname, 'sidebar.auto.json')
  let autoSidebar: { zh: any[]; en: any[] } = { zh: [], en: [] }
  if (fs.existsSync(autoSidebarPath)) {
    autoSidebar = JSON.parse(fs.readFileSync(autoSidebarPath, 'utf-8'))
  }

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
    '/blue-team-research/': [wayfinding.zh, sectionSidebars['blue-team-research'].zh],
    '/space-news/': [wayfinding.zh, ...autoSidebar.zh],
    '/en/space-news/': [wayfinding.zh, ...autoSidebar.zh],
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
    '/en/blue-team-research/': [wayfinding.en, sectionSidebars['blue-team-research'].en],
    '/en/space-news/': [wayfinding.en, ...autoSidebar.en],
    '/en/satellite-simulation/': false,
  }

  return { zh: zhConfig, en: enConfig }
}
