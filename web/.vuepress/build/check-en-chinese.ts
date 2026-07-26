/**
 * check-en-chinese — English-locale Chinese-character scanner.
 *
 * Scans English Markdown pages (web/en/) for residual Chinese characters
 * and classifies each finding by zone (frontmatter, heading, body, etc.)
 * with configurable allowlist support.
 *
 * Usage:
 *   npx tsx .vuepress/build/check-en-chinese.ts
 *   npx tsx .vuepress/build/check-en-chinese.ts --max-severity error
 *   npx tsx .vuepress/build/check-en-chinese.ts --json
 *   npx tsx .vuepress/build/check-en-chinese.ts --json --output
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { walkSiteMarkdown } from '../utils/markdown-walker.ts';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import type {
  AllowlistEntry,
  Finding,
  Rule,
  ScanReport,
  Severity,
  Zone,
} from './check-en-chinese-types.ts';
import { runChecker } from './checker-runner';
import type { Severity as RunnerSeverity } from './checker-runner';

// ── CJK detection regex ─────────────────────────────────────────────────────

const CJK_RE = /[一-鿿㐀-䶿豈-﫿　-〿！-～]/g;

// ── References heading pattern ───────────────────────────────────────────────

const REFERENCES_HEADING_RE =
  /^#{1,3}\s+(References?|Sources?|Bibliography|参考文献|参考资料|来源)\s*$/i;

// ── Frontmatter field to zone mapping ────────────────────────────────────────

const FM_FIELD_ZONE: Record<string, Zone> = {
  title: 'frontmatter-title',
  description: 'frontmatter-description',
  author: 'frontmatter-author',
  keywords: 'frontmatter-keywords',
  'wechatShare.desc': 'frontmatter-wechatShare',
};

// ── Known English author patterns ────────────────────────────────────────────

const KNOWN_EN_AUTHORS = /^(\s*)(Tianjiang Shuo|CislunarSpace)(\s*)$/;

// ── Core scanning ────────────────────────────────────────────────────────────

export function scanContent(
  content: string,
  relPath: string,
  allowlist: AllowlistEntry[] = [],
): Finding[] {
  const findings: Finding[] = [];
  const lines = content.split('\n');

  const allowlistByFile = new Map<string, Map<number, AllowlistEntry>>();
  for (const entry of allowlist) {
    if (!allowlistByFile.has(entry.file)) {
      allowlistByFile.set(entry.file, new Map());
    }
    allowlistByFile.get(entry.file)!.set(entry.line, entry);
  }
  const fileAllowlist = allowlistByFile.get(relPath) ?? new Map<number, AllowlistEntry>();

  const matchedAllowlistLines = new Set<number>();

  let inFrontmatter = false;
  let frontmatterDelimiterCount = 0;
  let currentZone: Zone = 'body';
  let fmLines: string[] = [];
  let fmStartLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    if (line.trim() === '---') {
      frontmatterDelimiterCount++;
      if (frontmatterDelimiterCount === 1) {
        inFrontmatter = true;
        fmStartLine = lineNum;
        fmLines = [];
        continue;
      } else if (frontmatterDelimiterCount === 2) {
        inFrontmatter = false;
        processFrontmatterLines(
          fmLines,
          fmStartLine,
          relPath,
          findings,
          fileAllowlist,
          matchedAllowlistLines,
        );
        continue;
      }
    }

    if (inFrontmatter) {
      fmLines.push(line);
      continue;
    }

    if (line.trim() === '') continue;

    if (REFERENCES_HEADING_RE.test(line)) {
      currentZone = 'references';
      continue;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const headingText = headingMatch[2];
      scanLine(
        headingText,
        lineNum,
        headingText,
        relPath,
        'heading',
        findings,
        fileAllowlist,
        matchedAllowlistLines,
      );
      currentZone = 'body';
      continue;
    }

    const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]*)\)/);
    if (imgMatch) {
      const altText = imgMatch[1];
      const imgPath = imgMatch[2];
      const combined = altText + imgPath;
      const imgStart = line.indexOf(imgMatch[0]);
      scanLine(
        combined,
        lineNum,
        line,
        relPath,
        'image-path',
        findings,
        fileAllowlist,
        matchedAllowlistLines,
        imgStart,
      );
    }

    const linkRe = /\[([^\]]+)\]\(([^)]*)\)/g;
    let linkMatch: RegExpExecArray | null;
    while ((linkMatch = linkRe.exec(line)) !== null) {
      const linkText = linkMatch[1];
      const linkStart = linkMatch.index + 1;
      if (currentZone === 'references') {
        scanLine(
          linkText,
          lineNum,
          line,
          relPath,
          'references',
          findings,
          fileAllowlist,
          matchedAllowlistLines,
          linkStart,
        );
      } else {
        scanLine(
          linkText,
          lineNum,
          line,
          relPath,
          'link-text',
          findings,
          fileAllowlist,
          matchedAllowlistLines,
          linkStart,
        );
      }
    }

    if (currentZone !== 'heading') {
      const stripped = line
        .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
        .replace(/\[([^\]]+)\]\(([^)]*)\)/g, '');
      scanLine(
        stripped,
        lineNum,
        line,
        relPath,
        currentZone,
        findings,
        fileAllowlist,
        matchedAllowlistLines,
      );
    }
  }

  for (const [lineNum, entry] of fileAllowlist) {
    if (!matchedAllowlistLines.has(lineNum)) {
      findings.push({
        file: relPath,
        line: lineNum,
        column: 0,
        zone: 'body',
        text: entry.text,
        severity: 'warn',
        rule: 'stale-allowlist',
        allowlisted: false,
      });
    }
  }

  const seen = new Set<string>();
  const deduped: Finding[] = [];
  for (const f of findings.sort((a, b) => a.line - b.line || a.column - b.column)) {
    const key = `${f.line}:${f.zone}`;
    if (f.rule === 'stale-allowlist' || !seen.has(key)) {
      seen.add(key);
      deduped.push(f);
    }
  }

  return deduped;
}

// ── Frontmatter processing ───────────────────────────────────────────────────

function processFrontmatterLines(
  fmLines: string[],
  startLine: number,
  relPath: string,
  findings: Finding[],
  fileAllowlist: Map<number, AllowlistEntry>,
  matchedAllowlistLines: Set<number>,
): void {
  for (let i = 0; i < fmLines.length; i++) {
    const line = fmLines[i];
    const lineNum = startLine + 1 + i;

    const topMatch = line.match(/^([\w][\w.-]*):\s*(.*)$/);
    if (!topMatch) continue;

    const key = topMatch[1];
    const value = topMatch[2].trim();

    if (key === 'wechatShare') {
      for (let j = i + 1; j < fmLines.length; j++) {
        const nestedMatch = fmLines[j].match(/^\s+([\w][\w.-]*):\s*(.*)$/);
        if (!nestedMatch) break;
        const nestedKey = nestedMatch[1];
        const nestedValue = nestedMatch[2].trim();
        if (nestedKey === 'desc' && nestedValue) {
          const nestedLineNum = startLine + 1 + j;
          scanLine(
            nestedValue,
            nestedLineNum,
            fmLines[j],
            relPath,
            'frontmatter-wechatShare',
            findings,
            fileAllowlist,
            matchedAllowlistLines,
          );
        }
      }
      continue;
    }

    const zone = FM_FIELD_ZONE[key];
    if (!zone) continue;

    if (zone === 'frontmatter-keywords') {
      if (value.startsWith('[')) {
        scanLine(
          value,
          lineNum,
          line,
          relPath,
          zone,
          findings,
          fileAllowlist,
          matchedAllowlistLines,
        );
      }
      for (let j = i + 1; j < fmLines.length; j++) {
        const itemMatch = fmLines[j].match(/^\s+-\s+(.+)$/);
        if (!itemMatch) break;
        const itemValue = itemMatch[1].trim();
        const itemLineNum = startLine + 1 + j;
        scanLine(
          itemValue,
          itemLineNum,
          fmLines[j],
          relPath,
          zone,
          findings,
          fileAllowlist,
          matchedAllowlistLines,
        );
      }
      continue;
    }

    if (value) {
      if (zone === 'frontmatter-author' && KNOWN_EN_AUTHORS.test(value)) {
        continue;
      }
      scanLine(value, lineNum, line, relPath, zone, findings, fileAllowlist, matchedAllowlistLines);
    }
  }
}

// ── Line scanner ─────────────────────────────────────────────────────────────

function scanLine(
  text: string,
  lineNum: number,
  fullLine: string,
  relPath: string,
  zone: Zone,
  findings: Finding[],
  fileAllowlist: Map<number, AllowlistEntry>,
  matchedAllowlistLines: Set<number>,
  columnOffset = 0,
): void {
  CJK_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = CJK_RE.exec(text)) !== null) {
    const cjkRun = text.slice(match.index).match(/^[一-鿿㐀-䶿-䶿豈-﫿　-〿！-～]+/);
    const cjkText = cjkRun ? cjkRun[0] : match[0];
    const column = match.index + 1 + columnOffset;

    const allowlistEntry = fileAllowlist.get(lineNum);
    const isAllowlisted = allowlistEntry !== undefined && fullLine.includes(allowlistEntry.text);

    if (isAllowlisted) {
      matchedAllowlistLines.add(lineNum);
      findings.push({
        file: relPath,
        line: lineNum,
        column: columnOffset > 0 ? columnOffset + 1 : 1,
        zone,
        text: allowlistEntry!.text,
        severity: 'info',
        rule: 'allowlisted',
        allowlisted: true,
      });
      return;
    }

    if (zone === 'references') {
      findings.push({
        file: relPath,
        line: lineNum,
        column,
        zone,
        text: cjkText,
        severity: 'info',
        rule: 'auto-whitelist-references',
        allowlisted: true,
      });
      continue;
    }

    const rule = zoneToRule(zone);
    findings.push({
      file: relPath,
      line: lineNum,
      column,
      zone,
      text: cjkText,
      severity: 'error',
      rule,
      allowlisted: false,
    });

    CJK_RE.lastIndex = match.index + cjkText.length;
  }
}

function zoneToRule(zone: Zone): Rule {
  if (zone.startsWith('frontmatter-')) return 'chinese-in-frontmatter';
  if (zone === 'heading') return 'chinese-in-heading';
  if (zone === 'link-text') return 'chinese-in-link-text';
  if (zone === 'image-path') return 'chinese-in-image-path';
  return 'chinese-in-body';
}

// ── Multi-file scanner ───────────────────────────────────────────────────────

export function scanEnglishFiles(
  files: MarkdownFile[],
  allowlist: AllowlistEntry[] = [],
): ScanReport {
  const enFiles = files.filter((f) => f.relPath.startsWith('en/') && f.relPath.endsWith('.md'));

  const allFindings: Finding[] = [];
  for (const file of enFiles) {
    const findings = scanContent(file.content, file.relPath, allowlist);
    allFindings.push(...findings);
  }

  const byZone: Partial<Record<Zone, number>> = {};
  let allowlisted = 0;

  for (const f of allFindings) {
    byZone[f.zone] = (byZone[f.zone] ?? 0) + 1;
    if (f.allowlisted) allowlisted++;
  }

  return {
    scanTime: new Date().toISOString(),
    filesScanned: enFiles.length,
    findings: allFindings,
    summary: {
      total: allFindings.length,
      byZone,
      allowlisted,
      unexplained: allFindings.length - allowlisted,
    },
  };
}

// ── Report helpers ───────────────────────────────────────────────────────────

export function computeExitCode(findings: Finding[], maxSeverity: 'error' | 'warn'): number {
  const rank: Record<string, number> = { info: 0, warn: 1, error: 2 };
  const threshold = rank[maxSeverity];
  return findings.some((f) => rank[f.severity] >= threshold) ? 1 : 0;
}

function severityColor(severity: string): string {
  if (severity === 'error') return '\x1b[31m';
  if (severity === 'warn') return '\x1b[33m';
  return '\x1b[2m';
}

const RESET = '\x1b[0m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';
const CYAN = '\x1b[36m';

export function formatTerminalOutput(report: ScanReport): { summary: string; details: string[] } {
  const { findings, summary } = report;

  if (findings.length === 0) {
    return {
      summary: `${CYAN}No Chinese characters found.${RESET}`,
      details: [],
    };
  }

  const summaryLine = `${BOLD}Scanned ${report.filesScanned} files${RESET}\n\n${CYAN}${summary.total} finding(s) found:${RESET} ${summary.unexplained} unexplained, ${summary.allowlisted} allowlisted`;
  const details: string[] = [];

  const byFile = new Map<string, Finding[]>();
  for (const f of findings) {
    const list = byFile.get(f.file) ?? [];
    list.push(f);
    byFile.set(f.file, list);
  }

  for (const [file, fileFindings] of byFile) {
    details.push(`\n  ${BOLD}── ${file} ──${RESET}`);
    for (const f of fileFindings) {
      const color = severityColor(f.severity);
      const label = f.allowlisted
        ? '⏭'
        : f.severity === 'error'
          ? '✗'
          : f.severity === 'warn'
            ? '⚠'
            : '○';
      details.push(
        `  ${color}${label} L${f.line}:${f.column} [${f.zone}] ${f.text} ${DIM}(${f.rule})${RESET}`,
      );
    }
  }

  return { summary: summaryLine, details };
}

export function formatJsonOutput(report: ScanReport): { summary: string; details: string[] } {
  return { summary: JSON.stringify(report, null, 2), details: [] };
}

export function buildJsonReport(report: ScanReport): ScanReport {
  return report;
}

// ── CLI ──────────────────────────────────────────────────────────────────────

interface CliArgs {
  json: boolean;
  output: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = { json: false, output: false };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--json') {
      args.json = true;
    } else if (a === '--output') {
      args.output = true;
    } else if (a === '--max-severity') {
      i++;
    } else if (a === '-h' || a === '--help') {
      // help is handled by runner
    } else {
      throw new Error(`unknown argument: ${a}`);
    }
  }

  return args;
}

function loadAllowlist(webRoot: string): AllowlistEntry[] {
  const allowlistPath = path.join(webRoot, '.vuepress', 'build', 'en-chinese-allowlist.json');
  if (fs.existsSync(allowlistPath)) {
    return JSON.parse(fs.readFileSync(allowlistPath, 'utf-8'));
  }
  return [];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  runChecker<CliArgs, ScanReport>({
    name: 'check-en-chinese',
    description: 'English-locale Chinese-character scanner.',
    scanMessage: 'English pages for Chinese characters',
    usageExamples: [
      'npx tsx .vuepress/build/check-en-chinese.ts',
      'npx tsx .vuepress/build/check-en-chinese.ts --max-severity error',
      'npx tsx .vuepress/build/check-en-chinese.ts --json',
      'npx tsx .vuepress/build/check-en-chinese.ts --json --output',
    ],
    extraOptions: [
      { flag: '--json', description: 'Output JSON to stdout' },
      { flag: '--output', description: 'Write JSON report to docs/audits/en-chinese-report.json' },
    ],
    defaultSeverity: 'error' as RunnerSeverity,
    supportedSeverities: ['error', 'warning'],
    scriptDir: __dirname,
    parseArgs,
    scan: (files, args) => scanEnglishFiles(files, loadAllowlist(args.webRoot)),
    formatTerminal: (report, args) =>
      args.json ? formatJsonOutput(report) : formatTerminalOutput(report),
    buildJsonReport: (report) => report,
    reportPath: 'en-chinese-report.json',
    computeExitCode: (report, maxSeverity) =>
      computeExitCode(report.findings, maxSeverity === 'warning' ? 'warn' : 'error'),
    shouldWriteReport: (args) => args.output,
  });
}
