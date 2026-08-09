---
title: 轨道共振（Orbital Resonance / Mean Motion Resonance）
description: 轨道共振（平均运动共振）：两个绕共同中心天体运行的天体轨道周期呈简单整数比的力学状态。覆盖 p:q 定义、二体与 CR3BP 模型差异、内/外共振分类、1:1 与三角平动点、太阳系与地月空间实例，及其在低能转移与长期稳定性分析中的应用。
keywords: 轨道共振, 平均运动共振, orbital resonance, mean motion resonance, p:q 共振, 内共振, 外共振, 三角平动点, 特洛伊天体, CR3BP, 地月空间, 共振轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 轨道共振（Orbital Resonance / Mean Motion Resonance）
  desc: 平均运动共振的 p:q 定义、分类、CR3BP 周期轨道与地月空间应用。
  image: /logo.png
og:
  title: 轨道共振（Orbital Resonance）详解 | 术语定义
  description: 轨道共振（平均运动共振）：两个绕共同中心天体运行的天体轨道周期呈简单整数比的力学状态。覆盖 p:q 定义、二体与 CR3BP 模型差异、内/外共振分类、1:1 与三角平动点、太阳系与地月空间实例。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道共振（Orbital Resonance）详解 | 术语定义
  description: 轨道共振（平均运动共振）：两个绕共同中心天体运行的天体轨道周期呈简单整数比的力学状态。覆盖 p:q 定义、二体与 CR3BP 模型差异、内/外共振分类、1:1 与三角平动点、太阳系与地月空间实例。
  image: /logo.png
permalink: /glossary/dynamics/orbital-resonance/
---

# 轨道共振（Orbital Resonance / Mean Motion Resonance）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道共振（orbital resonance），在天体力学中通常特指平均运动共振（mean motion resonance），即两个绕同一中心天体运行的天体，其轨道周期满足简单整数比的力学状态。设天体 A、B 的平均运动分别为 $n_A$、$n_B$，轨道周期为 $T_A$、$T_B$，则 $p:q$ 平均运动共振满足

$$\frac{p}{q} = \frac{n_B}{n_A} = \frac{T_A}{T_B}$$

其中 $p$、$q$ 为正整数。按天体力学惯例，$p$ 对应较小天体（如航天器、彗星）在共振周期内绕中心天体运行的圈数，$q$ 对应参考天体（如月球、木卫）运行的圈数（Escribano & Howell 2013）。

在圆型限制性三体问题（CR3BP）中，共振不再精确等于两个开普勒周期的整数比，而是表现为旋转坐标系中的闭合周期轨道：航天器在旋转系中完成 $p$ 圈几何，同时次天体完成 $q$ 圈运动。

## 数学与力学细节

在二体问题中，由开普勒第三定律

$$n_i = \sqrt{\frac{\mu}{a_i^3}}, \quad T_i = \frac{2\pi}{n_i}$$

可知，给定 $p:q$ 共振与参考天体周期 $T_q$，航天器轨道的半长轴为

$$a = \left[ \mu \left( \frac{q\,T_q}{2\pi p} \right)^2 \right]^{1/3}$$

最简便的构造是在近拱点或远拱点给出初始状态：对平面共振取 $z_0=\dot z_0=0$，在拱线处取 $y_0=0$、$\dot x_0=0$，再由选定的半长轴 $a$ 与偏心率 $e$ 求出 $x_0$ 与横向速度 $\dot y_0$（Escribano & Howell 2013）。

在 CR3BP 中，$p:q$ 共振轨道通常以二体初值转换到旋转系后作为猜测，通过微分改正迭代出严格周期解。其周期满足近似关系

$$p\,T_{\text{sc}} \approx q\,T_{P_2}$$

其中 $T_{P_2}$ 为次天体相对主天体的公转周期。由于 $P_2$ 引力摄动，轨道在惯性系中不再闭合，但在旋转系中具有严格的闭合几何；轨道族可通过延拓方法生成，内共振、外共振及 1:1 共振均有对应周期族。

## 分类与变体

- **内共振（interior resonance）**：$p > q$，航天器周期短于参考天体，例如 3:2、2:1。

- **外共振（exterior resonance）**：$p < q$，航天器周期长于参考天体，例如 1:2、2:3。

- **1:1 共振**：周期相同，包括三角平动点 $L_4$、$L_5$ 附近的特洛伊（Trojan）运动，以及蝌蚪轨道（tadpole）和马蹄轨道（horseshoe）。在地月系中，$L_4$、$L_5$ 处的运动即属 1:1 共轨共振（Szebehely 1967；Vallado 2022）。

- **月球会合共振（synodic resonance）**：轨道周期与月球会合周期（约 29.5 天）成简单整数比，例如 Gateway 基线 [9:2 近直线晕轨道](/glossary/dynamics/lsr/)。

- **拉普拉斯共振**：三个以上天体周期构成简单整数链，例如木卫一-欧罗巴-盖尼米德的 1:2:4 共振。

## 应用要点

1. **自然天体动力学**：小行星带的 Kirkwood 间隙、土星光环的共振缝、冥王星-海王星的 3:2 共振、木星族彗星在 3:2 与 2:3 之间跃迁，均可由平均运动共振解释（Perozzi & Ferraz-Mello 2010）。
2. **低能转移设计**：不稳定共振轨道的稳定/不稳定流形构成相空间通道，可用于构造地月转移、行星卫星 tour 以及从低地球轨道到平动点轨道的连接弧（Escribano & Howell 2013）。
3. **长期轨道稳定性**：IBEX、TESS 等任务利用月球共振轨道获得长期可预测轨道，显著降低驻留维持成本与碰撞风险。

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [天平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)

- [共振流形（Resonant Manifold）](/glossary/dynamics/invariant-manifold/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [月球会合共振（Lunar Synodic Resonance）](/glossary/dynamics/lsr/)

- [共振跃迁（Resonance Transition）](/glossary/dynamics/resonance-transition/)

## 参考文献

- Escribano, T. M. V. & Howell, K. C., 2013, *Spacecraft Transfer Trajectory Design Exploiting Resonant Orbits in Multi-Body Environments* (Ph.D. dissertation, Purdue University)

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed.

- Szebehely, V., 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*

- Perozzi, E. & Ferraz-Mello, S. (eds.), 2010, *Space Manifold Dynamics*

- Oshima, K., 2022, "Multiple families of synodic resonant periodic orbits in the bicircular restricted four–body problem", *Advances in Space Research*
