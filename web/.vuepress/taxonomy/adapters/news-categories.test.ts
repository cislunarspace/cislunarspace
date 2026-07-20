import { describe, expect, it } from 'vitest'
import { buildCategoryMeta, resolveCategory, categoryMetaDefault } from './news-categories'
import { createTaxonomyModule } from '../module'
import type { TaxonomyNode } from '../types'

/**
 * Minimal fixture: three news-category nodes.
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'spacex',
    kind: 'news-category',
    label: { zh: 'SpaceX', en: 'SpaceX' },
    path: { zh: null, en: null },
    order: 10,
    parentId: null,
    meta: { color: '#0ea5e9' },
  },
  {
    id: 'china',
    kind: 'news-category',
    label: { zh: '中国航天', en: 'China Space' },
    path: { zh: null, en: null },
    order: 20,
    parentId: null,
    meta: { color: '#dc2626' },
  },
  {
    id: 'tech',
    kind: 'news-category',
    label: { zh: '技术', en: 'Technology' },
    path: { zh: null, en: null },
    order: 30,
    parentId: null,
    // No color meta — tests the fallback.
  },
]

const fixtureModule = createTaxonomyModule(fixtureNodes)

describe('news-categories adapter', () => {
  it('produces a record with one entry per news-category node', () => {
    const meta = buildCategoryMeta(fixtureModule)
    expect(Object.keys(meta).sort()).toEqual(['china', 'spacex', 'tech'])
  })

  it('mirrors fixture labels and colors', () => {
    const meta = buildCategoryMeta(fixtureModule)
    expect(meta.spacex).toEqual({ zh: 'SpaceX', en: 'SpaceX', color: '#0ea5e9' })
    expect(meta.china).toEqual({ zh: '中国航天', en: 'China Space', color: '#dc2626' })
  })

  it('falls back to default color when meta.color is absent', () => {
    const meta = buildCategoryMeta(fixtureModule)
    expect(meta.tech.color).toBe('#64748b')
  })

  it('resolveCategory returns the default for unknown keys', () => {
    const entry = resolveCategory('not-a-real-category', 'zh')
    expect(entry).toEqual(categoryMetaDefault)
  })
})
