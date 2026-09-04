import { describe, expect, it } from 'vitest';
import { buildChatIndexIntake } from './chat-index-intake';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories';
import type { GlossaryScan } from '../sidebar/types.ts';

const fundamentals = glossaryCategories.find((c) => c.slug === 'fundamentals')!;

function makeScan(): GlossaryScan {
  return {
    entries: [
      {
        slug: 'cr3bp',
        title: 'CR3BP',
        path: '/glossary/fundamentals/cr3bp/',
        category: fundamentals,
      },
    ],
  };
}

describe('buildChatIndexIntake', () => {
  it('builds glossary categories from taxonomy adapter ordering', () => {
    const index = buildChatIndexIntake(makeScan());

    expect(index[0]).toEqual({
      category: '基础概念',
      entries: [{ path: '/glossary/fundamentals/cr3bp/', title: 'CR3BP' }],
    });
  });

  it('appends non-glossary section categories from section taxonomy', () => {
    const index = buildChatIndexIntake(makeScan());

    const section = index.find((c) => c.category === '地月空间轨道');

    expect(section?.entries).toContainEqual({
      path: '/cislunar-orbits/nrho/l1-nrho/',
      title: 'L1 点 NRHO',
    });
  });

  it('includes institution pages in the index', () => {
    const index = buildChatIndexIntake(makeScan());
    const json = JSON.stringify(index);

    expect(json).toContain('/research-frontiers/institutions/nudt/');
  });
});
