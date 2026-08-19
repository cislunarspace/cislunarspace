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
  it('识别中文侧 space-news 文章', () => {
    expect(router.resolve('space-news/2026/04/2026-04-01-artemis-2-launch.md')).toEqual({
      relPath: 'space-news/2026/04/2026-04-01-artemis-2-launch.md',
      family: 'space-news',
      locale: 'zh',
      counterpartPath: 'en/space-news/2026/04/2026-04-01-artemis-2-launch.md',
    });
  });

  it('识别英文侧 glossary 词条并推回中文侧', () => {
    expect(router.resolve('en/glossary/fundamentals/ad.md')).toMatchObject({
      family: 'glossary',
      locale: 'en',
      counterpartPath: 'glossary/fundamentals/ad.md',
    });
  });

  it('识别 kb-section 页面（含 README 与深层页面）', () => {
    expect(router.resolve('cislunar-orbits/README.md')).toMatchObject({
      family: 'kb-section',
      locale: 'zh',
    });
    expect(router.resolve('en/cislunar-orbits/nrho/README.md')).toMatchObject({
      family: 'kb-section',
      locale: 'en',
    });
  });

  it('不识别月份 README、glossary 根 README 与未知目录', () => {
    expect(router.resolve('space-news/2026/04/README.md')).toBeNull();
    expect(router.resolve('glossary/README.md')).toBeNull();
    expect(router.resolve('unknown-section/page.md')).toBeNull();
    expect(router.resolve('README.md')).toBeNull();
    expect(router.resolve('ai-chat.md')).toBeNull();
  });

  it('拒绝绝对路径与穿越路径', () => {
    expect(router.resolve('/etc/passwd')).toBeNull();
    expect(router.resolve('../outside.md')).toBeNull();
    expect(router.resolve('space-news/../../evil.md')).toBeNull();
    expect(router.resolve('')).toBeNull();
  });
});

describe('createContentRouter / counterpart', () => {
  it('双向推导', () => {
    expect(router.counterpart('space-news/2026/04/2026-04-01-x.md')).toBe(
      'en/space-news/2026/04/2026-04-01-x.md',
    );
    expect(router.counterpart('en/space-news/2026/04/2026-04-01-x.md')).toBe(
      'space-news/2026/04/2026-04-01-x.md',
    );
  });

  it('未识别路径返回 null', () => {
    expect(router.counterpart('nope.md')).toBeNull();
  });
});

describe('sectionDirsFromPaths', () => {
  it('从 taxonomy 路径派生目录名', () => {
    expect(
      sectionDirsFromPaths(['/what-is-cislunarspace/', '/cislunar-orbits/', '/en/ignored/', '/']),
    ).toEqual(['what-is-cislunarspace', 'cislunar-orbits']);
  });
});
