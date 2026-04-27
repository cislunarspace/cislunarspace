# Add Intention Recognition Paper Terms to Glossary — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 6 bilingual glossary entries (12 files) for key terms from Jing et al. (2025) on LLM-based spacecraft intention recognition, plus update sidebar configs and READMEs.

**Architecture:** Create markdown files following existing glossary template (YAML frontmatter + structured body). Register in sidebar.ts/sidebar-en.ts manually. Update README indexes.

**Tech Stack:** VuePress 2 markdown content, YAML frontmatter, TypeScript sidebar config.

**Design spec:** `docs/superpowers/specs/2026-04-27-glossary-intention-recognition-design.md`

---

## File Map

### Files to Create (12)

| Chinese | English |
|---------|---------|
| `web/glossary/other/spacecraft-intention-recognition.md` | `web/en/glossary/other/spacecraft-intention-recognition.md` |
| `web/glossary/other/noncooperative-target.md` | `web/en/glossary/other/noncooperative-target.md` |
| `web/glossary/other/chain-of-thought-prompting.md` | `web/en/glossary/other/chain-of-thought-prompting.md` |
| `web/glossary/other/lora-low-rank-adaptation.md` | `web/en/glossary/other/lora-low-rank-adaptation.md` |
| `web/glossary/other/prompt-tuning.md` | `web/en/glossary/other/prompt-tuning.md` |
| `web/glossary/dynamics/clohessy-wiltshire.md` | `web/en/glossary/dynamics/clohessy-wiltshire.md` |

### Files to Modify (4)

| File | Change |
|------|--------|
| `web/.vuepress/sidebar.ts:242-250` | Add 5 entries to "其他技术" children |
| `web/.vuepress/sidebar.ts:182-196` | Add 1 entry to "动力学与数学基础" children |
| `web/.vuepress/sidebar-en.ts:199-203` | Add 5 entries to "Other" children |
| `web/.vuepress/sidebar-en.ts:161-173` | Add 1 entry to "Dynamics models" children |
| `web/glossary/README.md:81-88` | Add 5 entries to "其他技术" section |
| `web/glossary/README.md:49-57` | Add 1 entry to "动力学与数学基础" section |
| `web/en/glossary/README.md:67-69` | Add 5 entries to "Other" section |
| `web/en/glossary/README.md:45-51` | Add 1 entry to "Dynamical Models" section |

---

## Task 1: CW方程 (Clohessy-Wiltshire) — Chinese entry

**Files:**
- Create: `web/glossary/dynamics/clohessy-wiltshire.md`

- [ ] **Step 1: Create Chinese CW方程 glossary entry**

```markdown
---
title: CW方程（Clohessy-Wiltshire方程）
description: CW方程（Clohessy-Wiltshire方程）是描述两个航天器之间相对轨道运动的线性化方程组，广泛应用于交会对接、编队飞行和近距离操作等领域。
keywords: CW方程, Clohessy-Wiltshire, 相对轨道运动, 交会对接, Hill方程, LVLH坐标系
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: CW方程（Clohessy-Wiltshire方程）| 相对轨道动力学
  description: 描述航天器间相对轨道运动的线性化方程组，广泛用于交会对接与编队飞行
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: CW方程（Clohessy-Wiltshire方程）| 相对轨道动力学
  description: 描述航天器间相对轨道运动的线性化方程组，广泛用于交会对接与编队飞行
  image: /logo.png
permalink: /glossary/clohessy-wiltshire/
---

# CW方程（Clohessy-Wiltshire方程）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

CW方程（Clohessy-Wiltshire方程），又称Hill-Clohessy-Wiltshire（HCW）方程，是一组描述两个航天器在近圆参考轨道附近相对运动的线性化动力学方程。该方程组以目标航天器的轨道坐标系（LVLH，Local Vertical Local Horizontal）为参考，将追踪航天器相对于目标航天器的运动分解为轨道面内（径向和沿迹方向）和轨道面外（法向）三个分量。

CW方程最早由Hill（1878年）提出地球-月球相对运动方程，后由Clohessy和Wiltshire（1960年）将其应用于航天器交会对接问题，成为相对轨道动力学的基石。

## 数学形式

在LVLH坐标系下，设追踪航天器相对于目标航天器的位置为 $(x, y, z)$，速度为 $(\dot{x}, \dot{y}, \dot{z})$，参考轨道角速度为 $n = \sqrt{\mu / a^3}$，CW方程的矩阵形式为：

$$
\begin{pmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{z} \end{pmatrix} = \begin{pmatrix} 3n^2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -n^2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} + \begin{pmatrix} 0 & 2n & 0 \\ -2n & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{pmatrix}
$$

展开为标量形式：

- **径向（x）：** $\ddot{x} - 3n^2 x - 2n\dot{y} = 0$
- **沿迹方向（y）：** $\ddot{y} + 2n\dot{x} = 0$
- **法向（z）：** $\ddot{z} + n^2 z = 0$

## 基本假设

CW方程的推导基于以下假设：

- **近圆参考轨道**：目标航天器运行在圆形或近圆形轨道上（偏心率 $e \approx 0$）
- **小相对距离**：追踪航天器与目标航天器之间的距离远小于参考轨道半径（$\rho \ll a$）
- **二体引力场**：仅考虑中心天体的引力，忽略大气阻力、太阳辐射压、第三体引力等摄动
- **线性化**：对非线性相对运动方程进行一阶Taylor展开，忽略高阶项

由于线性化假设，CW方程仅在相对距离较近（通常认为 $\rho / a < 0.01$）时具有较高精度。对于地月空间中的大范围相对运动，需要使用更精确的非线性模型。

## 解析解

CW方程具有封闭形式的解析解，初始状态为 $(x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0)$ 时，解可表示为三角函数和时间的线性函数的组合：

$$
x(t) = \frac{\dot{x}_0}{n}\sin(nt) - \left(\frac{2\dot{y}_0}{n} + 3x_0\right)\cos(nt) + \left(\frac{2\dot{y}_0}{n} + 4x_0\right)
$$

$$
y(t) = \left(\frac{2\dot{x}_0}{n}\right)\cos(nt) + 2\left(\frac{2\dot{y}_0}{n} + 3x_0\right)\sin(nt) - \left(3\dot{y}_0 + 6nx_0\right)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right)
$$

$$
z(t) = \frac{\dot{z}_0}{n}\sin(nt) + z_0\cos(nt)
$$

轨道面外运动（z方向）为独立的简谐振荡，与面内运动解耦。面内运动（x-y平面）包含周期项和长期漂移项（与 $t$ 成正比的项），漂移项的存在意味着无控的相对运动一般是不稳定的。

## 典型应用

CW方程在航天工程中有广泛应用：

- **交会对接**：设计从远距离接近到最终对接的转移轨道，是空间站补给任务的理论基础
- **编队飞行**：设计卫星编队的相对轨道构型，维持队形的控制策略
- **近距离操作**：空间碎片清除、在轨服务等任务中的相对运动规划
- **航天器意图识别**：将观测到的相对运动数据与CW方程预测的典型轨迹模式进行比对，辅助判断非合作目标的运动意图（如逼近、飞越、交会等）
- **碰撞风险评估**：结合协方差传播，计算碰撞概率

## 与CR3BP的关系

CW方程与圆形限制性三体问题（CR3BP）都涉及相对运动的描述，但适用场景不同：

| 特征 | CW方程 | CR3BP |
|------|--------|-------|
| 引力体数量 | 二体（中心天体 + 参考轨道航天器） | 三体（两个主天体 + 质量可忽略的小天体） |
| 轨道类型 | 近圆轨道附近的相对运动 | 平动点附近的周期/拟周期轨道 |
| 线性化 | 是 | 非线性（可在线性化点附近线性化） |
| 典型应用 | 交会对接、编队飞行 | DRO、NRHO、Halo轨道设计 |

在地月空间任务中，CW方程常用于空间站附近的相对运动分析（如天舟飞船与空间站的交会），而CR3BP用于更大尺度的轨道设计（如DRO编队、NRHO任务）。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/cr3bp/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)
- [非合作目标](/glossary/noncooperative-target/)

## 参考文献

- Clohessy W H, Wiltshire R S. Terminal guidance system for satellite rendezvous[J]. Journal of the Aerospace Sciences, 1960, 27(9): 653-658.
- Hill G W. Researches in the lunar theory[J]. American Journal of Mathematics, 1878, 1(1): 5-26.
- Curtis H D. Orbital Mechanics for Engineering Students[M]. 4th ed. Butterworth-Heinemann, 2020.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Verify file created and frontmatter valid**

Run: `head -30 web/glossary/dynamics/clohessy-wiltshire.md`
Expected: YAML frontmatter with correct permalink `/glossary/clohessy-wiltshire/`

- [ ] **Step 3: Commit**

```bash
git add web/glossary/dynamics/clohessy-wiltshire.md
git commit -m "feat(glossary): add CW方程 (Clohessy-Wiltshire) entry"
```

---

## Task 2: CW方程 (Clohessy-Wiltshire) — English entry

**Files:**
- Create: `web/en/glossary/dynamics/clohessy-wiltshire.md`

- [ ] **Step 1: Create English CW方程 glossary entry**

```markdown
---
title: Clohessy-Wiltshire (CW) Equation
description: The Clohessy-Wiltshire equation is a set of linearized equations describing relative orbital motion between two spacecraft, widely used in rendezvous, formation flying, and proximity operations.
keywords: Clohessy-Wiltshire equation, CW equation, relative orbital motion, rendezvous, Hill equation, LVLH frame
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Clohessy-Wiltshire (CW) Equation | Relative Orbital Dynamics
  description: Linearized equations of relative orbital motion between two spacecraft, used in rendezvous and formation flying
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Clohessy-Wiltshire (CW) Equation | Relative Orbital Dynamics
  description: Linearized equations of relative orbital motion between two spacecraft, used in rendezvous and formation flying
  image: /logo.png
permalink: /en/glossary/clohessy-wiltshire/
---

# Clohessy-Wiltshire (CW) Equation

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Clohessy-Wiltshire (CW) equation, also known as the Hill-Clohessy-Wiltshire (HCW) equation, is a set of linearized dynamical equations describing the relative motion of a chaser spacecraft with respect to a target spacecraft in a near-circular reference orbit. Expressed in the target's Local Vertical Local Horizontal (LVLH) coordinate frame, the equations decompose relative motion into radial, along-track, and cross-track components.

The equations originate from Hill's (1878) work on Earth-Moon relative motion and were applied to spacecraft rendezvous by Clohessy and Wiltshire (1960), becoming a cornerstone of relative orbital dynamics.

## Mathematical Form

In the LVLH frame, with relative position $(x, y, z)$ and velocity $(\dot{x}, \dot{y}, \dot{z})$, and reference orbit mean motion $n = \sqrt{\mu / a^3}$, the CW equations in matrix form are:

$$
\begin{pmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{z} \end{pmatrix} = \begin{pmatrix} 3n^2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -n^2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} + \begin{pmatrix} 0 & 2n & 0 \\ -2n & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{pmatrix}
$$

Expanded scalar form:

- **Radial (x):** $\ddot{x} - 3n^2 x - 2n\dot{y} = 0$
- **Along-track (y):** $\ddot{y} + 2n\dot{x} = 0$
- **Cross-track (z):** $\ddot{z} + n^2 z = 0$

## Assumptions

The derivation of the CW equations relies on:

- **Near-circular reference orbit**: The target spacecraft is in a circular or near-circular orbit (eccentricity $e \approx 0$)
- **Small relative distance**: The separation between chaser and target is much smaller than the reference orbit radius ($\rho \ll a$)
- **Two-body gravity field**: Only the central body's gravity is considered; perturbations (drag, SRP, third-body) are neglected
- **Linearization**: The nonlinear relative equations are Taylor-expanded to first order, dropping higher-order terms

Due to the linearization, CW equations are accurate only when $\rho / a < 0.01$. For large-scale relative motion in cislunar space, more precise nonlinear models are required.

## Analytical Solution

The CW equations admit closed-form analytical solutions. Given initial state $(x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0)$:

$$
x(t) = \frac{\dot{x}_0}{n}\sin(nt) - \left(\frac{2\dot{y}_0}{n} + 3x_0\right)\cos(nt) + \left(\frac{2\dot{y}_0}{n} + 4x_0\right)
$$

$$
y(t) = \frac{2\dot{x}_0}{n}\cos(nt) + 2\left(\frac{2\dot{y}_0}{n} + 3x_0\right)\sin(nt) - (3\dot{y}_0 + 6nx_0)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right)
$$

$$
z(t) = \frac{\dot{z}_0}{n}\sin(nt) + z_0\cos(nt)
$$

The cross-track motion (z) is an independent harmonic oscillation, decoupled from the in-plane motion. The in-plane motion (x-y plane) contains periodic terms and a secular drift term (proportional to $t$), meaning uncontrolled relative motion is generally unstable.

## Applications

CW equations are widely used in spacecraft engineering:

- **Rendezvous and docking**: Designing transfer trajectories from far-range approach to final docking, foundational for space station logistics
- **Formation flying**: Designing relative orbit configurations and control strategies for satellite formations
- **Proximity operations**: Relative motion planning for debris removal, on-orbit servicing
- **Spacecraft intention recognition**: Comparing observed relative motion data against CW-predicted trajectory patterns to infer noncooperative target motion intentions (e.g., approach, flyby, rendezvous)
- **Collision risk assessment**: Propagating covelliances to compute collision probabilities

## Relation to CR3BP

Both CW equations and the Circular Restricted Three-Body Problem (CR3BP) describe relative motion, but they apply in different regimes:

| Feature | CW Equations | CR3BP |
|---------|-------------|-------|
| Gravitational bodies | Two-body (central body + reference spacecraft) | Three-body (two primaries + massless particle) |
| Orbit type | Relative motion near a circular orbit | Periodic/quasi-periodic orbits near libration points |
| Linearization | Yes | Nonlinear (can be linearized near equilibrium points) |
| Typical applications | Rendezvous, formation flying | DRO, NRHO, Halo orbit design |

In cislunar missions, CW equations are used for relative motion analysis near space stations (e.g., Tianzhou cargo spacecraft rendezvous with the space station), while CR3BP is used for larger-scale orbit design (e.g., DRO formations, NRHO missions).

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Noncooperative Target](/en/glossary/noncooperative-target/)

## References

- Clohessy W H, Wiltshire R S. Terminal guidance system for satellite rendezvous[J]. Journal of the Aerospace Sciences, 1960, 27(9): 653-658.
- Hill G W. Researches in the lunar theory[J]. American Journal of Mathematics, 1878, 1(1): 5-26.
- Curtis H D. Orbital Mechanics for Engineering Students[M]. 4th ed. Butterworth-Heinemann, 2020.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Verify file created**

Run: `head -10 web/en/glossary/dynamics/clohessy-wiltshire.md`
Expected: YAML frontmatter with permalink `/en/glossary/clohessy-wiltshire/`

- [ ] **Step 3: Commit**

```bash
git add web/en/glossary/dynamics/clohessy-wiltshire.md
git commit -m "feat(glossary): add Clohessy-Wiltshire equation English entry"
```

---

## Task 3: 非合作目标 (Noncooperative Target) — Chinese entry

**Files:**
- Create: `web/glossary/other/noncooperative-target.md`

- [ ] **Step 1: Create Chinese 非合作目标 glossary entry**

```markdown
---
title: 非合作目标（Noncooperative Target）
description: 非合作目标是指不与操作航天器共享意图或轨迹信息的空间物体，包括废弃卫星、空间碎片和身份不明的航天器，对空间安全构成严重威胁。
keywords: 非合作目标, 空间碎片, 空间安全, 航天器意图识别, 空间态势感知
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 非合作目标（Noncooperative Target）| 空间安全
  description: 不与操作航天器共享意图或轨迹信息的空间物体，是空间安全研究的核心对象
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非合作目标（Noncooperative Target）| 空间安全
  description: 不与操作航天器共享意图或轨迹信息的空间物体，是空间安全研究的核心对象
  image: /logo.png
permalink: /glossary/noncooperative-target/
---

# 非合作目标（Noncooperative Target）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非合作目标（Noncooperative Target）是指在空间操作中，不主动与操作航天器（Operational Spacecraft）进行通信、协作或共享自身意图和轨迹信息的空间物体。与合作目标（如补给飞船、编队卫星）不同，非合作目标不会主动配合交会对接、避碰机动或其他协同操作。

非合作目标的典型类型包括：

- **废弃卫星**：已退役或失控的人造卫星，不再响应地面指令
- **空间碎片**：火箭残骸、碰撞产物、解体碎片等无功能物体
- **故障失控卫星**：仍在轨道上但失去姿态或轨道控制能力的卫星
- **非协同正常运行卫星**：正常运行但不与特定操作方共享信息的他国或商业卫星
- **身份不明物体**：轨道上编目但无法确定身份或功能的物体

## 与合作目标的对比

| 特征 | 合作目标 | 非合作目标 |
|------|----------|------------|
| 通信能力 | 有，主动共享状态数据 | 无或不配合 |
| 意图可知性 | 已知或可协商 | 未知，需通过观测推断 |
| 轨迹信息 | 精确（GNSS数据共享） | 需要地面/天基观测 |
| 交会对接 | 标准化对接机构配合 | 需要非合作捕获技术 |
| 典型实例 | 天舟货运飞船、Dragon | 空间碎片、失效卫星 |

## 对空间安全的威胁

随着在轨物体数量的急剧增长，非合作目标已成为空间安全的核心挑战：

- **碰撞风险**：大型碎片（>10 cm）与活跃航天器的碰撞可能产生灾难性后果，并引发凯斯勒综合征（Kessler Syndrome）
- **意图不确定性**：无法确定非协同运行卫星的真实意图（如监视、干扰、攻击），增加了空间态势感知的复杂性
- **规避成本**：频繁的碰撞规避机动消耗宝贵的推进剂，缩短航天器寿命
- **空间站安全**：在空间站运行场景中，接近的非合作目标需要进行威胁评估和意图识别，以保障在轨人员安全

## 意图识别方法

针对非合作目标的意图识别是当前空间安全研究的前沿方向。主要方法包括：

- **基于轨道动力学**：通过分析相对运动轨迹（如CW方程预测的典型模式）推断运动意图（逼近、飞越、交会等）
- **基于模糊推理**：利用模糊决策树对特征数据进行分类
- **基于深度学习**：训练神经网络从轨道数据中识别意图模式
- **基于大语言模型（LLM）**：将多源信息（轨道数据、图像、环境条件）转化为文本输入，利用LLM的逻辑推理能力进行综合意图判断

Jing等（2025年）提出了基于LLM的非合作目标意图识别框架，将意图分为运动意图、操作意图和任务意图三大类共23种子类型，并利用ChatGLM模型实现了99.9%的识别准确率。

## 相关概念

- [航天器意图识别](/glossary/spacecraft-intention-recognition/)
- [CW方程（Clohessy-Wiltshire）](/glossary/clohessy-wiltshire/)
- [太空交通管控（STM）](/glossary/space-traffic-management/)

## 参考文献

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/glossary/other/noncooperative-target.md
git commit -m "feat(glossary): add 非合作目标 (Noncooperative Target) entry"
```

---

## Task 4: 非合作目标 (Noncooperative Target) — English entry

**Files:**
- Create: `web/en/glossary/other/noncooperative-target.md`

- [ ] **Step 1: Create English 非合作目标 glossary entry**

```markdown
---
title: Noncooperative Target
description: A noncooperative target is a space object that does not share intent or trajectory information with operational spacecraft, including abandoned satellites, debris, and unidentified objects.
keywords: noncooperative target, space debris, space security, spacecraft intention recognition, space situational awareness
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Noncooperative Target | Space Security
  description: Space objects that do not share intent or trajectory information, a core subject of space security research
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Noncooperative Target | Space Security
  description: Space objects that do not share intent or trajectory information, a core subject of space security research
  image: /logo.png
permalink: /en/glossary/noncooperative-target/
---

# Noncooperative Target

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A noncooperative target is a space object that does not actively communicate with or cooperate to operational spacecraft, and does not share its intent or trajectory information. Unlike cooperative targets (such as cargo vehicles and formation-flying satellites), noncooperative targets do not voluntarily assist with rendezvous, docking, collision avoidance, or other coordinated operations.

Typical categories of noncooperative targets include:

- **Defunct satellites**: Retired or uncontrollable satellites that no longer respond to ground commands
- **Space debris**: Rocket bodies, collision fragments, and other non-functional objects
- **Failed satellites**: Satellites still in orbit but having lost attitude or orbit control capability
- **Non-cooperative operational satellites**: Satellites operating normally but not sharing information with a specific operator
- **Unidentified objects**: Cataloged objects whose identity or function cannot be determined

## Comparison with Cooperative Targets

| Feature | Cooperative Target | Noncooperative Target |
|---------|-------------------|----------------------|
| Communication | Active status data sharing | None or non-responsive |
| Intent transparency | Known or negotiable | Unknown, must be inferred from observation |
| Trajectory info | Precise (GNSS data sharing) | Requires ground/space-based observation |
| Rendezvous/docking | Standardized docking mechanisms | Requires non-cooperative capture techniques |
| Examples | Tianzhou cargo spacecraft, Dragon | Space debris, defunct satellites |

## Threat to Space Safety

As the number of on-orbit objects grows rapidly, noncooperative targets have become a central challenge for space safety:

- **Collision risk**: Large debris (>10 cm) can cause catastrophic collisions with active spacecraft, potentially triggering the Kessler Syndrome
- **Intent uncertainty**: The true intent of non-cooperative operational satellites (e.g., surveillance, interference, attack) cannot be determined, complicating space situational awareness
- **Avoidance costs**: Frequent collision avoidance maneuvers consume precious propellant and shorten spacecraft lifetimes
- **Space station safety**: In space station operations, approaching noncooperative targets require threat assessment and intention recognition to ensure crew safety

## Intention Recognition Methods

Intention recognition of noncooperative targets is an active research frontier in space safety. Key approaches include:

- **Orbital dynamics-based**: Inferring motion intentions (approach, flyby, rendezvous) by analyzing relative motion trajectories against CW-equation-predicted patterns
- **Fuzzy reasoning-based**: Using fuzzy decision trees to classify characteristic data
- **Deep learning-based**: Training neural networks to identify intent patterns from orbital data
- **Large Language Model (LLM)-based**: Converting multi-source information (orbital data, images, environmental conditions) into text input and leveraging LLM reasoning for comprehensive intent assessment

Jing et al. (2025) proposed an LLM-based framework for noncooperative target intention recognition, categorizing intentions into 3 major types and 23 subtypes (motion, operation, and task intentions), achieving 99.9% recognition accuracy with the ChatGLM model.

## Related Concepts

- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Clohessy-Wiltshire (CW) Equation](/en/glossary/clohessy-wiltshire/)
- [Space Traffic Management (STM)](/en/glossary/space-traffic-management/)

## References

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/other/noncooperative-target.md
git commit -m "feat(glossary): add Noncooperative Target English entry"
```

---

## Task 5: 航天器意图识别 (Spacecraft Intention Recognition) — Chinese entry

**Files:**
- Create: `web/glossary/other/spacecraft-intention-recognition.md`

- [ ] **Step 1: Create Chinese 航天器意图识别 glossary entry**

```markdown
---
title: 航天器意图识别（Spacecraft Intention Recognition）
description: 航天器意图识别是通过观测目标航天器的轨道行为、搭载设备和环境条件，推断其目的或任务的技术，是空间态势感知和安全预警的重要研究方向。
keywords: 航天器意图识别, 意图识别, 非合作目标, 大语言模型, 空间态势感知, 运动意图, 操作意图, 任务意图
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 航天器意图识别（Spacecraft Intention Recognition）| 空间安全
  description: 通过观测目标航天器的轨道行为和环境条件推断其目的或任务的技术
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 航天器意图识别（Spacecraft Intention Recognition）| 空间安全
  description: 通过观测目标航天器的轨道行为和环境条件推断其目的或任务的技术
  image: /logo.png
permalink: /glossary/spacecraft-intention-recognition/
---

# 航天器意图识别（Spacecraft Intention Recognition）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器意图识别（Spacecraft Intention Recognition）是指通过观测目标航天器的轨道运动行为、搭载设备类型、环境光照和电磁条件等多源信息，推断该航天器所要达成的目的或执行的任务的技术。它是空间态势感知（SSA）和空间安全预警的重要研究方向，旨在为操作航天器提供威胁评估和决策支持。

传统的空间威胁评估主要依赖最小距离等几何指标，无法区分目标的真实意图。航天器意图识别将威胁评估从"是否接近"提升到"为什么接近"的层面。

## 意图分类框架

Jing等（2025年）在空间站运行安全场景下，提出了一个航天器意图分类框架，将意图分为3大类、23种子类型。**需要说明的是，这是目前学术界提出的一种分类方案，并非广泛共识的标准分类。**

### 运动意图（Motion Intentions）

描述目标航天器相对于操作航天器的轨道运动模式：

| 意图 | 英文 | 描述 |
|------|------|------|
| 悬停 | Hovering | 目标保持恒定相对距离，相对速度为零 |
| 飞越 | Flyby | 相对距离先减小后增大，但不为零 |
| 绕飞 | Flyaround | 相对距离不为零，在窄范围内波动 |
| 交会 | Rendezvous | 相对距离和相对速度均为零 |
| 碰撞 | Collision | 相对距离为零，相对速度非零 |
| 撤离 | Retreat | 原本碰撞的目标经轨道机动远离 |
| 随机 | Randomness | 意图不明确或随时间变化 |

### 操作意图（Operation Intentions）

描述目标航天器可能执行的具体操作行为：

| 意图 | 英文 | 描述 |
|------|------|------|
| 对接 | Docking | 通过机械臂或对接机构实现结构连接 |
| 加注 | Refueling | 为操作航天器注入燃料 |
| 维修 | Repair | 更换或添加设备部件 |
| 抓取 | Grabbing | 通过机械臂或飞爪附着于操作航天器 |
| 拍照 | Photograph | 通过相机近距离拍摄操作航天器 |
| 通信 | Communication | 发射电磁信号与操作航天器通信 |

### 任务意图（Task Intentions）

综合运动意图和操作意图，描述目标的整体任务目的：

| 意图 | 英文 | 描述 |
|------|------|------|
| 探测 | Detection | 非合作目标，悬停+绕飞，拍照+信息收集 |
| 监视 | Surveillance | 合作目标，类似探测但目标为合作性质 |
| 干扰 | Interference | 非合作目标，悬停+交会+绕飞，抓取+电磁干扰 |
| 协商 | Negotiation | 悬停+绕飞，通信 |
| 观测 | Observation | 类似探测但无操作意图 |
| 协助 | Assistance | 合作目标，交会+维修 |
| 威慑 | Deterrence | 非合作目标，反复执行多种运动意图 |
| 支援 | Support | 合作目标，悬停+绕飞，无操作意图 |
| 实验 | Experiment | 合作目标，搭载实验设备 |
| 攻击 | Attack | 非合作目标，碰撞，无操作意图 |

## 基于LLM的识别方法

Jing等（2025年）提出了一种基于大语言模型（LLM）的航天器意图识别方法，核心思路是将多源传感器信息转化为文本输入，利用LLM的逻辑推理能力进行意图判断。

### 方法框架

1. **意图词汇构建**：定义3大类23种意图词汇，形成航天器意图语料库
2. **提示元素设计**：将场景信息提炼为4类7种提示元素（操作航天器信息、目标信息、环境条件、轨道运动特征）
3. **提示模板设计**：基于提示工程原则构建标准化输入模板
4. **测试样本生成**：通过计算机仿真生成50,688个标称样本和8,448个扰动样本
5. **模型微调**：使用P-tuning V2和LoRA对ChatGLM2-6B和ChatGLM3-6B进行微调

### 提示策略

测试了3种提示条件：

- **基础提示**（Basic Prompt）：仅包含问题和已知信息
- **指令提示**（Instruction Prompt）：在基础提示上添加所有可能的答案选项，指令引导LLM从中选择
- **思维链提示**（CoT Prompt）：要求LLM输出推理过程，包含指令、推理步骤和示例

### 实验结果

| 模型 | 提示类型 | 准确率 |
|------|----------|--------|
| ChatGLM2-6B 基础模型 | 基础/指令/CoT | 较低（<50%） |
| ChatGLM2-6B + P-tuning V2 | CoT | 99.81% |
| ChatGLM3-6B 基础模型 | CoT | 优于ChatGLM2-6B |
| **ChatGLM3-6B + LoRA** | **指令** | **99.90%** |

微调后的模型在准确率上相比基础模型提升了58.66%–83.94%，但鲁棒性有所下降。

## 应用场景

- **空间站安全预警**：识别接近空间站的非合作目标的意图，为规避决策提供依据
- **空间态势感知**：在编目大量在轨物体的基础上，进一步判断其行为目的
- **在轨服务规划**：理解合作/非合作目标的状态，辅助服务任务设计
- **空间攻防对抗**：在军事场景下评估潜在威胁目标的意图

## 相关概念

- [非合作目标](/glossary/noncooperative-target/)
- [CW方程（Clohessy-Wiltshire）](/glossary/clohessy-wiltshire/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)
- [提示调优（P-tuning）](/glossary/prompt-tuning/)
- [太空交通管控（STM）](/glossary/space-traffic-management/)

## 参考文献

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Yang Z, Shi P, Zhou T, Li W-L. Intention recognition method of space non-cooperative target based on fuzzy reasoning. J Beijing Univ Aeronaut Astronaut. 2024.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/glossary/other/spacecraft-intention-recognition.md
git commit -m "feat(glossary): add 航天器意图识别 (Spacecraft Intention Recognition) entry"
```

---

## Task 6: 航天器意图识别 (Spacecraft Intention Recognition) — English entry

**Files:**
- Create: `web/en/glossary/other/spacecraft-intention-recognition.md`

- [ ] **Step 1: Create English 航天器意图识别 glossary entry**

```markdown
---
title: Spacecraft Intention Recognition
description: Spacecraft intention recognition is the process of inferring the purpose or mission of a target spacecraft by observing its orbital behavior, carried devices, and environmental context.
keywords: spacecraft intention recognition, intention recognition, noncooperative target, large language model, space situational awareness, motion intention, operation intention, task intention
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Spacecraft Intention Recognition | Space Security
  description: Inferring the purpose of a target spacecraft from its orbital behavior and environmental context
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Spacecraft Intention Recognition | Space Security
  description: Inferring the purpose of a target spacecraft from its orbital behavior and environmental context
  image: /logo.png
permalink: /en/glossary/spacecraft-intention-recognition/
---

# Spacecraft Intention Recognition

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Spacecraft Intention Recognition is the process of inferring the purpose or mission of a target spacecraft by analyzing its orbital motion behavior, carried equipment types, environmental lighting and electromagnetic conditions, and other multi-source information. It is an important research direction in Space Situational Awareness (SSA) and space safety early warning, aiming to provide threat assessment and decision support for operational spacecraft.

Traditional space threat assessment primarily relies on geometric indicators such as minimum distance, which cannot distinguish the true intent of a target. Spacecraft intention recognition elevates threat assessment from "whether it is approaching" to "why it is approaching."

## Intention Classification Framework

Jing et al. (2025) proposed an intention classification framework in the context of space station operational safety, categorizing intentions into 3 major types and 23 subtypes. **Note: This is one proposed classification scheme in the academic literature, not a universally accepted standard.**

### Motion Intentions

Describe the orbital motion pattern of the target spacecraft relative to the operational spacecraft:

| Intention | Description |
|-----------|-------------|
| Hovering | Target maintains constant relative distance with zero relative velocity |
| Flyby | Relative distance decreases then increases, but never reaches zero |
| Flyaround | Relative distance is non-zero, fluctuating within a narrow range |
| Rendezvous | Both relative distance and velocity reach zero |
| Collision | Relative distance is zero with non-zero relative velocity |
| Retreat | Target that previously collided maneuvers away |
| Randomness | Intent is unclear or time-varying |

### Operation Intentions

Describe specific operational actions the target spacecraft may perform:

| Intention | Description |
|-----------|-------------|
| Docking | Structural connection via robotic arm or docking mechanism |
| Refueling | Fuel injection into the operational spacecraft |
| Repair | Replacement or addition of equipment parts |
| Grabbing | Attachment to operational spacecraft via robotic arm or flying claw |
| Photograph | Close-range photography of operational spacecraft via camera |
| Communication | Electromagnetic signal transmission to operational spacecraft |

### Task Intentions

Combine motion and operation intentions to describe the overall mission purpose:

| Intention | Description |
|-----------|-------------|
| Detection | Noncooperative target, hovering + flyaround, photograph + information gathering |
| Surveillance | Cooperative target, similar to detection but with cooperative nature |
| Interference | Noncooperative target, hovering + rendezvous + flyaround, grabbing + electromagnetic interference |
| Negotiation | Hovering + flyaround, communication |
| Observation | Similar to detection but without operation intentions |
| Assistance | Cooperative target, rendezvous + repair |
| Deterrence | Noncooperative target, repeatedly executing multiple motion intentions |
| Support | Cooperative target, hovering + flyaround, no operation intentions |
| Experiment | Cooperative target, carrying experimental equipment |
| Attack | Noncooperative target, collision, no operation intentions |

## LLM-Based Recognition Method

Jing et al. (2025) proposed a spacecraft intention recognition method based on Large Language Models (LLMs). The core idea is to convert multi-source sensor information into text input and leverage the logical reasoning capabilities of LLMs for intent assessment.

### Method Framework

1. **Intention vocabulary construction**: Define 3 categories and 23 intention terms forming a spacecraft intention corpus
2. **Prompt element design**: Extract scene information into 4 categories and 7 prompt elements (operational spacecraft info, target info, environmental conditions, orbital motion characteristics)
3. **Prompt template design**: Construct standardized input templates based on prompt engineering principles
4. **Test sample generation**: Generate 50,688 nominal samples and 8,448 perturbed samples via computer simulation
5. **Model fine-tuning**: Fine-tune ChatGLM2-6B and ChatGLM3-6B using P-tuning V2 and LoRA

### Prompt Strategies

Three prompt conditions were tested:

- **Basic prompt**: Contains only the question and known information
- **Instruction prompt**: Adds all possible answer options to the basic prompt, with instructions guiding the LLM to select from them
- **Chain-of-Thought (CoT) prompt**: Requires the LLM to output its reasoning process, including instruction, reasoning steps, and examples

### Experimental Results

| Model | Prompt Type | Accuracy |
|-------|-------------|----------|
| ChatGLM2-6B base model | Basic/Instruction/CoT | Low (<50%) |
| ChatGLM2-6B + P-tuning V2 | CoT | 99.81% |
| ChatGLM3-6B base model | CoT | Better than ChatGLM2-6B |
| **ChatGLM3-6B + LoRA** | **Instruction** | **99.90%** |

Fine-tuned models improved accuracy by 58.66%–83.94% over base models, though robustness decreased.

## Applications

- **Space station safety early warning**: Identifying the intent of noncooperative targets approaching a space station to support avoidance decisions
- **Space situational awareness**: Beyond cataloging on-orbit objects, further determining their behavioral purposes
- **On-orbit servicing planning**: Understanding the status of cooperative/noncooperative targets to assist service mission design
- **Space security**: Assessing potential threat target intentions in military scenarios

## Related Concepts

- [Noncooperative Target](/en/glossary/noncooperative-target/)
- [Clohessy-Wiltshire (CW) Equation](/en/glossary/clohessy-wiltshire/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)
- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Space Traffic Management (STM)](/en/glossary/space-traffic-management/)

## References

- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Sun Q, Dang Z. Deep neural network for non-cooperative space target intention recognition. Aerosp Sci Technol. 2023;142:108681.
- Yang Z, Shi P, Zhou T, Li W-L. Intention recognition method of space non-cooperative target based on fuzzy reasoning. J Beijing Univ Aeronaut Astronaut. 2024.
- Qi P, et al. A method and system for intent analysis of non cooperative target spacecraft. Patent 202310735989.X, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/other/spacecraft-intention-recognition.md
git commit -m "feat(glossary): add Spacecraft Intention Recognition English entry"
```

---

## Task 7: 思维链提示 (Chain-of-Thought Prompting) — Chinese entry

**Files:**
- Create: `web/glossary/other/chain-of-thought-prompting.md`

- [ ] **Step 1: Create Chinese 思维链提示 glossary entry**

```markdown
---
title: 思维链提示（Chain-of-Thought Prompting）
description: 思维链提示（CoT）是一种引导大语言模型在给出最终答案前输出中间推理步骤的提示技术，显著提升了LLM在复杂推理任务上的表现。
keywords: 思维链提示, Chain-of-Thought, CoT, 提示工程, 大语言模型, 推理, few-shot
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 思维链提示（CoT）| 大语言模型推理增强
  description: 引导LLM输出中间推理步骤的提示技术，显著提升复杂推理任务表现
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 思维链提示（CoT）| 大语言模型推理增强
  description: 引导LLM输出中间推理步骤的提示技术，显著提升复杂推理任务表现
  image: /logo.png
permalink: /glossary/chain-of-thought-prompting/
---

# 思维链提示（Chain-of-Thought Prompting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

思维链提示（Chain-of-Thought Prompting，简称CoT）是一种由Wei等（2022年）提出的提示工程技术，其核心思想是引导大语言模型（LLM）在回答问题之前，先生成一系列中间推理步骤，而非直接给出最终答案。这种方法显著提升了LLM在需要多步逻辑推理的复杂任务上的表现。

## 核心结构

一个完整的思维链提示通常包含三个要素：

1. **指令（Instruction）**：明确任务目标和期望的输出格式
2. **推理过程（Rationale）**：中间推理步骤，包括问题的解法、中间推导和相关外部知识
3. **示例（Exemplars）**：以few-shot方式提供输入-输出对的范例，每个示例包含问题、推理过程和对应答案

## 工作原理

CoT的工作方式是通过在提示中提供包含显式推理链的少量示例（few-shot examples），教会模型在处理新问题时也生成类似的逐步推理过程。

例如，在航天器意图识别任务中，一个CoT提示示例可能如下：

> **输入**：目标持续接近我方空间站，到达最近距离后逐渐远离。目标是大型合作航天器，搭载操作机械臂。光照条件为全日照，电磁条件良好。
>
> **输出**：目标持续接近我方，到达最近距离后逐渐远离，推断运动意图为飞越（flyby）；目标是大型合作卫星且搭载机械臂，推断操作意图为加注（refuel）；基于此信息，任务意图不明确。

模型在面对新输入时，会模仿这种推理格式，先分析观测数据，再逐步推导出各层意图。

## 性能特点

- **随模型规模提升而增强**：随着模型参数量增加，CoT的回答准确率逐步提高
- **超越标准提示**：在大多数领域，CoT提示的准确率高于标准提示方法
- **在特定领域超越人类**：在某些领域（如体育知识），CoT提示的回答准确率甚至超过人类
- **可解释性**：CoT输出的推理过程提供了模型决策的可追溯路径

## 局限性

- **机制未明**：目前没有公认理论解释为什么CoT能提升模型推理能力
- **小模型挑战**：在参数量小于10B的较小模型上，CoT的效果可能受限（尽管微调可以缓解这一问题）
- **推理质量不稳定**：生成的推理过程可能包含错误或不相关的步骤

## 变体与扩展

- **自洽性（Self-Consistency）**：Wang等（2022年）提出通过多次采样和多数投票来提升CoT的回答准确率
- **最少到最多提示（Least-to-Most Prompting）**：Zhou等（2022年）提出先将复杂问题分解为子问题，再依次用CoT解决每个子问题
- **零样本CoT（Zero-shot CoT）**：直接在提示末尾添加"Let's think step by step"即可触发推理链，无需提供示例

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，CoT被用于增强LLM对航天器意图的推理能力。通过在CoT提示中提供包含推理过程的示例，模型学会了先分析轨道运动模式和目标特征，再逐步推导出运动意图、操作意图和任务意图。实验表明，CoT提示微调后的ChatGLM2-6B模型在意图识别任务上达到了99.81%的准确率。

## 相关概念

- [提示调优（P-tuning）](/glossary/prompt-tuning/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)
- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)

## 参考文献

- Wei J, Wang X, Schuurmans D, et al. Chain-of-thought prompting elicits reasoning in large language models. Adv Neural Inform Proc Syst. 2022;35:24824-24837.
- Wang X, Wei J, Schuurmans D, et al. Self-consistency improves chain of thought reasoning in language models. arXiv:2203.11171, 2022.
- Zhou D, Schärli N, Hou L, et al. Least-to-most prompting enables complex reasoning in large language models. arXiv:2205.10625, 2022.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Commit**

```bash
git add web/glossary/other/chain-of-thought-prompting.md
git commit -m "feat(glossary): add 思维链提示 (Chain-of-Thought Prompting) entry"
```

---

## Task 8: 思维链提示 (Chain-of-Thought Prompting) — English entry

**Files:**
- Create: `web/en/glossary/other/chain-of-thought-prompting.md`

- [ ] **Step 1: Create English 思维链提示 glossary entry**

```markdown
---
title: Chain-of-Thought (CoT) Prompting
description: Chain-of-Thought prompting is a technique that encourages LLMs to produce intermediate reasoning steps before giving a final answer, significantly improving performance on complex reasoning tasks.
keywords: chain-of-thought prompting, CoT, prompt engineering, large language model, reasoning, few-shot
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Chain-of-Thought (CoT) Prompting | LLM Reasoning Enhancement
  description: A prompting technique that guides LLMs to output intermediate reasoning steps, improving complex reasoning performance
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Chain-of-Thought (CoT) Prompting | LLM Reasoning Enhancement
  description: A prompting technique that guides LLMs to output intermediate reasoning steps, improving complex reasoning performance
  image: /logo.png
permalink: /en/glossary/chain-of-thought-prompting/
---

# Chain-of-Thought (CoT) Prompting

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Chain-of-Thought (CoT) Prompting is a prompt engineering technique proposed by Wei et al. (2022) that encourages Large Language Models (LLMs) to generate a series of intermediate reasoning steps before producing a final answer, rather than jumping directly to the conclusion. This approach significantly improves LLM performance on complex tasks requiring multi-step logical reasoning.

## Core Structure

A complete CoT prompt typically comprises three elements:

1. **Instruction**: Specifies the task objective and desired output format
2. **Rationale**: The intermediate reasoning process, including solutions, inference steps, and relevant external knowledge
3. **Exemplars**: Few-shot input-output pairs, each consisting of a question, the reasoning process, and the corresponding answer

## How It Works

CoT works by providing a small number of examples with explicit reasoning chains in the prompt, teaching the model to generate similar step-by-step reasoning when processing new questions.

For example, in a spacecraft intention recognition task, a CoT prompt example might be:

> **Input**: The target continuously approaches our space station, reaches the closest distance, then gradually moves away. The target is a large cooperative spacecraft equipped with an operating robotic arm. Lighting condition is full sunlight; electromagnetic condition is optimal.
>
> **Output**: The target continuously approaches us, reaches the closest distance, then gradually moves away. The inferred Movement Intention is flyby; the target is a large cooperative satellite with a robotic arm, and inferred Operation Intention is refuel; based on this information, the Task intention is unclear.

When facing new inputs, the model mimics this reasoning format, analyzing observation data first and then progressively deriving intentions at each level.

## Performance Characteristics

- **Scales with model size**: As model parameters increase, CoT answer accuracy progressively improves
- **Outperforms standard prompts**: In most domains, CoT accuracy exceeds standard prompting methods
- **Exceeds human performance in some domains**: In certain areas (e.g., sports knowledge), CoT accuracy surpasses human performance
- **Interpretability**: The reasoning process output provides a traceable path for model decisions

## Limitations

- **Unknown mechanism**: No universally accepted theory explains why CoT improves model reasoning ability
- **Small model challenges**: CoT effectiveness may be limited on smaller models with fewer than 10B parameters (though fine-tuning can mitigate this)
- **Unstable reasoning quality**: Generated reasoning may contain errors or irrelevant steps

## Variants and Extensions

- **Self-Consistency**: Wang et al. (2022) proposed using multiple sampling and majority voting to improve CoT answer accuracy
- **Least-to-Most Prompting**: Zhou et al. (2022) proposed first decomposing complex problems into subproblems, then solving each sequentially with CoT
- **Zero-shot CoT**: Simply appending "Let's think step by step" to the prompt triggers reasoning chains without providing examples

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), CoT was used to enhance LLM reasoning capabilities for spacecraft intention recognition. By providing examples with reasoning processes in CoT prompts, the model learned to first analyze orbital motion patterns and target characteristics, then progressively derive motion intentions, operation intentions, and task intentions. Experiments showed that the CoT-prompt-fine-tuned ChatGLM2-6B model achieved 99.81% accuracy on the intention recognition task.

## Related Concepts

- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)

## References

- Wei J, Wang X, Schuurmans D, et al. Chain-of-thought prompting elicits reasoning in large language models. Adv Neural Inform Proc Syst. 2022;35:24824-24837.
- Wang X, Wei J, Schuurmans D, et al. Self-consistency improves chain of thought reasoning in language models. arXiv:2203.11171, 2022.
- Zhou D, Schärli N, Hou L, et al. Least-to-most prompting enables complex reasoning in large language models. arXiv:2205.10625, 2022.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/other/chain-of-thought-prompting.md
git commit -m "feat(glossary): add Chain-of-Thought Prompting English entry"
```

---

## Task 9: 低秩适配 (LoRA) — Chinese entry

**Files:**
- Create: `web/glossary/other/lora-low-rank-adaptation.md`

- [ ] **Step 1: Create Chinese 低秩适配 glossary entry**

```markdown
---
title: 低秩适配（LoRA — Low-Rank Adaptation）
description: 低秩适配（LoRA）是一种参数高效的大模型微调方法，通过冻结预训练权重并注入可训练的低秩分解矩阵，仅训练极少量参数即可实现接近全量微调的效果。
keywords: 低秩适配, LoRA, Low-Rank Adaptation, 大语言模型, 微调, 参数高效, PEFT
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 低秩适配（LoRA）| 大模型高效微调
  description: 通过低秩矩阵分解实现参数高效的大模型微调方法
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低秩适配（LoRA）| 大模型高效微调
  description: 通过低秩矩阵分解实现参数高效的大模型微调方法
  image: /logo.png
permalink: /glossary/lora-low-rank-adaptation/
---

# 低秩适配（LoRA — Low-Rank Adaptation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低秩适配（Low-Rank Adaptation，简称LoRA）是由Hu等（2021年）提出的一种参数高效微调（Parameter-Efficient Fine-Tuning，PEFT）方法。LoRA的核心思想是：预训练模型的参数更新可以用一个低秩矩阵来有效近似。通过冻结预训练模型的原始权重，仅在每个Transformer层中注入一对可训练的低秩分解矩阵，LoRA能够在仅训练0.1%–3%原始模型参数的情况下，达到与全量微调（Full Fine-Tuning）相近的性能。

## 数学原理

设预训练模型的某一层权重矩阵为 $\Phi_0 \in \mathbb{R}^{d \times k}$，LoRA将参数更新 $\Delta\phi$ 分解为两个低秩矩阵的乘积：

$$
\Delta\phi = AB
$$

其中 $A \in \mathbb{R}^{d \times r}$，$B \in \mathbb{R}^{r \times k}$，且秩 $r \ll \min(d, k)$。

前向传播变为：

$$
Y = X(\Phi_0 + \Delta\phi) = X\Phi_0 + XAB
$$

由于 $r$ 远小于 $d$ 和 $k$，需要训练的参数量大幅减少。例如，当 $d = k = 4096$，$r = 8$ 时，原始层有约1680万个参数，而LoRA仅需训练约6.5万个参数（约0.4%）。

## 训练流程

LoRA的训练分为以下步骤：

1. **冻结预训练权重**：预训练模型的所有原始参数 $\Phi_0$ 保持不变
2. **注入低秩矩阵**：在每个目标层（通常是注意力层的Q、K、V、O投影矩阵）添加可训练的 $A$ 和 $B$ 矩阵
3. **初始化**：$A$ 通常用高斯随机初始化，$B$ 初始化为零矩阵，确保训练开始时 $\Delta\phi = AB = 0$
4. **训练**：仅更新 $A$ 和 $B$ 的参数，使用标准的梯度下降优化
5. **推理合并**：训练完成后，将 $AB$ 合并到原始权重中：$\Phi = \Phi_0 + AB$，不引入额外的推理延迟

## 与全量微调的对比

| 特征 | 全量微调 | LoRA |
|------|----------|------|
| 可训练参数量 | 100% | 0.1%–3% |
| 显存需求 | 高 | 低 |
| 训练速度 | 慢 | 快 |
| 推理延迟 | 无额外延迟 | 无额外延迟（合并后） |
| 多任务支持 | 需要多个完整模型副本 | 可为不同任务训练不同的低秩矩阵 |
| 性能 | 最优 | 接近全量微调 |

## 与P-tuning V2的对比

LoRA和P-tuning V2都属于参数高效微调方法，但策略不同：

| 特征 | LoRA | P-tuning V2 |
|------|------|-------------|
| 参数修改方式 | 在模型外部构建低秩矩阵 | 在模型内部添加软提示和嵌入层 |
| 修改位置 | 每个目标层的权重矩阵 | 输入层前的虚拟提示 + 各层嵌入 |
| 推理方式 | 合并权重后无额外开销 | 需要处理额外的软提示token |
| 典型应用 | ChatGLM3-6B微调 | ChatGLM2-6B微调 |

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，LoRA被用于微调ChatGLM3-6B模型以执行航天器意图识别任务。实验使用LoRA秩 $r = 8$、缩放因子32，仅训练了约3,000轮迭代。结果表明：

- LoRA微调的ChatGLM3-6B在指令提示条件下达到了**99.90%**的准确率，是所有测试模型中的最高值
- 相比基础模型，准确率提升了83.94%
- 鲁棒性接近基础模型，标准偏差仅增加1.25倍

## 相关概念

- [提示调优（P-tuning）](/glossary/prompt-tuning/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)

## 参考文献

- Hu E J, Shen Y, Wallis P, et al. LoRA: Low-rank adaptation of large language models. arXiv:2106.09685, 2021.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Ling C, Zhao X, Lu J, et al. Domain specialization as the key to make large language models disruptive: A comprehensive survey. arXiv:2305.18703, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/glossary/other/lora-low-rank-adaptation.md
git commit -m "feat(glossary): add 低秩适配 (LoRA) entry"
```

---

## Task 10: 低秩适配 (LoRA) — English entry

**Files:**
- Create: `web/en/glossary/other/lora-low-rank-adaptation.md`

- [ ] **Step 1: Create English 低秩适配 glossary entry**

```markdown
---
title: Low-Rank Adaptation (LoRA)
description: Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that freezes pretrained weights and injects trainable low-rank decomposition matrices, training only a fraction of parameters to achieve near full fine-tuning performance.
keywords: Low-Rank Adaptation, LoRA, large language model, fine-tuning, parameter-efficient, PEFT
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Low-Rank Adaptation (LoRA) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via low-rank matrix decomposition
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Low-Rank Adaptation (LoRA) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via low-rank matrix decomposition
  image: /logo.png
permalink: /en/glossary/lora-low-rank-adaptation/
---

# Low-Rank Adaptation (LoRA)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Low-Rank Adaptation (LoRA) is a Parameter-Efficient Fine-Tuning (PEFT) method proposed by Hu et al. (2021). The core idea of LoRA is that the weight updates in a pretrained model can be effectively approximated by a low-rank matrix. By freezing the original pretrained weights and injecting a pair of trainable low-rank decomposition matrices into each Transformer layer, LoRA achieves performance comparable to full fine-tuning while training only 0.1%–3% of the original model parameters.

## Mathematical Principle

Given a pretrained weight matrix $\Phi_0 \in \mathbb{R}^{d \times k}$ at some layer, LoRA decomposes the parameter update $\Delta\phi$ into a product of two low-rank matrices:

$$
\Delta\phi = AB
$$

where $A \in \mathbb{R}^{d \times r}$, $B \in \mathbb{R}^{r \times k}$, and rank $r \ll \min(d, k)$.

The forward pass becomes:

$$
Y = X(\Phi_0 + \Delta\phi) = X\Phi_0 + XAB
$$

Since $r$ is much smaller than $d$ and $k$, the number of trainable parameters is dramatically reduced. For example, with $d = k = 4096$ and $r = 8$, the original layer has ~16.8M parameters, while LoRA requires training only ~65K parameters (~0.4%).

## Training Process

LoRA training follows these steps:

1. **Freeze pretrained weights**: All original parameters $\Phi_0$ remain unchanged
2. **Inject low-rank matrices**: Add trainable $A$ and $B$ matrices to each target layer (typically Q, K, V, O projection matrices in attention layers)
3. **Initialization**: $A$ is typically initialized with Gaussian random values, $B$ is initialized to zero, ensuring $\Delta\phi = AB = 0$ at the start of training
4. **Training**: Only $A$ and $B$ parameters are updated using standard gradient descent
5. **Inference merging**: After training, merge $AB$ into the original weights: $\Phi = \Phi_0 + AB$, introducing no additional inference latency

## Comparison with Full Fine-Tuning

| Feature | Full Fine-Tuning | LoRA |
|---------|-----------------|------|
| Trainable parameters | 100% | 0.1%–3% |
| Memory requirements | High | Low |
| Training speed | Slow | Fast |
| Inference latency | No additional delay | No additional delay (after merging) |
| Multi-task support | Requires multiple full model copies | Different low-rank matrices per task |
| Performance | Optimal | Near full fine-tuning |

## Comparison with P-tuning V2

Both LoRA and P-tuning V2 are parameter-efficient fine-tuning methods, but they differ in strategy:

| Feature | LoRA | P-tuning V2 |
|---------|------|-------------|
| Parameter modification | Constructs low-rank matrices externally | Adds soft prompts and embedding layers internally |
| Modification location | Weight matrices at each target layer | Virtual prompts before input + embeddings at each layer |
| Inference | No overhead after weight merging | Requires processing additional soft prompt tokens |
| Typical application | ChatGLM3-6B fine-tuning | ChatGLM2-6B fine-tuning |

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), LoRA was used to fine-tune the ChatGLM3-6B model for spacecraft intention recognition. The experiment used LoRA rank $r = 8$ and scaling factor 32, training for only ~3,000 iterations. Results showed:

- The LoRA-fine-tuned ChatGLM3-6B achieved **99.90%** accuracy under instruction prompts, the highest among all tested models
- Accuracy improved by 83.94% compared to the base model
- Robustness was close to the base model, with standard deviation increasing by only 1.25x

## Related Concepts

- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)

## References

- Hu E J, Shen Y, Wallis P, et al. LoRA: Low-rank adaptation of large language models. arXiv:2106.09685, 2021.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
- Ling C, Zhao X, Lu J, et al. Domain specialization as the key to make large language models disruptive: A comprehensive survey. arXiv:2305.18703, 2023.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/other/lora-low-rank-adaptation.md
git commit -m "feat(glossary): add LoRA English entry"
```

---

## Task 11: 提示调优 (Prompt Tuning / P-tuning) — Chinese entry

**Files:**
- Create: `web/glossary/other/prompt-tuning.md`

- [ ] **Step 1: Create Chinese 提示调优 glossary entry**

```markdown
---
title: 提示调优（Prompt Tuning / P-tuning）
description: 提示调优是一种参数高效的微调技术，通过在输入前添加可学习的"软提示"token并冻结预训练模型权重，以极少的训练参数实现下游任务适配。
keywords: 提示调优, P-tuning, Prompt Tuning, 大语言模型, 微调, 软提示, 参数高效
author: 天疆说
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: 提示调优（P-tuning）| 大模型高效微调
  description: 通过可学习的软提示token实现参数高效的大模型微调
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 提示调优（P-tuning）| 大模型高效微调
  description: 通过可学习的软提示token实现参数高效的大模型微调
  image: /logo.png
permalink: /glossary/prompt-tuning/
---

# 提示调优（Prompt Tuning / P-tuning）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

提示调优（Prompt Tuning）是一类参数高效微调（PEFT）技术，其核心思想是在模型输入前添加一组可学习的连续向量（称为"软提示"，soft prompt），同时冻结预训练模型的原始权重，仅训练软提示的参数。通过这种方式，模型可以在不修改自身参数的情况下，适应不同的下游任务。

P-tuning是提示调优的一种重要变体，由Liu等提出。P-tuning V2（2021年）是其改进版本，在多个尺度和任务上都能达到与全量微调相当的性能。

## P-tuning V2 原理

P-tuning V2的工作流程如下：

1. **输入处理**：将输入文本 $X$ 经过分词（tokenization）和嵌入（embedding）转换为向量序列 $\{h_1, h_2, ..., h_n\}$
2. **添加软提示**：在输入向量前拼接128个可学习的软提示token $S_1, S_2, ..., S_{128}$
3. **逐层嵌入**：在LLM的每一层中构建与软提示token对应的可训练嵌入参数
4. **训练**：仅更新软提示token和逐层嵌入的参数，原始模型权重 $\Phi_0$ 保持不变

输入模板为：

$$
T_{\text{input}} = \{S_1, S_2, \ldots, S_{128}, h_1, h_2, \ldots, h_n\}
$$

最终模型参数为原始参数与新增参数的组合：

$$
\Phi = \Phi_0 + \Delta\phi
$$

其中 $\Delta\phi$ 是通过训练优化的新增参数。

## 与硬提示的区别

提示调优中的"软提示"与常见的"硬提示"（hard prompt，即自然语言文本提示）有本质区别：

| 特征 | 硬提示（Hard Prompt） | 软提示（Soft Prompt） |
|------|----------------------|----------------------|
| 形式 | 自然语言文本 | 连续向量空间中的可学习参数 |
| 优化方式 | 人工设计或搜索 | 梯度下降自动优化 |
| 表达能力 | 受限于词表中的离散token | 可表示词表中不存在的连续语义 |
| 适用场景 | 通用交互、零样本推理 | 特定任务的高效适配 |

## 与全量微调和LoRA的对比

| 特征 | 全量微调 | P-tuning V2 | LoRA |
|------|----------|-------------|------|
| 可训练参数量 | 100% | <1% | 0.1%–3% |
| 修改位置 | 所有层 | 输入层 + 逐层嵌入 | 目标层权重矩阵 |
| 推理开销 | 无 | 额外处理软提示token | 无（合并后） |
| 典型模型 | 任意 | ChatGLM2-6B | ChatGLM3-6B |

## 在航天器意图识别中的应用

在Jing等（2025年）的研究中，P-tuning V2被用于微调ChatGLM2-6B模型。训练使用128个软提示token、学习率0.02、最大输入长度256个token、最大输出长度128个token。实验结果表明：

- P-tuning V2微调的ChatGLM2-6B在CoT提示条件下达到了**99.81%**的准确率
- 相比基础模型，准确率显著提升
- CoT提示微调后的模型在鲁棒性测试中表现最优，标准偏差接近基础模型

## 相关概念

- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [航天器意图识别](/glossary/spacecraft-intention-recognition/)

## 参考文献

- Liu X, Ji K, Fu Y, et al. P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks. arXiv:2110.07602, 2021.
- Liu P, Yuan W, Fu J, et al. Pretrain, prompt, and predict: A systematic survey of prompting methods in natural language processing. ACM Comput Surv. 2023;55(9):1-35.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Commit**

```bash
git add web/glossary/other/prompt-tuning.md
git commit -m "feat(glossary): add 提示调优 (Prompt Tuning / P-tuning) entry"
```

---

## Task 12: 提示调优 (Prompt Tuning / P-tuning) — English entry

**Files:**
- Create: `web/en/glossary/other/prompt-tuning.md`

- [ ] **Step 1: Create English 提示调优 glossary entry**

```markdown
---
title: Prompt Tuning (P-tuning)
description: Prompt Tuning is a parameter-efficient fine-tuning technique that prepends learnable "soft prompt" tokens to the input embedding while freezing pretrained model weights, adapting to downstream tasks with minimal trainable parameters.
keywords: prompt tuning, P-tuning, large language model, fine-tuning, soft prompt, parameter-efficient
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Prompt Tuning (P-tuning) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via learnable soft prompt tokens
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Prompt Tuning (P-tuning) | Efficient LLM Fine-Tuning
  description: Parameter-efficient LLM fine-tuning via learnable soft prompt tokens
  image: /logo.png
permalink: /en/glossary/prompt-tuning/
---

# Prompt Tuning (P-tuning)

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Prompt Tuning is a family of Parameter-Efficient Fine-Tuning (PEFT) techniques. The core idea is to prepend a set of learnable continuous vectors (called "soft prompts") to the model input, while freezing the original pretrained model weights. Only the soft prompt parameters are trained, allowing the model to adapt to different downstream tasks without modifying its own parameters.

P-tuning is an important variant of prompt tuning, proposed by Liu et al. P-tuning V2 (2021) is an improved version that achieves performance comparable to full fine-tuning across multiple scales and tasks.

## P-tuning V2 Principle

The P-tuning V2 workflow is as follows:

1. **Input processing**: Convert input text $X$ through tokenization and embedding into a vector sequence $\{h_1, h_2, ..., h_n\}$
2. **Add soft prompts**: Prepend 128 learnable soft prompt tokens $S_1, S_2, ..., S_{128}$ before the input vectors
3. **Layer-wise embeddings**: Construct trainable embedding parameters corresponding to soft prompt tokens at each layer of the LLM
4. **Training**: Only update soft prompt tokens and layer-wise embedding parameters; original model weights $\Phi_0$ remain unchanged

The input template is:

$$
T_{\text{input}} = \{S_1, S_2, \ldots, S_{128}, h_1, h_2, \ldots, h_n\}
$$

The final model parameters combine original and new parameters:

$$
\Phi = \Phi_0 + \Delta\phi
$$

where $\Delta\phi$ consists of the trained new parameters.

## Soft Prompts vs. Hard Prompts

The "soft prompts" in prompt tuning are fundamentally different from "hard prompts" (natural language text prompts):

| Feature | Hard Prompt | Soft Prompt |
|---------|------------|-------------|
| Form | Natural language text | Learnable parameters in continuous vector space |
| Optimization | Manual design or search | Automatic optimization via gradient descent |
| Expressiveness | Limited to discrete tokens in vocabulary | Can represent continuous semantics not in vocabulary |
| Use cases | General interaction, zero-shot inference | Efficient task-specific adaptation |

## Comparison with Full Fine-Tuning and LoRA

| Feature | Full Fine-Tuning | P-tuning V2 | LoRA |
|---------|-----------------|-------------|------|
| Trainable parameters | 100% | <1% | 0.1%–3% |
| Modification location | All layers | Input layer + layer-wise embeddings | Target layer weight matrices |
| Inference overhead | None | Additional processing for soft prompt tokens | None (after merging) |
| Typical model | Any | ChatGLM2-6B | ChatGLM3-6B |

## Application in Spacecraft Intention Recognition

In the study by Jing et al. (2025), P-tuning V2 was used to fine-tune the ChatGLM2-6B model. Training used 128 soft prompt tokens, learning rate 0.02, max input length 256 tokens, and max output length 128 tokens. Results showed:

- The P-tuning V2-fine-tuned ChatGLM2-6B achieved **99.81%** accuracy under CoT prompts
- Accuracy improved significantly compared to the base model
- The CoT-prompt-fine-tuned model showed the best robustness in perturbation tests, with standard deviation close to the base model

## Related Concepts

- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)

## References

- Liu X, Ji K, Fu Y, et al. P-tuning v2: Prompt tuning can be comparable to fine-tuning universally across scales and tasks. arXiv:2110.07602, 2021.
- Liu P, Yuan W, Fu J, et al. Pretrain, prompt, and predict: A systematic survey of prompting methods in natural language processing. ACM Comput Surv. 2023;55(9):1-35.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
```

- [ ] **Step 2: Commit**

```bash
git add web/en/glossary/other/prompt-tuning.md
git commit -m "feat(glossary): add Prompt Tuning (P-tuning) English entry"
```

---

## Task 13: Update sidebar.ts — Register all 6 new entries

**Files:**
- Modify: `web/.vuepress/sidebar.ts:182-196` (动力学与数学基础)
- Modify: `web/.vuepress/sidebar.ts:242-250` (其他技术)

- [ ] **Step 1: Add CW方程 to 动力学与数学基础 sidebar**

In `web/.vuepress/sidebar.ts`, add `'/glossary/dynamics/clohessy-wiltshire'` to the "动力学与数学基础" children array, after `'/glossary/dynamics/poincare-section'`:

```typescript
          '/glossary/dynamics/poincare-section',
          '/glossary/dynamics/clohessy-wiltshire',
```

- [ ] **Step 2: Add 5 entries to 其他技术 sidebar**

In `web/.vuepress/sidebar.ts`, add 5 entries to the "其他技术" children array, after `'/glossary/other/cislunar-navigation-prospects'`:

```typescript
          '/glossary/other/cislunar-navigation-prospects',
          '/glossary/other/noncooperative-target',
          '/glossary/other/spacecraft-intention-recognition',
          '/glossary/other/chain-of-thought-prompting',
          '/glossary/other/lora-low-rank-adaptation',
          '/glossary/other/prompt-tuning',
```

- [ ] **Step 3: Verify sidebar syntax**

Run: `cd web && npx tsc --noEmit .vuepress/sidebar.ts 2>&1 || true`
Expected: No syntax errors (may have unrelated type warnings)

- [ ] **Step 4: Commit**

```bash
git add web/.vuepress/sidebar.ts
git commit -m "feat(sidebar): register 6 new glossary entries in Chinese sidebar"
```

---

## Task 14: Update sidebar-en.ts — Register all 6 new entries

**Files:**
- Modify: `web/.vuepress/sidebar-en.ts:161-173` (Dynamics models)
- Modify: `web/.vuepress/sidebar-en.ts:199-203` (Other)

- [ ] **Step 1: Add CW方程 to Dynamics models sidebar**

In `web/.vuepress/sidebar-en.ts`, add `'/en/glossary/dynamics/clohessy-wiltshire'` to the "Dynamics models" children array, after `'/en/glossary/dynamics/poincare-section'`:

```typescript
          '/en/glossary/dynamics/poincare-section',
          '/en/glossary/dynamics/clohessy-wiltshire',
```

- [ ] **Step 2: Add 5 entries to Other sidebar**

In `web/.vuepress/sidebar-en.ts`, add 5 entries to the "Other" children array, after `'/en/glossary/other/starshade'`:

```typescript
          '/en/glossary/other/starshade',
          '/en/glossary/other/noncooperative-target',
          '/en/glossary/other/spacecraft-intention-recognition',
          '/en/glossary/other/chain-of-thought-prompting',
          '/en/glossary/other/lora-low-rank-adaptation',
          '/en/glossary/other/prompt-tuning',
```

- [ ] **Step 3: Commit**

```bash
git add web/.vuepress/sidebar-en.ts
git commit -m "feat(sidebar): register 6 new glossary entries in English sidebar"
```

---

## Task 15: Update glossary READMEs

**Files:**
- Modify: `web/glossary/README.md` (Chinese index)
- Modify: `web/en/glossary/README.md` (English index)

- [ ] **Step 1: Update Chinese README — 动力学与数学基础 section**

In `web/glossary/README.md`, add after the Poincaré Section entry:

```markdown
- [CW方程（Clohessy-Wiltshire）](/glossary/clohessy-wiltshire/)
```

- [ ] **Step 2: Update Chinese README — 其他技术 section**

In `web/glossary/README.md`, add after the STM entry:

```markdown
- [非合作目标（Noncooperative Target）](/glossary/noncooperative-target/)
- [航天器意图识别（Spacecraft Intention Recognition）](/glossary/spacecraft-intention-recognition/)
- [思维链提示（CoT）](/glossary/chain-of-thought-prompting/)
- [低秩适配（LoRA）](/glossary/lora-low-rank-adaptation/)
- [提示调优（P-tuning）](/glossary/prompt-tuning/)
```

- [ ] **Step 3: Update Chinese README — 更新说明 section**

Add at the top of the update log:

```markdown
**2026-04-27 更新**：根据Jing等(2025)关于基于大语言模型的航天器意图识别论文，新增以下术语：
- CW方程（Clohessy-Wiltshire）
- 非合作目标（Noncooperative Target）
- 航天器意图识别（Spacecraft Intention Recognition）
- 思维链提示（CoT）
- 低秩适配（LoRA）
- 提示调优（P-tuning）
```

- [ ] **Step 4: Update English README — Dynamical Models section**

In `web/en/glossary/README.md`, add after the Poincaré Section entry:

```markdown
- [Clohessy-Wiltshire (CW) Equation](/en/glossary/clohessy-wiltshire/)
```

- [ ] **Step 5: Update English README — Other section**

In `web/en/glossary/README.md`, add after the Starshade entry:

```markdown
- [Noncooperative Target](/en/glossary/noncooperative-target/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Chain-of-Thought (CoT) Prompting](/en/glossary/chain-of-thought-prompting/)
- [Low-Rank Adaptation (LoRA)](/en/glossary/lora-low-rank-adaptation/)
- [Prompt Tuning (P-tuning)](/en/glossary/prompt-tuning/)
```

- [ ] **Step 6: Update English README — Update Note section**

Add at the top of the update log:

```markdown
**2026-04-27 Update**: New entries based on Jing et al. (2025) on LLM-based spacecraft intention recognition:
- Clohessy-Wiltshire (CW) Equation
- Noncooperative Target
- Spacecraft Intention Recognition
- Chain-of-Thought (CoT) Prompting
- Low-Rank Adaptation (LoRA)
- Prompt Tuning (P-tuning)
```

- [ ] **Step 7: Commit**

```bash
git add web/glossary/README.md web/en/glossary/README.md
git commit -m "docs(glossary): update READMEs with 6 new entries"
```

---

## Task 16: Build verification

**Files:** None (verification only)

- [ ] **Step 1: Run sidebar generation and build**

```bash
cd web && npm run docs:build 2>&1 | tail -20
```

Expected: Build completes without errors. All 12 new glossary pages are generated in `dist/`.

- [ ] **Step 2: Verify new pages exist**

```bash
ls -la web/.vuepress/dist/glossary/clohessy-wiltshire/index.html
ls -la web/.vuepress/dist/glossary/noncooperative-target/index.html
ls -la web/.vuepress/dist/glossary/spacecraft-intention-recognition/index.html
ls -la web/.vuepress/dist/glossary/chain-of-thought-prompting/index.html
ls -la web/.vuepress/dist/glossary/lora-low-rank-adaptation/index.html
ls -la web/.vuepress/dist/glossary/prompt-tuning/index.html
ls -la web/.vuepress/dist/en/glossary/clohessy-wiltshire/index.html
ls -la web/.vuepress/dist/en/glossary/noncooperative-target/index.html
ls -la web/.vuepress/dist/en/glossary/spacecraft-intention-recognition/index.html
ls -la web/.vuepress/dist/en/glossary/chain-of-thought-prompting/index.html
ls -la web/.vuepress/dist/en/glossary/lora-low-rank-adaptation/index.html
ls -la web/.vuepress/dist/en/glossary/prompt-tuning/index.html
```

Expected: All 12 files exist.

- [ ] **Step 3: Final commit**

```bash
git add -A
git status
```

Verify no uncommitted changes remain.
