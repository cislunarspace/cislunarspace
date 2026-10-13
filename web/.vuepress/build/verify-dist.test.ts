import { describe, expect, it } from 'vitest';
import { evalFiguresSync, selectAssetSamples } from './verify-dist';

// ── selectAssetSamples ──────────────────────────────────────────────────────

describe('selectAssetSamples', () => {
  const distRoot = '/dist';

  it('samples homepage plus the first two article pages in dictionary order', () => {
    const samples = selectAssetSamples(
      [
        'glossary/dro/index.html',
        'index.html',
        'ai-chat.html',
        'about/index.html',
        'zeta/index.html',
      ],
      distRoot,
    );
    expect(samples).toEqual([
      '/dist/index.html',
      '/dist/about/index.html',
      '/dist/glossary/dro/index.html',
    ]);
  });

  it('excludes the glossary landing page from article sampling', () => {
    const samples = selectAssetSamples(['glossary/index.html', 'blog/a/index.html'], distRoot);
    expect(samples).toEqual(['/dist/index.html', '/dist/blog/a/index.html']);
  });

  it('takes fewer article pages when fewer than two exist', () => {
    expect(selectAssetSamples(['blog/a/index.html'], distRoot)).toEqual([
      '/dist/index.html',
      '/dist/blog/a/index.html',
    ]);
  });

  it('falls back to the homepage only when no article pages exist', () => {
    const samples = selectAssetSamples(['index.html', 'ai-chat.html'], distRoot);
    expect(samples).toEqual(['/dist/index.html']);
  });
});

// ── evalFiguresSync ──────────────────────────────────────────────────────────

describe('evalFiguresSync', () => {
  it('classifies a figure whose content hash appears in dist as present', () => {
    const r = evalFiguresSync({
      figures: [{ rel: 'figures/dro/dro-schematic.png', hash: 'aaa' }],
      distHashes: [{ rel: 'assets/dro-schematic-1234.png', hash: 'aaa' }],
      mdTexts: [],
    });
    expect(r).toEqual({
      present: ['figures/dro/dro-schematic.png'],
      referencedMissing: [],
      orphanMissing: [],
    });
  });

  it('classifies a hash miss cited in markdown as referenced missing', () => {
    const r = evalFiguresSync({
      figures: [{ rel: 'figures/dro/dro-schematic.png', hash: 'aaa' }],
      distHashes: [{ rel: 'assets/other.png', hash: 'bbb' }],
      mdTexts: ['![schematic](../../glossary/figures/dro/dro-schematic.png)'],
    });
    expect(r).toEqual({
      present: [],
      referencedMissing: ['figures/dro/dro-schematic.png'],
      orphanMissing: [],
    });
  });

  it('matches references that URL-encode the non-ASCII path segments', () => {
    const r = evalFiguresSync({
      figures: [{ rel: 'figures/cr3bp/地月会合坐标系.png', hash: 'aaa' }],
      distHashes: [],
      mdTexts: [
        '![图](../../glossary/figures/cr3bp/%E5%9C%B0%E6%9C%88%E4%BC%9A%E5%90%88%E5%9D%90%E6%A0%87%E7%B3%BB.png)',
      ],
    });
    expect(r.referencedMissing).toEqual(['figures/cr3bp/地月会合坐标系.png']);
  });

  it('classifies an uncited hash miss as orphan missing', () => {
    const r = evalFiguresSync({
      figures: [{ rel: 'figures/dro/unused.png', hash: 'aaa' }],
      distHashes: [],
      mdTexts: ['no figures cited here'],
    });
    expect(r).toEqual({
      present: [],
      referencedMissing: [],
      orphanMissing: ['figures/dro/unused.png'],
    });
  });

  it('does not treat a bare filename mention as a reference', () => {
    const r = evalFiguresSync({
      figures: [{ rel: 'figures/dro/image.png', hash: 'aaa' }],
      distHashes: [],
      mdTexts: ['see image.png in the text'],
    });
    expect(r.orphanMissing).toEqual(['figures/dro/image.png']);
  });
});
