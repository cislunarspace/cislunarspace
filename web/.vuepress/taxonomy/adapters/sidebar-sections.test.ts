import { describe, expect, it } from 'vitest';
import { buildAllSectionSidebars, buildSectionSidebar } from './sidebar-sections';
import { createTaxonomyModule } from '../module';
import type { TaxonomyNode } from '../types';

/**
 * Minimal fixture with two sections:
 *
 *   orbits (section)
 *   ├── orbits/index (index)
 *   ├── orbits/near-earth (group)
 *   │   └── orbits/near-earth/leo (page)
 *   └── orbits/deep-space (page)
 *
 *   research (section)
 *   └── research/index (index)
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
    id: 'orbits/near-earth',
    kind: 'group',
    label: '近地轨道',
    path: '/orbits/near-earth/',
    order: 20,
    parentId: 'orbits',
  },
  {
    id: 'orbits/near-earth/leo',
    kind: 'page',
    label: 'LEO',
    path: '/orbits/near-earth/leo/',
    order: 10,
    parentId: 'orbits/near-earth',
  },
  {
    id: 'orbits/deep-space',
    kind: 'page',
    label: '深空',
    path: '/orbits/deep-space/',
    order: 30,
    parentId: 'orbits',
  },
  {
    id: 'research',
    kind: 'section',
    label: '科研',
    path: '/research/',
    order: 20,
    parentId: null,
  },
  {
    id: 'research/index',
    kind: 'index',
    label: '科研总览',
    path: '/research/',
    order: 10,
    parentId: 'research',
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('sidebar-sections adapter', () => {
  it('builds all section sidebars from the fixture taxonomy', () => {
    const sections = buildAllSectionSidebars(fixtureModule);
    expect(Object.keys(sections).sort()).toEqual(['orbits', 'research']);
  });

  it('section sidebar has the correct root text', () => {
    const sections = buildAllSectionSidebars(fixtureModule);
    expect(sections.orbits.text).toBe('轨道');
  });

  it('first child is the section index path', () => {
    const sidebar = buildSectionSidebar('orbits', fixtureModule);
    expect(sidebar.children?.[0]).toBe('/orbits/');
  });

  it('preserves sibling ordering from the taxonomy source', () => {
    const sidebar = buildSectionSidebar('orbits', fixtureModule);
    const children = sidebar.children ?? [];

    // children[0] = root.path (prepended by adapter)
    // children[1..] = buildTree results (index, group, leaf page)
    expect(children[0]).toBe('/orbits/');
    expect(children[1]).toBe('/orbits/'); // index node
    expect((children[2] as { text: string }).text).toBe('近地轨道');
    expect(children[3]).toBe('/orbits/deep-space/');
  });

  it('group contains its child pages', () => {
    const sidebar = buildSectionSidebar('orbits', fixtureModule);
    const children = sidebar.children ?? [];
    const group = children[2] as { text: string; children: unknown[] };
    expect(group.text).toBe('近地轨道');
    expect(group.children).toContain('/orbits/near-earth/leo/');
  });
});
