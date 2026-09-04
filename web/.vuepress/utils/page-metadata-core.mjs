/**
 * Pure ESM normalizer for page metadata.
 *
 * This is the single source of truth used by:
 *   - ./page-metadata.ts (typed re-export for VuePress plugin + client)
 *   - ../scripts/wechat-share-tool.mjs (CLI audit + inject)
 *
 * Keeping the implementation in a `.mjs` lets the standalone CLI scripts
 * import it without a TypeScript loader while still being the only place
 * the title / description / image / locale / siteName rules live.
 */

const DEFAULT_SITE_BASE_URL = 'https://cislunarspace.cn';
const DEFAULT_IMAGE_PATH = '/logo.png';

/** @param {unknown} value */
function toStringValue(value) {
  return typeof value === 'string' ? value : '';
}

/** @param {string} path */
function resolvePageDirectory(path) {
  return path.replace(/[^/]+\/?$/, '');
}

/** @param {string} image @param {string} path @param {string} siteBaseUrl */
function resolveImageUrl(image, path, siteBaseUrl) {
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith('/')) return siteBaseUrl + image;
  if (image.startsWith('./')) return siteBaseUrl + resolvePageDirectory(path) + image.slice(2);
  return siteBaseUrl + DEFAULT_IMAGE_PATH;
}

/**
 * @param {{
 *   path: string,
 *   frontmatter: {
 *     title?: unknown,
 *     description?: unknown,
 *     image?: unknown,
 *     layout?: unknown,
 *     wechatShare?: { title?: unknown, desc?: unknown, image?: unknown }
 *   },
 *   siteBaseUrl?: string,
 *   pageUrl?: string,
 *   fallbackTitle?: string,
 *   fallbackDescription?: string
 * }} input
 */
export function normalizePageMetadata(input) {
  const siteBaseUrl = input.siteBaseUrl ?? DEFAULT_SITE_BASE_URL;
  const title =
    toStringValue(input.frontmatter.wechatShare?.title) ||
    toStringValue(input.frontmatter.title) ||
    input.fallbackTitle ||
    '';
  const description =
    toStringValue(input.frontmatter.wechatShare?.desc) ||
    toStringValue(input.frontmatter.description) ||
    input.fallbackDescription ||
    '';
  const image = resolveImageUrl(
    toStringValue(input.frontmatter.wechatShare?.image) || toStringValue(input.frontmatter.image),
    input.path,
    siteBaseUrl,
  );
  const url = input.pageUrl ?? siteBaseUrl + input.path;
  const type = input.frontmatter.layout === 'SpaceNewsArticle' ? 'article' : 'website';

  return {
    title,
    description,
    image,
    siteName: '地月空间入门指南',
    url,
    type,
    share: { title, description, image, url },
  };
}

/** Length cap for derived descriptions when no explicit description is present. */
export const DESCRIPTION_CLIP_MAX = 220;

/**
 * @param {string} value
 * @param {number} max
 */
export function clipDescription(value, max = DESCRIPTION_CLIP_MAX) {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}

/**
 * Resolve the WeChat share triple (title / desc / image) from raw frontmatter
 * using the same rules as normalizePageMetadata — but without an HTTP context,
 * so the image stays a site-relative path (e.g. `/logo.png`) rather than an
 * absolute URL. Used by the audit + inject CLI which writes back into YAML.
 *
 * @param {{ title?: string, description?: string, image?: string,
 *           wechatShare?: { title?: string, desc?: string, image?: string } }} frontmatter
 * @param {string} [fallbackTitle]
 * @returns {{ title: string, desc: string, image: string } | null}
 *          null when no title can be resolved (no point writing partial share data).
 */
export function resolveWechatShareFields(frontmatter, fallbackTitle) {
  const title =
    toStringValue(frontmatter.wechatShare?.title) ||
    toStringValue(frontmatter.title) ||
    fallbackTitle ||
    '';
  if (!title) return null;

  const rawDesc =
    toStringValue(frontmatter.wechatShare?.desc) || toStringValue(frontmatter.description) || '';
  const desc = clipDescription((rawDesc.trim() || title).trim());

  const explicitImage =
    toStringValue(frontmatter.wechatShare?.image) || toStringValue(frontmatter.image);
  const image = explicitImage && explicitImage.length ? explicitImage : DEFAULT_IMAGE_PATH;

  return { title, desc, image };
}
