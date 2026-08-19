---
title: 序列凸规划（Sequential Convex Programming, SCP / Successive Convexification）
description: 把非凸最优控制问题在参考解处逐次线性化、配合信赖域与无损凸化，转化为一系列二阶锥规划（SOCP）子问题迭代求解的方法。具有内点法多项式时间复杂度、确定性收敛判据、可在线实时求解等特点；广泛用于动力下降制导、低推力转移、再入轨迹优化。
keywords: 序列凸规划, Sequential Convex Programming, SCP, Successive Convexification, 凸优化, Convex Optimization, 二阶锥规划, SOCP, 信赖域, Trust Region, 损失无损凸化, Lossless Convexification, 虚拟控制, Virtual Control, 内点法, 动力下降制导, Powered Descent
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 序列凸规划（SCP）
  desc: 线性化 + 信赖域 + 无损凸化 → 一串 SOCP 子问题——实时轨迹优化的核心工具。
  image: /logo.png
og:
  title: 序列凸规划详解 | 轨迹优化
  description: 把非凸最优控制问题逐次线性化、配合信赖域与无损凸化，转化为一系列 SOCP 子问题迭代求解。多项式时间复杂度 + 确定性收敛判据，适合实时/on-board 应用；动力下降制导、低推力转移、再入轨迹优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 序列凸规划详解 | 轨迹优化
  description: 把非凸最优控制问题逐次线性化、配合信赖域与无损凸化，转化为一系列 SOCP 子问题迭代求解。多项式时间复杂度 + 确定性收敛判据，适合实时/on-board 应用；动力下降制导、低推力转移、再入轨迹优化。
  image: /logo.png
permalink: /glossary/dynamics/scp/
---

# 序列凸规划（Sequential Convex Programming, SCP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

序列凸规划（sequential convex programming, SCP，又称 successive convexification、SCvx）是 [直接法](/glossary/dynamics/direct-methods/) 中针对**非凸**最优控制问题的一类方法：在参考轨迹 $\mathbf{x}^{*}(t)$ 处对非线性动力学做一阶 Taylor 展开，配合信赖域约束、对非凸控制约束做「无损凸化」，把原问题转换为一系列二阶锥规划（SOCP）子问题。每次迭代用 SOCP 解更新参考轨迹，直到 $\|\mathbf{x}^{(n)}-\mathbf{x}^{(n-1)}\|$ 收敛（Acikmese & Ploen 2007；Szmuk et al. 2017；Wang & Grant 2018）。

与一般 [直接配点法](/glossary/dynamics/direct-collocation/) 求解 NLP 不同，SCP 子问题是**凸**的：

- 内点法可在多项式时间内解到给定精度，且有确定性停机判据；
- 用户提供初值不影响内点法启动（self-dual embedding 自动构造可行起点）；
- 全局最优性在子问题级别可保证（虽然原非凸问题仍是局部最优）。

这些性质使 SCP 适合**实时/on-board** 应用——这是它与一般 NLP 直接法的核心区别（Acikmese & Ploen 2007）。

## 数学形式

考虑非凸 OCP

$$\min_{\mathbf{x},\mathbf{u}} J,\ \ \dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u}),\ \ \mathbf{x}(t_0)=\mathbf{x}_0,\ \ \text{边界/路径约束}.$$

SCP 的第 $n$ 次迭代在参考解 $\mathbf{x}^{(n-1)}(t)$ 处线性化动力学

$$\dot{\mathbf{x}} \approx A(t)\,\mathbf{x}+B(t)\,\mathbf{u}+\mathbf{q}(t),$$

$$A(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\bigg|_{\mathbf{x}^{(n-1)}},\quad B(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{u}}\bigg|_{\mathbf{x}^{(n-1)}},\quad \mathbf{q}(t)=\mathbf{f}(\mathbf{x}^{(n-1)},\mathbf{u}^{(n-1)})-A\,\mathbf{x}^{(n-1)}-B\,\mathbf{u}^{(n-1)}.$$

加上**信赖域**约束 $\|\mathbf{x}-\mathbf{x}^{(n-1)}\|\leq \delta_n$ 限制线性化误差，把原问题转为线性时变（LTV）动力学 + 凸约束的子问题。配合伪谱/Radau 离散化为有限维 SOCP，用 ECOS、Mosek、CVX 等求解。

### 无损凸化（lossless convexification）

很多航天问题的非凸性来自控制约束，而非动力学。典型例子是动力下降的推力幅值约束 $\rho_2\leq\|\mathbf{T}_c\|\leq\rho_1$——下界非零导致可行集是「环」，非凸。引入松弛变量 $\Gamma\geq\|\mathbf{T}_c\|$，把控制约束改为凸锥 $\|\mathbf{T}_c\|\leq\Gamma,\ \rho_2\leq\Gamma\leq\rho_1$，构造**松弛问题**。

Acikmese & Ploen（2007）的关键 Lemma 证明：在一定条件下，松弛问题的最优解必然落在原始非凸可行集上——因此**松弛不损失最优性**（lossless）。这一结果后来推广到一般控制仿射问题（Wang & Grant 2018）。

### 虚拟控制（virtual control）

线性化可能产生原始问题可行但子问题不可行的「人工不可行」（artificial infeasibility）。引入未受限的**虚拟控制** $\boldsymbol{\nu}$ 加入线性化动力学约束，使子问题恒可行；在代价函数里对 $\|\boldsymbol{\nu}\|$ 加大权重，迫使收敛时 $\boldsymbol{\nu}\to\mathbf{0}$。若收敛后 $\boldsymbol{\nu}=\mathbf{0}$，则子问题解严格满足非线性动力学（Szmuk et al. 2017）。

### 信赖域与收敛判据

信赖域半径 $\delta_n$ 自适应调整：若实际代价下降 $\Delta J_{\text{act}}$ 与预测下降 $\Delta J_{\text{pred}}$ 之比 $r_n$ 接近 1（线性化准确），扩大 $\delta_{n+1}$；若 $r_n$ 接近 0（线性化不准），缩小 $\delta_{n+1}$。Hofmann & Topputo（2021）采用 $\rho_i,\alpha_i,\beta_i$ 三段调整策略。

收敛判据通常包含三项：动力学违反 $\epsilon_c\to 0$、代价变化 $\epsilon_\phi\to 0$、虚拟控制 $\|\boldsymbol{\nu}\|\to 0$。

## 变体

- **SCvx**（Szmuk et al.）：经典信赖域 + 虚拟控制框架，理论收敛性证明较完整。
- **GUSTO**（Mao, Szmuk, Acikmese）：基于成功步/失败步的两阶段策略，工程实现友好。
- **ECIPS / cvxgen**：嵌入式代码生成，用于星载实时求解。
- **PC-SCoP**（相位约束序列锥规划）：多相问题扩展，在相间事件处施加线性化约束。
- **逐次凸优化 + 切换时刻提取**（Hofmann-Topputo 2021）：用 FRPM 离散化，配合 bang-off-bang 控制的网加密——可精确捕捉低推力燃料最优的开关结构。

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

- **动力下降制导**：火星/月球定点着陆是 SCP 的「杀手锏」应用——Acikmese & Ploen 的 lossless convexification 是为该问题量身定做，已用于 SpaceX Starship 的 on-board 实时规划（Acikmese & Ploen 2007；Song et al. 2021）。
- **低推力转移**：日地/地月低推力多圈燃料最优转移，Wang & Grant 首次把 SCP 用于该类问题；Hofmann-Topputo 推广到行星际、配合 hp-Radau + bang-off-bang 加密（Wang & Grant 2018；Hofmann & Topputo 2021）。
- **地月平动点转移**：Halo↔NRHO 等高非线性区域，Kayama 等（2022）证明 SCP 在 CR3BP 邻域仍可收敛，但需「推力延续法」（从大加速度逐步降至任务推力）才能在低加速度下不出发散。
- **碰撞规避与交会**：近场 RPO、被动安全交会，用 SCP 求解带凸化保持约束的转移（Elango et al. 2025）。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)
- [凸锥（Convex Cone）](/glossary/dynamics/convex-cone/)
- [动力下降燃料最优（Fuel-Optimal Powered Descent）](/glossary/dynamics/fuel-optimal/)
- [CR3BP](/glossary/dynamics/cr3bp/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

## 参考文献

- Acikmese, B., & Ploen, S. R. (2007). Convex programming approach to powered descent guidance for Mars landing. *Journal of Guidance, Control, and Dynamics*, 30(5), 1353–1366.
- Szmuk, M., Reynolds, T. P., & Acikmese, B. (2017). Successive convexification for real-time six-degree-of-freedom powered descent guidance. *Journal of Guidance, Control, and Dynamics*.
- Wang, Z., & Grant, M. J. (2018). Minimum-fuel low-thrust transfers for spacecraft: a convex approach. *IEEE Transactions on Aerospace and Electronic Systems*.
- Hofmann, C., & Topputo, F. (2021). Rapid low-thrust trajectory optimization in deep space based on convex programming. *Journal of Guidance, Control, and Dynamics*.
- Kayama, H., 等. (2022). Low-thrust trajectory design with successive convex optimization for libration point orbits.
- Song, Z., 等. (2021). Adaptive powered descent guidance based on multi-phase pseudospectral convex optimization.
- Tang, S., & Conway, B. A. (2018). Fuel-optimal low-thrust trajectory optimization using indirect method and successive convex programming.
- Elango, A., 等. (2025). Successive convexification for passively-safe spacecraft rendezvous on near rectilinear halo orbit.
- Mao, Y., Szmuk, M., & Acikmese, B. (2016). Successive convexification of non-convex optimal control problems and its convergence properties. *IEEE CDC*.
