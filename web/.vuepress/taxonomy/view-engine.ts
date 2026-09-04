/**
 * TaxonomyViewEngine — declarative query layer over TaxonomyModule.
 *
 * Centralises the traversal logic that view adapters previously duplicated:
 * child lookup, path and label resolution, and recursive tree building.
 *
 * Query DSL:
 *
 *   engine
 *     .fromRoot(id)             // anchor at a node (null = forest root)
 *     .filter(predicate)       // narrow flat results (list / walk)
 *     .list()                  //   → direct children as ViewNode[]
 *     .walk()                  //   → root + all descendants, depth-first
 *     .root()                  //   → root node as ViewNode, or null
 *     .buildTree(projector)    //   → recursive tree; projector returns null to skip
 *
 * ViewNode pre-resolves the path (including external-link href) and label
 * so projectors never touch raw TaxonomyNode fields.
 */
import type { NodeId, TaxonomyModule, TaxonomyNode } from './types';

// ── Public types ─────────────────────────────────────────────────────────────

export interface ViewNode {
  readonly node: TaxonomyNode;
  readonly path: string | null;
  readonly label: string;
}

export interface ViewQuery {
  filter(predicate: (vn: ViewNode) => boolean): ViewQuery;
  /** Direct children of the root, sorted by sibling order. */
  list(): ViewNode[];
  /** Root node followed by all descendants in depth-first pre-order. */
  walk(): ViewNode[];
  /** The root node as a ViewNode, or null when rootId is null. */
  root(): ViewNode | null;
  /**
   * Recursively build a tree. The projector receives the ViewNode and its
   * already-built children; returning null omits the node from the output.
   * Filters do NOT apply to buildTree — the projector is the sole filter.
   */
  buildTree<T>(projector: (vn: ViewNode, children: T[]) => T | null): T[];
}

export interface TaxonomyViewEngine {
  fromRoot(rootId: NodeId | null): ViewQuery;
}

// ── Path resolution ──────────────────────────────────────────────────────────

function resolvePath(node: TaxonomyNode): string | null {
  if (node.kind === 'external-link') {
    const href = node.meta?.href;
    return typeof href === 'string' ? href : null;
  }
  return node.path ?? null;
}

function toViewNode(node: TaxonomyNode): ViewNode {
  return {
    node,
    path: resolvePath(node),
    label: node.label,
  };
}

// ── Query factory ────────────────────────────────────────────────────────────

function createQuery(
  taxonomy: TaxonomyModule,
  rootId: NodeId | null,
  filters: ReadonlyArray<(vn: ViewNode) => boolean>,
): ViewQuery {
  const passes = (vn: ViewNode): boolean => filters.every((f) => f(vn));

  const list = (): ViewNode[] => taxonomy.children(rootId).map(toViewNode).filter(passes);

  const walk = (): ViewNode[] => {
    const result: ViewNode[] = [];
    const visit = (parentId: NodeId | null): void => {
      for (const child of taxonomy.children(parentId)) {
        const vn = toViewNode(child);
        if (passes(vn)) result.push(vn);
        visit(child.id);
      }
    };
    if (rootId !== null) {
      const rootVN = toViewNode(taxonomy.get(rootId));
      if (passes(rootVN)) result.push(rootVN);
    }
    visit(rootId);
    return result;
  };

  const root = (): ViewNode | null => {
    if (rootId === null) return null;
    return toViewNode(taxonomy.get(rootId));
  };

  const buildTree = <T>(projector: (vn: ViewNode, children: T[]) => T | null): T[] => {
    const buildLevel = (parentId: NodeId | null): T[] => {
      const result: T[] = [];
      for (const child of taxonomy.children(parentId)) {
        const vn = toViewNode(child);
        const children = buildLevel(child.id);
        const item = projector(vn, children);
        if (item !== null) result.push(item);
      }
      return result;
    };
    return buildLevel(rootId);
  };

  return {
    filter: (predicate: (vn: ViewNode) => boolean) =>
      createQuery(taxonomy, rootId, [...filters, predicate]),
    list,
    walk,
    root,
    buildTree,
  };
}

// ── Engine factory ───────────────────────────────────────────────────────────

export function createViewEngine(taxonomy: TaxonomyModule): TaxonomyViewEngine {
  return {
    fromRoot: (rootId: NodeId | null) => createQuery(taxonomy, rootId, []),
  };
}
