import { describe, expect, it } from 'vitest';
import { buildSectionChatIndexCategories } from './chat-index-sections';
import { createTaxonomyModule } from '../module';
import type { TaxonomyNode } from '../types';

/**
 * Minimal fixture with one section containing pages, an index node, and a
 * display-only group (path null):
 *
 *   orbits (section)
 *   ├── orbits/index (index — should be skipped)
 *   ├── orbits/nrho (page)
 *   ├── orbits/display-group (group, path null — skipped but children kept)
 *   │   └── orbits/display-group/child (page)
 *   └── orbits/deep-space (page)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'orbits',
    kind: 'section',
    label: '轨道',
    path: '/orbits/',
    order: 10,
    parentId: null,
  },
  {
    id: 'orbits/index',
    kind: 'index',
    label: '轨道总览',
    path: '/orbits/',
    order: 10,
    parentId: 'orbits',
  },
  {
    id: 'orbits/nrho',
    kind: 'page',
    label: 'NRHO',
    path: '/orbits/nrho/',
    order: 20,
    parentId: 'orbits',
  },
  {
    id: 'orbits/display-group',
    kind: 'group',
    label: '显示组',
    path: null,
    order: 30,
    parentId: 'orbits',
  },
  {
    id: 'orbits/display-group/child',
    kind: 'page',
    label: '子页',
    path: '/orbits/child/',
    order: 10,
    parentId: 'orbits/display-group',
  },
  {
    id: 'orbits/deep-space',
    kind: 'page',
    label: '深空',
    path: '/orbits/deep-space/',
    order: 40,
    parentId: 'orbits',
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('chat-index-sections adapter', () => {
  it('builds section categories from the fixture taxonomy', () => {
    const categories = buildSectionChatIndexCategories(fixtureModule);
    expect(categories).toHaveLength(1);
    expect(categories[0].category).toBe('轨道');
  });

  it('skips index nodes as chat entries', () => {
    const [category] = buildSectionChatIndexCategories(fixtureModule);
    expect(category.entries.map((e) => e.title)).not.toContain('轨道总览');
  });

  it('includes children of display-only groups', () => {
    const [category] = buildSectionChatIndexCategories(fixtureModule);
    expect(category.entries.map((e) => e.title)).toContain('子页');
  });

  it('preserves sibling ordering', () => {
    const [category] = buildSectionChatIndexCategories(fixtureModule);
    expect(category.entries.map((e) => e.title)).toEqual(['轨道', 'NRHO', '子页', '深空']);
  });
});
