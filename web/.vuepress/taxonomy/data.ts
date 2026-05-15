/**
 * Taxonomy source data — single declarative file authoring all navbar
 * nodes. Section / page nodes still live in `sidebar-data.ts` for now
 * and are wrapped via `defineSidebarSubtree()`; flattening them into this
 * file is a follow-up migration (see ADR-0001 §Follow-up).
 *
 * Editing rules:
 *   - `id` is the stable identity. Renaming `id` is a migration.
 *   - `order` is sibling-scoped (lower comes first within the same parent).
 *   - `path.zh` / `path.en` must be set when the node is visible in that
 *     locale, unless the kind is `navbar-root` or `external-link`.
 *   - To gate a node out of one locale, set `locales: ['zh']` (or `['en']`)
 *     and the corresponding `path` to `null`.
 */
import type { TaxonomyNode } from './types'

/**
 * Top-level navbar.
 *
 * `parentId: 'navbar'` so the adapter can ask
 * `taxonomy.children('navbar', locale)` for a deterministic ordered list.
 * The root `navbar` node has no path and is the only `kind: 'navbar-root'` node.
 */
export const NAVBAR_ROOT_ID = 'navbar'

export const navbarRoot: TaxonomyNode = {
  id: NAVBAR_ROOT_ID,
  kind: 'navbar-root',
  label: { zh: '主导航', en: 'Main navigation' },
  path: { zh: null, en: null },
  order: 0,
  parentId: null,
}

/**
 * Children of `navbar`. Order matches the visual order of the existing
 * navbar.ts / navbar-en.ts arrays at the time of taxonomy introduction.
 */
const navbarChildren: TaxonomyNode[] = [
  // — "Inquiry tools" dropdown —
  {
    id: 'navbar/inquiry-tools',
    kind: 'group',
    label: { zh: '探究工具', en: 'Inquiry Tools' },
    // A parent group: render as dropdown, no link of its own.
    path: { zh: null, en: null },
    locales: ['zh', 'en'],
    order: 10,
    parentId: NAVBAR_ROOT_ID,
    meta: { dropdown: true },
  },
  {
    id: 'navbar/inquiry-tools/satellite-simulation',
    kind: 'navbar-link',
    label: { zh: '卫星轨道仿真教学平台', en: 'Satellite Orbit Simulation' },
    path: { zh: '/satellite-simulation/', en: '/en/satellite-simulation/' },
    order: 10,
    parentId: 'navbar/inquiry-tools',
  },
  {
    id: 'navbar/inquiry-tools/dialectic',
    kind: 'navbar-link',
    label: { zh: '史学思辨', en: 'Historical Inquiry' },
    // Single shared route (not locale-prefixed) — preserve current behaviour.
    path: { zh: '/dialectic', en: '/dialectic' },
    order: 20,
    parentId: 'navbar/inquiry-tools',
  },

  // — Top-level items —
  {
    id: 'navbar/glossary',
    kind: 'navbar-link',
    label: { zh: '地月空间术语词典', en: 'Cislunar Glossary' },
    path: { zh: '/glossary/', en: '/en/glossary/' },
    order: 20,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/resources-tools',
    kind: 'navbar-link',
    label: { zh: '资源与工具', en: 'Resources & Tools' },
    path: { zh: '/resources-tools/', en: '/en/resources-tools/' },
    order: 30,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/space-news',
    kind: 'navbar-link',
    label: { zh: 'Space News', en: 'Space News' },
    path: { zh: '/space-news/', en: '/en/space-news/' },
    order: 50,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/ai-chat',
    kind: 'navbar-link',
    label: { zh: 'AI问答', en: 'AI Q&A' },
    path: { zh: '/ai-chat', en: '/en/ai-chat' },
    order: 60,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/forum',
    kind: 'navbar-link',
    label: { zh: '论坛', en: 'Forum' },
    path: { zh: '/forum', en: '/en/forum' },
    order: 70,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/home',
    kind: 'navbar-link',
    label: { zh: '首页', en: 'Home' },
    path: { zh: '/', en: '/en/' },
    order: 80,
    parentId: NAVBAR_ROOT_ID,
  },

  // — External links —
  {
    id: 'navbar/gitee',
    kind: 'external-link',
    label: { zh: 'Gitee', en: 'Gitee' },
    path: { zh: null, en: null },
    order: 90,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://gitee.com/cislunarspace/cislunarspace' },
  },
  {
    id: 'navbar/github',
    kind: 'external-link',
    label: { zh: 'GitHub', en: 'GitHub' },
    path: { zh: null, en: null },
    order: 100,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://github.com/cislunarspace/cislunarspace' },
  },
]

export const taxonomyNodes: readonly TaxonomyNode[] = Object.freeze([
  navbarRoot,
  ...navbarChildren,
])
