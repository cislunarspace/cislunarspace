import { buildWayfindingIntake as buildWayfinding } from '../taxonomy/adapters/wayfinding.ts';
import { buildAllSectionSidebars } from '../taxonomy/adapters/sidebar-sections.ts';
import { taxonomy } from '../taxonomy/index.ts';
import type { VueSidebarItem } from './types.ts';

export function buildSidebarConfigs(): {
  zh: Record<string, any>;
  en: Record<string, any>;
} {
  const wayfinding = buildWayfinding();
  const sectionSidebars = buildAllSectionSidebars();

  const zhConfig: Record<string, any> = {};
  const enConfig: Record<string, any> = {};

  // Section sidebars are derived from the taxonomy: every `kind: 'section'`
  // node contributes its locale route prefix (section.path[locale]) and the
  // matching section sidebar tree. No per-section hand-entry — adding a
  // section in the taxonomy automatically wires its sidebar here.
  for (const section of taxonomy.byKind('section', null)) {
    const sb = sectionSidebars[section.id];
    if (section.path.zh) zhConfig[section.path.zh] = [wayfinding.zh, sb.zh];
    if (section.path.en) enConfig[section.path.en] = [wayfinding.en, sb.en];
  }

  // Non-section prefixes are declared once. Locale roots carry wayfinding
  // only; space-news carries wayfinding only (its custom rail is a runtime
  // component, not a VuePress sidebar entry); satellite-simulation is
  // disabled. The `/en/space-news/` entry inside the zh config keeps zh
  // chrome consistent if a zh visitor lands on an en space-news URL.
  // Glossary pages are excluded from the build (config.ts pagePatterns), so
  // no glossary sidebar is produced (ADR-0004).
  Object.assign(zhConfig, {
    '/': [wayfinding.zh],
    '/glossary/': [wayfinding.zh],
    '/space-news/': [wayfinding.zh],
    '/en/space-news/': [wayfinding.zh],
    '/satellite-simulation/': false,
  });

  Object.assign(enConfig, {
    '/en/': [wayfinding.en],
    '/en/glossary/': [wayfinding.en],
    '/en/space-news/': [wayfinding.en],
    '/en/satellite-simulation/': false,
  });

  return { zh: zhConfig, en: enConfig };
}
