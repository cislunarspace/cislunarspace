/**
 * ChatIndexIntake — builds hierarchical AI chat index from GlossaryScan.
 */
import { glossaryCategories, categoryRegistry } from '../taxonomy/adapters/glossary-categories.js'
import type { GlossaryScan } from '../sidebar-types.js'
import type { ChatIndexCategory, ChatIndexEntry } from '../sidebar-types.js'
import { buildSectionChatIndexCategories } from '../taxonomy/adapters/chat-index-sections.js'

export function buildChatIndexIntake(scan: GlossaryScan): { zh: ChatIndexCategory[]; en: ChatIndexCategory[] } {
  function buildLocaleIndex(locale: 'zh' | 'en'): ChatIndexCategory[] {
    const categories: ChatIndexCategory[] = []
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

    categories.push(...buildSectionChatIndexCategories(locale))

    return categories
  }

  return {
    zh: buildLocaleIndex('zh'),
    en: buildLocaleIndex('en'),
  }
}
