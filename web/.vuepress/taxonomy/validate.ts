/**
 * Build-time validator for the taxonomy.
 *
 * Catches authoring mistakes at module load:
 *   - unique ids
 *   - parents exist
 *   - no cycles
 *   - locale gating is consistent with `path.{zh,en} === null`
 *   - `order` is a finite number
 *
 * Adapters do not need to call this; it runs once when the taxonomy module
 * is constructed via `defineTaxonomy()` from `data.ts`.
 */
import type { Locale, NodeId, TaxonomyNode } from './types'

export class TaxonomyValidationError extends Error {
  constructor(public readonly issues: readonly string[]) {
    super(`Taxonomy validation failed:\n  - ${issues.join('\n  - ')}`)
    this.name = 'TaxonomyValidationError'
  }
}

export function validateTaxonomy(nodes: readonly TaxonomyNode[]): void {
  const issues: string[] = []
  const ids = new Set<NodeId>()

  for (const node of nodes) {
    if (ids.has(node.id)) issues.push(`duplicate id "${node.id}"`)
    ids.add(node.id)
    if (!Number.isFinite(node.order)) issues.push(`node "${node.id}": order must be a finite number`)

    const visibility: Record<Locale, boolean> = {
      zh: !node.locales || node.locales.includes('zh'),
      en: !node.locales || node.locales.includes('en'),
    }
    // Kinds that are intentionally path-less in every locale.
    const pathLessKind = node.kind === 'navbar-root'
      || node.kind === 'external-link'
      || node.kind === 'group'
    for (const locale of ['zh', 'en'] as const) {
      if (visibility[locale] && node.path[locale] === null && !pathLessKind) {
        issues.push(`node "${node.id}": locale "${locale}" is visible but path.${locale} is null`)
      }
      if (!visibility[locale] && node.path[locale] !== null) {
        issues.push(`node "${node.id}": locale "${locale}" is gated out but path.${locale} is set`)
      }
    }
  }

  // Parent existence
  for (const node of nodes) {
    if (node.parentId === null) continue
    if (!ids.has(node.parentId)) {
      issues.push(`node "${node.id}": parentId "${node.parentId}" does not exist`)
    }
  }

  // Cycle detection
  const parentOf = new Map<NodeId, NodeId | null>()
  for (const node of nodes) parentOf.set(node.id, node.parentId)
  for (const node of nodes) {
    const visited = new Set<NodeId>([node.id])
    let cursor: NodeId | null | undefined = node.parentId
    while (cursor) {
      if (visited.has(cursor)) {
        issues.push(`cycle detected at node "${node.id}"`)
        break
      }
      visited.add(cursor)
      cursor = parentOf.get(cursor) ?? null
    }
  }

  if (issues.length) throw new TaxonomyValidationError(issues)
}
