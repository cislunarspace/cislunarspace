import { describe, expect, it } from 'vitest'
import { spaceNewsLabels } from './spaceNewsLabels'

const REQUIRED_HOME_KEYS = ['kicker', 'title', 'lead', 'latest', 'viewAll', 'viewMore'] as const
const REQUIRED_ARCHIVE_KEYS = ['kicker', 'title', 'lead', 'backHome', 'empty', 'all'] as const
const REQUIRED_SIDEBAR_KEYS = [
  'brandTitle', 'subtitle', 'home', 'archive', 'latest', 'more', 'categories', 'timeline', 'totalArticles',
] as const
const REQUIRED_ARTICLE_KEYS = ['backToNews'] as const

function assertComplete<K extends string>(
  surface: Record<'zh' | 'en', Record<K, string>>,
  keys: readonly K[],
  label: string,
) {
  for (const locale of ['zh', 'en'] as const) {
    for (const key of keys) {
      expect(surface[locale][key], `${label}.${locale}.${key}`).toBeTruthy()
    }
  }
}

describe('spaceNewsLabels', () => {
  it('home labels are complete for zh and en', () => {
    assertComplete(spaceNewsLabels.home, REQUIRED_HOME_KEYS, 'home')
  })

  it('archive labels are complete for zh and en', () => {
    assertComplete(spaceNewsLabels.archive, REQUIRED_ARCHIVE_KEYS, 'archive')
  })

  it('sidebar labels are complete for zh and en', () => {
    assertComplete(spaceNewsLabels.sidebar, REQUIRED_SIDEBAR_KEYS, 'sidebar')
  })

  it('article labels are complete for zh and en', () => {
    assertComplete(spaceNewsLabels.article, REQUIRED_ARTICLE_KEYS, 'article')
  })

  it('preserves previously-known copy', () => {
    // Spot-checks against the values that lived inline before the
    // centralization, so any accidental rewrite surfaces here.
    expect(spaceNewsLabels.home.zh.title).toBe('航天动态')
    expect(spaceNewsLabels.home.en.title).toBe('Space News')
    expect(spaceNewsLabels.archive.zh.backHome).toBe('返回航天动态首页')
    expect(spaceNewsLabels.archive.en.backHome).toBe('Back to Space News')
    expect(spaceNewsLabels.sidebar.zh.brandTitle).toBe('航天动态')
    expect(spaceNewsLabels.sidebar.en.brandTitle).toBe('Space News')
    expect(spaceNewsLabels.article.zh.backToNews).toBe('返回航天动态')
    expect(spaceNewsLabels.article.en.backToNews).toBe('Back to Space News')
  })
})