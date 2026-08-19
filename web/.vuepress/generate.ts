import path from 'path';
import { fileURLToPath } from 'url';
import { generateAiChatArtifacts } from './generators/ai-chat.ts';
import { generateBibliographyArtifacts } from './generators/bibliography.ts';
import { generateGlossaryArtifacts } from './generators/glossary.ts';
import { generateSpaceNewsArtifacts } from './generators/space-news.ts';
import { walkSiteMarkdown } from './utils/markdown-walker.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.join(__dirname, '..');

export function runGenerationCli(): void {
  const allFiles = walkSiteMarkdown(webRoot);
  generateSpaceNewsArtifacts(allFiles, __dirname);
  const glossaryScan = generateGlossaryArtifacts(allFiles);
  generateAiChatArtifacts(allFiles, glossaryScan, __dirname);
  generateBibliographyArtifacts(allFiles, webRoot, __dirname);
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  runGenerationCli();
}
