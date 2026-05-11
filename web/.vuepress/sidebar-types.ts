/**
 * Unified sidebar types — single source of truth for all sidebar-related types.
 *
 * - SidebarIntake.* — build-time types (shared between intake modules)
 * - SidebarRuntime.* — runtime types (output shapes from generation pipeline)
 */
import type { GlossaryCategoryMeta } from './glossary-meta.ts'
import type { SidebarSection, SidebarEntry } from './sidebar-data.ts'

// ── SidebarIntake namespace — build-time types ─────────────────────────────────

export namespace SidebarIntake {
  // ── Primitive types ─────────────────────────────────────────────────────────

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

  // ── Glossary scan ────────────────────────────────────────────────────────────

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

  // ── Per-module intake interfaces ──────────────────────────────────────────────

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

  export interface WayfindingIntake {
    zh: VueSidebarItem
    en: VueSidebarItem
  }

  export type SectionSidebarsIntake = Record<string, {
    zh: VueSidebarItem
    en: VueSidebarItem
  }>

  // ── Final orchestrator output ─────────────────────────────────────────────────

  export interface SidebarIntake {
    configs: { zh: Record<string, unknown>; en: Record<string, unknown> }
    chatIndex: ChatIndexIntake
    translationGap: TranslationGapIntake
  }
}

// Re-export for backward compat with modules importing types individually
export type {
  SidebarSection,
  SidebarEntry,
} from './sidebar-data.ts'

// ── SidebarRuntime namespace — runtime types ───────────────────────────────────

export namespace SidebarRuntime {
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
}

// ── Backward-compatible re-exports at top level ─────────────────────────────────

// Runtime types (for backward compat)
export type {
  Article,
  SidebarLatestItem,
  SidebarCategory,
  SidebarMonth,
  SidebarYear,
  SidebarData,
  MonthDir,
  YearDir,
  ChatIndex,
  ChatContext,
  SidebarGenerationResult,
} from './SidebarRuntime'

// Intake types (for backward compat)
export type {
  VueSidebarItem,
  ChatIndexEntry,
  ChatIndexCategory,
  TranslationGap,
  GlossaryScanEntry,
  GlossaryScan,
  GlossaryIntake,
  ChatIndexIntake,
  TranslationGapIntake,
  WayfindingIntake,
  SectionSidebarsIntake,
  SidebarIntake,
} from './SidebarIntake'
