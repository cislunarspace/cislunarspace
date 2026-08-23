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
import type { Locale, NodeId, TaxonomyNode } from './types';

export class TaxonomyValidationError extends Error {
  constructor(public readonly issues: readonly string[]) {
    super(`Taxonomy validation failed:\n  - ${issues.join('\n  - ')}`);
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
    return url.protocol === 'https:' || url.protocol === 'http:';
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

    const visibility: Record<Locale, boolean> = {
      zh: !node.locales || node.locales.includes('zh'),
      en: !node.locales || node.locales.includes('en'),
    };
    // Kinds that are intentionally path-less in every locale.
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
    for (const locale of ['zh', 'en'] as const) {
      const path = node.path[locale];
      if (visibility[locale] && path === null && !pathLessKind) {
        issues.push(`node "${node.id}": locale "${locale}" is visible but path.${locale} is null`);
      }
      if (!visibility[locale] && path !== null) {
        issues.push(`node "${node.id}": locale "${locale}" is gated out but path.${locale} is set`);
      }
      if (path !== null && !isSafeInternalPath(path)) {
        issues.push(
          `node "${node.id}": path.${locale} must be a safe internal path starting with "/"`,
        );
      }
    }

    // `glossary-category` nodes are pure metadata identifiers
    // -- they are never rendered as routable pages. If a future author
    // accidentally sets a path on one (thinking it links to a real page),
    // the components will silently render a broken link. Catch it here.
    if (node.kind === 'glossary-category') {
      for (const locale of ['zh', 'en'] as const) {
        if (node.path[locale] !== null) {
          issues.push(
            `node "${node.id}": ${node.kind} nodes must have path.${locale} === null ` +
              `(they are metadata identifiers, not routable pages)`,
          );
        }
      }
    }

    if (node.kind === 'external-link' && !isSafeExternalHref(node.meta?.href)) {
      issues.push(`node "${node.id}": external-link meta.href must be a safe http(s) URL`);
    }
  }

  // Sibling-order uniqueness -- two siblings with the same `order` would
  // be sorted by id in `compareNodes` (deterministic but a sign of a
  // data mistake). Surface it so authors fix it instead of relying on the
  // tiebreaker.
  //
  // Order uniqueness is checked per (parent, locale) bucket: two nodes
  // that share a parent but live in disjoint locales are fine. We track
  // the order each id was last seen at, so re-iteration of the same
  // `seenOrders` key for an order-equal sibling triggers a real conflict.
  const seenOrders = new Map<string, { id: NodeId; order: number }>();
  for (const node of nodes) {
    const locales = node.locales ?? (['zh', 'en'] as Locale[]);
    for (const locale of locales) {
      const key = `${node.parentId ?? '__root__'}|${locale}`;
      const seen = seenOrders.get(key);
      if (seen && seen.id !== node.id && seen.order === node.order) {
        issues.push(
          `sibling order collision at parent "${node.parentId ?? '<root>'}" / locale "${locale}": ` +
            `nodes "${seen.id}" and "${node.id}" both have order ${node.order}`,
        );
      } else if (!seen) {
        seenOrders.set(key, { id: node.id, order: node.order });
      }
    }
  }

  // Parent existence
  for (const node of nodes) {
    if (node.parentId === null) continue;
    if (!ids.has(node.parentId)) {
      issues.push(`node "${node.id}": parentId "${node.parentId}" does not exist`);
    }
  }

  // Cycle detection
  const parentOf = new Map<NodeId, NodeId | null>();
  for (const node of nodes) parentOf.set(node.id, node.parentId);
  for (const node of nodes) {
    const visited = new Set<NodeId>([node.id]);
    let cursor: NodeId | null | undefined = node.parentId;
    while (cursor) {
      if (visited.has(cursor)) {
        issues.push(`cycle detected at node "${node.id}"`);
        break;
      }
      visited.add(cursor);
      cursor = parentOf.get(cursor) ?? null;
    }
  }

  if (issues.length) throw new TaxonomyValidationError(issues);
}
