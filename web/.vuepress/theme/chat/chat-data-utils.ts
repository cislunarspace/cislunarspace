/**
 * Data transformation utilities for the chat system.
 *
 * Path normalization, context blob assembly, site-map text formatting,
 * and response parsing. No side effects, no Vue, no network calls.
 */
import type { ChatIndexCategory, IndexRow, SiteContext } from './chat-types';

export function buildSiteMapText(categories: ChatIndexCategory[]): string {
  if (!categories?.length) return '';
  const parts: string[] = [];
  for (const cat of categories) {
    parts.push(`## ${cat.category}`);
    for (const entry of cat.entries) {
      parts.push(`- ${entry.path}\t${entry.title}`);
    }
    parts.push('');
  }
  return parts.join('\n').trim();
}

/** Flatten hierarchical categories into a flat IndexRow array. */
export function flattenCategories(categories: ChatIndexCategory[]): IndexRow[] {
  const rows: IndexRow[] = [];
  for (const cat of categories) {
    rows.push(...cat.entries);
  }
  return rows;
}

export function buildContextBlob(
  ctx: SiteContext,
  paths: string[],
  charBudget: number,
): string | null {
  const parts: string[] = [];
  let used = 0;

  for (const p of paths) {
    const rec = ctx[p];
    if (!rec) continue;
    const block = `--- ${p}\n# ${rec.title || p}\n\n${rec.text || ''}\n`;
    if (used + block.length > charBudget) {
      const left = Math.max(0, charBudget - used - 50);
      if (left < 200) break;
      parts.push(`${block.slice(0, left)}…\n[已截断]`);
      break;
    }
    used += block.length;
    parts.push(block);
  }

  return parts.length ? parts.join('\n') : null;
}

export function normalizePath(p: string): string | null {
  if (typeof p !== 'string' || !p.trim()) return null;
  let x = p.trim();
  if (!x.startsWith('/')) x = `/${x}`;
  if (!x.endsWith('/')) x = `${x}/`;
  return x;
}

export function normalizeAndValidatePaths(
  rawPaths: unknown,
  allowedPaths: Set<string>,
  max: number,
): string[] {
  const out: string[] = [];
  if (!Array.isArray(rawPaths)) return out;
  for (const r of rawPaths) {
    const p = normalizePath(String(r));
    if (p && allowedPaths.has(p) && !out.includes(p)) {
      out.push(p);
    }
    if (out.length >= max) break;
  }
  return out;
}

export function parseRouterResponse(raw: string): { paths: string[] } {
  if (typeof raw !== 'string' || !raw.trim()) return { paths: [] };
  let s = raw.trim();
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) s = fence[1].trim();
  try {
    const o = JSON.parse(s);
    if (Array.isArray(o.paths)) return { paths: o.paths };
  } catch {
    // ignore
  }
  return { paths: [] };
}

export function fallbackKeywordPaths(
  question: string,
  indexRows: IndexRow[],
  max: number,
): string[] {
  if (!indexRows?.length || !question) return [];
  const q = question.toLowerCase();
  const terms = q.split(/[\s,，。、；!？?]+/).filter((x) => x.length > 1);
  const scored = indexRows
    .map((item) => {
      const hay = `${item.path} ${item.title}`.toLowerCase();
      let s = 0;
      for (const t of terms) {
        if (t.length > 1 && hay.includes(t)) s += 3;
      }
      for (const ch of question) {
        if (ch.trim() && hay.includes(String(ch).toLowerCase())) s += 0.2;
      }
      return { p: item.path, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, max).map((x) => x.p);
}

export function formatPathList(paths: string[], indexRows: IndexRow[]): string {
  if (!Array.isArray(paths) || !paths.length) return '';
  const map = new Map((indexRows || []).map((r) => [r.path, r.title]));
  return paths
    .slice(0, 8)
    .map((p) => map.get(p) || p)
    .join(' · ');
}
