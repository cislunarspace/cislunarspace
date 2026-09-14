import { describe, it, expect, vi } from 'vitest';
import { runChecker } from './checker-runner';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

type Severity = 'error' | 'warning';

interface TestFindings {
  issues: Array<{ severity: Severity; message: string }>;
}

function createRunnerDeps() {
  return {
    walkSiteMarkdown: vi.fn((): MarkdownFile[] => []),
    writeFileSync: vi.fn(),
    consoleLog: vi.fn(),
    consoleError: vi.fn(),
    processExit: vi.fn(),
    resolveWebRoot: vi.fn(() => '/web'),
  };
}

describe('checker-runner', () => {
  it('calls scan with files from walkSiteMarkdown and prints the summary', () => {
    const files: MarkdownFile[] = [{ absPath: '/web/a.md', relPath: 'a.md', content: '' }];
    const deps = createRunnerDeps();
    deps.walkSiteMarkdown.mockReturnValue(files);

    const scan = vi.fn((): TestFindings => ({ issues: [] }));

    runChecker(
      {
        name: 'test-checker',
        description: 'A test checker.',
        defaultSeverity: 'error',
        scriptDir: '/script/dir',
        scan,
        formatTerminal: (findings) => ({
          summary: `Found ${findings.issues.length} issues`,
          details: [],
        }),
        buildJsonReport: (findings) => findings,
        reportPath: 'test-report.json',
        computeExitCode: () => 0,
      },
      deps,
    );

    expect(deps.resolveWebRoot).toHaveBeenCalledWith('/script/dir');
    expect(deps.walkSiteMarkdown).toHaveBeenCalledWith('/web');
    expect(scan).toHaveBeenCalledWith(files, expect.objectContaining({ webRoot: '/web' }));
    expect(deps.consoleLog).toHaveBeenCalledWith(expect.stringContaining('Found 0 issues'));
    expect(deps.processExit).toHaveBeenCalledWith(0);
  });

  it('prints help and exits 0 when --help is passed', () => {
    const deps = createRunnerDeps();
    vi.stubGlobal('process', { ...process, argv: ['node', 'checker.ts', '--help'] });

    runChecker(
      {
        name: 'test-checker',
        description: 'A test checker.',
        defaultSeverity: 'error',
        scriptDir: '/script/dir',
        scan: vi.fn(),
        formatTerminal: () => ({ summary: '', details: [] }),
        buildJsonReport: () => ({}),
        reportPath: 'test-report.json',
        computeExitCode: () => 0,
      },
      deps,
    );

    expect(deps.consoleLog).toHaveBeenCalledWith(expect.stringContaining('test-checker'));
    expect(deps.consoleLog).toHaveBeenCalledWith(expect.stringContaining('--max-severity'));
    expect(deps.processExit).toHaveBeenCalledWith(0);
    expect(deps.walkSiteMarkdown).not.toHaveBeenCalled();

    vi.unstubAllGlobals();
  });

  it('writes a JSON report to the configured path', () => {
    const deps = createRunnerDeps();
    deps.walkSiteMarkdown.mockReturnValue([]);

    runChecker(
      {
        name: 'test-checker',
        description: 'A test checker.',
        defaultSeverity: 'error',
        scriptDir: '/script/dir',
        scan: () => ({ issues: [{ severity: 'error', message: 'problem' }] }),
        formatTerminal: (findings) => ({
          summary: `Found ${findings.issues.length} issues`,
          details: [],
        }),
        buildJsonReport: (findings) => findings,
        reportPath: 'test-report.json',
        computeExitCode: () => 1,
      },
      deps,
    );

    expect(deps.writeFileSync).toHaveBeenCalledWith(
      expect.stringMatching(/docs[/\\]audits[/\\]test-report\.json/),
      expect.stringContaining('problem'),
    );
    expect(deps.processExit).toHaveBeenCalledWith(1);
  });

  it('uses --max-severity when provided', () => {
    const deps = createRunnerDeps();
    vi.stubGlobal('process', {
      ...process,
      argv: ['node', 'checker.ts', '--max-severity', 'warning'],
    });

    const computeExitCode = vi.fn(() => 1);

    runChecker(
      {
        name: 'test-checker',
        description: 'A test checker.',
        defaultSeverity: 'error',
        supportedSeverities: ['error', 'warning'],
        scriptDir: '/script/dir',
        scan: () => ({ issues: [] }),
        formatTerminal: () => ({ summary: '', details: [] }),
        buildJsonReport: () => ({}),
        reportPath: 'test-report.json',
        computeExitCode,
      },
      deps,
    );

    expect(computeExitCode).toHaveBeenCalledWith(expect.anything(), 'warning');
    expect(deps.processExit).toHaveBeenCalledWith(1);

    vi.unstubAllGlobals();
  });

  it('exits 2 for an unsupported --max-severity value', () => {
    const deps = createRunnerDeps();
    vi.stubGlobal('process', {
      ...process,
      argv: ['node', 'checker.ts', '--max-severity', 'critical'],
    });

    runChecker(
      {
        name: 'test-checker',
        description: 'A test checker.',
        defaultSeverity: 'error',
        supportedSeverities: ['error', 'warning'],
        scriptDir: '/script/dir',
        scan: vi.fn(),
        formatTerminal: () => ({ summary: '', details: [] }),
        buildJsonReport: () => ({}),
        reportPath: 'test-report.json',
        computeExitCode: () => 0,
      },
      deps,
    );

    expect(deps.consoleError).toHaveBeenCalledWith(expect.stringContaining('critical'));
    expect(deps.processExit).toHaveBeenCalledWith(2);
    expect(deps.walkSiteMarkdown).not.toHaveBeenCalled();

    vi.unstubAllGlobals();
  });
});
