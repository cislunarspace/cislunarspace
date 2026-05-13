import { normalizePageMetadata } from './page-metadata'

const ogMetaPlugin = {
  name: 'plugin-og-meta',

  extendsPage(page: any) {
    const fm = page.frontmatter
    if (!fm.title) return

    const head = (fm.head ??= [])
    const metadata = normalizePageMetadata({
      path: page.path,
      frontmatter: fm,
    })

    const addMeta = (attrs: Record<string, string>) => {
      head.push(['meta', attrs])
    }

    addMeta({ property: 'og:title', content: metadata.title })

    if (metadata.description) {
      addMeta({ property: 'og:description', content: metadata.description })
      addMeta({ name: 'twitter:description', content: metadata.description })
    }

    addMeta({ property: 'og:type', content: metadata.type })
    addMeta({ property: 'og:site_name', content: metadata.siteName })
    addMeta({ property: 'og:url', content: metadata.url })
    addMeta({ property: 'og:image', content: metadata.image })
    addMeta({ name: 'twitter:card', content: 'summary_large_image' })
    addMeta({ name: 'twitter:title', content: metadata.title })
    addMeta({ name: 'twitter:image', content: metadata.image })
  },
}

export default ogMetaPlugin
