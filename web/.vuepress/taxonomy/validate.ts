/**
 * Build-time validator for the taxonomy.
 *
 * Catches authoring mistakes at module load:
 *   - unique ids
 *   - parents exist
 *   - no cycles
 *   - `path === null` only on path-less kinds
 *   - `order` is a finite number
 *
 * Adapters do not need to call this; it runs once when the taxonomy module
 * is constructed via `defineTaxonomy()` from `data.ts`.
 */
import type { NodeId, TaxonomyNode } from './types';

export class TaxonomyValidationError extends Error {
  constructor(public readonly issues: readonly string[]) {
    super(`Invalid taxonomy:\n${issues.map((i) => `  - ${i}`).join('\n')}`);
    this.name = 'TaxonomyValidationError';
  }
}

function isSafeInternalPath(value: string): boolean {
  if (!value.startsWith('/')) return false;
  if (/javascript:|data:|vbscript:/i.test(value)) return false;
  if (/[\x00-\x1f\x7f]/.test(value)) return false;
  return true;
}

function isSafeExternalHref(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  if (/[\x00-\x1f\x7f]/.test(value)) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function validateTaxonomy(nodes: readonly TaxonomyNode[]): void {
  const issues: string[] = [];
  const ids = new Set<NodeId>();

  for (const node of nodes) {
    if (ids.has(node.id)) issues.push(`duplicate id "${node.id}"`);
    ids.add(node.id);
    if (!Number.isFinite(node.order))
      issues.push(`node "${node.id}": order must be a finite number`);

    // Kinds that are intentionally path-less.
    // - `navbar-root`: a synthetic tree root, not a routable page.
    // - `external-link`: a link to a URL outside the site, no internal path.
    // - `group`: a display-only disclosure header (no page of its own).
    // - `glossary-category`: a build-time filter label, not a routable page.
    //   The `meta.slug` selects a category on the glossary index page; the
    //   node itself has no `/glossary/<slug>/` path of its own.
    const pathLessKind =
      node.kind === 'navbar-root' ||
      node.kind === 'external-link' ||
      node.kind === 'group' ||
      node.kind === 'glossary-category';
    if (node.path === null && !pathLessKind) {
      issues.push(`node "${node.id}": kind "${node.kind}" requires a path but path is null`);
    }
    if (node.path !== null && !isSafeInternalPath(node.path)) {
      issues.push(`node "${node.id}": path must be a safe internal path starting with "/"`);
    }

    // `glossary-category` nodes are pure metadata identifiers
    // -- they are never rendered as routable pages. If a future author
    // accidentally sets a path on one (thinking it links to a real page),
    // the components will silently render a broken link. Catch it here.
    if (node.kind === 'glossary-category' && node.path !== null) {
      issues.push(
        `node "${node.id}": ${node.kind} nodes must have path === null ` +
          `(they are metadata identifiers, not routable pages)`,
      );
    }

    if (node.kind === 'external-link' && !isSafeExternalHref(node.meta?.href)) {
      issues.push(`node "${node.id}": external-link meta.href must be a safe http(s) URL`);
    }
  }

  // Sibling-order uniqueness -- two siblings with the same `order` would
  // be sorted by id in `compareNodes` (deterministic but a sign of a
  // data mistake). Surface it so authors fix it instead of relying on the
  // tiebreaker.
  const seenOrders = new Map<string, { id: NodeId; order: number }>();
  for (const node of nodes) {
    const key = node.parentId ?? '__root__';
    const seen = seenOrders.get(key);
    if (seen && seen.id !== node.id && seen.order === node.order) {
      issues.push(
        `sibling order collision at parent "${node.parentId ?? '<root>'}": ` +
          `nodes "${seen.id}" and "${node.id}" both have order ${node.order}`,
      );
    } else if (!seen) {
      seenOrders.set(key, { id: node.id, order: node.order });
    }
  }

  // Parent existence
  for (const node of nodes) {
    if (node.parentId !== null && !ids.has(node.parentId)) {
      issues.push(`node "${node.id}": parentId "${node.parentId}" does not exist`);
    }
  }

  // Cycle detection
  const parentOf = new Map<NodeId, NodeId | null>();
  for (const node of nodes) parentOf.set(node.id, node.parentId);
  for (const node of nodes) {
    const path: NodeId[] = [];
    let cur: NodeId | null = node.id;
    while (cur !== null) {
      if (path.includes(cur)) {
        issues.push(`cycle detected: ${[...path, cur].join(' -> ')}`);
        break;
      }
      path.push(cur);
      cur = parentOf.get(cur) ?? null;
    }
  }

  if (issues.length) throw new TaxonomyValidationError(issues);
}
