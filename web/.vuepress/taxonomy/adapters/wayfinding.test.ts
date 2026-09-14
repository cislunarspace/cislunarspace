import { describe, expect, it } from 'vitest';
import { buildWayfindingIntake } from './wayfinding';
import { createTaxonomyModule } from '../module';
import type { TaxonomyNode } from '../types';

/**
 * Minimal fixture: a wayfinding root with three children.
 *
 *   wayfinding (root)
 *   ├── home (page)
 *   ├── orbits (page)
 *   └── glossary (page)
 */
const fixtureNodes: TaxonomyNode[] = [
  {
    id: 'wayfinding',
    kind: 'navbar-root',
    label: '全站导览',
    path: null,
    order: 0,
    parentId: null,
  },
  {
    id: 'wayfinding/home',
    kind: 'page',
    label: '首页',
    path: '/',
    order: 10,
    parentId: 'wayfinding',
  },
  {
    id: 'wayfinding/orbits',
    kind: 'page',
    label: '轨道',
    path: '/orbits/',
    order: 20,
    parentId: 'wayfinding',
  },
  {
    id: 'wayfinding/glossary',
    kind: 'page',
    label: '术语',
    path: '/glossary/',
    order: 30,
    parentId: 'wayfinding',
  },
];

const fixtureModule = createTaxonomyModule(fixtureNodes);

describe('wayfinding adapter', () => {
  it('produces a disclosure with all wayfinding links in declared order', () => {
    const intake = buildWayfindingIntake(fixtureModule);
    expect(intake.text).toBe('全站导览');
    expect(intake.collapsible).toBe(false);
    expect(intake.children).toBeDefined();
    const children = intake.children as Array<{ text: string; link?: string }>;
    expect(children.map((c) => c.text)).toEqual(['首页', '轨道', '术语']);
    expect(children.map((c) => c.link)).toEqual(['/', '/orbits/', '/glossary/']);
  });

  it('children count matches fixture nodes', () => {
    const intake = buildWayfindingIntake(fixtureModule);
    expect(intake.children).toHaveLength(3);
  });
});
