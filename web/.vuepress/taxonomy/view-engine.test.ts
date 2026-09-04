import { describe, expect, it } from 'vitest';
import { createTaxonomyModule } from './module';
import type { TaxonomyNode } from './types';
import { createViewEngine } from './view-engine';

// ── Test fixture ─────────────────────────────────────────────────────────────
//
// A small synthetic taxonomy that exercises every code path the engine
// needs to handle: display-only groups, index nodes, external links, and
// nested trees. Tests run against this fixture, not the production
// taxonomy, so they are independent of view-spec changes.

const FIXTURE: TaxonomyNode[] = [
  // Root-level sections
  {
    id: 'section-a',
    kind: 'section',
    label: '甲',
    path: '/a/',
    order: 0,
    parentId: null,
  },
  {
    id: 'section-b',
    kind: 'section',
    label: '乙',
    path: '/b/',
    order: 1,
    parentId: null,
  },

  // section-a children
  {
    id: 'section-a/index',
    kind: 'index',
    label: '甲首页',
    path: '/a/',
    order: 0,
    parentId: 'section-a',
  },
  {
    id: 'section-a/group-1',
    kind: 'group',
    label: '组一',
    path: '/a/g1/',
    order: 1,
    parentId: 'section-a',
  },
  {
    id: 'section-a/display-group',
    kind: 'group',
    label: '显示组',
    path: null,
    order: 2,
    parentId: 'section-a',
  },
  {
    id: 'section-a/page-1',
    kind: 'page',
    label: '页一',
    path: '/a/p1',
    order: 3,
    parentId: 'section-a',
  },

  // group-1 children
  {
    id: 'section-a/group-1/page-2',
    kind: 'page',
    label: '页二',
    path: '/a/g1/p2',
    order: 0,
    parentId: 'section-a/group-1',
  },

  // display-group children
  {
    id: 'section-a/display-group/page-3',
    kind: 'page',
    label: '页三',
    path: '/a/dg/p3',
    order: 0,
    parentId: 'section-a/display-group',
  },

  // external link
  {
    id: 'ext-github',
    kind: 'external-link',
    label: 'GitHub',
    path: null,
    order: 0,
    parentId: null,
    meta: { href: 'https://github.com/example/repo' },
  },
];

function engine() {
  return createViewEngine(createTaxonomyModule(FIXTURE));
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('TaxonomyViewEngine', () => {
  describe('fromRoot + list', () => {
    it('returns direct children sorted by order', () => {
      const children = engine().fromRoot('section-a').list();
      expect(children.map((c) => c.node.id)).toEqual([
        'section-a/index',
        'section-a/group-1',
        'section-a/display-group',
        'section-a/page-1',
      ]);
    });

    it('resolves paths and labels on ViewNode', () => {
      const [first] = engine().fromRoot('section-a').list();
      expect(first!.path).toBe('/a/');
      expect(first!.label).toBe('甲首页');
    });
  });

  describe('fromRoot(null)', () => {
    it('walks top-level nodes from the forest root', () => {
      const top = engine().fromRoot(null).list();
      // order 0 ties (ext-github, section-a) broken by id alphabetically
      expect(top.map((n) => n.node.id)).toEqual(['ext-github', 'section-a', 'section-b']);
    });
  });

  describe('filter', () => {
    it('narrows list results', () => {
      const pages = engine()
        .fromRoot('section-a')
        .filter((vn) => vn.node.kind === 'page')
        .list();
      expect(pages.map((p) => p.node.id)).toEqual(['section-a/page-1']);
    });

    it('returns a new query without mutating the original', () => {
      const base = engine().fromRoot('section-a');
      const filtered = base.filter((vn) => vn.node.kind === 'page');
      expect(base.list()).toHaveLength(4);
      expect(filtered.list()).toHaveLength(1);
    });
  });

  describe('walk', () => {
    it('includes root followed by all descendants in depth-first order', () => {
      const walked = engine().fromRoot('section-a').walk();
      expect(walked.map((n) => n.node.id)).toEqual([
        'section-a',
        'section-a/index',
        'section-a/group-1',
        'section-a/group-1/page-2',
        'section-a/display-group',
        'section-a/display-group/page-3',
        'section-a/page-1',
      ]);
    });

    it('applies filters during walk but still recurses into filtered nodes', () => {
      const walked = engine()
        .fromRoot('section-a')
        .filter((vn) => vn.path !== null && vn.node.kind !== 'index')
        .walk();
      const ids = walked.map((n) => n.node.id);
      // Index nodes and pathless display-groups are excluded from results,
      // but the display-group's child (page-3) is still collected because
      // walk recurses into all children.
      expect(ids).not.toContain('section-a/index');
      expect(ids).not.toContain('section-a/display-group');
      expect(ids).toContain('section-a/display-group/page-3');
    });
  });

  describe('buildTree', () => {
    it('recursively builds a tree, passing built children to the projector', () => {
      interface Item {
        text: string;
        link?: string;
        children?: Item[];
      }
      const tree = engine()
        .fromRoot('section-a')
        .buildTree<Item>((vn, children) => {
          if (vn.node.kind === 'index') return vn.path ? { text: vn.label } : null;
          if (vn.node.kind === 'group') {
            return {
              text: vn.label,
              link: vn.path ?? undefined,
              children,
            };
          }
          return vn.path ? { text: vn.label, link: vn.path } : null;
        });

      // All 4 children (index, group-1, display-group, page-1)
      // produce non-null projector output.
      expect(tree).toHaveLength(4);
      const group1 = tree.find((t) => t.text === '组一')!;
      expect(group1.children).toHaveLength(1);
      expect(group1.children![0]!.text).toBe('页二');
    });

    it('omits nodes when the projector returns null', () => {
      const tree = engine()
        .fromRoot('section-a')
        .buildTree((vn) => (vn.node.kind === 'index' ? null : { text: vn.label }));
      const texts = (tree as Array<{ text: string }>).map((t) => t.text);
      expect(texts).not.toContain('甲首页');
    });
  });

  describe('root', () => {
    it('returns the root node as a ViewNode', () => {
      const root = engine().fromRoot('section-a').root();
      expect(root?.label).toBe('甲');
      expect(root?.path).toBe('/a/');
    });

    it('returns null for forest root', () => {
      expect(engine().fromRoot(null).root()).toBeNull();
    });
  });

  describe('external-link path resolution', () => {
    it('resolves meta.href for external-link nodes', () => {
      const ext = engine().fromRoot('ext-github').root();
      expect(ext?.path).toBe('https://github.com/example/repo');
    });
  });
});
