import { describe, expect, it } from 'vitest';
import { scanContent, scanEnglishFiles, computeExitCode } from './check-en-chinese';
import type { AllowlistEntry, Finding } from './check-en-chinese-types.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

// ── Helpers ──────────────────────────────────────────────────────────────────

function md(relPath: string, content: string): MarkdownFile {
  return { absPath: `/web/${relPath}`, relPath, content };
}

function findingsForZone(findings: Finding[], zone: string): Finding[] {
  return findings.filter((f) => f.zone === zone);
}

// ── Frontmatter detection ────────────────────────────────────────────────────

describe('scanContent — frontmatter', () => {
  it('detects Chinese in frontmatter title', () => {
    const content = '---\ntitle: 冻结轨道\n---\nEnglish body.\n';
    const findings = scanContent(content, 'en/test.md');
    const titleFindings = findingsForZone(findings, 'frontmatter-title');
    expect(titleFindings).toHaveLength(1);
    expect(titleFindings[0].text).toContain('冻结轨道');
    expect(titleFindings[0].severity).toBe('error');
    expect(titleFindings[0].rule).toBe('chinese-in-frontmatter');
  });

  it('detects Chinese in frontmatter description', () => {
    const content = '---\ntitle: Frozen Orbit\ndescription: 这是一个关于冻结轨道的页面\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const descFindings = findingsForZone(findings, 'frontmatter-description');
    expect(descFindings).toHaveLength(1);
    expect(descFindings[0].text).toContain('冻结轨道');
  });

  it('detects Chinese in frontmatter author', () => {
    const content = '---\ntitle: Test\nauthor: 天疆说\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const authorFindings = findingsForZone(findings, 'frontmatter-author');
    expect(authorFindings).toHaveLength(1);
    expect(authorFindings[0].severity).toBe('error');
  });

  it('does not flag known English author patterns', () => {
    const content = '---\ntitle: Test\nauthor: Tianjiang Shuo\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const authorFindings = findingsForZone(findings, 'frontmatter-author');
    expect(authorFindings).toHaveLength(0);
  });

  it('does not flag CislunarSpace author', () => {
    const content = '---\ntitle: Test\nauthor: CislunarSpace\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const authorFindings = findingsForZone(findings, 'frontmatter-author');
    expect(authorFindings).toHaveLength(0);
  });

  it('detects Chinese in wechatShare.desc', () => {
    const content =
      '---\ntitle: Test\nwechatShare:\n  desc: 地月空间研究前沿、术语与工具资源一站式学习\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const wsFindings = findingsForZone(findings, 'frontmatter-wechatShare');
    expect(wsFindings).toHaveLength(1);
    expect(wsFindings[0].severity).toBe('error');
  });

  it('detects Chinese in keywords', () => {
    const content = '---\ntitle: Test\nkeywords:\n  - 冻结轨道\n  - frozen orbit\n---\n';
    const findings = scanContent(content, 'en/test.md');
    const kwFindings = findingsForZone(findings, 'frontmatter-keywords');
    expect(kwFindings).toHaveLength(1);
  });
});

// ── Heading detection ────────────────────────────────────────────────────────

describe('scanContent — headings', () => {
  it('detects Chinese in headings', () => {
    const content = '# English Title\n## 轨道特性\nSome text.\n';
    const findings = scanContent(content, 'en/test.md');
    const headingFindings = findingsForZone(findings, 'heading');
    expect(headingFindings).toHaveLength(1);
    expect(headingFindings[0].text).toContain('轨道特性');
    expect(headingFindings[0].severity).toBe('error');
    expect(headingFindings[0].rule).toBe('chinese-in-heading');
  });

  it('does not flag English-only headings', () => {
    const content = '# Title\n## Orbital Characteristics\nText.\n';
    const findings = scanContent(content, 'en/test.md');
    const headingFindings = findingsForZone(findings, 'heading');
    expect(headingFindings).toHaveLength(0);
  });
});

// ── Body detection ───────────────────────────────────────────────────────────

describe('scanContent — body', () => {
  it('detects Chinese in body paragraphs', () => {
    const content = '# Title\n\nThis is English. 这是中文的一部分.\n';
    const findings = scanContent(content, 'en/test.md');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
    expect(bodyFindings[0].severity).toBe('error');
    expect(bodyFindings[0].rule).toBe('chinese-in-body');
  });

  it('does not flag pure English body', () => {
    const content = '# Title\n\nThis is a pure English paragraph.\n';
    const findings = scanContent(content, 'en/test.md');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(0);
  });
});

// ── References zone auto-whitelist ───────────────────────────────────────────

describe('scanContent — references zone', () => {
  it('auto-whitelists Chinese in ## References section', () => {
    const content =
      '# Title\n\nEnglish body.\n\n## References\n\n- Qian Y (2014). 中文论文标题[D]. University.\n';
    const findings = scanContent(content, 'en/test.md');
    const refFindings = findingsForZone(findings, 'references');
    expect(refFindings).toHaveLength(1);
    expect(refFindings[0].severity).toBe('info');
    expect(refFindings[0].allowlisted).toBe(true);
    expect(refFindings[0].rule).toBe('auto-whitelist-references');
  });

  it('auto-whitelists Chinese in ## 参考资料 section', () => {
    const content = '# Title\n\n## 参考资料\n\n- 中文来源标题 (2020)\n';
    const findings = scanContent(content, 'en/test.md');
    const refFindings = findingsForZone(findings, 'references');
    expect(refFindings).toHaveLength(1);
    expect(refFindings[0].severity).toBe('info');
  });

  it('auto-whitelists Chinese in ## Source section', () => {
    const content = '# Title\n\n## Source\n\n- [来源] 中文来源名称\n';
    const findings = scanContent(content, 'en/test.md');
    const refFindings = findingsForZone(findings, 'references');
    expect(refFindings).toHaveLength(1);
    expect(refFindings[0].severity).toBe('info');
  });

  it('auto-whitelists Chinese in ## Bibliography section', () => {
    const content = '## Bibliography\n\n- 中文条目\n';
    const findings = scanContent(content, 'en/test.md');
    const refFindings = findingsForZone(findings, 'references');
    expect(refFindings).toHaveLength(1);
  });

  it('returns to body zone after next non-references heading', () => {
    const content = '## References\n\n- 中文\n\n## Next Section\n\n更多中文\n';
    const findings = scanContent(content, 'en/test.md');
    const refFindings = findingsForZone(findings, 'references');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(refFindings).toHaveLength(1);
    expect(refFindings[0].severity).toBe('info');
    expect(bodyFindings).toHaveLength(1);
    expect(bodyFindings[0].severity).toBe('error');
  });
});

// ── Link text detection ──────────────────────────────────────────────────────

describe('scanContent — link text', () => {
  it('detects Chinese in link text in body zone', () => {
    const content = '# Title\n\nSee [活力公式](/glossary/vis-viva/) for details.\n';
    const findings = scanContent(content, 'en/test.md');
    const linkFindings = findingsForZone(findings, 'link-text');
    expect(linkFindings).toHaveLength(1);
    expect(linkFindings[0].severity).toBe('error');
    expect(linkFindings[0].rule).toBe('chinese-in-link-text');
  });

  it('does not flag English-only link text', () => {
    const content = '# Title\n\nSee [vis-viva equation](/glossary/vis-viva/) for details.\n';
    const findings = scanContent(content, 'en/test.md');
    const linkFindings = findingsForZone(findings, 'link-text');
    expect(linkFindings).toHaveLength(0);
  });

  it('whitelists Chinese link text in references zone', () => {
    const content = '## References\n\n- [中文论文标题](https://example.com)\n';
    const findings = scanContent(content, 'en/test.md');
    const linkFindings = findingsForZone(findings, 'link-text');
    // In references zone, link text Chinese should also be auto-whitelisted
    expect(linkFindings.every((f) => f.severity === 'info')).toBe(true);
  });
});

// ── Image path detection ─────────────────────────────────────────────────────

describe('scanContent — image path', () => {
  it('detects Chinese in image alt text', () => {
    const content = '# Title\n\n![中文描述](image.png)\n';
    const findings = scanContent(content, 'en/test.md');
    const imgFindings = findingsForZone(findings, 'image-path');
    expect(imgFindings).toHaveLength(1);
    expect(imgFindings[0].severity).toBe('error');
    expect(imgFindings[0].rule).toBe('chinese-in-image-path');
  });

  it('detects Chinese in image path', () => {
    const content = '# Title\n\n![alt](中文图片.png)\n';
    const findings = scanContent(content, 'en/test.md');
    const imgFindings = findingsForZone(findings, 'image-path');
    expect(imgFindings).toHaveLength(1);
  });

  it('does not flag English-only image references', () => {
    const content = '# Title\n\n![Orbit diagram](orbit.png)\n';
    const findings = scanContent(content, 'en/test.md');
    const imgFindings = findingsForZone(findings, 'image-path');
    expect(imgFindings).toHaveLength(0);
  });
});

// ── Allowlist ────────────────────────────────────────────────────────────────

describe('scanContent — allowlist', () => {
  it('whitelists allowlisted file+line', () => {
    const content = '# Title\n\n中文内容\n';
    const allowlist: AllowlistEntry[] = [
      { file: 'en/test.md', line: 3, text: '中文内容', reason: 'intentional bilingual' },
    ];
    const findings = scanContent(content, 'en/test.md', allowlist);
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
    expect(bodyFindings[0].allowlisted).toBe(true);
    expect(bodyFindings[0].severity).toBe('info');
    expect(bodyFindings[0].rule).toBe('allowlisted');
  });

  it('warns about stale allowlist entries', () => {
    const content = '# Title\n\nPure English.\n';
    const allowlist: AllowlistEntry[] = [
      { file: 'en/test.md', line: 3, text: '中文内容', reason: 'intentional' },
    ];
    const findings = scanContent(content, 'en/test.md', allowlist);
    const staleFindings = findings.filter((f) => f.rule === 'stale-allowlist');
    expect(staleFindings).toHaveLength(1);
    expect(staleFindings[0].severity).toBe('warn');
  });

  it('does not flag non-matching allowlist entries', () => {
    const content = '# Title\n\n中文内容\n';
    const allowlist: AllowlistEntry[] = [
      { file: 'en/other.md', line: 5, text: '其他', reason: 'test' },
    ];
    const findings = scanContent(content, 'en/test.md', allowlist);
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
    expect(bodyFindings[0].allowlisted).toBe(false);
  });
});

// ── Zone classification ──────────────────────────────────────────────────────

describe('scanContent — zone classification', () => {
  it('classifies all zone types correctly', () => {
    const content = [
      '---',
      'title: 冻结',
      'description: 描述',
      'author: 天疆说',
      'keywords:',
      '  - 关键词',
      'wechatShare:',
      '  desc: 分享描述',
      '---',
      '# 标题',
      '',
      '正文 中文',
      '',
      '## References',
      '',
      '- 引用中文',
    ].join('\n');

    const findings = scanContent(content, 'en/test.md');
    const zones = new Set(findings.map((f) => f.zone));
    expect(zones.has('frontmatter-title')).toBe(true);
    expect(zones.has('frontmatter-description')).toBe(true);
    expect(zones.has('frontmatter-author')).toBe(true);
    expect(zones.has('frontmatter-keywords')).toBe(true);
    expect(zones.has('frontmatter-wechatShare')).toBe(true);
    expect(zones.has('heading')).toBe(true);
    expect(zones.has('body')).toBe(true);
    expect(zones.has('references')).toBe(true);
  });
});

// ── Pure English file ────────────────────────────────────────────────────────

describe('scanContent — pure English', () => {
  it('returns zero findings for pure English content', () => {
    const content = [
      '---',
      'title: Frozen Orbit',
      'author: Tianjiang Shuo',
      '---',
      '# Frozen Orbit',
      '',
      'A frozen orbit is an orbit where the orbital elements remain constant.',
      '',
      '## References',
      '',
      '- Vallado D (2001). Fundamentals of Astrodynamics.',
    ].join('\n');

    const findings = scanContent(content, 'en/test.md');
    expect(findings).toHaveLength(0);
  });

  it('returns zero findings for content with no frontmatter', () => {
    const content = '# English Title\n\nPure English body text.\n';
    const findings = scanContent(content, 'en/test.md');
    expect(findings).toHaveLength(0);
  });
});

// ── CJK punctuation detection ────────────────────────────────────────────────

describe('scanContent — CJK punctuation', () => {
  it('detects CJK parentheses', () => {
    const content = '# Title\n\nSome text（with CJK parens）.\n';
    const findings = scanContent(content, 'en/test.md');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
  });

  it('detects fullwidth punctuation', () => {
    const content = '# Title\n\nHello！World．\n';
    const findings = scanContent(content, 'en/test.md');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
  });
});

// ── Column tracking ──────────────────────────────────────────────────────────

describe('scanContent — column tracking', () => {
  it('reports correct column for Chinese in body', () => {
    const content = '# Title\n\nHello 中文 world.\n';
    const findings = scanContent(content, 'en/test.md');
    const bodyFindings = findingsForZone(findings, 'body');
    expect(bodyFindings).toHaveLength(1);
    expect(bodyFindings[0].column).toBe(7); // "Hello " is 6 chars, 中文 starts at col 7
  });
});

// ── scanEnglishFiles ─────────────────────────────────────────────────────────

describe('scanEnglishFiles', () => {
  it('scans only en/ files', () => {
    const files = [
      md('en/test.md', '# Title\n\n中文\n'),
      md('glossary/test.md', '# Title\n\n中文\n'),
    ];
    const report = scanEnglishFiles(files);
    expect(report.filesScanned).toBe(1);
    expect(report.findings).toHaveLength(1);
    expect(report.findings[0].file).toBe('en/test.md');
  });

  it('produces correct summary', () => {
    const files = [md('en/test.md', '# Title\n\n中文\n\n## References\n\n- 引用\n')];
    const report = scanEnglishFiles(files);
    expect(report.summary.total).toBe(2);
    expect(report.summary.allowlisted).toBe(1); // references auto-whitelisted
    expect(report.summary.unexplained).toBe(1); // body
    expect(report.summary.byZone['body']).toBe(1);
    expect(report.summary.byZone['references']).toBe(1);
  });

  it('includes scanTime in ISO format', () => {
    const report = scanEnglishFiles([]);
    expect(report.scanTime).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });
});

// ── CLI — computeExitCode ────────────────────────────────────────────────────

describe('computeExitCode', () => {
  it('returns 0 when no findings', () => {
    expect(computeExitCode([], 'error')).toBe(0);
    expect(computeExitCode([], 'warn')).toBe(0);
  });

  it('returns 1 when error findings and threshold is error', () => {
    const findings: Finding[] = [
      {
        file: 'test.md',
        line: 1,
        column: 1,
        zone: 'body',
        text: '中文',
        severity: 'error',
        rule: 'chinese-in-body',
        allowlisted: false,
      },
    ];
    expect(computeExitCode(findings, 'error')).toBe(1);
  });

  it('returns 0 when only info findings and threshold is error', () => {
    const findings: Finding[] = [
      {
        file: 'test.md',
        line: 1,
        column: 1,
        zone: 'references',
        text: '中文',
        severity: 'info',
        rule: 'auto-whitelist-references',
        allowlisted: true,
      },
    ];
    expect(computeExitCode(findings, 'error')).toBe(0);
  });

  it('returns 1 when warn findings and threshold is warn', () => {
    const findings: Finding[] = [
      {
        file: 'test.md',
        line: 1,
        column: 1,
        zone: 'body',
        text: '中文',
        severity: 'warn',
        rule: 'stale-allowlist',
        allowlisted: false,
      },
    ];
    expect(computeExitCode(findings, 'warn')).toBe(1);
  });

  it('returns 0 when only warn findings and threshold is error', () => {
    const findings: Finding[] = [
      {
        file: 'test.md',
        line: 1,
        column: 1,
        zone: 'body',
        text: '中文',
        severity: 'warn',
        rule: 'stale-allowlist',
        allowlisted: false,
      },
    ];
    expect(computeExitCode(findings, 'error')).toBe(0);
  });
});

// ── CLI — JSON output structure ──────────────────────────────────────────────

describe('JSON output', () => {
  it('scanEnglishFiles produces valid JSON-serializable report', () => {
    const files = [md('en/test.md', '# Title\n\n中文\n\n## References\n\n- 引用\n')];
    const report = scanEnglishFiles(files);
    const json = JSON.parse(JSON.stringify(report));
    expect(json.scanTime).toBeDefined();
    expect(json.filesScanned).toBe(1);
    expect(json.findings).toBeInstanceOf(Array);
    expect(json.summary.total).toBeDefined();
    expect(json.summary.byZone).toBeDefined();
    expect(json.summary.allowlisted).toBeDefined();
    expect(json.summary.unexplained).toBeDefined();
  });
});
