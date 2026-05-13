import { describe, expect, test } from 'vitest'
import { normalizePageMetadata } from './page-metadata'

describe('normalizePageMetadata', () => {
  test('normalizes article metadata and share fields from standard frontmatter', () => {
    const metadata = normalizePageMetadata({
      path: '/space-news/2026/05/2026-05-13-launch-update/',
      frontmatter: {
        title: 'Launch update',
        description: 'Mission summary',
        image: './figures/hero.jpg',
        layout: 'SpaceNewsArticle',
      },
      siteBaseUrl: 'https://cislunarspace.cn',
    })

    expect(metadata).toEqual({
      title: 'Launch update',
      description: 'Mission summary',
      image: 'https://cislunarspace.cn/space-news/2026/05/figures/hero.jpg',
      locale: 'zh-CN',
      siteName: '地月空间入门指南',
      url: 'https://cislunarspace.cn/space-news/2026/05/2026-05-13-launch-update/',
      type: 'article',
      share: {
        title: 'Launch update',
        description: 'Mission summary',
        image: 'https://cislunarspace.cn/space-news/2026/05/figures/hero.jpg',
        url: 'https://cislunarspace.cn/space-news/2026/05/2026-05-13-launch-update/',
      },
    })
  })

  test('applies nested WeChat share fields to canonical metadata and share fields', () => {
    const metadata = normalizePageMetadata({
      path: '/space-news/2026/05/2026-05-13-launch-update/',
      frontmatter: {
        title: 'Launch update',
        description: 'Mission summary',
        image: './figures/hero.jpg',
        wechatShare: {
          title: 'WeChat launch title',
          desc: 'WeChat mission summary',
          image: './figures/wechat.jpg',
        },
      },
      siteBaseUrl: 'https://cislunarspace.cn',
    })

    expect(metadata.title).toBe('WeChat launch title')
    expect(metadata.description).toBe('WeChat mission summary')
    expect(metadata.image).toBe('https://cislunarspace.cn/space-news/2026/05/figures/wechat.jpg')
    expect(metadata.share).toEqual({
      title: 'WeChat launch title',
      description: 'WeChat mission summary',
      image: 'https://cislunarspace.cn/space-news/2026/05/figures/wechat.jpg',
      url: 'https://cislunarspace.cn/space-news/2026/05/2026-05-13-launch-update/',
    })
  })

  test('normalizes English locale site name and website type', () => {
    const metadata = normalizePageMetadata({
      path: '/en/resources-tools/',
      frontmatter: {
        title: 'Resources',
        image: '/images/resources.png',
      },
      siteBaseUrl: 'https://cislunarspace.cn',
    })

    expect(metadata.locale).toBe('en-US')
    expect(metadata.siteName).toBe("Cislunar Space Beginner's Guide")
    expect(metadata.type).toBe('website')
    expect(metadata.image).toBe('https://cislunarspace.cn/images/resources.png')
  })

  test('preserves absolute images and falls back to WeChat description', () => {
    const metadata = normalizePageMetadata({
      path: '/space-news/2026/05/article/',
      frontmatter: {
        title: 'Article title',
        image: 'https://img.example.com/hero.jpg',
        wechatShare: {
          desc: 'Fallback share description',
        },
      },
      siteBaseUrl: 'https://cislunarspace.cn',
    })

    expect(metadata.description).toBe('Fallback share description')
    expect(metadata.image).toBe('https://img.example.com/hero.jpg')
  })

  test('falls back to the site logo when no image is configured', () => {
    const metadata = normalizePageMetadata({
      path: '/what-is-cislunarspace/',
      frontmatter: {
        title: 'What is cislunar space?',
      },
      siteBaseUrl: 'https://cislunarspace.cn',
    })

    expect(metadata.image).toBe('https://cislunarspace.cn/logo.png')
  })
})
