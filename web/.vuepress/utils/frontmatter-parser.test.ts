import { describe, expect, test } from 'vitest'
import { parseFrontmatterAndBody } from './frontmatter-parser'

describe('parseFrontmatterAndBody', () => {
  test('returns frontmatter and body when frontmatter exists', () => {
    const content = `---\ntitle: Test\n---\n\n# Hello\n\nBody text.`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({ title: 'Test' })
    expect(result.body).toBe('\n\n# Hello\n\nBody text.')
  })

  test('returns empty frontmatter and full content when no frontmatter block', () => {
    const content = '# Hello\n\nBody text.'
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({})
    expect(result.body).toBe('# Hello\n\nBody text.')
  })

  test('returns empty body when content ends after frontmatter', () => {
    const content = `---\ntitle: Test\n---`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({ title: 'Test' })
    expect(result.body).toBe('')
  })

  test('parses flat string values', () => {
    const content = `---\ntitle: Hello World\ndate: 2024-01-15\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      title: 'Hello World',
      date: '2024-01-15',
    })
  })

  test('strips quotes from string values', () => {
    const content = `---\ntitle: "Quoted Title"\ndescription: 'Single Quotes'\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      title: 'Quoted Title',
      description: 'Single Quotes',
    })
  })

  test('parses boolean values', () => {
    const content = `---\ndraft: true\npublished: false\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      draft: true,
      published: false,
    })
  })

  test('parses inline arrays', () => {
    const content = `---\ncategory: [spacex, commercial]\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      category: ['spacex', 'commercial'],
    })
  })

  test('parses multi-line lists', () => {
    const content = `---\nrelated:\n  - item1\n  - item2\n  - item3\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      related: ['item1', 'item2', 'item3'],
    })
  })

  test('handles empty frontmatter block', () => {
    const content = `---\n---\n\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({})
  })

  test('handles CRLF line endings', () => {
    const content = `---\r\ntitle: CRLF Test\r\ndate: 2024-01-15\r\n---\r\n\r\n# Content`
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({
      title: 'CRLF Test',
      date: '2024-01-15',
    })
  })

  test('returns empty object when no frontmatter block exists', () => {
    const content = '# Hello\n\nSome text.'
    const result = parseFrontmatterAndBody(content)
    expect(result.frontmatter).toEqual({})
    expect(result.body).toBe(content)
  })
})
