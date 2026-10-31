// 文献发表看板的共享类型与纯函数：生成器与前端组件共用同一份数据形状，
// 查询、分组、统计与 URL 状态逻辑全部为纯函数，不在模块顶层访问浏览器 API。

export interface PublicationEntry {
  id: string;
  title: string;
  authors: string[];
  year: number | null;
  month: number | null;
  venue: string | null;
  venueKey: string | null;
  type: string;
  volume: string | null;
  issue: string | null;
  pages: string | null;
  doi: string | null;
  url: string | null;
  formatted: string;
}

export interface PublicationsData {
  entries: PublicationEntry[];
}

export type PublicationView = 'board' | 'table' | 'charts';
export type PublicationGroup = 'venue' | 'year' | 'month';
export type PublicationCountDimension = 'year' | 'month';

export interface PublicationFilters {
  query: string;
  venue: string;
  year: string;
  month: string;
}

export interface PublicationBoardState extends PublicationFilters {
  view: PublicationView;
  group: PublicationGroup;
  page: number;
}

/** 筛选值中缺失字段的哨兵值（载体 venueKey、年、月共用）。 */
export const PUBLICATION_UNKNOWN = 'unknown';

export const DEFAULT_PUBLICATION_BOARD_STATE: PublicationBoardState = {
  query: '',
  venue: '',
  year: '',
  month: '',
  view: 'board',
  group: 'year',
  page: 1,
};

export interface PublicationGroupResult {
  /** 分组键：venueKey、四位年份字符串、1 至 12 的月份字符串，或 PUBLICATION_UNKNOWN。 */
  key: string;
  /** 展示名：载体展示名、`2024 年`、`7 月`、`未注明载体` 等。 */
  label: string;
  entries: PublicationEntry[];
}

export interface PublicationCount {
  key: string;
  label: string;
  count: number;
}

export interface PublicationOption {
  key: string;
  label: string;
}

export interface PublicationVenueGrouping extends PublicationGroupResult {
  count: number;
}

/** 关键词匹配字段：标题、完整作者、载体、DOI、id，不区分大小写的包含匹配。 */
function matchesQuery(entry: PublicationEntry, query: string): boolean {
  if (!query) return true;
  const haystacks = [
    entry.title,
    entry.authors.join(' '),
    entry.venue ?? '',
    entry.doi ?? '',
    entry.id,
  ];
  return haystacks.some((text) => text.toLowerCase().includes(query));
}

function matchesSelect(value: string, entryValue: string): boolean {
  if (value === '') return true;
  if (value === PUBLICATION_UNKNOWN) return entryValue === '';
  return entryValue === value;
}

export function filterPublications(
  entries: PublicationEntry[],
  filters: PublicationFilters,
): PublicationEntry[] {
  const query = filters.query.trim().toLowerCase();
  const venue = filters.venue;
  const year = filters.year;
  const month = filters.month;
  return entries.filter((entry) => {
    if (!matchesQuery(entry, query)) return false;
    if (!matchesSelect(venue, entry.venueKey ?? '')) return false;
    if (!matchesSelect(year, entry.year === null ? '' : String(entry.year))) return false;
    if (!matchesSelect(month, entry.month === null ? '' : String(entry.month))) return false;
    return true;
  });
}

/**
 * 载体展示名：同组中出现次数最多的原始写法，平票取按 localeCompare('en') 的最小值。
 */
function venueDisplayLabel(entries: PublicationEntry[]): string {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    const name = entry.venue ?? '';
    if (!name) continue;
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  let best = '';
  let bestCount = 0;
  for (const [name, count] of counts) {
    if (count > bestCount || (count === bestCount && name.localeCompare(best, 'en') < 0)) {
      best = name;
      bestCount = count;
    }
  }
  return best || '未注明载体';
}

function bucketBy(entries: PublicationEntry[], keyOf: (entry: PublicationEntry) => string) {
  const buckets = new Map<string, PublicationEntry[]>();
  for (const entry of entries) {
    const key = keyOf(entry);
    const list = buckets.get(key);
    if (list) {
      list.push(entry);
    } else {
      buckets.set(key, [entry]);
    }
  }
  return buckets;
}

const UNKNOWN_GROUP_LABELS: Record<PublicationGroup, string> = {
  venue: '未注明载体',
  year: '未注明年份',
  month: '未注明月份',
};

export function groupPublications(
  entries: PublicationEntry[],
  group: PublicationGroup,
): PublicationGroupResult[] {
  if (group === 'venue') {
    const buckets = bucketBy(entries, (entry) => entry.venueKey ?? PUBLICATION_UNKNOWN);
    const known: PublicationVenueGrouping[] = [];
    for (const [key, list] of buckets) {
      if (key === PUBLICATION_UNKNOWN) continue;
      known.push({ key, label: venueDisplayLabel(list), entries: list, count: list.length });
    }
    known.sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.label.localeCompare(b.label, 'en');
    });
    const results: PublicationGroupResult[] = known.map(({ key, label, entries: list }) => ({
      key,
      label,
      entries: list,
    }));
    const unknown = buckets.get(PUBLICATION_UNKNOWN);
    if (unknown) {
      results.push({
        key: PUBLICATION_UNKNOWN,
        label: UNKNOWN_GROUP_LABELS.venue,
        entries: unknown,
      });
    }
    return results;
  }

  if (group === 'year') {
    const buckets = bucketBy(entries, (entry) =>
      entry.year === null ? PUBLICATION_UNKNOWN : String(entry.year),
    );
    const years = [...buckets.keys()]
      .filter((key) => key !== PUBLICATION_UNKNOWN)
      .map(Number)
      .sort((a, b) => b - a);
    const results = years.map((year) => {
      const list = buckets.get(String(year)) ?? [];
      return { key: String(year), label: `${year} 年`, entries: list };
    });
    const unknown = buckets.get(PUBLICATION_UNKNOWN);
    if (unknown) {
      results.push({
        key: PUBLICATION_UNKNOWN,
        label: UNKNOWN_GROUP_LABELS.year,
        entries: unknown,
      });
    }
    return results;
  }

  // month：固定输出 1 月至 12 月，空组不渲染
  const buckets = bucketBy(entries, (entry) =>
    entry.month === null ? PUBLICATION_UNKNOWN : String(entry.month),
  );
  const results: PublicationGroupResult[] = [];
  for (let month = 1; month <= 12; month += 1) {
    const list = buckets.get(String(month));
    if (!list) continue;
    results.push({ key: String(month), label: `${month} 月`, entries: list });
  }
  const unknown = buckets.get(PUBLICATION_UNKNOWN);
  if (unknown) {
    results.push({ key: PUBLICATION_UNKNOWN, label: UNKNOWN_GROUP_LABELS.month, entries: unknown });
  }
  return results;
}

/**
 * 统计视图计数。年份按降序，月份固定 1 至 12 顺序（零计数月份也返回 0），
 * 缺失值的桶只在非零时追加，保证计数总和等于入参条目数。
 */
export function buildPublicationCounts(
  entries: PublicationEntry[],
  dimension: PublicationCountDimension,
): PublicationCount[] {
  if (dimension === 'year') {
    const buckets = bucketBy(entries, (entry) =>
      entry.year === null ? PUBLICATION_UNKNOWN : String(entry.year),
    );
    const years = [...buckets.keys()]
      .filter((key) => key !== PUBLICATION_UNKNOWN)
      .map(Number)
      .sort((a, b) => b - a);
    const counts = years.map((year) => ({
      key: String(year),
      label: `${year} 年`,
      count: buckets.get(String(year))?.length ?? 0,
    }));
    const unknown = buckets.get(PUBLICATION_UNKNOWN);
    if (unknown) {
      counts.push({
        key: PUBLICATION_UNKNOWN,
        label: UNKNOWN_GROUP_LABELS.year,
        count: unknown.length,
      });
    }
    return counts;
  }

  const buckets = bucketBy(entries, (entry) =>
    entry.month === null ? PUBLICATION_UNKNOWN : String(entry.month),
  );
  const counts: PublicationCount[] = [];
  for (let month = 1; month <= 12; month += 1) {
    counts.push({
      key: String(month),
      label: `${month} 月`,
      count: buckets.get(String(month))?.length ?? 0,
    });
  }
  const unknown = buckets.get(PUBLICATION_UNKNOWN);
  if (unknown) {
    counts.push({
      key: PUBLICATION_UNKNOWN,
      label: UNKNOWN_GROUP_LABELS.month,
      count: unknown.length,
    });
  }
  return counts;
}

/** 载体下拉选项：按条目数降序，同数按展示名排序，缺失组只在存在时追加。 */
export function venueOptions(entries: PublicationEntry[]): PublicationOption[] {
  const groups = groupPublications(entries, 'venue');
  return groups.map(({ key, label }) => ({ key, label }));
}

/** 年份下拉选项：按年份降序，缺失组只在存在时追加。 */
export function yearOptions(entries: PublicationEntry[]): PublicationOption[] {
  return groupPublications(entries, 'year').map(({ key, label }) => ({ key, label }));
}

/** 月份下拉选项：固定 1 至 12 顺序，只保留数据中出现的月份，缺失组存在时追加。 */
export function monthOptions(entries: PublicationEntry[]): PublicationOption[] {
  return groupPublications(entries, 'month').map(({ key, label }) => ({ key, label }));
}

const VIEWS: readonly PublicationView[] = ['board', 'table', 'charts'];
const GROUPS: readonly PublicationGroup[] = ['venue', 'year', 'month'];

export function readPublicationState(search: string): PublicationBoardState {
  const params = new URLSearchParams(search);
  const viewParam = params.get('view');
  const view = VIEWS.includes(viewParam as PublicationView)
    ? (viewParam as PublicationView)
    : 'board';
  const groupParam = params.get('group');
  const group = GROUPS.includes(groupParam as PublicationGroup)
    ? (groupParam as PublicationGroup)
    : 'year';
  const pageParam = Number(params.get('page'));
  const page = Number.isInteger(pageParam) && pageParam >= 1 ? pageParam : 1;
  return {
    query: params.get('q') ?? '',
    venue: params.get('venue') ?? '',
    year: params.get('year') ?? '',
    month: params.get('month') ?? '',
    view,
    group,
    page,
  };
}

/** 只返回非默认参数，交给 Vue Router 的 query 对象。 */
export function writePublicationState(state: PublicationBoardState): Record<string, string> {
  const query: Record<string, string> = {};
  if (state.query !== DEFAULT_PUBLICATION_BOARD_STATE.query) query.q = state.query;
  if (state.venue !== DEFAULT_PUBLICATION_BOARD_STATE.venue) query.venue = state.venue;
  if (state.year !== DEFAULT_PUBLICATION_BOARD_STATE.year) query.year = state.year;
  if (state.month !== DEFAULT_PUBLICATION_BOARD_STATE.month) query.month = state.month;
  if (state.view !== DEFAULT_PUBLICATION_BOARD_STATE.view) query.view = state.view;
  if (state.group !== DEFAULT_PUBLICATION_BOARD_STATE.group) query.group = state.group;
  if (state.page !== DEFAULT_PUBLICATION_BOARD_STATE.page) query.page = String(state.page);
  return query;
}

/** DOI 展示链接。 */
export function publicationDoiUrl(doi: string): string {
  return `https://doi.org/${encodeURIComponent(doi)}`;
}
