/**
 * Wayfinding adapter — derives the historical `WayfindingIntake` shape
 * (a single disclosure called "全站导览" / "Site map") from the unified
 * taxonomy module.
 *
 * The intake is used as the leading entry of every page's sidebar config
 * (so every page gets a "where am I" overview at the top). The taxonomy
 * source: `taxonomy/data.ts` → `wayfindingRoot` + `wayfindingChildren`.
 *
 * Children are produced from `taxonomy.children('wayfinding', locale)`,
 * ordered by `node.order`. The root node's `label[locale]` is the
 * disclosure title.
 *
 * Label simplification: the previous hand-built intake prepended a brand
 * prefix ("入门 · ...", "轨道 · ..", …). Those prefixes were removed
 * when the data moved into the taxonomy — the surrounding sidebar already
 * gives context, and the disclosure stays compact. The text of each link
 * is now the `label[locale]` straight from the taxonomy node.
 */
import { WAYFINDING_ROOT_ID, taxonomy } from '..'
import type { Locale, TaxonomyNode } from '../types'

/** Mirrors `SidebarIntake.VueSidebarItem` (see sidebar-types.ts). */
export interface VueSidebarItem {
  text: string
  link?: string
  collapsible?: boolean
  children?: Array<string | VueSidebarItem>
}

export interface WayfindingIntake {
  zh: VueSidebarItem
  en: VueSidebarItem
}

function childItem(node: TaxonomyNode, locale: Locale): VueSidebarItem {
  const link = node.path[locale]
  if (!link) {
    return { text: node.label[locale] }
  }
  return { text: node.label[locale], link }
}

function buildSide(locale: Locale): VueSidebarItem {
  const root = taxonomy.get(WAYFINDING_ROOT_ID)
  const children = taxonomy.children(WAYFINDING_ROOT_ID, locale)
  return {
    text: root.label[locale],
    collapsible: false,
    children: children.map(child => childItem(child, locale)),
  }
}

/**
 * Build the locale-paired wayfinding intake. Equivalent in shape to the
 * old `intakes/wayfinding-intake.ts` (and to the
 * `SidebarIntake.WayfindingIntake` type) so existing consumers can be
 * re-pointed at this adapter without other changes.
 */
export function buildWayfindingIntake(): WayfindingIntake {
  return {
    zh: buildSide('zh'),
    en: buildSide('en'),
  }
}
