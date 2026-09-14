import fs from 'fs';
import type MarkdownIt from 'markdown-it';
import type { BibliographyData } from './generators/bibliography.ts';

const CITE_REGEX = /\\cite\{([a-zA-Z0-9-,]+)\}/;

interface CitePluginOptions {
  bibliographyPath?: string;
  bibliographyData?: BibliographyData;
}

export function loadBibliography(bibPath: string): BibliographyData {
  try {
    return JSON.parse(fs.readFileSync(bibPath, 'utf-8'));
  } catch {
    return { entries: {}, citedBy: {} };
  }
}

export function applyCiteRule(md: MarkdownIt, bibData: BibliographyData): void {
  md.inline.ruler.before('escape', 'cite', (state, silent) => {
    const src = state.src.slice(state.pos);
    const match = src.match(CITE_REGEX);
    if (!match || match.index !== 0) return false;
    if (silent) return true;

    const keysStr = match[1];
    const keys = keysStr.split(',').map((k) => k.trim());

    for (const key of keys) {
      const entry = bibData.entries[key];
      const token = state.push('html_inline', '', 0);

      if (entry) {
        token.content = `<a class="cite-ref" href="/references#${key}">[${entry.number}]</a>`;
      } else {
        token.content = `<span class="cite-ref cite-missing">[?]</span>`;
      }
    }

    state.pos += match[0].length;
    return true;
  });
}

export function citePlugin(md: MarkdownIt, options: CitePluginOptions = {}): void {
  const bibData =
    options.bibliographyData ||
    (() => {
      const bibPath =
        options.bibliographyPath || new URL('./public/bibliography.json', import.meta.url).pathname;
      return loadBibliography(bibPath);
    })();

  applyCiteRule(md, bibData);
}
