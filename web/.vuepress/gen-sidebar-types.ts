/**
 * Shared types for gen-sidebar.ts pipeline.
 * These are the output shapes produced by the sidebar generation pipeline.
 */

export interface Article {
  relativePath: string
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string[] | null
  image: string | null
}

export interface SidebarLatestItem {
  title: string
  path: string
  date: string | null
  category: string[] | null
}

export interface SidebarCategory {
  key: string
  label: string
  count: number
  color: string
}

export interface SidebarMonth {
  month: number
  label: string
  path: string
  count: number
}

export interface SidebarYear {
  year: number
  months: SidebarMonth[]
}

export interface SidebarData {
  latest: SidebarLatestItem[]
  categories: SidebarCategory[]
  archive: SidebarYear[]
  stats: { total: number }
}

export interface MonthDir {
  month: number
  path: string
}

export interface YearDir {
  year: string
  months: MonthDir[]
}

export interface ChatIndex {
  zh: Array<{ category: string; entries: Array<{ path: string; title: string }> }>
  en: Array<{ category: string; entries: Array<{ path: string; title: string }> }>
}

export interface ChatContext {
  zh: Record<string, { title: string; text: string }>
  en: Record<string, { title: string; text: string }>
}

export interface SidebarGenerationResult {
  sidebarAuto: { zh: unknown[]; en: unknown[] }
  spaceNewsArticles: { zh: Article[]; en: Article[] }
  spaceNewsSidebarData: { zh: SidebarData; en: SidebarData }
  chatIndex: ChatIndex
  chatContext: ChatContext
}
