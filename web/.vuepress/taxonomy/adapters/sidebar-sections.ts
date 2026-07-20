/**
 * Sidebar sections adapter — derives the per-locale VueSidebarItem tree
 * from the unified taxonomy module via the TaxonomyViewEngine.
 *
 * The engine owns traversal, locale filtering, and path/label resolution.
 * This adapter is a declarative projector: a pure function that maps each
 * ViewNode (+ its already-built children) to a sidebar entry.
 */
import { engine as defaultEngine, createViewEngine } from '..'
import type { Locale, NodeId, TaxonomyModule } from '../types'
import type { TaxonomyViewEngine, ViewNode } from '../view-engine'
import type { VueSidebarItem } from '../../sidebar/types.ts'

type SidebarEntry = string | VueSidebarItem

function pickCollapsible(vn: ViewNode): boolean | undefined {
  const value = vn.node.meta?.collapsible
  return typeof value === 'boolean' ? value : undefined
}

/**
 * Projector for `engine.buildTree`. Maps a ViewNode to a sidebar entry:
 *   - index nodes     → plain string path (the parent's index URL)
 *   - group, no path  → display-only header with children
 *   - group, with link → collapsible group with link + children
 *   - page, with link → plain string path
 *   - anything else   → null (omitted)
 *
 * The `children` argument is the recursively built subtree; for groups
 * this replaces the previous `hasSourceChildren` + manual recursion.
 */
function sidebarProjector(
  vn: ViewNode,
  children: SidebarEntry[],
): SidebarEntry | null {
  if (vn.node.kind === 'index') {
    return vn.path
  }

  const collapsible = pickCollapsible(vn)

  if (vn.node.kind === 'group') {
    if (vn.path === null) {
      return {
        text: vn.label,
        collapsible: collapsible ?? true,
        children,
      }
    }
    return {
      text: vn.label,
      link: vn.path,
      collapsible: collapsible ?? true,
      children,
    }
  }

  // Leaf page
  return vn.path
}

/**
 * Build the VueSidebarItem tree for one section (e.g. `cislunar-orbits`)
 * in one locale.
 */
export function buildSectionSidebar(sectionId: NodeId, locale: Locale, taxonomyModule?: TaxonomyModule): VueSidebarItem {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine
  const query = viewEngine.fromRoot(sectionId).withLocale(locale)
  const root = query.root()

  if (!root || !root.path) {
    return {
      text: root?.label ?? sectionId,
      collapsible: false,
      children: [],
    }
  }

  return {
    text: root.label,
    collapsible: false,
    children: [root.path, ...query.buildTree(sidebarProjector)],
  }
}

/**
 * Build a map of section-id → per-locale VueSidebarItem for every
 * `kind: 'section'` node in the taxonomy.
 */
export function buildAllSectionSidebars(taxonomyModule?: TaxonomyModule): Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine
  const result: Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> = {}
  const sections = viewEngine.fromRoot(null).withLocale('zh').list()
  for (const vn of sections) {
    if (vn.node.kind !== 'section') continue
    result[vn.node.id] = {
      zh: buildSectionSidebar(vn.node.id, 'zh', taxonomyModule),
      en: buildSectionSidebar(vn.node.id, 'en', taxonomyModule),
    }
  }
  return result
}
