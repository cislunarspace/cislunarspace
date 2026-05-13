export type SpaceNewsLocale = 'zh' | 'en'

export interface SpaceNewsCategoryMeta {
  zh: string
  en: string
  color: string
}

export interface RawSpaceNewsArticle {
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string | string[] | null
  image: string | null
  relativePath?: string
  draft?: boolean
}

export interface SpaceNewsArticleView extends Omit<RawSpaceNewsArticle, 'category'> {
  category: string[] | null
  primaryCategory: string | null
  categoryLabel: string
  categoryColor: string
}

export interface SpaceNewsDirectoryLabels {
  kicker: string
  title: string
  lead: string
  latest: string
  viewAll: string
  viewMore: string
}

export interface SpaceNewsCategorySection {
  key: string
  label: string
  color: string
  items: SpaceNewsArticleView[]
}

export interface SpaceNewsDirectoryView {
  labels: SpaceNewsDirectoryLabels
  articles: SpaceNewsArticleView[]
  featuredList: SpaceNewsArticleView[]
  latestItems: SpaceNewsArticleView[]
  categorySections: SpaceNewsCategorySection[]
}

interface BuildSpaceNewsDirectoryViewOptions {
  articles: RawSpaceNewsArticle[]
  locale: SpaceNewsLocale
  categoryMeta: Record<string, SpaceNewsCategoryMeta>
  now?: Date
}

const FALLBACK_CATEGORY_COLOR = '#64748b'
const FEATURED_WINDOW_DAYS = 2
const LATEST_ITEMS_LIMIT = 6
const CATEGORY_SECTION_LIMIT = 3
const categoryOrder = ['artemis', 'spacex', 'china', 'nasa', 'esa', 'iss', 'launch', 'commercial', 'policy', 'science']

const labelsByLocale: Record<SpaceNewsLocale, SpaceNewsDirectoryLabels> = {
  zh: {
    kicker: '地月空间入门指南',
    title: '航天动态',
    lead: '政策、发射、任务与产业动态摘录：每条稿件均给出可核对的公开来源，便于回溯与延伸阅读。',
    latest: '最新动态',
    viewAll: '全部存档 →',
    viewMore: '更多 →',
  },
  en: {
    kicker: 'Cislunar Space',
    title: 'Space News',
    lead: 'Curated briefs on policy, launches, missions, and industry moves — every article cites public sources you can verify in-line.',
    latest: 'Latest News',
    viewAll: 'Full archive →',
    viewMore: 'More →',
  },
}

function normalizeCategories(category: string | string[] | null): string[] | null {
  if (Array.isArray(category)) return category.length ? [...category] : null
  return category ? [category] : null
}

function timestamp(date: string | null): number {
  if (!date) return Number.NEGATIVE_INFINITY
  const value = new Date(date).getTime()
  return Number.isNaN(value) ? Number.NEGATIVE_INFINITY : value
}

function buildArticleView(
  article: RawSpaceNewsArticle,
  locale: SpaceNewsLocale,
  categoryMeta: Record<string, SpaceNewsCategoryMeta>,
): SpaceNewsArticleView {
  const category = normalizeCategories(article.category)
  const primaryCategory = category?.[0] ?? null
  const meta = primaryCategory ? categoryMeta[primaryCategory] : undefined

  return {
    ...article,
    category,
    primaryCategory,
    categoryLabel: primaryCategory ? meta?.[locale] ?? primaryCategory : '',
    categoryColor: meta?.color ?? FALLBACK_CATEGORY_COLOR,
  }
}

function isFeaturedArticle(article: SpaceNewsArticleView, now: Date): boolean {
  if (!article.date) return false
  const value = timestamp(article.date)
  if (value === Number.NEGATIVE_INFINITY) return false
  const earliestFeaturedTime = now.getTime() - FEATURED_WINDOW_DAYS * 24 * 60 * 60 * 1000
  return value >= earliestFeaturedTime
}

function buildCategorySections(
  articles: SpaceNewsArticleView[],
  locale: SpaceNewsLocale,
  categoryMeta: Record<string, SpaceNewsCategoryMeta>,
): SpaceNewsCategorySection[] {
  return categoryOrder.flatMap((categoryKey) => {
    const items = articles.filter(article => article.category?.includes(categoryKey)).slice(0, CATEGORY_SECTION_LIMIT)
    const meta = categoryMeta[categoryKey]
    if (!items.length || !meta) return []

    return [{
      key: categoryKey,
      label: meta[locale],
      color: meta.color,
      items,
    }]
  })
}

export function buildSpaceNewsDirectoryView(options: BuildSpaceNewsDirectoryViewOptions): SpaceNewsDirectoryView {
  const now = options.now ?? new Date()
  const articles = options.articles
    .filter(article => article.draft !== true)
    .map(article => buildArticleView(article, options.locale, options.categoryMeta))
    .sort((first, second) => timestamp(second.date) - timestamp(first.date))

  return {
    labels: labelsByLocale[options.locale],
    articles,
    featuredList: articles.filter(article => isFeaturedArticle(article, now)),
    latestItems: articles.slice(0, LATEST_ITEMS_LIMIT),
    categorySections: buildCategorySections(articles, options.locale, options.categoryMeta),
  }
}
