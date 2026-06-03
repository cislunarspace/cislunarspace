/**
 * Sidebar build-time types (SidebarIntake namespace).
 * Mirrors the namespace exported from `../types.ts` for backward compat.
 */
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
  category: import('../taxonomy/adapters/glossary-categories.ts').GlossaryCategoryMeta
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

export interface WayfindingIntake {
  zh: VueSidebarItem
  en: VueSidebarItem
}

export type SectionSidebarsIntake = Record<string, {
  zh: VueSidebarItem
  en: VueSidebarItem
}>

export interface SidebarIntake {
  configs: { zh: Record<string, unknown>; en: Record<string, unknown> }
  chatIndex: ChatIndexIntake
  translationGap: TranslationGapIntake
}
