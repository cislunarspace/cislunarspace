import { describe, expect, it } from 'vitest';
import {
  detectMissingLayout,
  detectMissingTitle,
  detectMissingDescription,
  detectDateSlugMismatch,
  detectMissingCategory,
  detectImageIssues,
  detectPermalinkDateMismatch,
  detectMissingAuthor,
  detectCategoryCrossLocale,
  detectDateCrossLocale,
  detectImageCrossLocale,
  detectUntranslatedTitle,
  collectIssues,
  buildValidationResult,
  computeExitCode,
  formatTerminalOutput,
  buildJsonReport,
  extractArticleInfo,
} from './check-space-news-frontmatter';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import type { FrontmatterIssue, Severity } from './check-space-news-frontmatter-types.ts';

// ── Helpers ──────────────────────────────────────────────────────────────────

function md(relPath: string, content: string): MarkdownFile {
  return { absPath: `/web/${relPath}`, relPath, content };
}

function article(relPath: string, fields: Record<string, unknown>): MarkdownFile {
  const slug = relPath.split('/').pop()!.replace(/\.md$/, '');
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.join(', ')}]`);
    } else if (v === undefined) {
      // field intentionally omitted
    } else {
      lines.push(`${k}: ${typeof v === 'string' && v.includes(':') ? `"${v}"` : v}`);
    }
  }
  lines.push('---');
  lines.push('');
  lines.push(`# ${fields.title ?? slug}`);
  return md(relPath, lines.join('\n'));
}

const SAMPLE_FIELDS = {
  layout: 'SpaceNewsArticle',
  title: 'Test Article',
  description: 'A test description',
  permalink: '/space-news/2026/04/2026-04-01-test/',
  author: '天疆说',
  date: '2026-04-01',
  lastUpdated: '2026-04-02',
  category: 'china',
  image: './figures/2026-04-01-test/hero.jpg',
};

// ── extractArticleInfo ───────────────────────────────────────────────────────

describe('extractArticleInfo', () => {
  it('extracts slug date from zh path', () => {
    const info = extractArticleInfo('space-news/2026/04/2026-04-01-test.md');
    expect(info).toEqual({ slug: '2026-04-01-test', slugDate: '2026-04-01', isEn: false });
  });

  it('extracts slug date from en path', () => {
    const info = extractArticleInfo('en/space-news/2026/05/2026-05-03-test.md');
    expect(info).toEqual({ slug: '2026-05-03-test', slugDate: '2026-05-03', isEn: true });
  });

  it('returns null for README', () => {
    expect(extractArticleInfo('space-news/2026/04/README.md')).toBeNull();
  });

  it('returns null for non-article files', () => {
    expect(extractArticleInfo('space-news/README.md')).toBeNull();
  });
});

// ── Single-file rules ────────────────────────────────────────────────────────

describe('detectMissingLayout', () => {
  it('detects missing layout field', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      layout: undefined,
    });
    const issues = detectMissingLayout(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-layout');
    expect(issues[0].severity).toBe('error');
    expect(issues[0].field).toBe('layout');
  });

  it('detects wrong layout value', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      layout: 'WrongLayout',
    });
    const issues = detectMissingLayout(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('wrong-layout');
  });

  it('returns empty for correct layout', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectMissingLayout(file)).toHaveLength(0);
  });
});

describe('detectMissingTitle', () => {
  it('detects missing title', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: undefined,
    });
    const issues = detectMissingTitle(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-title');
    expect(issues[0].severity).toBe('error');
  });

  it('detects empty title', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: '',
    });
    const issues = detectMissingTitle(file);
    expect(issues).toHaveLength(1);
  });

  it('returns empty for valid title', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectMissingTitle(file)).toHaveLength(0);
  });
});

describe('detectMissingDescription', () => {
  it('detects missing description', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      description: undefined,
    });
    const issues = detectMissingDescription(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-description');
    expect(issues[0].severity).toBe('error');
  });

  it('detects empty description', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      description: '',
    });
    const issues = detectMissingDescription(file);
    expect(issues).toHaveLength(1);
  });

  it('returns empty for valid description', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectMissingDescription(file)).toHaveLength(0);
  });
});

describe('detectDateSlugMismatch', () => {
  it('detects date not matching slug date', () => {
    const file = article('space-news/2026/05/2026-05-03-test.md', {
      ...SAMPLE_FIELDS,
      date: '2026-05-02',
    });
    const issues = detectDateSlugMismatch(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('date-slug-mismatch');
    expect(issues[0].severity).toBe('error');
    expect(issues[0].message).toContain('2026-05-02');
    expect(issues[0].message).toContain('2026-05-03');
  });

  it('detects missing date', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      date: undefined,
    });
    const issues = detectDateSlugMismatch(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-date');
  });

  it('returns empty when date matches slug', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectDateSlugMismatch(file)).toHaveLength(0);
  });
});

describe('detectMissingCategory', () => {
  it('detects missing category', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: undefined,
    });
    const issues = detectMissingCategory(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-category');
    expect(issues[0].severity).toBe('error');
  });

  it('detects empty category', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: '',
    });
    const issues = detectMissingCategory(file);
    expect(issues).toHaveLength(1);
  });

  it('accepts array category', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['china', 'commercial'],
    });
    expect(detectMissingCategory(file)).toHaveLength(0);
  });
});

describe('detectImageIssues', () => {
  it('detects missing image', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      image: undefined,
    });
    const issues = detectImageIssues(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-image');
    expect(issues[0].severity).toBe('error');
  });

  it('detects image value "null"', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      image: '"null"',
    });
    const issues = detectImageIssues(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('null-image');
  });

  it('detects leading whitespace in image path', () => {
    const file = md(
      'space-news/2026/04/2026-04-01-test.md',
      '---\nlayout: SpaceNewsArticle\ntitle: Test\ndescription: Desc\ndate: 2026-04-01\ncategory: china\nimage:  ./figures/test.jpg\n---\n',
    );
    const issues = detectImageIssues(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('image-leading-space');
  });

  it('detects trailing whitespace in image path', () => {
    const file = md(
      'space-news/2026/04/2026-04-01-test.md',
      '---\nlayout: SpaceNewsArticle\ntitle: Test\ndescription: Desc\ndate: 2026-04-01\ncategory: china\nimage: ./figures/test.jpg \n---\n',
    );
    const issues = detectImageIssues(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('image-trailing-space');
  });

  it('returns empty for valid image', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectImageIssues(file)).toHaveLength(0);
  });
});

describe('detectPermalinkDateMismatch', () => {
  it('detects permalink date not matching slug', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      permalink: '/space-news/2026/05/2026-05-01-test/',
    });
    const issues = detectPermalinkDateMismatch(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('permalink-date-mismatch');
    expect(issues[0].severity).toBe('warning');
  });

  it('detects missing permalink', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      permalink: undefined,
    });
    const issues = detectPermalinkDateMismatch(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-permalink');
  });

  it('returns empty for matching permalink', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectPermalinkDateMismatch(file)).toHaveLength(0);
  });
});

describe('detectMissingAuthor', () => {
  it('detects missing author', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      author: undefined,
    });
    const issues = detectMissingAuthor(file);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('missing-author');
    expect(issues[0].severity).toBe('warning');
  });

  it('returns empty for valid author', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectMissingAuthor(file)).toHaveLength(0);
  });
});

// ── Cross-locale rules ───────────────────────────────────────────────────────

describe('detectCategoryCrossLocale', () => {
  it('detects category mismatch', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['commercial', 'spacex'],
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['rocket-lab', 'commercial'],
    });
    const issues = detectCategoryCrossLocale(zh, en);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('category-mismatch');
    expect(issues[0].severity).toBe('error');
  });

  it('returns empty when categories match', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['china', 'commercial'],
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['china', 'commercial'],
    });
    expect(detectCategoryCrossLocale(zh, en)).toHaveLength(0);
  });

  it('returns empty when categories match in different order', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['commercial', 'china'],
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: ['china', 'commercial'],
    });
    expect(detectCategoryCrossLocale(zh, en)).toHaveLength(0);
  });
});

describe('detectDateCrossLocale', () => {
  it('detects date mismatch', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      date: '2026-04-01',
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      date: '2026-04-02',
    });
    const issues = detectDateCrossLocale(zh, en);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('date-cross-locale-mismatch');
    expect(issues[0].severity).toBe('error');
  });

  it('returns empty when dates match', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    const en = article('en/space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectDateCrossLocale(zh, en)).toHaveLength(0);
  });
});

describe('detectImageCrossLocale', () => {
  it('detects image mismatch', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      image: './figures/2026-04-01-test/hero.jpg',
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      image: './figures/2026-04-01-test/cover.jpg',
    });
    const issues = detectImageCrossLocale(zh, en);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('image-cross-locale-mismatch');
    expect(issues[0].severity).toBe('warning');
  });

  it('returns empty when images match', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    const en = article('en/space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    expect(detectImageCrossLocale(zh, en)).toHaveLength(0);
  });
});

describe('detectUntranslatedTitle', () => {
  it('detects identical title (likely untranslated)', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: 'Same Title Here',
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: 'Same Title Here',
    });
    const issues = detectUntranslatedTitle(zh, en);
    expect(issues).toHaveLength(1);
    expect(issues[0].ruleId).toBe('untranslated-title');
    expect(issues[0].severity).toBe('warning');
  });

  it('returns empty when titles differ', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: '中文标题',
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      title: 'English Title',
    });
    expect(detectUntranslatedTitle(zh, en)).toHaveLength(0);
  });
});

// ── Draft handling ───────────────────────────────────────────────────────────

describe('draft handling', () => {
  it('collectIssues skips draft articles', () => {
    const draftFile = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      layout: undefined,
      draft: true,
    });
    const issues = collectIssues([draftFile]);
    expect(issues).toHaveLength(0);
  });

  it('collectIssues processes non-draft articles', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      layout: undefined,
    });
    const issues = collectIssues([file]);
    expect(issues.length).toBeGreaterThan(0);
  });
});

// ── collectIssues integration ────────────────────────────────────────────────

describe('collectIssues', () => {
  it('detects multiple issues in a single file', () => {
    const file = article('space-news/2026/04/2026-04-01-test.md', {
      title: 'Test',
      date: '2026-04-01',
    });
    const issues = collectIssues([file]);
    const ruleIds = issues.map((i) => i.ruleId);
    expect(ruleIds).toContain('missing-layout');
    expect(ruleIds).toContain('missing-description');
    expect(ruleIds).toContain('missing-category');
    expect(ruleIds).toContain('missing-image');
    expect(ruleIds).toContain('missing-permalink');
    expect(ruleIds).toContain('missing-author');
  });

  it('performs cross-locale checks when counterpart exists', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: 'china',
    });
    const en = article('en/space-news/2026/04/2026-04-01-test.md', {
      ...SAMPLE_FIELDS,
      category: 'spacex',
    });
    const issues = collectIssues([zh, en]);
    expect(issues.some((i) => i.ruleId === 'category-mismatch')).toBe(true);
  });

  it('skips cross-locale checks when counterpart is missing', () => {
    const zh = article('space-news/2026/04/2026-04-01-test.md', SAMPLE_FIELDS);
    const issues = collectIssues([zh]);
    const crossLocaleIssues = issues.filter((i) => i.dimension === 'cross-locale');
    expect(crossLocaleIssues).toHaveLength(0);
  });
});

// ── buildValidationResult ────────────────────────────────────────────────────

describe('buildValidationResult', () => {
  it('produces correct summary with rule counts', () => {
    const issues: FrontmatterIssue[] = [
      {
        filePath: 'a.md',
        ruleId: 'missing-layout',
        severity: 'error',
        message: '',
        dimension: 'single-file',
      },
      {
        filePath: 'b.md',
        ruleId: 'missing-layout',
        severity: 'error',
        message: '',
        dimension: 'single-file',
      },
      {
        filePath: 'a.md',
        ruleId: 'missing-author',
        severity: 'warning',
        message: '',
        dimension: 'single-file',
      },
    ];
    const result = buildValidationResult(issues);
    expect(result.total).toBe(3);
    expect(result.byRule).toContainEqual({ ruleId: 'missing-layout', count: 2, severity: 'error' });
    expect(result.byRule).toContainEqual({
      ruleId: 'missing-author',
      count: 1,
      severity: 'warning',
    });
  });

  it('returns empty result when no issues', () => {
    const result = buildValidationResult([]);
    expect(result.total).toBe(0);
    expect(result.byRule).toHaveLength(0);
  });
});

// ── computeExitCode ──────────────────────────────────────────────────────────

describe('computeExitCode', () => {
  it('returns 1 when errors exist with error threshold', () => {
    const issues: FrontmatterIssue[] = [
      {
        filePath: 'a.md',
        ruleId: 'missing-layout',
        severity: 'error',
        message: '',
        dimension: 'single-file',
      },
    ];
    expect(computeExitCode(issues, 'error')).toBe(1);
  });

  it('returns 0 when only warnings exist with error threshold', () => {
    const issues: FrontmatterIssue[] = [
      {
        filePath: 'a.md',
        ruleId: 'missing-author',
        severity: 'warning',
        message: '',
        dimension: 'single-file',
      },
    ];
    expect(computeExitCode(issues, 'error')).toBe(0);
    expect(computeExitCode(issues, 'warning')).toBe(1);
  });

  it('returns 0 when no issues', () => {
    expect(computeExitCode([], 'warning')).toBe(0);
    expect(computeExitCode([], 'error')).toBe(0);
  });
});

// ── formatTerminalOutput ─────────────────────────────────────────────────────

describe('formatTerminalOutput', () => {
  it('groups issues by dimension', () => {
    const issues: FrontmatterIssue[] = [
      {
        filePath: 'a.md',
        ruleId: 'missing-layout',
        severity: 'error',
        message: 'missing layout',
        dimension: 'single-file',
      },
      {
        filePath: 'b.md',
        ruleId: 'category-mismatch',
        severity: 'error',
        message: 'cat mismatch',
        dimension: 'cross-locale',
      },
    ];
    const result = buildValidationResult(issues);
    const output = formatTerminalOutput(result);
    expect(output.summary).toContain('2');
    expect(output.details.some((d) => d.includes('single-file'))).toBe(true);
    expect(output.details.some((d) => d.includes('cross-locale'))).toBe(true);
  });

  it('shows success message when no issues', () => {
    const result = buildValidationResult([]);
    const output = formatTerminalOutput(result);
    expect(output.summary).toContain('No');
  });
});

// ── buildJsonReport ──────────────────────────────────────────────────────────

describe('buildJsonReport', () => {
  it('includes all issues and summary', () => {
    const issues: FrontmatterIssue[] = [
      {
        filePath: 'a.md',
        ruleId: 'missing-layout',
        severity: 'error',
        message: '',
        field: 'layout',
        dimension: 'single-file',
      },
    ];
    const result = buildValidationResult(issues);
    const report = buildJsonReport(result);
    expect(report.summary.total).toBe(1);
    expect(report.issues).toHaveLength(1);
    expect(report.issues[0].filePath).toBe('a.md');
    expect(report.generatedAt).toBeTruthy();
  });
});
