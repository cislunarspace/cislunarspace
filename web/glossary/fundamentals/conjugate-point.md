---
title: 共轭点、极值曲线与二阶最优性条件（Conjugate Point, Extremal, and Second-Order Optimality）
description: 最优控制的二阶必要与充分条件：正规/异常极值曲线、极值流、Jacobi 场与共轭点、Legendre-Clebsch 与强化 Legendre-Clebsch 条件、几何最优控制视角，以及 CR3BP 的次黎曼结构。
keywords: 共轭点, Jacobi场, 异常极值曲线, 正规极值曲线, 极值流, Legendre-Clebsch条件, 强化Legendre-Clebsch条件, 几何最优控制, 次黎曼结构, 二阶最优性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 共轭点、极值曲线与二阶最优性条件
  desc: 验证最优轨迹局部最优性的二阶判据——Jacobi 场、共轭点、Legendre-Clebsch、几何最优控制。
  image: /logo.png
og:
  title: 共轭点与二阶最优性条件详解 | 最优控制
  description: 最优控制的二阶必要与充分条件：极值曲线分类、Jacobi 场与共轭点、Legendre-Clebsch 条件、几何最优控制、CR3BP 的次黎曼结构。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共轭点与二阶最优性条件详解 | 最优控制
  description: 最优控制的二阶必要与充分条件：极值曲线分类、Jacobi 场与共轭点、Legendre-Clebsch 条件、几何最优控制、CR3BP 的次黎曼结构。
  image: /logo.png
permalink: /glossary/fundamentals/conjugate-point/
---

# 共轭点、极值曲线与二阶最优性条件（Conjugate Point, Extremal, and Second-Order Optimality）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

庞特里亚金极值原理给出一阶必要条件；候选极值曲线是否真正为局部最优，需由以**共轭点**为核心的二阶条件判定。沿参考极值曲线，*Jacobi 场* $\mathbf{z}(t)$ 满足变分方程

$$\dot{\mathbf{z}}=A(t)\mathbf{z},\quad A(t)=\frac{\partial \mathbf{F}}{\partial (\mathbf{x},\boldsymbol{\lambda})}\bigg|_{\text{极值曲线}},$$

其中 $\mathbf{F}=(\partial H/\partial\boldsymbol{\lambda},-\partial H/\partial\mathbf{x})$ 是 Hamilton 向量场。若存在 $t_c>t_0$ 使某个 $\mathbf{z}(t_0)=0$ 的非平凡 Jacobi 场再次回到 $\mathbf{z}(t_c)=0$，则 $t_c$ 称为**共轭时间**，对应的状态点为共轭点。若 $t_f$ 之前无共轭点，则该极值曲线在 $C^0$ 拓扑下为弱局部最优（Caillau & Daoud 2012；Bryson & Ho 1975）。

## 极值曲线的分类

满足 PMP 的 $(\mathbf{x}(t),\boldsymbol{\lambda}(t),\mathbf{u}^*(t))$ 称为**极值曲线**（extremal）。按代价乘子 $\lambda_0$ 取值：

- **正规极值曲线**（$\lambda_0\neq 0$）：可归一化为 $\lambda_0=-1$，代价在 $H$ 中权重非零，是一般情形。
- **异常极值曲线**（$\lambda_0=0$）：代价项从 $H$ 中消失，最优控制完全由动力学约束决定。Caillau et al.（2012）证明在最小燃料问题中，当转移时间严格大于最短时间时不存在异常极值曲线，只需考虑正规情形。

固定起点的极值曲线全体构成**极值流**（extremal flow），按切换函数分为 *bang 极值流*（切换函数非零，控制取边界）与*奇异极值流*（切换函数在有限弧段上恒为零，控制由高阶条件决定）。

## Legendre-Clebsch 条件

**Legendre-Clebsch 条件**是二阶必要条件：沿极值曲线

$$\frac{\partial^2 H}{\partial \mathbf{u}^2}\succeq 0$$

（对极小化问题）。**强化 Legendre-Clebsch 条件**（强 Legendre 条件）要求严格正定 $\partial^2 H/\partial\mathbf{u}^2\succ 0$，配合无共轭点即可保证局部最优，并保证极值曲线可嵌入极值曲线场（Kluever & Pierson 1995；Caillau et al. 2012）。它也用来确定推力方向余弦等量的符号。原始 $L^1$ 最小燃料问题不满足强化条件，对数障碍同伦法恢复了该条件——这是间接低推力优化采用光滑化技术的根据之一。

## 几何最优控制视角

**几何最优控制**把最优控制问题视为状态流形上的几何对象：极值曲线、极值流、共轭轨迹（conjugate locus）、切割轨迹（cut locus）。微分几何工具——分布、向量场的 Lie 括号、次黎曼结构——给出超越逐点 PMP 的全局结构结论。对带推力方向约束的 CR3BP 问题，控制分布的秩小于状态维数，与黎曼度量一起定义**次黎曼结构**，正规/异常的区分转化为关于分布可达性的 Chow 定理问题（Caillau & Daoud 2012）。

## 共轭点映射与应用

在平动点任务设计中，**共轭点映射**（conjugate-point mapping）以庞加莱截面（如会合系下 $x=K$ 或 $y=0$）识别转移各阶段的连接弧段（Vaquero & Howell 2014）。共轭点检验也用于连续推力弧段的局部最优性验证（Prussing & Sandrik 2005）。

## 应用要点

- 未经共轭点与 Legendre-Clebsch 检验的 PMP 解只是候选最优，不构成证明。
- 数值上，共轭点的计算是把变分方程与状态/协态方程同步积分，检测 Jacobi 场矩阵行列式的变号。
- 光滑化最小燃料问题按构造满足强化 Legendre-Clebsch 条件，从而排除异常极值曲线。

## 相关概念

- [庞特里亚金极值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)
- [协态变量与共轭方程（Costate Variables）](/glossary/dynamics/co-state-variables/)
- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [引燃矢量（Primer Vector）](/glossary/dynamics/primer-vector/)

## 参考文献

- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Caillau, J.-B., Cots, O., & Gergaud, J. (2012). Minimum fuel control of the planar circular restricted three-body problem. *CEAS Space Journal*.
- Caillau, J.-B., & Daoud, B. (2012). Minimum time for the restricted three-body problem. *SIAM J. Control Optim.*, 50(6).
- Kluever, C. A., & Pierson, B. L. (1995). Optimal Earth-Moon trajectories using nuclear electric propulsion. *JGCD*.
- Prussing, J. E., & Sandrik, S. L. (2005). Second-order necessary conditions and sufficient conditions applied to continuous-thrust trajectories. *JGCD*.
- Vaquero, M., & Howell, K. C. (2014). Conjugate-point mapping in the restricted problem.
- Agrachev, A. A., & Sachkov, Y. L. (2004). *Control Theory from the Geometric Viewpoint*.
