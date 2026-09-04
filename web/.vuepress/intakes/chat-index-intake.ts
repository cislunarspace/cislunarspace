/**
 * ChatIndexIntake — builds the hierarchical AI chat index from GlossaryScan.
 */
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.js';
import type { GlossaryScan, ChatIndexCategory, ChatIndexEntry } from '../sidebar/types.ts';
import { buildSectionChatIndexCategories } from '../taxonomy/adapters/chat-index-sections.js';

export function buildChatIndexIntake(scan: GlossaryScan): ChatIndexCategory[] {
  const categories: ChatIndexCategory[] = [];

  const byCategory = new Map<string, ChatIndexEntry[]>();
  for (const entry of scan.entries) {
    const catLabel = entry.category.label;
    if (!byCategory.has(catLabel)) byCategory.set(catLabel, []);
    byCategory.get(catLabel)!.push({ path: entry.path, title: entry.title });
  }

  for (const catMeta of glossaryCategories) {
    const catEntries = byCategory.get(catMeta.label) || [];
    if (catEntries.length > 0) {
      categories.push({ category: catMeta.label, entries: catEntries });
    }
  }

  categories.push(...buildSectionChatIndexCategories());

  return categories;
}
