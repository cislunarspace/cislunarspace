import { describe, expect, test } from 'vitest'
import { markdownToPlain } from './markdown-to-plain'

describe('markdownToPlain', () => {
  describe('code blocks', () => {
    test('strips fenced code blocks entirely', () => {
      expect(markdownToPlain('Some text\n```\ncode here\n```\nMore text')).toBe('Some text\nMore text')
    })

    test('strips fenced code blocks with language specifier', () => {
      expect(markdownToPlain('Text\n```typescript\nconst x = 1;\n```\nEnd')).toBe('Text\nEnd')
    })

    test('strips inline code markers, keeping the code content', () => {
      expect(markdownToPlain('Use `console.log()` for debugging')).toBe('Use console.log() for debugging')
    })

    test('handles multiple inline code segments', () => {
      expect(markdownToPlain('`foo` and `bar`')).toBe('foo and bar')
    })
  })

  describe('links and images', () => {
    test('converts links to just the text', () => {
      expect(markdownToPlain('Check [this link](https://example.com)')).toBe('Check this link')
    })

    test('converts images to just the alt text', () => {
      expect(markdownToPlain('![diagram](https://example.com/diagram.png)')).toBe('diagram')
    })

    test('handles links with special characters in text', () => {
      expect(markdownToPlain('[Click here (please)](http://a.com)')).toBe('Click here (please)')
    })
  })

  describe('math expressions', () => {
    test('converts display math blocks to space', () => {
      // Original regex replaces with single space
      expect(markdownToPlain('Before $$E = mc^2$$ After')).toBe('Before   After')
    })

    test('converts inline math with backslash brackets to space', () => {
      // KaTeX uses \\( and \\) or \\[ and \\]
      expect(markdownToPlain('Value of \\[\\alpha\\] is')).toBe('Value of   is')
    })

    test('converts inline math with backslash parens to space', () => {
      expect(markdownToPlain('Formula \\(x^2\\)')).toBe('Formula')
    })
  })

  describe('headers', () => {
    test('removes all header markers', () => {
      expect(markdownToPlain('# Header 1\n## Header 2\n### Header 3')).toBe('Header 1\nHeader 2\nHeader 3')
    })

    test('handles headers at different levels', () => {
      expect(markdownToPlain('###### H6')).toBe('H6')
    })
  })

  describe('text formatting', () => {
    test('removes bold markers', () => {
      expect(markdownToPlain('This is **bold** text')).toBe('This is bold text')
    })

    test('removes italic markers', () => {
      expect(markdownToPlain('This is *italic* text')).toBe('This is italic text')
    })

    test('strips complete italic markers from start to end', () => {
      // Regex matches *text* when at string boundaries
      expect(markdownToPlain('A*star*B')).toBe('AstarB')
      // But when preceded by other content, only matches standalone *text*
      expect(markdownToPlain('The word *nix')).toBe('The word *nix')
    })
  })

  describe('blockquotes', () => {
    test('removes blockquote markers', () => {
      expect(markdownToPlain('> This is quoted\n> Multiple lines')).toBe('This is quoted\nMultiple lines')
    })

    test('handles blockquotes without trailing space', () => {
      expect(markdownToPlain('>Quote')).toBe('Quote')
    })
  })

  describe('lists', () => {
    test('converts unordered lists to bullet points', () => {
      expect(markdownToPlain('- Item 1\n- Item 2\n- Item 3')).toBe('• Item 1\n• Item 2\n• Item 3')
    })

    test('handles different unordered list markers', () => {
      expect(markdownToPlain('* Item 1\n+ Item 2\n- Item 3')).toBe('• Item 1\n• Item 2\n• Item 3')
    })

    test('removes ordered list numbers', () => {
      expect(markdownToPlain('1. First\n2. Second\n10. Tenth')).toBe('First\nSecond\nTenth')
    })
  })

  describe('HTML', () => {
    test('converts closing HTML tags to newlines', () => {
      expect(markdownToPlain('Line 1</p>Line 2')).toBe('Line 1\nLine 2')
    })

    test('converts both opening and closing HTML tags', () => {
      // Opening tags become spaces, closing tags become newlines
      expect(markdownToPlain('Text<span>more</span>end')).toBe('Text more\nend')
    })

    test('handles multiple closing tags consecutively', () => {
      // Note: \s+\n pattern collapses consecutive newlines
      expect(markdownToPlain('A</p></div>B')).toBe('A\nB')
    })
  })

  describe('whitespace normalization', () => {
    test('collapses multiple newlines', () => {
      expect(markdownToPlain('Para 1\n\n\n\n\nPara 2')).toBe('Para 1\nPara 2')
    })

    test('removes trailing spaces before newlines', () => {
      expect(markdownToPlain('Line with spaces   \nNext line')).toBe('Line with spaces\nNext line')
    })

    test('trims leading and trailing whitespace', () => {
      expect(markdownToPlain('   \n\nContent\n\n   ')).toBe('Content')
    })
  })

  describe('complex real-world inputs', () => {
    test('handles a typical markdown article', () => {
      const input = `---
title: Test Article
---

# Introduction

This article covers **markdown** and *formatting*.

## Code Example

\`\`\`javascript
console.log("hello");
\`\`\`

Check out [the docs](https://docs.example.com).

> Important note here.

1. First item
2. Second item
3. Third item

![diagram](./diagram.png)
`
      const result = markdownToPlain(input)
      expect(result).toContain('Introduction')
      expect(result).toContain('markdown')
      expect(result).toContain('formatting')
      expect(result).toContain('Code Example')
      expect(result).not.toContain('```')
      expect(result).toContain('the docs')
      expect(result).toContain('Important note here')
      expect(result).toContain('First item')
      // Images become just the alt text (path without extension becomes just 'diagram')
      expect(result).toContain('diagram')
    })
  })
})
