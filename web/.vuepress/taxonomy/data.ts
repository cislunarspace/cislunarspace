/**
 * Taxonomy source data — single declarative file authoring all
 * currently-flat node kinds: navbar, wayfinding, glossary, news-category.
 *
 * Each top-level node has a fully-explicit `id` (no derivation), so the
 * data is a plain flat array consumed by `defineTaxonomy()` together
 * with the nested section / page tree in `sidebar/data.ts`.
 *
 * Authoring rules:
 *   - Every `id` is unique within the file. Sibling order is the only
 *     sort key (handled by `compareNodes` in `module.ts`).
 *   - `parentId` is either `null` (top-level) or the id of an existing
 *     root. This file uses four roots: `navbar`, `wayfinding`,
 *     `glossary`, plus 15 `news-category` nodes (each is its own root).
 *   - Order ranges are by kind for validator sibling-order uniqueness:
 *     navbar subtree 0–9 999, wayfinding 10 000–19 999, glossary
 *     20 000–29 999, news-category 30 000–39 999. Section / page nodes
 *     (in `sidebar/data.ts`) live in the same module after `defineTaxonomy`
 *     flattens the nested literal.
 *   - `news-category` nodes must carry `meta.color` as a 7-char hex
 *     (`#RRGGBB`); the validator enforces it.
 */
import type { TaxonomyNode } from './types'

export const NAVBAR_ROOT_ID = 'navbar'
export const WAYFINDING_ROOT_ID = 'wayfinding'
export const GLOSSARY_ROOT_ID = 'glossary'

// ── Navbar subtree ───────────────────────────────────────────────────────────

export const navbarRoot: TaxonomyNode = {
  id: NAVBAR_ROOT_ID,
  kind: 'navbar-root',
  label: { zh: '主导航', en: 'Main navigation' },
  path: { zh: null, en: null },
  order: 0,
  parentId: null,
}

const navbarChildren: TaxonomyNode[] = [
  {
    id: 'navbar/inquiry-tools',
    kind: 'group',
    label: { zh: '探究工具', en: 'Inquiry Tools' },
    path: { zh: null, en: null },
    order: 10,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/satellite-simulation',
    kind: 'page',
    label: { zh: '卫星轨道仿真教学平台', en: 'Satellite Simulation' },
    path: { zh: '/satellite-simulation/', en: '/satellite-simulation/' },
    order: 20,
    parentId: 'navbar/inquiry-tools',
  },
  {
    id: 'navbar/dialectic',
    kind: 'page',
    label: { zh: '史学思辨', en: 'Historical Inquiry' },
    path: { zh: '/dialectic', en: null },
    locales: ['zh'],
    order: 30,
    parentId: 'navbar/inquiry-tools',
  },
  {
    id: 'navbar/glossary',
    kind: 'page',
    label: { zh: '地月空间术语词典', en: 'Cislunar Glossary' },
    path: { zh: '/glossary/', en: '/en/glossary/' },
    order: 40,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/resources-tools',
    kind: 'page',
    label: { zh: '资源与工具', en: 'Resources & Tools' },
    path: { zh: '/resources-tools/', en: '/en/resources-tools/' },
    order: 50,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/space-news',
    kind: 'page',
    label: { zh: 'Space News', en: 'Space News' },
    path: { zh: '/space-news/', en: '/en/space-news/' },
    order: 60,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/ai-chat',
    kind: 'page',
    label: { zh: 'AI问答', en: 'AI Q&A' },
    path: { zh: '/ai-chat', en: '/en/ai-chat' },
    order: 70,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/forum',
    kind: 'page',
    label: { zh: '论坛', en: 'Forum' },
    path: { zh: '/forum', en: '/en/forum' },
    order: 80,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/home',
    kind: 'page',
    label: { zh: '首页', en: 'Home' },
    path: { zh: '/', en: '/en/' },
    order: 90,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/gitee',
    kind: 'external-link',
    label: { zh: 'Gitee', en: 'Gitee' },
    path: { zh: null, en: null },
    order: 100,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://gitee.com/cislunarspace/cislunarspace' },
  },
  {
    id: 'navbar/github',
    kind: 'external-link',
    label: { zh: 'GitHub', en: 'GitHub' },
    path: { zh: null, en: null },
    order: 110,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://github.com/cislunarspace/cislunarspace' },
  },
]

// ── Wayfinding subtree ───────────────────────────────────────────────────────

export const wayfindingRoot: TaxonomyNode = {
  id: WAYFINDING_ROOT_ID,
  kind: 'group',
  label: { zh: '全站导览', en: 'Site map' },
  path: { zh: null, en: null },
  order: 10000,
  parentId: null,
}

const wayfindingChildren: TaxonomyNode[] = [
  { id: 'wayfinding/home', kind: 'group', label: { zh: '首页（知识总览）', en: 'Home (overview)' }, path: { zh: '/', en: '/en/' }, order: 10010, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/what-is-cislunarspace', kind: 'group', label: { zh: '地月空间是什么', en: 'What is cislunar space' }, path: { zh: '/what-is-cislunarspace/', en: '/en/what-is-cislunarspace/' }, order: 10020, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/cislunar-orbits', kind: 'group', label: { zh: '飞行器运行轨道', en: 'Spacecraft trajectories' }, path: { zh: '/cislunar-orbits/', en: '/en/cislunar-orbits/' }, order: 10030, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/research-frontiers', kind: 'group', label: { zh: '科研方向与机构', en: 'Directions & labs' }, path: { zh: '/research-frontiers/', en: '/en/research-frontiers/' }, order: 10040, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/glossary', kind: 'group', label: { zh: '术语 · 定义与概念', en: 'Glossary · terms & definitions' }, path: { zh: '/glossary/', en: '/en/glossary/' }, order: 10050, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/resources-tools', kind: 'group', label: { zh: '数据与代码', en: 'Data & code' }, path: { zh: '/resources-tools/', en: '/en/resources-tools/' }, order: 10060, parentId: WAYFINDING_ROOT_ID },
  { id: 'wayfinding/space-news', kind: 'group', label: { zh: '航天新闻归档', en: 'Space industry archive' }, path: { zh: '/space-news/', en: '/en/space-news/' }, order: 10070, parentId: WAYFINDING_ROOT_ID },
]

// ── Glossary subtree ─────────────────────────────────────────────────────────

export const glossaryRoot: TaxonomyNode = {
  id: GLOSSARY_ROOT_ID,
  kind: 'group',
  label: { zh: '术语词典根', en: 'Glossary root' },
  path: { zh: null, en: null },
  order: 20000,
  parentId: null,
}

const glossaryCategoryNodes: TaxonomyNode[] = [
  { id: 'glossary/fundamentals', kind: 'glossary-category', label: { zh: '基础概念', en: 'Fundamentals' }, path: { zh: null, en: null }, order: 20010, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'fundamentals' } },
  { id: 'glossary/dynamics', kind: 'glossary-category', label: { zh: '动力学与数学基础', en: 'Dynamics & math' }, path: { zh: null, en: null }, order: 20020, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'dynamics' } },
  { id: 'glossary/orbits', kind: 'glossary-category', label: { zh: '任务轨道', en: 'Mission orbits' }, path: { zh: null, en: null }, order: 20030, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'orbits' } },
  { id: 'glossary/navigation', kind: 'glossary-category', label: { zh: '导航技术与系统', en: 'Navigation & systems' }, path: { zh: null, en: null }, order: 20040, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'navigation' } },
  { id: 'glossary/observation', kind: 'glossary-category', label: { zh: '天文观测技术', en: 'Astronomy & observation' }, path: { zh: null, en: null }, order: 20050, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'observation' } },
  { id: 'glossary/doctrine', kind: 'glossary-category', label: { zh: '军事太空条令', en: 'Military space doctrine' }, path: { zh: null, en: null }, order: 20060, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'doctrine' } },
  { id: 'glossary/organizations', kind: 'glossary-category', label: { zh: '机构和组织', en: 'Organizations' }, path: { zh: null, en: null }, order: 20070, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'organizations' } },
  { id: 'glossary/other-tech', kind: 'glossary-category', label: { zh: '其他技术', en: 'Other technologies' }, path: { zh: null, en: null }, order: 20080, parentId: GLOSSARY_ROOT_ID, meta: { slug: 'other-tech' } },
]

// ── News categories (15 roots) ───────────────────────────────────────────────
//
// Each `news-category` node carries a 7-char hex `meta.color` consumed by
// SpaceNewsHome / Sidebar / Archive components. The validator enforces
// the hex shape at module load so a typo doesn't silently propagate.

const newsCategoryNodes: TaxonomyNode[] = [
  { id: 'artemis', kind: 'news-category', label: { zh: 'Artemis', en: 'Artemis' }, path: { zh: null, en: null }, order: 30010, parentId: null, meta: { color: '#6366f1' } },
  { id: 'spacex', kind: 'news-category', label: { zh: 'SpaceX', en: 'SpaceX' }, path: { zh: null, en: null }, order: 30020, parentId: null, meta: { color: '#0ea5e9' } },
  { id: 'china', kind: 'news-category', label: { zh: '中国航天', en: 'China Space' }, path: { zh: null, en: null }, order: 30030, parentId: null, meta: { color: '#dc2626' } },
  { id: 'nasa', kind: 'news-category', label: { zh: 'NASA', en: 'NASA' }, path: { zh: null, en: null }, order: 30040, parentId: null, meta: { color: '#2563eb' } },
  { id: 'esa', kind: 'news-category', label: { zh: 'ESA', en: 'ESA' }, path: { zh: null, en: null }, order: 30050, parentId: null, meta: { color: '#0891b2' } },
  { id: 'iss', kind: 'news-category', label: { zh: '空间站', en: 'Space Station' }, path: { zh: null, en: null }, order: 30060, parentId: null, meta: { color: '#7c3aed' } },
  { id: 'launch', kind: 'news-category', label: { zh: '发射', en: 'Launches' }, path: { zh: null, en: null }, order: 30070, parentId: null, meta: { color: '#ea580c' } },
  { id: 'commercial', kind: 'news-category', label: { zh: '商业航天', en: 'Commercial Space' }, path: { zh: null, en: null }, order: 30080, parentId: null, meta: { color: '#059669' } },
  { id: 'science', kind: 'news-category', label: { zh: '科学发现', en: 'Science' }, path: { zh: null, en: null }, order: 30090, parentId: null, meta: { color: '#8b5cf6' } },
  { id: 'policy', kind: 'news-category', label: { zh: '政策战略', en: 'Policy & Strategy' }, path: { zh: null, en: null }, order: 30100, parentId: null, meta: { color: '#ca8a04' } },
  { id: 'blue-origin', kind: 'news-category', label: { zh: 'Blue Origin', en: 'Blue Origin' }, path: { zh: null, en: null }, order: 30110, parentId: null, meta: { color: '#4338ca' } },
  { id: 'commercial-space', kind: 'news-category', label: { zh: '商业航天', en: 'Commercial Space' }, path: { zh: null, en: null }, order: 30120, parentId: null, meta: { color: '#059669' } },
  { id: 'rocket-lab', kind: 'news-category', label: { zh: 'Rocket Lab', en: 'Rocket Lab' }, path: { zh: null, en: null }, order: 30130, parentId: null, meta: { color: '#0fbcf9' } },
  { id: 'technology', kind: 'news-category', label: { zh: '技术', en: 'Technology' }, path: { zh: null, en: null }, order: 30140, parentId: null, meta: { color: '#64748b' } },
  { id: 'human-spaceflight', kind: 'news-category', label: { zh: '载人航天', en: 'Human Spaceflight' }, path: { zh: null, en: null }, order: 30150, parentId: null, meta: { color: '#dc2626' } },
]

// ── Combined flat array ──────────────────────────────────────────────────────

export const flatTaxonomyNodes: TaxonomyNode[] = [
  navbarRoot,
  ...navbarChildren,
  wayfindingRoot,
  ...wayfindingChildren,
  glossaryRoot,
  ...glossaryCategoryNodes,
  ...newsCategoryNodes,
]
