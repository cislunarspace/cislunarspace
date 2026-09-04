/**
 * defineTaxonomy tests — exercise the section / page flattening rules.
 *
 * These are RED-then-GREEN tests: each one pins one behaviour of the
 * flattening pass, so any future change to the algorithm that drops or
 * renumbers a rule trips a test, not a silent data-shape regression.
 */
import { describe, expect, it } from 'vitest';
import { defineTaxonomy } from './define';
import { TaxonomyValidationError } from './validate';
import type { SidebarSection } from '../sidebar/data.ts';
import type { TaxonomyNode } from './types';

describe('defineTaxonomy', () => {
  it('flattens a single section with children into section / group / page nodes', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'cislunar-orbits',
        label: '轨道',
        children: [
          {
            slug: 'nrho',
            label: 'NRHO',
            children: [{ slug: 'l1', label: 'L1' }],
          },
        ],
      },
    ];

    const { nodes } = defineTaxonomy({ flatNodes: [], sections });

    const ids = nodes.map((n) => n.id);
    expect(ids).toEqual(['cislunar-orbits', 'cislunar-orbits/nrho', 'cislunar-orbits/nrho/l1']);
    // section contributes the path prefix; child pages compose it
    expect(nodes[0].path).toBe('/cislunar-orbits/');
    expect(nodes[1].path).toBe('/cislunar-orbits/nrho/');
    expect(nodes[2].path).toBe('/cislunar-orbits/nrho/l1/');
  });

  it('accepts an explicit id on a display-only group (slug === undefined)', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'resources-tools',
        label: '资源',
        children: [
          {
            id: 'resources-tools/simulation-software',
            label: '仿真软件',
            children: [{ slug: 'gmat', label: 'GMAT' }],
          },
        ],
      },
    ];

    const { nodes } = defineTaxonomy({ flatNodes: [], sections });
    const display = nodes.find((n) => n.id === 'resources-tools/simulation-software')!;
    expect(display.kind).toBe('group');
    expect(display.path).toBeNull();
    const child = nodes.find((n) => n.id === 'resources-tools/simulation-software/gmat')!;
    // Display-only group contributes no path segment — children inherit grandparent.
    expect(child.path).toBe('/resources-tools/gmat/');
  });

  it('throws when a display-only group lacks an explicit id', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'resources-tools',
        label: '资源',
        children: [{ label: '仿真软件', children: [] }],
      },
    ];

    expect(() => defineTaxonomy({ flatNodes: [], sections })).toThrow(
      /Display-only groups require an explicit id/,
    );
  });

  it('treats slug === "" as an index page and routes it to the parent path', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'cislunar-orbits',
        label: '轨道',
        children: [
          {
            slug: 'nrho',
            label: 'NRHO',
            children: [
              { slug: '', label: '' },
              { slug: 'l1', label: 'L1' },
            ],
          },
        ],
      },
    ];

    const { nodes } = defineTaxonomy({ flatNodes: [], sections });
    const index = nodes.find((n) => n.id === 'cislunar-orbits/nrho/_index')!;
    expect(index.kind).toBe('index');
    expect(index.path).toBe('/cislunar-orbits/nrho/');
  });

  it('flattens flatNodes and sections into a single validated array', () => {
    const flatNodes: TaxonomyNode[] = [
      {
        id: 'navbar',
        kind: 'navbar-root',
        label: '导航',
        path: null,
        order: 0,
        parentId: null,
      },
      {
        id: 'navbar/home',
        kind: 'page',
        label: '首页',
        path: '/',
        order: 10,
        parentId: 'navbar',
      },
    ];
    const sections: SidebarSection[] = [{ slug: 'a', label: 'A', children: [] }];

    const { nodes } = defineTaxonomy({ flatNodes, sections });
    expect(nodes).toHaveLength(3);
    expect(nodes.map((n) => n.id).sort()).toEqual(['a', 'navbar', 'navbar/home']);
  });

  it('throws TaxonomyValidationError when the merged graph has a broken parent reference', () => {
    // Build a flat node that references a non-existent parent.
    const flatNodes: TaxonomyNode[] = [
      {
        id: 'orphan',
        kind: 'page',
        label: 'Orphan',
        path: '/o/',
        order: 0,
        parentId: 'no-such-parent',
      },
    ];
    expect(() => defineTaxonomy({ flatNodes, sections: [] })).toThrow(TaxonomyValidationError);
  });
});
