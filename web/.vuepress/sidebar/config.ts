import path from 'path'
import { fileURLToPath } from 'url'
import { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import { buildWayfindingIntake as buildWayfinding } from '../taxonomy/adapters/wayfinding.ts'
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts'
import { buildAllSectionSidebars } from '../taxonomy/adapters/sidebar-sections.ts'
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
