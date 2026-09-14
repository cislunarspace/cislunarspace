import { describe, expect, it } from 'vitest';
import { createTaxonomyModule } from './module';
import type { TaxonomyNode } from './types';
import { TaxonomyValidationError, validateTaxonomy } from './validate';

function node(partial: Partial<TaxonomyNode> & { id: string }): TaxonomyNode {
  return {
    kind: 'page',
    label: partial.id,
    path: `/${partial.id}/`,
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
      node({ id: 'parent', kind: 'section' }),
    ];
    const taxonomy = createTaxonomyModule(nodes);

    expect(taxonomy.children('parent').map((n) => n.id)).toEqual(['b', 'c', 'a']);
  });

  it('byKind returns only nodes of that kind, optionally scoped to a parent', () => {
    const nodes: TaxonomyNode[] = [
      node({ id: 'a', kind: 'section' }),
      node({ id: 'b', kind: 'section' }),
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
      validateTaxonomy([node({ id: 'a', kind: 'section' }), node({ id: 'a/leaf', parentId: 'a' })]),
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

  it('rejects null path for kinds that require a path', () => {
    expect(() => validateTaxonomy([node({ id: 'broken', path: null })])).toThrow(
      /kind "page" requires a path but path is null/,
    );
  });

  it('allows null path for navbar-root, external-link, and group kinds', () => {
    expect(() =>
      validateTaxonomy([
        node({ id: 'navbar', kind: 'navbar-root', path: null }),
        node({
          id: 'gh',
          kind: 'external-link',
          path: null,
          parentId: 'navbar',
          order: 10,
          meta: { href: 'https://github.com/cislunarspace/cislunarspace' },
        }),
        node({
          id: 'display-group',
          kind: 'group',
          path: null,
          parentId: 'navbar',
          order: 20,
        }),
      ]),
    ).not.toThrow();
  });

  it('rejects unsafe internal paths and external hrefs', () => {
    expect(() =>
      validateTaxonomy([node({ id: 'unsafe-path', path: 'javascript:alert(1)' })]),
    ).toThrow(/path must be a safe internal path/);

    expect(() =>
      validateTaxonomy([
        node({ id: 'navbar', kind: 'navbar-root', path: null }),
        node({
          id: 'bad-external',
          kind: 'external-link',
          path: null,
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
});
