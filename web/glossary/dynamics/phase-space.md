---
title: 相空间与相空间通道（Phase Space & Phase Space Conduit）
description: 由位置和速度（动量）坐标张成的 $2n$ 维空间，是动力系统理论的几何基础。在 CR3BP 中相空间是六维的，其结构由流形、周期轨道、不变环面和零速度面等通量屏障构成。相空间通道则是连接不同能量区域的低维"运输管"，出自不变流形与零速度面的几何空隙，是弱稳定边界转移的动力学根源。
keywords: 相空间, Phase Space, 相空间通道, Phase Space Conduit, 动力系统, CR3BP, 不变流形, 零速度面, 运输管, 弱稳定边界
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 相空间与相空间通道
  desc: 动力系统几何基础——从六维 CR3BP 相空间到连接能量区域的运输管。
  image: /logo.png
og:
  title: 相空间与相空间通道（Phase Space & Phase Space Conduit）详解 | 术语定义
  description: 由位置和速度坐标张成的 $2n$ 维空间，动力系统理论的几何基础。CR3BP 中相空间是六维的，相空间通道是连接不同能量区域的运输管结构。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相空间与相空间通道详解 | 术语定义
  description: CR3BP 的相空间几何——从六维空间到低维运输管通道。
  image: /logo.png
permalink: /glossary/dynamics/phase-space/
---

# 相空间与相空间通道（Phase Space & Phase Space Conduit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 相空间

**相空间**（phase space）是动力系统状态的全部可能取值集合所构成的抽象空间，对 $n$ 自由度的系统，相空间是 $2n$ 维的：$n$ 个位置坐标 + $n$ 个动量（或速度）坐标。它是分析系统演化的天然几何框架，系统在任一时刻的状态对应相空间中一个点，随时间的演化对应相空间中的一条轨迹（Szebehely 1967；Wiggins 2003）。

在 CR3BP（限制性三体问题）中，第三体（航天器）在会合坐标系中有 3 个位置坐标 $(x, y, z)$ 和 3 个速度坐标 $(\dot{x}, \dot{y}, \dot{z})$，相空间是 **六维**的。但由于雅可比常数 $C_J$ 是守恒量（在 CR3BP 中），实际动力学约束在一个 **五维能量流形**上。零速度面将该五维流形划分为禁区（$C_J$ 对应的速度平方为负）与可行区域，形成了相空间的最外层通量屏障。进一步考虑庞加莱截面的降维后，平面限制性三体问题（PCRTBP）的相空间降为二维截面上的离散映射（Koon et al. 2011）。

### 相空间的结构要素

在 CR3BP 的相空间中，以下结构决定了航天器轨道演化的全局性质：

- **平衡点（平动点）**：相空间中速度为零的位置，在 CR3BP 会合系中有五个（$L_1$–$L_5$），是定常解，也是多数动力学结构的枢纽。

- **周期轨道**：相空间中的闭合曲线（一维环），包括 Lyapunov 轨道、Halo 轨道、DRO 等。每个周期轨道有特定的能量水平（$C_J$ 值）。

- **不变环面（准周期轨道）**：二维环面结构，Lissajous 轨道是其代表，由两个不可公度的频率驱动。

- **不变流形**：与周期轨道和环面关联的稳定/不稳定流形，构成相空间中的低维运输高速公路（Koon et al. 2011）。

- **零速度面**：给定 $C_J$ 下速度为零的位置所构成的曲面，是航天器无法穿越的天然边界。

## 相空间通道

**相空间通道**（phase space conduit，又称运输管 transport tube）是连接能量水平接近的不同区域之间的相空间低维结构，航天器可沿其以很低（甚至零）推进剂代价穿越不可行区域（Belló et al. 2010；Koon et al. 2011）。

其几何实质是：在某一能量水平下，零速度面尚未完全封闭的区域边界处，不变流形（特别是 $L_1$ 或 $L_2$ 点的稳定/不稳定流形管）穿越原本看似封闭的禁入区，形成一个狭窄的相空间通道。航天器若恰好在通道的流形上（或通过小量冲量进入），即可在两个区域之间实现自然的低能量转移。这是基于不变流形的弱稳定边界（WSB）转移方法的核心动力学原理（Koon et al. 2011）。

在地月空间中：

- 地月 $L_1$ 和 $L_2$ 的流形管构成了连接地球邻域与月球邻域的相空间通道。

- 日地 $L_1$/$L_2$ 与地月 $L_1$/$L_2$ 流形的交叠区域，构成了跨系统（日地-地月）转移的相空间通道（Howell and Kakoi 2006）。

- 月球 $L_1$ 与 $L_2$ 通道的开闭依赖于雅可比常数：能量越高（$C_J$ 越小），通道越宽；低于临界值后通道完全关闭。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)

- [庞加莱截面（Poincaré Section）](/glossary/dynamics/poincare-section/)

- [低能量转移（Low-Energy Transfer）](/glossary/orbits/low-energy-transfer/)

## 参考文献

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies（CR3BP 相空间结构与线性化流形的经典阐述）

- Koon, Lo, Marsden, and Ross, 2011, Dynamical Systems, the Three-Body Problem and Space Mission Design（相空间通道（运输管）的系统化理论；流形拼接方法）

- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design（相空间通道在平动点附近的可视化与分析）

- Wiggins, 2003, Introduction to Applied Nonlinear Dynamical Systems and Chaos（相空间与不变流形理论的动力系统数学基础）
