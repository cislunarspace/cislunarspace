// @ts-expect-error — .mjs sibling provides the runtime implementation; this file owns the types.
import { normalizePageMetadata as normalizePageMetadataImpl } from './page-metadata-core.mjs';

export interface PageMetadataFrontmatter {
  title?: unknown;
  description?: unknown;
  image?: unknown;
  layout?: unknown;
  wechatShare?: {
    title?: unknown;
    desc?: unknown;
    image?: unknown;
  };
}

export interface NormalizePageMetadataInput {
  path: string;
  frontmatter: PageMetadataFrontmatter;
  siteBaseUrl?: string;
  pageUrl?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export type PageLocale = 'zh-CN' | 'en-US';
export type PageMetadataType = 'article' | 'website';

export interface NormalizedShareMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface NormalizedPageMetadata {
  title: string;
  description: string;
  image: string;
  locale: PageLocale;
  siteName: string;
  url: string;
  type: PageMetadataType;
  share: NormalizedShareMetadata;
}

export function normalizePageMetadata(input: NormalizePageMetadataInput): NormalizedPageMetadata {
  return normalizePageMetadataImpl(input) as NormalizedPageMetadata;
}
