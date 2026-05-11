import { describe, expect, test } from 'vitest'
import ogMetaPlugin from './og-meta-plugin'

describe('ogMetaPlugin', () => {
  const createMockPage = (path: string, frontmatter: Record<string, any> = {}) => {
    return {
      path,
      frontmatter: {
        title: 'Test Article',
        ...frontmatter,
      },
    }
  }

  const captureHead = (page: any) => {
    page.frontmatter.head = []
    ogMetaPlugin.extendsPage(page)
    return page.frontmatter.head
  }

  const getMetaContent = (head: any[], property: string) => {
    const entry = head.find(([tag, attrs]) => tag === 'meta' && attrs.property === property)
    return entry?.[1]?.content
  }

  describe('relative image path resolution', () => {
    test('resolves ./figures/ image path for path with trailing slash', () => {
      const page = createMockPage('/space-news/2026/05/2026-05-11-article/', {
        image: './figures/hero.jpg',
      })
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe(
        'https://cislunarspace.cn/space-news/2026/05/figures/hero.jpg'
      )
    })

    test('resolves ./figures/ image path for path without trailing slash', () => {
      const page = createMockPage('/space-news/2026/05/2026-05-11-article', {
        image: './figures/hero.jpg',
      })
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe(
        'https://cislunarspace.cn/space-news/2026/05/figures/hero.jpg'
      )
    })

    test('resolves ./figures/nested/ image path without trailing slash', () => {
      const page = createMockPage('/en/space-news/2026/05/2026-05-11-article', {
        image: './figures/nested/cover.png',
      })
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe(
        'https://cislunarspace.cn/en/space-news/2026/05/figures/nested/cover.png'
      )
    })

    test('uses absolute image path as-is', () => {
      const page = createMockPage('/space-news/2026/05/article/', {
        image: 'https://example.com/hero.jpg',
      })
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe('https://example.com/hero.jpg')
    })

    test('resolves root-relative image path', () => {
      const page = createMockPage('/space-news/2026/05/article/', {
        image: '/images/hero.jpg',
      })
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe('https://cislunarspace.cn/images/hero.jpg')
    })

    test('falls back to logo.png when no image specified', () => {
      const page = createMockPage('/space-news/2026/05/article/')
      const head = captureHead(page)
      expect(getMetaContent(head, 'og:image')).toBe('https://cislunarspace.cn/logo.png')
    })
  })
})
