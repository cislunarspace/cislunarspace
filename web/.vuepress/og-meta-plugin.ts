const ogMetaPlugin = {
  name: 'plugin-og-meta',

  extendsPage(page: any) {
    const fm = page.frontmatter
    if (!fm.title) return

    const head = (fm.head ??= [])
    const base = 'https://www.cislunarspace.cn'

    const addMeta = (attrs: Record<string, string>) => {
      head.push(['meta', attrs])
    }

    addMeta({ property: 'og:title', content: String(fm.title) })

    if (fm.description) {
      addMeta({ property: 'og:description', content: String(fm.description) })
    }

    addMeta({
      property: 'og:type',
      content: fm.layout === 'SpaceNewsArticle' ? 'article' : 'website',
    })
    addMeta({ property: 'og:site_name', content: '地月空间入门指南' })
    addMeta({ property: 'og:url', content: base + page.path })

    let imageUrl = `${base}/logo.png`
    if (fm.image) {
      const img = String(fm.image)
      if (img.startsWith('http')) {
        imageUrl = img
      } else if (img.startsWith('./')) {
        const dir = page.path.replace(/[^/]+\/$/, '')
        imageUrl = base + dir + img.slice(2)
      } else if (img.startsWith('/')) {
        imageUrl = base + img
      }
    }
    addMeta({ property: 'og:image', content: imageUrl })
    addMeta({ name: 'twitter:card', content: 'summary_large_image' })
    addMeta({ name: 'twitter:image', content: imageUrl })
  },
}

export default ogMetaPlugin
