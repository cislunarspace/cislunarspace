---
title: 轴向轨道（Axial Orbit）
description: 详细解析轴向轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
keywords: 轴向轨道, Axial Orbit, 平动点, L1, L2, L3, L4, L5, 三体问题, 轨道动力学, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 轴向轨道（Axial Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轴向轨道（Axial Orbit）详解 | 平动点三维周期轨道
  description: 详细解析轴向轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轴向轨道（Axial Orbit）详解 | 平动点三维周期轨道
  description: 详细解析轴向轨道的定义、动力学特性、在平动点附近的周期运动及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/axial-orbit/
---

# 轴向轨道（Axial Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轴向轨道（Axial Orbit）是**环绕平动点的三维周期轨道族**，属于平动点轨道（Libration Point Orbit, LPO）的重要类别之一。轴向轨道的命名源于其运动特征——轨道在 $x$ 轴（地月连线方向）附近具有显著振荡，同时在 $z$ 方向也存在周期运动，形成沿轴向展开的三维空间构型。轴向轨道广泛存在于地月系统的 L1、L2、L3 共线平动点以及 L4、L5 三角平动点附近。

## 核心要素

### 轴向轨道的动力学特性

轴向轨道在 CR3BP 框架下具有以下特性：

- **三维运动**：轴向轨道在 $x$ 方向具有最大振幅，同时在 $z$ 方向也有显著振荡，形成沿地月连线轴向展开的独特构型
- **周期性**：轴向轨道是严格周期轨道，在会合坐标系中精确闭合
- **对称性**：标准轴向轨道关于 $xOz$ 平面对称
- **能量覆盖广**：轴向轨道族的 Jacobi 常数覆盖范围较宽，能够连接不同能量水平的地月空间区域

### 轴向轨道的分类

根据地月系统中的平动点位置，轴向轨道可分为以下族：

| 轨道族 | 所属平动点 | 特征 |
|:---|:---|:---|
| A1（Axial L1） | L1 | 位于地月连线之间，周期约 17 天 |
| A2（Axial L2） | L2 | 位于月球背向地球一侧，周期约 19 天 |
| A3（Axial L3） | L3 | 位于地球背向月球一侧，周期约 27 天 |
| A4/A5（Axial L4/L5） | L4/L5 | 位于三角平动点附近 |

### 轨道参数特征

以地月系统为例，轴向轨道族的主要参数范围如下（基于 Guzzetti 等人的动态目录统计）：

| 轨道族 | Jacobi 常数范围 | 周期范围（天） | 稳定性指数范围 |
|:---|:---|:---|:---|
| A1 | 2.9918 ~ 3.0214 | 17.15 ~ 17.65 | 200 ~ 254 |
| A2 | 2.9671 ~ 3.0138 | 18.72 ~ 19.20 | 128 ~ 168 |
| A3 | 0.0165 ~ 1.8588 | 27.19 ~ 27.21 | 1.05 ~ 1.16 |

A1 和 A2 轴向轨道的 Jacobi 常数范围与 L1/L2 Lyapunov 轨道的能量范围高度重叠，这意味着它们之间可能存在低成本的轨道转移通道。

### 轴向轨道与其他平动点轨道的关系

轴向轨道与 Lyapunov 轨道、Halo 轨道、垂直轨道等同属平动点轨道家族：

- **与 Lyapunov 轨道的关系**：轴向轨道可视为 Lyapunov 轨道在三维空间中的延伸，当 $z$ 方向振幅较小时趋近于平面 Lyapunov 轨道
- **与 Halo 轨道的关系**：轴向轨道和 Halo 轨道均具有三维特性，但主导振荡方向不同；Halo 轨道以 $z$ 方向为主导，而轴向轨道以 $x$ 方向为主导
- **与垂直轨道的关系**：垂直轨道以 $z$ 方向振荡为特征，与轴向轨道在三维空间中形成互补的轨道族

### 稳定性与任务适用性

轴向轨道的稳定性特征使其在任务设计中具有独特价值：

- L1/L2 轴向轨道具有相对较低的周期（约 17~19 天）和适中的稳定性指数，适合长期驻留任务
- A1/A2 轴向轨道的 Jacobi 常数完全落在 L1/L2 Lyapunov 轨道的能量范围内，表明它们可作为低能量转移的候选目标
- 在 Guzzetti 等人提出的长期月球基础设施选址分析中，L1/L2 轴向轨道因其有利的周期和稳定性特征被列为候选轨道族

## 应用价值

轴向轨道在地月空间任务中具有以下潜在应用价值：

- **长期基础设施选址**：L1/L2 轴向轨道具有适中的轨道周期和稳定性，适合作为地月空间长期基础设施的部署位置
- **低能量转移节点**：由于轴向轨道与 Lyapunov 轨道能量范围重叠，可作为低能量转移网络的重要节点
- **轨道停靠与补给**：轴向轨道的周期特性有利于任务规划和轨道停靠操作
- **动力学研究基础**：作为平动点轨道分类体系的重要组成部分，轴向轨道是理解地月空间复杂动力学结构的关键

## 相关概念
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [垂直轨道（Vertical Orbit）](/glossary/orbits/vertical-orbit/)
- [Lissajous 轨道（Lissajous Orbit）](/glossary/orbits/lissajous-orbit/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
