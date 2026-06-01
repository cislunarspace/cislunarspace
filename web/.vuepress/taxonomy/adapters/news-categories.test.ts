import { describe, expect, it } from 'vitest'
import { buildCategoryMeta, categoryMeta, resolveCategory } from './news-categories'

describe('news-categories adapter', () => {
  it('produces a record with one entry per news-category node', () => {
    const meta = buildCategoryMeta()
    // 15 categories in data.ts; record key is the node id (== category key).
    expect(Object.keys(meta).length).toBe(15)
    expect(Object.keys(meta).sort()).toEqual([
      'artemis', 'blue-origin', 'china', 'commercial', 'commercial-space',
      'esa', 'human-spaceflight', 'iss', 'launch', 'nasa', 'policy',
      'rocket-lab', 'science', 'spacex', 'technology',
    ])
  })

  it('mirrors the historical category-meta.json labels and colors', () => {
    const meta = buildCategoryMeta()
    expect(meta.artemis).toEqual({ zh: 'Artemis', en: 'Artemis', color: '#6366f1' })
    expect(meta.spacex).toEqual({ zh: 'SpaceX', en: 'SpaceX', color: '#0ea5e9' })
    expect(meta.china).toEqual({ zh: '中国航天', en: 'China Space', color: '#dc2626' })
    expect(meta.technology).toEqual({ zh: '技术', en: 'Technology', color: '#64748b' })
  })

  it('resolveCategory returns the default for unknown keys', () => {
    const entry = resolveCategory('not-a-real-category', 'zh')
    expect(entry).toEqual({ zh: '', en: '', color: '#64748b' })
  })

  it('module-level categoryMeta equals buildCategoryMeta() in shape', () => {
    // The VuePress components import the named export, so it must be
    // available at module load — same as the old `category-meta.json`.
    // We check structural equality here because buildCategoryMeta()
    // returns a fresh object on each call.
    expect(categoryMeta).toEqual(buildCategoryMeta())
  })
})
