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
import type { SpaceNewsArticleView, SpaceNewsLocale, SpaceNewsCategoryMeta } from './spaceNewsDirectoryView'

const FALLBACK_CATEGORY_COLOR = '#64748b'

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
 * Resolve a category color from a normalized frontmatter `category` array.
 * `category` is required to be a string[] (or null) by the SEO frontmatter
 * template and normalized by scripts/maintenance/normalize-space-news-category.ts.
 */
export function resolveCategoryColor(
  category: string[] | null,
  categoryMeta: SpaceNewsCategoryMeta,
): string {
  const primary = category?.[0]
  if (!primary) return FALLBACK_CATEGORY_COLOR
  return categoryMeta[primary]?.color ?? FALLBACK_CATEGORY_COLOR
}

/**
 * Resolve a category label from a normalized frontmatter `category` array.
 * Used by surfaces that operate on raw frontmatter directly (e.g. ArticleHero).
 */
export function resolveCategoryLabel(
  category: string[] | null,
  locale: SpaceNewsLocale,
  categoryMeta: SpaceNewsCategoryMeta,
): string {
  const primary = category?.[0]
  if (!primary) return ''
  return categoryMeta[primary]?.[locale] ?? primary
}

/** Card background style — image if present, otherwise the shared deep-space
 *  gradient. Duplicated from `--sn-space-gradient` in styles/vars.scss because
 *  inline styles cannot read CSS variables at build time; keep both in sync. */
export function articleCardBackground(article: SpaceNewsArticleView): { background: string } {
  const gradient = 'linear-gradient(155deg, #0f172a 0%, #17203a 55%, #1e3a8a 130%)'
  if (article.image) {
    // Multiple backgrounds: image on top, gradient behind it.
    // If the image URL 404s, the gradient is visible as fallback.
    return { background: `url(${article.image}) center/cover no-repeat, ${gradient}` }
  }
  return { background: gradient }
}
