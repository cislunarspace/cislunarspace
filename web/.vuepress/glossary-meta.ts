/**
 * Glossary category metadata — single source of truth for category labels and display order.
 * Used by build-sidebar.ts to auto-generate glossary sidebars from the filesystem.
 */

export interface GlossaryCategoryMeta {
  slug: string
  label: { zh: string; en: string }
  order: number
}

export const glossaryCategories: GlossaryCategoryMeta[] = [
  { slug: 'fundamentals', label: { zh: '基础概念', en: 'Fundamentals' }, order: 1 },
  { slug: 'dynamics', label: { zh: '动力学与数学基础', en: 'Dynamics & Math' }, order: 2 },
  { slug: 'orbits', label: { zh: '任务轨道', en: 'Mission orbits' }, order: 3 },
  { slug: 'navigation', label: { zh: '导航技术与系统', en: 'Navigation' }, order: 4 },
  { slug: 'minerals', label: { zh: '月球矿物', en: 'Lunar minerals' }, order: 5 },
  { slug: 'programs', label: { zh: '项目与任务', en: 'Programs & missions' }, order: 6 },
  { slug: 'other', label: { zh: '其他技术', en: 'Other' }, order: 7 },
  { slug: 'organizations', label: { zh: '机构和组织', en: 'Organizations' }, order: 8 },
  { slug: 'doctrine', label: { zh: '军事太空条令', en: 'Military space doctrine' }, order: 9 },
  { slug: 'observation', label: { zh: '天文观测技术', en: 'Observation techniques' }, order: 10 },
  { slug: 'communication', label: { zh: '卫星通信与测控', en: 'Satellite Communication & TT&C' }, order: 11 },
]
