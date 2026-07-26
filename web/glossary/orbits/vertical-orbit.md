---
title: 垂直轨道（Vertical Orbit）
description: 详细解析垂直轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
keywords: 垂直轨道, Vertical Orbit, 平动点, L1, L2, L3, L4, L5, 三体问题, 轨道动力学, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 垂直轨道（Vertical Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 垂直轨道（Vertical Orbit）详解 | 平动点三维周期轨道
  description: 详细解析垂直轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 垂直轨道（Vertical Orbit）详解 | 平动点三维周期轨道
  description: 详细解析垂直轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/vertical-orbit/
---

# 垂直轨道（Vertical Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

垂直轨道（Vertical Orbit）是**环绕平动点的三维周期轨道族**，属于平动点轨道（Libration Point Orbit, LPO）的重要类别之一。与 Lyapunov 轨道的平面运动不同，垂直轨道在 $z$ 方向具有显著的周期振荡分量，同时在 $xOy$ 平面内也保持一定的运动幅度，形成独特的三维空间构型。垂直轨道存在于地月系统的 L1、L2、L3 共线平动点以及 L4、L5 三角平动点附近。

## 核心要素

### 垂直轨道的动力学特性

垂直轨道在 CR3BP 框架下具有以下特性：

- **三维运动**：垂直轨道在 $x$、$y$、$z$ 三个方向均具有非零振幅，其中 $z$ 方向的振荡是其命名的来源，也是与 Lyapunov 轨道最显著的区别
- **周期性**：垂直轨道是严格周期轨道，在会合坐标系中精确闭合
- **对称性**：标准垂直轨道关于 $xOz$ 平面对称
- **振幅参数化**：垂直轨道族可通过 $z$ 方向振幅参数化，不同振幅对应不同能量水平（Jacobi 常数）和轨道周期

### 垂直轨道的分类

根据地月系统中的平动点位置，垂直轨道可分为以下族：

| 轨道族 | 所属平动点 | 特征 |
| :--- | :--- | :--- |
| V1（Vertical L1） | L1 | 位于地月连线之间，$z$ 方向振幅中等 |
| V2（Vertical L2） | L2 | 位于月球背向地球一侧，$z$ 方向振幅较大 |
| V3（Vertical L3） | L3 | 位于地球背向月球一侧，周期较长 |
| V4/V5（Vertical L4/L5） | L4/L5 | 位于三角平动点附近，稳定性较好 |

### 轨道参数特征

以地月系统为例，垂直轨道族的主要参数范围如下（基于 Guzzetti 等人的动态目录统计）：

| 轨道族 | Jacobi 常数范围 | 周期范围（天） | 稳定性指数 |
| :--- | :--- | :--- | :--- |
| V1 | 约 2.5 ~ 3.0 | 约 24 | 较高 |
| V2 | 约 0.8 ~ 3.0 | 约 16 | 中等 |
| V3 | 约 2.5 ~ 3.0 | 较长 | 较低 |

垂直轨道的 Jacobi 常数与轨道周期之间存在非线性关系，随着振幅增大，轨道能量降低（Jacobi 常数减小），周期相应变化。

### 垂直轨道与其他平动点轨道的关系

垂直轨道与 Lyapunov 轨道、Halo 轨道、轴向轨道（Axial Orbit）等同属平动点轨道家族：

- **与 Lyapunov 轨道的关系**：Lyapunov 轨道严格位于 $xOy$ 平面内，可视为垂直轨道在 $z$ 方向振幅趋于零时的退化形式
- **与 Halo 轨道的关系**：Halo 轨道关于 $xOz$ 平面对称，而垂直轨道在 $y$ 方向也有显著振幅；两者均具有三维特性，但几何构型不同
- **与轴向轨道的关系**：轴向轨道和垂直轨道均具有三维特性，但主导振荡方向不同

### 稳定性分析

垂直轨道的稳定性因所属平动点不同而异：

- L1、L2、L3 附近的垂直轨道通常具有不稳定模态，需要轨道维持机动
- L4、L5 附近的垂直轨道由于三角平动点本身的稳定性，部分成员可能具有较好的长期稳定性
- 稳定性指数（Stability Index）是评估垂直轨道局部稳定性的关键指标，指数越接近 1 表示轨道越稳定

## 应用价值

垂直轨道在地月空间任务中具有以下潜在应用价值：

- **科学观测平台**：垂直轨道的三维特性使其能够提供独特的观测几何，适合空间科学和天文观测任务
- **通信中继**：L1/L2 垂直轨道可用于地月通信中继，覆盖月球正面和背面
- **轨道转移通道**：垂直轨道的稳定和不稳定流形可作为低能量转移通道，连接不同区域的地月空间
- **任务设计参考**：作为平动点轨道分类体系的重要组成部分，垂直轨道是理解地月动力学结构和设计复杂任务轨迹的基础

## 相关概念

- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [轴向轨道（Axial Orbit）](/glossary/orbits/axial-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
