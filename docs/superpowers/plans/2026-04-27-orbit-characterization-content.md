# Orbit Characterization Content Enhancement Plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand orbit-design research direction pages with detailed content from Qiao et al. (2025) papers and add navigation links.

**Architecture:** Content-only changes to existing markdown files. No code changes. Chinese content first, then English mirrors.

---

### Task 1: Expand orbit-characterization.md (Chinese)

**Files:**
- Modify: `web/research-frontiers/directions/orbit-design/orbit-characterization.md`

- [ ] **Step 1: Add structured content sections**

Add between the existing header block and "相关文献" section:

```markdown
## 研究背景

地月空间平动点轨道的参数表征是空间态势感知和轨道编目的基础性问题。与近地轨道不同，平动点轨道受三体动力学支配，传统的开普勒轨道根数不再适用，需要发展新的参数化方法。

现有研究面临两个核心挑战：一是如何在圆型限制性三体问题（CRTBP）框架下建立轨道的标准化描述；二是如何将CRTBP的结果推广到真实历表模型（如DE430），以支持实际观测数据的处理。

## 关键技术

### 基于正则变换的轨道参数化

针对共线平动点（L1、L2、L3）附近的轨道，采用正则变换方法将CRTBP的运动方程转化为可积形式。通过求解生成函数，将原始的6维相空间坐标变换为作用量-角变量 $(q_1, p_1, I_2, \theta_2, I_3, \theta_3)$：

- $(q_1, p_1)$ 描述沿共线方向的大幅运动（如Halo轨道的垂直分量）
- $(I_2, \theta_2)$ 描述平面内的准周期运动
- $(I_3, \theta_3)$ 描述垂直方向的准周期运动

这6个特征参数构成了轨道的"指纹"，可以唯一标识一类轨道族。通过构建庞加莱截面分布图，可以直观展示不同轨道族在参数空间中的分布规律，为目标编目提供依据。

### 动力学替代模型

真实地月系统的历表模型（如DE430）包含太阳摄动、行星摄动等复杂因素，无法直接进行解析处理。动力学替代模型的目标是在CRTBP基础上，通过哈密顿分析方法构建一个等效的简化模型，保留真实系统的关键动力学特征。

具体方法包括：
1. **哈密顿建模**：将历表模型的运动方程写成哈密顿形式
2. **正则变换分离**：通过正则变换将运动分解为受迫运动（由太阳等大天体引起）和自由运动（轨道本身的固有运动）
3. **频率分析迭代**：采用迭代频率分析方法提取系统的特征频率，构建解析表达式

该方法已成功应用于全部5个平动点的动力学替代计算，覆盖360年的时间跨度，为长期轨道预报和编目维护提供了高效的计算工具。

### 轨道编目与识别

基于上述参数化方法，建立了轨道编目与识别流程：

1. **分布图构建**：在庞加莱截面上绘制不同轨道族的特征参数分布，形成"轨道地图"
2. **轨道识别**：给定观测数据，通过贝叶斯优化方法在参数空间中搜索最匹配的轨道族
3. **鲁棒性验证**：敏感性分析表明，该方法对初始位置误差（~100km）和速度误差（~1m/s）具有良好的鲁棒性

## 主要贡献

1. 提出了基于正则变换的共线平动点轨道参数化方法，用6个特征参数实现轨道族的标准化描述
2. 发展了基于哈密顿分析的动力学替代模型计算方法，适用于全部5个平动点
3. 建立了基于庞加莱截面和贝叶斯优化的轨道编目与识别框架
4. 验证了方法对观测误差的鲁棒性，为实际应用奠定了基础
```

- [ ] **Step 2: Add navigation footer**

Append after the references section:

```markdown
---

**相关链接**
- ↑ [轨道设计与优化](./README.md) — 返回方向首页
- ↔ [低能转移轨道](./low-energy-transfer.md) — 相关子方向
```

- [ ] **Step 3: Commit**

```bash
git add web/research-frontiers/directions/orbit-design/orbit-characterization.md
git commit -m "feat(research): expand orbit-characterization with detailed content"
```

---

### Task 2: Expand low-energy-transfer.md (Chinese)

**Files:**
- Modify: `web/research-frontiers/directions/orbit-design/low-energy-transfer.md`

- [ ] **Step 1: Add structured content sections**

Add between the existing header block and "相关文献" section:

```markdown
## 研究背景

低能转移轨道是地月空间任务的关键使能技术之一。传统的Hohmann转移需要较大的速度增量（Δv约3.2 km/s），而利用三体动力学中的不变流形结构，可以实现显著的燃料节省。

低能转移的核心思想是利用平动点附近的动力学特性：在CRTBP框架下，平动点（尤其是L1和L2）周围存在一族周期/准周期轨道（如Halo轨道、Lissajous轨道），这些轨道的稳定/不稳定流形构成了相空间中的"管道"，可以自然连接不同的区域。

## 关键技术

### 不变流形与转移轨道设计

- **稳定流形**：沿稳定流形运动的轨道会自然趋近目标轨道
- **不稳定流形**：沿不稳定流形运动的轨道会自然离开当前轨道
- **流形拼接**：通过拼接出发轨道的不稳定流形和到达轨道的稳定流形，可以设计低能转移轨道

### Lissajous中转站方案

利用Lissajous轨道作为中转站，可以实现更灵活的轨道设计：
- Lissajous轨道是准周期轨道，相比Halo轨道具有更大的振幅范围
- 通过Lissajous轨道的流形网络，可以覆盖更广的转移需求
- 适用于地月L1/L2点的空间站、通信中继等任务场景

### 轨道优化方法

低能转移轨道的设计通常涉及多目标优化问题：
- 最小化总速度增量（Δv）
- 最小化转移时间
- 满足发射窗口约束
- 考虑轨道保持需求

常用方法包括打靶法、微分进化算法、多目标遗传算法等。
```

- [ ] **Step 2: Add navigation footer**

Append after the references section:

```markdown
---

**相关链接**
- ↑ [轨道设计与优化](./README.md) — 返回方向首页
- ↔ [轨道参数表征](./orbit-characterization.md) — 相关子方向
```

- [ ] **Step 3: Commit**

```bash
git add web/research-frontiers/directions/orbit-design/low-energy-transfer.md
git commit -m "feat(research): expand low-energy-transfer with structured content"
```

---

### Task 3: Update orbit-design/README.md (Chinese)

**Files:**
- Modify: `web/research-frontiers/directions/orbit-design/README.md`

- [ ] **Step 1: Expand research background and navigation table**

Replace the entire content after frontmatter with:

```markdown
# 轨道设计与优化

## 研究背景

轨道设计是地月空间任务的核心技术之一，涵盖从近地轨道到月球轨道的各类转移、驻留和返回轨道的设计与优化。与近地轨道不同，地月空间轨道受三体动力学（地球、月球、太阳）的显著影响，传统的开普勒轨道根数不再完全适用，需要发展新的设计方法和优化技术。

地月空间轨道设计的主要研究方向包括：利用三体动力学特性的低能转移轨道、平动点轨道的参数化描述与分类、特定轨道族（如DRO、NRHO）的设计与应用、以及面向实际任务的轨道优化算法。

## 研究内容

- 低能转移轨道设计与优化
- 平动点轨道参数表征与编目
- DRO/NRHO 等特定轨道族设计
- 轨道优化算法与多目标优化
- 轨道保持与维持策略

## 子方向导航

| 子方向 | 简介 |
|--------|------|
| [低能转移轨道](./low-energy-transfer.md) | 利用三体动力学不变流形实现低能耗的地月转移轨道设计，包括Halo/Lissajous轨道中转方案 |
| [轨道参数表征](./orbit-characterization.md) | 基于正则变换的平动点轨道参数化方法、动力学替代模型与轨道编目识别框架 |

> **待扩展**：DRO/NRHO轨道族设计、轨道优化算法等子方向将持续添加。
```

- [ ] **Step 2: Commit**

```bash
git add web/research-frontiers/directions/orbit-design/README.md
git commit -m "feat(research): expand orbit-design README with detailed background"
```

---

### Task 4: Create English mirror files

**Files:**
- Create: `web/en/research-frontiers/directions/orbit-design/orbit-characterization.md`
- Create: `web/en/research-frontiers/directions/orbit-design/low-energy-transfer.md`

- [ ] **Step 1: Create orbit-characterization.md (English)**

```markdown
---
title: Orbit Parameter Characterization for Cislunar Space
description: Representative works on orbit parameterization, object cataloging, and dynamical substitute models for cislunar libration points
keywords: cislunar orbit parameterization, libration point orbits, object cataloging, dynamical substitute, Hamiltonian analysis
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/orbit-characterization/
---

# Orbit Parameter Characterization for Cislunar Space

## Background

Orbit parameter characterization is a fundamental problem for space situational awareness and orbit cataloging in cislunar space. Unlike near-Earth orbits, libration point orbits are governed by three-body dynamics, rendering traditional Keplerian orbital elements inapplicable. New parameterization methods are needed.

Two core challenges exist: (1) establishing standardized orbit descriptions within the Circular Restricted Three-Body Problem (CRTBP) framework; and (2) extending CRTBP results to real ephemeris models (e.g., DE430) to support actual observation data processing.

## Key Techniques

### Canonical Transformation-Based Orbit Parameterization

For orbits near collinear libration points (L1, L2, L3), canonical transformations convert the CRTBP equations of motion into integrable form. Through generating functions, the 6-dimensional phase space coordinates are transformed into action-angle variables $(q_1, p_1, I_2, \theta_2, I_3, \theta_3)$:

- $(q_1, p_1)$ describe large-amplitude motion along the collinear direction (e.g., vertical component of Halo orbits)
- $(I_2, \theta_2)$ describe in-plane quasi-periodic motion
- $(I_3, \theta_3)$ describe vertical quasi-periodic motion

These 6 characteristic parameters form an orbit's "fingerprint," uniquely identifying an orbit family. Poincaré section distribution maps provide visual representation of orbit family distributions in parameter space.

### Dynamical Substitute Models

The real Earth-Moon system's ephemeris model (e.g., DE430) includes solar perturbations, planetary perturbations, and other complex factors that cannot be directly analyzed. Dynamical substitute models aim to construct an equivalent simplified model based on CRTBP through Hamiltonian analysis, preserving key dynamical characteristics.

The approach involves:
1. **Hamiltonian formulation** of the ephemeris model
2. **Canonical transformation** to separate forced motion (caused by the Sun and other major bodies) from free motion (intrinsic orbit motion)
3. **Iterative frequency analysis** to extract characteristic frequencies and construct analytical expressions

This method has been successfully applied to all 5 libration points over a 360-year timespan, providing efficient computation tools for long-term orbit prediction and catalog maintenance.

### Orbit Cataloging and Identification

Based on the parameterization methods above, an orbit cataloging and identification workflow has been established:

1. **Distribution mapping**: Plotting characteristic parameter distributions of different orbit families on Poincaré sections
2. **Orbit identification**: Given observation data, Bayesian optimization searches the parameter space for the best-matching orbit family
3. **Robustness validation**: Sensitivity analysis shows robustness to position errors (~100 km) and velocity errors (~1 m/s)

## Key Contributions

1. Proposed canonical transformation-based parameterization for collinear libration point orbits using 6 characteristic parameters
2. Developed Hamiltonian analysis-based dynamical substitute model computation for all 5 libration points
3. Established orbit cataloging and identification framework based on Poincaré sections and Bayesian optimization
4. Validated method robustness against observation errors, laying foundation for practical applications

## References

[1] Qiao C, Long X, Yang L, et al. Calculation of a dynamical substitute for the real earth–moon system based on hamiltonian analysis[J]. Astrophysical Journal, 2025, 991(1): 46-59.

[2] Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025: 103869-103896.

[3] Yang L, Qiao C, Long X, et al. A method for orbit parameter characterization of Earth-Moon collinear libration points[P].

---

**Related Links**
- ↑ [Orbit Design & Optimization](./README.md) — Back to direction homepage
- ↔ [Low-Energy Transfer Orbits](./low-energy-transfer.md) — Related subtopic
```

- [ ] **Step 2: Create low-energy-transfer.md (English)**

```markdown
---
title: Low-Energy Transfer Orbits for Cislunar Space
description: Representative works on low-energy transfer orbit design and applications for cislunar missions
keywords: cislunar low-energy transfer, Halo orbits, Lissajous orbits, orbit design
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/low-energy-transfer/
---

# Low-Energy Transfer Orbits for Cislunar Space

## Background

Low-energy transfer orbits are a key enabling technology for cislunar missions. Traditional Hohmann transfers require large velocity increments (Δv ~3.2 km/s), while leveraging invariant manifold structures in three-body dynamics can achieve significant fuel savings.

The core idea is to utilize dynamical properties near libration points: within the CRTBP framework, periodic/quasi-periodic orbits (such as Halo and Lissajous orbits) exist around libration points (especially L1 and L2), and their stable/unstable manifolds form "tubes" in phase space that naturally connect different regions.

## Key Techniques

### Invariant Manifolds and Transfer Orbit Design

- **Stable manifolds**: Orbits along stable manifolds naturally approach the target orbit
- **Unstable manifolds**: Orbits along unstable manifolds naturally depart from the current orbit
- **Manifold matching**: By connecting the unstable manifold of the departure orbit with the stable manifold of the arrival orbit, low-energy transfers can be designed

### Lissajous Relay Station Scheme

Using Lissajous orbits as relay stations enables more flexible orbit design:
- Lissajous orbits are quasi-periodic with larger amplitude ranges than Halo orbits
- The manifold network of Lissajous orbits covers broader transfer requirements
- Applicable to L1/L2 space stations, communication relays, and other mission scenarios

### Orbit Optimization Methods

Low-energy transfer design typically involves multi-objective optimization:
- Minimize total velocity increment (Δv)
- Minimize transfer time
- Satisfy launch window constraints
- Account for orbit maintenance requirements

Common methods include shooting methods, differential evolution algorithms, and multi-objective genetic algorithms.

## References

[1] Qiao C, Yang L. Low-energy transfer orbit design and optimization for Earth-Moon L1 point[J]. Systems Engineering and Electronics, 2024, 46(10): 3519-3527.

[2] Yu H, Dai H, Zhang J, et al. Low-energy transfer orbit design and applications based on Lissajous relay stations[J]. Journal of Northwestern Polytechnical University, 2025, 43(2): 212-221.

---

**Related Links**
- ↑ [Orbit Design & Optimization](./README.md) — Back to direction homepage
- ↔ [Orbit Parameter Characterization](./orbit-characterization.md) — Related subtopic
```

- [ ] **Step 3: Commit**

```bash
git add web/en/research-frontiers/directions/orbit-design/
git commit -m "feat(research): add English mirror content for orbit-design subtopics"
```

---

### Task 5: Update English sidebar and README

**Files:**
- Modify: `web/.vuepress/sidebar-en.ts` (lines 70-74)
- Modify: `web/en/research-frontiers/directions/orbit-design/README.md`

- [ ] **Step 1: Update sidebar-en.ts**

Change the orbit-design entry from:

```typescript
{
  text: 'Orbit Design & Optimization',
  link: '/en/research-frontiers/directions/orbit-design/',
  collapsible: true,
  children: [],
},
```

To:

```typescript
{
  text: 'Orbit Design & Optimization',
  link: '/en/research-frontiers/directions/orbit-design/',
  collapsible: true,
  children: [
    '/en/research-frontiers/directions/orbit-design/low-energy-transfer',
    '/en/research-frontiers/directions/orbit-design/orbit-characterization',
  ],
},
```

- [ ] **Step 2: Update English orbit-design README**

Replace content after frontmatter with:

```markdown
# Orbit Design & Optimization

## Background

Orbit design is a core technology for cislunar missions, covering transfer, stationkeeping, and return orbits. Unlike near-Earth orbits, cislunar orbits are significantly influenced by three-body dynamics (Earth, Moon, Sun), requiring new design methods and optimization techniques.

## Research Areas

- Low-energy transfer orbit design and optimization
- Libration point orbit parameterization and cataloging
- DRO/NRHO orbit family design
- Orbit optimization algorithms and multi-objective optimization
- Orbit keeping and maintenance strategies

## Subtopics

| Subtopic | Description |
|----------|-------------|
| [Low-Energy Transfer Orbits](./low-energy-transfer.md) | Low-energy cislunar transfer design using invariant manifolds, including Halo/Lissajous relay schemes |
| [Orbit Parameter Characterization](./orbit-characterization.md) | Canonical transformation-based parameterization, dynamical substitute models, and orbit cataloging framework |

> **Coming soon**: DRO/NRHO orbit families, orbit optimization algorithms, and more.
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/sidebar-en.ts web/en/research-frontiers/directions/orbit-design/README.md
git commit -m "feat(research): update English sidebar and README for orbit-design"
```

---

### Task 6: Build Verification

- [ ] **Step 1: Run full build**

```bash
npm run docs:build
```

Expected: Build succeeds with no broken links or missing files.

- [ ] **Step 2: Verify page structure**

Check that the following pages render correctly:
- `/research-frontiers/directions/orbit-design/`
- `/research-frontiers/directions/orbit-design/orbit-characterization/`
- `/research-frontiers/directions/orbit-design/low-energy-transfer/`
- `/en/research-frontiers/directions/orbit-design/`
- `/en/research-frontiers/directions/orbit-design/orbit-characterization/`
- `/en/research-frontiers/directions/orbit-design/low-energy-transfer/`

- [ ] **Step 3: Final commit (if needed)**

No additional commits expected unless build reveals issues.
