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
    label: { zh: '轨道', en: 'Orbits' },
    path: { zh: '/orbits/', en: '/en/orbits/' },
    order: 10,
    parentId: null,
  },
  {
    id: 'orbits/index',
    kind: 'index',
    label: { zh: '轨道总览', en: 'Orbits Overview' },
    path: { zh: '/orbits/', en: '/en/orbits/' },
    order: 10,
    parentId: 'orbits',
  },
  {
    id: 'orbits/nrho',
    kind: 'page',
    label: { zh: 'NRHO', en: 'NRHO' },
    path: { zh: '/orbits/nrho/', en: '/en/orbits/nrho/' },
    order: 20,
    parentId: 'orbits',
  },
  {
    id: 'orbits/display-group',
    kind: 'group',
    label: { zh: '展示组', en: 'Display Group' },
    path: { zh: null, en: null },
    order: 30,
    parentId: 'orbits',
  },
  {
    id: 'orbits/display-group/child',
    kind: 'page',
    label: { zh: '子页面', en: 'Child Page' },
    path: { zh: '/orbits/display-group/child/', en: '/en/orbits/display-group/child/' },
    order: 10,
    parentId: 'orbits/display-group',
  },
  {
    id: 'orbits/deep-space',
    kind: 'page',
    label: { zh: '深空', en: 'Deep Space' },
    path: { zh: '/orbits/deep-space/', en: '/en/orbits/deep-space/' },
    order: 40,
    parentId: 'orbits',
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('chat-index-sections adapter', () => {
  it('builds zh section categories from the fixture taxonomy', () => {
    const categories = buildSectionChatIndexCategories('zh', fixtureModule);
    expect(categories).toHaveLength(1);
    expect(categories[0].category).toBe('轨道');
  });

  it('builds en entries with en-prefixed locale paths', () => {
    const categories = buildSectionChatIndexCategories('en', fixtureModule);
    const orbits = categories[0];
    expect(orbits.entries[0]).toEqual({
      path: '/en/orbits/',
      title: 'Orbits',
    });
    expect(orbits.entries).toContainEqual({
      path: '/en/orbits/nrho/',
      title: 'NRHO',
    });
  });

  it('skips index nodes as chat entries', () => {
    const categories = buildSectionChatIndexCategories('zh', fixtureModule);
    const orbits = categories[0];
    // The section's own index page is skipped (kind === 'index').
    // But the section root itself (path: '/orbits/') is included.
    expect(orbits.entries.filter((e) => e.path === '/orbits/')).toHaveLength(1);
  });

  it('includes children of display-only groups', () => {
    const categories = buildSectionChatIndexCategories('zh', fixtureModule);
    const orbits = categories[0];
    expect(orbits.entries).toContainEqual({
      path: '/orbits/display-group/child/',
      title: '子页面',
    });
    // The display-only group itself (path null) is excluded.
    expect(orbits.entries.some((e) => e.title === '展示组')).toBe(false);
  });

  it('preserves sibling ordering', () => {
    const categories = buildSectionChatIndexCategories('zh', fixtureModule);
    const orbits = categories[0];
    const titles = orbits.entries.map((e) => e.title);
    expect(titles).toEqual(['轨道', 'NRHO', '子页面', '深空']);
  });
});
