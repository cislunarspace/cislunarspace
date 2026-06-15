import path from 'path'
import { fileURLToPath } from 'url'
import { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import { buildWayfindingIntake as buildWayfinding } from '../taxonomy/adapters/wayfinding.ts'
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts'
import { buildAllSectionSidebars } from '../taxonomy/adapters/sidebar-sections.ts'
import { taxonomy } from '../taxonomy/index.ts'
import { walkSiteMarkdown } from '../utils/markdown-walker.ts'
import type { VueSidebarItem } from './types.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..', '..')

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

export function buildSidebarConfigs(
  scan?: ReturnType<typeof buildGlossaryScan>,
): { zh: Record<string, any>; en: Record<string, any> } {
  const effectiveScan = scan ?? buildGlossaryScan(walkSiteMarkdown(webRoot))

  const wayfinding = buildWayfinding()
  const sectionSidebars = buildAllSectionSidebars()
  const glossaryZh = buildGlossarySidebar(effectiveScan, 'zh')
  const glossaryEn = buildGlossarySidebar(effectiveScan, 'en')

  const zhConfig: Record<string, any> = {}
  const enConfig: Record<string, any> = {}

  // Section sidebars are derived from the taxonomy: every `kind: 'section'`
  // node contributes its locale route prefix (section.path[locale]) and the
  // matching section sidebar tree. No per-section hand-entry — adding a
  // section in the taxonomy automatically wires its sidebar here.
  for (const section of taxonomy.byKind('section', null)) {
    const sb = sectionSidebars[section.id]
    if (section.path.zh) zhConfig[section.path.zh] = [wayfinding.zh, sb.zh]
    if (section.path.en) enConfig[section.path.en] = [wayfinding.en, sb.en]
  }

  // Non-section prefixes are declared once. Locale roots carry wayfinding
  // only; glossary carries wayfinding + the glossary sidebar; space-news
  // carries wayfinding only (its custom rail is a runtime component, not a
  // VuePress sidebar entry); satellite-simulation is disabled. The
  // `/en/space-news/` entry inside the zh config keeps zh chrome consistent
  // if a zh visitor lands on an en space-news URL.
  Object.assign(zhConfig, {
    '/': [wayfinding.zh],
    '/glossary/': [wayfinding.zh, glossaryZh],
    '/space-news/': [wayfinding.zh],
    '/en/space-news/': [wayfinding.zh],
    '/satellite-simulation/': false,
  })

  Object.assign(enConfig, {
    '/en/': [wayfinding.en],
    '/en/glossary/': [wayfinding.en, glossaryEn],
    '/en/space-news/': [wayfinding.en],
    '/en/satellite-simulation/': false,
  })

  return { zh: zhConfig, en: enConfig }
}
