function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function updateOgMeta(title: string, desc: string, image: string, url: string, ogType: 'article' | 'website') {
  const siteName = url.includes('/en/') ? "Cislunar Space Beginner's Guide" : '地月空间入门指南'
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', desc)
  setMeta('property', 'og:image', image)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:type', ogType)
  setMeta('property', 'og:site_name', siteName)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  if (desc)
    setMeta('name', 'twitter:description', desc)
  setMeta('name', 'twitter:image', image)
}
