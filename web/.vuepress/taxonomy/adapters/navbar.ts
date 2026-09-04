/**
 * Navbar adapter — derives VuePress NavbarConfig from the taxonomy module
 * via the TaxonomyViewEngine.
 *
 * The engine handles external-link path resolution and recursive tree
 * traversal. The projector is a pure function mapping each ViewNode
 * (+ children) to a navbar item.
 */
import type { NavbarConfig } from 'vuepress';
import { engine as defaultEngine, NAVBAR_ROOT_ID, createViewEngine } from '..';
import type { TaxonomyModule } from '../types';
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

/** Build the VuePress NavbarConfig. */
export function buildNavbar(taxonomyModule?: TaxonomyModule): NavbarConfig {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine;
  const items = viewEngine.fromRoot(NAVBAR_ROOT_ID).buildTree(navbarProjector);
  return items as NavbarConfig;
}
