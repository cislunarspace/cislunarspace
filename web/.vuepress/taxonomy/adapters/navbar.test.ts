import { describe, expect, it } from 'vitest'
import { buildNavbar } from './navbar'
import { createTaxonomyModule } from '../module'
import type { TaxonomyNode } from '../types'

/**
 * Minimal fixture: a navbar root with one dropdown group (containing a
 * zh-only child), one leaf link, and one external-link.
 *
 *   navbar (root)
 *   ├── tools (group)
 *   │   ├── satellite (leaf)
 *   │   └── dialectic (zh-only leaf)
 *   ├── glossary (leaf)
 *   └── github (external-link)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'navbar',
    kind: 'navbar-root',
    label: { zh: '导航', en: 'Navbar' },
    path: { zh: null, en: null },
    order: 0,
    parentId: null,
  },
  {
    id: 'navbar/tools',
    kind: 'group',
    label: { zh: '工具', en: 'Tools' },
    path: { zh: null, en: null },
    order: 10,
    parentId: 'navbar',
  },
  {
    id: 'navbar/tools/satellite',
    kind: 'navbar-link',
    label: { zh: '卫星仿真', en: 'Satellite Sim' },
    path: { zh: '/satellite/', en: '/en/satellite/' },
    order: 10,
    parentId: 'navbar/tools',
  },
  {
    id: 'navbar/tools/dialectic',
    kind: 'navbar-link',
    label: { zh: '史学思辨', en: 'Historical Inquiry' },
    path: { zh: '/dialectic/', en: null },
    locales: ['zh'],
    order: 20,
    parentId: 'navbar/tools',
  },
  {
    id: 'navbar/glossary',
    kind: 'navbar-link',
    label: { zh: '术语词典', en: 'Glossary' },
    path: { zh: '/glossary/', en: '/en/glossary/' },
    order: 20,
    parentId: 'navbar',
  },
  {
    id: 'navbar/github',
    kind: 'external-link',
    label: { zh: 'GitHub', en: 'GitHub' },
    path: { zh: null, en: null },
    meta: { href: 'https://github.com/example' },
    order: 30,
    parentId: 'navbar',
  },
]

const fixtureModule = createTaxonomyModule(fixtureNodes)

describe('navbar adapter', () => {
  it('produces a zh navbar with all visible items in declared order', () => {
    const navbar = buildNavbar('zh', fixtureModule) as Array<{ text: string; link?: string }>
    const labels = navbar.map((item) => item.text)
    expect(labels).toEqual(['工具', '术语词典', 'GitHub'])
  })

  it('produces an en navbar with mirrored ordering and en labels', () => {
    const navbar = buildNavbar('en', fixtureModule) as Array<{ text: string; link?: string }>
    const labels = navbar.map((item) => item.text)
    // dialectic is zh-only, so en navbar has no "Tools" dropdown children →
    // the group itself still appears (with one child).
    expect(labels).toEqual(['Tools', 'Glossary', 'GitHub'])
  })

  it('zh navbar links target zh paths, en navbar links target en paths', () => {
    const zh = buildNavbar('zh', fixtureModule) as Array<{ text: string; link?: string }>
    const en = buildNavbar('en', fixtureModule) as Array<{ text: string; link?: string }>

    const zhGlossary = zh.find((item) => item.text === '术语词典')
    const enGlossary = en.find((item) => item.text === 'Glossary')

    expect(zhGlossary?.link).toBe('/glossary/')
    expect(enGlossary?.link).toBe('/en/glossary/')
  })

  it('external links carry their full href in both locales', () => {
    const zh = buildNavbar('zh', fixtureModule) as Array<{ text: string; link?: string }>
    const en = buildNavbar('en', fixtureModule) as Array<{ text: string; link?: string }>

    const zhGithub = zh.find((item) => item.text === 'GitHub')
    const enGithub = en.find((item) => item.text === 'GitHub')

    expect(zhGithub?.link).toBe('https://github.com/example')
    expect(enGithub?.link).toBe('https://github.com/example')
  })

  it('group renders as a dropdown with its own children', () => {
    const zh = buildNavbar('zh', fixtureModule) as Array<{ text: string; children?: Array<{ text: string; link?: string }> }>
    const dropdown = zh[0]

    expect(dropdown.text).toBe('工具')
    expect(dropdown.children?.map((c) => c.text)).toEqual(['卫星仿真', '史学思辨'])
    expect(dropdown.children?.map((c) => c.link)).toEqual(['/satellite/', '/dialectic/'])
  })

  it('en dropdown excludes zh-only dialectic entry', () => {
    const en = buildNavbar('en', fixtureModule) as Array<{ text: string; children?: Array<{ text: string; link?: string }> }>
    const toolsGroup = en.find((item) => item.text === 'Tools')!
    const dialectic = toolsGroup.children?.find((c) => c.text === 'Historical Inquiry')
    expect(dialectic).toBeUndefined()
  })
})
