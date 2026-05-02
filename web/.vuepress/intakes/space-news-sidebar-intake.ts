/**
 * SpaceNewsSidebarIntake — builds glossary sidebar section for each locale.
 */
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { glossaryCategories } from '../glossary-meta.js'
import type { GlossaryScan, VueSidebarItem } from '../sidebar-intake.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function buildSpaceNewsSidebarIntake(
  scan: GlossaryScan,
  autoSidebar: { zh: any[]; en: any[] },
): { sectionSidebars: Record<string, { zh: VueSidebarItem; en: VueSidebarItem }>; glossarySidebar: { zh: VueSidebarItem; en: VueSidebarItem } } {
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

  return {
    glossarySidebar: {
      zh: buildGlossarySidebar('zh'),
      en: buildGlossarySidebar('en'),
    },
    sectionSidebars: {},
  }
}
