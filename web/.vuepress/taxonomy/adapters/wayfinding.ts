/**
 * Wayfinding adapter — derives the historical `WayfindingIntake` shape
 * (a single disclosure called "全站导览" / "Site map") from the unified
 * taxonomy module via the TaxonomyViewEngine.
 *
 * The intake is the leading entry of every page's sidebar config. The
 * engine provides locale-filtered children with pre-resolved paths/labels;
 * the projection maps each to a `{ text, link? }` item.
 */
import { engine as defaultEngine, WAYFINDING_ROOT_ID, createViewEngine } from '..'
import type { Locale, TaxonomyModule } from '../types'
import type { TaxonomyViewEngine } from '../view-engine'
import type { VueSidebarItem } from '../../sidebar/types.ts'

/** Mirrors `SidebarIntake.VueSidebarItem` (see sidebar/types.ts). */
export interface WayfindingIntake {
  zh: VueSidebarItem
  en: VueSidebarItem
}

function buildSide(locale: Locale, viewEngine: TaxonomyViewEngine): VueSidebarItem {
  const query = viewEngine.fromRoot(WAYFINDING_ROOT_ID).withLocale(locale)
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

export function buildWayfindingIntake(taxonomyModule?: TaxonomyModule): WayfindingIntake {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine
  return {
    zh: buildSide('zh', viewEngine),
    en: buildSide('en', viewEngine),
  }
}
