/**
 * GlossaryIntake — pure transform from MarkdownFile[] to GlossaryScan.
 */
import path from 'path';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.js';
import { categoryRegistry } from '../taxonomy/adapters/glossary-categories.js';
import { taxonomy, GLOSSARY_ROOT_ID } from '../taxonomy/index.js';
import type { MarkdownFile } from '../utils/markdown-walker.js';
import type { GlossaryScan, GlossaryScanEntry } from '../sidebar/types.ts';

export function buildGlossaryScan(files: MarkdownFile[]): GlossaryScan {
  const isReadme = (f: MarkdownFile) => path.basename(f.relPath).startsWith('README');

  const glossaryFiles = files.filter((f) => f.relPath.startsWith('glossary/') && !isReadme(f));

  const glossaryRootNode = taxonomy.get(GLOSSARY_ROOT_ID);
  const base = glossaryRootNode.path!;

  const entries: GlossaryScanEntry[] = [];

  for (const file of glossaryFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    const parts = file.relPath.split('/');
    // 接受 glossary/<cat>/<slug>.md 与 glossary/<cat>/<sub>/<slug>.md 两种深度
    if (parts.length !== 3 && parts.length !== 4) continue;
    const categorySlug = parts.slice(1, -1).join('/');
    const filename = parts[parts.length - 1];
    const slug = filename.replace(/\.md$/i, '');
    const category = categoryRegistry.getBySlug(categorySlug);
    if (!category) continue;

    const { frontmatter } = parseFrontmatterAndBody(file.content);
    const title = (frontmatter.title && String(frontmatter.title)) || slug;
    entries.push({ slug, title, path: `${base}${categorySlug}/${slug}/`, category });
  }

  return { entries };
}
