/**
 * Sidebar types — the single type surface for the sidebar module.
 *
 * Build-time intake shapes (produced by `web/.vuepress/intakes/`) and
 * runtime generated artifact shapes (produced by
 * `web/.vuepress/generators/`) live in this one file, distinguished by
 * type name and section header rather than by separate shallow files.
 */
import type { GlossaryCategoryMeta } from '../taxonomy/adapters/glossary-categories.ts';

// === Build-time intake shapes ==============================================
// Produced by `web/.vuepress/intakes/` from filesystem scans; consumed by
// generators and adapters.

export interface VueSidebarItem {
  text: string;
  link?: string;
  collapsible?: boolean;
  children?: Array<string | VueSidebarItem>;
}

export interface ChatIndexEntry {
  path: string;
  title: string;
}

export interface ChatIndexCategory {
  category: string;
  entries: ChatIndexEntry[];
}

export interface TranslationGap {
  category: string;
  slug: string;
  zhTitle: string;
}

export interface GlossaryScanEntry {
  slug: string;
  title: string;
  path: string;
  category: GlossaryCategoryMeta;
}

export interface GlossaryScan {
  zh: { entries: GlossaryScanEntry[]; missing: TranslationGap[] };
  en: { entries: GlossaryScanEntry[] };
}

export interface TranslationGapIntake {
  total: number;
  byCategory: Record<string, number>;
  gaps: TranslationGap[];
}

// === Runtime generated artifact shapes =====================================
// Produced by `web/.vuepress/generators/`; serialized into the JSON artifacts
// under `web/.vuepress/` and consumed by the theme at runtime.
