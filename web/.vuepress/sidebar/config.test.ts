import { describe, expect, it } from 'vitest';
import { buildSidebarConfigs } from './config';
import type { GlossaryScan } from './types';

describe('buildSidebarConfigs', () => {
  it('produces the expected route mappings', () => {
    // Empty scan keeps the test deterministic (no fs dependency) while still
    // exercising the glossary builder path (it emits the category header link
    // and collapsible groups, just with zero entries per category).
    const emptyScan: GlossaryScan = { entries: [] };
    const configs = buildSidebarConfigs(emptyScan);

    // ── All expected routes ──
    expect(Object.keys(configs).sort()).toEqual(
      [
        '/',
        '/what-is-cislunarspace/',
        '/cislunar-orbits/',
        '/research-frontiers/',
        '/glossary/',
        '/resources-tools/',
      ].sort(),
    );

    // ── Wayfinding is always the first item ──
    const root = configs['/'] as Array<{ text: string }>;
    expect(root[0].text).toBe('全站导览');

    // ── Glossary route: wayfinding + glossary sidebar ──
    const glossary = configs['/glossary/'] as Array<{ text: string; children: unknown }>;
    expect(glossary[0].text).toBe('全站导览');
    expect(glossary[1].text).toBe('地月空间术语词典（定义与概念检索）');
    expect(glossary[1].children).toContain('/glossary/');

    // ── Section routes: wayfinding + section sidebar ──
    const orbits = configs['/cislunar-orbits/'] as Array<{ text: string }>;
    expect(orbits[0].text).toBe('全站导览');
    expect(orbits[1].text).toBe('地月空间轨道');
  });
});
