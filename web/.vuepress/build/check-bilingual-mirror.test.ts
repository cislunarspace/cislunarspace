import { describe, expect, it, vi } from 'vitest';
import {
  detectGaps,
  detectKnowledgeBaseGaps,
  detectRootPageGaps,
  matchesException,
  applyExceptions,
  formatTerminalOutput,
  buildJsonReport,
  computeExitCode,
} from './check-bilingual-mirror';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import type {
  BilingualGap,
  GlossaryGapScanner,
  ExceptionRule,
  ContentFamily,
} from './check-bilingual-mirror-types.ts';

// ── Helpers ──────────────────────────────────────────────────────────────────

function md(relPath: string, content = ''): MarkdownFile {
  return { absPath: `/web/${relPath}`, relPath, content };
}

const GLOSSARY_SCANNER: GlossaryGapScanner = (files) => {
  // Simulates buildGlossaryScan returning gaps for zh glossary files
  // that have no en mirror. Only looks at files starting with 'glossary/'.
  const enPaths = new Set(
    files.filter((f) => f.relPath.startsWith('en/glossary/')).map((f) => f.relPath),
  );
  const gaps: Array<{ category: string; slug: string; zhTitle: string }> = [];
  for (const f of files) {
    if (!f.relPath.startsWith('glossary/')) continue;
    const parts = f.relPath.split('/');
    if (parts.length !== 3) continue;
    const [, catSlug, filename] = parts;
    const slug = filename.replace(/\.md$/, '');
    const expectedEn = `en/glossary/${catSlug}/${filename}`;
    if (!enPaths.has(expectedEn)) {
      gaps.push({ category: catSlug, slug, zhTitle: slug });
    }
  }
  return gaps;
};

// ── detectGaps ───────────────────────────────────────────────────────────────

describe('detectGaps', () => {
  it('detects missing English glossary mirrors', () => {
    const files = [
      md('glossary/fundamentals/cislunar-space.md', '---\ntitle: 地月空间\n---\n'),
      md('glossary/fundamentals/lagrange-point.md', '---\ntitle: 拉格朗日点\n---\n'),
      md('en/glossary/fundamentals/cislunar-space.md', '---\ntitle: Cislunar Space\n---\n'),
    ];

    const result = detectGaps(files, GLOSSARY_SCANNER);

    expect(result.gaps).toHaveLength(1);
    expect(result.gaps[0]).toEqual(
      expect.objectContaining({
        zhPath: 'glossary/fundamentals/lagrange-point.md',
        expectedEnPath: 'en/glossary/fundamentals/lagrange-point.md',
        family: 'glossary',
        severity: 'error',
      }),
    );
  });

  it('returns empty gaps when all glossary entries have English mirrors', () => {
    const files = [
      md('glossary/fundamentals/cislunar-space.md'),
      md('en/glossary/fundamentals/cislunar-space.md'),
    ];

    const result = detectGaps(files, GLOSSARY_SCANNER);

    expect(result.gaps).toHaveLength(0);
  });

  it('produces correct family summaries', () => {
    const files = [
      md('glossary/fundamentals/a.md'),
      md('glossary/fundamentals/b.md'),
      md('glossary/dynamics/c.md'),
    ];

    const result = detectGaps(files, GLOSSARY_SCANNER);

    expect(result.byFamily).toEqual([{ family: 'glossary', severity: 'error', gapCount: 3 }]);
  });

  it('uses injected glossary gap scanner', () => {
    const customScanner: GlossaryGapScanner = () => [
      { category: 'test', slug: 'fake', zhTitle: 'Fake' },
    ];
    const files = [md('glossary/test/fake.md')];

    const result = detectGaps(files, customScanner);

    expect(result.gaps).toHaveLength(1);
    expect(result.gaps[0].zhTitle).toBe('Fake');
  });
});

// ── detectKnowledgeBaseGaps ───────────────────────────────────────────────────

describe('detectKnowledgeBaseGaps', () => {
  it('detects missing English mirrors in knowledge-base sections', () => {
    const files = [
      md('cislunar-orbits/dro/halo-orbit.md'),
      md('en/cislunar-orbits/dro/halo-orbit.md'),
      md('cislunar-orbits/nrho/l1-nrho.md'),
      md('research-frontiers/directions/orbital-debris.md'),
    ];

    const gaps = detectKnowledgeBaseGaps(files);

    expect(gaps).toHaveLength(2);
    expect(gaps[0]).toEqual(
      expect.objectContaining({
        zhPath: 'cislunar-orbits/nrho/l1-nrho.md',
        expectedEnPath: 'en/cislunar-orbits/nrho/l1-nrho.md',
        family: 'knowledge-base',
        severity: 'error',
      }),
    );
    expect(gaps[1]).toEqual(
      expect.objectContaining({
        zhPath: 'research-frontiers/directions/orbital-debris.md',
      }),
    );
  });

  it('ignores README files', () => {
    const files = [md('cislunar-orbits/README.md'), md('research-frontiers/README.md')];

    const gaps = detectKnowledgeBaseGaps(files);

    expect(gaps).toHaveLength(0);
  });

  it('ignores en/ files (only checks zh as source)', () => {
    const files = [md('en/cislunar-orbits/dro/halo-orbit.md')];

    const gaps = detectKnowledgeBaseGaps(files);

    expect(gaps).toHaveLength(0);
  });
});

// ── detectRootPageGaps ────────────────────────────────────────────────────────

describe('detectRootPageGaps', () => {
  it('detects missing English mirrors for root pages', () => {
    const files = [
      md('ai-chat.md'),
      md('forum.md'),
      md('dialectic.md'),
      md('en/ai-chat.md'),
      md('en/forum.md'),
    ];

    const gaps = detectRootPageGaps(files);

    expect(gaps).toHaveLength(1);
    expect(gaps[0]).toEqual(
      expect.objectContaining({
        zhPath: 'dialectic.md',
        expectedEnPath: 'en/dialectic.md',
        family: 'root',
        severity: 'warning',
      }),
    );
  });

  it('ignores README.md (site homepage handled by VuePress)', () => {
    const files = [md('README.md')];

    const gaps = detectRootPageGaps(files);

    expect(gaps).toHaveLength(0);
  });

  it('ignores en/ root pages', () => {
    const files = [md('en/ai-chat.md')];

    const gaps = detectRootPageGaps(files);

    expect(gaps).toHaveLength(0);
  });
});

// ── matchesException ─────────────────────────────────────────────────────────

describe('matchesException', () => {
  it('matches exact path', () => {
    expect(matchesException('dialectic.md', [{ pattern: 'dialectic.md', reason: 'test' }])).toBe(
      true,
    );
  });

  it('matches prefix with **', () => {
    const rules: ExceptionRule[] = [
      { pattern: 'research-frontiers/directions/_templates/**', reason: 'template' },
    ];
    expect(matchesException('research-frontiers/directions/_templates/foo.md', rules)).toBe(true);
    expect(matchesException('research-frontiers/directions/_templates/sub/bar.md', rules)).toBe(
      true,
    );
    expect(matchesException('research-frontiers/directions/orbit-design/foo.md', rules)).toBe(false);
  });

  it('returns false when no rules match', () => {
    expect(matchesException('glossary/fundamentals/a.md', [])).toBe(false);
    expect(
      matchesException('glossary/fundamentals/a.md', [{ pattern: 'dialectic.md', reason: 'test' }]),
    ).toBe(false);
  });
});

// ── applyExceptions ──────────────────────────────────────────────────────────

describe('applyExceptions', () => {
  it('filters out gaps matching exception rules', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'glossary/fundamentals/a.md',
        expectedEnPath: 'en/glossary/fundamentals/a.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'A',
      },
      {
        zhPath: 'dialectic.md',
        expectedEnPath: 'en/dialectic.md',
        family: 'root',
        severity: 'warning',
        zhTitle: '思辨',
      },
    ];
    const rules: ExceptionRule[] = [{ pattern: 'dialectic.md', reason: 'zh-only' }];

    const result = applyExceptions(gaps, rules);

    expect(result.filtered).toHaveLength(1);
    expect(result.filtered[0].zhPath).toBe('glossary/fundamentals/a.md');
    expect(result.matchedExceptions).toHaveLength(1);
    expect(result.matchedExceptions[0].matchedPaths).toContain('dialectic.md');
  });

  it('returns empty matchedExceptions when no gaps match', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'a.md',
        expectedEnPath: 'en/a.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'A',
      },
    ];
    const result = applyExceptions(gaps, [{ pattern: 'b.md', reason: 'test' }]);

    expect(result.filtered).toHaveLength(1);
    expect(result.matchedExceptions).toHaveLength(0);
  });
});

// ── buildJsonReport ──────────────────────────────────────────────────────────

describe('buildJsonReport', () => {
  it('builds report with summary, gaps, and exceptions', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'a.md',
        expectedEnPath: 'en/a.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'A',
      },
      {
        zhPath: 'b.md',
        expectedEnPath: 'en/b.md',
        family: 'root',
        severity: 'warning',
        zhTitle: 'B',
      },
    ];
    const exceptions = [{ pattern: 'c.md', reason: 'test', matchedPaths: ['c.md'] }];

    const report = buildJsonReport(gaps, exceptions);

    expect(report.summary.total).toBe(2);
    expect(report.summary.byFamily).toEqual({ glossary: 1, root: 1 });
    expect(report.summary.bySeverity).toEqual({ error: 1, warning: 1 });
    expect(report.gaps).toHaveLength(2);
    expect(report.exceptions).toHaveLength(1);
    expect(report.exceptions[0].matchedPaths).toContain('c.md');
  });
});

// ── formatTerminalOutput ─────────────────────────────────────────────────────

describe('formatTerminalOutput', () => {
  it('returns summary and detail lines grouped by family', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'glossary/fundamentals/a.md',
        expectedEnPath: 'en/glossary/fundamentals/a.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'Alpha',
      },
      {
        zhPath: 'glossary/dynamics/b.md',
        expectedEnPath: 'en/glossary/dynamics/b.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'Beta',
      },
    ];
    const byFamily = [
      { family: 'glossary' as ContentFamily, severity: 'error' as const, gapCount: 2 },
    ];

    const output = formatTerminalOutput(gaps, byFamily, []);

    expect(output.summary).toContain('2');
    expect(output.summary).toContain('glossary');
    // details include family header + 2 gap lines
    expect(output.details.length).toBeGreaterThanOrEqual(2);
    expect(output.details.some((d) => d.includes('glossary/fundamentals/a.md'))).toBe(true);
    expect(output.details.some((d) => d.includes('Alpha'))).toBe(true);
  });

  it('shows exceptions in output when provided', () => {
    const exceptions = [
      {
        pattern: 'dialectic.md',
        reason: 'zh-only special surface',
        matchedPaths: ['dialectic.md'],
      },
    ];

    const output = formatTerminalOutput([], [], exceptions);

    expect(output.exceptions).toHaveLength(1);
    expect(output.exceptions[0]).toContain('dialectic.md');
    expect(output.exceptions[0]).toContain('zh-only special surface');
  });
});

// ── computeExitCode ──────────────────────────────────────────────────────────

describe('computeExitCode', () => {
  it('returns 1 when gaps with severity >= threshold exist', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'a.md',
        expectedEnPath: 'en/a.md',
        family: 'glossary',
        severity: 'error',
        zhTitle: 'A',
      },
    ];

    expect(computeExitCode(gaps, 'warning')).toBe(1);
    expect(computeExitCode(gaps, 'error')).toBe(1);
  });

  it('returns 0 when only warnings exist and threshold is error', () => {
    const gaps: BilingualGap[] = [
      {
        zhPath: 'a.md',
        expectedEnPath: 'en/a.md',
        family: 'root',
        severity: 'warning',
        zhTitle: 'A',
      },
    ];

    expect(computeExitCode(gaps, 'error')).toBe(0);
    expect(computeExitCode(gaps, 'warning')).toBe(1);
  });

  it('returns 0 when no gaps exist', () => {
    expect(computeExitCode([], 'warning')).toBe(0);
    expect(computeExitCode([], 'error')).toBe(0);
  });
});
