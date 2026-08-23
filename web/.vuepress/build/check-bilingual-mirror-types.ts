/**
 * Types for the bilingual mirror gap checker.
 */
import type { MarkdownFile } from '../utils/markdown-walker.ts';

export type ContentFamily = 'glossary' | 'knowledge-base' | 'root';

export type Severity = 'error' | 'warning';

export interface BilingualGap {
  zhPath: string;
  expectedEnPath: string;
  family: ContentFamily;
  severity: Severity;
  zhTitle: string;
}

export interface FamilySummary {
  family: ContentFamily;
  severity: Severity;
  gapCount: number;
}

export type GlossaryGapScanner = (files: MarkdownFile[]) => Array<{
  category: string;
  slug: string;
  zhTitle: string;
}>;

export interface ExceptionRule {
  pattern: string;
  reason: string;
}

export interface MatchedExceptionRule {
  pattern: string;
  reason: string;
  matchedPaths: string[];
}
