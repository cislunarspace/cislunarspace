/**
 * Shared interface types for the sidebar intake system.
 * All cross-module types live here so intake modules can reference each other
 * without import cycles.
 */
import type { GlossaryCategoryMeta } from './glossary-meta.js'
import type { SidebarSection, SidebarEntry } from './sidebar-data.js'

// ── Primitive types ───────────────────────────────────────────────────────────

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

// ── Glossary scan (used by multiple intakes) ─────────────────────────────────

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

export interface SpaceNewsSidebarIntake {
  zh: VueSidebarItem[]
  en: VueSidebarItem[]
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

// ── Final orchestrator output ───────────────────────────────────────────────

export interface SidebarIntake {
  configs: { zh: Record<string, any>; en: Record<string, any> }
  chatIndex: ChatIndexIntake
  translationGap: TranslationGapIntake
}
