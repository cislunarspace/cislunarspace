import { describe, expect, test } from 'vitest'
import { normalizePageMetadata } from './utils/page-metadata'
// @ts-expect-error — .mjs sibling; we only need the runtime export for this test.
import { resolveWechatShareFields, clipDescription, DESCRIPTION_CLIP_MAX } from './utils/page-metadata-core.mjs'

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

describe('resolveWechatShareFields (WeChat CLI consumer)', () => {
  test('returns null when no title can be resolved', () => {
    expect(resolveWechatShareFields({})).toBeNull()
    expect(resolveWechatShareFields({ description: 'd' })).toBeNull()
  })

  test('uses title fallback when frontmatter has no title', () => {
    expect(resolveWechatShareFields({ description: 'desc' }, 'Fallback')).toEqual({
      title: 'Fallback',
      desc: 'desc',
      image: '/logo.png',
    })
  })

  test('clips long descriptions to DESCRIPTION_CLIP_MAX', () => {
    const long = 'a'.repeat(DESCRIPTION_CLIP_MAX + 50)
    const result = resolveWechatShareFields({ title: 't', description: long })

    // Clipped length = DESCRIPTION_CLIP_MAX (DESCRIPTION_CLIP_MAX-1 chars + '…').
    expect(result.desc.length).toBe(DESCRIPTION_CLIP_MAX)
    expect(result.desc.endsWith('…')).toBe(true)
  })

  test('falls back to title when description is empty', () => {
    expect(resolveWechatShareFields({ title: 'My title' })).toEqual({
      title: 'My title',
      desc: 'My title',
      image: '/logo.png',
    })
  })

  test('uses explicit image when present, otherwise logo', () => {
    expect(resolveWechatShareFields({ title: 't', image: '/figures/x.png' })).toEqual({
      title: 't',
      desc: 't',
      image: '/figures/x.png',
    })
    expect(resolveWechatShareFields({ title: 't' }).image).toBe('/logo.png')
  })

  test('nested wechatShare fields take precedence', () => {
    expect(resolveWechatShareFields({
      title: 'Root',
      description: 'Root desc',
      image: '/root.png',
      wechatShare: {
        title: 'WS title',
        desc: 'WS desc',
        image: '/ws.png',
      },
    })).toEqual({
      title: 'WS title',
      desc: 'WS desc',
      image: '/ws.png',
    })
  })

  test('agrees with normalizePageMetadata on title/description selection', () => {
    const frontmatter = {
      title: 'Root',
      description: 'Root desc',
      image: '/root.png',
      wechatShare: { title: 'WS title', desc: 'WS desc' },
    }

    const normalized = normalizePageMetadata({
      path: '/some-page/',
      frontmatter,
      siteBaseUrl: 'https://cislunarspace.cn',
    })
    const share = resolveWechatShareFields(frontmatter)

    expect(share.title).toBe(normalized.share.title)
    expect(share.desc).toBe(normalized.share.description)
    // Image is site-relative on the CLI side, absolute on the normalizer side —
    // assert the suffix is identical so both end up at the same final URL.
    expect(normalized.share.image.endsWith(share.image)).toBe(true)
  })
})

describe('clipDescription', () => {
  test('returns input unchanged when shorter than max', () => {
    expect(clipDescription('short', 10)).toBe('short')
  })

  test('appends ellipsis at max length', () => {
    const long = 'a'.repeat(20)
    expect(clipDescription(long, 10)).toBe(`${'a'.repeat(9)}…`)
  })
})
