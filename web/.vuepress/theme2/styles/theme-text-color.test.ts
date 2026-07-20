import { describe, test, expect, beforeAll } from 'vitest'
import * as sass from 'sass-embedded'
import * as path from 'path'

function compileScss(): string {
  const scssPath = path.resolve(__dirname, 'index.scss')
  const result = sass.compile(scssPath)
  return result.css
}

describe('theme text colors', () => {
  let compiledCss: string

  beforeAll(() => {
    compiledCss = compileScss()
  })

  test('light mode body text color is slate-900', () => {
    // :root should define --vp-c-text as slate-900 (softened from pure black)
    expect(compiledCss).toContain('--vp-c-text: #0f172a')
    expect(compiledCss).toContain('--c-text: #0f172a')
  })

  test('dark mode body text color is slate-200', () => {
    // [data-theme="dark"] should define --vp-c-text as slate-200 (softened from pure white)
    const darkThemeStart = compiledCss.indexOf('[data-theme=dark]')
    expect(darkThemeStart).toBeGreaterThan(-1)

    const darkThemeSection = compiledCss.slice(darkThemeStart)
    // Find the next closing brace to isolate dark theme block
    const darkThemeEnd = darkThemeSection.indexOf('}\n:root') // next :root or end
    const darkThemeBlock = darkThemeSection.slice(0, darkThemeEnd > 0 ? darkThemeEnd : undefined)

    expect(darkThemeBlock).toContain('--vp-c-text: #e2e8f0')
    expect(darkThemeBlock).toContain('--c-text: #e2e8f0')
  })

  test('paragraphs use primary text color variable', () => {
    expect(compiledCss).toContain('[vp-content] p {')
    const paragraphStart = compiledCss.indexOf('[vp-content] p {')
    const paragraphSection = compiledCss.slice(paragraphStart)
    const paragraphEnd = paragraphSection.indexOf('}')
    const paragraphBlock = paragraphSection.slice(0, paragraphEnd + 1)

    expect(paragraphBlock).toContain('color: var(--vp-c-text)')
  })
})
