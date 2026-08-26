/**
 * Non-glossary sidebar section definitions — single source of truth for both locales.
 * Glossary sections are auto-generated from the filesystem by `intakes/glossary-intake.ts`.
 */

export interface SidebarEntry {
  /** Path segment. Empty string = index page of parent. Undefined = display-only group header. */
  slug?: string;
  label: { zh: string; en: string };
  children?: SidebarEntry[];
  collapsible?: boolean;
  /** If set, only include in these locales. Undefined = both. */
  locales?: Array<'zh' | 'en'>;
  /**
   * Explicit, stable id for this entry. Required when `slug === undefined`
   * (display-only group); optional otherwise — the default id is
   * `${parent.id}/${slug}` and the section default is `slug`.
   *
   * Per ADR-0001, ids are stable across renames: changing a slug is a new
   * id + a redirect entry, never an in-place rename. Display-only groups
   * have no slug to derive from, so the author must pick one.
   */
  id?: string;
}

export interface SidebarSection {
  slug: string;
  label: { zh: string; en: string };
  children: SidebarEntry[];
  /**
   * Locale-specific children override. When set, `children` is ignored
   * and the builder uses children[locale] instead.
   * For sections where zh and en have different page slugs.
   */
  childrenByLocale?: { zh: SidebarEntry[]; en: SidebarEntry[] };
}

export const sidebarSections: SidebarSection[] = [
  // ── 入门 ──
  {
    slug: 'what-is-cislunarspace',
    label: {
      zh: '什么是地月空间',
      en: 'What is Cislunar Space',
    },
    children: [],
  },

  // ── 轨道 ──
  {
    slug: 'cislunar-orbits',
    label: {
      zh: '地月空间轨道',
      en: 'Cislunar Orbits',
    },
    children: [
      {
        slug: 'nrho',
        label: { zh: 'NRHO 近直线晕轨道', en: 'NRHO (Near-Rectilinear Halo Orbit)' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: 'NRHO 概述', en: 'NRHO Overview' } },
          { slug: 'l1-nrho', label: { zh: 'L1 点 NRHO', en: 'L1 NRHO' } },
          { slug: 'l2-nrho', label: { zh: 'L2 点 NRHO', en: 'L2 NRHO' } },
          {
            slug: 'ephemeris-computation',
            label: { zh: '多圈星历计算', en: 'Ephemeris Multi-rev Computation' },
          },
          {
            slug: 'stability-maintenance',
            label: { zh: '轨道稳定性与保持', en: 'Stability & Station Keeping' },
          },
          {
            slug: 'gateway-cases',
            label: { zh: 'Gateway 空间站案例', en: 'Gateway Mission Cases' },
          },
          { slug: 'design-parameters', label: { zh: '轨道设计参数', en: 'Design Parameters' } },
        ],
      },
      {
        slug: 'dro',
        label: { zh: 'DRO 远距离逆行轨道', en: 'DRO (Distant Retrograde Orbit)' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: 'DRO 概述', en: 'DRO Overview' } },
          { slug: 'mechanics', label: { zh: '动力学机理', en: 'Mechanics' } },
          {
            slug: 'family-classification',
            label: { zh: '轨道族分类', en: 'Family Classification' },
          },
          { slug: 'applications', label: { zh: '工程应用场景', en: 'Applications' } },
          { slug: 'design-method', label: { zh: '轨道设计方法', en: 'Design Methods' } },
        ],
      },
      {
        slug: 'transfer',
        label: { zh: '地月转移轨道', en: 'Earth-Moon Transfer Orbits' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: '转移轨道概述', en: 'Transfer Overview' } },
          { slug: 'tli-overview', label: { zh: '地月转移注入 TLI', en: 'TLI Overview' } },
          { slug: 'ballistic-capture', label: { zh: '低能量弹道捕获', en: 'Ballistic Capture' } },
          { slug: 'corridor-design', label: { zh: '转移走廊设计', en: 'Corridor Design' } },
          { slug: 'launch-windows', label: { zh: '发射窗口计算', en: 'Launch Windows' } },
        ],
      },
    ],
  },

  // ── 研究前沿 ──
  {
    slug: 'research-frontiers',
    label: {
      zh: '研究前沿',
      en: 'Research Frontiers',
    },
    children: [
      {
        slug: 'directions',
        label: { zh: '研究方向', en: 'Research Directions' },
        collapsible: true,
        children: [
          {
            slug: 'orbit-design',
            label: { zh: '轨道设计与优化', en: 'Orbit Design & Optimization' },
            collapsible: true,
            children: [
              {
                slug: 'low-energy-transfer',
                label: { zh: '低能转移轨道设计', en: 'Low-Energy Transfer' },
              },
              {
                slug: 'orbit-characterization',
                label: { zh: '轨道特性与动力学分析', en: 'Orbit Characterization' },
              },
            ],
          },
          {
            slug: 'ssa',
            label: { zh: '空间态势感知 SSA', en: 'Space Situational Awareness' },
            collapsible: true,
            children: [],
          },
          {
            slug: 'formation-flying',
            label: { zh: '编队飞行与分布式系统', en: 'Formation Flying' },
            collapsible: true,
            children: [],
          },
          {
            slug: 'security-governance',
            label: { zh: '太空安全与空间治理', en: 'Security & Governance' },
            collapsible: true,
            children: [
              { slug: 'strategy', label: { zh: '战略与前沿态势', en: 'Strategy' } },
              {
                slug: 'orbital-game',
                label: { zh: '地月空间轨道博弈', en: 'Orbital Game' },
                collapsible: true,
                locales: ['zh'],
                children: [
                  {
                    slug: 'orbital-game-inspection',
                    label: { zh: '非合作博弈与伴随检查', en: 'Orbital Game Inspection' },
                  },
                ],
              },
            ],
          },
          {
            slug: 'radiation-environment',
            label: { zh: '地月空间辐射环境', en: 'Space Radiation Environment' },
            collapsible: true,
            children: [],
          },
        ],
      },
      {
        slug: 'institutions',
        label: { zh: '核心研究机构', en: 'Research Institutions' },
        collapsible: true,
        children: [
          { slug: 'nudt', label: { zh: '国防科技大学', en: 'NUDT' } },
          { slug: 'npu', label: { zh: '西北工业大学', en: 'NPU' } },
          { slug: 'hit', label: { zh: '哈尔滨工业大学', en: 'HIT' } },
          { slug: 'seu', label: { zh: '东南大学', en: 'SEU' } },
          { slug: 'dfhscl', label: { zh: '东方空间科学与技术实验室', en: 'DFHSCL' } },
          { slug: 'thu', label: { zh: '清华大学', en: 'THU' } },
        ],
      },
      {
        slug: 'journals-conferences',
        label: { zh: '主流学术期刊与会议', en: 'Journals & Conferences' },
      },
      { slug: 'major-projects', label: { zh: '国内外重大工程项目', en: 'Major Projects' } },
    ],
  },

  // ── 资源与工具 ──
  {
    slug: 'resources-tools',
    label: {
      zh: '数据与工具',
      en: 'Resources & Tools',
    },
    children: [
      { slug: 'datasets', label: { zh: '空间数据集', en: 'Datasets' } },
      { slug: 'e2m2e', label: { zh: 'E2M2E 轨道设计库', en: 'E2M2E Library' } },
    ],
  },
];
