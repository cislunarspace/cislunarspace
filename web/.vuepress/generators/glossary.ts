import fs from 'fs'
import path from 'path'
import { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import { buildTranslationGapIntake as getTranslationGapReport } from '../intakes/translation-gap-intake.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'
import { writeArtifact } from './write-artifact.ts'

export function generateGlossaryArtifacts(files: MarkdownFile[], outDir: string): ReturnType<typeof buildGlossaryScan> {
  const glossaryScan = buildGlossaryScan(files)
  const gapReport = getTranslationGapReport(glossaryScan)

  if (gapReport.total > 0) {
    console.log(`\n📋 Glossary translation gaps: ${gapReport.total} entries missing English translations`)
    for (const [cat, count] of Object.entries(gapReport.byCategory)) {
      console.log(`   ${cat}: ${count} missing`)
    }
  }

  writeArtifact(path.join(outDir, 'sidebar-glossary.auto.json'), glossaryScan, { log: console.log, trailingNewline: false })

  return glossaryScan
}
