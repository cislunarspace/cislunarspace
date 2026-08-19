/**
 * Space News locale labels — single source of truth for every Space News
 * runtime surface's zh/en copy.
 *
 * Grouped by surface (home / archive / sidebar / article) so the same key
 * (`latest`, `more`, …) can carry different copy on different surfaces
 * (e.g. home.latest = "最新动态", sidebar.latest = "最新"). One file to
 * edit when changing Space News copy in either locale.
 *
 * Runtime detection of which locale to use stays at the call site
 * (`isEn` / `locale` computed); this module is a pure data table.
 */
import type { SpaceNewsLocale } from './spaceNewsDirectoryView';

export interface HomeLabels {
  kicker: string;
  title: string;
  lead: string;
  latest: string;
  viewAll: string;
  viewMore: string;
}

export interface ArchiveLabels {
  kicker: string;
  title: string;
  lead: string;
  backHome: string;
  empty: string;
  all: string;
}

export interface SidebarLabels {
  brandTitle: string;
  subtitle: string;
  home: string;
  archive: string;
  latest: string;
  more: string;
  categories: string;
  timeline: string;
  totalArticles: string;
}

export interface ArticleLabels {
  backToNews: string;
}

export const spaceNewsLabels: {
  home: Record<SpaceNewsLocale, HomeLabels>;
  archive: Record<SpaceNewsLocale, ArchiveLabels>;
  sidebar: Record<SpaceNewsLocale, SidebarLabels>;
  article: Record<SpaceNewsLocale, ArticleLabels>;
} = {
  home: {
    zh: {
      kicker: '地月空间入门指南',
      title: '航天动态',
      lead: '政策、发射、任务与产业动态摘录：每条稿件均给出可核对的公开来源，便于回溯与延伸阅读。',
      latest: '最新动态',
      viewAll: '全部存档 →',
      viewMore: '更多 →',
    },
    en: {
      kicker: 'Cislunar Space',
      title: 'Space News',
      lead: 'Curated briefs on policy, launches, missions, and industry moves — every article cites public sources you can verify in-line.',
      latest: 'Latest News',
      viewAll: 'Full archive →',
      viewMore: 'More →',
    },
  },
  archive: {
    zh: {
      kicker: '航天动态',
      title: '按日期查阅',
      lead: '以下为已发布的全部条目，按月分组，月内按日期倒序。',
      backHome: '返回航天动态首页',
      empty: '暂无稿件。',
      all: '全部',
    },
    en: {
      kicker: 'Space News',
      title: 'Archive by date',
      lead: 'All published items, newest first within each month.',
      backHome: 'Back to Space News',
      empty: 'No articles yet.',
      all: 'All',
    },
  },
  sidebar: {
    zh: {
      brandTitle: '航天动态',
      subtitle: '地月空间入门指南',
      home: '首页',
      archive: '存档',
      latest: '最新',
      more: '存档页 →',
      categories: '按主题',
      timeline: '按月',
      totalArticles: '已发布',
    },
    en: {
      brandTitle: 'Space News',
      subtitle: 'Cislunar Space',
      home: 'Home',
      archive: 'Archive',
      latest: 'Latest',
      more: 'More →',
      categories: 'Topics',
      timeline: 'Timeline',
      totalArticles: 'Articles',
    },
  },
  article: {
    zh: { backToNews: '返回航天动态' },
    en: { backToNews: 'Back to Space News' },
  },
};
