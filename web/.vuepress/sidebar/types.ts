/**
 * Sidebar types — the single type surface for the sidebar module.
 *
 * Build-time intake shapes (produced by `web/.vuepress/intakes/`) and
 * runtime generated artifact shapes (produced by
 * `web/.vuepress/generators/`) live in this one file, distinguished by
 * type name and section header rather than by separate shallow files.
 *
 * Cross-module re-exports at the bottom keep the sidebar entry point as
 * the one place callers import sidebar-related types from.
 */
import type { GlossaryCategoryMeta } from '../taxonomy/adapters/glossary-categories.ts'

// === Build-time intake shapes ==============================================
// Produced by `web/.vuepress/intakes/` from filesystem scans; consumed by
// generators and adapters.

export interface VueSidebarItem {
  text: string
  link?: string
  collapsible?: boolean
  children?: Array<string | VueSidebarItem>
}

export interface ChatIndexEntry {
  path: string
  title: string
}

export interface ChatIndexCategory {
  category: string
  entries: ChatIndexEntry[]
}

export interface TranslationGap {
  category: string
  slug: string
  zhTitle: string
}

export interface GlossaryScanEntry {
  slug: string
  title: string
  path: string
  category: GlossaryCategoryMeta
}

export interface GlossaryScan {
  zh: { entries: GlossaryScanEntry[]; missing: TranslationGap[] }
  en: { entries: GlossaryScanEntry[] }
}

export interface GlossaryIntake {
  entries: Array<{
    slug: string
    title: string
    path: string
    categorySlug: string
  }>
  missing: TranslationGap[]
}

export interface ChatIndexIntake {
  zh: ChatIndexCategory[]
  en: ChatIndexCategory[]
}

export interface TranslationGapIntake {
  total: number
  byCategory: Record<string, number>
  gaps: TranslationGap[]
}

// === Runtime generated artifact shapes =====================================
// Produced by `web/.vuepress/generators/`; serialized into the JSON artifacts
// under `web/.vuepress/` and consumed by the Space News theme at runtime.

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

// === Sidebar data shapes (re-export from data.ts) ==========================
// `data.ts` holds both the `SidebarSection`/`SidebarEntry` types and the
// `sidebarSections` const data, so it stays a separate file; these types
// are re-exported here so callers have one import surface.

export type { SidebarSection, SidebarEntry } from './data.ts'

// === Cross-module re-export ================================================
// `GlossaryCategoryMeta` is authored in the taxonomy module and consumed
// inside `GlossaryScanEntry` above; re-exported so sidebar callers do not
// need a second import path.

export type { GlossaryCategoryMeta }
