/**
 * Taxonomy Module — interface shapes.
 *
 * See ADR-0001 (docs/adr/0001-unified-taxonomy-module.md) for rules:
 *   - Stable, locale-independent `id`
 *   - Open-enum `kind` (adapters filter by what they know)
 *   - Bilingual `label.{zh,en}`
 *   - `path.{zh,en}` with explicit `null` for locale-gated nodes
 *   - Optional `locales` for explicit locale gating
 *   - Sibling-scoped `order` (lower first; ties broken by id)
 *
 * Identity / ordering / locale rules are enforced by `validate.ts`.
 */

/** Stable, locale-independent identity for a taxonomy node. */
export type NodeId = string

/**
 * Open enum — new kinds may be added without an ADR amendment.
 * Adapters filter by the kinds they know; unknown kinds are ignored.
 */
export type NodeKind =
  | 'section'
  | 'group'
  | 'page'
  | 'index'
  | 'glossary-category'
  | 'news-category'
  | 'navbar-root'
  | 'navbar-link'
  | 'external-link'

export interface LocalePath {
  zh: string | null
  en: string | null
}

export interface TaxonomyNode {
  /** Stable identity. Never reused after rename — renames mean new id + redirect. */
  id: NodeId
  kind: NodeKind
  label: { zh: string; en: string }
  path: LocalePath
  /** Explicit locale gating. Undefined = present in both. */
  locales?: Array<'zh' | 'en'>
  /** Sibling sort order. Lower = earlier. Stable within parent. */
  order: number
  /** Parent node id, or null for roots. */
  parentId: NodeId | null
  /**
   * Adapter-specific metadata:
   *   - `meta.href` for external-link navbar items
   *   - `meta.color` for news-category nodes
   *   - `meta.collapsible` for sidebar groups
   *   - `meta.indexLink: true` for an index-page sibling within a sidebar group
   */
  meta?: Record<string, unknown>
}

export type Locale = 'zh' | 'en'

export interface TaxonomyModule {
  /** All nodes, in deterministic order (by id ascending). */
  all(): readonly TaxonomyNode[]

  /** Get one node by id. Throws if absent. */
  get(id: NodeId): TaxonomyNode

  /**
   * Children of a node, already sorted by `order` (ties broken by id) and
   * filtered by locale gating.
   */
  children(parentId: NodeId | null, locale: Locale): readonly TaxonomyNode[]

  /** Filter by kind, optionally within a parent. */
  byKind(kind: NodeKind, parentId?: NodeId | null): readonly TaxonomyNode[]
}
