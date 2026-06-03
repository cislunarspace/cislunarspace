/**
 * Non-glossary sidebar section definitions — single source of truth for both locales.
 * Glossary sections are auto-generated from the filesystem by `intakes/glossary-intake.ts`.
 */

export interface SidebarEntry {
  /** Path segment. Empty string = index page of parent. Undefined = display-only group header. */
  slug?: string
  label: { zh: string; en: string }
  children?: SidebarEntry[]
  collapsible?: boolean
  /** If set, only include in these locales. Undefined = both. */
  locales?: Array<'zh' | 'en'>
  /**
   * Explicit, stable id for this entry. Required when `slug === undefined`
   * (display-only group); optional otherwise — the default id is
   * `${parent.id}/${slug}` and the section default is `slug`.
   *
   * Per ADR-0001, ids are stable across renames: changing a slug is a new
   * id + a redirect entry, never an in-place rename. Display-only groups
   * have no slug to derive from, so the author must pick one.
   */
  id?: string
}

export interface SidebarSection {
  slug: string
  label: { zh: string; en: string }
  children: SidebarEntry[]
  /**
   * Locale-specific children override. When set, `children` is ignored
   * and the builder uses children[locale] instead.
   * For sections where zh and en have different page slugs.
   */
  childrenByLocale?: { zh: SidebarEntry[]; en: SidebarEntry[] }
}

export const sidebarSections: SidebarSection[] = [
  // ── 入门 ──
  {
    slug: 'what-is-cislunarspace',
    label: { zh: '地月空间是什么（环境与概念入门）', en: 'What is cislunar space (environment & concepts)' },
    children: [],
  },

  // ── 轨道 ──
  {
    slug: 'cislunar-orbits',
    label: { zh: '地月空间飞行器运行轨道（任务轨道基础）', en: 'Cislunar spacecraft orbits (mission trajectories)' },
    children: [
      {
        slug: 'nrho',
        label: { zh: 'NRHO（近直线晕轨道）', en: 'NRHO (Near-Rectilinear Halo Orbit)' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: '', en: '' } },
          { slug: 'l1-nrho', label: { zh: 'L1-NRHO', en: 'L1-NRHO' } },
          { slug: 'l2-nrho', label: { zh: 'L2-NRHO', en: 'L2-NRHO' } },
          { slug: 'ephemeris-computation', label: { zh: '多圈星历计算', en: 'Ephemeris multi-rev computation' } },
          { slug: 'stability-maintenance', label: { zh: '稳定性保持', en: 'Stability maintenance' } },
          { slug: 'gateway-cases', label: { zh: 'Gateway 案例', en: 'Gateway cases' } },
          { slug: 'design-parameters', label: { zh: '设计参数', en: 'Design parameters' } },
        ],
      },
      {
        slug: 'dro',
        label: { zh: 'DRO（远距离逆行轨道）', en: 'DRO (Distant Retrograde Orbit)' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: '', en: '' } },
          { slug: 'mechanics', label: { zh: '力学机理', en: 'Mechanics' } },
          { slug: 'family-classification', label: { zh: '族系分类', en: 'Family classification' } },
          { slug: 'applications', label: { zh: '应用场景', en: 'Applications' } },
          { slug: 'design-method', label: { zh: '设计方法', en: 'Design method' } },
        ],
      },
      {
        slug: 'transfer',
        label: { zh: '地月转移轨道', en: 'Earth-Moon Transfer Orbits' },
        collapsible: true,
        children: [
          { slug: '', label: { zh: '', en: '' } },
          { slug: 'tli-overview', label: { zh: 'TLI 概述', en: 'TLI overview' } },
          { slug: 'ballistic-capture', label: { zh: '弹道捕获', en: 'Ballistic capture' } },
          { slug: 'corridor-design', label: { zh: '走廊设计', en: 'Corridor design' } },
          { slug: 'launch-windows', label: { zh: '发射窗口', en: 'Launch windows' } },
        ],
      },
    ],
  },

  // ── 研究前沿 ──
  {
    slug: 'research-frontiers',
    label: { zh: '地月空间科学研究前沿（方向 · 机构 · 项目）', en: 'Research frontiers (directions · institutions · programs)' },
    children: [
      {
        slug: 'directions',
        label: { zh: '研究方向', en: 'Research directions' },
        collapsible: true,
        children: [
          {
            slug: 'orbit-design',
            label: { zh: '轨道设计与优化', en: 'Orbit Design & Optimization' },
            collapsible: true,
            children: [
              { slug: 'low-energy-transfer', label: { zh: '低能转移', en: 'Low-energy transfer' } },
              { slug: 'orbit-characterization', label: { zh: '轨道特性分析', en: 'Orbit characterization' } },
            ],
          },
          { slug: 'navigation', label: { zh: '导航与定轨', en: 'Navigation & Orbit Determination' }, collapsible: true, children: [] },
          { slug: 'ssa', label: { zh: '空间态势感知', en: 'Space Situational Awareness' }, collapsible: true, children: [] },
          { slug: 'communication', label: { zh: '通信与信息网络', en: 'Communication & Information Network' }, collapsible: true, children: [] },
          { slug: 'reference-frame', label: { zh: '时空基准与测量', en: 'Spatiotemporal Reference & Measurement' }, collapsible: true, children: [] },
          { slug: 'transportation', label: { zh: '航天运输体系', en: 'Space Transportation System' }, collapsible: true, children: [] },
          { slug: 'formation-flying', label: { zh: '编队飞行', en: 'Formation Flying' }, collapsible: true, children: [] },
          {
            slug: 'security-governance',
            label: { zh: '安全与治理', en: 'Security & Governance' },
            collapsible: true,
            children: [
              { slug: 'strategy', label: { zh: '战略', en: 'Strategy' }, locales: ['zh'] },
              {
                slug: 'orbital-game',
                label: { zh: '地月空间轨道博弈', en: 'Orbital game' },
                collapsible: true,
                locales: ['zh'],
                children: [
                  { slug: 'orbital-game-inspection', label: { zh: '轨道博弈审查', en: 'Orbital game inspection' } },
                ],
              },
            ],
          },
          { slug: 'infrastructure', label: { zh: '基础设施与经济', en: 'Infrastructure & Economy' }, collapsible: true, children: [] },
          {
            slug: 'simulation',
            label: { zh: '仿真系统', en: 'Simulation Systems' },
            collapsible: true,
            children: [
              { slug: 'simulation-systems', label: { zh: '仿真系统', en: 'Simulation systems' }, locales: ['zh'] },
            ],
          },
          { slug: 'radiation-environment', label: { zh: '空间辐射环境', en: 'Space Radiation Environment' }, collapsible: true, children: [] },
        ],
      },
      {
        slug: 'institutions',
        label: { zh: '研究机构和组织', en: 'Research institutions' },
        collapsible: true,
        children: [
          { slug: 'nudt', label: { zh: '国防科技大学', en: 'NUDT' }, locales: ['zh'] },
          { slug: 'npu', label: { zh: '西北工业大学', en: 'NPU' }, locales: ['zh'] },
          { slug: 'hit', label: { zh: '哈尔滨工业大学', en: 'HIT' } },
          { slug: 'seu', label: { zh: '东南大学', en: 'SEU' }, locales: ['zh'] },
          { slug: 'dfhscl', label: { zh: '东方航天港', en: 'DFHSCL' }, locales: ['zh'] },
          { slug: 'thu', label: { zh: '清华大学', en: 'THU' }, locales: ['zh'] },
        ],
      },
      { slug: 'journals-conferences', label: { zh: '期刊与会议', en: 'Journals & Conferences' } },
      { slug: 'major-projects', label: { zh: '重大项目', en: 'Major Projects' } },
    ],
  },

  // ── 背景知识 ──
  {
    slug: 'background',
    label: { zh: '背景知识（基础理论 · 数学工具）', en: 'Background Knowledge (Fundamentals & Math Tools)' },
    children: [
      {
        slug: 'math',
        label: { zh: '数学工具', en: 'Math Tools' },
        collapsible: true,
        children: [
          { slug: 'shooting-method', label: { zh: '打靶法', en: 'Shooting method' } },
          { slug: 'continuation', label: { zh: '延拓法', en: 'Continuation' } },
          { slug: 'symplectic-integrator', label: { zh: '辛积分器', en: 'Symplectic integrator' } },
        ],
      },
      {
        slug: 'mechanics',
        label: { zh: '天体力学基础', en: 'Celestial Mechanics' },
        collapsible: true,
        children: [
          { slug: 'perturbation', label: { zh: '摄动理论', en: 'Perturbation' } },
        ],
      },
      {
        slug: 'control',
        label: { zh: '控制与优化', en: 'Control & Optimization' },
        collapsible: true,
        children: [
          { slug: 'optimal-control', label: { zh: '最优控制', en: 'Optimal control' } },
        ],
      },
    ],
  },

  // ── 资源与工具 ──
  {
    slug: 'resources-tools',
    label: { zh: '资源与工具（数据、代码与数据集）', en: 'Resources & Tools (Data, Code & Datasets)' },
    children: [
      {
        id: 'resources-tools/simulation-software',
        label: { zh: '仿真软件', en: 'Simulation Software' },
        collapsible: true,
        children: [
          { slug: 'gmat', label: { zh: 'GMAT', en: 'GMAT' } },
          { slug: 'stk', label: { zh: 'STK', en: 'STK' } },
          { slug: 'atk', label: { zh: 'ATK', en: 'ATK' } },
          { slug: 'cesium', label: { zh: 'Cesium', en: 'Cesium' } },
        ],
      },
      {
        id: 'resources-tools/core-algorithm-libraries',
        label: { zh: '核心算法库', en: 'Core Algorithm Libraries' },
        collapsible: true,
        children: [
          { slug: 'e2m2e', label: { zh: 'E2M2E', en: 'E2M2E' } },
          { slug: 'scipy', label: { zh: 'SciPy', en: 'SciPy' } },
          { slug: 'r2s2', label: { zh: 'R2S2', en: 'R2S2' } },
          { slug: 'orekit', label: { zh: 'Orekit', en: 'Orekit' } },
          { slug: 'poliastro', label: { zh: 'Poliastro', en: 'Poliastro' } },
          { slug: 'basilisk', label: { zh: 'Basilisk', en: 'Basilisk' } },
          { slug: 'pykep', label: { zh: 'PyKEP', en: 'PyKEP' } },
        ],
      },
      {
        id: 'resources-tools/data-resources',
        label: { zh: '数据资源', en: 'Data Resources' },
        collapsible: true,
        children: [
          { slug: 'datasets', label: { zh: '数据集', en: 'Datasets' } },
        ],
      },
      {
        id: 'resources-tools/ai-cloud-platforms',
        label: { zh: 'AI与云平台', en: 'AI & Cloud Platforms' },
        collapsible: true,
        children: [
          { slug: 'digital-lunar', label: { zh: '数字月球', en: 'Digital Lunar' } },
          { slug: 'llm', label: { zh: '大语言模型', en: 'LLM' } },
          { slug: 'naoc-data', label: { zh: 'NAOC 数据', en: 'NAOC Data' } },
        ],
      },
    ],
  },
]
