/**
 * Navbar adapter — derives VuePress NavbarConfig from the taxonomy module
 * via the TaxonomyViewEngine.
 *
 * The engine handles locale filtering, external-link path resolution, and
 * recursive tree traversal. The projector is a pure function mapping each
 * ViewNode (+ children) to a navbar item.
 */
import type { NavbarConfig } from 'vuepress';
import { engine as defaultEngine, NAVBAR_ROOT_ID, createViewEngine } from '..';
import type { Locale, TaxonomyModule } from '../types';
import type { ViewNode } from '../view-engine';

interface VuepressNavbarItem {
  text: string;
  link?: string;
  children?: VuepressNavbarItem[];
}

/**
 * Projector for `engine.buildTree`. A node with children becomes a dropdown;
 * a node with a link becomes a leaf. Nodes with neither are omitted.
 */
function navbarProjector(vn: ViewNode, children: VuepressNavbarItem[]): VuepressNavbarItem | null {
  if (children.length > 0) {
    return vn.path ? { text: vn.label, link: vn.path, children } : { text: vn.label, children };
  }

  if (vn.path) {
    return { text: vn.label, link: vn.path };
  }

  return null;
}

/**
 * Build the VuePress NavbarConfig for a single locale.
 */
export function buildNavbar(locale: Locale, taxonomyModule?: TaxonomyModule): NavbarConfig {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine;
  const items = viewEngine.fromRoot(NAVBAR_ROOT_ID).withLocale(locale).buildTree(navbarProjector);
  return items as NavbarConfig;
}
