import type { Frontmatter } from '../../utils/frontmatter-parser'

export type { Frontmatter }

export interface ArticleItem {
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string | string[] | null
  image: string | null
  relativePath?: string
}

export interface ArticlesData {
  zh: ArticleItem[]
  en: ArticleItem[]
}

export interface PageData {
  title?: string
  path?: string
  frontmatter?: Frontmatter
}
