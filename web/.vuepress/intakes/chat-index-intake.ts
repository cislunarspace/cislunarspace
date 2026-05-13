/**
 * ChatIndexIntake — builds hierarchical AI chat index from GlossaryScan.
 */
import { glossaryCategories, categoryRegistry } from '../glossary-meta.js'
import { sidebarSections, type SidebarEntry } from '../sidebar-data.js'
import type { GlossaryScan } from '../sidebar-types.js'
import type { ChatIndexCategory, ChatIndexEntry } from '../sidebar-types.js'

export function buildChatIndexIntake(scan: GlossaryScan): { zh: ChatIndexCategory[]; en: ChatIndexCategory[] } {
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
        const catMeta = categoryRegistry.getByLabel(gap.category, 'zh')
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
