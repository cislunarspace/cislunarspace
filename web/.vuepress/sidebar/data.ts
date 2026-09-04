/**
 * Non-glossary sidebar section definitions — single source of truth.
 * Glossary sections are auto-generated from the filesystem by `intakes/glossary-intake.ts`.
 */

export interface SidebarEntry {
  /** Path segment. Empty string = index page of parent. Undefined = display-only group header. */
  slug?: string;
  label: string;
  children?: SidebarEntry[];
  collapsible?: boolean;
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
  label: string;
  children: SidebarEntry[];
}

export const sidebarSections: SidebarSection[] = [
  // ── 入门 ──
  {
    slug: 'what-is-cislunarspace',
    label: '什么是地月空间',
    children: [],
  },

  // ── 轨道 ──
  {
    slug: 'cislunar-orbits',
    label: '地月空间轨道',
    children: [
      {
        slug: 'nrho',
        label: 'NRHO 近直线晕轨道',
        collapsible: true,
        children: [
          { slug: '', label: 'NRHO 概述' },
          { slug: 'l1-nrho', label: 'L1 点 NRHO' },
          { slug: 'l2-nrho', label: 'L2 点 NRHO' },
          { slug: 'ephemeris-computation', label: '多圈星历计算' },
          { slug: 'stability-maintenance', label: '轨道稳定性与保持' },
          { slug: 'gateway-cases', label: 'Gateway 空间站案例' },
          { slug: 'design-parameters', label: '轨道设计参数' },
        ],
      },
      {
        slug: 'dro',
        label: 'DRO 远距离逆行轨道',
        collapsible: true,
        children: [
          { slug: '', label: 'DRO 概述' },
          { slug: 'mechanics', label: '动力学机理' },
          { slug: 'family-classification', label: '轨道族分类' },
          { slug: 'applications', label: '工程应用场景' },
          { slug: 'design-method', label: '轨道设计方法' },
        ],
      },
      {
        slug: 'transfer',
        label: '地月转移轨道',
        collapsible: true,
        children: [
          { slug: '', label: '转移轨道概述' },
          { slug: 'tli-overview', label: '地月转移注入 TLI' },
          { slug: 'ballistic-capture', label: '低能量弹道捕获' },
          { slug: 'corridor-design', label: '转移走廊设计' },
          { slug: 'launch-windows', label: '发射窗口计算' },
        ],
      },
    ],
  },

  // ── 研究前沿 ──
  {
    slug: 'research-frontiers',
    label: '研究前沿',
    children: [
      {
        slug: 'directions',
        label: '研究方向',
        collapsible: true,
        children: [
          {
            slug: 'orbit-design',
            label: '轨道设计与优化',
            collapsible: true,
            children: [
              { slug: 'low-energy-transfer', label: '低能转移轨道设计' },
              { slug: 'orbit-characterization', label: '轨道特性与动力学分析' },
            ],
          },
          {
            slug: 'ssa',
            label: '空间态势感知 SSA',
            collapsible: true,
            children: [],
          },
          {
            slug: 'formation-flying',
            label: '编队飞行与分布式系统',
            collapsible: true,
            children: [],
          },
          {
            slug: 'security-governance',
            label: '太空安全与空间治理',
            collapsible: true,
            children: [
              { slug: 'strategy', label: '战略与前沿态势' },
              {
                slug: 'orbital-game',
                label: '地月空间轨道博弈',
                collapsible: true,
                children: [{ slug: 'orbital-game-inspection', label: '非合作博弈与伴随检查' }],
              },
            ],
          },
          {
            slug: 'radiation-environment',
            label: '地月空间辐射环境',
            collapsible: true,
            children: [],
          },
        ],
      },
      {
        slug: 'institutions',
        label: '核心研究机构',
        collapsible: true,
        children: [
          { slug: 'nudt', label: '国防科技大学' },
          { slug: 'npu', label: '西北工业大学' },
          { slug: 'hit', label: '哈尔滨工业大学' },
          { slug: 'seu', label: '东南大学' },
          { slug: 'dfhscl', label: '东方空间科学与技术实验室' },
          { slug: 'thu', label: '清华大学' },
        ],
      },
      {
        slug: 'journals-conferences',
        label: '主流学术期刊与会议',
      },
      { slug: 'major-projects', label: '国内外重大工程项目' },
    ],
  },

  // ── 资源与工具 ──
  {
    slug: 'resources-tools',
    label: '数据与工具',
    children: [
      { slug: 'datasets', label: '空间数据集' },
      { slug: 'e2m2e', label: 'E2M2E 轨道设计库' },
    ],
  },
];
