import { describe, expect, test, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { generatePublicationsArtifact } from './publications.ts';
import { formatEntryGb7714, parseBibEntries } from './bibliography.ts';
import type { PublicationEntry } from '../theme/utils/publications.ts';

const BIB_CONTENT = `@article{beolchi2024,
  author  = {Beolchi, Andrea and Losa, David and Gao, Ya},
  title   = {Multiple-Arc Optimization of Low-Thrust Earth--Moon Orbit Transfers},
  journal = {Acta Astronautica},
  year    = {2024},
  month   = jul,
  volume  = {221},
  pages   = {415--427},
  doi     = {10.1016/j.actaastro.2024.04.030},
}

@article{legacy2019,
  author  = {Doe, Jane},
  title   = {A Legacy Note},
  journal = {acta astronautica},
  year    = {2019},
}

@article{andVariant,
  author  = {Smith, Bob},
  title   = {Ampersand Venue},
  journal = {Acta \& Astronautica},
  year    = {2019},
}

@misc{noMeta,
  author = {{Lunar Research Consortium}},
  title  = {Untitled Times},
}

@article{badMonth,
  author  = {Wang, Wei},
  title   = {Invalid Month Paper},
  journal = {Journal of Tests},
  year    = {2020},
  month   = {13},
}
`;

function entryOf(entries: PublicationEntry[], id: string): PublicationEntry {
  const found = entries.find((entry) => entry.id === id);
  if (!found) throw new Error(`entry not found: ${id}`);
  return found;
}

describe('generatePublicationsArtifact', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pub-test-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('includes entries never cited by any markdown page', () => {
    const data = generatePublicationsArtifact(BIB_CONTENT, tmpDir);

    const ids = data.entries.map((entry) => entry.id);
    expect(ids).toContain('noMeta');
    expect(ids).toContain('badMonth');
    expect(ids).toEqual(
      expect.arrayContaining(['beolchi2024', 'legacy2019', 'andVariant', 'noMeta', 'badMonth']),
    );

    const outputPath = path.join(tmpDir, 'public', 'publications.json');
    expect(fs.existsSync(outputPath)).toBe(true);
    const written = JSON.parse(fs.readFileSync(outputPath, 'utf-8')) as typeof data;
    expect(written.entries).toHaveLength(data.entries.length);
  });

  test('maps fields and leaves missing year, month and venue as null', () => {
    const { entries } = generatePublicationsArtifact(BIB_CONTENT, tmpDir);

    const full = entryOf(entries, 'beolchi2024');
    expect(full.title).toBe('Multiple-Arc Optimization of Low-Thrust Earth–Moon Orbit Transfers');
    expect(full.authors).toEqual(['Beolchi, Andrea', 'Losa, David', 'Gao, Ya']);
    expect(full.year).toBe(2024);
    expect(full.month).toBe(7);
    expect(full.venue).toBe('Acta Astronautica');
    expect(full.venueKey).toBe('acta astronautica');
    expect(full.volume).toBe('221');
    expect(full.pages).toBe('415-427');
    expect(full.doi).toBe('10.1016/j.actaastro.2024.04.030');

    const bare = entryOf(entries, 'noMeta');
    expect(bare.year).toBeNull();
    expect(bare.month).toBeNull();
    expect(bare.venue).toBeNull();
    expect(bare.venueKey).toBeNull();
    expect(bare.pages).toBeNull();
    expect(bare.doi).toBeNull();
    expect(bare.authors).toEqual(['Lunar Research Consortium']);
    expect(bare.type).toBe('document');
  });

  test('merges venue variants by case and ampersand into one venueKey', () => {
    const { entries } = generatePublicationsArtifact(BIB_CONTENT, tmpDir);

    const legacy = entryOf(entries, 'legacy2019');
    const amp = entryOf(entries, 'andVariant');
    const full = entryOf(entries, 'beolchi2024');

    expect(legacy.venueKey).toBe(full.venueKey);
    expect(amp.venueKey).toBe('acta and astronautica');
    expect(legacy.venue).toBe('acta astronautica');
  });

  test('nullifies month values outside 1 to 12', () => {
    const { entries } = generatePublicationsArtifact(BIB_CONTENT, tmpDir);
    const bad = entryOf(entries, 'badMonth');
    expect(bad.year).toBe(2020);
    expect(bad.month).toBeNull();
  });

  test('throws on duplicate ids without writing output', () => {
    const duplicated = `${BIB_CONTENT}\n@misc{badMonth, title = {Second Copy},}\n`;
    expect(() => generatePublicationsArtifact(duplicated, tmpDir)).toThrow(/badMonth/);
    expect(fs.existsSync(path.join(tmpDir, 'public', 'publications.json'))).toBe(false);
  });

  test('reuses formatEntryGb7714 for the formatted field', () => {
    const { entries } = generatePublicationsArtifact(BIB_CONTENT, tmpDir);
    const raw = parseBibEntries(BIB_CONTENT).find((entry) => entry.id === 'beolchi2024');
    expect(raw).toBeDefined();
    const full = entryOf(entries, 'beolchi2024');
    expect(full.formatted).toBe(formatEntryGb7714(raw));
    expect(full.formatted).toContain('[J]');
  });

  test('sorts by year desc and month desc with nulls last', () => {
    const { entries } = generatePublicationsArtifact(BIB_CONTENT, tmpDir);
    const years = entries.map((entry) => entry.year);
    expect(years).toEqual([2024, 2020, 2019, 2019, null]);
  });
});
