/**
 * Markdown rendering pipeline for AI chat responses.
 *
 * Handles KaTeX math, GFM tables, blockquotes, headings, links, bold/italic.
 * Input is model-generated markdown that may be malformed; output is sanitized HTML.
 *
 * Design: pure functions with no side effects. The one exception is
 * `sanitizeGeneratedHtml`, which requires a DOM environment.
 */
import katex from 'katex';
import { escapeHtml } from './html';

// Unicode Private Use Area characters used as KaTeX placeholder delimiters.
// Chosen to avoid collision with any valid Unicode character in model output.
const KATEX_PLACEHOLDER_START = 'K';
const KATEX_PLACEHOLDER_END = '';

export interface KatexRenderResult {
  text: string;
  placeholders: string[];
}

export interface RenderOptions {
  locale?: 'zh' | 'en';
}

/**
 * Render KaTeX block/inline math, replacing each math block with a placeholder.
 * Returns the text with placeholders and the array of rendered HTML strings.
 */
export function renderKatex(text: string): KatexRenderResult {
  const placeholders: string[] = [];

  function pushPlaceholder(source: string, displayMode: boolean): string {
    const id = placeholders.length;
    try {
      placeholders.push(katex.renderToString(source.trim(), { displayMode, throwOnError: false }));
    } catch {
      placeholders.push(escapeHtml(source));
    }
    return `${KATEX_PLACEHOLDER_START}${id}${KATEX_PLACEHOLDER_END}`;
  }

  let result = String(text || '');

  // $$...$$ display math
  result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, source) => pushPlaceholder(source, true));
  // \[...\] display math
  result = result.replace(/\\\[([\s\S]+?)\\\]/g, (_, source) => pushPlaceholder(source, true));
  // \(...\) inline math
  result = result.replace(/\\\(([\s\S]+?)\\\)/g, (_, source) => pushPlaceholder(source, false));
  // $...$ inline math (not followed by another $)
  result = result.replace(
    /(^|[^$])\$([^$\n]+)\$/g,
    (_, prefix, source) => prefix + pushPlaceholder(source, false),
  );

  return { text: result, placeholders };
}

export function renderInlineMarkdown(text: string, placeholders: string[]): string {
  let html = escapeHtml(text);

  // Restore KaTeX placeholders
  html = html
    .replace(/K(\d+)/g, (_, id) => placeholders[Number(id)] || '')
    .replace(/%%KATEX_(\d+)%%/g, (_, id) => placeholders[Number(id)] || '')
    .replace(/%%KATEX(\d+)%%/g, (_, id) => placeholders[Number(id)] || '');

  // [text](url) links
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[A-Za-z0-9\-_/]+\/?(?:#[A-Za-z0-9\-_]+)?)\)/g,
    (_, label, href) => `<a href="${escapeHtml(href)}" class="chat-link">${label}</a>`,
  );

  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic *text*
  html = html.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  // Italic _text_
  html = html.replace(/(^|[^_])_([^_\n]+)_(?!_)/g, '$1<em>$2</em>');

  // Auto-link bare https:// URLs
  html = html.replace(
    /(^|\s)(https?:\/\/[^\s<]+)/g,
    (_, prefix, href) =>
      `${prefix}<a href="${escapeHtml(href)}" class="chat-link">${escapeHtml(href)}</a>`,
  );
  // Auto-link bare internal paths
  html = html.replace(
    /(^|\s)(\/[A-Za-z0-9\-_/]+\/?(?:#[A-Za-z0-9\-_]+)?)/g,
    (_, prefix, href) =>
      `${prefix}<a href="${escapeHtml(href)}" class="chat-link">${escapeHtml(href)}</a>`,
  );

  return html;
}

function splitTableRowCells(line: string): string[] {
  const t = String(line).trim();
  if (!t.includes('|')) return [];
  const raw = t.startsWith('|') ? t : `|${t}`;
  const withEnd = raw.endsWith('|') ? raw : `${raw}|`;
  const segs = withEnd.split('|');
  return segs.slice(1, -1).map((s) => s.trim());
}

/** True if the line is a GFM table alignment row (e.g., |---|:---|). */
function isTableAlignmentLine(line: string): boolean {
  const parts = splitTableRowCells(line);
  if (parts.length < 1) return false;
  return parts.every((p) => /^[:\-|\s]+$/.test(p) && /-/.test(p) && !/[0-9A-Za-z一-鿿]/.test(p));
}

/** True if the line looks like a GFM table data row. */
function isProbableTableRowLine(line: string): boolean {
  const t = String(line).trim();
  if (!t.includes('|')) return false;
  if (isTableAlignmentLine(t)) return false;
  return splitTableRowCells(t).length >= 1;
}

export function renderTableHtml(
  headerLine: string,
  bodyLines: string[],
  placeholders: string[],
): string {
  const headerCells = splitTableRowCells(headerLine);
  if (headerCells.length === 0) return '';
  const colCount = headerCells.length;
  const th = headerCells.map((c) => `<th>${renderInlineMarkdown(c, placeholders)}</th>`).join('');

  const trs = bodyLines.map((rowLine) => {
    let cells = splitTableRowCells(rowLine);
    if (cells.length < colCount) {
      while (cells.length < colCount) cells.push('');
    } else if (cells.length > colCount) {
      cells = cells.slice(0, colCount);
    }
    return `<tr>${cells.map((c) => `<td>${renderInlineMarkdown(c, placeholders)}</td>`).join('')}</tr>`;
  });

  return `<div class="chat-md-table-wrap"><table class="chat-md-table"><thead><tr>${th}</tr></thead><tbody>${trs.join('')}</tbody></table></div>`;
}

/**
 * Render full markdown text (block-level elements + inline).
 * Calls sanitizeGeneratedHtml on the output.
 */
export function renderLinkedHtml(text: string): string {
  const katexResult = renderKatex(text);
  const lines = katexResult.text.split('\n');
  const html: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = String(raw).trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // GFM table: header row + alignment row + data rows
    if (i + 1 < lines.length) {
      const nextTrim = String(lines[i + 1]).trim();
      if (isProbableTableRowLine(trimmed) && isTableAlignmentLine(nextTrim)) {
        const firstData = i + 2 < lines.length ? String(lines[i + 2]).trim() : '';
        const isRealTable = !firstData || isProbableTableRowLine(String(lines[i + 2]));
        if (isRealTable) {
          const body: string[] = [];
          let j = i + 2;
          while (j < lines.length) {
            const rowT = String(lines[j]).trim();
            if (!rowT) break;
            if (!isProbableTableRowLine(rowT)) break;
            body.push(rowT);
            j++;
          }
          html.push(renderTableHtml(trimmed, body, katexResult.placeholders));
          i = j;
          continue;
        }
      }
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      html.push(
        `<h${level}>${renderInlineMarkdown(headingMatch[2], katexResult.placeholders)}</h${level}>`,
      );
      i++;
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('>')) {
      const bq: string[] = [];
      while (i < lines.length) {
        const lt = String(lines[i]).trim();
        if (!lt) break;
        if (!lt.startsWith('>')) break;
        bq.push(lt.replace(/^>\s?/, ''));
        i++;
      }
      const inner = bq.map((l) => renderInlineMarkdown(l, katexResult.placeholders)).join('<br/>');
      html.push(`<blockquote class="chat-md-blockquote">${inner}</blockquote>`);
      continue;
    }

    // Paragraph
    html.push(`<p>${renderInlineMarkdown(raw, katexResult.placeholders)}</p>`);
    i++;
  }

  return sanitizeGeneratedHtml(html.join(''));
}

/**
 * Strip dangerous attributes (on*, javascript: href/src, srcdoc) from AI-generated HTML.
 * Requires a DOM environment (browser or happy-dom with querySelector support).
 * Returns the input unchanged in non-DOM environments.
 */
export function sanitizeGeneratedHtml(html: string): string {
  if (typeof window === 'undefined' || typeof document === 'undefined') return html;
  const container = document.createElement('div');
  container.innerHTML = html;
  const elements = container.querySelectorAll('*');
  for (const el of elements) {
    for (const attr of [...el.attributes]) {
      const name = attr.name.toLowerCase();
      if (name.startsWith('on') || name === 'srcdoc') {
        el.removeAttribute(attr.name);
      }
      if (name === 'href' || name === 'src') {
        const val = attr.value.trim().toLowerCase();
        if (
          val.startsWith('javascript:') ||
          val.startsWith('data:') ||
          val.startsWith('vbscript:')
        ) {
          el.removeAttribute(attr.name);
        }
      }
    }
  }
  return container.innerHTML;
}
