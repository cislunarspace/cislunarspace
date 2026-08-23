---
title: 两点边值问题（Two-Point Boundary Value Problem, TPBVP）
description: 两端各自施加边界条件的常微分方程问题：轨道优化间接法的核心数学结构。覆盖 Hamilton 正则方程形式、协态初值猜测困难、协态归一化与同伦法、在地月空间低能转移与 NRHO 入轨中的应用。
keywords: 两点边值问题, TPBVP, 边值问题, 协态变量, 庞特里亚金极值原理, 打靶法, 协态归一化, 同伦法, 轨道优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 两点边值问题（TPBVP）详解
  desc: 轨道优化间接法的核心数学结构：在地月转移、NRHO 入轨与交会中都归结为 TPBVP。
  image: /logo.png
og:
  title: 两点边值问题（TPBVP）详解 | 轨道优化的核心数学问题
  description: 两端各自施加边界条件的常微分方程问题：轨道优化间接法的核心数学结构。覆盖 Hamilton 正则方程形式、协态初值猜测困难、协态归一化与同伦法。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 两点边值问题（TPBVP）详解 | 轨道优化的核心数学问题
  description: 两端各自施加边界条件的常微分方程问题：轨道优化间接法的核心数学结构。
  image: /logo.png
permalink: /glossary/dynamics/tpbvp/
---

# 两点边值问题（Two-Point Boundary Value Problem, TPBVP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

两点边值问题（TPBVP）是一类常微分方程在积分区间 $[t_0,t_f]$ 上求解的问题，边界条件**分别**施加在起点和终点：

$$\dot{\mathbf{y}}=\mathbf{f}(\mathbf{y},t),\quad t\in[t_0,t_f],\qquad \boldsymbol{\psi}(\mathbf{y}(t_0),\mathbf{y}(t_f))=\mathbf{0}$$

在航天器轨道优化的语境下，TPBVP 是**间接法**的核心数学结构：由庞特里亚金极值原理（Pontryagin's Maximum Principle, PMP）推导出的最优轨迹必须同时满足初始状态约束（初始位置、速度、质量已知）和终端状态约束（目标位置、速度），构成典型的两点边值问题。

与初值问题（IVP）不同，TPBVP 两边各自指定部分条件，中间的自由度由动力学方程约束；换句话说，两边夹着未知自由变量，要同时调整才能满足双边条件。在数值上，这个自由变量就是初始[协态](/glossary/dynamics/co-state-variables/) $\boldsymbol{\lambda}(t_0)$（和终端时间 $t_f$）：**协态没有物理直觉、取值范围无界、对初猜极敏感**，这是 TPBVP 求解困难的根本。

## 数学描述

### Hamilton 正则方程

以燃料最省转移为例，Hamilton 正则方程给出 14 维的耦合系统：

$$
\begin{aligned}
\dot{\mathbf{r}} &= \frac{\partial H}{\partial\boldsymbol{\lambda}_r} &\quad& \text{(位置)}\\
\dot{\mathbf{v}} &= \frac{\partial H}{\partial\boldsymbol{\lambda}_v} &\quad& \text{(速度)}\\
\dot{m} &= \frac{\partial H}{\partial\lambda_m} &\quad& \text{(质量)}\\
\dot{\boldsymbol{\lambda}}_r &= -\frac{\partial H}{\partial\mathbf{r}} &\quad& \text{(位置协态)}\\
\dot{\boldsymbol{\lambda}}_v &= -\frac{\partial H}{\partial\mathbf{v}} &\quad& \text{(速度协态)}\\
\dot{\lambda}_m &= -\frac{\partial H}{\partial m} &\quad& \text{(质量协态)}
\end{aligned}
$$

- **初始条件已知**：$\mathbf{r}(t_0)$、$\mathbf{v}(t_0)$、$m(t_0)$，共 7 个标量值；

- **终端条件已知**：$\mathbf{r}(t_f)=\mathbf{r}_{target}$、$\mathbf{v}(t_f)=\mathbf{v}_{target}$，共 6 个标量约束；

- **未知量**：初始协态 $\boldsymbol{\lambda}(t_0)\in\mathbb{R}^7$ + 终端时间 $t_f$ = 8 个未知参数。终端燃料约束（$m(t_f)$ 自由）提供第 7 个终端横截条件，使问题适定。

### 打靶函数

定义打靶函数（shooting function）：

$$\mathbf{F}(\boldsymbol{\lambda}(t_0), t_f)=\begin{bmatrix}\mathbf{r}(t_f)-\mathbf{r}_{target}\\\mathbf{v}(t_f)-\mathbf{v}_{target}\end{bmatrix}$$

从对 $\boldsymbol{\lambda}(t_0)$ 的猜测出发向前积分，用 Newton-Raphson 迭代修正直至 $\mathbf{F}\to\mathbf{0}$。每一次迭代需要状态转移矩阵：在这里，STM 扩展到了协态维度（$14\times 14$ 矩阵），积分规模翻倍。

## 数值困难与对策

### 协态的物理非直观性

协态变量的物理意义是状态约束的影子价格：位置协态 $\boldsymbol{\lambda}_r$ 表示终端位置约束对整条轨迹的代价压力；速度协态 $\boldsymbol{\lambda}_v$ 表示终端速度约束的影子价格。但它们的数值量级、方向无简单规则可循，难以给出合理初猜。在 CR3BP 的非线性流下，$\boldsymbol{\lambda}(t_0)$ 细微变化被长时间积分放大，打靶函数 $\mathbf{F}$ 呈现多峰、多谷结构（并行于微分修正的初猜敏感问题）。

[协态归一化](/glossary/dynamics/co-state-variables/)是关键的应对技术：将 $(\boldsymbol{\lambda}(t_0),\lambda_m(t_0))$ 归一化到 7 维单位球面上，把搜索空间从无穷大缩减为有限紧致集合，初猜只需指对方向（Jiang et al. 2012）。

### 同伦法

[同伦法](/glossary/dynamics/homotopy-method/)将困难的原始问题嵌入一族连续变化的辅助问题中，从易解的同伦起点逐步追踪到原始解：

- **能量同伦**：从极高 Jacobi 常数值（CR3BP 中接近平动点的能量，收敛易）延拓到目标能量值（转移轨道的实际能量）；

- **推力同伦**：从极大推力（bang-bang 控制明显、收敛易）延拓到实际推力水平；

- **连续小推力同伦**：从两体解延拓到三体解。

### 与 Lambert 问题的关系

Lambert 问题是 TPBVP 在二体问题下的一个特例，给定两点间的飞行时间，求连接这两点的开普勒弧的初始速度。它是轨道转移（解决从哪移到哪）和轨道确定（从观测确定轨道）的基本构件。三体 Lambert 问题的目标末端状态在旋转会合系中不是固定的绝对位置，而是**相对位置**，其求解必须用微分修正（而非封闭解/有限迭代）。TPBVP 可看作三体 Lambert 问题的推广，额外包含了协态与性能指标的最优性条件。

## 在地月空间中的应用

- **低能转移**：LEO→月球平动点轨道的燃料最省转移，由 PMP 导出 Hamilton 正则方程后归结为 TPBVP。协态归一化 + 同伦法的组合显著改善了可解性。

- **NRHO 入轨**：Gateway 任务从转移轨道插入 NRHO 的最优入轨机动：入轨点（$t_f$）自由、插入速度代价最小化。

- **多航天器交会**：相位匹配、相对运动约束使 TPBVP 的端末条件更复杂，需要把交会几何约束公式化到 $\boldsymbol{\psi}$ 中。

- **连续小推力的飞行时间/燃料权衡**：推力水平相差数个量级时，TPBVP 解的结构完全不同（低推力→长弧机动，大推力→脉冲近似），需要不同的初猜策略。

- **常考虑的二体简化初猜 → 三体精化的解题路径**：先在两体框架下求解 Lambert 问题得到一个初始速度猜测；然后在 CR3BP 或星历模型中用微分修正/多重打靶精化，这是两个问题在工程流程中的自然衔接。

## 相关概念

- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

- [协态归一化（Co-state Normalization）](/glossary/dynamics/co-state-variables/)

- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagins-maximum-principle/)

- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)

- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)

- [微分修正与打靶法](/glossary/dynamics/differential-correction/)

## 参考文献

- Bryson A E, Ho Y C. Applied Optimal Control[M]. Taylor & Francis, 1975.（TPBVP 在最优控制中的经典表述）

- Jiang F, Baoyin H, Li J. Practical techniques for low-thrust trajectory optimization with homotopic approach[J]. Journal of Guidance, Control, and Dynamics, 2012.（协态归一化 + 同伦法改善 TPBVP 收敛性的关键技术细节）

- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 5th ed. Microcosm Press, 2022. §6-8, §10.4.（二体最优控制中的 TPBVP 与打靶法章节）
