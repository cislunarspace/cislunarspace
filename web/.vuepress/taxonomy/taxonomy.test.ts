import { describe, expect, it } from 'vitest';
import { createTaxonomyModule } from './module';
import type { TaxonomyNode } from './types';
import { TaxonomyValidationError, validateTaxonomy } from './validate';

function node(partial: Partial<TaxonomyNode> & { id: string }): TaxonomyNode {
  return {
    kind: 'page',
    label: { zh: partial.id, en: partial.id },
    path: { zh: `/${partial.id}/`, en: `/en/${partial.id}/` },
    order: 0,
    parentId: null,
    ...partial,
  };
}

describe('TaxonomyModule', () => {
  it('returns children sorted by order then by id', () => {
    const nodes: TaxonomyNode[] = [
      node({ id: 'a', parentId: 'parent', order: 20 }),
      node({ id: 'b', parentId: 'parent', order: 10 }),
      node({ id: 'c', parentId: 'parent', order: 10 }), // tie with b, resolved by id
      node({ id: 'parent', kind: 'section', path: { zh: '/parent/', en: '/en/parent/' } }),
    ];
    const taxonomy = createTaxonomyModule(nodes);

    expect(taxonomy.children('parent', 'zh').map((n) => n.id)).toEqual(['b', 'c', 'a']);
  });

  it('filters children by locale gating', () => {
    const nodes: TaxonomyNode[] = [
      node({ id: 'parent', kind: 'section', path: { zh: '/parent/', en: '/en/parent/' } }),
      node({
        id: 'zh-only',
        parentId: 'parent',
        order: 10,
        locales: ['zh'],
        path: { zh: '/parent/zh-only/', en: null },
      }),
      node({
        id: 'en-only',
        parentId: 'parent',
        order: 20,
        locales: ['en'],
        path: { zh: null, en: '/en/parent/en-only/' },
      }),
      node({ id: 'both', parentId: 'parent', order: 30 }),
    ];
    const taxonomy = createTaxonomyModule(nodes);

    expect(taxonomy.children('parent', 'zh').map((n) => n.id)).toEqual(['zh-only', 'both']);
    expect(taxonomy.children('parent', 'en').map((n) => n.id)).toEqual(['en-only', 'both']);
  });

  it('byKind returns only nodes of that kind, optionally scoped to a parent', () => {
    const nodes: TaxonomyNode[] = [
      node({ id: 'a', kind: 'section', path: { zh: '/a/', en: '/en/a/' } }),
      node({ id: 'b', kind: 'section', path: { zh: '/b/', en: '/en/b/' } }),
      node({ id: 'a/child', kind: 'page', parentId: 'a' }),
    ];
    const taxonomy = createTaxonomyModule(nodes);

    expect(taxonomy.byKind('section').map((n) => n.id)).toEqual(['a', 'b']);
    expect(taxonomy.byKind('page', 'a').map((n) => n.id)).toEqual(['a/child']);
    expect(taxonomy.byKind('page', 'b')).toEqual([]);
  });

  it('get throws for unknown id', () => {
    const taxonomy = createTaxonomyModule([node({ id: 'a' })]);

    expect(() => taxonomy.get('missing')).toThrow(/unknown node id/);
  });
});

describe('validateTaxonomy', () => {
  it('passes for a well-formed graph', () => {
    expect(() =>
      validateTaxonomy([
        node({ id: 'a', kind: 'section', path: { zh: '/a/', en: '/en/a/' } }),
        node({ id: 'a/leaf', parentId: 'a' }),
      ]),
    ).not.toThrow();
  });

  it('rejects duplicate ids', () => {
    expect(() => validateTaxonomy([node({ id: 'a' }), node({ id: 'a' })])).toThrow(
      TaxonomyValidationError,
    );
  });

  it('rejects parents that do not exist', () => {
    expect(() => validateTaxonomy([node({ id: 'a/leaf', parentId: 'a' })])).toThrow(
      /parentId "a" does not exist/,
    );
  });

  it('rejects null path in a visible locale for kinds that require a path', () => {
    expect(() =>
      validateTaxonomy([node({ id: 'broken', path: { zh: null, en: '/en/broken/' } })]),
    ).toThrow(/locale "zh" is visible but path.zh is null/);
  });

  it('rejects a path set for a locale that is gated out', () => {
    expect(() =>
      validateTaxonomy([
        node({ id: 'broken', locales: ['zh'], path: { zh: '/broken/', en: '/en/broken/' } }),
      ]),
    ).toThrow(/locale "en" is gated out but path.en is set/);
  });

  it('allows null path for navbar-root, external-link, and group kinds', () => {
    expect(() =>
      validateTaxonomy([
        node({ id: 'navbar', kind: 'navbar-root', path: { zh: null, en: null } }),
        node({
          id: 'gh',
          kind: 'external-link',
          path: { zh: null, en: null },
          parentId: 'navbar',
          order: 10,
          meta: { href: 'https://github.com/cislunarspace/cislunarspace' },
        }),
        node({
          id: 'display-group',
          kind: 'group',
          path: { zh: null, en: null },
          parentId: 'navbar',
          order: 20,
        }),
      ]),
    ).not.toThrow();
  });

  it('rejects unsafe internal paths and external hrefs', () => {
    expect(() =>
      validateTaxonomy([
        node({ id: 'unsafe-path', path: { zh: 'javascript:alert(1)', en: '/en/safe/' } }),
      ]),
    ).toThrow(/path.zh must be a safe internal path/);

    expect(() =>
      validateTaxonomy([
        node({ id: 'navbar', kind: 'navbar-root', path: { zh: null, en: null } }),
        node({
          id: 'bad-external',
          kind: 'external-link',
          path: { zh: null, en: null },
          parentId: 'navbar',
          meta: { href: 'javascript:alert(1)' },
        }),
      ]),
    ).toThrow(/external-link meta.href must be a safe http\(s\) URL/);
  });

  it('detects cycles in parentId chain', () => {
    expect(() =>
      validateTaxonomy([node({ id: 'a', parentId: 'b' }), node({ id: 'b', parentId: 'a' })]),
    ).toThrow(/cycle detected/);
  });

  it('rejects a news-category node without a 7-char hex meta.color', () => {
    expect(() =>
      validateTaxonomy([
        node({
          id: 'broken',
          kind: 'news-category',
          path: { zh: null, en: null },
          meta: { color: '#06b69' },
        }),
      ]),
    ).toThrow(/news-category meta\.color must be a 7-char hex/);

    expect(() =>
      validateTaxonomy([
        node({ id: 'broken', kind: 'news-category', path: { zh: null, en: null }, meta: {} }),
      ]),
    ).toThrow(/news-category meta\.color must be a 7-char hex/);

    expect(() =>
      validateTaxonomy([
        node({
          id: 'broken',
          kind: 'news-category',
          path: { zh: null, en: null },
          meta: { color: 'red' },
        }),
      ]),
    ).toThrow(/news-category meta\.color must be a 7-char hex/);
  });

  it('accepts a news-category node with a valid 7-char hex meta.color', () => {
    expect(() =>
      validateTaxonomy([
        node({
          id: 'ok',
          kind: 'news-category',
          path: { zh: null, en: null },
          meta: { color: '#06b6d9' },
        }),
      ]),
    ).not.toThrow();
  });

  it('rejects a news-category node whose path is not null in any locale', () => {
    // news-category nodes are pure metadata identifiers — never routable
    // pages. An author who accidentally sets a path would create a broken
    // link in SpaceNewsHome. Catch it at module load.
    expect(() =>
      validateTaxonomy([
        node({
          id: 'broken',
          kind: 'news-category',
          path: { zh: '/news/spacex/', en: null },
          meta: { color: '#06b6d9' },
        }),
      ]),
    ).toThrow(/news-category nodes must have path\.zh === null/);

    expect(() =>
      validateTaxonomy([
        node({
          id: 'broken',
          kind: 'news-category',
          path: { zh: null, en: '/en/news/spacex/' },
          meta: { color: '#06b6d9' },
        }),
      ]),
    ).toThrow(/news-category nodes must have path\.en === null/);
  });
});
