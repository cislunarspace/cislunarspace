import { describe, expect, test, beforeEach } from 'vitest'
import MarkdownIt from 'markdown-it'
import { applyCiteRule } from './cite-plugin'
import type { BibliographyData } from './generators/bibliography'

const mockBibliography: BibliographyData = {
  entries: {
    vallado2001: { number: 1, formatted: 'Vallado DA. Fundamentals[M]. 2001.' },
    montenbruck2000: { number: 2, formatted: 'Montenbruck O. Satellite Orbits[M]. 2000.' },
  },
  citedBy: {},
}

describe('applyCiteRule', () => {
  let md: MarkdownIt

  beforeEach(() => {
    md = new MarkdownIt()
    applyCiteRule(md, mockBibliography)
  })

  test('renders single citation as numbered link', () => {
    const result = md.render('Deep space \\cite{vallado2001} exploration.')
    expect(result).toContain('class="cite-ref"')
    expect(result).toContain('[1]')
    expect(result).toContain('href="/references#vallado2001"')
  })

  test('renders multi-key citation as separate links', () => {
    const result = md.render('See \\cite{vallado2001,montenbruck2000} for details.')
    expect(result).toContain('[1]')
    expect(result).toContain('[2]')
    expect(result).toContain('href="/references#vallado2001"')
    expect(result).toContain('href="/references#montenbruck2000"')
  })

  test('renders unmatched key as red question mark', () => {
    const result = md.render('Reference \\cite{unknown2025} here.')
    expect(result).toContain('class="cite-ref cite-missing"')
    expect(result).toContain('[?]')
  })

  test('does not interfere with inline text', () => {
    const result = md.render('Formula x^2 and \\cite{vallado2001}.')
    expect(result).toContain('[1]')
    expect(result).toContain('x^2')
  })
})
