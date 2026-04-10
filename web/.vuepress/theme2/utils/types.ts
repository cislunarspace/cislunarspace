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

export interface PageFrontmatter {
  title?: string
  description?: string
  image?: string
  author?: string
  date?: string
  category?: string | string[]
  layout?: string
  home?: boolean
  draft?: boolean
  wechatShare?: {
    title?: string
    desc?: string
    image?: string
  }
  __rawContent?: string
  [key: string]: unknown
}

export interface PageData {
  title?: string
  path?: string
  frontmatter?: PageFrontmatter
}
