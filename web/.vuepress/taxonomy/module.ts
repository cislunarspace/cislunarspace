/**
 * TaxonomyModule factory — wraps a flat array of TaxonomyNode and exposes
 * the typed views consumed by adapters (navbar, sidebar, AI-chat, …).
 *
 * Children are pre-bucketed and pre-sorted at construction time so that
 * adapter calls are O(1) lookups.
 */
import type { Locale, NodeId, NodeKind, TaxonomyModule, TaxonomyNode } from './types'

interface ChildrenIndex {
  /** parentId ('__root__' for null) → locale → sorted node array */
  zh: Map<string, TaxonomyNode[]>
  en: Map<string, TaxonomyNode[]>
}

const ROOT_KEY = '__root__'

function compareNodes(a: TaxonomyNode, b: TaxonomyNode): number {
  if (a.order !== b.order) return a.order - b.order
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
}

function isVisibleIn(node: TaxonomyNode, locale: Locale): boolean {
  if (!node.locales) return true
  return node.locales.includes(locale)
}

function buildChildrenIndex(nodes: readonly TaxonomyNode[]): ChildrenIndex {
  const zh = new Map<string, TaxonomyNode[]>()
  const en = new Map<string, TaxonomyNode[]>()

  for (const node of nodes) {
    const parentKey = node.parentId ?? ROOT_KEY
    if (isVisibleIn(node, 'zh')) {
      if (!zh.has(parentKey)) zh.set(parentKey, [])
      zh.get(parentKey)!.push(node)
    }
    if (isVisibleIn(node, 'en')) {
      if (!en.has(parentKey)) en.set(parentKey, [])
      en.get(parentKey)!.push(node)
    }
  }

  for (const map of [zh, en]) {
    for (const list of map.values()) list.sort(compareNodes)
  }

  return { zh, en }
}

export function createTaxonomyModule(nodes: readonly TaxonomyNode[]): TaxonomyModule {
  const sorted = [...nodes].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
  const byId = new Map<NodeId, TaxonomyNode>()
  for (const node of sorted) byId.set(node.id, node)

  const childrenIndex = buildChildrenIndex(sorted)

  return {
    all: () => sorted,
    get(id) {
      const node = byId.get(id)
      if (!node) throw new Error(`TaxonomyModule: unknown node id "${id}"`)
      return node
    },
    children(parentId, locale) {
      const key = parentId ?? ROOT_KEY
      const map = locale === 'zh' ? childrenIndex.zh : childrenIndex.en
      return map.get(key) ?? []
    },
    byKind(kind: NodeKind, parentId?: NodeId | null) {
      const list: TaxonomyNode[] = []
      for (const node of sorted) {
        if (node.kind !== kind) continue
        if (parentId !== undefined && node.parentId !== parentId) continue
        list.push(node)
      }
      return list
    },
  }
}
