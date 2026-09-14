import { describe, expect, it } from 'vitest';
import { createContentRouter, sectionDirsFromPaths } from './router.ts';

const router = createContentRouter([
  'what-is-cislunarspace',
  'cislunar-orbits',
  'research-frontiers',
  'resources-tools',
  'background',
]);

describe('createContentRouter / resolve', () => {
  it('识别 glossary 词条', () => {
    expect(router.resolve('glossary/fundamentals/ad.md')).toEqual({
      relPath: 'glossary/fundamentals/ad.md',
      family: 'glossary',
    });
  });

  it('识别 kb-section 页面（含 README 与深层页面）', () => {
    expect(router.resolve('cislunar-orbits/README.md')).toEqual({
      relPath: 'cislunar-orbits/README.md',
      family: 'kb-section',
    });
    expect(router.resolve('cislunar-orbits/nrho/README.md')).toMatchObject({
      family: 'kb-section',
    });
  });

  it('不识别 glossary 根 README 与未知目录', () => {
    expect(router.resolve('glossary/README.md')).toBeNull();
    expect(router.resolve('unknown-section/page.md')).toBeNull();
    expect(router.resolve('README.md')).toBeNull();
    expect(router.resolve('ai-chat.md')).toBeNull();
  });

  it('拒绝绝对路径与穿越路径', () => {
    expect(router.resolve('/etc/passwd')).toBeNull();
    expect(router.resolve('../outside.md')).toBeNull();
    expect(router.resolve('cislunar-orbits/../../evil.md')).toBeNull();
    expect(router.resolve('')).toBeNull();
  });
});

describe('sectionDirsFromPaths', () => {
  it('从 taxonomy 路径派生目录名', () => {
    expect(sectionDirsFromPaths(['/what-is-cislunarspace/', '/cislunar-orbits/', '/'])).toEqual([
      'what-is-cislunarspace',
      'cislunar-orbits',
    ]);
  });
});
