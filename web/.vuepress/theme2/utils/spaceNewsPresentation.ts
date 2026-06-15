/**
 * Space News presentation helpers — locale-aware formatting and category
 * resolution for surfaces that render Space News content (Home, Archive,
 * Sidebar, ArticleHero).
 *
 * These helpers operate on either raw frontmatter (`resolveCategoryColor` /
 * `resolveCategoryLabel`) or the view-model's `SpaceNewsArticleView`
 * (`articleCardBackground`). View-model construction — building article
 * collections, month groups, category sections — lives in
 * `spaceNewsDirectoryView.ts`; this module does not assemble collections.
 *
 * Dependency direction is one-way: presentation imports types from the
 * view-model, never the reverse.
 */
import type { SpaceNewsArticleView, SpaceNewsLocale } from './spaceNewsDirectoryView'
import { categoryMeta } from '../../../.vuepress/taxonomy/adapters/news-categories'

const FALLBACK_CATEGORY_COLOR = '#64748b'

/** Extract the primary (first) category key from raw frontmatter category. */
function primaryCategoryKey(category: string | string[] | null): string | null {
  if (Array.isArray(category)) return category.length ? category[0] : null
  return category ?? null
}

export type ArticleDateStyle = 'short' | 'long'

/**
 * Date formatter shared by Home, Archive, and Hero.
 * - `'short'` (Archive): zh `YYYY/M/D`, en short month — `May 13, 2026`
 * - `'long'` (Home, Hero): zh `YYYY年5月13日` long month, en short month — `May 13, 2026`
 *
 * Returns '—' for null and the raw string for invalid dates.
 */
export function formatArticleDate(
  raw: string | null,
  locale: SpaceNewsLocale,
  style: ArticleDateStyle = 'short',
): string {
  if (!raw) return '—'
  const date = new Date(raw)
  if (Number.isNaN(date.getTime())) return String(raw)
  if (locale === 'en') {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
  const monthStyle: 'numeric' | 'long' = style === 'long' ? 'long' : 'numeric'
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: monthStyle, day: 'numeric' })
}

/**
 * Resolve a category color from raw frontmatter `category` (string | string[] | null).
 * Used by surfaces that have not yet been mapped through `buildArticleView`
 * (e.g. the sidebar consuming pre-aggregated JSON).
 */
export function resolveCategoryColor(
  category: string | string[] | null,
): string {
  const primary = primaryCategoryKey(category)
  if (!primary) return FALLBACK_CATEGORY_COLOR
  return categoryMeta[primary]?.color ?? FALLBACK_CATEGORY_COLOR
}

/**
 * Resolve a category label from raw frontmatter `category`. Used by surfaces
 * that operate on raw frontmatter directly (e.g. ArticleHero).
 */
export function resolveCategoryLabel(
  category: string | string[] | null,
  locale: SpaceNewsLocale,
): string {
  const primary = primaryCategoryKey(category)
  if (!primary) return ''
  return categoryMeta[primary]?.[locale] ?? primary
}

/** Card background style — image if present, otherwise gradient using the article's category color.
 *  When an image URL is present, a gradient fallback is stacked behind it via CSS multiple
 *  backgrounds so that if the image fails to load (404, slow connection, etc.) the card still
 *  shows a colored background instead of blank. */
export function articleCardBackground(article: SpaceNewsArticleView): { background: string } {
  const gradient = `linear-gradient(135deg, ${article.categoryColor} 0%, ${article.categoryColor}99 100%)`
  if (article.image) {
    // Multiple backgrounds: image on top, gradient behind it.
    // If the image URL 404s, the gradient is visible as fallback.
    return { background: `url(${article.image}) center/cover no-repeat, ${gradient}` }
  }
  return { background: gradient }
}
