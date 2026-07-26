import { describe, it, expect } from 'vitest';
import {
  renderKatex,
  renderInlineMarkdown,
  renderTableHtml,
  renderLinkedHtml,
  sanitizeGeneratedHtml,
} from './markdown-renderer';
import { escapeHtml } from './html';

describe('escapeHtml', () => {
  it('escapes & < > "', () => {
    expect(escapeHtml('a & b < c > d "e"')).toBe('a &amp; b &lt; c &gt; d &quot;e&quot;');
  });

  it('handles non-string input', () => {
    expect(escapeHtml(123 as unknown as string)).toBe('123');
  });

  it('returns empty string for empty input', () => {
    expect(escapeHtml('')).toBe('');
  });
});

describe('renderKatex', () => {
  it('renders $$...$$ display math', () => {
    const result = renderKatex('$$x^2$$');
    expect(result.text).toMatch(/^K0$/);
    expect(result.placeholders[0]).toContain('katex-display');
  });

  it('renders \\(\\) inline math', () => {
    const result = renderKatex('\\(E=mc^2\\)');
    expect(result.text).toMatch(/^K0$/);
  });

  it('renders $...$ inline math', () => {
    const result = renderKatex('$x + y$');
    // prefix '' + placeholder + '' (no trailing content)
    expect(result.text).toBe('K0');
  });

  it('handles \\(\\$...\\(\\) display math', () => {
    const result = renderKatex('\\[\sum_{i=1}^n i\\]');
    expect(result.text).toBe('K0');
  });

  it('returns empty result for plain text', () => {
    const result = renderKatex('hello world');
    expect(result.text).toBe('hello world');
    expect(result.placeholders).toHaveLength(0);
  });

  it('handles unbalanced $ gracefully', () => {
    const result = renderKatex('$unclosed math');
    expect(result.text).toBe('$unclosed math');
    expect(result.placeholders).toHaveLength(0);
  });

  it('handles empty input', () => {
    const result = renderKatex('');
    expect(result.text).toBe('');
    expect(result.placeholders).toHaveLength(0);
  });
});

describe('renderInlineMarkdown', () => {
  it('renders **bold**', () => {
    const html = renderInlineMarkdown('hello **world**', []);
    expect(html).toBe('hello <strong>world</strong>');
  });

  it('renders *italic*', () => {
    expect(renderInlineMarkdown('*hello*', [])).toBe('<em>hello</em>');
    expect(renderInlineMarkdown('_hello_', [])).toBe('<em>hello</em>');
  });

  it('renders [label](url) links', () => {
    const html = renderInlineMarkdown('[CR3BP](/en/glossary/cr3bp/)', []);
    expect(html).toBe('<a href="/en/glossary/cr3bp/" class="chat-link">CR3BP</a>');
  });

  it('renders bare https:// URLs as auto-links', () => {
    const html = renderInlineMarkdown('see https://example.com', []);
    expect(html).toContain(
      '<a href="https://example.com" class="chat-link">https://example.com</a>',
    );
  });

  it('renders bare internal paths as auto-links', () => {
    const html = renderInlineMarkdown('see /en/glossary/cr3bp/', []);
    expect(html).toContain(
      '<a href="/en/glossary/cr3bp/" class="chat-link">/en/glossary/cr3bp/</a>',
    );
  });

  it('restores KaTeX placeholders', () => {
    const placeholders = ['<katex>'];
    const html = renderInlineMarkdown('E = K0', placeholders);
    expect(html).toContain('<katex>');
  });

  it('restores %%KATEX_0%% legacy placeholders', () => {
    const placeholders = ['<katex>'];
    const html = renderInlineMarkdown('E = %%KATEX_0%%', placeholders);
    expect(html).toContain('<katex>');
  });

  it('restores %%KATEX0%% legacy placeholders (no underscore)', () => {
    const placeholders = ['<katex>'];
    const html = renderInlineMarkdown('E = %%KATEX0%%', placeholders);
    expect(html).toContain('<katex>');
  });

  it('escapes HTML in plain text', () => {
    const html = renderInlineMarkdown('<script>alert(1)</script>', []);
    expect(html).toContain('&lt;script&gt;');
  });
});

describe('renderTableHtml', () => {
  it('renders a valid table', () => {
    const html = renderTableHtml('| A | B |', ['| 1 | 2 |', '| 3 | 4 |'], []);
    expect(html).toContain('<th>A</th>');
    expect(html).toContain('<td>1</td>');
    expect(html).toContain('<td>4</td>');
    expect(html).toContain('chat-md-table');
  });

  it('pads missing cells with empty td', () => {
    const html = renderTableHtml('| A | B | C |', ['| 1 |'], []);
    expect(html).toContain('<td>1</td>');
    expect(html).toContain('<td></td>'); // padded
  });

  it('truncates excess cells', () => {
    const html = renderTableHtml('| A |', ['| 1 | 2 | 3 |'], []);
    // Header | A | → 1 <th>; body | 1 | 2 | 3 | truncated to 1 column → 1 <td>
    const tds = html.match(/<td>/g);
    expect(tds?.length).toBe(1); // only 1 body cell after truncation
  });

  it('returns empty string for empty header', () => {
    expect(renderTableHtml('', [], [])).toBe('');
  });
});

describe('renderLinkedHtml', () => {
  it('renders # heading', () => {
    const html = renderLinkedHtml('# Hello World');
    expect(html).toContain('<h1>Hello World</h1>');
  });

  it('renders ## heading', () => {
    const html = renderLinkedHtml('## Section Two');
    expect(html).toContain('<h2>Section Two</h2>');
  });

  it('renders > blockquote', () => {
    const html = renderLinkedHtml('> This is a quote');
    expect(html).toContain('chat-md-blockquote');
    expect(html).toContain('This is a quote');
  });

  it('renders GFM table', () => {
    const input = `| A | B |
|---|---|
| 1 | 2 |`;
    const html = renderLinkedHtml(input);
    expect(html).toContain('chat-md-table-wrap');
    expect(html).toContain('<th>A</th>');
    expect(html).toContain('<td>1</td>');
  });

  it('renders paragraph', () => {
    const html = renderLinkedHtml('Hello world');
    expect(html).toContain('<p>Hello world</p>');
  });

  it('renders mixed content (heading + paragraph + table)', () => {
    const input = `# Title

Some intro text.

| H1 | H2 |
|----|----|
| A  | B  |

> A note`;
    const html = renderLinkedHtml(input);
    expect(html).toContain('<h1>Title</h1>');
    expect(html).toContain('chat-md-blockquote');
    expect(html).toContain('chat-md-table-wrap');
  });

  it('handles empty input', () => {
    expect(renderLinkedHtml('')).toBe('');
  });

  it('escapes ampersand in href', () => {
    const input = '[click](https://example.com/?a=1&b=2)';
    const result = renderLinkedHtml(input);
    expect(result).toContain('a=1&amp;b=2');
  });

  it('renders normal URL correctly', () => {
    const input = '[NASA](https://nasa.gov)';
    const result = renderLinkedHtml(input);
    expect(result).toContain('href="https://nasa.gov"');
    expect(result).toContain('>NASA</a>');
  });
});

describe('sanitizeGeneratedHtml (browser)', () => {
  it('removes onclick attribute', () => {
    const html = '<div onclick="alert(1)">test</div>';
    const result = sanitizeGeneratedHtml(html);
    expect(result).not.toContain('onclick');
  });

  it('removes javascript: href', () => {
    const html = '<a href="javascript:alert(1)">click</a>';
    const result = sanitizeGeneratedHtml(html);
    expect(result).not.toContain('javascript:');
  });

  it('removes data: src', () => {
    const html = '<img src="data:text/html,<script>alert(1)</script>">';
    const result = sanitizeGeneratedHtml(html);
    expect(result).not.toContain('data:');
  });

  it('removes srcdoc attribute', () => {
    const html = '<iframe srcdoc="<script>alert(1)</script>">';
    const result = sanitizeGeneratedHtml(html);
    expect(result).not.toContain('srcdoc');
  });

  it('keeps safe href intact', () => {
    const html = '<a href="/en/page/">Link</a>';
    const result = sanitizeGeneratedHtml(html);
    expect(result).toContain('href="/en/page/"');
  });

  it('keeps safe src intact', () => {
    const html = '<img src="https://example.com/image.png">';
    const result = sanitizeGeneratedHtml(html);
    expect(result).toContain('src="https://example.com/image.png"');
  });
});
