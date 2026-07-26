---
title: 微分修正（Differential Correction）
description: 详细解析微分修正方法的定义、数学原理、状态转移矩阵线性化技术，以及在地月周期轨道求解中的应用
keywords: 微分修正, Differential Correction, 状态转移矩阵, 打靶法, 轨道修正, 周期轨道, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 微分修正（Differential Correction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 微分修正方法详解 | 轨道初始条件迭代求解技术
  description: 详细解析微分修正方法的定义、数学原理、状态转移矩阵线性化技术，以及在地月周期轨道求解中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 微分修正方法详解 | 轨道初始条件迭代求解技术
  description: 详细解析微分修正方法的定义、数学原理、状态转移矩阵线性化技术，以及在地月周期轨道求解中的应用
  image: /logo.png
permalink: /glossary/dynamics/differential-correction/
---

# 微分修正（Differential Correction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微分修正（Differential Correction）是轨道力学中一种核心的迭代数值方法，利用**状态转移矩阵**（State Transition Matrix, STM）对轨道的初始条件进行线性化修正，使轨道逐步收敛至满足特定约束条件（如周期条件、近月点高度约束、过境点约束等）的解。它是打靶法（Shooting Method）的数学基础，也是几乎所有轨道数值设计流程中不可或缺的工具。

在地月空间动力学研究中，微分修正广泛用于求解平动点附近的周期轨道（Halo 轨道、Lyapunov 轨道、DRO 等）的初始条件，以及拼接法中连接点处的状态匹配。

## 核心要素

### 状态转移矩阵

状态转移矩阵 $\boldsymbol{\Phi}(t, t_0)$ 描述了轨道状态随初始条件变化的线性敏感性。设轨道状态向量为 $\mathbf{x} = [\mathbf{r}^T, \mathbf{v}^T]^T \in \mathbb{R}^6$，则：

$$\delta \mathbf{x}(t) = \boldsymbol{\Phi}(t, t_0) \cdot \delta \mathbf{x}(t_0)$$

其中 $\delta \mathbf{x}$ 为状态偏差。STM 满足协变微分方程：

$$\dot{\boldsymbol{\Phi}}(t, t_0) = \mathbf{A}(t) \cdot \boldsymbol{\Phi}(t, t_0), \quad \boldsymbol{\Phi}(t_0, t_0) = \mathbf{I}_6$$

其中 $\mathbf{A}(t) = \frac{\partial \mathbf{f}}{\partial \mathbf{x}}\bigg|_{\mathbf{x}(t)}$ 为动力学方程的雅可比矩阵。在数值积分中，STM 方程通常与轨道方程同时积分。

### 基本修正算法

设目标约束为 $\mathbf{g}(\mathbf{x}_f) = \mathbf{0}$（如周期条件要求末端状态与初始状态满足某种关系），当前轨道末端状态偏差为 $\Delta \mathbf{x}_f$。利用 STM 线性化：

$$\Delta \mathbf{x}_f \approx \frac{\partial \mathbf{g}}{\partial \mathbf{x}_f} \cdot \boldsymbol{\Phi}(t_f, t_0) \cdot \Delta \mathbf{x}_0$$

记约束对初始条件的敏感性矩阵为 $\mathbf{M} = \frac{\partial \mathbf{g}}{\partial \mathbf{x}_f} \cdot \boldsymbol{\Phi}(t_f, t_0)$，则初始条件修正量为：

$$\Delta \mathbf{x}_0 = -\mathbf{M}^{\dagger} \cdot \mathbf{g}(\mathbf{x}_f)$$

其中 $\mathbf{M}^{\dagger}$ 为 $\mathbf{M}$ 的伪逆（当 $\mathbf{M}$ 为方阵时即为逆矩阵）。迭代直至 $\|\mathbf{g}(\mathbf{x}_f)\| < \varepsilon$（$\varepsilon$ 为收敛容差）。

### 周期轨道的微分修正

对于 CR3BP 中的对称周期轨道（如 DRO），利用轨道的对称性可以简化微分修正：

**DRO 的打靶条件（关于 $x$ 轴对称）：**

DRO 轨道关于 $x$ 轴对称，因此只需对半周期进行积分。在 $x$ 轴穿越点处，约束条件为：

$$y(t_f) = 0, \quad \dot{x}(t_f) = 0, \quad \dot{z}(t_f) = 0$$

自由变量为初始条件中的 $\dot{y}_0$ 和轨道周期 $T$（或半周期 $T/2$）。修正方程为：

$$\begin{bmatrix} \delta \dot{y}_0 \\ \delta T/2 \end{bmatrix} = -\mathbf{M}^{-1} \begin{bmatrix} y_f \\ \dot{x}_f \end{bmatrix}$$

其中 $\mathbf{M}$ 为 $2 \times 2$ 敏感性矩阵，由 STM 的相关分量构成。

### 在拼接法中的应用

魏赞等（2026）在利用拼接法设计 DRO 转移轨道时，微分修正用于：

1. **LEO 至近月点弧段修正**：调整 LEO 出发速度，使轨道到达月球附近时满足近月点高度约束
2. **近月点至 DRO 弧段修正**：从近月点出发的初始条件修正，使末端状态收敛至目标 DRO 轨道
3. **拼接点匹配修正**：当两段轨道在近月点处的速度不匹配时，修正各段参数以减小速度差 $\|\Delta \mathbf{v}_{\text{PLF}}\|$

### 多步打靶与单步打靶

| 方法 | 描述 | 适用场景 |
| :--- | :--- | :--- |
| **单步打靶** | 从初始点一次积分到末端，用 STM 修正初始条件 | 短弧段、约束简单 |
| **多步打靶** | 将轨道分为多段，每段独立积分并在节点处施加连续性约束 | 长弧段、复杂约束、高精度要求 |

多步打靶在每段内使用各自的 STM，通过节点处的状态匹配约束将各段耦合。相比单步打靶，多步打靶具有更好的数值稳定性和更快的收敛速度。

### 收敛性分析

微分修正的收敛性受以下因素影响：

- **初始猜测的质量**：距离真实解越近，线性化近似越准确，收敛越快
- **约束条件的非线性程度**：强非线性约束可能需要更多迭代或阻尼策略
- **STM 的数值精度**：长时间积分中 STM 可能积累误差，影响修正方向的准确性
- **自由变量与约束的匹配**：自由变量数应等于约束数，否则为欠定或超定问题

典型收敛速度为**二次收敛**（牛顿法特性），在初始猜测较好时通常 3-5 次迭代即可达到 $10^{-12}$ 量级的精度。

## 应用价值

微分修正方法在地月空间轨道设计中的核心地位体现在：

- **周期轨道求解**：Halo 轨道、Lyapunov 轨道、DRO 等所有周期轨道族的初始条件都依赖微分修正求解
- **转移轨道优化**：在拼接法和直接法中，微分修正用于调整设计参数以满足终端约束
- **轨道保持策略**：轨道保持机动的设计本质上也是微分修正问题——确定最小速度增量使轨道回归标称轨迹
- **任务可行性评估**：通过快速微分修正可以判断某一转移方案是否满足所有约束条件

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [拼接法（Patched Method）](/glossary/dynamics/patched-method/)
- [延拓（Continuation）](/glossary/dynamics/continuation/)
- [庞加莱图（Poincaré Map）](/glossary/dynamics/poincare-map/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)

## 参考文献

- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 北京航空航天大学学报, 2026.
- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987, 41(1-4): 107-124.
- Pavlak T A, Howell K C. Trajectory design in the planar circular restricted three-body problem using polynomial target maps[C]. AAS/AIAA Astrodynamics Specialist Conference, 2010.
