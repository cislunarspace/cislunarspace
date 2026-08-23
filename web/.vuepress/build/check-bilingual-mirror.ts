/**
 * check-bilingual-mirror — read-only checker for bilingual mirror gaps.
 *
 * Scans user-visible Markdown content and reports missing English mirrors
 * with configurable exceptions.
 *
 * Usage:
 *   npx tsx .vuepress/build/check-bilingual-mirror.ts
 *   npx tsx .vuepress/build/check-bilingual-mirror.ts --max-severity error
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { walkSiteMarkdown } from '../utils/markdown-walker.ts';
import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import type {
  BilingualGap,
  ContentFamily,
  ExceptionRule,
  FamilySummary,
  GlossaryGapScanner,
  MatchedExceptionRule,
  Severity,
} from './check-bilingual-mirror-types.ts';
import { runChecker } from './checker-runner';

// ── Severity defaults per family ─────────────────────────────────────────────

const FAMILY_SEVERITY: Record<ContentFamily, Severity> = {
  glossary: 'error',
  'knowledge-base': 'error',
  root: 'warning',
};

// ── Knowledge-base detection ─────────────────────────────────────────────────

const KB_PREFIXES = [
  'cislunar-orbits/',
  'research-frontiers/',
  'background/',
  'resources-tools/',
  'what-is-cislunarspace/',
];

const isReadme = (relPath: string) => path.basename(relPath).startsWith('README');

/**
 * Detect knowledge-base pages that exist in zh but not in en.
 */
export function detectKnowledgeBaseGaps(files: MarkdownFile[]): BilingualGap[] {
  const enPaths = new Set(
    files
      .filter((f) => f.relPath.startsWith('en/') && f.relPath.endsWith('.md'))
      .map((f) => f.relPath),
  );

  const gaps: BilingualGap[] = [];

  for (const f of files) {
    if (!f.relPath.endsWith('.md')) continue;
    if (f.relPath.startsWith('en/')) continue;
    if (isReadme(f.relPath)) continue;

    const matchedPrefix = KB_PREFIXES.find((p) => f.relPath.startsWith(p));
    if (!matchedPrefix) continue;

    const expectedEn = `en/${f.relPath}`;
    if (!enPaths.has(expectedEn)) {
      const { frontmatter } = parseFrontmatterAndBody(f.content);
      const title =
        (frontmatter.title && String(frontmatter.title)) || path.basename(f.relPath, '.md');
      gaps.push({
        zhPath: f.relPath,
        expectedEnPath: expectedEn,
        family: 'knowledge-base',
        severity: FAMILY_SEVERITY['knowledge-base'],
        zhTitle: title,
      });
    }
  }

  return gaps.sort((a, b) => a.zhPath.localeCompare(b.zhPath));
}

// ── Root/special page detection ──────────────────────────────────────────────

/**
 * Detect root-level pages that exist in zh but not in en.
 */
export function detectRootPageGaps(files: MarkdownFile[]): BilingualGap[] {
  const enRootFiles = new Set(
    files
      .filter((f) => {
        if (!f.relPath.startsWith('en/')) return false;
        const afterEn = f.relPath.slice('en/'.length);
        return afterEn.endsWith('.md') && !afterEn.includes('/');
      })
      .map((f) => f.relPath),
  );

  const gaps: BilingualGap[] = [];

  for (const f of files) {
    if (!f.relPath.endsWith('.md')) continue;
    if (f.relPath.startsWith('en/')) continue;
    if (f.relPath.includes('/')) continue;
    if (isReadme(f.relPath)) continue;

    const expectedEn = `en/${f.relPath}`;
    if (!enRootFiles.has(expectedEn)) {
      const { frontmatter } = parseFrontmatterAndBody(f.content);
      const title =
        (frontmatter.title && String(frontmatter.title)) || path.basename(f.relPath, '.md');
      gaps.push({
        zhPath: f.relPath,
        expectedEnPath: expectedEn,
        family: 'root',
        severity: FAMILY_SEVERITY['root'],
        zhTitle: title,
      });
    }
  }

  return gaps.sort((a, b) => a.zhPath.localeCompare(b.zhPath));
}

// ── Exception matching ───────────────────────────────────────────────────────

/**
 * Hardcoded exception rules for known zh-only pages and non-user-visible content.
 */
export const EXCEPTION_RULES: ExceptionRule[] = [
  {
    pattern: 'research-frontiers/directions/_templates/**',
    reason: 'non-user-visible template directory',
  },
  {
    pattern: 'research-frontiers/directions/security-governance/orbital-game/**',
    reason: 'zh-only content',
  },
];

/**
 * Check if a path matches any exception rule.
 * Supports exact match and prefix match with ** glob.
 */
export function matchesException(zhPath: string, rules: ExceptionRule[]): boolean {
  return rules.some((rule) => {
    if (rule.pattern.endsWith('/**')) {
      const prefix = rule.pattern.slice(0, -3);
      return zhPath.startsWith(prefix);
    }
    return zhPath === rule.pattern;
  });
}

/**
 * Filter gaps by exception rules. Returns filtered gaps and matched exceptions with their paths.
 */
export function applyExceptions(
  gaps: BilingualGap[],
  rules: ExceptionRule[],
): { filtered: BilingualGap[]; matchedExceptions: MatchedExceptionRule[] } {
  const matchedMap = new Map<string, string[]>();

  const filtered = gaps.filter((gap) => {
    const matched = rules.find((rule) => {
      if (rule.pattern.endsWith('/**')) {
        const prefix = rule.pattern.slice(0, -3);
        return gap.zhPath.startsWith(prefix);
      }
      return gap.zhPath === rule.pattern;
    });

    if (matched) {
      const paths = matchedMap.get(matched.pattern) ?? [];
      paths.push(gap.zhPath);
      matchedMap.set(matched.pattern, paths);
      return false;
    }
    return true;
  });

  const matchedExceptions: MatchedExceptionRule[] = [...matchedMap.entries()].map(
    ([pattern, paths]) => {
      const rule = rules.find((r) => r.pattern === pattern)!;
      return { pattern, reason: rule.reason, matchedPaths: paths };
    },
  );

  return { filtered, matchedExceptions };
}

// ── Core detection (all families) ────────────────────────────────────────────

export interface DetectionResult {
  gaps: BilingualGap[];
  byFamily: FamilySummary[];
  total: number;
}

/**
 * Detect bilingual mirror gaps across all content families.
 *
 * @param files — all site markdown files from walkSiteMarkdown
 * @param glossaryGapScanner — injectable for testing; defaults to buildGlossaryScan
 */
export function detectGaps(
  files: MarkdownFile[],
  glossaryGapScanner?: GlossaryGapScanner,
): DetectionResult {
  const scanner = glossaryGapScanner ?? defaultGlossaryScanner;

  const gaps: BilingualGap[] = [
    ...scanner(files).map((g) => ({
      zhPath: `glossary/${g.category}/${g.slug}.md`,
      expectedEnPath: `en/glossary/${g.category}/${g.slug}.md`,
      family: 'glossary' as ContentFamily,
      severity: FAMILY_SEVERITY['glossary'],
      zhTitle: g.zhTitle,
    })),
    ...detectKnowledgeBaseGaps(files),
    ...detectRootPageGaps(files),
  ];

  const familyMap = new Map<ContentFamily, number>();
  for (const gap of gaps) {
    familyMap.set(gap.family, (familyMap.get(gap.family) ?? 0) + 1);
  }

  const byFamily: FamilySummary[] = [...familyMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, gapCount]) => ({
      family,
      severity: FAMILY_SEVERITY[family],
      gapCount,
    }));

  return { gaps, byFamily, total: gaps.length };
}

// ── Post-exception scan result ───────────────────────────────────────────────

export interface BilingualCheckResult {
  gaps: BilingualGap[];
  byFamily: FamilySummary[];
  matchedExceptions: MatchedExceptionRule[];
}

/**
 * Run full detection + exception filtering, returning the post-filter result.
 */
export function scanBilingualGaps(files: MarkdownFile[]): BilingualCheckResult {
  const result = detectGaps(files);
  const { filtered, matchedExceptions } = applyExceptions(result.gaps, EXCEPTION_RULES);

  const familyMap = new Map<ContentFamily, number>();
  for (const gap of filtered) {
    familyMap.set(gap.family, (familyMap.get(gap.family) ?? 0) + 1);
  }
  const filteredByFamily: FamilySummary[] = [...familyMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, gapCount]) => ({
      family,
      severity: FAMILY_SEVERITY[family],
      gapCount,
    }));

  return { gaps: filtered, byFamily: filteredByFamily, matchedExceptions };
}

// ── Terminal formatting ──────────────────────────────────────────────────────

export function formatTerminalOutput(
  gaps: BilingualGap[],
  byFamily: FamilySummary[],
  exceptions: MatchedExceptionRule[],
): { summary: string; details: string[]; exceptions: string[] } {
  const summaryParts = byFamily.map((f) => `${f.family}: ${f.gapCount} gap(s) [${f.severity}]`);
  const summary =
    gaps.length === 0
      ? 'No bilingual mirror gaps found.'
      : `${gaps.length} bilingual mirror gap(s) found:\n  ${summaryParts.join('\n  ')}`;

  const details: string[] = [];
  const gapsByFamily = new Map<ContentFamily, BilingualGap[]>();
  for (const gap of gaps) {
    const list = gapsByFamily.get(gap.family) ?? [];
    list.push(gap);
    gapsByFamily.set(gap.family, list);
  }

  for (const [family, familyGaps] of gapsByFamily) {
    details.push(`\n  ── ${family} ──`);
    for (const g of familyGaps) {
      details.push(`  ${g.zhPath} → ${g.expectedEnPath}  (${g.zhTitle})`);
    }
  }

  const exceptionLines = exceptions.map((e) => {
    const count = e.matchedPaths.length;
    return `  ⏭ ${e.pattern} — ${e.reason} (${count} matched)`;
  });

  return { summary, details, exceptions: exceptionLines };
}

// ── JSON report ──────────────────────────────────────────────────────────────

export interface JsonReport {
  generatedAt: string;
  summary: {
    total: number;
    byFamily: Record<string, number>;
    bySeverity: Record<string, number>;
  };
  gaps: Array<{
    zhPath: string;
    expectedEnPath: string;
    family: ContentFamily;
    severity: Severity;
    zhTitle: string;
  }>;
  exceptions: Array<{
    pattern: string;
    reason: string;
    matchedPaths: string[];
  }>;
}

export function buildJsonReport(
  gaps: BilingualGap[],
  exceptions: MatchedExceptionRule[],
): JsonReport {
  const byFamily: Record<string, number> = {};
  const bySeverity: Record<string, number> = {};

  for (const gap of gaps) {
    byFamily[gap.family] = (byFamily[gap.family] ?? 0) + 1;
    bySeverity[gap.severity] = (bySeverity[gap.severity] ?? 0) + 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      total: gaps.length,
      byFamily,
      bySeverity,
    },
    gaps: gaps.map((g) => ({
      zhPath: g.zhPath,
      expectedEnPath: g.expectedEnPath,
      family: g.family,
      severity: g.severity,
      zhTitle: g.zhTitle,
    })),
    exceptions: exceptions.map((e) => ({
      pattern: e.pattern,
      reason: e.reason,
      matchedPaths: e.matchedPaths,
    })),
  };
}

// ── Exit code ────────────────────────────────────────────────────────────────

const SEVERITY_RANK: Record<Severity, number> = { warning: 0, error: 1 };

export function computeExitCode(gaps: BilingualGap[], maxSeverity: Severity): number {
  const threshold = SEVERITY_RANK[maxSeverity];
  const hasBlockingGap = gaps.some((g) => SEVERITY_RANK[g.severity] >= threshold);
  return hasBlockingGap ? 1 : 0;
}

// ── Default glossary scanner ─────────────────────────────────────────────────

function defaultGlossaryScanner(files: MarkdownFile[]) {
  const scan = buildGlossaryScan(files);
  return scan.zh.missing;
}

// ── CLI entry via shared runner ──────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  runChecker({
    name: 'check-bilingual-mirror',
    description: 'Bilingual content mirror gap checker.',
    scanMessage: 'bilingual mirror gaps',
    usageExamples: [
      'npx tsx .vuepress/build/check-bilingual-mirror.ts',
      'npx tsx .vuepress/build/check-bilingual-mirror.ts --max-severity error',
    ],
    defaultSeverity: 'warning',
    supportedSeverities: ['error', 'warning'],
    scriptDir: __dirname,
    scan: (files) => scanBilingualGaps(files),
    formatTerminal: (result) => {
      const out = formatTerminalOutput(result.gaps, result.byFamily, result.matchedExceptions);
      const details = [...out.details];
      if (out.exceptions.length > 0) {
        details.push('\n  ── exceptions ──');
        details.push(...out.exceptions);
      }
      return { summary: out.summary, details };
    },
    buildJsonReport: (result) => buildJsonReport(result.gaps, result.matchedExceptions),
    reportPath: 'bilingual-gap-report.json',
    computeExitCode: (result, maxSeverity) => computeExitCode(result.gaps, maxSeverity),
  });
}
