/**
 * AI chat section-index adapter — derives non-glossary chat index entries
 * from the section taxonomy module.
 *
 * Mirrors the historical `chat-index-intake.ts` traversal exactly:
 *   - each section contributes its own index page first
 *   - display-only groups (`path === null`) are not entries but recurse
 *   - index nodes (`kind: 'index'`) are skipped
 *   - page/group nodes with paths are entries
 *   - locale-gated nodes are filtered by `sectionTaxonomy.children(..., locale)`
 */
import { sectionTaxonomy } from '../section-taxonomy'
import type { Locale, NodeId, TaxonomyNode } from '../types'
import type { ChatIndexCategory, ChatIndexEntry } from '../../sidebar-types'

function collectEntries(parentId: NodeId, locale: Locale, entries: ChatIndexEntry[]): void {
  for (const node of sectionTaxonomy.children(parentId, locale)) {
    if (node.kind === 'index') continue

    const path = node.path[locale]
    if (path) {
      entries.push({ path, title: node.label[locale] })
    }

    collectEntries(node.id, locale, entries)
  }
}

function sectionToChatIndexCategory(section: TaxonomyNode, locale: Locale): ChatIndexCategory {
  const path = section.path[locale]
  const entries: ChatIndexEntry[] = []

  if (path) {
    entries.push({ path, title: section.label[locale] })
  }

  collectEntries(section.id, locale, entries)

  return {
    category: section.label[locale],
    entries,
  }
}

export function buildSectionChatIndexCategories(locale: Locale): ChatIndexCategory[] {
  return sectionTaxonomy
    .children(null, locale)
    .filter((node) => node.kind === 'section')
    .map((section) => sectionToChatIndexCategory(section, locale))
}
