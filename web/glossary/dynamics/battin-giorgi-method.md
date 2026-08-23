---
title: Battin-Giorgi 方法（Battin-Giorgi Method）
description: 第三体引力摄动加速度的数值稳定算法：引入辅助变量 q 把"近大数相减"的灾难性相消替换为良态的多项式求值。源自 Giorgi 1964，Battin 1999 在《航天动力学的数学方法》§8.4.1 给出标准现代形式，是 Cowell、Encke 等摄动数值积分与高精度星历计算的基本构件。
keywords: Battin-Giorgi 方法, Battin-Giorgi Method, Giorgi 1964, 第三体摄动, 摄动加速度, 相消误差, q 变量, Cowell 方法, Encke 方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Battin-Giorgi 方法（Battin-Giorgi Method）
  desc: 用辅助变量 q 把第三体摄动加速度的相消误差替换为良态多项式求值。
  image: /logo.png
og:
  title: Battin-Giorgi 方法详解 | 第三体摄动加速度的数值稳定算法
  description: 第三体引力摄动加速度的数值稳定算法：引入辅助变量 q 替换"近大数相减"。源自 Giorgi 1964，Battin 1999 §8.4.1 给出现代标准形式，是 Cowell、Encke 等摄动数值积分的基本构件。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Battin-Giorgi 方法详解 | 第三体摄动加速度的数值稳定算法
  description: 第三体引力摄动加速度的数值稳定算法：引入辅助变量 q 替换"近大数相减"。源自 Giorgi 1964，Battin 1999 §8.4.1 给出现代标准形式，是 Cowell、Encke 等摄动数值积分的基本构件。
  image: /logo.png
permalink: /glossary/dynamics/battin-giorgi-method/
---

# Battin-Giorgi 方法（Battin-Giorgi Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

**Battin-Giorgi 方法**是第三体引力摄动加速度的一种数值稳定计算格式。给定中心天体 $m_1$（地球）、摄动天体 $m_j$（月球或太阳）与航天器 $\vec r$，最直接的第三体摄动加速度写为

$$
\vec a_{3B} = G m_j\!\left[\frac{\vec\rho_j-\vec r}{|\vec\rho_j-\vec r|^3}-\frac{\vec\rho_j}{|\vec\rho_j|^3}\right]
= -G m_j\!\left[\frac{\vec d_j}{d_j^3}+\frac{\vec\rho_j}{\rho_j^3}\right],
$$

其中 $\vec\rho_j$ 是摄动天体相对中心天体的位置、$\vec d_j=\vec r-\vec\rho_j$ 是航天器相对摄动天体的位置。当 $r\ll\rho_j$（航天器紧贴中心天体）时，$\vec d_j/d_j^3$ 与 $-\vec\rho_j/\rho_j^3$ 是两个量级相近、方向相反的大矢量，直接相减会产生**灾难性相消**（catastrophic cancellation），有效位数急剧损失。Giorgi (1964) 给出、Battin (1999, §8.4.1) 整理为标准形式的算法，引入辅助变量 $q$ 把这两个大矢量的差写成单矢量上的小修正：

$$
\vec a_{3B} = -\frac{G m_j}{d_j^3}\big[\vec r + f(q_j)\,\vec\rho_j\big],
$$

$$
q_j = \frac{\vec r\cdot(\vec r-2\vec\rho_j)}{\vec\rho_j\cdot\vec\rho_j}
     = \frac{r}{\rho_j}\!\left(\frac{r}{\rho_j}-2\cos\alpha_j\right),\qquad
f(q) = (1+q)^{3/2}-1.
$$

几何上 $q\approx -2(r/\rho_j)\cos\alpha_j+(r/\rho_j)^2$，当 $r\ll\rho_j$ 时 $|q|\ll 1$，相消问题被转移到对 $q$ 的良态多项式求值上。

## f(q) 的稳定求值

直接按 $(1+q)^{3/2}-1$ 计算 $f(q)$ 在 $q$ 接近零时同样相消。Battin (1999, Eq. 8-60) 给出**封闭稳定形式**：

$$
f(q) = q\,\frac{3+3q+q^2}{1+(1+q)^{3/2}}.
$$

分子是 $q$ 的多项式，分母在 $q=0$ 时为 2，整个表达式对任何 $q$ 都不敏感。也可使用幂级数展开

$$
f(q) = \tfrac{3}{2}q\!\left(1+\tfrac{1}{4}q-\tfrac{1}{24}q^2+\tfrac{1}{96}q^3-\cdots\right),
$$

在 $|q|\ll 1$ 时收敛迅速，但封闭形式在所有 $q$ 都给出最佳精度。

## 与摄动函数展开的关系

第三体摄动函数

$$
R_j = G m_j\!\left(\frac{1}{d_j}-\frac{\vec r\cdot\vec\rho_j}{\rho_j^3}\right)
$$

可展开为 $x=r/\rho_j$ 的幂级数，其中 $1/d_j=(1+q)^{-1/2}=\sum_k P_k(\cos\alpha)\,x^k$，Legendre 多项式 $P_k$ 自然出现。因此 $q$ 既是相消补救变量，也是经典 Legendre 展开的自变量。Battin 把这一点与 [Cowell 摄动法](/glossary/fundamentals/orbital-perturbations/)、Encke 法、Hansen 法等摄动数值积分的统一表述联系起来。

## 应用场景

- **高精度星历数值积分**：地月转移、平动点轨道、月球低轨等场景都需在地球椭球、第三体摄动下长时间积分。Cowell 法直接对总加速度积分时步长受迫变小；改用 Battin-Giorgi 计算第三体项后，可在不损失精度的情况下放大步长。
- **地月空间第三体摄动评估**：地球邻域的太阳、月球摄动；月球邻域的地球、太阳摄动，两类问题都满足 $r\ll\rho_j$，Battin-Giorgi 是默认选择。
- **星载导航滤波**：实时计算需求下，避免相消意味着可用更短字长（如 32 位浮点）获得同等精度，对星载计算机友好。
- **教学参考**：Battin《航天动力学的数学方法》（1999 / 中译本 2018）§8.4.1 给出完整推导；Sanna et al. (2024) 在 Gateway 到低月轨的最优脉冲转移中援引该方法并把第三体摄动加速度的稳定计算列为基础假设之一。

## 易混点

- **Battin-Vaughan 算法**：基于通用变量的 Lambert 问题求解器，与 Battin-Giorgi 完全不同。两者都源自 Battin 的工作，但前者是 [Lambert 问题](/glossary/fundamentals/lamberts-problem/) 的根求解，后者是摄动加速度的数值稳定化。
- **q 在 Lambert 问题中**：通用变量 Lambert 算法里也定义了一个 $q=\sin^2(\Delta E/2)$ 类型的辅助变量，与 Battin-Giorgi 的 $q$ 同名但意义不同。
- **与 Encke 法的关系**：Encke 法在密切轨道偏差方程中直接出现 $1/d^3-1/\rho^3$ 类型的差，本质上同样面临相消；Battin-Giorgi 提供的是单一稳定的摄动加速度求值，可在 Encke 法内部直接调用。

## 相关概念

- [Cowell 摄动法（Cowell's Perturbation Method）](/glossary/fundamentals/orbital-perturbations/)
- [兰伯特问题（Lambert's Problem）](/glossary/fundamentals/lamberts-problem/)
- [惯性参考系（Inertial Reference Frames）](/glossary/fundamentals/inertial-reference-frames/)
- [高精度数值仿真（High-Fidelity Simulation）](/glossary/fundamentals/high-fidelity-simulation/)

## 参考文献

- Battin, R. H. (1999). *An Introduction to the Mathematics and Methods of Astrodynamics*, Revised Edition, §8.4.1. AIAA.（中译本：《航天动力学的数学方法（修订版）》，2018，第 8 章。）
- Giorgi, L. (1964). Sur la détermination des positions apparentes des planètes. *Astronomische Nachrichten*, 339, 250–258.
- Sanna, D. et al. (2024). Optimal impulsive orbit transfers from Gateway to low lunar orbit. *Aerospace*, 11(10), 460.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §9 (numerical treatment of perturbations).
