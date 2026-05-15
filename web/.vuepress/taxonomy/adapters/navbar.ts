/**
 * Navbar adapter — derives VuePress NavbarConfig from the taxonomy module.
 *
 * Replaces the hand-maintained navbar.ts / navbar-en.ts arrays. Both locales
 * now share a single ordered source.
 */
import type { NavbarConfig } from 'vuepress'
import { NAVBAR_ROOT_ID, taxonomy } from '..'
import type { Locale, TaxonomyNode } from '../types'

interface VuepressNavbarItem {
  text: string
  link?: string
  children?: VuepressNavbarItem[]
}

function pathFor(node: TaxonomyNode, locale: Locale): string | null {
  if (node.kind === 'external-link') {
    const href = node.meta?.href
    return typeof href === 'string' ? href : null
  }
  return node.path[locale] ?? null
}

function buildItem(node: TaxonomyNode, locale: Locale): VuepressNavbarItem | null {
  const text = node.label[locale]
  const children = taxonomy.children(node.id, locale)

  // Dropdown: present even when this node has no link of its own.
  if (children.length > 0) {
    const childItems: VuepressNavbarItem[] = []
    for (const child of children) {
      const item = buildItem(child, locale)
      if (item) childItems.push(item)
    }
    if (childItems.length === 0) return null
    const parentLink = pathFor(node, locale)
    return parentLink
      ? { text, link: parentLink, children: childItems }
      : { text, children: childItems }
  }

  const link = pathFor(node, locale)
  if (!link) return null
  return { text, link }
}

/**
 * Build the VuePress NavbarConfig for a single locale.
 *
 * Honors taxonomy locale gating, ordering, and dropdown structure.
 */
export function buildNavbar(locale: Locale): NavbarConfig {
  const items: VuepressNavbarItem[] = []
  for (const node of taxonomy.children(NAVBAR_ROOT_ID, locale)) {
    const item = buildItem(node, locale)
    if (item) items.push(item)
  }
  return items as NavbarConfig
}
