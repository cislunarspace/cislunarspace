import { describe, expect, it } from 'vitest'
import { createTaxonomyModule } from './module'
import type { TaxonomyNode } from './types'
import { createViewEngine } from './view-engine'

// ── Test fixture ─────────────────────────────────────────────────────────────
//
// A small synthetic taxonomy that exercises every code path the engine
// needs to handle: locale-gated nodes, display-only groups, index nodes,
// external links, and nested trees. Tests run against this fixture, not
// the production taxonomy, so they are independent of view-spec changes.

const FIXTURE: TaxonomyNode[] = [
  // Root-level sections
  {
    id: 'section-a',
    kind: 'section',
    label: { zh: '甲', en: 'Alpha' },
    path: { zh: '/a/', en: '/en/a/' },
    order: 0,
    parentId: null,
  },
  {
    id: 'section-b',
    kind: 'section',
    label: { zh: '乙', en: 'Bravo' },
    path: { zh: '/b/', en: '/en/b/' },
    order: 1,
    parentId: null,
  },

  // section-a children
  {
    id: 'section-a/index',
    kind: 'index',
    label: { zh: '甲首页', en: 'Alpha home' },
    path: { zh: '/a/', en: '/en/a/' },
    order: 0,
    parentId: 'section-a',
  },
  {
    id: 'section-a/group-1',
    kind: 'group',
    label: { zh: '组一', en: 'Group 1' },
    path: { zh: '/a/g1/', en: '/en/a/g1/' },
    order: 1,
    parentId: 'section-a',
  },
  {
    id: 'section-a/display-group',
    kind: 'group',
    label: { zh: '显示组', en: 'Display Group' },
    path: { zh: null, en: null },
    order: 2,
    parentId: 'section-a',
  },
  {
    id: 'section-a/page-1',
    kind: 'page',
    label: { zh: '页一', en: 'Page 1' },
    path: { zh: '/a/p1', en: '/en/a/p1' },
    order: 3,
    parentId: 'section-a',
  },

  // group-1 children
  {
    id: 'section-a/group-1/page-2',
    kind: 'page',
    label: { zh: '页二', en: 'Page 2' },
    path: { zh: '/a/g1/p2', en: '/en/a/g1/p2' },
    order: 0,
    parentId: 'section-a/group-1',
  },

  // display-group children
  {
    id: 'section-a/display-group/page-3',
    kind: 'page',
    label: { zh: '页三', en: 'Page 3' },
    path: { zh: '/a/dg/p3', en: '/en/a/dg/p3' },
    order: 0,
    parentId: 'section-a/display-group',
  },

  // zh-only page (locale-gated out of en)
  {
    id: 'section-a/zh-only',
    kind: 'page',
    label: { zh: '仅中文', en: 'Zh Only' },
    path: { zh: '/a/zh-only', en: null },
    locales: ['zh'],
    order: 4,
    parentId: 'section-a',
  },

  // external link
  {
    id: 'ext-github',
    kind: 'external-link',
    label: { zh: 'GitHub', en: 'GitHub' },
    path: { zh: null, en: null },
    order: 0,
    parentId: null,
    meta: { href: 'https://github.com/example/repo' },
  },
]

function engine() {
  return createViewEngine(createTaxonomyModule(FIXTURE))
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('TaxonomyViewEngine', () => {
  describe('fromRoot + list', () => {
    it('returns locale-filtered direct children sorted by order', () => {
      const children = engine().fromRoot('section-a').withLocale('zh').list()
      expect(children.map((c) => c.node.id)).toEqual([
        'section-a/index',
        'section-a/group-1',
        'section-a/display-group',
        'section-a/page-1',
        'section-a/zh-only',
      ])
    })

    it('hides locale-gated nodes from the en list', () => {
      const children = engine().fromRoot('section-a').withLocale('en').list()
      const ids = children.map((c) => c.node.id)
      expect(ids).not.toContain('section-a/zh-only')
    })

    it('resolves locale-specific paths on ViewNode', () => {
      const [first] = engine().fromRoot('section-a').withLocale('en').list()
      expect(first!.path).toBe('/en/a/')
      expect(first!.label).toBe('Alpha home')
    })
  })

  describe('fromRoot(null)', () => {
    it('walks top-level nodes from the forest root', () => {
      const top = engine().fromRoot(null).withLocale('zh').list()
      // order 0 ties (ext-github, section-a) broken by id alphabetically
      expect(top.map((n) => n.node.id)).toEqual([
        'ext-github',
        'section-a',
        'section-b',
      ])
    })
  })

  describe('filter', () => {
    it('narrows list results', () => {
      const pages = engine()
        .fromRoot('section-a')
        .withLocale('zh')
        .filter((vn) => vn.node.kind === 'page')
        .list()
      expect(pages.map((p) => p.node.id)).toEqual([
        'section-a/page-1',
        'section-a/zh-only',
      ])
    })

    it('returns a new query without mutating the original', () => {
      const base = engine().fromRoot('section-a').withLocale('zh')
      const filtered = base.filter((vn) => vn.node.kind === 'page')
      expect(base.list()).toHaveLength(5)
      expect(filtered.list()).toHaveLength(2)
    })
  })

  describe('walk', () => {
    it('includes root followed by all descendants in depth-first order', () => {
      const walked = engine().fromRoot('section-a').withLocale('zh').walk()
      expect(walked.map((n) => n.node.id)).toEqual([
        'section-a',
        'section-a/index',
        'section-a/group-1',
        'section-a/group-1/page-2',
        'section-a/display-group',
        'section-a/display-group/page-3',
        'section-a/page-1',
        'section-a/zh-only',
      ])
    })

    it('applies filters during walk but still recurses into filtered nodes', () => {
      const walked = engine()
        .fromRoot('section-a')
        .withLocale('zh')
        .filter((vn) => vn.path !== null && vn.node.kind !== 'index')
        .walk()
      const ids = walked.map((n) => n.node.id)
      // Index nodes and pathless display-groups are excluded from results,
      // but the display-group's child (page-3) is still collected because
      // walk recurses into all locale-visible children.
      expect(ids).not.toContain('section-a/index')
      expect(ids).not.toContain('section-a/display-group')
      expect(ids).toContain('section-a/display-group/page-3')
    })

    it('respects locale gating during walk', () => {
      const walked = engine().fromRoot('section-a').withLocale('en').walk()
      expect(walked.map((n) => n.node.id)).not.toContain('section-a/zh-only')
    })
  })

  describe('select + build', () => {
    it('projects walked nodes into a flat array', () => {
      const entries = engine()
        .fromRoot('section-a')
        .withLocale('zh')
        .filter((vn) => vn.path !== null && vn.node.kind !== 'index')
        .select((vn) => ({ path: vn.path, title: vn.label }))
        .build()
      expect(entries).toContainEqual({
        path: '/a/g1/p2',
        title: '页二',
      })
      expect(entries).toContainEqual({
        path: '/a/zh-only',
        title: '仅中文',
      })
    })
  })

  describe('buildTree', () => {
    it('recursively builds a tree, passing built children to the projector', () => {
      interface Item {
        text: string
        link?: string
        children?: Item[]
      }
      const tree = engine()
        .fromRoot('section-a')
        .withLocale('zh')
        .buildTree<Item>((vn, children) => {
          if (vn.node.kind === 'index') return vn.path ? { text: vn.label } : null
          if (vn.node.kind === 'group') {
            return {
              text: vn.label,
              link: vn.path ?? undefined,
              children,
            }
          }
          return vn.path ? { text: vn.label, link: vn.path } : null
        })

      // All 5 children (index, group-1, display-group, page-1, zh-only)
      // produce non-null projector output.
      expect(tree).toHaveLength(5)
      const group1 = tree.find((t) => t.text === '组一')!
      expect(group1.children).toHaveLength(1)
      expect(group1.children![0]!.text).toBe('页二')
    })

    it('omits nodes when the projector returns null', () => {
      const tree = engine()
        .fromRoot('section-a')
        .withLocale('zh')
        .buildTree((vn) =>
          vn.node.kind === 'index' ? null : { text: vn.label },
        )
      const texts = (tree as Array<{ text: string }>).map((t) => t.text)
      expect(texts).not.toContain('甲首页')
    })
  })

  describe('hasSourceChildren', () => {
    it('returns true when the node has children in the source', () => {
      expect(
        engine().fromRoot('section-a/group-1').hasSourceChildren(),
      ).toBe(true)
    })

    it('returns false for leaf nodes', () => {
      expect(
        engine().fromRoot('section-a/page-1').hasSourceChildren(),
      ).toBe(false)
    })

    it('ignores locale gating', () => {
      // zh-only has no children at all
      expect(
        engine().fromRoot('section-a/zh-only').hasSourceChildren(),
      ).toBe(false)
    })
  })

  describe('root', () => {
    it('returns the root node as a ViewNode', () => {
      const root = engine().fromRoot('section-a').withLocale('en').root()
      expect(root?.label).toBe('Alpha')
      expect(root?.path).toBe('/en/a/')
    })

    it('returns null for forest root', () => {
      expect(engine().fromRoot(null).root()).toBeNull()
    })
  })

  describe('external-link path resolution', () => {
    it('resolves meta.href for external-link nodes', () => {
      const ext = engine().fromRoot('ext-github').withLocale('zh').root()
      expect(ext?.path).toBe('https://github.com/example/repo')
    })
  })
})
