import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { walkSiteMarkdown } from '../utils/markdown-walker.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

export type Severity = 'error' | 'warning';

export interface CheckerConfig<TArgs, TFindings> {
  name: string;
  description: string;
  scanMessage?: string;
  usageExamples?: string[];
  extraOptions?: Array<{ flag: string; description: string }>;
  defaultSeverity: Severity;
  supportedSeverities?: Severity[];
  parseArgs?: (argv: string[]) => TArgs;
  scan: (files: MarkdownFile[], args: TArgs & { webRoot: string }) => TFindings;
  formatTerminal: (findings: TFindings, args: TArgs) => { summary: string; details: string[] };
  buildJsonReport: (findings: TFindings, args: TArgs) => unknown;
  reportPath: string;
  computeExitCode: (findings: TFindings, maxSeverity: Severity) => number;
  scriptDir: string;
  /** If provided, return false to skip writing the JSON report for this run. */
  shouldWriteReport?: (args: TArgs) => boolean;
}

export interface RunnerDeps {
  walkSiteMarkdown?: (webRoot: string) => MarkdownFile[];
  writeFileSync?: (path: string, content: string) => void;
  consoleLog?: (message: string) => void;
  consoleError?: (message: string) => void;
  processExit?: (code: number) => void;
  resolveWebRoot?: (scriptDir: string) => string;
}

const C = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function defaultResolveWebRoot(scriptDir: string): string {
  return path.join(scriptDir, '..', '..');
}

function printHelp<TArgs, TFindings>(
  config: CheckerConfig<TArgs, TFindings>,
  log: (msg: string) => void,
): void {
  const examples = config.usageExamples?.length
    ? `\nUsage:\n${config.usageExamples.map((e) => `  ${e}`).join('\n')}`
    : '';

  const commonOptions = `
Options:
  --max-severity <level>  Minimum severity to exit non-zero (default: ${config.defaultSeverity})
                          Values: "${config.supportedSeverities?.join('", "') ?? 'error", "warning'}"
  -h, --help              Show this help`;

  const extra = config.extraOptions?.length
    ? `\n${config.extraOptions.map((o) => `  ${o.flag.padEnd(23)} ${o.description}`).join('\n')}`
    : '';

  log(`${config.name} — ${config.description}${examples}${commonOptions}${extra}

Exit codes:
  0  No findings at or above the severity threshold
  1  One or more findings at or above the threshold
  2  Invocation error
`);
}

function parseMaxSeverity(value: string | undefined, supported: Severity[]): Severity | null {
  if (value === undefined) return null;
  if (!supported.includes(value as Severity)) {
    throw new Error(`--max-severity must be "${supported.join('" or "')}", got "${value}"`);
  }
  return value as Severity;
}

export function runChecker<TArgs, TFindings>(
  config: CheckerConfig<TArgs, TFindings>,
  deps: RunnerDeps = {},
): void {
  const {
    walkSiteMarkdown: walk = walkSiteMarkdown,
    writeFileSync: write = fs.writeFileSync,
    consoleLog: log = console.log,
    consoleError: error = console.error,
    processExit: exit = (code: number) => process.exit(code),
    resolveWebRoot = defaultResolveWebRoot,
  } = deps;

  const supported = config.supportedSeverities ?? ['error', 'warning'];
  const argv = process.argv.slice(2);

  if (argv.includes('-h') || argv.includes('--help')) {
    printHelp(config, log);
    exit(0);
    return;
  }

  let maxSeverity: Severity | null = null;
  const severityIndex = argv.indexOf('--max-severity');
  if (severityIndex !== -1) {
    try {
      maxSeverity = parseMaxSeverity(argv[severityIndex + 1], supported);
    } catch (e) {
      error(`error: ${e instanceof Error ? e.message : String(e)}`);
      exit(2);
      return;
    }
  }

  const checkerArgs = config.parseArgs ? config.parseArgs(argv) : ({} as TArgs);
  const webRoot = resolveWebRoot(config.scriptDir);

  log(`${C.cyan}Scanning ${config.scanMessage ?? config.name}...${C.reset}\n`);

  const files = walk(webRoot);
  const fullArgs = { ...checkerArgs, webRoot };
  const findings = config.scan(files, fullArgs);

  const terminal = config.formatTerminal(findings, checkerArgs);
  log(terminal.summary);
  for (const line of terminal.details) {
    log(line);
  }

  if (config.shouldWriteReport?.(checkerArgs) ?? true) {
    const reportPath = path.join(webRoot, '..', 'docs', 'audits', config.reportPath);
    const report = config.buildJsonReport(findings, checkerArgs);
    write(reportPath, JSON.stringify(report, null, 2) + '\n');
    log(`\n${C.cyan}Report written to:${C.reset} ${path.relative(webRoot, reportPath)}`);
  }

  const effectiveSeverity = maxSeverity ?? config.defaultSeverity;
  const exitCode = config.computeExitCode(findings, effectiveSeverity);
  exit(exitCode);
}
