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

export interface WechatSignature {
  appId: string
  timestamp: number
  nonceStr: string
  signature: string
}

export interface WechatSdk {
  config: (opts: Record<string, unknown>) => void
  ready: (cb: () => void) => void
  updateAppMessageShareData?: (data: Record<string, string>) => void
  updateTimelineShareData?: (data: Record<string, string>) => void
}

export interface PageData {
  title?: string
  path?: string
  frontmatter?: Frontmatter
}
