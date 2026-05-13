export interface PageMetadataFrontmatter {
  title?: unknown
  description?: unknown
  image?: unknown
  layout?: unknown
  wechatShare?: {
    title?: unknown
    desc?: unknown
    image?: unknown
  }
}

export interface NormalizePageMetadataInput {
  path: string
  frontmatter: PageMetadataFrontmatter
  siteBaseUrl?: string
  pageUrl?: string
  fallbackTitle?: string
  fallbackDescription?: string
}

export type PageLocale = 'zh-CN' | 'en-US'
export type PageMetadataType = 'article' | 'website'

export interface NormalizedShareMetadata {
  title: string
  description: string
  image: string
  url: string
}

export interface NormalizedPageMetadata {
  title: string
  description: string
  image: string
  locale: PageLocale
  siteName: string
  url: string
  type: PageMetadataType
  share: NormalizedShareMetadata
}

const DEFAULT_SITE_BASE_URL = 'https://cislunarspace.cn'
const DEFAULT_IMAGE_PATH = '/logo.png'

function toStringValue(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function resolveLocale(path: string): PageLocale {
  return path.startsWith('/en/') ? 'en-US' : 'zh-CN'
}

function resolveSiteName(locale: PageLocale): string {
  return locale === 'en-US' ? "Cislunar Space Beginner's Guide" : '地月空间入门指南'
}

function resolvePageDirectory(path: string): string {
  return path.replace(/[^/]+\/?$/, '')
}

function resolveImageUrl(image: string, path: string, siteBaseUrl: string): string {
  if (/^https?:\/\//i.test(image)) return image
  if (image.startsWith('/')) return siteBaseUrl + image
  if (image.startsWith('./')) return siteBaseUrl + resolvePageDirectory(path) + image.slice(2)
  return siteBaseUrl + DEFAULT_IMAGE_PATH
}

export function normalizePageMetadata(input: NormalizePageMetadataInput): NormalizedPageMetadata {
  const siteBaseUrl = input.siteBaseUrl ?? DEFAULT_SITE_BASE_URL
  const locale = resolveLocale(input.path)
  const title = toStringValue(input.frontmatter.wechatShare?.title)
    || toStringValue(input.frontmatter.title)
    || input.fallbackTitle
    || ''
  const description = toStringValue(input.frontmatter.wechatShare?.desc)
    || toStringValue(input.frontmatter.description)
    || input.fallbackDescription
    || ''
  const image = resolveImageUrl(
    toStringValue(input.frontmatter.wechatShare?.image) || toStringValue(input.frontmatter.image),
    input.path,
    siteBaseUrl
  )
  const url = input.pageUrl ?? siteBaseUrl + input.path
  const type = input.frontmatter.layout === 'SpaceNewsArticle' ? 'article' : 'website'

  return {
    title,
    description,
    image,
    locale,
    siteName: resolveSiteName(locale),
    url,
    type,
    share: {
      title,
      description,
      image,
      url,
    },
  }
}
