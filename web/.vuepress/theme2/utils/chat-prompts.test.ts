import { describe, it, expect } from 'vitest'
import {
  buildAnswerRulesBlock,
  buildSystemPrompt,
  buildAnswerSystemWithRetrieved,
  buildRouterSystemPrompt,
  buildRouterUserMessage,
} from './chat-prompts'
import {
  buildSiteMapText,
  buildContextBlob,
  normalizePath,
  normalizeAndValidatePaths,
  parseRouterResponse,
  fallbackKeywordPaths,
  formatPathList,
} from './chat-data-utils'
import { parseSseLine } from './chat-stream'
import type { ChatIndexCategory, IndexRow, SiteContext } from './chat-types'

describe('buildAnswerRulesBlock', () => {
  it('returns English rules for en locale', () => {
    const result = buildAnswerRulesBlock('en')
    expect(result).toContain("Cislunar Space Beginner's Guide")
    expect(result).toContain('English')
  })

  it('returns Chinese rules for zh locale', () => {
    const result = buildAnswerRulesBlock('zh')
    expect(result).toContain('地月空间入门指南')
    expect(result).toContain('中文')
  })
})

describe('buildSystemPrompt', () => {
  it('includes rules and index text for en', () => {
    const rules = 'Be helpful'
    const index = '- /foo: Foo'
    const result = buildSystemPrompt(rules, index, 'en')
    expect(result).toContain(rules)
    expect(result).toContain('Site index')
    expect(result).toContain(index)
  })

  it('includes rules and index text for zh', () => {
    const rules = 'Be helpful'
    const index = '- /foo: Foo'
    const result = buildSystemPrompt(rules, index, 'zh')
    expect(result).toContain(rules)
    expect(result).toContain('站点索引')
    expect(result).toContain(index)
  })
})

describe('buildAnswerSystemWithRetrieved', () => {
  it('includes excerpts and index for en', () => {
    const result = buildAnswerSystemWithRetrieved('rules', 'excerpt', 'index', 'en')
    expect(result).toContain('rules')
    expect(result).toContain('Relevant page excerpts')
    expect(result).toContain('excerpt')
    expect(result).toContain('Site index')
    expect(result).toContain('index')
  })

  it('includes excerpts and index for zh', () => {
    const result = buildAnswerSystemWithRetrieved('rules', 'excerpt', 'index', 'zh')
    expect(result).toContain('rules')
    expect(result).toContain('本站节选')
    expect(result).toContain('excerpt')
    expect(result).toContain('站点索引')
    expect(result).toContain('index')
  })
})

describe('buildRouterSystemPrompt', () => {
  it('mentions maxPaths for en', () => {
    const result = buildRouterSystemPrompt('en', 5)
    expect(result).toContain('pick between 3 and 5')
    expect(result).toContain('JSON object')
  })

  it('mentions maxPaths for zh', () => {
    const result = buildRouterSystemPrompt('zh', 5)
    expect(result).toContain('约 3～5 个')
    expect(result).toContain('JSON 对象')
  })
})

describe('buildRouterUserMessage', () => {
  it('includes current question for en', () => {
    const result = buildRouterUserMessage([], 'What is CR3BP?', 'en')
    expect(result).toContain('Current user question:')
    expect(result).toContain('What is CR3BP?')
  })

  it('includes recent messages and truncates long content', () => {
    const history = [
      { role: 'user', content: 'a'.repeat(600) },
      { role: 'assistant', content: 'short' },
    ]
    const result = buildRouterUserMessage(history, 'q', 'en')
    expect(result).toContain('Recent messages')
    expect(result).toContain('a'.repeat(500) + '…')
    expect(result).toContain('short')
  })

  it('uses zh labels for zh locale', () => {
    const result = buildRouterUserMessage([], '问题', 'zh')
    expect(result).toContain('当前用户问题：')
    expect(result).toContain('问题')
  })

  it('limits history to last 6 messages', () => {
    const history = Array.from({ length: 10 }, (_, i) => ({
      role: 'user',
      content: `msg${i}`,
    }))
    const result = buildRouterUserMessage(history, 'q', 'en')
    expect(result).toContain('msg9')
    expect(result).toContain('msg4')
    expect(result).not.toContain('msg3')
  })
})

describe('buildSiteMapText', () => {
  it('formats categories as grouped path<tab>title', () => {
    const categories: ChatIndexCategory[] = [
      {
        category: 'Category A',
        entries: [
          { path: '/foo/', title: 'Foo' },
          { path: '/bar/', title: 'Bar' },
        ],
      },
      {
        category: 'Category B',
        entries: [
          { path: '/baz/', title: 'Baz' },
        ],
      },
    ]
    expect(buildSiteMapText(categories)).toBe(
      '## Category A\n- /foo/\tFoo\n- /bar/\tBar\n\n## Category B\n- /baz/\tBaz'
    )
  })

  it('returns empty string for empty array', () => {
    expect(buildSiteMapText([])).toBe('')
  })
})

describe('buildContextBlob', () => {
  const ctx: SiteContext = {
    zh: {
      '/page1/': { title: 'Page 1', text: 'Content one' },
      '/page2/': { title: 'Page 2', text: 'Content two' },
    },
    en: {
      '/page1/': { title: 'Page 1 EN', text: 'English one' },
    },
  }

  it('returns null when no paths match', () => {
    expect(buildContextBlob(ctx, 'zh', ['/missing/'], 1000, false)).toBeNull()
  })

  it('builds blob for matched zh paths', () => {
    const result = buildContextBlob(ctx, 'zh', ['/page1/'], 1000, false)
    expect(result).toContain('Page 1')
    expect(result).toContain('Content one')
  })

  it('builds blob for matched en paths', () => {
    const result = buildContextBlob(ctx, 'en', ['/page1/'], 1000, true)
    expect(result).toContain('Page 1 EN')
    expect(result).toContain('English one')
  })

  it('truncates when exceeding char budget', () => {
    const longCtx: SiteContext = {
      zh: {
        '/long/': { title: 'Long', text: 'a'.repeat(500) },
      },
      en: {},
    }
    const result = buildContextBlob(longCtx, 'zh', ['/long/'], 400, false)
    expect(result).toContain('…')
    expect(result).toContain('已截断')
  })

  it('skips truncation when remaining space is too small', () => {
    const longCtx: SiteContext = {
      zh: {
        '/a/': { title: 'A', text: 'short' },
        '/b/': { title: 'B', text: 'b'.repeat(500) },
      },
      en: {},
    }
    const result = buildContextBlob(longCtx, 'zh', ['/a/', '/b/'], 80, false)
    // First page fits, second exceeds budget with <200 chars left → break
    expect(result).toContain('short')
    expect(result).not.toContain('B')
  })
})

describe('normalizePath', () => {
  it('adds leading and trailing slash', () => {
    expect(normalizePath('foo')).toBe('/foo/')
  })

  it('keeps existing slashes', () => {
    expect(normalizePath('/foo/')).toBe('/foo/')
  })

  it('trims whitespace', () => {
    expect(normalizePath('  /foo  ')).toBe('/foo/')
  })

  it('returns null for empty string', () => {
    expect(normalizePath('')).toBeNull()
    expect(normalizePath('   ')).toBeNull()
  })

  it('returns null for non-string', () => {
    expect(normalizePath(null as unknown as string)).toBeNull()
    expect(normalizePath(undefined as unknown as string)).toBeNull()
  })
})

describe('normalizeAndValidatePaths', () => {
  it('filters to allowed paths', () => {
    const allowed = new Set(['/a/', '/b/'])
    expect(normalizeAndValidatePaths(['/a/', '/c/'], allowed, 10)).toEqual(['/a/'])
  })

  it('normalizes raw paths', () => {
    const allowed = new Set(['/a/'])
    expect(normalizeAndValidatePaths(['a'], allowed, 10)).toEqual(['/a/'])
  })

  it('deduplicates paths', () => {
    const allowed = new Set(['/a/'])
    expect(normalizeAndValidatePaths(['/a/', '/a/', 'a'], allowed, 10)).toEqual(['/a/'])
  })

  it('respects max limit', () => {
    const allowed = new Set(['/a/', '/b/', '/c/'])
    expect(normalizeAndValidatePaths(['/a/', '/b/', '/c/'], allowed, 2)).toEqual(['/a/', '/b/'])
  })

  it('returns empty for non-array', () => {
    expect(normalizeAndValidatePaths('oops', new Set(), 5)).toEqual([])
  })
})

describe('parseRouterResponse', () => {
  it('parses plain JSON', () => {
    const raw = JSON.stringify({ paths: ['/a/', '/b/'], rationale: 'test' })
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/a/', '/b/'] })
  })

  it('strips markdown fences', () => {
    const raw = '```json\n{"paths":["/a/"]}\n```'
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/a/'] })
  })

  it('returns empty paths for invalid JSON', () => {
    expect(parseRouterResponse('not json')).toEqual({ paths: [] })
  })

  it('returns empty paths when paths is not an array', () => {
    expect(parseRouterResponse('{"paths":"wrong"}')).toEqual({ paths: [] })
  })

  it('handles empty input', () => {
    expect(parseRouterResponse('')).toEqual({ paths: [] })
    expect(parseRouterResponse(null as unknown as string)).toEqual({ paths: [] })
  })
})

describe('fallbackKeywordPaths', () => {
  const rows: IndexRow[] = [
    { path: '/cr3bp/', title: 'CR3BP' },
    { path: '/orbits/', title: 'Cislunar Orbits' },
    { path: '/other/', title: 'Other' },
  ]

  it('returns empty for empty question or rows', () => {
    expect(fallbackKeywordPaths('', rows, 3)).toEqual([])
    expect(fallbackKeywordPaths('q', [], 3)).toEqual([])
  })

  it('scores by term matches', () => {
    const result = fallbackKeywordPaths('cr3bp orbits', rows, 3)
    expect(result).toContain('/cr3bp/')
    expect(result).toContain('/orbits/')
  })

  it('limits to max', () => {
    expect(fallbackKeywordPaths('cislunar', rows, 1)).toHaveLength(1)
  })

  it('filters out zero-score items', () => {
    expect(fallbackKeywordPaths('xyz', rows, 3)).toEqual([])
  })
})

describe('formatPathList', () => {
  it('joins path titles with dot separator', () => {
    const rows: IndexRow[] = [
      { path: '/a/', title: 'Alpha' },
      { path: '/b/', title: 'Beta' },
    ]
    expect(formatPathList(['/a/', '/b/'], rows)).toBe('Alpha · Beta')
  })

  it('falls back to raw path when title missing', () => {
    const rows: IndexRow[] = [{ path: '/a/', title: 'Alpha' }]
    expect(formatPathList(['/a/', '/missing/'], rows)).toBe('Alpha · /missing/')
  })

  it('limits to 8 paths', () => {
    const rows: IndexRow[] = Array.from({ length: 10 }, (_, i) => ({
      path: `/${i}/`,
      title: `T${i}`,
    }))
    const paths = rows.map((r) => r.path)
    const result = formatPathList(paths, rows)
    expect(result.split(' · ')).toHaveLength(8)
  })

  it('returns empty for empty input', () => {
    expect(formatPathList([], [])).toBe('')
    expect(formatPathList(undefined as unknown as string[], [])).toBe('')
  })
})

describe('parseSseLine', () => {
  it('parses data line with delta', () => {
    const line = 'data: {"choices":[{"delta":{"content":"hi"}}]}'
    expect(parseSseLine(line)).toEqual({ content: 'hi' })
  })

  it('returns null for non-data lines', () => {
    expect(parseSseLine('event: message')).toBeNull()
    expect(parseSseLine('')).toBeNull()
  })

  it('returns null for [DONE]', () => {
    expect(parseSseLine('data: [DONE]')).toBeNull()
  })

  it('returns null for invalid JSON', () => {
    expect(parseSseLine('data: not-json')).toBeNull()
  })

  it('parses reasoning_content', () => {
    const line = 'data: {"choices":[{"delta":{"reasoning_content":"think"}}]}'
    expect(parseSseLine(line)).toEqual({ reasoning_content: 'think' })
  })
})
