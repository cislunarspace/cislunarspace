---
title: 离散力学与最优控制（Discrete Mechanics and Optimal Control, DMOC）
description: 基于 Lagrange-d'Alembert 原理直接离散化的结构保持型最优控制方法。不离散 ODE，而是离散变分原理，把 forced 离散 Euler-Lagrange 方程作为约束、离散作用量作为代价，求解有限维 NLP。保辛、保动量，对低能地月转移等高非线性问题在大步长下仍能给出能量行为良好的解。
keywords: 离散力学与最优控制, DMOC, Discrete Mechanics and Optimal Control, 变分积分器, Variational Integrator, 保辛, Symplectic, 离散 Euler-Lagrange, Discrete Euler-Lagrange, Lagrange-d'Alembert, Junge-Marsden-Ober-Blöbaum
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 离散力学与最优控制（DMOC）
  desc: 离散变分原理而非 ODE——保辛、保动量的结构保持型直接法。
  image: /logo.png
og:
  title: 离散力学与最优控制详解 | DMOC
  description: 基于 Lagrange-d'Alembert 原理直接离散化的结构保持型最优控制方法。forced 离散 Euler-Lagrange 方程为约束，离散作用量为代价；保辛、保动量；低能地月转移等高非线性问题在大步长下仍能量行为良好。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 离散力学与最优控制详解 | DMOC
  description: 基于 Lagrange-d'Alembert 原理直接离散化的结构保持型最优控制方法。forced 离散 Euler-Lagrange 方程为约束，离散作用量为代价；保辛、保动量；低能地月转移等高非线性问题在大步长下仍能量行为良好。
  image: /logo.png
permalink: /glossary/dynamics/discrete-mechanics-and-optimal-control/
---

# 离散力学与最优控制（Discrete Mechanics and Optimal Control, DMOC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

离散力学与最优控制（discrete mechanics and optimal control, DMOC）是 [直接法](/glossary/dynamics/direct-methods/) 中结构保持型的一支，由 Junge、Marsden、Ober-Blöbaum 提出（Junge et al. 2005；Ober-Blöbaum et al. 2011）。它的关键区别在于：**不离散 ODE，而是离散变分原理**。把系统的 Lagrangian $L(\mathbf{q},\dot{\mathbf{q}})$ 离散为离散 Lagrangian $L_d(\mathbf{q}_k,\mathbf{q}_{k+1},h)$，对离散作用量变分得到 forced 离散 Euler-Lagrange 方程；以此作为 NLP 约束，加上控制代价作为目标函数，求解有限维约束优化问题（Ober-Blöbaum et al. 2011；Moore 2011）。

DMOC 与 [直接配点法](/glossary/dynamics/direct-collocation/) 在形式上类似（都是先离散再求 NLP），但离散对象不同：配点法离散 $\dot{\mathbf{x}}=\mathbf{f}$，DMOC 离散 Hamilton 原理 $\delta\int L\,\mathrm{d}t = 0$。结果是 DMOC 解**保辛结构、保动量映射**，在长时间仿真下能量行为远好于非辛积分器（Marsden & West 2001）。

## 数学形式

考虑机械系统，构型 $\mathbf{q}\in Q$，Lagrangian $L:TQ\to\mathbb{R}$，外力 $\mathbf{f}_{\text{ext}}$。连续 Lagrange-d'Alembert 原理

$$\delta\int_0^T L(\mathbf{q},\dot{\mathbf{q}})\,\mathrm{d}t + \int_0^T \mathbf{f}_{\text{ext}}\cdot\delta\mathbf{q}\,\mathrm{d}t = 0.$$

离散化：把时间区间分成 $N$ 段，步长 $h$，构型序列 $\{\mathbf{q}_k\}_{k=0}^N$。离散 Lagrangian 用中点积分近似

$$L_d(\mathbf{q}_k,\mathbf{q}_{k+1},h)\approx h\,L\bigg(\frac{\mathbf{q}_k+\mathbf{q}_{k+1}}{2},\frac{\mathbf{q}_{k+1}-\mathbf{q}_k}{h}\bigg).$$

左右离散外力 $\mathbf{F}_k^-, \mathbf{F}_k^+$ 同样用积分近似。对离散作用量 $S_d=\sum_k L_d$ 变分，得到 **forced 离散 Euler-Lagrange 方程**（DEL）

$$D_2 L_d(\mathbf{q}_{k-1},\mathbf{q}_k) + D_1 L_d(\mathbf{q}_k,\mathbf{q}_{k+1}) + \mathbf{F}_k^- + \mathbf{F}_k^+ = \mathbf{0},\quad k=1,\dots,N-1.$$

DMOC 把控制力作为外力 $\mathbf{f}_{\text{ext}} = \mathbf{u}(t)$，离散化为节点上的 $\{\mathbf{u}_k\}$；以 DEL 方程为 NLP 等式约束，初始/终端条件为边界约束，控制能量 $\sum_k \|\mathbf{u}_k\|^2$ 为目标，用 SNOPT 等 SQP 求解器求解（Ober-Blöbaum et al. 2011；Moore 2011, Ch.2）。中点规则下 DMOC 是 2 阶精度。

## 结构保持性质

DMOC 解继承变分积分器的关键性质：

- **保辛（symplectic）**：相空间上的辛 2-form 在迭代中精确保持。
- **保动量（momentum-preserving）**：与系统对称性对应的 Noether 动量映射精确保持，与步长无关。
- **能量行为良好**：辛性保证长时间下能量无明显耗散或爆发，仅在小邻域内振荡。

这三点是 DMOC 相对一般 [直接配点法](/glossary/dynamics/direct-collocation/) 的核心优势——尤其在 CR3BP、地月低能转移等需要长时间积分、对能量保持敏感的问题上（Marsden & West 2001；Moore 2011）。

## 工程实现要点

- **变步长**：标准 DMOC 假设等步长 $h$。在 CR3BP 中近月/近日点附近动力学剧烈，需要极小步长；远点则步长可放宽。Moore（2011）提出 **time-adaptive DMOC**：在 Lagrangian 中引入时间变量 $t_k$ 与约束 $h_k=t_{k+1}-t_k$，做 time-adapted 变分；其代价是变成间接法（多出协态变量）。
- **初值选择**：DMOC 是局部方法，需要良好初值。Moore（2011）用 [不变流形](/glossary/dynamics/invariant-manifold/) 拼接（日地 + 地月流形在庞加莱截面相交）作为初值，DMOC 优化后可消除原流形解中需要的中间 $\Delta V$，得到完全无燃料消耗的低能通道。
- **与其他直接法的对比**：

| 特性 | DMOC | 直接配点 |
| :--- | :--- | :--- |
| 离散对象 | 变分原理 | ODE |
| 保辛 | 是 | 否 |
| 保动量 | 是 | 否 |
| 大步长行为 | 仍合理 | 误差累积 |
| 通用性 | 仅限 Lagrangian 系统 | 任意 ODE |
| 工具成熟度 | 学术为主 | 工业级（OTIS/SOCS 等） |

## 应用要点

- **低能地月转移**：DMOC + 不变流形是经典组合——流形提供动力学的「骨架」作为初值，DMOC 在 4-body 模型中精修，把流形拼接所需的中间脉冲优化为零（Moore 2011, Ch.3；Moore et al. 2012）。
- **编队飞行**：CubeSat 编队的相对位置重置，DMOC 保动量特性使编队几何在长时间仿真中稳定。
- **不适用场合**：含强耗散（如大气进入）、含非保守约束（如热流上限）、或 Lagrangian 难以写出的系统，DMOC 优势丧失——这些场合更适合 [直接配点法](/glossary/dynamics/direct-collocation/)。

## 相关概念

- [直接法（Direct Methods）](/glossary/dynamics/direct-methods/)
- [直接配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [辛几何（Symplectic Geometry）](/glossary/dynamics/hamiltonian-normal-form/)
- [CR3BP](/glossary/dynamics/cr3bp/)
- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

## 参考文献

- Junge, O., Marsden, J. E., & Ober-Blöbaum, S. (2005). Discrete mechanics and optimal control. *IFAC Proceedings Volumes*, 38(1), 538–543.
- Ober-Blöbaum, S., Junge, O., & Marsden, J. E. (2011). Discrete mechanics and optimal control: an analysis. *ESAIM: Control, Optimisation and Calculus of Variations*, 17(2), 322–352.
- Marsden, J. E., & West, M. (2001). Discrete mechanics and variational integrators. *Acta Numerica*, 10, 357–514.
- Moore, B. E. (2011). Discrete mechanics and optimal control for space trajectory design. PhD thesis, Purdue University.
- Moore, B. E., Ober-Blöbaum, S., & Marsden, J. E. (2012). Trajectory design combining invariant manifolds with discrete mechanics and optimal control. *Journal of Guidance, Control, and Dynamics*, 35(5), 1507–1525.
- Leyendecker, S., Ober-Blöbaum, S., Marsden, J. E., & Ortiz, M. (2010). Discrete mechanics and optimal control for constrained systems. *Optimal Control Applications and Methods*, 31(6), 505–528.
