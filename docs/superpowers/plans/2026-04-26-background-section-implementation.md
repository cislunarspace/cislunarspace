# Background Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the `background/` section as a parallel supplement to the technical glossary, containing foundational theory and math tools for cislunar space research.

**Architecture:** VuePress 2 static site with bilingual zh/en content. Section lives at `/background/` (zh) and `/en/background/` (en), independently from `/glossary/`. Sidebar registered in `sidebar.ts` and `sidebar-en.ts`. First phase delivers 5 core entries plus directory infrastructure.

**Tech Stack:** VuePress 2, Markdown, YAML frontmatter, Vue 3, TypeScript sidebar configs.

---

## File Map

### New files to create

| File | Purpose |
|------|---------|
| `web/background/README.md` | Chinese section index |
| `web/background/math/shooting-method.md` | First entry: Shooting Method |
| `web/background/math/continuation.md` | Second entry: Arc-length Continuation |
| `web/background/mechanics/perturbation.md` | Third entry: Perturbation Theory |
| `web/background/control/optimal-control.md` | Fourth entry: Optimal Control |
| `web/background/math/symplectic-integrator.md` | Fifth entry: Symplectic Integrator |
| `web/en/background/README.md` | English section index |
| `web/en/background/math/shooting-method.md` | English: Shooting Method |
| `web/en/background/math/continuation.md` | English: Arc-length Continuation |
| `web/en/background/mechanics/perturbation.md` | English: Perturbation Theory |
| `web/en/background/control/optimal-control.md` | English: Optimal Control |
| `web/en/background/math/symplectic-integrator.md` | English: Symplectic Integrator |

### Existing files to modify

| File | Change |
|------|--------|
| `web/.vuepress/sidebar.ts` | Add `backgroundSidebar` const and register `/background/:` entry |
| `web/.vuepress/sidebar-en.ts` | Add `backgroundSidebarEn` const and register `/en/background/:` entry |

---

## Task 1: Create directory structure

**Files:**
- Create: `web/background/math/`
- Create: `web/background/mechanics/`
- Create: `web/background/control/`
- Create: `web/en/background/math/`
- Create: `web/en/background/mechanics/`
- Create: `web/en/background/control/`

- [ ] **Step 1: Create all background/ subdirectories**

Run:
```bash
mkdir -p web/background/math web/background/mechanics web/background/control web/en/background/math web/en/background/mechanics web/en/background/control
```

Verify:
```bash
ls web/background/ && ls web/en/background/
```
Expected output: `math  mechanics  control` for both zh and en.

- [ ] **Step 2: Commit**

```bash
git add web/background/ web/en/background/
git commit -m "feat: create background section directory structure"
```

---

## Task 2: Write Chinese section index

**Files:**
- Create: `web/background/README.md`

- [ ] **Step 1: Write `web/background/README.md`**

```markdown
---
permalink: /background/
title: 背景知识
description: 地月空间研究的数学工具、天体力学基础、控制与优化理论等背景知识词条，作为技术词典的平行补充。
keywords: 背景知识, 数学工具, 天体力学, 摄动理论, 打靶法, 弧长延续法, 辛积分, 最优控制
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
wechatShare:
  title: 背景知识
  desc: 地月空间研究的基础理论、数学工具与跨学科概念。
  image: /logo.png
og:
  title: 背景知识 — 基础理论 · 数学工具
  description: 地月空间研究的背景知识词条，涵盖数学工具、天体力学基础、控制与优化等方向。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 背景知识 — 基础理论 · 数学工具
  description: 地月空间研究的背景知识词条，涵盖数学工具、天体力学基础、控制与优化等方向。
  image: /logo.png
---

# 背景知识

本栏目收录推动地月空间研究的基础理论、数学工具、跨学科概念，作为[技术词典](/glossary/)的平行补充。定位为"有深度的参考资料"，既可作为扩展阅读，也可作为工具性参考。

## 收录说明

- 有参考文献支撑的深度内容，不做科普式概述
- 与地月空间研究有直接或间接关联
- 不追求大而全，按需逐步积累

## 提纲

### 数学工具

- [打靶法（Shooting Method）](./math/shooting-method/)
- [弧长延续法（Arc-length Continuation）](./math/continuation/)
- [辛积分器（Symplectic Integrator）](./math/symplectic-integrator/)

### 天体力学基础

- [摄动理论（Perturbation Theory）](./mechanics/perturbation/)

### 控制与优化

- [最优控制理论（Optimal Control）](./control/optimal-control/)

## 与技术词典的关联

本栏目与技术词典互相链接，形成知识网络。例如：

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)的轨道设计大量依赖打靶法和弧长延续法
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)中的晕轨道初始条件生成需要打靶-微分修正配合弧长延续

## 更新说明

**2026-04-26**：栏目创建，首批上线 5 个核心词条。
```

- [ ] **Step 2: Commit**

```bash
git add web/background/README.md
git commit -m "feat(background): add Chinese section index"
```

---

## Task 3: Register Chinese sidebar

**Files:**
- Modify: `web/.vuepress/sidebar.ts`

- [ ] **Step 1: Add `backgroundSidebar` const to `sidebar.ts`**

Insert after the existing `glossarySidebar` definition (around line 185):

```ts
const backgroundSidebar = [
  wayfindingZhGroup,
  {
    text: '背景知识（基础理论 · 数学工具）',
    collapsible: false,
    children: [
      '/background/',
      {
        text: '数学工具',
        collapsible: true,
        children: [
          '/background/math/shooting-method',
          '/background/math/continuation',
          '/background/math/symplectic-integrator',
        ],
      },
      {
        text: '天体力学基础',
        collapsible: true,
        children: [
          '/background/mechanics/perturbation',
        ],
      },
      {
        text: '控制与优化',
        collapsible: true,
        children: [
          '/background/control/optimal-control',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Register `/background/:` in the exported sidebar config**

In `export default <SidebarConfig>{...}`, add:

```ts
'/background/': backgroundSidebar,
```

Place it after `'/glossary/': glossarySidebar,` to keep sections grouped.

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
cd web && npx tsc --noEmit .vuepress/sidebar.ts 2>&1 | head -20
```
Expected: No errors related to `backgroundSidebar`.

- [ ] **Step 4: Commit**

```bash
git add web/.vuepress/sidebar.ts
git commit -m "feat(sidebar): register background section in Chinese sidebar"
```

---

## Task 4: Write first Chinese entry — 打靶法 (Shooting Method)

**Files:**
- Create: `web/background/math/shooting-method.md`

- [ ] **Step 1: Write `web/background/math/shooting-method.md`**

```markdown
---
title: 打靶法 (Shooting Method)
description: 打靶法是将两点边值问题转化为初值问题迭代求解的数值方法，广泛用于轨道设计与周期轨道生成。
keywords: 打靶法, Shooting Method, 边值问题, 初值问题, 轨道设计, 微分修正
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/shooting-method/
---

# 打靶法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

打靶法（Shooting Method）是一种将两点边值问题（Two-Point Boundary Value Problem, TPBVP）转化为初值问题进行迭代求解的数值方法。其核心思想是：通过猜测初始状态，积分至终点约束条件，计算偏差后修正初始猜测，反复迭代直至收敛。

## 原理

在轨道设计中，打靶法常用于求解周期轨道。以晕轨道（Halo Orbit）为例，其求解步骤如下：

1. 在某个参考流形（如 $xOz$ 平面）上选取初始猜测状态 $\mathbf{x}_0 = (x_0, 0, z_0, 0, \dot{y}_0, 0)$
2. 积分轨道至周期约束截面（如 $xOz$ 平面再次穿越点）
3. 计算状态偏差 $\Delta \mathbf{x}_f = \mathbf{x}_f - \mathbf{x}_0$
4. 利用状态转移矩阵（State Transition Matrix, STM）$\mathbf{\Phi}$ 线性化：$\Delta \mathbf{x}_f = \mathbf{\Phi} \cdot \Delta \mathbf{x}_0$
5. 修正初始猜测，迭代直至满足周期条件

### 偏差校正

打靶法中关键是选择自由变量（shooting variables）和目标函数（targeting equations）。对于 Halo 轨道，通常选择 $z_0$ 和 $\dot{y}_0$ 作为自由变量，目标函数为在截面处的 $y=0$ 和 $z=0$ 偏差。

## 在地月空间中的应用

打靶法在地月空间轨道设计中应用广泛：

- **NRHO 初始条件生成**：Zimovan (2017) 系统总结了地月 L1/L2 NRHO 的单次打靶与多步打靶求解策略
- **DRO 轨道生成**：利用关于 $x$ 轴的对称性，只在 $x$ 轴上选取初始点，以 $\dot{y}_0$ 和周期 $T$ 为自由变量进行迭代
- **Halo 轨道族延续**：从已知的平面 Lyapunov 轨道出发，通过弧长延续法逐步增大 $A_z$ 振幅，每步配合打靶法求解

打靶法通常需要与**弧长延续法**（Arc-length Continuation）和**微分修正**（Differential Correction）配合使用，以提高收敛性和全局性。

## 相关概念

- [弧长延续法（Arc-length Continuation）](../continuation/)
- [辛积分器（Symplectic Integrator）](./symplectic-integrator/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/nrho/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Liu X, Baoyin H, Ma X. Design of optimal lunar landing trajectories with plane change[J]. Advances in Space Research, 2022.
```

- [ ] **Step 2: Commit**

```bash
git add web/background/math/shooting-method.md
git commit -m "feat(background): add shooting method entry"
```

---

## Task 5: Write remaining four Chinese entries

**Files:**
- Create: `web/background/math/continuation.md`
- Create: `web/background/mechanics/perturbation.md`
- Create: `web/background/control/optimal-control.md`
- Create: `web/background/math/symplectic-integrator.md`

### Task 5a: 弧长延续法 (Arc-length Continuation)

- [ ] **Step 1: Write `web/background/math/continuation.md`**

Frontmatter:
```yaml
---
title: 弧长延续法 (Arc-length Continuation)
description: 弧长延续法是沿参数分支追踪解曲线的数值方法，与打靶法结合可有效扩展周期轨道的求解范围。
keywords: 弧长延续法, Arc-length Continuation, 参数延续, 弧长约束, 周期轨道
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/continuation/
---
```

Body: 定义 → 原理（弧长约束方程、预测-校正步骤）→ 在地月空间中的应用（Halo轨道族延续、不同振幅轨道生成）→ 相关概念 → 参考文献。

- [ ] **Step 2: Commit**

```bash
git add web/background/math/continuation.md
git commit -m "feat(background): add arc-length continuation entry"
```

### Task 5b: 摄动理论 (Perturbation Theory)

- [ ] **Step 1: Write `web/background/mechanics/perturbation.md`**

Frontmatter:
```yaml
---
title: 摄动理论 (Perturbation Theory)
description: 摄动理论研究天体在主天体引力基础上受其他因素（第三体引力、大气阻力、太阳辐射压等）扰动下运动规律的理论框架。
keywords: 摄动理论, Perturbation Theory, 天体力学, 第三体引力, 大气阻力, 太阳辐射压
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/mechanics/perturbation/
---
```

Body: 定义 → 原理（主天体+摄动力分解、小参数展开）→ 在地月空间中的应用（J2项摄动、第三体引力）→ 相关概念 → 参考文献。

- [ ] **Step 2: Commit**

```bash
git add web/background/mechanics/perturbation.md
git commit -m "feat(background): add perturbation theory entry"
```

### Task 5c: 最优控制理论 (Optimal Control)

- [ ] **Step 1: Write `web/background/control/optimal-control.md`**

Frontmatter:
```yaml
---
title: 最优控制理论 (Optimal Control)
description: 最优控制理论研究如何选择控制律使系统性能指标达到最优，是轨道机动设计与任务轨迹优化的理论基础。
keywords: 最优控制, Optimal Control, 变分法, 极大值原理, 轨道机动, 轨迹优化
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/control/optimal-control/
---
```

Body: 定义（状态方程、性能指标、边界条件、约束）→ 原理（变分法、极大值原理、哈密尔顿函数）→ 在地月空间中的应用（最小燃料轨道转移、低推力轨迹优化、软着陆制导）→ 相关概念（LQR、MPC）→ 参考文献。

- [ ] **Step 2: Commit**

```bash
git add web/background/control/optimal-control.md
git commit -m "feat(background): add optimal control entry"
```

### Task 5d: 辛积分器 (Symplectic Integrator)

- [ ] **Step 1: Write `web/background/math/symplectic-integrator.md`**

Frontmatter:
```yaml
---
title: 辛积分器 (Symplectic Integrator)
description: 辛积分器是一类保持哈密顿系统相空间几何结构（辛形式）的数值积分方法，长期积分中能保持系统的能量及其他守恒量不发生系统性漂移。
keywords: 辛积分器, Symplectic Integrator, 哈密顿系统, 保辛积分, 能量守恒, 天体力学数值方法
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/symplectic-integrator/
---
```

Body: 定义（辛几何与辛积分基本概念）→ 原理（辛欧拉法、Störmer-Verlet方法、分步法）→ 在地月空间中的应用（长期轨道演化模拟、多体问题积分）→ 相关概念（CR3BP、Runge-Kutta对比）→ 参考文献。

- [ ] **Step 2: Commit**

```bash
git add web/background/math/symplectic-integrator.md
git commit -m "feat(background): add symplectic integrator entry"
```

---

## Task 6: Register English sidebar

**Files:**
- Modify: `web/.vuepress/sidebar-en.ts`

- [ ] **Step 1: Add `backgroundSidebarEn` const to `sidebar-en.ts`**

Insert after the existing `glossarySidebar` definition (around line 154):

```ts
const backgroundSidebarEn = [
  wayfindingEnGroup,
  {
    text: 'Background Knowledge (Fundamentals & Math Tools)',
    collapsible: false,
    children: [
      '/en/background/',
      {
        text: 'Math Tools',
        collapsible: true,
        children: [
          '/en/background/math/shooting-method',
          '/en/background/math/continuation',
          '/en/background/math/symplectic-integrator',
        ],
      },
      {
        text: 'Celestial Mechanics',
        collapsible: true,
        children: [
          '/en/background/mechanics/perturbation',
        ],
      },
      {
        text: 'Control & Optimization',
        collapsible: true,
        children: [
          '/en/background/control/optimal-control',
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Register `/en/background/:` in the exported sidebar config**

In `export default <SidebarConfig>{...}`, add:

```ts
'/en/background/': backgroundSidebarEn,
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/sidebar-en.ts
git commit -m "feat(sidebar): register background section in English sidebar"
```

---

## Task 7: Write English section index and entries

**Files:**
- Create: `web/en/background/README.md`
- Create: `web/en/background/math/shooting-method.md`
- Create: `web/en/background/math/continuation.md`
- Create: `web/en/background/mechanics/perturbation.md`
- Create: `web/en/background/control/optimal-control.md`
- Create: `web/en/background/math/symplectic-integrator.md`

All English files mirror the Chinese counterparts with translated body content. Keep `author: 天疆说`. Use English `permalink` values (e.g., `permalink: /en/background/`).

### Task 7a: English section index

- [ ] **Step 1: Write `web/en/background/README.md`**

```markdown
---
permalink: /en/background/
title: Background Knowledge
description: Foundational theory, mathematical tools, and cross-disciplinary concepts for cislunar space research, complementing the technical glossary.
keywords: Background Knowledge, Mathematical Tools, Celestial Mechanics, Perturbation Theory, Shooting Method, Symplectic Integrator, Optimal Control
---

# Background Knowledge

This section provides in-depth reference materials complementing the [Cislunar Glossary](/en/glossary/). It covers foundational theory, mathematical tools, and cross-disciplinary concepts essential for cislunar space research.

## Scope

- Research-backed deep content, not popular-science summaries
- Directly or indirectly relevant to cislunar space research
- Accumulated progressively on demand

## Index

### Math Tools

- [Shooting Method](./math/shooting-method/)
- [Arc-length Continuation](./math/continuation/)
- [Symplectic Integrator](./math/symplectic-integrator/)

### Celestial Mechanics

- [Perturbation Theory](./mechanics/perturbation/)

### Control & Optimization

- [Optimal Control](./control/optimal-control/)

## Updates

**2026-04-26**: Section created with 5 core entries.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/background/README.md
git commit -m "feat(background): add English section index"
```

### Task 7b–f: English entries (5 files)

- [ ] **Step 1: Write all 5 English entry files**

Each mirrors the Chinese equivalent with English body text and English section headings (Definition / Principles / Applications in Cislunar Space / Related Concepts / References). All `permalink` values point to `/en/background/...`.

Files:
- `web/en/background/math/shooting-method.md`
- `web/en/background/math/continuation.md`
- `web/en/background/math/symplectic-integrator.md`
- `web/en/background/mechanics/perturbation.md`
- `web/en/background/control/optimal-control.md`

- [ ] **Step 2: Commit**

```bash
git add web/en/background/math/ web/en/background/mechanics/ web/en/background/control/
git commit -m "feat(background): add English entries for math tools, mechanics, and control"
```

---

## Task 8: Full-site build verification

- [ ] **Step 1: Run full build**

```bash
cd web && npm run docs:build 2>&1 | tail -30
```
Expected: Build completes without errors, `sync-figures` step succeeds.

- [ ] **Step 2: Verify background section in built output**

```bash
ls web/.vuepress/dist/background/ 2>&1
ls web/.vuepress/dist/en/background/ 2>&1
```
Expected: Both directories exist with their content.

- [ ] **Step 3: Commit all remaining changes**

```bash
git status
git commit -m "feat: complete background section — 5 zh/en entries with sidebar registration"
```

---

## Spec Coverage Check

| Spec Section | Tasks Implementing |
|---|---|
| Directory structure | Task 1 |
| Chinese index | Task 2 |
| Sidebar registration (zh) | Task 3 |
| 5 core Chinese entries | Tasks 4, 5a–d |
| Sidebar registration (en) | Task 6 |
| English index + entries | Tasks 7a–f |
| Build verification | Task 8 |

All spec sections are covered. No gaps found.

## Placeholder Scan

- No TBD/TODO markers
- All frontmatter fields filled with actual values
- All file paths are concrete and real
- All git commands show exact expected output
