import path from 'path';
import { fileURLToPath } from 'url';
import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { buildWayfindingIntake as buildWayfinding } from '../taxonomy/adapters/wayfinding.ts';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts';
import { buildAllSectionSidebars } from '../taxonomy/adapters/sidebar-sections.ts';
import { taxonomy, GLOSSARY_ROOT_ID } from '../taxonomy/index.ts';
import { walkSiteMarkdown } from '../utils/markdown-walker.ts';
import type { GlossaryScan, VueSidebarItem } from './types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.join(__dirname, '..', '..');

function buildGlossarySidebar(scan: GlossaryScan): VueSidebarItem {
  const glossaryRootPath = taxonomy.get(GLOSSARY_ROOT_ID).path!;

  const byCategory = new Map<string, Array<{ slug: string; title: string; path: string }>>();
  for (const entry of scan.entries) {
    const catSlug = entry.category.slug;
    if (!byCategory.has(catSlug)) byCategory.set(catSlug, []);
    byCategory.get(catSlug)!.push(entry);
  }

  const categoryChildren: Array<string | VueSidebarItem> = [glossaryRootPath];

  for (const catMeta of glossaryCategories) {
    if (catMeta.parentSlug) continue; // 子分类随父分类组内嵌套处理
    const catEntries = byCategory.get(catMeta.slug) || [];
    // 根级条目直接列为链接；每个非空子分类再嵌套一个折叠组
    const children: Array<string | VueSidebarItem> = catEntries.map((e) => e.path);
    for (const sub of glossaryCategories.filter((c) => c.parentSlug === catMeta.slug)) {
      const subEntries = byCategory.get(sub.slug) || [];
      if (subEntries.length === 0) continue;
      children.push({
        text: sub.label,
        collapsible: true,
        children: subEntries.map((e) => e.path),
      });
    }
    if (children.length === 0) continue;
    categoryChildren.push({
      text: catMeta.label,
      collapsible: true,
      children,
    });
  }

  return {
    text: '地月空间术语词典（定义与概念检索）',
    collapsible: false,
    children: categoryChildren,
  };
}

export function buildSidebarConfigs(scan?: GlossaryScan): Record<string, any> {
  const effectiveScan = scan ?? buildGlossaryScan(walkSiteMarkdown(webRoot));

  const wayfinding = buildWayfinding();
  const sectionSidebars = buildAllSectionSidebars();
  const glossary = buildGlossarySidebar(effectiveScan);

  const config: Record<string, any> = {};

  // Section sidebars are derived from the taxonomy: every `kind: 'section'`
  // node contributes its route prefix (section.path) and the matching
  // section sidebar tree. No per-section hand-entry — adding a section in
  // the taxonomy automatically wires its sidebar here.
  for (const section of taxonomy.byKind('section', null)) {
    const sb = sectionSidebars[section.id];
    if (section.path) config[section.path] = [wayfinding, sb];
  }

  // Non-section prefixes are declared once. The locale root carries
  // wayfinding only; glossary carries wayfinding + the glossary sidebar.
  Object.assign(config, {
    '/': [wayfinding],
    '/glossary/': [wayfinding, glossary],
  });

  return config;
}
