import fs from 'fs'
import path from 'path'
import { generateAiChatContext } from '../gen-ai-chat-context.ts'
import { buildChatIndexIntake as buildChatIndex } from '../intakes/chat-index-intake.ts'
import type { buildGlossaryScan } from '../intakes/glossary-intake.ts'
import type { MarkdownFile } from '../utils/markdown-walker.ts'

export function generateAiChatArtifacts(
  files: MarkdownFile[],
  glossaryScan: ReturnType<typeof buildGlossaryScan>,
  outDir: string,
): void {
  generateAiChatContext(files)

  const chatIndex = buildChatIndex(glossaryScan)
  const chatIndexPath = path.join(outDir, 'public', 'ai-chat-index.json')
  if (!fs.existsSync(path.dirname(chatIndexPath))) {
    fs.mkdirSync(path.dirname(chatIndexPath), { recursive: true })
  }
  fs.writeFileSync(chatIndexPath, JSON.stringify(chatIndex))
  console.log(
    `Generated hierarchical ai-chat-index.json (${chatIndex.zh.length} zh categories, ${chatIndex.en.length} en categories)`,
  )
}
