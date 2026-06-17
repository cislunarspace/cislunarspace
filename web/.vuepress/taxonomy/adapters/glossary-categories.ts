/**
 * Glossary categories adapter — derives the historical `glossaryCategories`
 * shape from the unified taxonomy module via the TaxonomyViewEngine.
 *
 * The engine provides locale-filtered, sorted children of the glossary root.
 * The projection extracts slug, bilingual labels, and sibling order.
 */
import { engine, GLOSSARY_ROOT_ID } from '..'
import type { Locale, TaxonomyNode } from '../types'

export interface GlossaryCategoryMeta {
  slug: string
  label: { zh: string; en: string }
  order: number
}

export class GlossaryCategoryRegistry {
  private bySlug: Map<string, GlossaryCategoryMeta>
  private byLabelZh: Map<string, GlossaryCategoryMeta>
  private byLabelEn: Map<string, GlossaryCategoryMeta>

  constructor(categories: GlossaryCategoryMeta[]) {
    this.bySlug = new Map(categories.map(c => [c.slug, c]))
    this.byLabelZh = new Map(categories.map(c => [c.label.zh, c]))
    this.byLabelEn = new Map(categories.map(c => [c.label.en, c]))
  }

  getBySlug(slug: string): GlossaryCategoryMeta | undefined {
    return this.bySlug.get(slug)
  }

  getByLabel(label: string, locale: Locale = 'zh'): GlossaryCategoryMeta | undefined {
    return locale === 'zh' ? this.byLabelZh.get(label) : this.byLabelEn.get(label)
  }
}

function slugFor(node: TaxonomyNode): string {
  const slug = node.meta?.slug
  if (typeof slug === 'string') return slug
  return node.id.replace(/^glossary\//, '')
}

export function buildGlossaryCategories(): GlossaryCategoryMeta[] {
  return engine
    .fromRoot(GLOSSARY_ROOT_ID)
    .withLocale('zh')
    .filter((vn) => vn.node.kind === 'glossary-category')
    .list()
    .map((vn) => ({
      slug: slugFor(vn.node),
      label: { zh: vn.node.label.zh, en: vn.node.label.en },
      order: vn.node.order,
    }))
}

export const glossaryCategories = buildGlossaryCategories()
export const categoryRegistry = new GlossaryCategoryRegistry(glossaryCategories)
