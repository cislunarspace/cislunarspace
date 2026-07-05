/**
 * Wayfinding adapter — derives the historical `WayfindingIntake` shape
 * (a single disclosure called "全站导览" / "Site map") from the unified
 * taxonomy module via the TaxonomyViewEngine.
 *
 * The intake is the leading entry of every page's sidebar config. The
 * engine provides locale-filtered children with pre-resolved paths/labels;
 * the projection maps each to a `{ text, link? }` item.
 */
import { engine, WAYFINDING_ROOT_ID } from '..'
import type { Locale } from '../types'
import type { VueSidebarItem } from '../../sidebar/types.ts'

/** Mirrors `SidebarIntake.VueSidebarItem` (see sidebar/types.ts). */
export interface WayfindingIntake {
  zh: VueSidebarItem
  en: VueSidebarItem
}

function buildSide(locale: Locale): VueSidebarItem {
  const query = engine.fromRoot(WAYFINDING_ROOT_ID).withLocale(locale)
  const root = query.root()
  return {
    text: root!.label,
    collapsible: false,
    children: query.list().map((vn) =>
      vn.path
        ? { text: vn.label, link: vn.path }
        : { text: vn.label },
    ),
  }
}

export function buildWayfindingIntake(): WayfindingIntake {
  return {
    zh: buildSide('zh'),
    en: buildSide('en'),
  }
}
