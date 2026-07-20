/**
 * GlossaryIntake — pure transform from MarkdownFile[] to GlossaryScan.
 */
import path from 'path'
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.js'
import { categoryRegistry } from '../taxonomy/adapters/glossary-categories.js'
import { taxonomy, GLOSSARY_ROOT_ID } from '../taxonomy/index.js'
import type { MarkdownFile } from '../utils/markdown-walker.js'
import type { GlossaryScan, TranslationGap } from '../sidebar/types.ts'

export function buildGlossaryScan(files: MarkdownFile[]): GlossaryScan {
  const isReadme = (f: MarkdownFile) => path.basename(f.relPath).startsWith('README')

  const zhFiles = files.filter(f => f.relPath.startsWith('glossary/') && !isReadme(f))
  const enFiles = files.filter(f => f.relPath.startsWith('en/glossary/') && !isReadme(f))

  const enRelPaths = new Set(enFiles.map(f => f.relPath))

  const glossaryRootNode = taxonomy.get(GLOSSARY_ROOT_ID)
  const zhBase = glossaryRootNode.path.zh!
  const enBase = glossaryRootNode.path.en!

  const zhEntries: GlossaryScan['zh']['entries'] = []
  const missing: TranslationGap[] = []

  for (const file of zhFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    const parts = file.relPath.split('/')
    if (parts.length !== 3) continue
    const [, categorySlug, filename] = parts
    const slug = filename.replace(/\.md$/i, '')
    const category = categoryRegistry.getBySlug(categorySlug)
    if (!category) continue

    const { frontmatter } = parseFrontmatterAndBody(file.content)
    const title = (frontmatter.title && String(frontmatter.title)) || slug
    zhEntries.push({ slug, title, path: `${zhBase}${categorySlug}/${slug}/`, category })

    if (!enRelPaths.has(`en/glossary/${categorySlug}/${filename}`)) {
      missing.push({ category: category.label.zh, slug, zhTitle: title })
    }
  }

  const enEntries: GlossaryScan['en']['entries'] = []

  for (const file of enFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    const parts = file.relPath.split('/')
    if (parts.length !== 4) continue
    const [, , categorySlug, filename] = parts
    const slug = filename.replace(/\.md$/i, '')
    const category = categoryRegistry.getBySlug(categorySlug)
    if (!category) continue

    const { frontmatter } = parseFrontmatterAndBody(file.content)
    const title = (frontmatter.title && String(frontmatter.title)) || slug
    enEntries.push({ slug, title, path: `${enBase}${categorySlug}/${slug}/`, category })
  }

  return { zh: { entries: zhEntries, missing }, en: { entries: enEntries } }
}
