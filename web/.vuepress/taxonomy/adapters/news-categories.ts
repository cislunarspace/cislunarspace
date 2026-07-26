/**
 * News categories adapter — derives the historical
 * `categoryMeta` record (`Record<key, {zh, en, color}>`) from the unified
 * taxonomy module.
 *
 * The taxonomy source: `taxonomy/data.ts` → `newsCategoryNodes` (each
 * `kind: 'news-category'`, id == category key, `meta.color` enforced as
 * `#RRGGBB` by the validator).
 *
 * The VuePress SpaceNewsHome / Sidebar / Archive components import
 * `categoryMeta` and look up a category by its key. To keep their
 * behaviour intact while the data source migrates, the adapter produces
 * the same `Record<string, {zh, en, color}>` shape — the
 * `theme2/utils/categoryMeta.ts` wrapper (which loads `category-meta.json`)
 * is the seam that PR 2 retires by re-pointing its import here.
 */
import { taxonomy as defaultTaxonomy } from '..';
import type { Locale, TaxonomyModule, TaxonomyNode } from '../types';

export interface CategoryMetaEntry {
  zh: string;
  en: string;
  color: string;
}

export type CategoryMeta = Record<string, CategoryMetaEntry>;

function entryFor(node: TaxonomyNode): CategoryMetaEntry {
  // The validator already enforces #RRGGBB on news-category nodes. The
  // fallback keeps the adapter usable in unit tests where meta may be
  // absent — production data always carries the color.
  const color = typeof node.meta?.color === 'string' ? node.meta.color : '#64748b';
  return {
    zh: node.label.zh,
    en: node.label.en,
    color,
  };
}

/**
 * Build the `categoryMeta` record from the taxonomy. Keys are node ids
 * (== article frontmatter `category` values). Iteration order follows the
 * taxonomy's sibling-sorted output, but consumers treat the record as an
 * unordered map, so order is not significant.
 */
export function buildCategoryMeta(taxonomyModule?: TaxonomyModule): CategoryMeta {
  const mod = taxonomyModule ?? defaultTaxonomy;
  const out: CategoryMeta = {};
  for (const node of mod.byKind('news-category')) {
    out[node.id] = entryFor(node);
  }
  return out;
}

/** Default fallback used by `space-news` sidebar transforms. */
export const categoryMetaDefault: CategoryMetaEntry = { zh: '', en: '', color: '#64748b' };

/** Resolved record, evaluated once at module load. */
export const categoryMeta: CategoryMeta = buildCategoryMeta();

/**
 * Resolve a single category's display label / color in the requested
 * locale, falling back to the default entry. Mirrors the per-key lookup
 * the SpaceNews components used to perform against `category-meta.json`.
 */
export function resolveCategory(key: string, locale: Locale): CategoryMetaEntry {
  return categoryMeta[key] ?? categoryMetaDefault;
}
