---
title: 庞特里亚金极值原理（Pontryagin's Maximum Principle）
description: 最优控制的基本必要条件——通过 Hamilton 函数耦合状态、协态与控制。覆盖极大/极小约定的等价性、一阶必要条件全集、横截条件、切换函数、引燃矢量联系，以及变分法（Euler-Lagrange、离散 E-L）这一基础。
keywords: 庞特里亚金极大值原理, 庞特里亚金最小值原理, Pontryagin Maximum Principle, PMP, 哈密顿函数, 变分法, 横截条件, 切换函数, Euler-Lagrange 方程, 引燃矢量
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 庞特里亚金极值原理（Pontryagin's Maximum Principle）
  desc: 最优控制的核心必要条件——Hamilton 函数、共轭方程、横截条件与切换函数。
  image: /logo.png
og:
  title: 庞特里亚金极值原理详解 | 最优控制理论
  description: 最优控制的基本必要条件。覆盖极大/极小约定、一阶必要条件全集、横截条件、切换函数、引燃矢量联系，以及变分法（Euler-Lagrange、离散 E-L）这一基础。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 庞特里亚金极值原理详解 | 最优控制理论
  description: 最优控制的基本必要条件。覆盖极大/极小约定、一阶必要条件全集、横截条件、切换函数、引燃矢量联系，以及变分法（Euler-Lagrange、离散 E-L）这一基础。
  image: /logo.png
permalink: /glossary/dynamics/pontryagins-maximum-principle/
---

# 庞特里亚金极值原理（Pontryagin's Maximum Principle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞特里亚金极值原理（PMP；Pontryagin et al. 1962）给出最优控制必须满足的一组**必要条件**。它取代经典变分法，能够处理带不等式约束（如有界推力）的控制集。给定系统 $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ 和增广性能指标，PMP 引入协态 $\boldsymbol{\lambda}$ 与 *Hamilton 函数* $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$，断言最优控制在每一时刻使 $H$ 在容许控制集上取**极大**（俄语学派原始约定）或**极小**（工程界，常用于燃料/时间问题）——两者仅差 $H$ 与 $\lambda_0$ 的整体符号，最优轨迹相同（Pontryagin et al. 1962；Bryson & Ho 1975；Betts 2010）。

## 一阶必要条件全集

对 Bolza 问题 $J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L\,dt$，终端约束 $\boldsymbol{\Psi}=0$，PMP 给出五条条件（Conway 2010, Ch.1；You & Dai 2022）：

1. **状态方程** $\dot{\mathbf{x}}=\partial H/\partial\boldsymbol{\lambda}=\mathbf{f}(\mathbf{x},\mathbf{u}^*,t)$。
2. **协态方程** $\dot{\boldsymbol{\lambda}}=-\partial H/\partial\mathbf{x}$（详见 [协态变量与共轭方程](/glossary/dynamics/co-state-variables/)）。
3. **极值条件（最优性）**：$\mathbf{u}^*$ 在容许集 $U$ 上逐点极小化 $H$。无界控制对应 $\partial H/\partial\mathbf{u}=0$；有界控制极值在 $U$ 的边界取得。
4. **横截条件** $\boldsymbol{\lambda}(t_f)=\partial \Phi/\partial\mathbf{x}|_{t_f}+(\partial\boldsymbol{\Psi}/\partial\mathbf{x})^{\!\top}\boldsymbol{\nu}$，其中 $\boldsymbol{\nu}$ 为终端约束乘子。
5. **参数条件**：终端时刻 $t_f$ 自由时 $H(t_f)+\partial\Phi/\partial t+\boldsymbol{\nu}^{\!\top}\partial\boldsymbol{\Psi}/\partial t=0$；对时间无关问题退化为 $H(t_f)=0$，若 $H$ 自治则 $H\equiv 0$。

这五条共同构成**一阶必要条件**；联立求解即间接法，得到以 $(\mathbf{x},\boldsymbol{\lambda})$ 为变量的 TPBVP。

## 切换函数与 bang-bang 结构

当控制以线性形式进入 $H$——例如推力幅值 $T\in[0,T_{max}]$——$H$ 的极小化要求 $T$ 取边界值。定义标量**切换函数** $\rho(t)$ 作为 $H$ 中 $T$ 的系数：$\rho<0$ 时 $T=T_{max}$，$\rho>0$ 时 $T=0$，由此导出 bang-bang / bang-off-bang 结构（Lawden 1963；Conway 2010, Ch.1–2；见 [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)）。若 $\rho\equiv 0$ 持续一段有限时间则为奇异弧，$T$ 由高阶条件决定。

推力方向的最优值为 $-\boldsymbol{\lambda}_v/\|\boldsymbol{\lambda}_v\|$，引出**引燃矢量** $\mathbf{p}=-\boldsymbol{\lambda}_v$，用于评估与改进脉冲转移（Lawden 1963；见 [引燃矢量](/glossary/dynamics/primer-vector/)）。

## 与变分法的衔接

PMP 是**变分法**（calculus of variations, CoV）的现代形式。对光滑无约束问题，经典 Euler-Lagrange 方程

$$\frac{d}{dt}\frac{\partial L}{\partial\dot{\mathbf{q}}}-\frac{\partial L}{\partial\mathbf{q}}=0$$

是作用量 $\int L\,dt$ 取极值的必要条件；Legendre 变换给出 Hamilton 形式 $\dot{\mathbf{q}}=\partial H/\partial\mathbf{p},\;\dot{\mathbf{p}}=-\partial H/\partial\mathbf{q}$。PMP 把变分法推广到带界控制、不等式约束与非光滑动力学的情形——Euler-Lagrange 方程是 $\mathbf{u}=\dot{\mathbf{q}}$ 不受约束时的特例。

**离散 Euler-Lagrange 方程**是 DMOC（离散力学与最优控制）的离散对应物：把作用量替换为离散和、施加离散 Lagrange-d'Alembert 原理导出离散必要条件，保持连续问题的辛结构（Marsden & West 2001）。

## 应用要点

- PMP 给出的是**必要**而非充分条件；充分性需要凸性或附加二阶判据（Legendre-Clebsch、共轭点，见 [共轭点与二阶最优性](/glossary/fundamentals/conjugate-point/)）。
- 对 $L$ 关于 $\mathbf{u}$ 线性的最小燃料问题，光滑极值条件退化，PMP 的边界规则才是决定控制的关键。
- 自治 Hamilton 函数沿最优轨迹为常数——这是检验 TPBVP 数值精度的常用判据。

## 相关概念

- [协态变量与共轭方程（Costate Variables）](/glossary/dynamics/co-state-variables/)
- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [引燃矢量（Primer Vector）](/glossary/dynamics/primer-vector/)
- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [共轭点与二阶最优性](/glossary/fundamentals/conjugate-point/)

## 参考文献

- Pontryagin, L. S., et al. (1962). *The Mathematical Theory of Optimal Processes*.
- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Lawden, D. F. (1963). *Optimal Trajectories for Space Navigation*.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*.
- Conway, B. A. (Ed.) (2010). *Spacecraft Trajectory Optimization*, Ch. 1–2.
- Marsden, J. E., & West, M. (2001). Discrete mechanics and variational integrators. *Acta Numerica*, 10, 357–514.
