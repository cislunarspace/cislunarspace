import fs from 'fs';
import path from 'path';
import { generateAiChatContext } from './ai-chat-context.ts';
import { buildChatIndexIntake as buildChatIndex } from '../intakes/chat-index-intake.ts';
import type { GlossaryScan } from '../sidebar/types.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

export function generateAiChatArtifacts(
  files: MarkdownFile[],
  glossaryScan: GlossaryScan,
  outDir: string,
): void {
  generateAiChatContext(files);

  const chatIndex = buildChatIndex(glossaryScan);
  const chatIndexPath = path.join(outDir, 'public', 'ai-chat-index.json');
  if (!fs.existsSync(path.dirname(chatIndexPath))) {
    fs.mkdirSync(path.dirname(chatIndexPath), { recursive: true });
  }
  fs.writeFileSync(chatIndexPath, JSON.stringify(chatIndex));
  console.log(`Generated hierarchical ai-chat-index.json (${chatIndex.length} categories)`);
}
