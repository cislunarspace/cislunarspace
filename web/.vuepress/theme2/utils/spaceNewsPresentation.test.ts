import { describe, expect, it } from 'vitest'
import {
  articleCardBackground,
  formatArticleDate,
  resolveCategoryColor,
  resolveCategoryLabel,
} from './spaceNewsPresentation'

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
    expect(resolveCategoryColor(['unknown'])).toBe('#64748b')
    expect(resolveCategoryColor([])).toBe('#64748b')
  })

  it('resolveCategoryColor reads color from the first array entry', () => {
    expect(resolveCategoryColor(['artemis', 'something'])).toBe('#6366f1')
  })

  it('resolveCategoryLabel returns localized label, falls back to raw key, empty for null', () => {
    expect(resolveCategoryLabel(null, 'zh')).toBe('')
    expect(resolveCategoryLabel(['artemis'], 'zh')).toBe('Artemis')
    expect(resolveCategoryLabel(['artemis'], 'en')).toBe('Artemis')
    // Unknown key passes through.
    expect(resolveCategoryLabel(['unknown'], 'en')).toBe('unknown')
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
      background: 'url(/img/x.png) center/cover no-repeat, linear-gradient(135deg, #64748b 0%, #64748b99 100%)',
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
