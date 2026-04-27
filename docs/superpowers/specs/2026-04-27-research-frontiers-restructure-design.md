# Research Frontiers Restructuring Design

## Problem

`web/research-frontiers/directions/` 当前只有 4 个一级方向（战略研究、低能转移轨道、轨道参数表征、仿真系统设计），加上嵌套的"轨道博弈"。这些更像是具体课题而非分类体系，无法容纳地月空间研究的广度。

**痛点：**
1. 缺少标准化模板——新增内容时格式不一致
2. 分类维度不清晰——现有 4 个方向无法覆盖轨道设计、导航、态势感知、通信等研究问题
3. 中英文结构不同步——英文侧只有 6 个文件（中文 14 个），目录结构不对称

## Solution

重构研究方向为 10 个按研究问题组织的一级方向，建立结构化模板，同步中英文目录结构，并创建 AI Skill 辅助内容管理。

## Research Direction Taxonomy

| # | 目录名 | 中文名称 | 英文名称 | 现有页面归属 |
|---|--------|---------|---------|-------------|
| 1 | `orbit-design` | 轨道设计与优化 | Orbit Design & Optimization | 低能转移轨道 ✅, 轨道参数表征 ✅ |
| 2 | `navigation` | 导航与定轨 | Navigation & Orbit Determination | 新建 |
| 3 | `ssa` | 空间态势感知 | Space Situational Awareness | 新建 |
| 4 | `communication` | 通信与信息网络 | Communication & Information Network | 新建 |
| 5 | `reference-frame` | 时空基准与测量 | Spatiotemporal Reference & Measurement | 新建 |
| 6 | `transportation` | 航天运输体系 | Space Transportation System | 新建 |
| 7 | `formation-flying` | 编队飞行 | Formation Flying | 新建 |
| 8 | `security-governance` | 安全与治理 | Security & Governance | 战略研究 ✅ (迁移), 轨道博弈 ✅ (迁移) |
| 9 | `infrastructure` | 基础设施与经济 | Infrastructure & Economy | 新建 |
| 10 | `simulation` | 仿真系统 | Simulation Systems | 仿真系统设计 ✅ (迁移) |

**现有页面迁移：**
- `directions/strategy.md` → `directions/security-governance/strategy.md`
- `directions/low-energy-transfer.md` → `directions/orbit-design/low-energy-transfer.md`
- `directions/orbit-characterization.md` → `directions/orbit-design/orbit-characterization.md`
- `directions/simulation-systems.md` → `directions/simulation/simulation-systems.md`
- `directions/orbital-game/` → `directions/security-governance/orbital-game/`

## Directory Structure

```
web/research-frontiers/directions/
├── orbit-design/
│   ├── README.md              ← 方向概述页
│   ├── low-energy-transfer.md ← 迁移自现有
│   ├── orbit-characterization.md ← 迁移自现有
│   ├── dro.md                 ← 新增子方向
│   ├── nrho.md
│   └── figures/
├── navigation/
│   ├── README.md
│   ├── gnss.md                 ← 示例，非迁移项
│   ├── pulsar.md               ← 示例，非迁移项
│   └── figures/
├── ssa/
│   ├── README.md
│   └── ...
├── communication/
│   ├── README.md
│   └── ...
├── reference-frame/
│   ├── README.md
│   └── ...
├── transportation/
│   ├── README.md
│   └── ...
├── formation-flying/
│   ├── README.md
│   └── ...
├── security-governance/
│   ├── README.md
│   ├── strategy.md            ← 迁移自现有
│   └── orbital-game/          ← 迁移自现有
│       ├── README.md
│       └── orbital-game-inspection.md
├── infrastructure/
│   ├── README.md
│   └── ...
├── simulation/
│   ├── README.md
│   └── simulation-systems.md  ← 迁移自现有
└── _templates/
    ├── direction-index.md
    ├── subtopic.md
    └── institution.md

web/en/research-frontiers/directions/
├── orbit-design/
│   └── README.md              ← placeholder
├── navigation/
│   └── README.md
├── ssa/
│   └── README.md
├── communication/
│   └── README.md
├── reference-frame/
│   └── README.md
├── transportation/
│   └── README.md
├── formation-flying/
│   └── README.md
├── security-governance/
│   └── README.md
├── infrastructure/
│   └── README.md
└── simulation/
    └── README.md
```

**File naming conventions:**
- Directory names: lowercase English, hyphen-separated (e.g., `orbit-design`)
- Subtopic files: lowercase English, hyphen-separated (e.g., `low-energy-transfer.md`)
- Images: in each direction's `figures/` subdirectory
- English mirrors Chinese structure with same directory/file names

## Templates

### Direction Index Page (`_templates/direction-index.md`)

```markdown
---
title: {方向中文名称}
description: {一句话描述该方向的研究内容}
---

# {方向中文名称}

## 研究背景

{该方向在地月空间研究中的地位和意义}

## 研究内容

{该方向涵盖的核心研究问题}

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| [子方向1](./subtopic1.md) | 一句话简介 |
| [子方向2](./subtopic2.md) | 一句话简介 |
```

### Subtopic Page (`_templates/subtopic.md`)

```markdown
---
title: {子方向中文名称}
description: {一句话描述}
tags: [tag1, tag2]
---

# {子方向中文名称}

## 概述

{该子方向的定义和研究范畴}

## 研究现状

{国内外研究进展综述}

## 关键技术

{核心技术挑战和解决方案}

## 发展趋势

{未来发展方向}

## 参考文献

- [1] ...
```

### Institution Page (`_templates/institution.md`)

```markdown
---
title: {机构中文名称}
description: {一句话描述}
---

# {机构中文名称}

## 机构简介

{机构背景和研究定位}

## 研究方向

{在地月空间领域的主要研究方向}

## 代表性成果

{重要论文、项目、专利}

## 相关链接

- [机构主页](url)
```

## Sidebar Configuration

### Chinese (`sidebar.ts`)

```typescript
const researchSection = {
  text: '地月空间科学研究前沿（方向 · 机构 · 项目）',
  collapsible: false,
  children: [
    '/research-frontiers/',
    {
      text: '研究方向',
      link: '/research-frontiers/directions/',
      collapsible: true,
      children: [
        {
          text: '轨道设计与优化',
          link: '/research-frontiers/directions/orbit-design/',
          collapsible: true,
          children: [
            '/research-frontiers/directions/orbit-design/low-energy-transfer',
            '/research-frontiers/directions/orbit-design/orbit-characterization',
            '/research-frontiers/directions/orbit-design/dro',
            '/research-frontiers/directions/orbit-design/nrho',
          ],
        },
        {
          text: '导航与定轨',
          link: '/research-frontiers/directions/navigation/',
          collapsible: true,
          children: [
            '/research-frontiers/directions/navigation/gnss',
            '/research-frontiers/directions/navigation/pulsar',
          ],
        },
        {
          text: '空间态势感知',
          link: '/research-frontiers/directions/ssa/',
          collapsible: true,
          children: [],
        },
        {
          text: '通信与信息网络',
          link: '/research-frontiers/directions/communication/',
          collapsible: true,
          children: [],
        },
        {
          text: '时空基准与测量',
          link: '/research-frontiers/directions/reference-frame/',
          collapsible: true,
          children: [],
        },
        {
          text: '航天运输体系',
          link: '/research-frontiers/directions/transportation/',
          collapsible: true,
          children: [],
        },
        {
          text: '编队飞行',
          link: '/research-frontiers/directions/formation-flying/',
          collapsible: true,
          children: [],
        },
        {
          text: '安全与治理',
          link: '/research-frontiers/directions/security-governance/',
          collapsible: true,
          children: [
            '/research-frontiers/directions/security-governance/strategy',
            {
              text: '地月空间轨道博弈',
              link: '/research-frontiers/directions/security-governance/orbital-game/',
              collapsible: true,
              children: [
                '/research-frontiers/directions/security-governance/orbital-game/orbital-game-inspection',
              ],
            },
          ],
        },
        {
          text: '基础设施与经济',
          link: '/research-frontiers/directions/infrastructure/',
          collapsible: true,
          children: [],
        },
        {
          text: '仿真系统',
          link: '/research-frontiers/directions/simulation/',
          collapsible: true,
          children: [
            '/research-frontiers/directions/simulation/simulation-systems',
          ],
        },
      ],
    },
    {
      text: '研究机构和组织',
      link: '/research-frontiers/institutions/',
      collapsible: true,
      children: [
        '/research-frontiers/institutions/nudt',
        '/research-frontiers/institutions/npu',
        '/research-frontiers/institutions/hit',
        '/research-frontiers/institutions/seu',
        '/research-frontiers/institutions/dfhscl',
        '/research-frontiers/institutions/thu',
      ],
    },
    '/research-frontiers/journals-conferences',
    '/research-frontiers/major-projects',
  ],
}
```

### English (`sidebar-en.ts`)

Mirror the same structure with `/en/research-frontiers/` prefix.

## AI Skill: `research-frontiers-publish`

### Location

```
scripts/research-frontiers-publish/
├── SKILL.md
├── templates/
│   ├── direction-index.md
│   ├── subtopic.md
│   └── institution.md
```

### SKILL.md Structure

```yaml
---
name: research-frontiers-publish
description: >-
  Manages cislunar space research frontiers content: creates new direction
  subtopic pages, institution pages, checks content consistency, and batch
  imports from paper lists. Use when the user asks to add research directions,
  add institutions, check research content, or import papers into the
  研究前沿 / research-frontiers section.
---
```

### Four Workflows

**1. Add Subtopic (新增子方向)**

```
[1] Identify target direction (match from 10-direction taxonomy)
 ↓
[2] Check for duplicates (grep existing files for similar topics)
 ↓
[3] Create subtopic file from template
 ↓
[4] Fill content based on provided paper/topic
 ↓
[5] Update direction index README.md (add row to subtopic table)
 ↓
[6] Update sidebar.ts (add entry under direction's children)
 ↓
[7] Create English placeholder if needed
 ↓
[8] Build verify (npm run docs:build)
```

**2. Add Institution (新增机构)**

```
[1] Check for duplicate institution
 ↓
[2] Create institution file from template
 ↓
[3] Fill content
 ↓
[4] Update institutions/README.md
 ↓
[5] Update sidebar.ts (add entry under institutions)
 ↓
[6] Create English placeholder
 ↓
[7] Build verify
```

**3. Content Check (内容检查)**

```
[1] Scan all direction directories for README.md existence
 ↓
[2] Check sidebar.ts entries match actual files
 ↓
[3] Verify frontmatter fields (title, description present)
 ↓
[4] Check internal links validity
 ↓
[5] Report missing English counterparts
 ↓
[6] Output check report
```

**4. Batch Import (批量导入)**

```
[1] Parse paper list (title → direction classification)
 ↓
[2] Deduplicate against existing pages
 ↓
[3] Group by direction, create directories and template files
 ↓
[4] Fill subtopic pages based on paper content
 ↓
[5] Update direction index subtopic tables
 ↓
[6] Update sidebar.ts (Chinese + English)
 ↓
[7] Create English placeholder pages
 ↓
[8] Build verify (npm run docs:build)
```

### Quality Rules

- Each direction must have a README.md index page
- Subtopic pages must have `title` and `description` in frontmatter
- English placeholders must have `title` and `description` in English
- No duplicate subtopic topics within the same direction
- All sidebar entries must point to existing files
- Build must pass after each change

## Migration Steps

1. Create 10 new direction directories under `web/research-frontiers/directions/`
2. Move existing files to new locations (strategy → security-governance, etc.)
3. Create README.md index for each direction (from `direction-index.md` template)
4. Update `web/research-frontiers/directions/README.md` to list all 10 directions
5. Create `_templates/` directory with 3 templates
6. Update `sidebar.ts` with new structure
7. Create English mirror directories with placeholder READMEs
8. Update `sidebar-en.ts` with new structure
9. Create `scripts/research-frontiers-publish/SKILL.md` with templates/
10. Build verify

## Verification

After migration:
- `npm run docs:build` passes
- All 10 directions visible in sidebar
- Existing pages accessible at new URLs
- English placeholders render correctly
- No broken internal links
