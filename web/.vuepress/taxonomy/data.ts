/**
 * Taxonomy source data — single declarative file authoring all
 * currently-flat node kinds: navbar, wayfinding, glossary.
 *
 * Each top-level node has a fully-explicit `id` (no derivation), so the
 * data is a plain flat array consumed by `defineTaxonomy()` together
 * with the nested section / page tree in `sidebar/data.ts`.
 *
 * Authoring rules:
 *   - Every `id` is unique within the file. Sibling order is the only
 *     sort key (handled by `compareNodes` in `module.ts`).
 *   - `parentId` is either `null` (top-level) or the id of an existing
 *     root. This file uses three roots: `navbar`, `wayfinding`,
 *     `glossary`.
 *     `glossary-category` nodes may also nest one level: a subcategory
 *     node's `parentId` is its category node (e.g. `glossary/orbits`),
 *     and its `meta.slug` is the full path form (`orbits/halo`).
 *   - Order ranges are by kind for validator sibling-order uniqueness:
 *     navbar subtree 0–9 999, wayfinding 10 000–19 999, glossary
 *     20 000–29 999. Section / page nodes
 *     (in `sidebar/data.ts`) live in the same module after `defineTaxonomy`
 *     flattens the nested literal.
 */
import type { TaxonomyNode } from './types';

export const NAVBAR_ROOT_ID = 'navbar';
export const WAYFINDING_ROOT_ID = 'wayfinding';
export const GLOSSARY_ROOT_ID = 'glossary';

// ── Navbar subtree ───────────────────────────────────────────────────────────

export const navbarRoot: TaxonomyNode = {
  id: NAVBAR_ROOT_ID,
  kind: 'navbar-root',
  label: '主导航',
  path: null,
  order: 0,
  parentId: null,
};

const navbarChildren: TaxonomyNode[] = [
  {
    id: 'navbar/glossary',
    kind: 'page',
    label: '地月空间术语词典',
    path: '/glossary/',
    order: 40,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/resources-tools',
    kind: 'page',
    label: '资源与工具',
    path: '/resources-tools/',
    order: 50,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/ai-chat',
    kind: 'page',
    label: 'AI问答',
    path: '/ai-chat',
    order: 70,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/home',
    kind: 'page',
    label: '首页',
    path: '/',
    order: 90,
    parentId: NAVBAR_ROOT_ID,
  },
  {
    id: 'navbar/gitee',
    kind: 'external-link',
    label: 'Gitee',
    path: null,
    order: 100,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://gitee.com/cislunarspace/cislunarspace' },
  },
  {
    id: 'navbar/github',
    kind: 'external-link',
    label: 'GitHub',
    path: null,
    order: 110,
    parentId: NAVBAR_ROOT_ID,
    meta: { href: 'https://github.com/cislunarspace/cislunarspace' },
  },
];

// ── Wayfinding subtree ───────────────────────────────────────────────────────

export const wayfindingRoot: TaxonomyNode = {
  id: WAYFINDING_ROOT_ID,
  kind: 'group',
  label: '全站导览',
  path: null,
  order: 10000,
  parentId: null,
};

const wayfindingChildren: TaxonomyNode[] = [
  {
    id: 'wayfinding/home',
    kind: 'group',
    label: '首页总览',
    path: '/',
    order: 10010,
    parentId: WAYFINDING_ROOT_ID,
  },
  {
    id: 'wayfinding/what-is-cislunarspace',
    kind: 'group',
    label: '什么是地月空间',
    path: '/what-is-cislunarspace/',
    order: 10020,
    parentId: WAYFINDING_ROOT_ID,
  },
  {
    id: 'wayfinding/cislunar-orbits',
    kind: 'group',
    label: '地月空间轨道',
    path: '/cislunar-orbits/',
    order: 10030,
    parentId: WAYFINDING_ROOT_ID,
  },
  {
    id: 'wayfinding/research-frontiers',
    kind: 'group',
    label: '研究前沿',
    path: '/research-frontiers/',
    order: 10040,
    parentId: WAYFINDING_ROOT_ID,
  },
  {
    id: 'wayfinding/glossary',
    kind: 'group',
    label: '术语词典',
    path: '/glossary/',
    order: 10050,
    parentId: WAYFINDING_ROOT_ID,
  },
  {
    id: 'wayfinding/resources-tools',
    kind: 'group',
    label: '数据与工具',
    path: '/resources-tools/',
    order: 10060,
    parentId: WAYFINDING_ROOT_ID,
  },
];

// ── Glossary subtree ─────────────────────────────────────────────────────────

export const glossaryRoot: TaxonomyNode = {
  id: GLOSSARY_ROOT_ID,
  kind: 'group',
  label: '术语词典根',
  path: '/glossary/',
  order: 20000,
  parentId: null,
};

const glossaryCategoryNodes: TaxonomyNode[] = [
  {
    id: 'glossary/fundamentals',
    kind: 'glossary-category',
    label: '基础概念',
    path: null,
    order: 20010,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'fundamentals' },
  },
  {
    id: 'glossary/dynamics',
    kind: 'glossary-category',
    label: '动力学与数学基础',
    path: null,
    order: 20020,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'dynamics' },
  },
  {
    id: 'glossary/orbits',
    kind: 'glossary-category',
    label: '任务轨道',
    path: null,
    order: 20030,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'orbits' },
  },
  {
    id: 'glossary/navigation',
    kind: 'glossary-category',
    label: '导航技术与系统',
    path: null,
    order: 20040,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'navigation' },
  },
  {
    id: 'glossary/doctrine',
    kind: 'glossary-category',
    label: '军事太空条令',
    path: null,
    order: 20060,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'doctrine' },
  },
  {
    id: 'glossary/organizations',
    kind: 'glossary-category',
    label: '机构和组织',
    path: null,
    order: 20070,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'organizations' },
  },
  {
    id: 'glossary/other-tech',
    kind: 'glossary-category',
    label: '其他技术',
    path: null,
    order: 20080,
    parentId: GLOSSARY_ROOT_ID,
    meta: { slug: 'other' },
  },
];

// ── Glossary subcategories ──────────────────────────────────────────────────
//
// 子分类 = 分类目录下的一级子目录（web/glossary/<cat>/<sub>/<slug>.md），
// 只支持一层。kind 仍为 glossary-category，parentId 指向所属分类节点，
// meta.slug 为完整路径形（'orbits/halo'）。词条也可直接放在分类根目录，
// 表示未细分。admin 添加 glossary 子分类时会向本数组追加节点。
const glossarySubcategoryNodes: TaxonomyNode[] = [];

// ── Combined flat array ──────────────────────────────────────────────────────

export const flatTaxonomyNodes: TaxonomyNode[] = [
  navbarRoot,
  ...navbarChildren,
  wayfindingRoot,
  ...wayfindingChildren,
  glossaryRoot,
  ...glossaryCategoryNodes,
  ...glossarySubcategoryNodes,
];
