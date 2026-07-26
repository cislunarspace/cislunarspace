import { describe, expect, it } from 'vitest';
import { buildChatIndexIntake } from './chat-index-intake';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories';
import type { GlossaryScan } from '../sidebar/types.ts';

const fundamentals = glossaryCategories.find((c) => c.slug === 'fundamentals')!;

function makeScan(): GlossaryScan {
  return {
    zh: {
      entries: [
        {
          slug: 'cr3bp',
          title: 'CR3BP',
          path: '/glossary/fundamentals/cr3bp/',
          category: fundamentals,
        },
      ],
      missing: [{ category: '基础概念', slug: 'lagrange-point', zhTitle: '拉格朗日点' }],
    },
    en: {
      entries: [
        {
          slug: 'cr3bp',
          title: 'CR3BP',
          path: '/en/glossary/fundamentals/cr3bp/',
          category: fundamentals,
        },
      ],
    },
  };
}

describe('buildChatIndexIntake', () => {
  it('builds glossary categories from taxonomy adapter ordering', () => {
    const index = buildChatIndexIntake(makeScan());

    expect(index.zh[0]).toEqual({
      category: '基础概念',
      entries: [{ path: '/glossary/fundamentals/cr3bp/', title: 'CR3BP' }],
    });
    expect(index.en[0]).toEqual({
      category: 'Fundamentals',
      entries: [
        { path: '/en/glossary/fundamentals/cr3bp/', title: 'CR3BP' },
        {
          path: '/en/glossary/fundamentals/lagrange-point/',
          title: '拉格朗日点 (needs translation)',
        },
      ],
    });
  });

  it('appends non-glossary section categories from section taxonomy', () => {
    const index = buildChatIndexIntake(makeScan());

    const zhSection = index.zh.find((c) => c.category === '地月空间飞行器运行轨道（任务轨道基础）');
    const enSection = index.en.find(
      (c) => c.category === 'Cislunar spacecraft orbits (mission trajectories)',
    );

    expect(zhSection?.entries).toContainEqual({
      path: '/cislunar-orbits/nrho/l1-nrho/',
      title: 'L1-NRHO',
    });
    expect(enSection?.entries).toContainEqual({
      path: '/en/cislunar-orbits/nrho/l1-nrho/',
      title: 'L1-NRHO',
    });
  });

  it('includes institution pages in both zh and en index', () => {
    const index = buildChatIndexIntake(makeScan());
    const zhJson = JSON.stringify(index.zh);
    const enJson = JSON.stringify(index.en);

    expect(zhJson).toContain('/research-frontiers/institutions/nudt/');
    expect(enJson).toContain('/en/research-frontiers/institutions/nudt/');
  });
});
