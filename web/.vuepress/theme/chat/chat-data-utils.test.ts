import { describe, it, expect } from 'vitest';
import {
  parseRouterResponse,
  normalizeAndValidatePaths,
  buildContextBlob,
} from './chat-data-utils';
import type { SiteContext } from './chat-types';

// ---------------------------------------------------------------------------
// parseRouterResponse
// ---------------------------------------------------------------------------
describe('parseRouterResponse', () => {
  it('parses valid JSON with paths array', () => {
    const raw = '{"paths": ["/a/", "/b/"]}';
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/a/', '/b/'] });
  });

  it('parses JSON wrapped in ```json fenced block', () => {
    const raw = '```json\n{"paths": ["/x/"]}\n```';
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/x/'] });
  });

  it('parses JSON wrapped in plain ``` fenced block', () => {
    const raw = '```\n{"paths": ["/y/"]}\n```';
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/y/'] });
  });

  it('returns empty paths for invalid JSON', () => {
    expect(parseRouterResponse('{broken')).toEqual({ paths: [] });
  });

  it('returns empty paths for empty string', () => {
    expect(parseRouterResponse('')).toEqual({ paths: [] });
  });

  it('returns empty paths for whitespace-only string', () => {
    expect(parseRouterResponse('   \n\t  ')).toEqual({ paths: [] });
  });

  it('returns empty paths for non-string input', () => {
    expect(parseRouterResponse(null as unknown as string)).toEqual({ paths: [] });
  });

  it('returns empty paths when JSON has no paths key', () => {
    expect(parseRouterResponse('{"other": 1}')).toEqual({ paths: [] });
  });

  it('returns empty paths when paths is not an array', () => {
    expect(parseRouterResponse('{"paths": "not-array"}')).toEqual({ paths: [] });
  });

  it('ignores surrounding text before fenced block', () => {
    const raw = 'Here is my answer:\n```json\n{"paths": ["/z/"]}\n```\nDone.';
    expect(parseRouterResponse(raw)).toEqual({ paths: ['/z/'] });
  });
});

// ---------------------------------------------------------------------------
// normalizeAndValidatePaths
// ---------------------------------------------------------------------------
describe('normalizeAndValidatePaths', () => {
  const allowed = new Set(['/about/', '/guide/', '/faq/']);

  it('returns valid paths present in allowed set', () => {
    expect(normalizeAndValidatePaths(['/about/', '/guide/'], allowed, 10)).toEqual([
      '/about/',
      '/guide/',
    ]);
  });

  it('normalizes paths missing leading/trailing slash', () => {
    expect(normalizeAndValidatePaths(['about', 'guide'], allowed, 10)).toEqual([
      '/about/',
      '/guide/',
    ]);
  });

  it('filters out paths not in allowed set (hallucinated / external)', () => {
    expect(
      normalizeAndValidatePaths(['/about/', '/nonexistent/', 'https://evil.com/'], allowed, 10),
    ).toEqual(['/about/']);
  });

  it('returns empty array for empty input array', () => {
    expect(normalizeAndValidatePaths([], allowed, 10)).toEqual([]);
  });

  it('returns empty array for non-array input', () => {
    expect(normalizeAndValidatePaths('not-array' as unknown, allowed, 10)).toEqual([]);
  });

  it('returns empty array when all paths are empty strings', () => {
    expect(normalizeAndValidatePaths(['', '  '], allowed, 10)).toEqual([]);
  });

  it('deduplicates paths', () => {
    expect(normalizeAndValidatePaths(['/about/', 'about', '/about/'], allowed, 10)).toEqual([
      '/about/',
    ]);
  });

  it('respects max limit', () => {
    expect(normalizeAndValidatePaths(['/about/', '/guide/', '/faq/'], allowed, 2)).toEqual([
      '/about/',
      '/guide/',
    ]);
  });

  it('blocks external URLs that are not in allowed set', () => {
    expect(
      normalizeAndValidatePaths(['https://example.com/', 'http://evil.org/'], allowed, 10),
    ).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// buildContextBlob
// ---------------------------------------------------------------------------
describe('buildContextBlob', () => {
  const ctx: SiteContext = {
    '/a/': { title: '页面A', text: '内容A' },
    '/b/': { title: '页面B', text: '内容B' },
  };

  it('returns concatenated blocks for valid paths', () => {
    const result = buildContextBlob(ctx, ['/a/', '/b/'], 10000);
    expect(result).toContain('页面A');
    expect(result).toContain('内容A');
    expect(result).toContain('页面B');
    expect(result).toContain('内容B');
  });

  it('skips paths not found in the context bag', () => {
    const result = buildContextBlob(ctx, ['/missing/'], 10000);
    expect(result).toBeNull();
  });

  it('returns null for empty paths array', () => {
    expect(buildContextBlob(ctx, [], 10000)).toBeNull();
  });

  it('truncates when content exceeds budget', () => {
    const bigCtx: SiteContext = {
      '/x/': { title: '大页面', text: '字'.repeat(5000) },
    };
    const result = buildContextBlob(bigCtx, ['/x/'], 500);
    expect(result).toContain('已截断');
  });
});
