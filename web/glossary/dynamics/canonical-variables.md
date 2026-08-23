---
title: 正则坐标与正则变换（Canonical Coordinates & Canonical Transformation）
description: 哈密顿力学的相空间变量框架：正则坐标与共轭动量、正则方程、正则变换（辛变换）、作用-角变量，以及天体力学中的正则元素（Delaunay 元素、Poincaré 元素、修正 Delaunay 变量、修正春分点元素 MEEs、Jacobi 坐标）及其应用。
keywords: 正则坐标, 正则方程, 正则变换, 辛变换, 泊松括号, 作用角变量, Delaunay, MEEs, 修正春分点, 雅可比坐标, canonical coordinates, canonical transformation, action-angle
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 正则坐标与正则变换
  desc: 哈密顿力学的相空间变量框架与天体力学正则元素。
  image: /logo.png
og:
  title: 正则坐标与正则变换详解 | 术语定义
  description: 正则坐标、正则方程、正则变换（辛变换）、作用角变量与 Delaunay/MEEs 等天体力学正则元素。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 正则坐标与正则变换详解 | 术语定义
  description: 哈密顿力学的相空间变量框架与正则元素。
  image: /logo.png
permalink: /glossary/dynamics/canonical-variables/
---

# 正则坐标与正则变换（Canonical Coordinates & Canonical Transformation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

正则坐标（canonical coordinates）是哈密顿力学中满足泊松括号关系的一对坐标-动量变量 $(q, p)$，使运动方程具有正则（Hamilton）形式：

$\dot{q} = \partial H / \partial p$，$\dot{p} = -\partial H / \partial q$

这组一阶方程称正则方程（canonical equations / Hamilton's equations）。正则坐标的对偶性（共轭坐标与广义动量）由拉格朗日分析力学起源，位置-速度与 Delaunay 元素都是正则变量的实例（Vallado 2022；Meyer 和 Offin 2017）。

## 正则变换

正则变换（canonical transformation）是保持正则方程形式不变的相空间变量替换 $(q,p) \to (Q,P)$，即辛变换：它保持泊松括号 $\{Q,P\}_{q,p} = 1$，雅可比行列式为 1，从而保持相空间体积（刘维尔定理）。正则变换是天体力学中简化摄动问题的核心手段：通过合适的变换可以把快变量与慢变量分离、把含时坐标变为循环坐标，使对应广义动量守恒（Vallado 2022；Ding 等 2025）。寻找正则变换本质上是在寻找更多的循环坐标。典型应用：Brouwer 用两级正则变换消去短周期项得到人工卫星解析理论，Deprit 用 Lie 变换改进之；von Zeipel 法、Hori 法同属此类。

## 作用-角变量

对完全可积哈密顿系统，存在作用-角变量 $(J, \theta)$：作用量 $J$ 是守恒量（环积分 $J_i = \oint p_i dq_i$），角变量 $\theta_i$ 随时间线性变化 $\theta_i = \omega_i t + \theta_{i0}$，频率 $\omega_i = \partial H / \partial J_i$。轨道在不变环面上准周期运动；近可积系统的 KAM 理论正是在作用-角框架下刻画环面的保持与破裂（Meyer 和 Offin 2017）。

## 天体力学中的正则元素

正则元素是把经典开普勒根数改写为共轭变量对，使摄动方程具有哈密顿形式。

### Delaunay 元素

Delaunay 元素是经典轨道根数的正则对应物（Vallado 2022）：

- 作用量：$L_d = \sqrt{\mu a}$，$G_d = \sqrt{\mu a(1-e^2)}$，$H_d = \sqrt{\mu a(1-e^2)}\cos i$

- 共轭角：$M$（平近点角）、$\omega$（近地点辐角）、$\Omega$（升交点赤经）

$H_d$ 即角动量在极轴上的投影。Delaunay 元素在零偏心率与零倾角处存在奇点（与经典根数相同），Brouwer 理论、Lyddane 修正（消零偏心率/零倾角奇点）与 Deprit 理论都建立其上（Vallado 2022）。Delaunay 变量（Delaunay variables）即这套共轭变量对，常直接用于两体问题与限制性三体问题的正则化（Celletti 2010）。

### 修正 Delaunay 变量

修正 Delaunay 变量重新组合标准 Delaunay 元素以避免偏心率趋零时的奇异性（Ding 等 2025）：

$\Lambda = L$，$P = L - G$，$Q = G - H$

对应角变量 $\lambda = M + \omega + \Omega$、$p = \omega + \Omega$、$q = \Omega$。它在分析低偏心率轨道的平均运动共振（MMR）时特别有用，是推导共振正则哈密顿量的基础。

### Poincaré 元素与修正春分点元素

- **Poincaré 元素**是春分点元素的正则对应，构造为 $\sqrt{\cdot}$ 形式，规避偏心率与倾角趋零的奇点，适合近圆/近赤道轨道的哈密顿摄动分析（Brouwer 和 Clemence 1961；Vallado 2022）。

- **修正春分点元素（MEEs）**：一组非奇异轨道根数，由半通径 $p$、偏心率矢量分量 $(f,g)$、倾角矢量分量 $(h,k)$ 与真经度 $L$ 组成。相比经典开普勒根数，MEEs 在圆轨道与赤道轨道处无奇点，且与笛卡尔坐标的变换矩阵连续光滑，适合低推力轨迹优化中协态方程的直接推导（Singh 等 2021；Broucke 和 Cefola 1972）。

### Jacobi 坐标

Jacobi 坐标（Jacobi coordinates）是把 N 体问题化为一系列相对坐标的坐标变换：依次取相邻两体的质心与第三体的相对位置，使动能分离、质心运动解耦，便于分析相对运动（Meyer 和 Offin 2017）。它本身是坐标变换而非共轭变量对，但与正则框架同属天体力学的坐标工具。

## 应用要点

正则框架的价值：一是使扰动哈密顿量的构造与分析（快慢变量分离、共振项辨识）系统化；二是让摄动解不依赖具体坐标而保持哈密顿结构（辛结构），适合长期数值积分（辛积分器）；三是非奇异元素集（MEEs、Poincaré 元素）直接支撑最优控制与轨道设计中的连续光滑导数计算。

## 相关概念

- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)

- [辛变换（Symplectic Transformation）](/glossary/dynamics/hamiltonian-normal-form/)

- [不变环面（Invariant Torus）](/glossary/fundamentals/invariant-torus/)

- [KAM 理论（KAM Theory）](/glossary/dynamics/kam-theory/)

## 参考文献

- Vallado, 2022, Fundamentals of Astrodynamics and Applications（正则元素、Delaunay/Poincaré 元素，Brouwer 理论）

- Meyer 和 Offin, 2017, Introduction to Hamiltonian Dynamical Systems and the N-Body Problem

- Brouwer 和 Clemence, 1961, Methods of Celestial Mechanics（Poincaré 元素）

- Celletti, 2010, Stability and Chaos in Celestial Mechanics（Delaunay 变量）

- Ding 等, 2025, Cislunar Space Situational Awareness via Earth-Moon Resonant Orbits（修正 Delaunay 变量）

- Singh 等, 2021（MEEs 低推力优化）

- Broucke 和 Cefola, 1972, Celestial Mechanics（修正春分点元素）
