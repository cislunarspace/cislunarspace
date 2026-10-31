import path from 'path';
import { formatEntryGb7714, parseBibEntries } from './bibliography.ts';
import { writeArtifact } from './write-artifact.ts';
import type { PublicationEntry, PublicationsData } from '../theme/utils/publications.ts';

/** Citation.js 解析结果的局部视图：只声明看板映射读取的字段，其余字段忽略。 */
interface CitationJsEntry {
  id?: string;
  title?: string;
  type?: string;
  author?: { literal?: string; family?: string; given?: string }[];
  issued?: { 'date-parts'?: (number | string)[][] };
  'container-title'?: string;
  volume?: string;
  issue?: string;
  page?: string;
  DOI?: string;
  URL?: string;
}

const YEAR_PATTERN = /^\d{4}$/;

/** 四位年份（1000 至 9999 的整数或四位数字串）才有效，其余归 null。 */
function toYear(value: number | string | undefined): number | null {
  if (typeof value === 'number') {
    return Number.isInteger(value) && value >= 1000 && value <= 9999 ? value : null;
  }
  if (typeof value === 'string' && YEAR_PATTERN.test(value)) {
    return Number(value);
  }
  return null;
}

/** 整数 1 至 12 才有效，其余归 null。 */
function toMonth(value: number | string | undefined): number | null {
  if (typeof value === 'number') {
    return Number.isInteger(value) && value >= 1 && value <= 12 ? value : null;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    const month = Number(value);
    return Number.isInteger(month) && month >= 1 && month <= 12 ? month : null;
  }
  return null;
}

/** venueKey：NFKC 归一、去首尾空白、连续空白压成一个空格、& 替换为 and、小写化。 */
function venueKeyOf(venue: string): string {
  return venue.normalize('NFKC').trim().replace(/\s+/g, ' ').replace(/&/g, 'and').toLowerCase();
}

function mapEntry(entry: CitationJsEntry): PublicationEntry {
  const rawVenue = typeof entry['container-title'] === 'string' ? entry['container-title'] : '';
  const venue = rawVenue.replace(/\s+/g, ' ').trim() || null;
  const dateParts = entry.issued?.['date-parts']?.[0] ?? [];

  const authors = (entry.author ?? [])
    .map((author) => {
      if (author.literal) return author.literal;
      return [author.family, author.given].filter((part) => part && part.trim() !== '').join(', ');
    })
    .filter((name) => name.trim() !== '');

  return {
    id: entry.id ?? '',
    title: entry.title || '未命名文献',
    authors,
    year: toYear(dateParts[0]),
    month: toMonth(dateParts[1]),
    venue,
    venueKey: venue ? venueKeyOf(venue) : null,
    type: entry.type || 'document',
    volume: entry.volume || null,
    issue: entry.issue || null,
    pages: entry.page ? entry.page.replace(/--/g, '-') : null,
    doi: entry.DOI || null,
    url: entry.URL || null,
    formatted: formatEntryGb7714(entry),
  };
}

/** 年月降序、空值排同组最后，再按标题 localeCompare('zh-CN') 与 id 字典序稳定排序。 */
function compareEntries(a: PublicationEntry, b: PublicationEntry): number {
  if (a.year !== b.year) {
    if (a.year === null) return 1;
    if (b.year === null) return -1;
    return b.year - a.year;
  }
  if (a.month !== b.month) {
    if (a.month === null) return 1;
    if (b.month === null) return -1;
    return b.month - a.month;
  }
  const byTitle = a.title.localeCompare(b.title, 'zh-CN');
  if (byTitle !== 0) return byTitle;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}

/**
 * 从全量 BibTeX 文本生成文献发表看板数据 publications.json。
 * 只接收已读取的文本，不做文件系统探测；重复 id 是数据错误，直接抛出。
 */
export function generatePublicationsArtifact(bibContent: string, outDir: string): PublicationsData {
  const seen = new Set<string>();
  const entries = parseBibEntries(bibContent).map((raw: CitationJsEntry) => {
    const entry = mapEntry(raw);
    if (seen.has(entry.id)) {
      throw new Error(`[publications] Duplicate BibTeX entry id: ${entry.id}`);
    }
    if (!entry.id) {
      throw new Error('[publications] BibTeX entry without id');
    }
    seen.add(entry.id);
    return entry;
  });
  entries.sort(compareEntries);

  const data: PublicationsData = { entries };
  writeArtifact(path.join(outDir, 'public', 'publications.json'), data, {
    jsonSpace: 0,
    log: console.log,
  });
  return data;
}
