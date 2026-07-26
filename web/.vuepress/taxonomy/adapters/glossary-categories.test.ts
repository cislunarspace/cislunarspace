import { describe, it, expect } from 'vitest';
import { buildGlossaryCategories, GlossaryCategoryRegistry } from './glossary-categories';
import { createTaxonomyModule } from '../module';
import type { TaxonomyNode } from '../types';

/**
 * Minimal fixture: a glossary root with two glossary-category children.
 *
 *   glossary (root)
 *   ├── glossary/fundamentals (glossary-category)
 *   └── glossary/dynamics (glossary-category)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'glossary',
    kind: 'navbar-root',
    label: { zh: '术语', en: 'Glossary' },
    path: { zh: '/glossary/', en: '/en/glossary/' },
    order: 0,
    parentId: null,
  },
  {
    id: 'glossary/fundamentals',
    kind: 'glossary-category',
    label: { zh: '基础概念', en: 'Fundamentals' },
    path: { zh: '/glossary/fundamentals/', en: '/en/glossary/fundamentals/' },
    order: 10,
    parentId: 'glossary',
    meta: { slug: 'fundamentals' },
  },
  {
    id: 'glossary/dynamics',
    kind: 'glossary-category',
    label: { zh: '动力学', en: 'Dynamics' },
    path: { zh: '/glossary/dynamics/', en: '/en/glossary/dynamics/' },
    order: 20,
    parentId: 'glossary',
    meta: { slug: 'dynamics' },
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('buildGlossaryCategories', () => {
  it('returns one entry per glossary-category node', () => {
    const categories = buildGlossaryCategories(fixtureModule);
    expect(categories).toHaveLength(2);
    expect(categories.map((c) => c.slug)).toEqual(['fundamentals', 'dynamics']);
  });

  it('extracts bilingual labels and order', () => {
    const categories = buildGlossaryCategories(fixtureModule);
    const fundamentals = categories.find((c) => c.slug === 'fundamentals')!;
    expect(fundamentals.label).toEqual({ zh: '基础概念', en: 'Fundamentals' });
    expect(fundamentals.order).toBe(10);
  });

  it('falls back to id-based slug when meta.slug is absent', () => {
    const nodes: TaxonomyNode[] = [
      ...fixtureNodes,
      {
        id: 'glossary/other',
        kind: 'glossary-category',
        label: { zh: '其他', en: 'Other' },
        path: { zh: '/glossary/other/', en: '/en/glossary/other/' },
        order: 30,
        parentId: 'glossary',
      },
    ];
    const mod = createTaxonomyModule(nodes);
    const categories = buildGlossaryCategories(mod);
    const other = categories.find((c) => c.label.zh === '其他')!;
    expect(other.slug).toBe('other');
  });
});

describe('GlossaryCategoryRegistry', () => {
  it('can be instantiated with fixture data', () => {
    const categories = buildGlossaryCategories(fixtureModule);
    const registry = new GlossaryCategoryRegistry(categories);
    expect(registry.getBySlug('fundamentals')).toBeDefined();
    expect(registry.getBySlug('fundamentals')!.label.zh).toBe('基础概念');
  });

  it('returns undefined for unknown slug', () => {
    const categories = buildGlossaryCategories(fixtureModule);
    const registry = new GlossaryCategoryRegistry(categories);
    expect(registry.getBySlug('nonexistent')).toBeUndefined();
  });

  it('getByLabel works for both locales', () => {
    const categories = buildGlossaryCategories(fixtureModule);
    const registry = new GlossaryCategoryRegistry(categories);
    expect(registry.getByLabel('基础概念', 'zh')?.slug).toBe('fundamentals');
    expect(registry.getByLabel('Fundamentals', 'en')?.slug).toBe('fundamentals');
  });
});
