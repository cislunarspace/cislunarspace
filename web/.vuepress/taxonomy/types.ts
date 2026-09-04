/**
 * Taxonomy Module — interface shapes.
 *
 * See ADR-0001 (docs/adr/0001-unified-taxonomy-module.md) for rules:
 *   - Stable `id`
 *   - Open-enum `kind` (adapters filter by what they know)
 *   - `label`（中文显示名）
 *   - `path` with explicit `null` for path-less kinds (group,
 *     navbar-root, glossary-category, …)
 *   - Sibling-scoped `order` (lower first; ties broken by id)
 *
 * Identity / ordering rules are enforced by `validate.ts`.
 */

/** Stable identity for a taxonomy node. */
export type NodeId = string;

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
  | 'navbar-root'
  | 'navbar-link'
  | 'external-link';

export interface TaxonomyNode {
  /** Stable identity. Never reused after rename — renames mean new id + redirect. */
  id: NodeId;
  kind: NodeKind;
  label: string;
  /** Internal site path; null only for path-less kinds (group, navbar-root, …). */
  path: string | null;
  /** Sibling sort order. Lower = earlier. Stable within parent. */
  order: number;
  /** Parent node id, or null for roots. */
  parentId: NodeId | null;
  /**
   * Adapter-specific metadata:
   *   - `meta.href` for external-link navbar items
   *   - `meta.collapsible` for sidebar groups
   *   - `meta.indexLink: true` for an index-page sibling within a sidebar group
   */
  meta?: Record<string, unknown>;
}

export interface TaxonomyModule {
  /** All nodes, in deterministic order (by id ascending). */
  all(): readonly TaxonomyNode[];

  /** Get one node by id. Throws if absent. */
  get(id: NodeId): TaxonomyNode;

  /** Children of a node, already sorted by `order` (ties broken by id). */
  children(parentId: NodeId | null): readonly TaxonomyNode[];

  /** Filter by kind, optionally within a parent. */
  byKind(kind: NodeKind, parentId?: NodeId | null): readonly TaxonomyNode[];
}
