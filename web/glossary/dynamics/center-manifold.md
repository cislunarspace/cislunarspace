---
title: 中心流形与法向双曲不变流形（Center Manifold & NHIM）
description: 共线平动点中心流形的谱分解、作用量—角度参数化、相对中心流形，以及法向双曲不变流形 NHIM 的定义和在轨道约化中的作用。
keywords: 中心流形, Center Manifold, 法向双曲不变流形, NHIM, 作用量变量, 相对中心流形, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 中心流形与 NHIM（Center Manifold & NHIM）
  desc: 平动点中心流形、法向双曲不变流形及其在轨道约化中的作用。
  image: /logo.png
og:
  title: 中心流形与 NHIM 详解 | 平动点动力学
  description: 共线平动点中心流形的谱分解、作用量—角度参数化、相对中心流形，以及法向双曲不变流形 NHIM 的定义和在轨道约化中的作用。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 中心流形与 NHIM 详解 | 平动点动力学
  description: 共线平动点中心流形的谱分解、作用量—角度参数化、相对中心流形，以及法向双曲不变流形 NHIM 的定义和在轨道约化中的作用。
  image: /logo.png
permalink: /glossary/dynamics/center-manifold/
---

# 中心流形与法向双曲不变流形（Center Manifold & NHIM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在动力系统平衡点附近，线性化矩阵的特征值按实部可分为三类：负实部（稳定）、正实部（不稳定）、零实部（中心）。由中心特征方向张成的局部不变流形称为**中心流形**（center manifold）。CR3BP 共线平动点 $L_1$、$L_2$、$L_3$ 的线性化谱具有一对实特征值 $\pm d_1$（双曲方向）和两对纯虚特征值 $\pm i\omega_1$、$\pm i\omega_2$（中心方向），因此局部存在一个 4 维中心流形与一个 1 维稳定、1 维不稳定流形（Szebehely 1967；Gómez et al. 2001）。

中心流形上的运动是有界的，Lissajous 轨道、Lyapunov 轨道和 Halo 轨道都落在中心流形或其延拓上。稳定/不稳定流形则在双曲方向上指数趋近或远离平衡点。

## 中心流形的约化与作用量变量

中心流形的存在使得高维系统可局部约化为低维哈密顿系统：在中心流形坐标系下，运动可用作用量—角度变量 $(I_2,I_3;\theta_2,\theta_3)$ 描述。$I_2$ 常与旋转坐标系 $XY$ 平面内的运动振幅相关，$I_3$ 与 $Z$ 方向振幅相关。通过适当的正则变换和 Lyapunov 中心定理，中心流形上的周期轨道族可以系统构造（Gómez et al. 2001；Meyer & Hall 1992）。

## 法向双曲不变流形（NHIM）

**NHIM**（Normally Hyperbolic Invariant Manifold，法向双曲不变流形）是中心流形概念的推广：它本身可以是多维不变流形，沿其法向具有强烈的双曲性（稳定/不稳定方向指数收缩/扩张），而切向则表现为中性或弱双曲。在 CR3BP 中，平动点周期轨道本身是一维 NHIM：切向沿轨道中性，法向有稳定、不稳定及中心方向。NHIM 是相空间中控制输运的“瓶颈”结构，也是构造异宿循环和不变环面的基础（Wiggins 1994；Ross 2022）。

## 相对中心流形

在相对轨道动力学中，若两航天器相对运动的线性化矩阵存在纯虚特征值，则对应中性稳定方向张成**相对中心流形**。该流形上的相对运动是周期或准周期的，常用于平动点轨道附近的编队飞行与伴飞分析。

## 与不变环面的关系

中心流形中的两对中心频率在振幅较小时近似为平动点的特征频率。当两频率之比为无理数且满足非共振条件时，中心流形上可存在二维不变环面，上面布满准周期轨道；当频率比为有理数时，环面可能破裂并产生周期轨道。KAM 理论保证了在小扰动下大量不变环面的 persistence。因此，中心流形是理解不变环面、Lissajous 与 Halo 轨道族的共同几何舞台。

## 相关概念

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [不变环面（Invariant Torus）](/glossary/fundamentals/invariant-torus/)

- [KAM 定理](/glossary/dynamics/kam-theory/)

- [Halo 轨道](/glossary/orbits/halo-orbit/)

- [Lyapunov 轨道](/glossary/orbits/lyapunov-orbit/)

## 参考文献

- Szebehely, V. (1967). Theory of Orbits: The Restricted Problem of Three Bodies.

- Gómez, G., et al. (2001). Dynamics and Mission Design Near Libration Points, Vol. I/III.

- Meyer, K. R., & Hall, G. R. (1992). Introduction to Hamiltonian Dynamical Systems and the N-Body Problem.

- Wiggins, S. (1994). Normally Hyperbolic Invariant Manifolds in Dynamical Systems.

- Ross, S. D., et al. (2022). Dynamical systems, the three-body problem, and space mission design.
