import { describe, expect, test } from 'vitest';
import {
  PUBLICATION_UNKNOWN,
  buildPublicationCounts,
  filterPublications,
  groupPublications,
  readPublicationState,
  writePublicationState,
} from './publications.ts';
import type { PublicationEntry } from './publications.ts';

let seq = 0;

function entry(partial: Partial<PublicationEntry>): PublicationEntry {
  seq += 1;
  return {
    id: partial.id ?? `entry-${seq}`,
    title: '未命名文献',
    authors: [],
    year: null,
    month: null,
    venue: null,
    venueKey: null,
    type: 'article-journal',
    volume: null,
    issue: null,
    pages: null,
    doi: null,
    url: null,
    formatted: '',
    ...partial,
  };
}

const DATA = [
  entry({
    id: 'a',
    title: 'Low thrust transfer',
    authors: ['Beolchi, Alessandro', 'Pontani, Mauro'],
    year: 2024,
    month: 7,
    venue: 'Acta Astronautica',
    venueKey: 'acta astronautica',
    doi: '10.1016/j.actaastro.2024.04.030',
  }),
  entry({
    id: 'b',
    title: 'Acta lowercase paper',
    authors: ['Doe, Jane'],
    year: 2024,
    month: 1,
    venue: 'acta astronomica',
    venueKey: 'acta astronautica',
  }),
  entry({
    id: 'c',
    title: 'Other venue paper',
    authors: ['Wang, Wei'],
    year: 2022,
    month: 12,
    venue: 'Journal of Guidance',
    venueKey: 'journal of guidance',
  }),
  entry({ id: 'd', title: 'Undated note', authors: ['Anon'] }),
];

describe('filterPublications', () => {
  test('combines query, venue, year and month with AND semantics', () => {
    const filtered = filterPublications(DATA, {
      query: 'acta',
      venue: 'acta astronautica',
      year: '2024',
      month: '7',
    });
    expect(filtered.map((e) => e.id)).toEqual(['a']);

    const yearOnly = filterPublications(DATA, { query: '', venue: '', year: '2024', month: '' });
    expect(yearOnly.map((e) => e.id)).toEqual(['a', 'b']);
  });

  test('matches full author list and doi case-insensitively', () => {
    const byAuthor = filterPublications(DATA, {
      query: 'pontani',
      venue: '',
      year: '',
      month: '',
    });
    expect(byAuthor.map((e) => e.id)).toEqual(['a']);

    const byDoi = filterPublications(DATA, {
      query: '10.1016/J.ACTAASTRO',
      venue: '',
      year: '',
      month: '',
    });
    expect(byDoi.map((e) => e.id)).toEqual(['a']);
  });

  test('unknown sentinel filters entries missing that field', () => {
    const noVenue = filterPublications(DATA, {
      query: '',
      venue: PUBLICATION_UNKNOWN,
      year: '',
      month: '',
    });
    expect(noVenue.map((e) => e.id)).toEqual(['d']);

    const noYear = filterPublications(DATA, {
      query: '',
      venue: '',
      year: PUBLICATION_UNKNOWN,
      month: '',
    });
    expect(noYear.map((e) => e.id)).toEqual(['d']);
  });
});

describe('groupPublications', () => {
  test('groups venue by count desc then label, with unknown group appended', () => {
    const groups = groupPublications(DATA, 'venue');
    expect(groups.map((g) => [g.label, g.entries.length])).toEqual([
      ['Acta Astronautica', 2],
      ['Journal of Guidance', 1],
      ['未注明载体', 1],
    ]);
    expect(groups.at(-1)?.key).toBe(PUBLICATION_UNKNOWN);
  });

  test('groups year descending with unknown appended', () => {
    const groups = groupPublications(DATA, 'year');
    expect(groups.map((g) => g.label)).toEqual(['2024 年', '2022 年', '未注明年份']);
  });

  test('groups month in fixed 1 to 12 order, empty groups skipped, unknown appended', () => {
    const groups = groupPublications(DATA.slice(0, 3), 'month');
    expect(groups.map((g) => g.label)).toEqual(['1 月', '7 月', '12 月']);

    const withUnknown = groupPublications(DATA, 'month');
    expect(withUnknown.at(-1)?.label).toBe('未注明月份');
  });

  test('each entry belongs to exactly one group', () => {
    for (const group of ['venue', 'year', 'month'] as const) {
      const groups = groupPublications(DATA, group);
      expect(groups.reduce((n, g) => n + g.entries.length, 0)).toBe(DATA.length);
    }
  });
});

describe('buildPublicationCounts', () => {
  test('counts years descending and conserves total', () => {
    const counts = buildPublicationCounts(DATA, 'year');
    expect(counts.map((c) => [c.label, c.count])).toEqual([
      ['2024 年', 2],
      ['2022 年', 1],
      ['未注明年份', 1],
    ]);
    expect(counts.reduce((n, c) => n + c.count, 0)).toBe(DATA.length);
  });

  test('counts months in fixed order including zero months and conserves total', () => {
    const counts = buildPublicationCounts(DATA, 'month');
    expect(counts).toHaveLength(13);
    expect(counts[0]).toEqual({ key: '1', label: '1 月', count: 1 });
    expect(counts.find((c) => c.key === '2')).toEqual({ key: '2', label: '2 月', count: 0 });
    expect(counts.find((c) => c.key === '7')?.count).toBe(1);
    expect(counts.at(-1)).toEqual({ key: PUBLICATION_UNKNOWN, label: '未注明月份', count: 1 });
    expect(counts.reduce((n, c) => n + c.count, 0)).toBe(DATA.length);
  });
});

describe('publication board URL state', () => {
  test('reads defaults and falls back on illegal enums and pages', () => {
    expect(readPublicationState('')).toEqual({
      query: '',
      venue: '',
      year: '',
      month: '',
      view: 'board',
      group: 'year',
      page: 1,
    });

    const illegal = readPublicationState('?view=list&group=bogus&page=0&month=9');
    expect(illegal.view).toBe('board');
    expect(illegal.group).toBe('year');
    expect(illegal.page).toBe(1);
    expect(illegal.month).toBe('9');

    const valid = readPublicationState(
      '?view=table&group=month&q=acta&page=3&venue=unknown&year=2024',
    );
    expect(valid).toEqual({
      query: 'acta',
      venue: 'unknown',
      year: '2024',
      month: '',
      view: 'table',
      group: 'month',
      page: 3,
    });
  });

  test('writes only non-default params and round-trips with read', () => {
    expect(writePublicationState(readPublicationState(''))).toEqual({});

    const state = {
      query: 'acta',
      venue: 'acta astronautica',
      year: '2024',
      month: '7',
      view: 'charts' as const,
      group: 'venue' as const,
      page: 2,
    };
    const query = writePublicationState(state);
    expect(query).toEqual({
      q: 'acta',
      venue: 'acta astronautica',
      year: '2024',
      month: '7',
      view: 'charts',
      group: 'venue',
      page: '2',
    });
    const search = new URLSearchParams(query).toString();
    expect(readPublicationState(search)).toEqual(state);
  });
});
