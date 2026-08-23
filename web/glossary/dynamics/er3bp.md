---
title: 椭圆限制性三体问题（Elliptic Restricted Three-Body Problem, ER3BP）
description: CR3BP 的椭圆轨道推广：两主天体绕公共质心沿椭圆轨道运动，两体间距周期性变化，系统失去自治性和雅可比积分。覆盖时变会合系、脉动归一化、利用 Floquet 理论分析周期轨道稳定性的方法，以及与 CR3BP 在 $e \to 0$ 极限下的关系。
keywords: 椭圆限制性三体问题, ER3BP, 椭圆轨道的三体问题, Elliptic Restricted Three-Body Problem, 椭圆型限制性三体问题, Floquet理论, 非自治系统, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 椭圆限制性三体问题（ER3BP）详解
  desc: CR3BP 的椭圆推广——主天体沿椭圆轨道运动时，自治性和守恒量如何丧失。
  image: /logo.png
og:
  title: 椭圆限制性三体问题（ER3BP）详解 | 地月空间动力学
  description: CR3BP 的椭圆轨道推广：主天体椭圆轨道导致系统非自治、失去雅可比积分，讨论脉动归一化、时变会合系和 Floquet 稳定性分析。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 椭圆限制性三体问题（ER3BP）详解 | 地月空间动力学
  description: CR3BP 的椭圆轨道推广：主天体椭圆轨道导致系统非自治、失去雅可比积分，讨论脉动归一化、时变会合系和 Floquet 稳定性分析。
  image: /logo.png
permalink: /glossary/dynamics/er3bp/
---

# 椭圆限制性三体问题（Elliptic Restricted Three-Body Problem, ER3BP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

椭圆限制性三体问题（Elliptic Restricted Three-Body Problem, ER3BP 或 ERTBP）是 [CR3BP](/glossary/dynamics/cr3bp/) 向椭圆轨道的自然推广。两个主天体不再作匀速圆运动，而是绕公共质心沿开普勒椭圆轨道运动（偏心率 $e \in [0,1)$），其余限制性假设不变。

这一看似微小的改变使问题在数学本质上区别于 CR3BP（Szebehely 1967；Broucke 1969）：

- 两主天体间距 $r_{12}$ 不再是常数，而是其真近点角 $f$ 的周期函数：$r_{12}(f) = a(1-e^2)/(1+e\cos f)$，其中 $a$ 为半长轴。

- 系统**不再自治**：运动方程显含时间（或等价地显含真近点角 $f$），主天体位置随时间周期性变化。

- **雅可比积分不再存在**：时变系统的能量不守恒，航天器可以在不消耗推进剂的情况下改变其机械能。

当日-月、日-地或地-月系统的偏心率不可忽略时（例如月球公转偏心率约 $0.0549$），ER3BP 比 CR3BP 更逼近真实动力学，但由于失去自治性和守恒量，分析难度显著上升。

## 脉动旋转坐标系

为了使主天体在新的参考系中保持静止，ER3BP 通常采用**脉动旋转坐标系**（pulsating synodic frame 或 dimensionless pulsating coordinate system）。与 CR3BP 的恒定会合系不同，ER3BP 的距离和时间单位随主天体间距 $r_{12}(f)$ 实时脉动缩放：$\tilde{x} = x / r_{12}(f)$，用真近点角 $f$（或时间 $t$）作为自变量（Szebehely 1967；Gómez et al. 2001）。

在此系中，归一化后的运动方程具有以下形式：

$$
\begin{cases}
\tilde{x}'' - 2\tilde{y}' = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{x}} \\[1em]
\tilde{y}'' + 2\tilde{x}' = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{y}} \\[1em]
\tilde{z}'' + \tilde{z} = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{z}}
\end{cases}
$$

其中 $(') $ 表示对 $f$ 的导数，$\tilde{\Omega}$ 在形式上与 CR3BP 的有效势函数 $\Omega$ 相同，但方程左端多出与 $e$ 和 $f$ 相关的时变因子和附加的 $\tilde{z}$ 项。

## Floquet 理论与周期轨道稳定性

ER3BP 中的周期轨道必须是系统周期 $T=2\pi$（在 $f$ 域中）的周期解。由于系统显含 $f$（非自治），稳定性分析不能使用 CR3BP 中的特征值方法，而需借助 **Floquet 理论**。

取周期轨道的基态 $\mathbf{x}_0(f)$，对 $f$ 偏导数的动力学沿其线性化为周期系数线性系统：

$$\delta \mathbf{x}'(f) = \mathbf{A}(f)\,\delta \mathbf{x}(f), \quad \mathbf{A}(f+2\pi) = \mathbf{A}(f)$$

积分一个完整周期得到**单值矩阵** $\mathbf{M}$（monodromy matrix）：$\delta \mathbf{x}(2\pi) = \mathbf{M}\,\delta \mathbf{x}(0)$。$\mathbf{M}$ 的特征值即 Floquet 乘子，稳定性判据为所有乘子的模 $\le 1$。与 CR3BP 的恒定雅可比矩阵不同，ER3BP 的 $\mathbf{A}(f)$ 随 $f$ 周期性变化，需在整个周期上数值积分。详见 [Floquet 乘子](/glossary/dynamics/monodromy-matrix/)、[单值矩阵](/glossary/dynamics/monodromy-matrix/)。

## 与 CR3BP 的关系

- **极限情形**：$e \to 0$ 时，$r_{12}$ 退化为常数，时变因子 $1/(1+e\cos f) \to 1$，脉动系退化为 CR3BP 的普通会合系，Floquet 乘子趋近于常数雅可比矩阵的特征值。

- **平面与空间 ER3BP**：平面椭圆限制性三体问题（PER3BP）约束运动在轨道面内，分析方法以 $f$ 截面庞加莱映射为主；空间 ER3BP 保留全部三维自由度，周期轨道族更加复杂。

- **共振效应**：在某些偏心率下，ER3BP 的周期轨道可能与 CR3BP 轨道族出现显著偏移或分岔，这是长远任务必须考虑的效应。

## 相关概念

- [CR3BP](/glossary/dynamics/cr3bp/)

- [BCR4BP](/glossary/dynamics/bcr4bp/)

- [平动点](/glossary/dynamics/libration-point/)

- [Floquet 乘子](/glossary/dynamics/monodromy-matrix/)

- [单值矩阵](/glossary/dynamics/monodromy-matrix/)

- [延拓](/glossary/dynamics/continuation/)

## 参考文献

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*：第 10 章系统论述 ER3BP 的脉动坐标系与运动方程。

- Broucke, 1969, Periodic Orbits in the Elliptic Restricted Three-Body Problem：ER3BP 周期轨道的早期系统化研究。

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. III：讨论 ER3BP 中平动点周期轨道的延拓与 Floquet 稳定性。

- Campagnola, 2010, *New Techniques in Astrodynamics for Moon Systems Exploration*, Ph.D.：含 ER3BP 轨道设计的实际数值方法。
