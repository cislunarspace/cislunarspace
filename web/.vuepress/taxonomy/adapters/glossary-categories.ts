/**
 * Glossary categories adapter — derives the historical `glossaryCategories`
 * shape from the unified taxonomy module via the TaxonomyViewEngine.
 *
 * The engine provides sorted children of the glossary root. The projection
 * extracts slug, labels, and sibling order.
 */
import { engine as defaultEngine, GLOSSARY_ROOT_ID, createViewEngine } from '..';
import type { TaxonomyModule, TaxonomyNode } from '../types';

export interface GlossaryCategoryMeta {
  /** 路径形 slug：顶级分类为 'orbits'，子分类为 'orbits/halo' */
  slug: string;
  label: string;
  order: number;
  /** 子分类的父分类 slug；顶级分类为 null */
  parentSlug: string | null;
}

export class GlossaryCategoryRegistry {
  private bySlug: Map<string, GlossaryCategoryMeta>;
  private byLabel: Map<string, GlossaryCategoryMeta>;

  constructor(categories: GlossaryCategoryMeta[]) {
    this.bySlug = new Map(categories.map((c) => [c.slug, c]));
    this.byLabel = new Map(categories.map((c) => [c.label, c]));
  }

  getBySlug(slug: string): GlossaryCategoryMeta | undefined {
    return this.bySlug.get(slug);
  }

  getByLabel(label: string): GlossaryCategoryMeta | undefined {
    return this.byLabel.get(label);
  }
}

function slugFor(node: TaxonomyNode): string {
  const slug = node.meta?.slug;
  if (typeof slug === 'string') return slug;
  return node.id.replace(/^glossary\//, '');
}

/**
 * 列出全部 glossary-category 节点（顶级 + 一层子分类）。
 * walk 的深度优先序保证子分类紧跟其父分类之后。
 */
export function buildGlossaryCategories(taxonomyModule?: TaxonomyModule): GlossaryCategoryMeta[] {
  const viewEngine = taxonomyModule ? createViewEngine(taxonomyModule) : defaultEngine;
  return viewEngine
    .fromRoot(GLOSSARY_ROOT_ID)
    .filter((vn) => vn.node.kind === 'glossary-category')
    .walk()
    .map((vn) => ({
      slug: slugFor(vn.node),
      label: vn.node.label,
      order: vn.node.order,
      parentSlug:
        vn.node.parentId && vn.node.parentId !== GLOSSARY_ROOT_ID
          ? vn.node.parentId.replace(/^glossary\//, '')
          : null,
    }));
}

export const glossaryCategories = buildGlossaryCategories();
export const categoryRegistry = new GlossaryCategoryRegistry(glossaryCategories);
