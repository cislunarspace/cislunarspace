import { describe, expect, it } from 'vitest'
import { buildSpaceNewsDirectoryView, type RawSpaceNewsArticle } from './spaceNewsDirectoryView'

const categoryMeta = {
  artemis: { zh: '阿耳忒弥斯计划', en: 'Artemis Program', color: '#3b82f6' },
  commercial: { zh: '商业航天', en: 'Commercial Space', color: '#10b981' },
}

function makeArticle(partial: Partial<RawSpaceNewsArticle>): RawSpaceNewsArticle {
  return {
    path: partial.path ?? '/article/',
    title: partial.title ?? 'Article',
    description: partial.description ?? '',
    date: partial.date ?? null,
    lastUpdated: partial.lastUpdated ?? null,
    author: partial.author ?? null,
    category: partial.category ?? null,
    image: partial.image ?? null,
    relativePath: partial.relativePath,
    draft: partial.draft,
  }
}

describe('buildSpaceNewsDirectoryView', () => {
  it('returns normalized articles sorted by newest valid date first', () => {
    const articles = [
      makeArticle({ title: 'No date', path: '/no-date/' }),
      makeArticle({ title: 'Newest', path: '/newest/', date: '2026-05-13', category: 'artemis' }),
      makeArticle({ title: 'Invalid date', path: '/invalid/', date: 'not-a-date' }),
      makeArticle({ title: 'Older', path: '/older/', date: '2026-05-11', category: ['commercial'] }),
    ]

    const result = buildSpaceNewsDirectoryView({
      articles,
      locale: 'zh',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })

    expect(result.articles.map(article => article.title)).toEqual(['Newest', 'Older', 'No date', 'Invalid date'])
    expect(result.articles[0].category).toEqual(['artemis'])
    expect(result.articles[1].category).toEqual(['commercial'])
    expect(articles.map(article => article.title)).toEqual(['No date', 'Newest', 'Invalid date', 'Older'])
  })

  it('filters drafts from all homepage article collections', () => {
    const result = buildSpaceNewsDirectoryView({
      articles: [
        makeArticle({ title: 'Draft', path: '/draft/', date: '2026-05-13', draft: true, category: 'artemis' }),
        makeArticle({ title: 'Published', path: '/published/', date: '2026-05-12', category: 'artemis' }),
      ],
      locale: 'zh',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })

    expect(result.articles.map(article => article.title)).toEqual(['Published'])
    expect(result.latestItems.map(article => article.title)).toEqual(['Published'])
    expect(result.featuredList.map(article => article.title)).toEqual(['Published'])
    expect(result.categorySections.flatMap(section => section.items.map(article => article.title))).toEqual(['Published'])
  })

  it('normalizes category labels and colors with fallbacks', () => {
    const result = buildSpaceNewsDirectoryView({
      articles: [
        makeArticle({ title: 'Known string', path: '/known-string/', date: '2026-05-13', category: 'artemis' }),
        makeArticle({ title: 'Known array', path: '/known-array/', date: '2026-05-12', category: ['commercial', 'artemis'] }),
        makeArticle({ title: 'Unknown', path: '/unknown/', date: '2026-05-11', category: 'unknown-topic' }),
        makeArticle({ title: 'No category', path: '/no-category/', date: '2026-05-10' }),
      ],
      locale: 'en',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })

    expect(result.articles.map(article => ({
      title: article.title,
      category: article.category,
      primaryCategory: article.primaryCategory,
      categoryLabel: article.categoryLabel,
      categoryColor: article.categoryColor,
    }))).toEqual([
      { title: 'Known string', category: ['artemis'], primaryCategory: 'artemis', categoryLabel: 'Artemis Program', categoryColor: '#3b82f6' },
      { title: 'Known array', category: ['commercial', 'artemis'], primaryCategory: 'commercial', categoryLabel: 'Commercial Space', categoryColor: '#10b981' },
      { title: 'Unknown', category: ['unknown-topic'], primaryCategory: 'unknown-topic', categoryLabel: 'unknown-topic', categoryColor: '#64748b' },
      { title: 'No category', category: null, primaryCategory: null, categoryLabel: '', categoryColor: '#64748b' },
    ])
  })

  it('provides localized homepage labels and category section labels', () => {
    const articles = [
      makeArticle({ title: 'Artemis', path: '/artemis/', date: '2026-05-13', category: 'artemis' }),
      makeArticle({ title: 'Commercial', path: '/commercial/', date: '2026-05-12', category: 'commercial' }),
    ]

    const zh = buildSpaceNewsDirectoryView({
      articles,
      locale: 'zh',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })
    const en = buildSpaceNewsDirectoryView({
      articles,
      locale: 'en',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })

    expect(zh.labels).toMatchObject({ title: '航天动态', latest: '最新动态', viewMore: '更多 →' })
    expect(en.labels).toMatchObject({ title: 'Space News', latest: 'Latest News', viewMore: 'More →' })
    expect(zh.categorySections.map(section => ({ key: section.key, label: section.label, color: section.color }))).toEqual([
      { key: 'artemis', label: '阿耳忒弥斯计划', color: '#3b82f6' },
      { key: 'commercial', label: '商业航天', color: '#10b981' },
    ])
    expect(en.categorySections.map(section => ({ key: section.key, label: section.label, color: section.color }))).toEqual([
      { key: 'artemis', label: 'Artemis Program', color: '#3b82f6' },
      { key: 'commercial', label: 'Commercial Space', color: '#10b981' },
    ])
  })

  it('builds homepage collections with existing limits and featured window', () => {
    const articles = [
      makeArticle({ title: 'A1', path: '/a1/', date: '2026-05-13T10:00:00Z', category: 'artemis' }),
      makeArticle({ title: 'A2', path: '/a2/', date: '2026-05-12T10:00:00Z', category: 'artemis' }),
      makeArticle({ title: 'A3', path: '/a3/', date: '2026-05-11T10:00:00Z', category: 'artemis' }),
      makeArticle({ title: 'A4', path: '/a4/', date: '2026-05-10T10:00:00Z', category: 'artemis' }),
      makeArticle({ title: 'C1', path: '/c1/', date: '2026-05-09T10:00:00Z', category: 'commercial' }),
      makeArticle({ title: 'C2', path: '/c2/', date: '2026-05-08T10:00:00Z', category: 'commercial' }),
      makeArticle({ title: 'C3', path: '/c3/', date: '2026-05-07T10:00:00Z', category: 'commercial' }),
    ]

    const result = buildSpaceNewsDirectoryView({
      articles,
      locale: 'zh',
      categoryMeta,
      now: new Date('2026-05-13T12:00:00Z'),
    })

    expect(result.latestItems.map(article => article.title)).toEqual(['A1', 'A2', 'A3', 'A4', 'C1', 'C2'])
    expect(result.featuredList.map(article => article.title)).toEqual(['A1', 'A2'])
    expect(result.categorySections.find(section => section.key === 'artemis')?.items.map(article => article.title)).toEqual(['A1', 'A2', 'A3'])
  })
})
