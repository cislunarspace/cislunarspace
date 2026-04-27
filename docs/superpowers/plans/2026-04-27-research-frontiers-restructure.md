# Research Frontiers Restructuring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure `web/research-frontiers/directions/` from 4 flat directions into 10 categorized direction directories with standardized templates, synchronized English mirrors, and an AI Skill for content management.

**Architecture:** Migrate existing files to new directory structure, create index READMEs per direction, update sidebar configs for both locales, create template files, and build a SKILL.md for AI-assisted content management.

**Tech Stack:** VuePress 2, TypeScript (sidebar config), Markdown

---

## File Map

| Action | File | Purpose |
|--------|------|---------|
| Create | `web/research-frontiers/directions/orbit-design/README.md` | Direction index: 轨道设计与优化 |
| Create | `web/research-frontiers/directions/navigation/README.md` | Direction index: 导航与定轨 |
| Create | `web/research-frontiers/directions/ssa/README.md` | Direction index: 空间态势感知 |
| Create | `web/research-frontiers/directions/communication/README.md` | Direction index: 通信与信息网络 |
| Create | `web/research-frontiers/directions/reference-frame/README.md` | Direction index: 时空基准与测量 |
| Create | `web/research-frontiers/directions/transportation/README.md` | Direction index: 航天运输体系 |
| Create | `web/research-frontiers/directions/formation-flying/README.md` | Direction index: 编队飞行 |
| Create | `web/research-frontiers/directions/security-governance/README.md` | Direction index: 安全与治理 |
| Create | `web/research-frontiers/directions/infrastructure/README.md` | Direction index: 基础设施与经济 |
| Create | `web/research-frontiers/directions/simulation/README.md` | Direction index: 仿真系统 |
| Move | `directions/strategy.md` → `directions/security-governance/strategy.md` | Migrate existing |
| Move | `directions/low-energy-transfer.md` → `directions/orbit-design/low-energy-transfer.md` | Migrate existing |
| Move | `directions/orbit-characterization.md` → `directions/orbit-design/orbit-characterization.md` | Migrate existing |
| Move | `directions/simulation-systems.md` → `directions/simulation/simulation-systems.md` | Migrate existing |
| Move | `directions/orbital-game/` → `directions/security-governance/orbital-game/` | Migrate existing |
| Modify | `web/research-frontiers/directions/README.md` | Update to list 10 directions |
| Create | `web/research-frontiers/directions/_templates/direction-index.md` | Template |
| Create | `web/research-frontiers/directions/_templates/subtopic.md` | Template |
| Create | `web/research-frontiers/directions/_templates/institution.md` | Template |
| Modify | `web/.vuepress/sidebar.ts:60-100` | New researchSection with 10 directions |
| Modify | `web/.vuepress/sidebar-en.ts:59-77` | Mirror Chinese sidebar structure |
| Create | `web/en/research-frontiers/directions/orbit-design/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/navigation/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/ssa/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/communication/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/reference-frame/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/transportation/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/formation-flying/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/security-governance/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/infrastructure/README.md` | EN placeholder |
| Create | `web/en/research-frontiers/directions/simulation/README.md` | EN placeholder |
| Create | `scripts/research-frontiers-publish/SKILL.md` | AI Skill |
| Create | `scripts/research-frontiers-publish/templates/direction-index.md` | Skill template |
| Create | `scripts/research-frontiers-publish/templates/subtopic.md` | Skill template |
| Create | `scripts/research-frontiers-publish/templates/institution.md` | Skill template |

---

### Task 1: Create direction directories and migrate existing files

**Files:**
- Create: `web/research-frontiers/directions/orbit-design/` (directory)
- Create: `web/research-frontiers/directions/navigation/` (directory)
- Create: `web/research-frontiers/directions/ssa/` (directory)
- Create: `web/research-frontiers/directions/communication/` (directory)
- Create: `web/research-frontiers/directions/reference-frame/` (directory)
- Create: `web/research-frontiers/directions/transportation/` (directory)
- Create: `web/research-frontiers/directions/formation-flying/` (directory)
- Create: `web/research-frontiers/directions/security-governance/` (directory)
- Create: `web/research-frontiers/directions/infrastructure/` (directory)
- Create: `web/research-frontiers/directions/simulation/` (directory)
- Move: 5 existing files/dirs to new locations

- [ ] **Step 1: Create 10 direction directories**

```bash
cd web/research-frontiers/directions
mkdir -p orbit-design navigation ssa communication reference-frame transportation formation-flying security-governance infrastructure simulation
```

- [ ] **Step 2: Move existing files to new locations**

```bash
cd web/research-frontiers/directions

# Move to orbit-design
mv low-energy-transfer.md orbit-design/
mv orbit-characterization.md orbit-design/

# Move to security-governance
mv strategy.md security-governance/
mv orbital-game security-governance/

# Move to simulation
mv simulation-systems.md simulation/
```

- [ ] **Step 3: Verify moves**

```bash
ls -la orbit-design/ security-governance/ simulation/
```

Expected:
- `orbit-design/` contains `low-energy-transfer.md`, `orbit-characterization.md`
- `security-governance/` contains `strategy.md`, `orbital-game/`
- `simulation/` contains `simulation-systems.md`

- [ ] **Step 4: Commit**

```bash
git add web/research-frontiers/directions/
git commit -m "refactor(research): create direction directories and migrate existing files"
```

---

### Task 2: Create direction index READMEs (Chinese)

Each direction gets a README.md index page following the direction-index template pattern.

**Files:**
- Create: `web/research-frontiers/directions/orbit-design/README.md`
- Create: `web/research-frontiers/directions/navigation/README.md`
- Create: `web/research-frontiers/directions/ssa/README.md`
- Create: `web/research-frontiers/directions/communication/README.md`
- Create: `web/research-frontiers/directions/reference-frame/README.md`
- Create: `web/research-frontiers/directions/transportation/README.md`
- Create: `web/research-frontiers/directions/formation-flying/README.md`
- Create: `web/research-frontiers/directions/security-governance/README.md`
- Create: `web/research-frontiers/directions/infrastructure/README.md`
- Create: `web/research-frontiers/directions/simulation/README.md`

- [ ] **Step 1: Create orbit-design/README.md**

```markdown
---
title: 轨道设计与优化
description: 地月空间各类轨道的设计方法、优化算法与应用研究
---

# 轨道设计与优化

## 研究背景

轨道设计是地月空间任务的核心技术之一，涵盖从近地轨道到月球轨道的各类转移、驻留和返回轨道的设计与优化。

## 研究内容

- 低能转移轨道设计
- 轨道参数表征方法
- DRO/NRHO 等特定轨道族设计
- 轨道优化算法

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| [低能转移轨道](./low-energy-transfer.md) | 地月空间低能转移轨道设计与应用 |
| [轨道参数表征](./orbit-characterization.md) | 轨道参数的表征方法与分析 |
```

- [ ] **Step 2: Create navigation/README.md**

```markdown
---
title: 导航与定轨
description: 地月空间航天器自主导航、轨道确定与预报技术
---

# 导航与定轨

## 研究背景

地月空间距离地球远、信号弱、动力学复杂，对导航与定轨技术提出了全新挑战。

## 研究内容

- GNSS 弱信号导航
- 脉冲星导航
- 星间测距与定轨
- 自主导航算法

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 3: Create ssa/README.md**

```markdown
---
title: 空间态势感知
description: 地月空间目标监视、碎片探测与态势感知技术
---

# 空间态势感知

## 研究背景

随着地月空间活动增加，空间态势感知成为保障航天器安全和空间可持续利用的关键能力。

## 研究内容

- 目标编目与观测体制
- 碎片探测与跟踪
- AI 赋能态势感知
- 地基/天基监视系统

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 4: Create communication/README.md**

```markdown
---
title: 通信与信息网络
description: 地月空间通信网络架构、协议设计与信息传输技术
---

# 通信与信息网络

## 研究背景

地月空间通信面临距离远、延迟大、链路复杂等挑战，需要新型网络架构和协议。

## 研究内容

- 通信网络体系架构
- 网络协议设计
- 中继卫星通信
- 频率资源管理

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 5: Create reference-frame/README.md**

```markdown
---
title: 时空基准与测量
description: 地月空间时空参考系建立、时间频率传递与精密测量技术
---

# 时空基准与测量

## 研究背景

地月空间的时空基准是导航、定轨和科学观测的基础，涉及相对论效应和多体引力场。

## 研究内容

- 天基时空基准构建
- 激光时频传递
- VLBI 测量技术
- 相对论参考系

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 6: Create transportation/README.md**

```markdown
---
title: 航天运输体系
description: 地月空间大规模低成本航天运输系统设计与航班化运营
---

# 航天运输体系

## 研究背景

地月空间的规模化开发依赖低成本、高频次的航天运输体系。

## 研究内容

- 大规模低成本运输方案
- 航班化往返转移
- 运载火箭与飞船设计
- 运输经济学

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 7: Create formation-flying/README.md**

```markdown
---
title: 编队飞行
description: 地月空间航天器编队飞行的动力学、控制与应用
---

# 编队飞行

## 研究背景

编队飞行是实现地月空间分布式观测、在轨服务等任务的重要技术。

## 研究内容

- 编队飞行动力学
- 绕飞接近与跟踪控制
- DRO 编队设计
- 编队自主导航

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 8: Create security-governance/README.md**

```markdown
---
title: 安全与治理
description: 地月空间安全挑战、国际法规与全球治理框架
---

# 安全与治理

## 研究背景

地月空间的军事化趋势和商业开发引发了安全与治理方面的新挑战。

## 研究内容

- 太空安全与军事化
- 国际法与军备控制
- 全球治理框架
- 轨道博弈

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| [战略研究](./strategy.md) | 地月空间战略、安全与开发 |
| [轨道博弈](./orbital-game/) | 非合作飞行器轨道博弈 |
```

- [ ] **Step 9: Create infrastructure/README.md**

```markdown
---
title: 基础设施与经济
description: 地月空间基础设施体系架构、资源开发与经济发展
---

# 基础设施与经济

## 研究背景

地月空间的长期可持续发展需要完善的基础设施体系和可行的经济模式。

## 研究内容

- 基础设施体系架构
- 资源勘探与开发
- 地月空间经济
- 频率与轨道资源

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| *待添加* | |
```

- [ ] **Step 10: Create simulation/README.md**

```markdown
---
title: 仿真系统
description: 地月空间任务仿真系统设计、智能仿真与轨道设计仿真
---

# 仿真系统

## 研究背景

仿真系统是地月空间任务设计、验证和分析的重要工具。

## 研究内容

- 智能仿真系统架构
- 轨道设计仿真
- 任务分析仿真
- 态势感知仿真

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| [仿真系统设计](./simulation-systems.md) | 地月空间仿真系统设计方法 |
```

- [ ] **Step 11: Commit**

```bash
git add web/research-frontiers/directions/*/README.md
git commit -m "docs(research): add direction index READMEs for all 10 directions"
```

---

### Task 3: Update directions index and create templates

**Files:**
- Modify: `web/research-frontiers/directions/README.md`
- Create: `web/research-frontiers/directions/_templates/direction-index.md`
- Create: `web/research-frontiers/directions/_templates/subtopic.md`
- Create: `web/research-frontiers/directions/_templates/institution.md`

- [ ] **Step 1: Update directions/README.md**

Replace the current content of `web/research-frontiers/directions/README.md` with:

```markdown
---
title: 地月空间研究方向与前沿热点
description: 按研究问题方向分类的地月空间研究前沿，涵盖轨道设计、导航、态势感知等领域
keywords: 地月空间研究方向, 研究前沿, 热点领域, 发展趋势
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/
---

# 地月空间研究方向与前沿热点

按研究问题方向组织的地月空间研究前沿内容：

## 研究方向导航

| 方向 | 简介 |
|------|------|
| [轨道设计与优化](./orbit-design/) | 轨道设计方法、优化算法与应用 |
| [导航与定轨](./navigation/) | 自主导航、轨道确定与预报 |
| [空间态势感知](./ssa/) | 目标监视、碎片探测与态势感知 |
| [通信与信息网络](./communication/) | 网络架构、协议设计与信息传输 |
| [时空基准与测量](./reference-frame/) | 参考系建立、时频传递与精密测量 |
| [航天运输体系](./transportation/) | 低成本运输系统与航班化运营 |
| [编队飞行](./formation-flying/) | 编队动力学、控制与应用 |
| [安全与治理](./security-governance/) | 安全挑战、国际法规与治理框架 |
| [基础设施与经济](./infrastructure/) | 基础设施架构、资源开发与经济 |
| [仿真系统](./simulation/) | 仿真系统设计与智能仿真 |
```

- [ ] **Step 2: Create _templates/direction-index.md**

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

- [ ] **Step 3: Create _templates/subtopic.md**

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

- [ ] **Step 4: Create _templates/institution.md**

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

- [ ] **Step 5: Commit**

```bash
git add web/research-frontiers/directions/README.md web/research-frontiers/directions/_templates/
git commit -m "docs(research): update directions index and add content templates"
```

---

### Task 4: Update Chinese sidebar configuration

**Files:**
- Modify: `web/.vuepress/sidebar.ts:60-100`

- [ ] **Step 1: Replace researchSection in sidebar.ts**

Replace lines 60-100 (the `researchSection` object) with:

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
          ],
        },
        {
          text: '导航与定轨',
          link: '/research-frontiers/directions/navigation/',
          collapsible: true,
          children: [],
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

- [ ] **Step 2: Commit**

```bash
git add web/.vuepress/sidebar.ts
git commit -m "refactor(sidebar): update Chinese sidebar with 10 research directions"
```

---

### Task 5: Create English mirror directories and update English sidebar

**Files:**
- Create: `web/en/research-frontiers/directions/orbit-design/README.md`
- Create: `web/en/research-frontiers/directions/navigation/README.md`
- Create: `web/en/research-frontiers/directions/ssa/README.md`
- Create: `web/en/research-frontiers/directions/communication/README.md`
- Create: `web/en/research-frontiers/directions/reference-frame/README.md`
- Create: `web/en/research-frontiers/directions/transportation/README.md`
- Create: `web/en/research-frontiers/directions/formation-flying/README.md`
- Create: `web/en/research-frontiers/directions/security-governance/README.md`
- Create: `web/en/research-frontiers/directions/infrastructure/README.md`
- Create: `web/en/research-frontiers/directions/simulation/README.md`
- Modify: `web/.vuepress/sidebar-en.ts:59-77`

- [ ] **Step 1: Create English mirror directories**

```bash
cd web/en/research-frontiers/directions
mkdir -p orbit-design navigation ssa communication reference-frame transportation formation-flying security-governance infrastructure simulation
```

- [ ] **Step 2: Create English placeholder READMEs**

Create each file with this pattern (shown for orbit-design, repeat for all 10):

**orbit-design/README.md:**
```markdown
---
title: Orbit Design & Optimization
description: Design methods, optimization algorithms and applications for cislunar orbits
---

# Orbit Design & Optimization

## Background

Orbit design is a core technology for cislunar missions, covering transfer, stationkeeping, and return orbits.

## Research Areas

- Low-energy transfer orbit design
- Orbit characterization methods
- DRO/NRHO orbit family design
- Orbit optimization algorithms

## Subtopics

| Subtopic | Description |
|----------|-------------|
| [Low-Energy Transfer](./low-energy-transfer.md) | Low-energy transfer orbit design and applications |
| [Orbit Characterization](./orbit-characterization.md) | Orbit parameter characterization methods |
```

For the other 9 directions, use the same structure with appropriate title/description/content. All subtopics tables start empty (just the header row) except:
- `orbit-design`: links to `low-energy-transfer.md` and `orbit-characterization.md` (English stubs to be created separately)
- `security-governance`: links to `strategy.md` (English stub)
- `simulation`: links to `simulation-systems.md` (English stub)

- [ ] **Step 3: Replace researchSection in sidebar-en.ts**

Replace lines 59-77 (the `researchSection` object) with:

```typescript
const researchSection = {
  text: 'Research frontiers (directions · institutions · programs)',
  collapsible: false,
  children: [
    '/en/research-frontiers/',
    {
      text: 'Research directions',
      link: '/en/research-frontiers/directions/',
      collapsible: true,
      children: [
        {
          text: 'Orbit Design & Optimization',
          link: '/en/research-frontiers/directions/orbit-design/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Navigation & Orbit Determination',
          link: '/en/research-frontiers/directions/navigation/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Space Situational Awareness',
          link: '/en/research-frontiers/directions/ssa/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Communication & Information Network',
          link: '/en/research-frontiers/directions/communication/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Spatiotemporal Reference & Measurement',
          link: '/en/research-frontiers/directions/reference-frame/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Space Transportation System',
          link: '/en/research-frontiers/directions/transportation/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Formation Flying',
          link: '/en/research-frontiers/directions/formation-flying/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Security & Governance',
          link: '/en/research-frontiers/directions/security-governance/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Infrastructure & Economy',
          link: '/en/research-frontiers/directions/infrastructure/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Simulation Systems',
          link: '/en/research-frontiers/directions/simulation/',
          collapsible: true,
          children: [],
        },
      ],
    },
    {
      text: 'Research institutions',
      link: '/en/research-frontiers/institutions/',
      collapsible: true,
      children: [
        '/en/research-frontiers/institutions/hit',
      ],
    },
    '/en/research-frontiers/journals-conferences',
    '/en/research-frontiers/major-projects',
  ],
}
```

- [ ] **Step 4: Commit**

```bash
git add web/en/research-frontiers/directions/ web/.vuepress/sidebar-en.ts
git commit -m "refactor(research): add English direction mirrors and update EN sidebar"
```

---

### Task 6: Create AI Skill for research frontiers content management

**Files:**
- Create: `scripts/research-frontiers-publish/SKILL.md`
- Create: `scripts/research-frontiers-publish/templates/direction-index.md`
- Create: `scripts/research-frontiers-publish/templates/subtopic.md`
- Create: `scripts/research-frontiers-publish/templates/institution.md`

- [ ] **Step 1: Create SKILL.md**

Create `scripts/research-frontiers-publish/SKILL.md` with the following content:

```markdown
---
name: research-frontiers-publish
description: >-
  Manages cislunar space research frontiers content: creates new direction
  subtopic pages, institution pages, checks content consistency, and batch
  imports from paper lists. Use when the user asks to add research directions,
  add institutions, check research content, or import papers into the
  研究前沿 / research-frontiers section.
---

# 研究前沿内容管理

面向仓库 `web/research-frontiers/` 下的 **研究前沿** 栏目：智能体应**先分类、再创建、后校验**，确保中英文结构同步。

## 站点约定（必须遵守）

| 项目 | 规则 |
|------|------|
| 中文方向 | `web/research-frontiers/directions/<direction>/` |
| 英文方向 | `web/en/research-frontiers/directions/<direction>/`（同目录名） |
| 方向索引 | 每个方向目录下必须有 `README.md` 作为索引页 |
| 子方向 | 方向目录下的 `<slug>.md` 文件 |
| 排除 | 各层 **`README.md`** 仅为索引页，不算子方向内容 |
| 布局 | 研究前沿页面使用默认布局（无需指定 layout） |
| 配图 | 放在方向目录下的 `figures/` 子目录 |
| 模板 | 模板文件在 `scripts/research-frontiers-publish/templates/` |

## 研究方向分类（封闭枚举）

| # | 目录名 | 中文名称 | 英文名称 |
|---|--------|---------|---------|
| 1 | `orbit-design` | 轨道设计与优化 | Orbit Design & Optimization |
| 2 | `navigation` | 导航与定轨 | Navigation & Orbit Determination |
| 3 | `ssa` | 空间态势感知 | Space Situational Awareness |
| 4 | `communication` | 通信与信息网络 | Communication & Information Network |
| 5 | `reference-frame` | 时空基准与测量 | Spatiotemporal Reference & Measurement |
| 6 | `transportation` | 航天运输体系 | Space Transportation System |
| 7 | `formation-flying` | 编队飞行 | Formation Flying |
| 8 | `security-governance` | 安全与治理 | Security & Governance |
| 9 | `infrastructure` | 基础设施与经济 | Infrastructure & Economy |
| 10 | `simulation` | 仿真系统 | Simulation Systems |

**禁止新建上述 10 个以外的方向目录。** 如需新增方向，必须先修改此表和 sidebar 配置。

## 工作流一：新增子方向

```
[1] 识别目标方向（从 10 个方向中匹配）
 ↓
[2] 去重检查（grep 现有文件，确认无同主题页面）
 ↓
[3] 复制子方向模板，填入内容
 ↓
[4] 更新方向 README.md 的子方向导航表
 ↓
[5] 更新 sidebar.ts（中文，在对应方向的 children 中添加条目）
 ↓
[6] 更新 sidebar-en.ts（英文，同步添加）
 ↓
[7] 英文侧创建 placeholder 页面（如有需要）
 ↓
[8] 构建验证（npm run docs:build）
```

### 子方向页面 frontmatter

```yaml
---
title: {子方向中文名称}
description: {一句话描述}
tags: [tag1, tag2]
---
```

### 子方向页面正文结构

```markdown
# {子方向中文名称}

## 概述

{定义和研究范畴}

## 研究现状

{国内外研究进展}

## 关键技术

{核心技术挑战}

## 发展趋势

{未来方向}

## 参考文献

- [1] ...
```

## 工作流二：新增机构

```
[1] 去重检查（确认机构未收录）
 ↓
[2] 复制机构模板，填入内容
 ↓
[3] 更新 institutions/README.md
 ↓
[4] 更新 sidebar.ts（在 institutions children 中添加）
 ↓
[5] 更新 sidebar-en.ts（同步添加）
 ↓
[6] 英文侧创建 placeholder
 ↓
[7] 构建验证
```

## 工作流三：内容检查

```
[1] 扫描所有方向目录，确认 README.md 存在
 ↓
[2] 检查 sidebar.ts 条目与实际文件是否匹配
 ↓
[3] 验证 frontmatter 字段（title, description）
 ↓
[4] 检查内部链接有效性
 ↓
[5] 报告缺失的英文对应页面
 ↓
[6] 输出检查报告
```

## 工作流四：批量导入

```
[1] 解析论文列表（标题 → 方向分类）
 ↓
[2] 去重检查
 ↓
[3] 按方向分组，批量创建子方向页面
 ↓
[4] 批量更新方向 README.md 子方向导航表
 ↓
[5] 批量更新 sidebar.ts + sidebar-en.ts
 ↓
[6] 批量创建英文 placeholder
 ↓
[7] 构建验证
```

## 质量规则

- 每个方向必须有 README.md 索引页
- 子方向页面必须有 `title` 和 `description` frontmatter
- 英文 placeholder 必须有英文 `title` 和 `description`
- 同一方向内不得有重复主题
- 所有 sidebar 条目必须指向存在的文件
- 每次变更后必须通过构建验证

## 相关代码

| 文件 | 用途 |
|------|------|
| `web/.vuepress/sidebar.ts` | 中文侧边栏配置 |
| `web/.vuepress/sidebar-en.ts` | 英文侧边栏配置 |
| `web/.vuepress/sidebar-shared.ts` | 共享导览组 |
| `web/.vuepress/gen-sidebar.js` | 自动生成 sidebar.auto.json |
```

- [ ] **Step 2: Create template files in scripts/**

Copy the same template content from Task 3 Step 2-4 into `scripts/research-frontiers-publish/templates/`:

**scripts/research-frontiers-publish/templates/direction-index.md:**
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

**scripts/research-frontiers-publish/templates/subtopic.md:**
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

**scripts/research-frontiers-publish/templates/institution.md:**
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

- [ ] **Step 3: Commit**

```bash
git add scripts/research-frontiers-publish/
git commit -m "feat(skill): add research-frontiers-publish AI skill for content management"
```

---

### Task 7: Build verification

**Files:** None (verification only)

- [ ] **Step 1: Run full build**

```bash
cd web && npm run docs:build
```

Expected: Build completes without errors.

- [ ] **Step 2: Verify sidebar renders correctly**

Check that:
- All 10 directions appear in the sidebar
- Existing pages (strategy, low-energy-transfer, etc.) are accessible at new URLs
- English placeholders render

- [ ] **Step 3: Check for broken links**

```bash
# Verify all sidebar entries point to existing files
grep -r "research-frontiers/directions" web/.vuepress/sidebar.ts | while read line; do
  path=$(echo "$line" | grep -oP "'[^']+'" | head -1 | tr -d "'" | sed 's|^/||')
  if [ ! -f "web/${path}.md" ] && [ ! -f "web/${path}/README.md" ]; then
    echo "MISSING: web/${path}"
  fi
done
```

Expected: No MISSING entries.

- [ ] **Step 4: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix(research): resolve build issues from restructuring"
```

---

## Verification Checklist

After all tasks complete:
- [ ] `npm run docs:build` passes
- [ ] All 10 directions visible in Chinese sidebar
- [ ] All 10 directions visible in English sidebar
- [ ] Existing pages accessible at new URLs
- [ ] English placeholders render correctly
- [ ] No broken internal links
- [ ] Templates exist in both `directions/_templates/` and `scripts/research-frontiers-publish/templates/`
- [ ] SKILL.md exists and is well-formed
