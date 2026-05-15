/**
 * Section taxonomy — flattens the nested `sidebarSections` literal into the
 * TaxonomyNode graph at module load.
 *
 * This is the bridge between the human-friendly nested authoring form
 * (`web/.vuepress/sidebar-data.ts`) and the taxonomy interface that
 * adapters consume. The flattening rules:
 *
 *   - Top-level entries are `kind: 'section'`. id = section slug.
 *   - Group entries (with `children`) become `kind: 'group'`. id = parent.id + '/' + slug.
 *   - Leaf entries become `kind: 'page'`. id = parent.id + '/' + slug.
 *   - Entries with `slug === ''` become `kind: 'index'` — they represent the
 *     parent's index route as a first sidebar child.
 *   - Entries with `slug === undefined` become display-only `kind: 'group'`
 *     nodes (no path of their own); id is a synthesized child-slot id.
 *   - `locales` on a SidebarEntry is carried verbatim.
 *   - `childrenByLocale`: each locale's subtree contributes a sibling node
 *     gated by that locale (per ADR-0001 §Negative consequences).
 *
 * The resulting taxonomy is used by `adapters/sidebar-sections.ts` and can
 * be queried like the main taxonomy: `sectionTaxonomy.children(parentId, locale)`.
 */
import type { SidebarEntry, SidebarSection } from '../sidebar-data'
import { sidebarSections } from '../sidebar-data'
import { createTaxonomyModule } from './module'
import type { Locale, NodeId, TaxonomyModule, TaxonomyNode } from './types'
import { validateTaxonomy } from './validate'

interface FlattenContext {
  nodes: TaxonomyNode[]
  syntheticCounter: number
}

function pathFor(parentPath: { zh: string | null; en: string | null }, slug: string | undefined, locales: Locale[] | undefined): { zh: string | null; en: string | null } {
  const zhAllowed = !locales || locales.includes('zh')
  const enAllowed = !locales || locales.includes('en')

  if (slug === undefined) {
    // Display-only group — no path.
    return { zh: null, en: null }
  }
  if (slug === '') {
    // Index page — shares parent path.
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

function entryId(parentId: NodeId, entry: SidebarEntry, ctx: FlattenContext): NodeId {
  if (entry.slug !== undefined && entry.slug !== '') return `${parentId}/${entry.slug}`
  if (entry.slug === '') return `${parentId}/_index`
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
  // Combine parent locale gating with the entry's own gating.
  const effectiveLocales = combineLocales(parentLocales, entry.locales)
  const id = entryId(parentId, entry, ctx)
  const path = pathFor(parentPath, entry.slug, effectiveLocales)

  const node: TaxonomyNode = {
    id,
    kind: entryKind(entry),
    label: { zh: entry.label.zh, en: entry.label.en },
    path,
    ...(effectiveLocales ? { locales: effectiveLocales } : {}),
    order,
    parentId,
    ...(entry.collapsible !== undefined ? { meta: { collapsible: entry.collapsible } } : {}),
  }
  ctx.nodes.push(node)

  if (entry.children && entry.children.length > 0) {
    // Display-only groups (slug === undefined) do NOT contribute a path
    // segment, so their children inherit the grandparent path. This mirrors
    // the original `buildSectionChildren` behaviour where slug-less groups
    // recursed with the same `basePath`.
    const childParentPath = entry.slug === undefined ? parentPath : path
    let childOrder = 10
    for (const child of entry.children) {
      flattenEntry(child, id, childParentPath, effectiveLocales, childOrder, ctx)
      childOrder += 10
    }
  }
}

function combineLocales(parent: Locale[] | undefined, own: Locale[] | undefined): Locale[] | undefined {
  if (!parent && !own) return undefined
  if (!parent) return own
  if (!own) return parent
  // Intersection — child can only be in locales the parent allows.
  const intersection = parent.filter((l) => own.includes(l))
  return intersection.length === 2 ? undefined : intersection as Locale[]
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
    // Each locale's subtree contributes locale-gated sibling nodes.
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

function flattenLocaleSpecificSubtree(
  entries: SidebarEntry[],
  parentId: NodeId,
  parentPath: { zh: string | null; en: string | null },
  locale: Locale,
  ctx: FlattenContext,
): void {
  // Each top-level subtree gets its own scoped id namespace so the zh
  // and en sides of a `childrenByLocale` block do not collide.
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
    : `${scopedParentId}/_${scopeLocale}-${++ctx.syntheticCounter}`

  const locales: Locale[] = [scopeLocale]
  const path = pathFor(parentPath, entry.slug, locales)

  const node: TaxonomyNode = {
    id: baseId,
    kind: entryKind(entry),
    label: { zh: entry.label.zh, en: entry.label.en },
    path,
    locales,
    order,
    parentId: scopedParentId,
    ...(entry.collapsible !== undefined ? { meta: { collapsible: entry.collapsible } } : {}),
  }
  ctx.nodes.push(node)

  if (entry.children && entry.children.length > 0) {
    const childParentPath = entry.slug === undefined ? parentPath : path
    let childOrder = 10
    for (const child of entry.children) {
      flattenEntryWithLocaleScope(child, baseId, childParentPath, scopeLocale, childOrder, ctx)
      childOrder += 10
    }
  }
}

function buildSectionTaxonomyNodes(): readonly TaxonomyNode[] {
  const ctx: FlattenContext = { nodes: [], syntheticCounter: 0 }
  let order = 10
  for (const section of sidebarSections) {
    flattenSection(section, order, ctx)
    order += 10
  }
  return Object.freeze(ctx.nodes)
}

const sectionNodes = buildSectionTaxonomyNodes()
validateTaxonomy(sectionNodes)

export const sectionTaxonomy: TaxonomyModule = createTaxonomyModule(sectionNodes)

/** Exposed for tests. */
export function _buildSectionTaxonomyNodes(): readonly TaxonomyNode[] {
  return sectionNodes
}
