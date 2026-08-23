---
title: 直接法（Direct Methods for Trajectory Optimization）
description: 轨迹优化的一大类数值方法。把无限维最优控制问题中的状态与控制量同时离散化，转录为有限维非线性规划（NLP）求解，与间接法相对。涵盖直接打靶、多重打靶、直接配点、伪谱法、序列凸规划、DMOC 等分支及其工程取舍，并解释 NLP 的 KKT 乘子与连续协态的对应关系。
keywords: 直接法, Direct Method, 直接转录, Direct Transcription, 非线性规划, NLP, 轨迹优化, 最优控制, SQP, 内点法, Ipopt, SNOPT, 卡罗需-库恩-塔克, KKT, 协态映射
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 直接法（Direct Methods for Trajectory Optimization）
  desc: 把最优控制问题转录为非线性规划求解：分支、数学细节、工程取舍。
  image: /logo.png
og:
  title: 直接法详解 | 轨迹优化
  description: 轨迹优化的一大类数值方法。把无限维最优控制问题中的状态与控制量同时离散化，转录为有限维 NLP 求解。涵盖直接打靶、配点、伪谱、序列凸规划、DMOC 等分支。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接法详解 | 轨迹优化
  description: 轨迹优化的一大类数值方法。把无限维最优控制问题中的状态与控制量同时离散化，转录为有限维 NLP 求解。涵盖直接打靶、配点、伪谱、序列凸规划、DMOC 等分支。
  image: /logo.png
permalink: /glossary/dynamics/direct-methods/
---

# 直接法（Direct Methods for Trajectory Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

直接法是轨迹优化的一大类数值方法：将无限维的最优控制问题中的状态 $\mathbf{x}(t)$ 与控制 $\mathbf{u}(t)$ 同时在离散网格上参数化，把动力学方程 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ 替换为一组代数约束，连同边界条件、路径约束和性能指标一起，构成有限维的非线性规划（NLP）问题，再用 SQP、内点法等通用 NLP 算法求解（Betts 1998；Conway 2010）。

与[间接法](/glossary/dynamics/indirect-methods/)相对：间接法先解析推导庞特里亚金极大值原理得到包含协态变量的两点边值问题（[TPBVP](/glossary/dynamics/tpbvp/)），再数值求解；直接法跳过协态方程，直接对状态/控制做优化。两种路线最终都收敛到 KKT 条件，因此当离散网格趋于精细时，直接法 NLP 的拉格朗日乘子与间接法的协态变量之间存在明确的对应关系（Hager 1976；Benson 2005）。

## 一般数学形式

考虑 Bolza 形式的连续最优控制问题

$$\min_{\mathbf{x},\mathbf{u},t_f} J = \underbrace{E(\mathbf{x}(t_0),\mathbf{x}(t_f),t_f)}_{\text{Mayer 项}} + \int_{t_0}^{t_f} L(\mathbf{x}(t),\mathbf{u}(t),t)\,\mathrm{d}t$$

s.t. $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$（动力学）、边界条件 $\boldsymbol{\psi}_0\leq\boldsymbol{\psi}(\mathbf{x}(t_0),\mathbf{x}(t_f))\leq\boldsymbol{\psi}_f$、路径约束 $\mathbf{g}_l\leq\mathbf{g}(\mathbf{x},\mathbf{u},t)\leq\mathbf{g}_u$、盒形上下界。

直接法把这个无限维问题按下式离散化

$$\mathbf{X}=\{(\mathbf{x}_0,\mathbf{u}_0),(\mathbf{x}_1,\mathbf{u}_1),\dots,(\mathbf{x}_M,\mathbf{u}_M)\},\quad \mathbf{c}(\mathbf{X})=\begin{bmatrix}\boldsymbol{\zeta}_0\\\boldsymbol{\zeta}_1\\\vdots\\\boldsymbol{\zeta}_{M-1}\\\boldsymbol{\psi}\end{bmatrix}\approx\mathbf{0},$$

其中 $\boldsymbol{\zeta}_j$ 称为**缺陷约束**（defect constraint），用以近似满足动力学方程。最终求解的 NLP 为

$$\min_{\mathbf{X}} F(\mathbf{X})\quad \text{s.t.}\quad \mathbf{c}_l\leq\mathbf{c}(\mathbf{X})\leq\mathbf{c}_u,\ \ \mathbf{X}_l\leq\mathbf{X}\leq\mathbf{X}_u.$$

直接法分支之间的差别，主要是用什么样的离散策略构造 $\boldsymbol{\zeta}_j$。

## 主要分支

按离散策略，直接法可分为：

- **直接打靶（direct shooting）**：只参数化有限个控制参数（如 pitch 角的多项式系数），动力学用显式 ODE 积分器前向积分，将终端约束作为非线性约束交给 NLP。变量少，但误差沿轨迹迅速累积，对参数初值敏感。早期 POST、GTS 等发射轨道优化程序属此类（Betts 1998）。
- **多重打靶（multiple shooting）**：将区间分段，每段独立积分，在分段点施加状态连续性约束。改善了误差累积，但变量规模扩大。
- **直接配点（direct collocation）**：在每个子区间用低阶分段多项式（如 Hermite-Simpson 三次、五次 Gauss-Lobatto）插值状态，在配点处强制满足动力学，得到稀疏的缺陷约束。详见 [直接配点法](/glossary/dynamics/direct-collocation/)。
- **伪谱法（pseudospectral method）**：在整个区间用单一高阶全局 Lagrange 多项式插值，配点取 Legendre-Gauss / Legendre-Gauss-Radau / Legendre-Gauss-Lobatto 正交节点。具有谱收敛性，详见 [伪谱法](/glossary/dynamics/pseudospectral-method/)。
- **序列凸规划（sequential convex programming, SCP）**：在每个参考解处线性化非凸动力学，配合信赖域，逐次求解二阶锥规划（SOCP）子问题。可实时收敛，详见 [序列凸规划](/glossary/dynamics/scp/)。
- **离散力学与最优控制（DMOC）**：不离散 ODE，而直接离散变分原理（Lagrange-d'Alembert），约束为离散 Euler-Lagrange 方程。保辛、保动量，详见 [离散力学与最优控制](/glossary/dynamics/discrete-mechanics-and-optimal-control/)。

## NLP 求解器

直接法最终都要解一个大尺度 NLP。航天领域常用的求解器有：

- **SNOPT**：稀疏 SQP，适合约束与梯度稀疏、变量数千至百万级的问题（Gill 等 2002）。
- **Ipopt**：原对偶内点法，开源，对大规模非凸 NLP 鲁棒（Wächter & Biegler 2006）。
- **CasADi**：符号计算 + 自动微分框架，可调用上述求解器；在伪谱配点中广泛使用。

伪谱配点常用 **GPOPS-II**（Patterson & Rao 2014）、**DIDO**（Ross）、**SOCS**（Betts）、**OTIS**（Hargraves & Paris）等专门的轨迹优化软件作为前端，内部再调用上述求解器。

## KKT 与协态的对应

直接法的最大理论魅力在于：当配点网格趋于精细时，NLP 问题的 KKT 乘子 $\boldsymbol{\lambda}$ 在已知线性变换下收敛到连续 OCP 的协态变量（Hager 1976；Benson 2005；Elnagar 等 1995）。这意味着：

- 可以从直接法解里反推出协态时间历程，从而计算 Hamiltonian 是否守恒，作为解的精度校核；
- 可以用直接法解为[间接法](/glossary/dynamics/indirect-methods/)提供初值，做直接-间接混合求解。

伪谱法因配点正交，这种映射最干净，称为 **covector mapping theorem**（Benson et al. 2006）。这也是 [伪谱法](/glossary/dynamics/pseudospectral-method/) 在工程中受欢迎的关键原因之一。

## 应用要点

直接法相对于间接法的工程优势主要在三点：

1. **不需要解析推导协态方程**。复杂非线性的航天器动力学（如 CR3BP、星历模型 + 各种摄动）下，解析推导极大值原理极费力；直接法把这件事交给 NLP 求解器内部的有限差分或自动微分。
2. **收敛域宽**。间接法对协态初值极敏感，直接法对状态/控制初值则宽容得多。
3. **路径约束处理简单**。盒形上下界、避障、安全锥等直接作为 NLP 约束，无需事先猜测 constrained/unconstrained 弧段结构（Betts 1998）。

代价：NLP 规模大（变量数 $\sim(n_x+n_u)\cdot M$，配点法典型 $M=50\sim 500$，伪谱法 $M=20\sim 100$ 每段），且只收敛到局部极小，无全局最优保证。低推力、长时间、多圈任务里，需要良好的初值（如 [同伦法](/glossary/dynamics/homotopy-method/)、[不变流形](/glossary/dynamics/invariant-manifold/) 拼接、强化学习）才能收敛到有意义的局部最优。

## 相关概念

- [间接法（Indirect Methods）](/glossary/dynamics/indirect-methods/)
- [庞特里亚金极大值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)
- [序列凸规划（SCP）](/glossary/dynamics/scp/)
- [离散力学与最优控制（DMOC）](/glossary/dynamics/discrete-mechanics-and-optimal-control/)
- [协态变量（Costate Variable）](/glossary/dynamics/co-state-variables/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

## 参考文献

- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193–207.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming* (2nd ed.). SIAM.
- Hager, W. W. (1976). The Ritz-Trefftz method for state and control constrained optimal control problems. *SIAM Journal on Numerical Analysis*.
- Benson, D. A. (2005). A Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Benson, D. A., Huntington, G. T., Thorvaldsen, T. P., & Rao, A. V. (2006). Direct trajectory optimization and costate estimation via an orthogonal collocation method. *Journal of Guidance, Control, and Dynamics*, 29(6), 1435–1440.
- Gill, P. E., Murray, W., & Saunders, M. A. (2002). SNOPT: An SQP algorithm for large-scale constrained optimization. *SIAM Journal on Optimization*, 12(4), 979–1006.
- Wächter, A., & Biegler, L. T. (2006). On the implementation of an interior-point filter line-search algorithm for large-scale nonlinear programming. *Mathematical Programming*, 106(1), 25–57.
- Patterson, M. A., & Rao, A. V. (2014). GPOPS-II: A MATLAB software for solving multiple-phase optimal control problems using hp-adaptive Gaussian quadrature collocation methods. *ACM Transactions on Mathematical Software*, 41(1), 1:1–1:37.
