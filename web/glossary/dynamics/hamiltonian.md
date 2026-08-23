---
title: 哈密顿函数（Hamiltonian）
description: 相空间上主导哈密顿动力学的标量函数。覆盖从拉格朗日量的 Legendre 变换、正则方程、Hamilton 矩阵与辛结构、CR3BP Hamilton 函数与雅可比常数的关系、自然/低推力 Hamilton 量、近可积系统、约化、以及最优控制中的 Hamilton 函数。
keywords: 哈密顿函数, Hamiltonian, 哈密顿系统, Hamilton矩阵, 辛结构, Legendre变换, 雅可比常数, 自然哈密顿量, 低推力哈密顿量, 近可积哈密顿系统, 约化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 哈密顿函数（Hamiltonian）
  desc: 主导相空间动力学的标量函数——正则方程、CR3BP、低推力、近可积近似与约化。
  image: /logo.png
og:
  title: 哈密顿函数详解 | 分析力学与地月空间动力学
  description: 相空间上主导哈密顿动力学的标量函数。覆盖 Legendre 变换、正则方程、Hamilton 矩阵、CR3BP Hamilton 量与雅可比常数的关系、自然/低推力 Hamilton 量、近可积系统、约化、以及最优控制中的 Hamilton 函数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 哈密顿函数详解 | 分析力学与地月空间动力学
  description: 相空间上主导哈密顿动力学的标量函数。覆盖 Legendre 变换、正则方程、Hamilton 矩阵、CR3BP Hamilton 量与雅可比常数的关系、自然/低推力 Hamilton 量、近可积系统、约化、以及最优控制中的 Hamilton 函数。
  image: /logo.png
permalink: /glossary/dynamics/hamiltonian/
---

# 哈密顿函数（Hamiltonian）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

哈密顿函数 $H(\mathbf{q},\mathbf{p},t)$ 是相空间上的标量函数，与正则方程 $\dot{\mathbf{q}}=\partial H/\partial\mathbf{p}$、$\dot{\mathbf{p}}=-\partial H/\partial\mathbf{q}$ 一起决定任何哈密顿系统的演化。保守力学中 $H$ 等于系统总能量；最优控制中 $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$ 是庞特里亚金原理的核心；CR3BP 中 $H=-C/2$，$C$ 为雅可比常数。同一对象统一了分析力学、摄动理论与轨迹优化（Meyer & Offin 2017；Szebehely 1967）。

## 从拉格朗日量到 Hamilton 函数

给定拉格朗日量 $L(\mathbf{q},\dot{\mathbf{q}},t)$，定义共轭动量 $\mathbf{p}=\partial L/\partial\dot{\mathbf{q}}$，执行 Legendre 变换

$$H(\mathbf{q},\mathbf{p},t)=\mathbf{p}^{\!\top}\dot{\mathbf{q}}-L(\mathbf{q},\dot{\mathbf{q}},t).$$

由此得到正则方程。当 $H$ 不显含 $t$ 时 $dH/dt=\partial H/\partial t=0$，$H$ 为守恒量。**自然 Hamilton 量**形式为 $H=T(\mathbf{p})+V(\mathbf{q})$（动能加势能），是力学系统的原型。

## Hamilton 矩阵与辛结构

哈密顿系统在相空间 $\mathbf{z}=(\mathbf{q},\mathbf{p})$ 上的线性化 $\dot{\mathbf{z}}=A\mathbf{z}$，其系数矩阵 $A(t)$ 满足 $A^{\!\top}J+JA=0$，$J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$，称为 **Hamilton 矩阵**；其谱关于 $\lambda\mapsto -\lambda$ 对称（Meyer & Offin 2017, Prop. 2.3.1）。Hamilton 矩阵的指数是**辛矩阵** $M$，满足 $M^{\!\top}JM=J$，特征值以倒数对 $\lambda,1/\lambda$ 出现。任何 Hamilton 流的状态转移矩阵都是辛矩阵，这是共线平动点处 saddle×center×center 结构的代数根源（详见 [辛结构与哈密顿正规形](/glossary/dynamics/hamiltonian-normal-form/)）。

## CR3BP Hamilton 量与雅可比常数

在圆型限制性三体问题的会合坐标系下，自治 Hamilton 函数为

$$H=\tfrac12(p_x^2+p_y^2+p_z^2)+yp_x-xp_y-\frac{1-\mu}{r_1}-\frac{\mu}{r_2},$$

其中 $r_1,r_2$ 为到两主天体的距离（Szebehely 1967；Meyer & Offin 2017）。科氏与离心项表现为 $yp_x-xp_y$。雅可比常数 $C=-2H$ 是 CR3BP 唯一守恒量，通过零速度曲面限定 Hill 区域（见 [雅可比积分](/glossary/dynamics/jacobi-integral/)）。

Cox et al.（2021）将 $H$ 拆分为**自然 Hamilton 量**

$$H_{nat}=\tfrac12 v^2-\tfrac12(x^2+y^2)-\frac{1-\mu}{r_1}-\frac{\mu}{r_2}$$

（无摄 CR3BP 中守恒）与**低推力 Hamilton 量** $H_{lt}=H_{nat}-\mathbf{r}^{\!\top}\mathbf{a}_{lt}$，当低推力加速度 $\mathbf{a}_{lt}$ 在旋转系下固定时，$H_{lt}$ 成为新的守恒量。**相对 Hamilton 量**描述追踪航天器在双主天体引力下相对目标的运动。

## 近可积 Hamilton 系统

若系统有 $n$ 个相互对合（Poisson 括号为零）的独立积分，则称为**可积**。**近可积 Hamilton 量**形如 $H=H_0(I)+\varepsilon H_1(I,\varphi)$，$(I,\varphi)$ 为可积部分的作用-角变量，$\varepsilon\ll 1$。KAM 定理与 Nekhoroshev 定理描述其长期动力学（Celletti 2010；见 [KAM 定理](/glossary/dynamics/kam-theory/)）。**Hamilton 可积近似**把 $H_1$ 对快变量平均，得到捕捉平均运动共振的可积 $\bar H$，用于为地月共振轨道族的数值延拓提供初值（Ding et al. 2025）。

## Hamilton 约化

$H$ 具有对称性时，Noether 定理给出守恒量（线动量、角动量、Jacobi 积分）。**Hamilton 约化**通过对称群对相空间取商以降低有效自由度，Meyer–Marsden–Weinstein 约化是标准框架（Meyer & Offin 2017, Ch.7）。固定 Jacobi 常数的平面 CR3BP 可约化为 Hill 区域上的二维 Hamilton 流。

## 最优控制中的 Hamilton 函数

最优控制问题的 Hamilton 函数由动力学与即时代价构造：

$$H(\mathbf{x},\boldsymbol{\lambda},\mathbf{u},t)=L(\mathbf{x},\mathbf{u},t)+\boldsymbol{\lambda}^{\!\top}\mathbf{f}(\mathbf{x},\mathbf{u},t),$$

最优控制在每一时刻极小化 $H$。它与力学 Hamilton 函数共享正则方程结构，协态 $\boldsymbol{\lambda}$ 起到动量作用（见 [庞特里亚金极值原理](/glossary/dynamics/pontryagins-maximum-principle/)、[协态变量与共轭方程](/glossary/dynamics/co-state-variables/)）。

## 应用要点

- 自治问题中 $H$ 守恒是数值积分精度廉价而严格的检验。
- CR3BP-LT 在旋转系固定推力下继承守恒 $H_{lt}$，可像 Jacobi 常数一样用于能量门控的轨迹设计。
- 单值矩阵的辛谱（读自 $H$ 的二阶变分）决定平动点轨道的稳定/不稳定/中心流形。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [单值矩阵（Monodromy Matrix）](/glossary/dynamics/monodromy-matrix/)
- [辛结构与哈密顿正规形](/glossary/dynamics/hamiltonian-normal-form/)
- [KAM 定理](/glossary/dynamics/kam-theory/)
- [庞特里亚金极值原理（PMP）](/glossary/dynamics/pontryagins-maximum-principle/)
- [协态变量与共轭方程（Costate Variables）](/glossary/dynamics/co-state-variables/)
- [正则变量（Canonical Variables）](/glossary/dynamics/canonical-variables/)

## 参考文献

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*.
- Meyer, K. R., & Offin, D. C. (2017). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Ch. 1–2, 7.
- Celletti, A. (2010). *Stability and Chaos in Celestial Mechanics*.
- Cox, A. B., et al. (2021). CR3BP with low-thrust.
- Ding, Y., et al. (2025). Cislunar SSA via Earth-Moon resonant orbits.
