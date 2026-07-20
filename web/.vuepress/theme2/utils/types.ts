import type { Frontmatter } from '../../utils/frontmatter-parser'

export type { Frontmatter }

export interface ArticleItem {
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string[] | null
  image: string | null
  relativePath?: string
}

export interface CategoryMetaEntry {
  zh: string
  en: string
  color: string
}

export interface ArticlesData {
  zh: ArticleItem[]
  en: ArticleItem[]
  categoryMeta: Record<string, CategoryMetaEntry>
}

export interface PageData {
  title?: string
  path?: string
  frontmatter?: Frontmatter
}
