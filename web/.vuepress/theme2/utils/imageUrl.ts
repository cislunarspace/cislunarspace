export function resolveFrontmatterImage(image: string | undefined, routePath: string): string {
  if (!image) return ''
  if (/^https?:\/\//i.test(image)) return image
  if (image.startsWith('/')) return image
  if (image.startsWith('./')) {
    const dir = routePath.replace(/[^/]+\/$/, '')
    return dir + image.slice(2)
  }
  return ''
}
