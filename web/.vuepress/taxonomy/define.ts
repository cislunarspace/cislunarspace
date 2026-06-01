/**
 * defineTaxonomy — flattens a mix of flat TaxonomyNodes and nested
 * SidebarSection literals into a single TaxonomyNode[] array, runs the
 * validator, and returns a ready-to-use TaxonomyModule.
 *
 * Replaces `taxonomy/section-taxonomy.ts` (which only flattened sections
 * and returned a module with no `flatNodes`). The section-flattening logic
 * here is a refactor of section-taxonomy.ts, preserving the same id /
 * order / path / locale-gate semantics.
 *
 * Two input kinds:
 *   - `flatNodes`  : the navbar / wayfinding / glossary / news-category
 *                    subtrees, authored as explicit TaxonomyNode literals.
 *                    Passed through unchanged.
 *   - `sections`   : the section / page / group / index tree, authored as
 *                    nested SidebarSection / SidebarEntry literals. Each
 *                    section's subtree is flattened with the rules below.
 *
 * The merged node array is validated once (uniqueness, parents, cycles,
 * path safety, locale gating consistency) and wrapped in a TaxonomyModule
 * whose `byKind` / `children` / `get` / `all` views span the whole array.
 *
 * The author-facing flattening rules (mirrored from section-taxonomy.ts):
 *   - Top-level entries are `kind: 'section'`. id = section slug.
 *   - Group entries (with `children`) become `kind: 'group'`. id = parent.id + '/' + slug.
 *   - Leaf entries become `kind: 'page'`. id = parent.id + '/' + slug.
 *   - Entries with `slug === ''` become `kind: 'index'` — id = parent.id + '/_index'.
 *   - Entries with `slug === undefined` (display-only group) become
 *     `kind: 'group'`; id MUST be supplied by the author via `entry.id`
 *     (the previous `syntheticCounter` fallback has been retired).
 *   - `locales` on a SidebarEntry is intersected with the parent's gating.
 *   - `childrenByLocale`: each locale's subtree contributes a sibling node
 *     gated by that locale; the id is scoped with `@<locale>` so zh and
 *     en sides of a same-slug pair never collide.
 */
import type { Locale, NodeId, TaxonomyModule, TaxonomyNode } from './types'
import { createTaxonomyModule } from './module'
import { validateTaxonomy } from './validate'
import type { SidebarEntry, SidebarSection } from '../sidebar-data'

export interface DefineTaxonomyInput {
  flatNodes: readonly TaxonomyNode[]
  sections: readonly SidebarSection[]
}

export interface DefinedTaxonomy {
  nodes: readonly TaxonomyNode[]
  taxonomy: TaxonomyModule
}

interface FlattenContext {
  nodes: TaxonomyNode[]
  /** Counter for the rare case where a display-only group somehow lacks
   *  an explicit id despite the runtime check. Kept for parity with the
   *  pre-refactor `section-taxonomy.ts` so the validator can detect the
   *  duplicate-id issue in tests if the check is ever relaxed. */
  syntheticCounter: number
}

function pathFor(
  parentPath: { zh: string | null; en: string | null },
  slug: string | undefined,
  locales: Locale[] | undefined,
): { zh: string | null; en: string | null } {
  const zhAllowed = !locales || locales.includes('zh')
  const enAllowed = !locales || locales.includes('en')

  if (slug === undefined) {
    return { zh: null, en: null }
  }
  if (slug === '') {
    return {
      zh: zhAllowed ? parentPath.zh : null,
      en: enAllowed ? parentPath.en : null,
    }
  }
  return {
    zh: zhAllowed && parentPath.zh ? `${parentPath.zh}${slug}/` : null,
    en: enAllowed && parentPath.en ? `${parentPath.en}${slug}/` : null,
  }
}

function entryKind(entry: SidebarEntry): TaxonomyNode['kind'] {
  if (entry.slug === '') return 'index'
  if (entry.children && entry.children.length > 0) return 'group'
  if (entry.slug === undefined) return 'group'
  return 'page'
}

function combineLocales(parent: Locale[] | undefined, own: Locale[] | undefined): Locale[] | undefined {
  if (!parent && !own) return undefined
  if (!parent) return own
  if (!own) return parent
  const intersection = parent.filter((l) => own.includes(l))
  return intersection.length === 2 ? undefined : (intersection as Locale[])
}

function entryId(parentId: NodeId, entry: SidebarEntry, ctx: FlattenContext): NodeId {
  if (typeof entry.id === 'string' && entry.id.length > 0) return entry.id
  if (entry.slug !== undefined && entry.slug !== '') return `${parentId}/${entry.slug}`
  if (entry.slug === '') return `${parentId}/_index`
  // Last-resort fallback if a display-only group ever slips through without
  // an explicit id. Mirrors the original section-taxonomy.ts so existing
  // tests / validators keep working; in practice the author-time check in
  // flattenEntry catches this and throws a clearer message.
  ctx.syntheticCounter += 1
  return `${parentId}/_group-${ctx.syntheticCounter}`
}

function flattenEntry(
  entry: SidebarEntry,
  parentId: NodeId,
  parentPath: { zh: string | null; en: string | null },
  parentLocales: Locale[] | undefined,
  order: number,
  ctx: FlattenContext,
): void {
  const effectiveLocales = combineLocales(parentLocales, entry.locales)
  const id = entryId(parentId, entry, ctx)
  if (entry.slug === undefined && (typeof entry.id !== 'string' || entry.id.length === 0)) {
    throw new Error(
      `defineTaxonomy: SidebarEntry under "${parentId}" has slug === undefined and no explicit "id" field. ` +
        `Display-only groups require an explicit id (the syntheticCounter fallback has been retired).`,
    )
  }
  const path = pathFor(parentPath, entry.slug, effectiveLocales)

  ctx.nodes.push({
    id,
    kind: entryKind(entry),
    label: { zh: entry.label.zh, en: entry.label.en },
    path,
    ...(effectiveLocales ? { locales: effectiveLocales } : {}),
    order,
    parentId,
    ...(entry.collapsible !== undefined ? { meta: { collapsible: entry.collapsible } } : {}),
  })

  if (entry.children && entry.children.length > 0) {
    // Display-only groups (slug === undefined) do NOT contribute a path
    // segment, so their children inherit the grandparent path.
    const childParentPath = entry.slug === undefined ? parentPath : path
    let childOrder = 10
    for (const child of entry.children) {
      flattenEntry(child, id, childParentPath, effectiveLocales, childOrder, ctx)
      childOrder += 10
    }
  }
}

function flattenLocaleSpecificSubtree(
  entries: readonly SidebarEntry[],
  parentId: NodeId,
  parentPath: { zh: string | null; en: string | null },
  locale: Locale,
  ctx: FlattenContext,
): void {
  // zh starts at 10, en at 1000 — keeps the two sides well-separated so a
  // single global order field can carry both without collisions even when
  // both subtrees have many entries.
  let order = locale === 'zh' ? 10 : 1000
  for (const entry of entries) {
    flattenEntryWithLocaleScope(entry, parentId, parentPath, locale, order, ctx)
    order += 10
  }
}

function flattenEntryWithLocaleScope(
  entry: SidebarEntry,
  parentId: NodeId,
  parentPath: { zh: string | null; en: string | null },
  scopeLocale: Locale,
  order: number,
  ctx: FlattenContext,
): void {
  // Scope id with the locale to keep zh + en sides of a childrenByLocale
  // distinct even when their slugs happen to match.
  const scopedParentId = parentId
  const baseId = entry.slug !== undefined && entry.slug !== ''
    ? `${scopedParentId}/${entry.slug}@${scopeLocale}`
    : entry.slug === ''
      ? `${scopedParentId}/_index@${scopeLocale}`
      : (() => {
          ctx.syntheticCounter += 1
          return `${scopedParentId}/_${scopeLocale}-group-${ctx.syntheticCounter}`
        })()

  const locales: Locale[] = [scopeLocale]
  const path = pathFor(parentPath, entry.slug, locales)

  ctx.nodes.push({
    id: baseId,
    kind: entryKind(entry),
    label: { zh: entry.label.zh, en: entry.label.en },
    path,
    locales,
    order,
    parentId: scopedParentId,
    ...(entry.collapsible !== undefined ? { meta: { collapsible: entry.collapsible } } : {}),
  })

  if (entry.children && entry.children.length > 0) {
    const childParentPath = entry.slug === undefined ? parentPath : path
    let childOrder = 10
    for (const child of entry.children) {
      flattenEntryWithLocaleScope(child, baseId, childParentPath, scopeLocale, childOrder, ctx)
      childOrder += 10
    }
  }
}

function flattenSection(section: SidebarSection, order: number, ctx: FlattenContext): void {
  const id = section.slug
  const parentPath = { zh: `/${section.slug}/`, en: `/en/${section.slug}/` }

  ctx.nodes.push({
    id,
    kind: 'section',
    label: { zh: section.label.zh, en: section.label.en },
    path: parentPath,
    order,
    parentId: null,
  })

  if (section.childrenByLocale) {
    flattenLocaleSpecificSubtree(section.childrenByLocale.zh, id, parentPath, 'zh', ctx)
    flattenLocaleSpecificSubtree(section.childrenByLocale.en, id, parentPath, 'en', ctx)
    return
  }

  let childOrder = 10
  for (const child of section.children) {
    flattenEntry(child, id, parentPath, undefined, childOrder, ctx)
    childOrder += 10
  }
}

/**
 * Public entry point. Validates the merged node array and wraps it in a
 * TaxonomyModule. Throws TaxonomyValidationError if the array is invalid.
 *
 * Order is sibling-scoped (per ADR-0001). Different segments (sections,
 * flatNodes such as navbar / wayfinding / glossary / news-category) do not
 * need a global offset because the module buckets children by parentId,
 * not by a global sort.
 */
export function defineTaxonomy(input: DefineTaxonomyInput): DefinedTaxonomy {
  const ctx: FlattenContext = { nodes: [], syntheticCounter: 0 }

  for (const node of input.flatNodes) {
    ctx.nodes.push(node)
  }

  let sectionOrder = 10
  for (const section of input.sections) {
    flattenSection(section, sectionOrder, ctx)
    sectionOrder += 10
  }

  const nodes = Object.freeze(ctx.nodes) as readonly TaxonomyNode[]
  validateTaxonomy(nodes)

  const taxonomy = createTaxonomyModule(nodes)
  return { nodes, taxonomy }
}
