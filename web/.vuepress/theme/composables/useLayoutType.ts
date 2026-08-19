/**
 * useLayoutType — derives the current page layout type from frontmatter.
 *
 * Used by Layout.vue to set layout-specific CSS classes on the VuePress shell.
 * These classes are intentionally global (applied to .vp-theme-container) because
 * VuePress's Layout component is the root wrapper — layout styles must pierce
 * its component boundary to affect the outer shell.
 *
 * Adding a new layout type:
 * 1. Add the layout type string to LayoutTypes in layout-types.ts
 * 2. Add a new computed property and corresponding :class binding in Layout.vue.
 */
import { computed } from 'vue';
import { usePage } from 'vuepress/client';
import { LayoutTypes } from '../utils/layout-types';

export function useLayoutType() {
  const page = usePage();
  return computed(() => String(page.value.frontmatter?.layout || ''));
}

export function useIsLayout(layoutType: LayoutTypes | LayoutTypes[]) {
  const types = Array.isArray(layoutType) ? layoutType : [layoutType];
  const layout = useLayoutType();
  return computed(() => types.includes(layout.value as LayoutTypes));
}

export { LayoutTypes };
