/**
 * TranslationGapIntake — derives gap statistics from GlossaryScan.
 */
import type { GlossaryScan, TranslationGapIntake } from '../sidebar/types.ts';

export function buildTranslationGapIntake(scan: GlossaryScan): TranslationGapIntake {
  const { missing } = scan.zh;
  const byCategory: Record<string, number> = {};
  for (const gap of missing) {
    byCategory[gap.category] = (byCategory[gap.category] || 0) + 1;
  }
  return { total: missing.length, byCategory, gaps: missing };
}
