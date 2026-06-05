import { describe, expect, it } from 'vitest'
import type {
  Zone,
  Severity,
  Rule,
  Finding,
  AllowlistEntry,
  ScanReport,
  ScanSummary,
} from './check-en-chinese-types.ts'

describe('check-en-chinese-types', () => {
  it('exports all Zone variants', () => {
    const zones: Zone[] = [
      'frontmatter-title',
      'frontmatter-description',
      'frontmatter-author',
      'frontmatter-wechatShare',
      'frontmatter-keywords',
      'heading',
      'body',
      'link-text',
      'image-path',
      'references',
    ]
    expect(zones).toHaveLength(10)
  })

  it('exports all Severity variants', () => {
    const severities: Severity[] = ['error', 'warn', 'info']
    expect(severities).toHaveLength(3)
  })

  it('Finding type has all required fields', () => {
    const finding: Finding = {
      file: 'test.md',
      line: 1,
      column: 5,
      zone: 'body',
      text: '中文',
      severity: 'error',
      rule: 'chinese-in-body',
      allowlisted: false,
    }
    expect(finding.file).toBe('test.md')
    expect(finding.allowlisted).toBe(false)
  })

  it('ScanReport type has summary with byZone', () => {
    const report: ScanReport = {
      scanTime: new Date().toISOString(),
      filesScanned: 0,
      findings: [],
      summary: { total: 0, byZone: {}, allowlisted: 0, unexplained: 0 },
    }
    expect(report.summary.total).toBe(0)
  })

  it('AllowlistEntry type has required fields', () => {
    const entry: AllowlistEntry = {
      file: 'test.md',
      line: 10,
      text: '中文',
      reason: 'academic reference',
    }
    expect(entry.reason).toBe('academic reference')
  })
})
