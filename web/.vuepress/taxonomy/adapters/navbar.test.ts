import { describe, expect, it } from 'vitest';
import { buildNavbar } from './navbar';
import { createTaxonomyModule } from '../module';
import type { TaxonomyNode } from '../types';

/**
 * Minimal fixture: a navbar root with one dropdown group, one leaf link,
 * and one external-link.
 *
 *   navbar (root)
 *   ├── tools (group)
 *   │   └── satellite (leaf)
 *   ├── glossary (leaf)
 *   └── github (external-link)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'navbar',
    kind: 'navbar-root',
    label: '导航',
    path: null,
    order: 0,
    parentId: null,
  },
  {
    id: 'navbar/tools',
    kind: 'group',
    label: '工具',
    path: null,
    order: 10,
    parentId: 'navbar',
  },
  {
    id: 'navbar/tools/satellite',
    kind: 'navbar-link',
    label: '卫星仿真',
    path: '/satellite/',
    order: 10,
    parentId: 'navbar/tools',
  },
  {
    id: 'navbar/glossary',
    kind: 'navbar-link',
    label: '术语词典',
    path: '/glossary/',
    order: 20,
    parentId: 'navbar',
  },
  {
    id: 'navbar/github',
    kind: 'external-link',
    label: 'GitHub',
    path: null,
    meta: { href: 'https://github.com/example' },
    order: 30,
    parentId: 'navbar',
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('navbar adapter', () => {
  it('produces a navbar with all visible items in declared order', () => {
    const navbar = buildNavbar(fixtureModule) as Array<{ text: string; link?: string }>;
    const labels = navbar.map((item) => item.text);
    expect(labels).toEqual(['工具', '术语词典', 'GitHub']);
  });

  it('navbar links target the declared paths', () => {
    const navbar = buildNavbar(fixtureModule) as Array<{ text: string; link?: string }>;
    const glossary = navbar.find((item) => item.text === '术语词典');
    expect(glossary?.link).toBe('/glossary/');
  });

  it('external links carry their full href', () => {
    const navbar = buildNavbar(fixtureModule) as Array<{ text: string; link?: string }>;
    const github = navbar.find((item) => item.text === 'GitHub');
    expect(github?.link).toBe('https://github.com/example');
  });

  it('group renders as a dropdown with its own children', () => {
    const navbar = buildNavbar(fixtureModule) as Array<{
      text: string;
      children?: Array<{ text: string; link?: string }>;
    }>;
    const dropdown = navbar[0];

    expect(dropdown.text).toBe('工具');
    expect(dropdown.children?.map((c) => c.text)).toEqual(['卫星仿真']);
    expect(dropdown.children?.map((c) => c.link)).toEqual(['/satellite/']);
  });
});
