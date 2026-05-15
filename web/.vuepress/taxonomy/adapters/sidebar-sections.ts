/**
 * Sidebar sections adapter — derives the per-locale VueSidebarItem tree
 * from the section taxonomy module.
 *
 * Replaces the inline `buildSectionChildren` / `buildSectionSidebar`
 * helpers that used to live in `gen-sidebar.ts`. Behaviour is preserved
 * byte-for-byte (snapshot-verified by tests).
 */
import { sectionTaxonomy } from '../section-taxonomy'
import type { Locale, NodeId, TaxonomyNode } from '../types'

/**
 * True when the node has *any* children in the source taxonomy, regardless
 * of locale visibility. The baseline sidebar builder emits a group node
 * whenever the source entry had `children: [...]`, even if every child is
 * locale-gated out — this helper preserves that quirk.
 */
function hasSourceChildren(parentId: NodeId): boolean {
  for (const node of sectionTaxonomy.all()) {
    if (node.parentId === parentId) return true
  }
  return false
}

export interface VueSidebarItem {
  text: string
  link?: string
  collapsible?: boolean
  children?: Array<string | VueSidebarItem>
}

function buildChildren(parentId: NodeId, locale: Locale): Array<string | VueSidebarItem> {
  const children = sectionTaxonomy.children(parentId, locale)
  const result: Array<string | VueSidebarItem> = []

  for (const child of children) {
    if (child.kind === 'index') {
      // Index nodes contribute the parent's path as a plain string entry.
      const path = child.path[locale]
      if (path) result.push(path)
      continue
    }

    const label = child.label[locale]
    const childPath = child.path[locale]
    // Use source-level "is this a group?" check rather than locale-filtered
    // child count, to preserve baseline behaviour where a group whose
    // children are all locale-gated out still renders as an empty group.
    const isGroup = hasSourceChildren(child.id)
    const collapsible = pickCollapsible(child)

    if (child.kind === 'group' && childPath === null) {
      // Display-only group header (no link of its own).
      result.push({
        text: label,
        collapsible: collapsible ?? true,
        children: isGroup ? buildChildren(child.id, locale) : [],
      })
      continue
    }

    if (isGroup && childPath) {
      result.push({
        text: label,
        link: childPath,
        collapsible: collapsible ?? true,
        children: buildChildren(child.id, locale),
      })
    } else if (childPath) {
      result.push(childPath)
    }
  }

  return result
}

function pickCollapsible(node: TaxonomyNode): boolean | undefined {
  const value = node.meta?.collapsible
  return typeof value === 'boolean' ? value : undefined
}

/**
 * Build the VueSidebarItem tree for one section (e.g. `cislunar-orbits`)
 * in one locale. Returns the same shape that `gen-sidebar.ts` used to
 * produce inline.
 */
export function buildSectionSidebar(sectionId: NodeId, locale: Locale): VueSidebarItem {
  const section = sectionTaxonomy.get(sectionId)
  const basePath = section.path[locale]
  if (!basePath) {
    return {
      text: section.label[locale],
      collapsible: false,
      children: [],
    }
  }

  return {
    text: section.label[locale],
    collapsible: false,
    children: [basePath, ...buildChildren(sectionId, locale)],
  }
}

/**
 * Build a map of section-id → per-locale VueSidebarItem for every
 * `kind: 'section'` node in the taxonomy. Convenience for `gen-sidebar.ts`.
 */
export function buildAllSectionSidebars(): Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> {
  const result: Record<string, { zh: VueSidebarItem; en: VueSidebarItem }> = {}
  for (const section of sectionTaxonomy.byKind('section', null)) {
    result[section.id] = {
      zh: buildSectionSidebar(section.id, 'zh'),
      en: buildSectionSidebar(section.id, 'en'),
    }
  }
  return result
}
