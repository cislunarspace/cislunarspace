/**
 * TaxonomyModule factory — wraps a flat array of TaxonomyNode and exposes
 * the typed views consumed by adapters (navbar, sidebar, AI-chat, …).
 *
 * Children are pre-bucketed and pre-sorted at construction time so that
 * adapter calls are O(1) lookups.
 */
import type { NodeId, NodeKind, TaxonomyModule, TaxonomyNode } from './types';

const ROOT_KEY = '__root__';

function compareNodes(a: TaxonomyNode, b: TaxonomyNode): number {
  if (a.order !== b.order) return a.order - b.order;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

function buildChildrenIndex(nodes: readonly TaxonomyNode[]): Map<string, TaxonomyNode[]> {
  const index = new Map<string, TaxonomyNode[]>();
  for (const node of nodes) {
    const parentKey = node.parentId ?? ROOT_KEY;
    if (!index.has(parentKey)) index.set(parentKey, []);
    index.get(parentKey)!.push(node);
  }
  for (const list of index.values()) list.sort(compareNodes);
  return index;
}

export function createTaxonomyModule(nodes: readonly TaxonomyNode[]): TaxonomyModule {
  const sorted = [...nodes].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const byId = new Map<NodeId, TaxonomyNode>();
  for (const node of sorted) byId.set(node.id, node);

  const childrenIndex = buildChildrenIndex(sorted);

  return {
    all: () => sorted,
    get(id) {
      const node = byId.get(id);
      if (!node) throw new Error(`TaxonomyModule: unknown node id "${id}"`);
      return node;
    },
    children(parentId) {
      const key = parentId ?? ROOT_KEY;
      return childrenIndex.get(key) ?? [];
    },
    byKind(kind: NodeKind, parentId?: NodeId | null) {
      const list: TaxonomyNode[] = [];
      for (const node of sorted) {
        if (node.kind !== kind) continue;
        if (parentId !== undefined && node.parentId !== parentId) continue;
        list.push(node);
      }
      return list;
    },
  };
}
