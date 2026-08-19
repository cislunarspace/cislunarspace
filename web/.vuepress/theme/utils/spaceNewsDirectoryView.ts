export type SpaceNewsLocale = 'zh' | 'en';

export interface SpaceNewsCategoryMetaEntry {
  zh: string;
  en: string;
  color: string;
}

export type SpaceNewsCategoryMeta = Record<string, SpaceNewsCategoryMetaEntry>;

export interface RawSpaceNewsArticle {
  path: string;
  title: string;
  description: string;
  date: string | null;
  lastUpdated: string | null;
  author: string | null;
  category: string[] | null;
  image: string | null;
  relativePath?: string;
  draft?: boolean;
}

export interface SpaceNewsArticleView extends Omit<RawSpaceNewsArticle, 'category'> {
  category: string[] | null;
  primaryCategory: string | null;
  categoryLabel: string;
  categoryColor: string;
}

export interface SpaceNewsCategorySection {
  key: string;
  label: string;
  color: string;
  items: SpaceNewsArticleView[];
}

export interface SpaceNewsMonthGroup {
  key: string; // 'YYYY-MM'
  year: number;
  month: number; // 1-12
  label: string; // locale-formatted month heading
  items: SpaceNewsArticleView[];
}

export interface SpaceNewsUsedCategory {
  key: string;
  label: string;
  color: string;
}

export interface SpaceNewsDirectoryView {
  articles: SpaceNewsArticleView[];
  featuredList: SpaceNewsArticleView[];
  latestItems: SpaceNewsArticleView[];
  categorySections: SpaceNewsCategorySection[];
  monthGroups: SpaceNewsMonthGroup[];
  usedCategories: SpaceNewsUsedCategory[];
}

interface BuildSpaceNewsDirectoryViewOptions {
  articles: RawSpaceNewsArticle[];
  locale: SpaceNewsLocale;
  categoryMeta: SpaceNewsCategoryMeta;
}

const FALLBACK_CATEGORY_COLOR = '#64748b';
const FEATURED_WINDOW_DAYS = 2;
const FEATURED_ITEMS_LIMIT = 5;
const LATEST_ITEMS_LIMIT = 6;
const CATEGORY_SECTION_LIMIT = 3;
const categoryOrder = [
  'artemis',
  'spacex',
  'china',
  'nasa',
  'esa',
  'iss',
  'launch',
  'commercial',
  'policy',
  'science',
];

function timestamp(date: string | null): number {
  if (!date) return Number.NEGATIVE_INFINITY;
  const value = new Date(date).getTime();
  return Number.isNaN(value) ? Number.NEGATIVE_INFINITY : value;
}

function buildArticleView(
  article: RawSpaceNewsArticle,
  locale: SpaceNewsLocale,
  categoryMeta: SpaceNewsCategoryMeta,
): SpaceNewsArticleView {
  const category = article.category;
  const primaryCategory = category?.[0] ?? null;
  const meta = primaryCategory ? categoryMeta[primaryCategory] : undefined;

  return {
    ...article,
    category,
    primaryCategory,
    categoryLabel: primaryCategory ? (meta?.[locale] ?? primaryCategory) : '',
    categoryColor: meta?.color ?? FALLBACK_CATEGORY_COLOR,
  };
}

/**
 * Determine whether an article should appear in the featured carousel.
 *
 * Uses the *latest article's date* as the reference point instead of
 * `new Date()`.  This avoids SSR/client hydration mismatches — during
 * SSR the build-time `now` differs from the visitor's current time,
 * which can cause Vue to discard the server-rendered featured section
 * and leave it blank until the client re-renders.
 */
function isFeaturedArticle(article: SpaceNewsArticleView, latestDate: string | null): boolean {
  if (!article.date || !latestDate) return false;
  const value = timestamp(article.date);
  const latest = timestamp(latestDate);
  if (value === Number.NEGATIVE_INFINITY || latest === Number.NEGATIVE_INFINITY) return false;
  const windowMs = FEATURED_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  return value >= latest - windowMs;
}

function buildCategorySections(
  articles: SpaceNewsArticleView[],
  locale: SpaceNewsLocale,
  categoryMeta: SpaceNewsCategoryMeta,
): SpaceNewsCategorySection[] {
  return categoryOrder.flatMap((categoryKey) => {
    const items = articles
      .filter((article) => article.category?.includes(categoryKey))
      .slice(0, CATEGORY_SECTION_LIMIT);
    const meta = categoryMeta[categoryKey];
    if (!items.length || !meta) return [];

    return [
      {
        key: categoryKey,
        label: meta[locale],
        color: meta.color,
        items,
      },
    ];
  });
}

const YEAR_MONTH_RE = /(?:^|\/)space-news\/(\d{4})\/(\d{2})\//;

interface YearMonth {
  year: number;
  month: number;
}

function yearMonthFromRelativePath(relativePath: string | undefined): YearMonth | null {
  if (!relativePath) return null;
  const match = relativePath.match(YEAR_MONTH_RE);
  if (!match) return null;
  return { year: parseInt(match[1], 10), month: parseInt(match[2], 10) };
}

/** Locale-aware "YYYY 年 MM 月" / "Month YYYY" formatter for archive month headings. */
export function formatMonthLabel(year: number, month: number, locale: SpaceNewsLocale): string {
  if (locale === 'en') {
    const date = new Date(year, month - 1, 1);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
  return `${year} 年 ${month} 月`;
}

function buildMonthGroups(
  articles: SpaceNewsArticleView[],
  locale: SpaceNewsLocale,
): SpaceNewsMonthGroup[] {
  const map = new Map<string, SpaceNewsMonthGroup>();
  for (const article of articles) {
    const ym = yearMonthFromRelativePath(article.relativePath);
    if (!ym) continue;
    const key = `${ym.year}-${String(ym.month).padStart(2, '0')}`;
    let group = map.get(key);
    if (!group) {
      group = {
        key,
        year: ym.year,
        month: ym.month,
        label: formatMonthLabel(ym.year, ym.month, locale),
        items: [],
      };
      map.set(key, group);
    }
    group.items.push(article);
  }
  return Array.from(map.values()).sort((first, second) => second.key.localeCompare(first.key));
}

function buildUsedCategories(
  articles: SpaceNewsArticleView[],
  locale: SpaceNewsLocale,
  categoryMeta: SpaceNewsCategoryMeta,
): SpaceNewsUsedCategory[] {
  const seen = new Set<string>();
  for (const article of articles) {
    if (article.category) {
      for (const cat of article.category) seen.add(cat);
    }
  }
  const result: SpaceNewsUsedCategory[] = [];
  for (const key of seen) {
    const meta = categoryMeta[key];
    if (!meta) continue;
    result.push({ key, label: meta[locale], color: meta.color });
  }
  return result;
}

export function buildSpaceNewsDirectoryView(
  options: BuildSpaceNewsDirectoryViewOptions,
): SpaceNewsDirectoryView {
  const { categoryMeta } = options;
  const articles = options.articles
    .filter((article) => article.draft !== true)
    .map((article) => buildArticleView(article, options.locale, categoryMeta))
    .sort((first, second) => timestamp(second.date) - timestamp(first.date));

  // Reference date: the latest article's date.
  // Using `new Date()` here would cause SSR/client hydration mismatches
  // because the build-time `now` differs from the visitor's current time.
  const latestDate = articles[0]?.date ?? null;

  return {
    articles,
    featuredList: articles
      .filter((article) => isFeaturedArticle(article, latestDate))
      .slice(0, FEATURED_ITEMS_LIMIT),
    latestItems: articles.slice(0, LATEST_ITEMS_LIMIT),
    categorySections: buildCategorySections(articles, options.locale, categoryMeta),
    monthGroups: buildMonthGroups(articles, options.locale),
    usedCategories: buildUsedCategories(articles, options.locale, categoryMeta),
  };
}
