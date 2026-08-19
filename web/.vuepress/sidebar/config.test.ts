import { describe, expect, it } from 'vitest';
import { buildSidebarConfigs } from './config';

describe('buildSidebarConfigs', () => {
  it('produces byte-equivalent route mappings', () => {
    const configs = buildSidebarConfigs();

    // ── All expected zh routes ──
    expect(Object.keys(configs.zh).sort()).toEqual(
      [
        '/',
        '/glossary/',
        '/what-is-cislunarspace/',
        '/cislunar-orbits/',
        '/research-frontiers/',
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
        '/en/glossary/',
        '/en/what-is-cislunarspace/',
        '/en/cislunar-orbits/',
        '/en/research-frontiers/',
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

    // ── Section routes: wayfinding + section sidebar ──
    const zhOrbits = configs.zh['/cislunar-orbits/'] as Array<{ text: string }>;
    expect(zhOrbits[0].text).toBe('全站导览');
    expect(zhOrbits[1].text).toBe('地月空间飞行器运行轨道（任务轨道基础）');

    const enOrbits = configs.en['/en/cislunar-orbits/'] as Array<{ text: string }>;
    expect(enOrbits[0].text).toBe('Site map');
    expect(enOrbits[1].text).toBe('Cislunar spacecraft orbits (mission trajectories)');
  });
});
