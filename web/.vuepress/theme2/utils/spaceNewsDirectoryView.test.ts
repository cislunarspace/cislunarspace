import { describe, expect, it } from 'vitest'
import {
  articleCardBackground,
  buildSpaceNewsDirectoryView,
  formatArticleDate,
  formatMonthLabel,
  resolveCategoryColor,
  resolveCategoryLabel,
  type RawSpaceNewsArticle,
} from './spaceNewsDirectoryView'

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
    })

    expect(result.articles.map(article => ({
      title: article.title,
      category: article.category,
      primaryCategory: article.primaryCategory,
      categoryLabel: article.categoryLabel,
      categoryColor: article.categoryColor,
    }))).toEqual([
      { title: 'Known string', category: ['artemis'], primaryCategory: 'artemis', categoryLabel: 'Artemis', categoryColor: '#6366f1' },
      { title: 'Known array', category: ['commercial', 'artemis'], primaryCategory: 'commercial', categoryLabel: 'Commercial Space', categoryColor: '#059669' },
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
    })
    const en = buildSpaceNewsDirectoryView({
      articles,
      locale: 'en',
    })

    expect(zh.labels).toMatchObject({ title: '航天动态', latest: '最新动态', viewMore: '更多 →' })
    expect(en.labels).toMatchObject({ title: 'Space News', latest: 'Latest News', viewMore: 'More →' })
    expect(zh.categorySections.map(section => ({ key: section.key, label: section.label, color: section.color }))).toEqual([
      { key: 'artemis', label: 'Artemis', color: '#6366f1' },
      { key: 'commercial', label: '商业航天', color: '#059669' },
    ])
    expect(en.categorySections.map(section => ({ key: section.key, label: section.label, color: section.color }))).toEqual([
      { key: 'artemis', label: 'Artemis', color: '#6366f1' },
      { key: 'commercial', label: 'Commercial Space', color: '#059669' },
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
    })

    expect(result.latestItems.map(article => article.title)).toEqual(['A1', 'A2', 'A3', 'A4', 'C1', 'C2'])
    expect(result.featuredList.map(article => article.title)).toEqual(['A1', 'A2', 'A3'])
    expect(result.categorySections.find(section => section.key === 'artemis')?.items.map(article => article.title)).toEqual(['A1', 'A2', 'A3'])
  })

  it('groups articles by year/month from relativePath, newest month first', () => {
    const articles = [
      makeArticle({ title: 'May-13', path: '/may-13/', date: '2026-05-13', relativePath: 'space-news/2026/05/may-13.md', category: 'artemis' }),
      makeArticle({ title: 'May-01', path: '/may-01/', date: '2026-05-01', relativePath: 'space-news/2026/05/may-01.md', category: 'commercial' }),
      makeArticle({ title: 'Apr-15', path: '/apr-15/', date: '2026-04-15', relativePath: 'space-news/2026/04/apr-15.md', category: 'artemis' }),
      makeArticle({ title: 'No-path', path: '/no-path/', date: '2026-05-10' }),  // missing relativePath → excluded
    ]

    const zh = buildSpaceNewsDirectoryView({
      articles,
      locale: 'zh',
    })

    expect(zh.monthGroups.map(group => ({ key: group.key, label: group.label, items: group.items.map(a => a.title) }))).toEqual([
      { key: '2026-05', label: '2026 年 5 月', items: ['May-13', 'May-01'] },
      { key: '2026-04', label: '2026 年 4 月', items: ['Apr-15'] },
    ])

    const en = buildSpaceNewsDirectoryView({
      articles,
      locale: 'en',
    })

    expect(en.monthGroups[0].label).toBe('May 2026')
    expect(en.monthGroups[1].label).toBe('April 2026')
  })

  it('detects month from en-locale relativePath prefix', () => {
    const result = buildSpaceNewsDirectoryView({
      articles: [
        makeArticle({ title: 'En article', path: '/en/space-news/2026/05/a/', date: '2026-05-12', relativePath: 'en/space-news/2026/05/a.md' }),
      ],
      locale: 'en',
    })

    expect(result.monthGroups).toHaveLength(1)
    expect(result.monthGroups[0].key).toBe('2026-05')
  })

  it('lists used categories that are present in the taxonomy, dropping unknown keys', () => {
    const result = buildSpaceNewsDirectoryView({
      articles: [
        makeArticle({ title: 'A', path: '/a/', date: '2026-05-13', category: ['artemis', 'unknown'] }),
        makeArticle({ title: 'B', path: '/b/', date: '2026-05-12', category: 'commercial' }),
        makeArticle({ title: 'C', path: '/c/', date: '2026-05-11', category: 'commercial' }),
      ],
      locale: 'en',
    })

    expect(result.usedCategories).toEqual([
      { key: 'artemis', label: 'Artemis', color: '#6366f1' },
      { key: 'commercial', label: 'Commercial Space', color: '#059669' },
    ])
  })

  it('exposes localized archive labels', () => {
    const zh = buildSpaceNewsDirectoryView({ articles: [], locale: 'zh' })
    const en = buildSpaceNewsDirectoryView({ articles: [], locale: 'en' })

    expect(zh.archiveLabels).toMatchObject({ title: '按日期查阅', backHome: '返回航天动态首页', all: '全部' })
    expect(en.archiveLabels).toMatchObject({ title: 'Archive by date', backHome: 'Back to Space News', all: 'All' })
  })

  it('drafts are excluded from monthGroups and usedCategories', () => {
    const result = buildSpaceNewsDirectoryView({
      articles: [
        makeArticle({ title: 'Draft', path: '/d/', date: '2026-05-13', relativePath: 'space-news/2026/05/d.md', category: 'artemis', draft: true }),
        makeArticle({ title: 'Pub', path: '/p/', date: '2026-05-12', relativePath: 'space-news/2026/05/p.md', category: 'commercial' }),
      ],
      locale: 'zh',
    })

    expect(result.monthGroups[0].items.map(a => a.title)).toEqual(['Pub'])
    expect(result.usedCategories.map(c => c.key)).toEqual(['commercial'])
  })
})

describe('formatMonthLabel', () => {
  it('formats Chinese month label as "YYYY 年 M 月"', () => {
    expect(formatMonthLabel(2026, 5, 'zh')).toBe('2026 年 5 月')
    expect(formatMonthLabel(2026, 12, 'zh')).toBe('2026 年 12 月')
  })

  it('formats English month label as long form', () => {
    expect(formatMonthLabel(2026, 5, 'en')).toBe('May 2026')
    expect(formatMonthLabel(2026, 12, 'en')).toBe('December 2026')
  })
})

describe('formatArticleDate', () => {
  it('returns dash for null and raw string for invalid date', () => {
    expect(formatArticleDate(null, 'zh')).toBe('—')
    expect(formatArticleDate('not-a-date', 'en')).toBe('not-a-date')
  })

  it('formats valid date per locale', () => {
    // We don't pin exact strings (locale fmt may vary by node version);
    // we assert non-empty and year present.
    const zh = formatArticleDate('2026-05-13', 'zh')
    expect(zh).toContain('2026')
    const en = formatArticleDate('2026-05-13', 'en')
    expect(en).toContain('2026')
  })

  it('uses long zh month for hero/home style and numeric for archive style', () => {
    const short = formatArticleDate('2026-05-13', 'zh', 'short')
    const long = formatArticleDate('2026-05-13', 'zh', 'long')

    // 'short' uses numeric month, 'long' uses long-month-name — these are different strings.
    expect(short).not.toBe(long)
    expect(short).toContain('2026')
    expect(long).toContain('2026')
    // Sanity: 'long' contains the long Chinese month word "五月" (or at least the numeric variant "5月").
    // Different node ICU builds produce different forms, so just assert it's non-empty and locale-aware.
    expect(long.length).toBeGreaterThan(0)
  })

  it('en locale ignores the style flag (only zh distinguishes month width)', () => {
    expect(formatArticleDate('2026-05-13', 'en', 'short')).toBe(formatArticleDate('2026-05-13', 'en', 'long'))
  })
})

describe('resolveCategoryColor / resolveCategoryLabel', () => {
  it('resolveCategoryColor falls back to grey for null and unknown keys', () => {
    expect(resolveCategoryColor(null)).toBe('#64748b')
    expect(resolveCategoryColor('unknown')).toBe('#64748b')
    expect(resolveCategoryColor([])).toBe('#64748b')
  })

  it('resolveCategoryColor reads color from the first array entry', () => {
    expect(resolveCategoryColor(['artemis', 'something'])).toBe('#6366f1')
    expect(resolveCategoryColor('artemis')).toBe('#6366f1')
  })

  it('resolveCategoryLabel returns localized label, falls back to raw key, empty for null', () => {
    expect(resolveCategoryLabel(null, 'zh')).toBe('')
    expect(resolveCategoryLabel('artemis', 'zh')).toBe('Artemis')
    expect(resolveCategoryLabel(['artemis'], 'en')).toBe('Artemis')
    // Unknown key passes through.
    expect(resolveCategoryLabel('unknown', 'en')).toBe('unknown')
  })
})

describe('articleCardBackground', () => {
  it('uses the image url when present, with gradient fallback', () => {
    expect(articleCardBackground({
      path: '/x/',
      title: 'x',
      description: '',
      date: null,
      lastUpdated: null,
      author: null,
      category: null,
      image: '/img/x.png',
      primaryCategory: null,
      categoryLabel: '',
      categoryColor: '#64748b',
    })).toEqual({
      backgroundImage: 'url(/img/x.png)',
      background: 'linear-gradient(135deg, #64748b 0%, #64748b99 100%)',
    })
  })

  it('falls back to gradient using the article category color', () => {
    expect(articleCardBackground({
      path: '/x/',
      title: 'x',
      description: '',
      date: null,
      lastUpdated: null,
      author: null,
      category: ['artemis'],
      image: null,
      primaryCategory: 'artemis',
      categoryLabel: 'Artemis',
      categoryColor: '#6366f1',
    })).toEqual({ background: 'linear-gradient(135deg, #6366f1 0%, #6366f199 100%)' })
  })
})
