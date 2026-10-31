import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateAiChatArtifacts } from './generators/ai-chat.ts';
import { generateBibliographyArtifacts } from './generators/bibliography.ts';
import { generateGlossaryArtifacts, generateGlossaryDictionary } from './generators/glossary.ts';
import { generatePublicationsArtifact } from './generators/publications.ts';
import { walkSiteMarkdown } from './utils/markdown-walker.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.join(__dirname, '..');

export function runGenerationCli(): void {
  const allFiles = walkSiteMarkdown(webRoot);
  const glossaryScan = generateGlossaryArtifacts(allFiles);
  generateGlossaryDictionary(allFiles, glossaryScan, __dirname);
  generateAiChatArtifacts(allFiles, glossaryScan, __dirname);

  const bibPath = path.join(webRoot, '.vuepress', 'ref.bib');
  if (!fs.existsSync(bibPath)) {
    throw new Error(`BibTeX file not found: ${bibPath}`);
  }
  const bibContent = fs.readFileSync(bibPath, 'utf-8');
  generateBibliographyArtifacts(allFiles, webRoot, __dirname, bibContent);
  generatePublicationsArtifact(bibContent, __dirname);
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  runGenerationCli();
}
