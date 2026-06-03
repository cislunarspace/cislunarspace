import fs from 'fs'
import path from 'path'
import { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import { buildTranslationGapIntake as getTranslationGapReport } from '../intakes/translation-gap-intake.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'

export function generateGlossaryArtifacts(files: MarkdownFile[], outDir: string): ReturnType<typeof buildGlossaryScan> {
  const glossaryScan = buildGlossaryScan(files)
  const gapReport = getTranslationGapReport(glossaryScan)

  if (gapReport.total > 0) {
    console.log(`\n📋 Glossary translation gaps: ${gapReport.total} entries missing English translations`)
    for (const [cat, count] of Object.entries(gapReport.byCategory)) {
      console.log(`   ${cat}: ${count} missing`)
    }
  }

  fs.writeFileSync(
    path.join(outDir, 'sidebar-glossary.auto.json'),
    JSON.stringify(glossaryScan, null, 2),
  )
  console.log('Generated sidebar-glossary.auto.json')

  return glossaryScan
}
