/**
 * GlossaryIntake — pure transform from MarkdownFile[] to GlossaryScan.
 */
import path from 'path'
import { glossaryCategories } from '../glossary-meta.js'
import type { MarkdownFile } from '../utils/markdown-walker.js'
import type { GlossaryScan, TranslationGap } from '../sidebar-intake.js'

export function buildGlossaryScan(files: MarkdownFile[]): GlossaryScan {
  const isReadme = (f: MarkdownFile) => path.basename(f.relPath).startsWith('README')

  const zhFiles = files.filter(f => f.relPath.startsWith('glossary/') && !isReadme(f))
  const enFiles = files.filter(f => f.relPath.startsWith('en/glossary/') && !isReadme(f))

  const enRelPaths = new Set(enFiles.map(f => f.relPath))

  const zhEntries: GlossaryScan['zh']['entries'] = []
  const missing: TranslationGap[] = []

  for (const file of zhFiles.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    const parts = file.relPath.split('/')
    if (parts.length !== 3) continue
    const [, categorySlug, filename] = parts
    const slug = filename.replace(/\.md$/i, '')
    const category = glossaryCategories.find(c => c.slug === categorySlug)
    if (!category) continue

    const title = (file.frontmatter.title && String(file.frontmatter.title)) || slug
    zhEntries.push({ slug, title, path: `/glossary/${categorySlug}/${slug}/`, category })

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
    const category = glossaryCategories.find(c => c.slug === categorySlug)
    if (!category) continue

    const title = (file.frontmatter.title && String(file.frontmatter.title)) || slug
    enEntries.push({ slug, title, path: `/en/glossary/${categorySlug}/${slug}/`, category })
  }

  return { zh: { entries: zhEntries, missing }, en: { entries: enEntries } }
}
