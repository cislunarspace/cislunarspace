---
title: Bang-bang 控制（Bang-bang Control）
description: 燃耗最优控制中推力幅值的最优开关律：推力只在最大值与零之间切换，不存在中间推力。涵盖庞特里亚金极值原理的线性哈密顿推导、切换函数与推力比判据、奇异弧的界定、能量-燃耗同伦求解，以及地月空间小推力转移中的工程关联。
keywords: Bang-bang控制, Bang-bang Control, 最优控制, 燃耗最优, 切换函数, 推力开关控制, 推力幅值, 推力比, 能量-燃耗同伦, 间接法, 奇异弧
aliases:
  - Bang-bang 控制
  - Bang-bang Control
  - 推力开关控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-10-23
wechatShare:
  title: Bang-bang 控制（Bang-bang Control）
  desc: 燃耗最优推进的核心控制律：为什么最优推力只在开或关之间切换。
  image: /logo.png
og:
  title: Bang-bang 控制（Bang-bang Control）详解 | 术语定义
  description: 燃耗最优控制中推力幅值的最优开关律：推力只在最大值与零之间切换，不存在中间推力。涵盖庞特里亚金极值原理的线性哈密顿推导、切换函数与推力比判据、奇异弧的界定、能量-燃耗同伦求解，以及地月空间小推力转移中的工程关联。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Bang-bang 控制（Bang-bang Control）详解 | 术语定义
  description: 燃耗最优控制中推力幅值的最优开关律：推力只在最大值与零之间切换，不存在中间推力。涵盖庞特里亚金极值原理的线性哈密顿推导、切换函数判据、能量-燃耗同伦求解与工程关联。
  image: /logo.png
permalink: /glossary/dynamics/bang-bang-control/
related:
  - ref: dynamics/lawden-arc-law
    relation: related
  - ref: dynamics/pontryagins-maximum-principle
    relation: broader
---

# Bang-bang 控制（Bang-bang Control）

> 本文作者：天疆说
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

Bang-bang 控制是燃耗最优控制问题中推力幅值的标准形式：控制量仅在允许范围的两个极值间切换：推力要么取最大值 $F = F_{\max}$（开），要么为零 $F = 0$（关），不存在中间推力值的持续燃烧\cite{brysonAppliedOptimalControl1975}。bang-bang 一词源于继电器开关切换时发出的砰声。

这是庞特里亚金极值原理（Pontryagin's Minimum Principle）的直接推论\cite{pontryaginMathematicalTheoryOptimal2018}。在燃耗最省目标下，哈密顿函数对推力幅值 $F$ 呈线性依赖关系，极小化哈密顿函数等价于将推力幅值推向约束的边界，要么最大、要么最小（零）。仅当切换函数恒为零时可能出现中间值，此即奇异弧。

按切换函数符号把推力轨迹划成三段弧（最大推力弧、无推力弧、中间推力弧）的分类规律，是 [Lawden 弧定律](/glossary/dynamics/lawden-arc-law/) 的内容。本词条只讲推力幅值本身的开关律，弧段分类及其物理含义见该词条。

## 数学推导

### 燃耗最优问题的哈密顿形式

考虑单一中心引力场中的小推力航天器，动力学方程为\cite{ZhuZhengFanKongJianXiaoTuiLiGuiDaoZuiYouBangBangKongZhiDeLiangLeiYanTuoJieFaZongShu2017}：

$$
\dot{\mathbf{r}} = \mathbf{v},\qquad
\dot{\mathbf{v}} = -\frac{\mu}{r^3}\mathbf{r} + \frac{F}{m}\boldsymbol{\alpha},\qquad
\dot{m} = -\frac{F}{g_0 I_{sp}}
$$

其中 $\boldsymbol{\alpha}$ 为推力方向单位矢量（$\|\boldsymbol{\alpha}\|=1$），$F \in [0, F_{\max}]$ 为推力幅值。燃耗最省的 Mayer 形式性能指标为 $J = \min[-m(t_f)]$。

引入协态变量 ${\lambda}_r, {\lambda}_v, \lambda_m$ 构造哈密顿函数：

$$
H = {\lambda}_r^{\mathrm{T}}\dot{\mathbf{r}} + {\lambda}_v^{\mathrm{T}}\dot{\mathbf{v}} + \lambda_m \dot{m}
$$

代入动力学方程并分离与控制相关的项：

$$
H = {\lambda}_r^{\mathrm{T}}\mathbf{v} - \frac{\mu}{r^3}{\lambda}_v^{\mathrm{T}}\mathbf{r} + F\left(\frac{\boldsymbol{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m} - \frac{\lambda_m}{g_0 I_{sp}}\right)
$$

第三项对 $F$ 线性依赖，这直接导致了 Bang-bang 结构的出现。

### 最优推力方向：先驱向量

定义先驱向量（primer vector）$\mathbf{p}(t) \equiv -\boldsymbol{\lambda}_v(t)$，见 Lawden 1963 年第 3 章\cite{prussingEquationOptimalPowerlimited1993}。极小化哈密顿函数等价于令推力方向 $\boldsymbol{\alpha}$ 与 $\boldsymbol{\lambda}_v$ 反向：

$$
\boldsymbol{\alpha}^* = -\frac{\boldsymbol{\lambda}_v}{\|\boldsymbol{\lambda}_v\|} = \frac{\mathbf{p}}{\|\mathbf{p}\|}
$$

即最优推力方向与先驱向量方向一致\cite{prussingPrimerVectorTheory2010}。

### 切换函数与 Bang-bang 条件

定义开关函数（switching function）$S$：

$$
S = \frac{\partial H}{\partial F} = -\frac{\|\boldsymbol{\lambda}_v\|}{m} - \frac{\lambda_m}{g_0 I_{sp}}
$$

根据庞特里亚金极小值原理，$H$ 对 $F$ 线性，$F$ 取区间端点中使 $F \cdot S$ 较小的一端：

$$
F^* = \begin{cases}
0, & S > 0 \\[4pt]
F_{\max}, & S < 0 \\[4pt]
\text{待定}, & S = 0
\end{cases}
$$

三种情形对应的弧段命名与分类依据见 [Lawden 弧定律](/glossary/dynamics/lawden-arc-law/)。$S(t)$ 的符号在飞行过程中变化，形成开-关-开-关交替的 Bang-bang 结构。关键在于：开关时刻（$S(t)=0$ 的时刻）和开关次数事先未知，必须作为优化问题的一部分求解。

在无量纲化下，可定义推力比 $u = F/F_{\max} \in [0,1]$，开关函数等价表示为\cite{ZhuZhengFanKongJianXiaoTuiLiGuiDaoZuiYouBangBangKongZhiDeLiangLeiYanTuoJieFaZongShu2017}：

$$
\rho = 1 - \frac{g_0 I_{sp} \|\boldsymbol{\lambda}_v\|}{m} - \lambda_m
$$

Bang-bang 条件变为：$\rho > 0 \Rightarrow u^*=0$，$\rho < 0 \Rightarrow u^*=1$。

### 奇异弧的界定

当 $S(t) \equiv 0$ 在一个有限时间区间上恒成立时，一级必要条件不足以确定 $F$。此时需使用 Legendre-Clebsch 条件判断是否为极小路径。数值经验表明，在一般的小推力二体问题中，恒为零的奇异弧极少出现。但在某些特定问题（如功率受限的低推力轨迹）中可能出现，相关分析见 Thorne 1996 年第 4 章\cite{prussingEquationOptimalPowerlimited1993,thorneOptimalContinuousthrustOrbit1996}。

## 能量-燃耗同伦：Bang-bang 控制的数值求解

直接求解 Bang-bang 控制的主要困难是：微分方程右侧不连续（$F$ 在开关处阶跃），且开关时刻和开关序列事先未知。延拓方法（同伦法）是目前求解该问题的主流途径。

核心思想\cite{ZhuZhengFanKongJianXiaoTuiLiGuiDaoZuiYouBangBangKongZhiDeLiangLeiYanTuoJieFaZongShu2017}：从容易求解的能量最优问题出发（此时推力幅值随时间连续变化），通过逐步调整性能指标中的同伦参数 $\varepsilon$，将连续控制变形为 Bang-bang 控制。

构造带同伦参数 $\varepsilon \in [0,1]$ 的性能指标：

$$
J = \min \left\{ \frac{F_{\max}}{g_0 I_{sp}} \int_{t_0}^{t_f} [u - \varepsilon u(1-u)]\, dt \right\}
$$

- $\varepsilon = 1$ 时为能量最优（$\int u^2 dt$），控制律连续可导，收敛域宽。

- $\varepsilon = 0$ 时为燃料最优（$\int u dt$），控制律退化为 Bang-bang。

在同伦过程中，最优推力比具有闭式解：

$$
u^* = \begin{cases}
0, & \rho > \varepsilon \\[4pt]
\dfrac{\varepsilon - \rho}{2\varepsilon}, & -\varepsilon \leqslant \rho \leqslant \varepsilon \\[4pt]
1, & \rho < -\varepsilon
\end{cases}
$$

在边界层 $|\rho| \leqslant \varepsilon$ 内，控制律连续且可导。随着 $\varepsilon \to 0$，边界层收缩，连续解逼近 Bang-bang 解。同伦参数序列通常采用 $\varepsilon_d = 10^{-(d/N)}$，$N$ 取 15--60。

两类延拓方法\cite{ZhuZhengFanKongJianXiaoTuiLiGuiDaoZuiYouBangBangKongZhiDeLiangLeiYanTuoJieFaZongShu2017}：

1. 能量-燃耗同伦：先从能量最优解出发，逐步减小 $\varepsilon$ 至零。收敛性好，但不处理推力常值约束。
2. 开关序列切换延拓：从双脉冲转移解出发，通过推力幅值延拓逐步最小推力轨道，再通过开关函数特征值变化自动调整开关序列。能保证每个中间解都满足 Bang-bang 必要条件。

## 地月空间中的工程关联

在地月空间 CR3BP+LT 模型下，Bang-bang 控制与以下概念密切相关：

- CR3BP+LT 轨迹优化：在限制性三体框架下考虑低推力，间接法（通过协态变量的两点边值问题）自然导出 Bang-bang 推力剖面。Fahey\cite{faheyDesignStrategiesLow2024} 在 Howell 组工作中使用 S 型函数平滑近似 Bang-bang 跳跃，作为最小燃料问题的中间步。

- TCT 序列：地月转移中的 Thrust-Coast-Thrust 对应三段推力弧的交替，弧段的判据与命名见 [Lawden 弧定律](/glossary/dynamics/lawden-arc-law/)。

- 连续推力轨道保持（Station-Keeping）：在 NRHO、Halo 等平动点轨道的长期保持中，最优控制律同样呈 Bang-bang 特征，仅在轨道偏差超过阈值时施加推力\cite{zhangContinuousthrustStationkeepingCislunar2022}。

## 相关概念

- [Lawden 弧定律（Lawden's Arc Law）](/glossary/dynamics/lawden-arc-law/)：按切换函数符号划分的三类推力弧及其物理意义

- [电推进（Electric Propulsion）](/glossary/fundamentals/ep/)：Bang-bang 控制的物理载体，低推力系统的推进基础

- [推力方向与控制（Tangential Thrust Control）](/glossary/dynamics/tangential-thrust-control/)：推力方向的最优与简化策略

- [庞特里亚金极小值原理](/glossary/dynamics/pontryagins-maximum-principle/)：推导 Bang-bang 控制的数学基础

- [协态变量](/glossary/dynamics/co-state-variables/)：先驱向量的直接物理来源

- [先驱向量（Primer Vector）](/glossary/dynamics/primer-vector/)：Lawden 提出的最优推力方向判定工具

- [同伦法](/glossary/dynamics/homotopy-method/)：Bang-bang 控制数值求解的核心技术

- [子弧](/glossary/dynamics/subarc/)：推力幅值取某一极值的连续时间段，是三类弧的切分单元

- [燃料最优控制](/glossary/dynamics/fuel-optimal/)：Bang-bang 结构所属的性能指标框架

- [脉冲机动（Two-Impulse Rendezvous）](/glossary/dynamics/two-impulse-rendezvous/)：脉冲推进模型下的机动方法，双脉冲是 Bang-bang 控制脉冲极限的初值来源
