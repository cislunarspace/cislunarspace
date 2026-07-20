import { describe, expect, it } from 'vitest'
import { buildAllSectionSidebars, buildSectionSidebar } from './sidebar-sections'
import { createTaxonomyModule } from '../module'
import type { TaxonomyNode } from '../types'

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
    id: 'orbits/near-earth',
    kind: 'group',
    label: { zh: '近地轨道', en: 'Near-Earth' },
    path: { zh: '/orbits/near-earth/', en: '/en/orbits/near-earth/' },
    order: 20,
    parentId: 'orbits',
  },
  {
    id: 'orbits/near-earth/leo',
    kind: 'page',
    label: { zh: 'LEO', en: 'LEO' },
    path: { zh: '/orbits/near-earth/leo/', en: '/en/orbits/near-earth/leo/' },
    order: 10,
    parentId: 'orbits/near-earth',
  },
  {
    id: 'orbits/deep-space',
    kind: 'page',
    label: { zh: '深空', en: 'Deep Space' },
    path: { zh: '/orbits/deep-space/', en: '/en/orbits/deep-space/' },
    order: 30,
    parentId: 'orbits',
  },
  {
    id: 'research',
    kind: 'section',
    label: { zh: '科研', en: 'Research' },
    path: { zh: '/research/', en: '/en/research/' },
    order: 20,
    parentId: null,
  },
  {
    id: 'research/index',
    kind: 'index',
    label: { zh: '科研总览', en: 'Research Overview' },
    path: { zh: '/research/', en: '/en/research/' },
    order: 10,
    parentId: 'research',
  },
]

const fixtureModule = createTaxonomyModule(fixtureNodes)

describe('sidebar-sections adapter', () => {
  it('builds all section sidebars from the fixture taxonomy', () => {
    const sections = buildAllSectionSidebars(fixtureModule)
    expect(Object.keys(sections).sort()).toEqual(['orbits', 'research'])
  })

  it('section sidebar has the correct root text for each locale', () => {
    const sections = buildAllSectionSidebars(fixtureModule)
    expect(sections.orbits.zh.text).toBe('轨道')
    expect(sections.orbits.en.text).toBe('Orbits')
  })

  it('uses zh/en locale paths for the same section tree', () => {
    const zh = buildSectionSidebar('orbits', 'zh', fixtureModule)
    const en = buildSectionSidebar('orbits', 'en', fixtureModule)

    // First child is the index page path.
    expect(zh.children?.[0]).toBe('/orbits/')
    expect(en.children?.[0]).toBe('/en/orbits/')
  })

  it('preserves sibling ordering from the taxonomy source', () => {
    const sidebar = buildSectionSidebar('orbits', 'zh', fixtureModule)
    const children = sidebar.children ?? []

    // children[0] = root.path (prepended by adapter)
    // children[1..] = buildTree results (index, group, leaf page)
    expect(children[0]).toBe('/orbits/')
    expect(children[1]).toBe('/orbits/') // index node
    expect((children[2] as { text: string }).text).toBe('近地轨道')
    expect(children[3]).toBe('/orbits/deep-space/')
  })

  it('group contains its child pages', () => {
    const sidebar = buildSectionSidebar('orbits', 'zh', fixtureModule)
    const children = sidebar.children ?? []
    const group = children[2] as { text: string; children: unknown[] }
    expect(group.text).toBe('近地轨道')
    expect(group.children).toContain('/orbits/near-earth/leo/')
  })
})
