/**
 * defineTaxonomy tests — exercise the section / page flattening rules.
 *
 * These are RED-then-GREEN tests: each one pins one behaviour of the
 * flattening pass, so any future change to the algorithm that drops or
 * renumbers a rule trips a test, not a silent data-shape regression.
 */
import { describe, expect, it } from 'vitest'
import { defineTaxonomy } from './define'
import { TaxonomyValidationError } from './validate'
import type { SidebarEntry, SidebarSection } from '../sidebar-data'
import type { TaxonomyNode } from './types'

function flat(nodes: readonly TaxonomyNode[]): { id: string; kind: string; path: { zh: string | null; en: string | null } }[] {
  return nodes.map((n) => ({ id: n.id, kind: n.kind, path: n.path }))
}

describe('defineTaxonomy', () => {
  it('flattens a single section with children into section / group / page nodes', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'cislunar-orbits',
        label: { zh: '轨道', en: 'Orbits' },
        children: [
          { slug: 'nrho', label: { zh: 'NRHO', en: 'NRHO' }, children: [
            { slug: 'l1', label: { zh: 'L1', en: 'L1' } },
          ] },
        ],
      },
    ]

    const { nodes } = defineTaxonomy({ flatNodes: [], sections })

    const ids = nodes.map((n) => n.id)
    expect(ids).toEqual(['cislunar-orbits', 'cislunar-orbits/nrho', 'cislunar-orbits/nrho/l1'])
    // section contributes the path prefix; child pages compose it
    expect(nodes[0].path).toEqual({ zh: '/cislunar-orbits/', en: '/en/cislunar-orbits/' })
    expect(nodes[1].path).toEqual({ zh: '/cislunar-orbits/nrho/', en: '/en/cislunar-orbits/nrho/' })
    expect(nodes[2].path).toEqual({ zh: '/cislunar-orbits/nrho/l1/', en: '/en/cislunar-orbits/nrho/l1/' })
  })

  it('accepts an explicit id on a display-only group (slug === undefined)', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'resources-tools',
        label: { zh: '资源', en: 'Resources' },
        children: [
          {
            id: 'resources-tools/simulation-software',
            label: { zh: '仿真软件', en: 'Simulation Software' },
            children: [
              { slug: 'gmat', label: { zh: 'GMAT', en: 'GMAT' } },
            ],
          },
        ],
      },
    ]

    const { nodes } = defineTaxonomy({ flatNodes: [], sections })
    const display = nodes.find((n) => n.id === 'resources-tools/simulation-software')!
    expect(display.kind).toBe('group')
    expect(display.path).toEqual({ zh: null, en: null })
    const child = nodes.find((n) => n.id === 'resources-tools/simulation-software/gmat')!
    // Display-only group contributes no path segment — children inherit grandparent.
    expect(child.path).toEqual({ zh: '/resources-tools/gmat/', en: '/en/resources-tools/gmat/' })
  })

  it('throws when a display-only group lacks an explicit id', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'resources-tools',
        label: { zh: '资源', en: 'Resources' },
        children: [
          { label: { zh: '仿真软件', en: 'Simulation Software' }, children: [] },
        ],
      },
    ]

    expect(() => defineTaxonomy({ flatNodes: [], sections })).toThrow(/Display-only groups require an explicit id/)
  })

  it('treats slug === "" as an index page and routes it to the parent path', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'cislunar-orbits',
        label: { zh: '轨道', en: 'Orbits' },
        children: [
          {
            slug: 'nrho', label: { zh: 'NRHO', en: 'NRHO' },
            children: [
              { slug: '', label: { zh: '', en: '' } },
              { slug: 'l1', label: { zh: 'L1', en: 'L1' } },
            ],
          },
        ],
      },
    ]

    const { nodes } = defineTaxonomy({ flatNodes: [], sections })
    const index = nodes.find((n) => n.id === 'cislunar-orbits/nrho/_index')!
    expect(index.kind).toBe('index')
    expect(index.path).toEqual({ zh: '/cislunar-orbits/nrho/', en: '/en/cislunar-orbits/nrho/' })
  })

  it('reifies childrenByLocale into two sibling subtrees with disjoint locale gating', () => {
    const sections: SidebarSection[] = [
      {
        slug: 'mixed',
        label: { zh: '混合', en: 'Mixed' },
        childrenByLocale: {
          zh: [{ slug: 'foo', label: { zh: 'Foo zh', en: 'Foo en' } }],
          en: [{ slug: 'bar', label: { zh: 'Bar zh', en: 'Bar en' } }],
        },
      },
    ]

    const { nodes, taxonomy } = defineTaxonomy({ flatNodes: [], sections })

    // Both subtrees are kept, each scoped by `@<locale>` in the id
    const fooZh = nodes.find((n) => n.id === 'mixed/foo@zh')!
    const barEn = nodes.find((n) => n.id === 'mixed/bar@en')!
    expect(fooZh.locales).toEqual(['zh'])
    expect(barEn.locales).toEqual(['en'])

    // Locale-filtered children view only surfaces the matching subtree
    expect(taxonomy.children('mixed', 'zh').map((n) => n.id)).toEqual(['mixed/foo@zh'])
    expect(taxonomy.children('mixed', 'en').map((n) => n.id)).toEqual(['mixed/bar@en'])
  })

  it('flattens flatNodes and sections into a single validated array', () => {
    const flatNodes: TaxonomyNode[] = [
      { id: 'navbar', kind: 'navbar-root', label: { zh: '导航', en: 'Nav' }, path: { zh: null, en: null }, order: 0, parentId: null },
      { id: 'navbar/home', kind: 'page', label: { zh: '首页', en: 'Home' }, path: { zh: '/', en: '/en/' }, order: 10, parentId: 'navbar' },
    ]
    const sections: SidebarSection[] = [
      { slug: 'a', label: { zh: 'A', en: 'A' }, children: [] },
    ]

    const { nodes } = defineTaxonomy({ flatNodes, sections })
    expect(nodes).toHaveLength(3)
    expect(nodes.map((n) => n.id).sort()).toEqual(['a', 'navbar', 'navbar/home'])
  })

  it('throws TaxonomyValidationError when the merged graph has a broken parent reference', () => {
    // Build a flat node that references a non-existent parent.
    const flatNodes: TaxonomyNode[] = [
      { id: 'orphan', kind: 'page', label: { zh: 'Orphan', en: 'Orphan' }, path: { zh: '/o/', en: '/en/o/' }, order: 0, parentId: 'no-such-parent' },
    ]
    expect(() => defineTaxonomy({ flatNodes, sections: [] })).toThrow(TaxonomyValidationError)
  })
})
