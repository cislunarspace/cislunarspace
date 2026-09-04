/**
 * AI chat section-index adapter — derives non-glossary chat index entries
 * from the unified taxonomy module via the TaxonomyViewEngine.
 *
 * Each section contributes its own index page first, then all descendant
 * pages/groups with paths. Display-only groups (path === null) are not
 * entries but their children are collected. Index nodes are skipped.
 */
import { engine as defaultEngine, createViewEngine } from '..';
import type { TaxonomyModule } from '../types';
import type { ChatIndexCategory, ChatIndexEntry } from '../../sidebar/types.ts';

export function buildSectionChatIndexCategories(
  taxonomyModule?: TaxonomyModule,
): ChatIndexCategory[] {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine;
  return viewEngine
    .fromRoot(null)
    .filter((vn) => vn.node.kind === 'section')
    .list()
    .map((section) => ({
      category: section.label,
      entries: viewEngine
        .fromRoot(section.node.id)
        .walk()
        .filter((vn) => vn.path !== null && vn.node.kind !== 'index')
        .map((vn) => ({ path: vn.path!, title: vn.label }) satisfies ChatIndexEntry),
    }));
}
