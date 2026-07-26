/**
 * Types for the Space News frontmatter / bilingual consistency checker.
 */

/** Severity level for a detected issue. */
export type Severity = 'error' | 'warning';

/** The check dimension an issue belongs to. */
export type CheckDimension = 'single-file' | 'cross-locale';

/** A single frontmatter validation issue. */
export interface FrontmatterIssue {
  /** Relative path to the file with the issue. */
  filePath: string;
  /** Machine-readable rule identifier (e.g. 'missing-layout'). */
  ruleId: string;
  /** Severity level. */
  severity: Severity;
  /** Human-readable description. */
  message: string;
  /** The frontmatter field involved, if applicable. */
  field?: string;
  /** Check dimension. */
  dimension: CheckDimension;
}

/** Summary counts grouped by rule id. */
export interface RuleSummary {
  ruleId: string;
  count: number;
  severity: Severity;
}

/** Result of a full validation run. */
export interface ValidationResult {
  issues: FrontmatterIssue[];
  byRule: RuleSummary[];
  total: number;
}
