import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { buildTranslationGapIntake as getTranslationGapReport } from '../intakes/translation-gap-intake.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

/**
 * 扫描 glossary 词条，打印翻译缺口报告，返回 scan 供 AI 索引消费。
 * 不再落盘 sidebar-glossary.auto.json：glossary 页面不在构建范围
 * （config.ts pagePatterns 排除），sidebar 树无消费者（ADR-0004）。
 */
export function generateGlossaryArtifacts(
  files: MarkdownFile[],
): ReturnType<typeof buildGlossaryScan> {
  const glossaryScan = buildGlossaryScan(files);
  const gapReport = getTranslationGapReport(glossaryScan);

  if (gapReport.total > 0) {
    console.log(
      `\n📋 Glossary translation gaps: ${gapReport.total} entries missing English translations`,
    );
    for (const [cat, count] of Object.entries(gapReport.byCategory)) {
      console.log(`   ${cat}: ${count} missing`);
    }
  }

  return glossaryScan;
}
