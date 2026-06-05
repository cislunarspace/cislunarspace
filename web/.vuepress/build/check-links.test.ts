import { describe, expect, it } from 'vitest'
import { buildRouteTable, extractLinks, resolveLinks } from './check-links'
import type { MarkdownFile } from './check-links'

describe('buildRouteTable', () => {
  it('maps permalink to source file', () => {
    const files = [
      {
        absPath: '/web/what-is-cislunarspace/README.md',
        relPath: 'what-is-cislunarspace/README.md',
        content: '---\npermalink: /what-is-cislunarspace/\ntitle: Test\n---\n',
      },
    ]
    const table = buildRouteTable(files)
    expect(table.get('/what-is-cislunarspace/')).toBe(
      'what-is-cislunarspace/README.md',
    )
  })

  it('includes files without permalink using VuePress filesystem convention', () => {
    const files = [
      {
        absPath: '/web/glossary/orbits/dro.md',
        relPath: 'glossary/orbits/dro.md',
        content: '---\ntitle: DRO\n---\n',
      },
    ]
    const table = buildRouteTable(files)
    expect(table.get('/glossary/orbits/dro')).toBe('glossary/orbits/dro.md')
  })

  it('handles README.md as directory index', () => {
    const files = [
      {
        absPath: '/web/glossary/README.md',
        relPath: 'glossary/README.md',
        content: '---\ntitle: Glossary\n---\n',
      },
    ]
    const table = buildRouteTable(files)
    expect(table.get('/glossary/')).toBe('glossary/README.md')
  })
})

// ── extractLinks ──────────────────────────────────────────────────────────────

describe('extractLinks', () => {
  it('extracts markdown links with line numbers', () => {
    const body = 'Line 1\n[link text](/target/) here\nLine 3\n'
    const links = extractLinks(body)
    expect(links).toEqual([
      { line: 2, text: 'link text', target: '/target/', kind: 'link' },
    ])
  })

  it('extracts multiple links on the same line', () => {
    const body = '[a](/a/) and [b](/b/)\n'
    const links = extractLinks(body)
    expect(links).toHaveLength(2)
    expect(links[0]!.target).toBe('/a/')
    expect(links[1]!.target).toBe('/b/')
  })
})

// ── resolveLinks ──────────────────────────────────────────────────────────────

describe('resolveLinks', () => {
  const files: MarkdownFile[] = [
    {
      absPath: '/web/source.md',
      relPath: 'source.md',
      content:
        '---\npermalink: /source/\ntitle: Source\n---\n[broken](/nonexistent/)\n[ok](/target/)\n',
    },
    {
      absPath: '/web/target.md',
      relPath: 'target.md',
      content: '---\npermalink: /target/\ntitle: Target\n---\nBody\n',
    },
  ]

  it('reports broken links with status broken', () => {
    const results = resolveLinks(files)
    const broken = results.filter((r) => r.status === 'broken')
    expect(broken).toHaveLength(1)
    expect(broken[0]!.original).toBe('/nonexistent/')
    expect(broken[0]!.file).toBe('source.md')
    expect(broken[0]!.line).toBe(5)
  })

  it('reports resolved links with status ok', () => {
    const results = resolveLinks(files)
    const ok = results.filter((r) => r.status === 'ok')
    expect(ok).toHaveLength(1)
    expect(ok[0]!.original).toBe('/target/')
    expect(ok[0]!.resolved).toBe('target.md')
  })

  it('classifies external links as external', () => {
    const extFiles: MarkdownFile[] = [
      {
        absPath: '/web/ext.md',
        relPath: 'ext.md',
        content: '---\npermalink: /ext/\n---\n[ext](https://example.com)\n',
      },
    ]
    const results = resolveLinks(extFiles)
    expect(results).toHaveLength(1)
    expect(results[0]!.status).toBe('external')
  })

  it('resolves relative links from source file directory', () => {
    const relFiles: MarkdownFile[] = [
      {
        absPath: '/web/glossary/orbits/source.md',
        relPath: 'glossary/orbits/source.md',
        content:
          '---\npermalink: /glossary/orbits/source/\n---\n[sibling](./dro.md)\n',
      },
      {
        absPath: '/web/glossary/orbits/dro.md',
        relPath: 'glossary/orbits/dro.md',
        content: '---\npermalink: /glossary/orbits/dro/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(relFiles)
    const ok = results.filter((r) => r.status === 'ok')
    expect(ok).toHaveLength(1)
    expect(ok[0]!.original).toBe('./dro.md')
  })

  it('resolves relative directory-style links via route table', () => {
    const dirFiles: MarkdownFile[] = [
      {
        absPath: '/web/glossary/orbits/source.md',
        relPath: 'glossary/orbits/source.md',
        content:
          '---\npermalink: /glossary/orbits/source/\n---\n[to dro](./dro/)\n',
      },
      {
        absPath: '/web/glossary/orbits/dro.md',
        relPath: 'glossary/orbits/dro.md',
        content: '---\npermalink: /glossary/orbits/dro/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(dirFiles)
    const ok = results.filter((r) => r.status === 'ok')
    expect(ok).toHaveLength(1)
    expect(ok[0]!.original).toBe('./dro/')
    expect(ok[0]!.resolved).toBe('glossary/orbits/dro.md')
  })

  it('marks links with anchor as anchor-unchecked', () => {
    const anchorFiles: MarkdownFile[] = [
      {
        absPath: '/web/source.md',
        relPath: 'source.md',
        content:
          '---\npermalink: /source/\n---\n[with anchor](/target/#section)\n',
      },
      {
        absPath: '/web/target.md',
        relPath: 'target.md',
        content: '---\npermalink: /target/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(anchorFiles)
    expect(results[0]!.status).toBe('anchor-unchecked')
    expect(results[0]!.resolved).toBe('target.md')
  })

  it('strips .md suffix from absolute links', () => {
    const mdFiles: MarkdownFile[] = [
      {
        absPath: '/web/source.md',
        relPath: 'source.md',
        content:
          '---\npermalink: /source/\n---\n[to dro](/glossary/orbits/dro.md)\n',
      },
      {
        absPath: '/web/glossary/orbits/dro.md',
        relPath: 'glossary/orbits/dro.md',
        content: '---\npermalink: /glossary/orbits/dro/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(mdFiles)
    expect(results[0]!.status).toBe('ok')
    expect(results[0]!.resolved).toBe('glossary/orbits/dro.md')
  })

  it('resolves directory route to README.md', () => {
    const dirFiles: MarkdownFile[] = [
      {
        absPath: '/web/source.md',
        relPath: 'source.md',
        content:
          '---\npermalink: /source/\n---\n[to glossary](/glossary/)\n',
      },
      {
        absPath: '/web/glossary/README.md',
        relPath: 'glossary/README.md',
        content: '---\npermalink: /glossary/\n---\nGlossary\n',
      },
    ]
    const results = resolveLinks(dirFiles)
    expect(results[0]!.status).toBe('ok')
    expect(results[0]!.resolved).toBe('glossary/README.md')
  })

  it('resolves links to pages with filesystem-convention routes (no permalink)', () => {
    const fsFiles: MarkdownFile[] = [
      {
        absPath: '/web/source.md',
        relPath: 'source.md',
        content:
          '---\npermalink: /source/\n---\n[to dro](/glossary/orbits/dro)\n',
      },
      {
        absPath: '/web/glossary/orbits/dro.md',
        relPath: 'glossary/orbits/dro.md',
        content: '---\ntitle: DRO\n---\nBody\n',
      },
    ]
    const results = resolveLinks(fsFiles)
    expect(results[0]!.status).toBe('ok')
    expect(results[0]!.resolved).toBe('glossary/orbits/dro.md')
  })
})

// ── Image extraction (issue #86) ─────────────────────────────────────────────

describe('extractLinks > images', () => {
  it('extracts body images with line numbers', () => {
    const body = 'Text\n![alt text](/img/photo.png)\nMore text\n'
    const links = extractLinks(body)
    expect(links).toEqual([
      { line: 2, text: 'alt text', target: '/img/photo.png', kind: 'image' },
    ])
  })

  it('distinguishes images from links on the same line', () => {
    const body = '![img](/a.png) and [link](/b/)\n'
    const links = extractLinks(body)
    expect(links).toHaveLength(2)
    expect(links[0]!.kind).toBe('image')
    expect(links[1]!.kind).toBe('link')
  })
})

describe('resolveLinks > images', () => {
  it('classifies external image URLs as external', () => {
    const imgFiles: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content: '---\npermalink: /page/\n---\n![ext](https://example.com/img.jpg)\n',
      },
    ]
    const results = resolveLinks(imgFiles)
    expect(results).toHaveLength(1)
    expect(results[0]!.kind).toBe('image')
    expect(results[0]!.status).toBe('external')
  })

  it('resolves absolute image paths against route table', () => {
    const imgFiles: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content:
          '---\npermalink: /page/\n---\n![logo](/logo.png)\n',
      },
    ]
    // Image /logo.png is not a route — should be broken
    const results = resolveLinks(imgFiles)
    expect(results[0]!.kind).toBe('image')
    expect(results[0]!.status).toBe('broken')
  })

  it('resolves relative image paths from source directory', () => {
    const imgFiles: MarkdownFile[] = [
      {
        absPath: '/web/space-news/2026/05/article.md',
        relPath: 'space-news/2026/05/article.md',
        content:
          '---\npermalink: /space-news/2026/05/article/\n---\n![hero](./figures/hero.jpg)\n',
      },
    ]
    // ./figures/hero.jpg relative to space-news/2026/05/ → not a route
    const results = resolveLinks(imgFiles)
    expect(results[0]!.kind).toBe('image')
    // Should be broken because there's no matching file in the route table
    expect(results[0]!.status).toBe('broken')
  })

  it('extracts frontmatter image field', () => {
    const imgFiles: MarkdownFile[] = [
      {
        absPath: '/web/article.md',
        relPath: 'article.md',
        content:
          '---\npermalink: /article/\nimage: ./figures/hero.jpg\n---\nBody\n',
      },
    ]
    const results = resolveLinks(imgFiles)
    const fmImg = results.find((r) => r.original === './figures/hero.jpg')
    expect(fmImg).toBeDefined()
    expect(fmImg!.kind).toBe('image')
    expect(fmImg!.line).toBe(0) // frontmatter line 0
  })
})

// ── HTML comment classification (issue #87) ──────────────────────────────────

describe('resolveLinks > HTML comments', () => {
  it('classifies links inside single-line HTML comments as in-comment', () => {
    const files: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content:
          '---\npermalink: /page/\n---\n<!-- [broken](/nonexistent/) -->\n[real](/target/)\n',
      },
      {
        absPath: '/web/target.md',
        relPath: 'target.md',
        content: '---\npermalink: /target/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(files)
    const commented = results.filter((r) => r.status === 'in-comment')
    const active = results.filter((r) => r.status === 'ok')
    expect(commented).toHaveLength(1)
    expect(commented[0]!.original).toBe('/nonexistent/')
    expect(active).toHaveLength(1)
    expect(active[0]!.original).toBe('/target/')
  })

  it('handles multi-line HTML comments', () => {
    const files: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content:
          '---\npermalink: /page/\n---\n<!--\n[broken](/nonexistent/)\n-->\n[real](/target/)\n',
      },
      {
        absPath: '/web/target.md',
        relPath: 'target.md',
        content: '---\npermalink: /target/\n---\nBody\n',
      },
    ]
    const results = resolveLinks(files)
    const commented = results.filter((r) => r.status === 'in-comment')
    expect(commented).toHaveLength(1)
    expect(commented[0]!.original).toBe('/nonexistent/')
  })
})

// ── Cite validation (issue #88) ──────────────────────────────────────────────

describe('resolveCites', () => {
  it('reports missing bibliography keys', () => {
    const files: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content:
          '---\npermalink: /page/\n---\nText \\cite{missingKey2024} more\n',
      },
    ]
    const bibKeys = new Set(['existingKey2023'])
    const results = resolveLinks(files)
    // Cites should not appear in link results
    expect(results.filter((r) => r.kind === 'cite')).toHaveLength(0)
  })

  it('validates cite keys via resolveCites', async () => {
    const { resolveCites } = await import('./check-links')
    const files: MarkdownFile[] = [
      {
        absPath: '/web/page.md',
        relPath: 'page.md',
        content:
          '---\npermalink: /page/\n---\nText \\cite{missingKey} and \\cite{validKey,key2}\n',
      },
    ]
    const bibKeys = new Set(['validKey', 'key2', 'otherKey'])
    const results = resolveCites(files, bibKeys)
    expect(results).toHaveLength(3) // missingKey, validKey, key2
    const missing = results.filter((r) => r.status === 'missing-key')
    expect(missing).toHaveLength(1)
    expect(missing[0]!.original).toBe('\\cite{missingKey}')
    const ok = results.filter((r) => r.status === 'ok')
    expect(ok).toHaveLength(2)
  })
})
