/**
 * Wayfinding adapter — derives the historical `WayfindingIntake` shape
 * (a single disclosure called "全站导览") from the unified taxonomy module
 * via the TaxonomyViewEngine.
 *
 * The intake is the leading entry of every page's sidebar config. The
 * engine provides sorted children with pre-resolved paths/labels; the
 * projection maps each to a `{ text, link? }` item.
 */
import { engine as defaultEngine, WAYFINDING_ROOT_ID, createViewEngine } from '..';
import type { TaxonomyModule } from '../types';
import type { VueSidebarItem } from '../../sidebar/types.ts';

/** Mirrors `SidebarIntake.VueSidebarItem` (see sidebar/types.ts). */
export type WayfindingIntake = VueSidebarItem;

export function buildWayfindingIntake(taxonomyModule?: TaxonomyModule): WayfindingIntake {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine;
  const query = viewEngine.fromRoot(WAYFINDING_ROOT_ID);
  const root = query.root();
  return {
    text: root!.label,
    collapsible: false,
    children: query
      .list()
      .map((vn) => (vn.path ? { text: vn.label, link: vn.path } : { text: vn.label })),
  };
}
