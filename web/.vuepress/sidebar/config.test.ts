import { describe, expect, it } from 'vitest';
import { buildSidebarConfigs } from './config';
import type { GlossaryScan } from './types';

describe('buildSidebarConfigs', () => {
  it('produces byte-equivalent route mappings', () => {
    // Empty scan keeps the test deterministic (no fs dependency) while still
    // exercising the glossary builder path (it emits the category header link
    // and collapsible groups, just with zero entries per category).
    const emptyScan: GlossaryScan = {
      zh: { entries: [], missing: [] },
      en: { entries: [] },
    };
    const configs = buildSidebarConfigs(emptyScan);

    // ── All expected zh routes ──
    expect(Object.keys(configs.zh).sort()).toEqual(
      [
        '/',
        '/what-is-cislunarspace/',
        '/cislunar-orbits/',
        '/research-frontiers/',
        '/glossary/',
        '/background/',
        '/resources-tools/',
        '/space-news/',
        '/en/space-news/',
        '/satellite-simulation/',
      ].sort(),
    );

    // ── All expected en routes ──
    expect(Object.keys(configs.en).sort()).toEqual(
      [
        '/en/',
        '/en/what-is-cislunarspace/',
        '/en/cislunar-orbits/',
        '/en/research-frontiers/',
        '/en/glossary/',
        '/en/background/',
        '/en/resources-tools/',
        '/en/space-news/',
        '/en/satellite-simulation/',
      ].sort(),
    );

    // ── Disabled sidebars ──
    expect(configs.zh['/satellite-simulation/']).toBe(false);
    expect(configs.en['/en/satellite-simulation/']).toBe(false);

    // ── Wayfinding is always the first item ──
    const zhRoot = configs.zh['/'] as Array<{ text: string }>;
    expect(zhRoot[0].text).toBe('全站导览');

    const enRoot = configs.en['/en/'] as Array<{ text: string }>;
    expect(enRoot[0].text).toBe('Site map');

    // ── Glossary routes: wayfinding + glossary sidebar ──
    const zhGlossary = configs.zh['/glossary/'] as Array<{ text: string; children: unknown }>;
    expect(zhGlossary[0].text).toBe('全站导览');
    expect(zhGlossary[1].text).toBe('地月空间术语词典（定义与概念检索）');
    expect(zhGlossary[1].children).toContain('/glossary/');

    const enGlossary = configs.en['/en/glossary/'] as Array<{ text: string; children: unknown }>;
    expect(enGlossary[0].text).toBe('Site map');
    expect(enGlossary[1].text).toBe('Cislunar glossary (terms & definitions)');
    expect(enGlossary[1].children).toContain('/en/glossary/');

    // ── Section routes: wayfinding + section sidebar ──
    const zhOrbits = configs.zh['/cislunar-orbits/'] as Array<{ text: string }>;
    expect(zhOrbits[0].text).toBe('全站导览');
    expect(zhOrbits[1].text).toBe('地月空间飞行器运行轨道（任务轨道基础）');

    const enOrbits = configs.en['/en/cislunar-orbits/'] as Array<{ text: string }>;
    expect(enOrbits[0].text).toBe('Site map');
    expect(enOrbits[1].text).toBe('Cislunar spacecraft orbits (mission trajectories)');
  });
});
