import { describe, it, expect } from 'vitest'
import { stripFrontmatter } from './strip-frontmatter'

describe('stripFrontmatter', () => {
  it('strips YAML frontmatter from markdown', () => {
    const raw = '---\ntitle: Hello\nlayout: SpaceNewsArticle\n---\n# Hello\n\nBody text.'
    expect(stripFrontmatter(raw)).toBe('# Hello\n\nBody text.')
  })

  it('returns content unchanged when no frontmatter present', () => {
    const raw = '# No frontmatter\n\nJust content.'
    expect(stripFrontmatter(raw)).toBe(raw)
  })

  it('handles empty content after frontmatter', () => {
    const raw = '---\ntitle: Empty\n---\n'
    expect(stripFrontmatter(raw)).toBe('')
  })

  it('does not strip inline dashes not matching frontmatter pattern', () => {
    const raw = '---\nnot yaml\nSome text with --- dashes'
    expect(stripFrontmatter(raw)).toBe(raw)
  })
})
