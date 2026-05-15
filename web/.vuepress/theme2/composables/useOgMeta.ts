import type { NormalizedPageMetadata } from '../../page-metadata'

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Apply normalized page metadata to <head> as OG / Twitter card meta tags.
 *
 * Consumes the same `NormalizedPageMetadata` produced by `normalizePageMetadata`
 * that the build-time og-meta-plugin uses, so client and server agree on
 * siteName, image resolution, title/description fallbacks, and og:type.
 */
export function updateOgMeta(metadata: NormalizedPageMetadata): void {
  setMeta('property', 'og:title', metadata.title)
  setMeta('property', 'og:description', metadata.description)
  setMeta('property', 'og:image', metadata.image)
  setMeta('property', 'og:url', metadata.url)
  setMeta('property', 'og:type', metadata.type)
  setMeta('property', 'og:site_name', metadata.siteName)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', metadata.title)
  if (metadata.description) {
    setMeta('name', 'twitter:description', metadata.description)
  }
  setMeta('name', 'twitter:image', metadata.image)
}
