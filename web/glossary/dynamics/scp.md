---
title: 序列凸规划
description: 把非凸最优控制问题在参考解处逐次线性化、配合信赖域与无损凸化，转化为一系列二阶锥规划（SOCP）子问题迭代求解的方法。具有内点法多项式时间复杂度、确定性收敛判据、可在线实时求解等特点。广泛用于动力下降制导、低推力转移、再入轨迹优化。
keywords: 序列凸规划, Sequential Convex Programming, SCP, Successive Convexification, 凸优化, Convex Optimization, 二阶锥规划, SOCP, 信赖域, Trust Region, 损失无损凸化, Lossless Convexification, 虚拟控制, Virtual Control, 内点法, 动力下降制导, Powered Descent
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 序列凸规划（SCP）
  desc: 线性化、信赖域与无损凸化结合，把问题化为一串 SOCP 子问题：实时轨迹优化的核心工具。
  image: /logo.png
og:
  title: 序列凸规划详解 | 轨迹优化
  description: 把非凸最优控制问题逐次线性化、配合信赖域与无损凸化，转化为一系列 SOCP 子问题迭代求解。多项式时间复杂度 + 确定性收敛判据，适合实时/on-board 应用。动力下降制导、低推力转移、再入轨迹优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 序列凸规划详解 | 轨迹优化
  description: 把非凸最优控制问题逐次线性化、配合信赖域与无损凸化，转化为一系列 SOCP 子问题迭代求解。多项式时间复杂度 + 确定性收敛判据，适合实时/on-board 应用。动力下降制导、低推力转移、再入轨迹优化。
  image: /logo.png
permalink: /glossary/dynamics/scp/
---

# 序列凸规划（Sequential Convex Programming, SCP）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

序列凸规划（sequential convex programming, SCP，又称 successive convexification、SCvx）是 [直接法](/glossary/dynamics/direct-methods/) 中针对非凸最优控制问题的一类方法：在参考轨迹 $\mathbf{x}^{*}(t)$ 处对非线性动力学做一阶 Taylor 展开，配合信赖域约束、对非凸控制约束做无损凸化，把原问题转换为一系列二阶锥规划（SOCP）子问题。每次迭代用 SOCP 解更新参考轨迹，直到 $\|\mathbf{x}^{(n)}-\mathbf{x}^{(n-1)}\|$ 收敛，相关框架见 Acikmese 和 Ploen 2007 与 Szmuk 等 2017\cite{wangMinimumfuelLowthrustTransfers2018}。

与一般 [直接配点法](/glossary/dynamics/direct-collocation/) 求解 NLP 不同，SCP 子问题是凸的：

- 内点法可在多项式时间内解到给定精度，且有确定性停机判据。
- 用户提供初值不影响内点法启动（self-dual embedding 自动构造可行起点）。
- 全局最优性在子问题级别可保证（虽然原非凸问题仍是局部最优）。

这些性质使 SCP 适合实时/on-board 应用，这是它与一般 NLP 直接法的核心区别。

## 数学形式

考虑非凸 OCP

$$\min_{\mathbf{x},\mathbf{u}} J,\ \ \dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u}),\ \ \mathbf{x}(t_0)=\mathbf{x}_0,\ \ \text{边界/路径约束}.$$

SCP 的第 $n$ 次迭代在参考解 $\mathbf{x}^{(n-1)}(t)$ 处线性化动力学

$$\dot{\mathbf{x}} \approx A(t)\,\mathbf{x}+B(t)\,\mathbf{u}+\mathbf{q}(t),$$

$$A(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\bigg|_{\mathbf{x}^{(n-1)}},\quad B(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{u}}\bigg|_{\mathbf{x}^{(n-1)}},\quad \mathbf{q}(t)=\mathbf{f}(\mathbf{x}^{(n-1)},\mathbf{u}^{(n-1)})-A\,\mathbf{x}^{(n-1)}-B\,\mathbf{u}^{(n-1)}.$$

加上信赖域约束 $\|\mathbf{x}-\mathbf{x}^{(n-1)}\|\leq \delta_n$ 限制线性化误差，把原问题转为线性时变（LTV）动力学 + 凸约束的子问题。配合伪谱/Radau 离散化为有限维 SOCP，用 ECOS、Mosek、CVX 等求解。

### 无损凸化（lossless convexification）

很多航天问题的非凸性来自控制约束，而非动力学。典型例子是动力下降的推力幅值约束 $\rho_2\leq\|\mathbf{T}_c\|\leq\rho_1$：下界非零导致可行集是环，非凸。引入松弛变量 $\Gamma\geq\|\mathbf{T}_c\|$，把控制约束改为凸锥 $\|\mathbf{T}_c\|\leq\Gamma,\ \rho_2\leq\Gamma\leq\rho_1$，构造松弛问题。

Acikmese 和 Ploen 在 2007 年的关键 Lemma 证明：在一定条件下，松弛问题的最优解必然落在原始非凸可行集上，因此松弛不损失最优性（lossless）。这一结果后来推广到一般控制仿射问题\cite{Acikmes2007}。

### 虚拟控制（virtual control）

线性化可能产生原始问题可行但子问题不可行的人工不可行（artificial infeasibility）。引入未受限的虚拟控制 $\boldsymbol{\nu}$ 加入线性化动力学约束，使子问题恒可行。在代价函数里对 $\|\boldsymbol{\nu}\|$ 加大权重，迫使收敛时 $\boldsymbol{\nu}\to\mathbf{0}$。若收敛后 $\boldsymbol{\nu}=\mathbf{0}$，则子问题解严格满足非线性动力学。

### 信赖域与收敛判据

信赖域半径 $\delta_n$ 自适应调整：若实际代价下降 $\Delta J_{\text{act}}$ 与预测下降 $\Delta J_{\text{pred}}$ 之比 $r_n$ 接近 1（线性化准确），扩大 $\delta_{n+1}$。若 $r_n$ 接近 0（线性化不准），缩小 $\delta_{n+1}$。Hofmann 和 Topputo 采用 $\rho_i,\alpha_i,\beta_i$ 三段调整策略\cite{hofmannRapidLowthrustTrajectory2021}。

收敛判据通常包含三项：动力学违反 $\epsilon_c\to 0$、代价变化 $\epsilon_\phi\to 0$、虚拟控制 $\|\boldsymbol{\nu}\|\to 0$。

## 变体

- SCvx（Szmuk et al.）：经典信赖域 + 虚拟控制框架，理论收敛性证明较完整\cite{szmukSuccessiveConvexificationRealTime2020}。
- GUSTO（Mao, Szmuk, Acikmese）：基于成功步/失败步的两阶段策略，工程实现友好\cite{maoSuccessiveConvexificationNonconvex2016}。
- ECIPS / cvxgen：嵌入式代码生成，用于星载实时求解。
- PC-SCoP（相位约束序列锥规划）：多相问题扩展，在相间事件处施加线性化约束。
- 逐次凸优化与切换时刻提取：用 FRPM 离散化，配合 bang-off-bang 控制的网加密，可精确捕捉低推力燃料最优的开关结构。

## 与直接配点 / 伪谱法的对比

| 特性 | SCP | [直接配点/伪谱法](/glossary/dynamics/direct-collocation/) |
| :--- | :--- | :--- |
| 子问题 | SOCP（凸） | 一般 NLP（非凸） |
| 收敛性 | 多项式时间 + 确定性 | 局部，依赖初值 |
| 实时性 | 强（毫秒~秒级） | 弱（秒~分钟级） |
| 全局最优 | 子问题级保证 | 无保证 |
| 应用场景 | 制导、on-board | 任务设计、地面优化 |
| 控制结构精度 | 需切换时刻提取 | 直接捕捉 |

## 应用要点

- 动力下降制导：火星/月球定点着陆是 SCP 的杀手锏应用：Acikmese & Ploen 的 lossless convexification 是为该问题量身定做，已用于 SpaceX Starship 的 on-board 实时规划\cite{Song2021}。
- 低推力转移：日地/地月低推力多圈燃料最优转移，Wang & Grant 首次把 SCP 用于该类问题，Tang 和 Conway 则把间接法与序列凸规划结合起来求解同类问题\cite{tangFueloptimalLowthrustTrajectory2018}。Hofmann 和 Topputo 推广到行星际、配合 hp-Radau + bang-off-bang 加密。
- 地月平动点转移：Halo 与 NRHO 之间的转移等高非线性区域，Kayama 等 2022 证明 SCP 在 CR3BP 邻域仍可收敛，但需推力延续法（从大加速度逐步降至任务推力）才能在低加速度下不出发散\cite{kayamaLowThrustTrajectoryDesign2022a}。
- 碰撞规避与交会：近场 RPO、被动安全交会，用 SCP 求解带凸化保持约束的转移\cite{elangoSuccessiveConvexificationPassivelysafe2025}。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)
- [凸锥（Convex Cone）](/glossary/dynamics/convex-cone/)
- [动力下降燃料最优（Fuel-Optimal Powered Descent）](/glossary/dynamics/fuel-optimal/)
- [CR3BP](/glossary/dynamics/cr3bp/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
