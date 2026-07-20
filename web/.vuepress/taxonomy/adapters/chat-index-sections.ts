/**
 * AI chat section-index adapter — derives non-glossary chat index entries
 * from the unified taxonomy module via the TaxonomyViewEngine.
 *
 * Each section contributes its own index page first, then all descendant
 * pages/groups with paths. Display-only groups (path === null) are not
 * entries but their children are collected. Index nodes are skipped.
 */
import { engine as defaultEngine, createViewEngine } from '..'
import type { Locale, TaxonomyModule } from '../types'
import type { TaxonomyViewEngine } from '../view-engine'
import type { ChatIndexCategory, ChatIndexEntry } from '../../sidebar/types.ts'

function sectionToChatIndexCategory(
  sectionId: string,
  sectionLabel: string,
  locale: Locale,
  viewEngine: TaxonomyViewEngine,
): ChatIndexCategory {
  const entries = viewEngine
    .fromRoot(sectionId)
    .withLocale(locale)
    .walk()
    .filter((vn) => vn.path !== null && vn.node.kind !== 'index')
    .map((vn) => ({ path: vn.path!, title: vn.label }) satisfies ChatIndexEntry)

  return { category: sectionLabel, entries }
}

export function buildSectionChatIndexCategories(locale: Locale, taxonomyModule?: TaxonomyModule): ChatIndexCategory[] {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine
  return viewEngine
    .fromRoot(null)
    .withLocale(locale)
    .filter((vn) => vn.node.kind === 'section')
    .list()
    .map((vn) => sectionToChatIndexCategory(vn.node.id, vn.label, locale, viewEngine))
}
