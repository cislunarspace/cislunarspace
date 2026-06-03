/**
 * Unified sidebar types — single source of truth for all sidebar-related types.
 *
 * - Build-time types live in `./intake.ts` (former `SidebarIntake` namespace)
 * - Runtime types live in `./runtime.ts` (former `SidebarRuntime` namespace)
 * - Sidebar data shapes live in `./data.ts`
 *
 * This file re-exports the union of all sidebar-related types so existing
 * `import { Foo } from '.../sidebar/types'` callers continue to work.
 */
export type { GlossaryCategoryMeta } from '../taxonomy/adapters/glossary-categories.ts'
export type { SidebarSection, SidebarEntry } from './data.ts'

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
} from './intake.ts'

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
} from './runtime.ts'
