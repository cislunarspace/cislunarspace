import { describe, expect, it } from 'vitest'
import { buildWayfindingIntake } from './wayfinding'
import { createTaxonomyModule } from '../module'
import type { TaxonomyNode } from '../types'

/**
 * Minimal fixture: a wayfinding root with three children.
 *
 *   wayfinding (root)
 *   ├── home (page)
 *   ├── orbits (page)
 *   └── glossary (page)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'wayfinding',
    kind: 'navbar-root',
    label: { zh: '全站导览', en: 'Site map' },
    path: { zh: null, en: null },
    order: 0,
    parentId: null,
  },
  {
    id: 'wayfinding/home',
    kind: 'page',
    label: { zh: '首页', en: 'Home' },
    path: { zh: '/', en: '/en/' },
    order: 10,
    parentId: 'wayfinding',
  },
  {
    id: 'wayfinding/orbits',
    kind: 'page',
    label: { zh: '轨道', en: 'Orbits' },
    path: { zh: '/orbits/', en: '/en/orbits/' },
    order: 20,
    parentId: 'wayfinding',
  },
  {
    id: 'wayfinding/glossary',
    kind: 'page',
    label: { zh: '术语', en: 'Glossary' },
    path: { zh: '/glossary/', en: '/en/glossary/' },
    order: 30,
    parentId: 'wayfinding',
  },
]

const fixtureModule = createTaxonomyModule(fixtureNodes)

describe('wayfinding adapter', () => {
  it('produces a zh disclosure with all wayfinding links in declared order', () => {
    const intake = buildWayfindingIntake(fixtureModule)
    expect(intake.zh.text).toBe('全站导览')
    expect(intake.zh.collapsible).toBe(false)
    expect(intake.zh.children).toBeDefined()
    const children = intake.zh.children as Array<{ text: string; link?: string }>
    expect(children.map((c) => c.text)).toEqual(['首页', '轨道', '术语'])
    expect(children.map((c) => c.link)).toEqual(['/', '/orbits/', '/glossary/'])
  })

  it('produces an en disclosure with the matching en labels and en paths', () => {
    const intake = buildWayfindingIntake(fixtureModule)
    expect(intake.en.text).toBe('Site map')
    const children = intake.en.children as Array<{ text: string; link?: string }>
    expect(children.map((c) => c.text)).toEqual(['Home', 'Orbits', 'Glossary'])
    expect(children.map((c) => c.link)).toEqual(['/en/', '/en/orbits/', '/en/glossary/'])
  })

  it('children count matches fixture nodes', () => {
    const intake = buildWayfindingIntake(fixtureModule)
    expect(intake.zh.children).toHaveLength(3)
    expect(intake.en.children).toHaveLength(3)
  })
})
