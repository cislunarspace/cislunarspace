/**
 * Types for the English-locale Chinese-character scanner.
 *
 * @see https://github.com/cislunarspace/cislunarspace/issues/124
 */

// ── Zone classification ─────────────────────────────────────────────────────

export type Zone =
  | 'frontmatter-title'
  | 'frontmatter-description'
  | 'frontmatter-author'
  | 'frontmatter-wechatShare'
  | 'frontmatter-keywords'
  | 'heading'
  | 'body'
  | 'link-text'
  | 'image-path'
  | 'references';

// ── Severity ────────────────────────────────────────────────────────────────

export type Severity = 'error' | 'warn' | 'info';

// ── Rule identifier ─────────────────────────────────────────────────────────

export type Rule =
  | 'chinese-in-frontmatter'
  | 'chinese-in-heading'
  | 'chinese-in-body'
  | 'chinese-in-link-text'
  | 'chinese-in-image-path'
  | 'auto-whitelist-references'
  | 'allowlisted'
  | 'stale-allowlist';

// ── Finding ─────────────────────────────────────────────────────────────────

export interface Finding {
  file: string;
  line: number;
  column: number;
  zone: Zone;
  text: string;
  severity: Severity;
  rule: Rule;
  allowlisted: boolean;
}

// ── Allowlist entry ─────────────────────────────────────────────────────────

export interface AllowlistEntry {
  file: string;
  line: number;
  text: string;
  reason: string;
}

// ── Scan report ─────────────────────────────────────────────────────────────

export interface ScanReport {
  scanTime: string;
  filesScanned: number;
  findings: Finding[];
  summary: ScanSummary;
}

export interface ScanSummary {
  total: number;
  byZone: Partial<Record<Zone, number>>;
  allowlisted: number;
  unexplained: number;
}
