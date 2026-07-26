---
title: 不变流形（Invariant Manifold）
description: 详细解析不变流形的定义、稳定流形与不稳定流形的概念及其在平动点轨道设计和低能转移中的应用
keywords: 不变流形, Invariant Manifold, 稳定流形, 不稳定流形, 平动点, 低能转移, 流形理论
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 不变流形（Invariant Manifold）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 不变流形详解 | 平动点轨道动力学基础
  description: 详细解析不变流形的定义、稳定流形与不稳定流形的概念及其在平动点轨道设计和低能转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不变流形详解 | 平动点轨道动力学基础
  description: 详细解析不变流形的定义、稳定流形与不稳定流形的概念及其在平动点轨道设计和低能转移中的应用
  image: /logo.png
permalink: /glossary/dynamics/invariant-manifold/
---

# 不变流形（Invariant Manifold）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文参考：钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

不变流形（Invariant Manifold）是动力系统理论中的核心概念，指在系统演化过程中保持不变的集合。对于 Hamiltonian 系统，不变流形是由相空间中保持系统结构不变的几何结构。

在限制性三体问题中，不变流形描述了平动点附近周期轨道和拟周期轨道周围的流形结构，是理解平动点动力学和设计低能转移轨道的关键工具。

## 稳定流形与不稳定流形

### 稳定流形（Stable Manifold）

稳定流形 $W^s$ 是指从该流形上任何点出发的轨线，随着时间 $t \to +\infty$，都渐近收敛到目标周期轨道或平衡点。

$$W^s(x_0) = \{ x \in \mathcal{M} : \lim_{t \to +\infty} \phi^t(x) = x_0 \}$$

对于共线平动点（L₁、L₂、L₃），稳定流形对应于沿不稳定特征方向收敛到平动点的轨线。

### 不稳定流形（Unstable Manifold）

不稳定流形 $W^u$ 是指从该流形上任何点出发的轨线，随着时间 $t \to -\infty$，都渐近收敛到目标周期轨道或平衡点。

$$W^u(x_0) = \{ x \in \mathcal{M} : \lim_{t \to -\infty} \phi^t(x) = x_0 \}$$

对于共线平动点，不稳定流形对应于沿不稳定特征方向远离平动点的轨线。

## 动力学特性

### 平动点的流形结构

共线平动点（L₁、L₂、L₃）具有 **鞍×中心×中心** 的动力学结构：

| 方向 | 稳定性 | 对应流形 |
| :--- | :--- | :--- |
| 穿越方向 | 鞍点（不稳定） | 一维不稳定流形 |
| 平面内垂直于连线方向 | 中心（稳定） | 二维稳定/不稳定流形 |
| 垂直于轨道面方向 | 中心（稳定） | 二维稳定/不稳定流形 |

### 流形的几何形态

稳定流形和不稳定流形在相空间中形成"管状"结构：

- 稳定流形管：从周期轨道附近出发，向内卷绕到周期轨道
- 不稳定流形管：从周期轨道附近出发，向外发散

这些管状结构构成了**行星际高速公路**（Interplanetary Superhighway）的主体。

## 在轨道设计中的应用

### 低能转移轨道设计

利用不变流形可以设计低能转移轨道：

1. **稳定流形转移**：从目标轨道出发，沿稳定流形向外传播，找到与出发轨道相交的点
2. **不稳定流形转移**：从出发轨道出发，沿不稳定流形向内收敛到目标轨道

### 平动点轨道生成

在设计平动点附近的周期轨道时：

1. 在 CR3BP 模型中计算周期轨道的初始估计
2. 利用稳定/不稳定流形检验轨道的稳定性
3. 将不变流形作为轨道设计的收敛方向

### 弱稳定边界（WSB）转移

Belbruno 的弱稳定边界理论建立在不变流形的基础上：WSB 转移利用不稳定流形的自然扩散效应，以极小的能量代价实现轨道转移。

## 在轨道保持中的应用

### 流形稳定性分析

通过分析周期轨道周围稳定流形和不稳定流形的相对位置，可以判断轨道的长期稳定性：

- 流形管不相交：轨道可能是稳定的
- 流形管相交：轨道存在混沌行为

### 靶点法

轨道保持的靶点法本质上是通过控制使航天器沿稳定流形回归周期轨道。

## 相关概念

- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [弱稳定边界（WSB）](/glossary/other/weak-stability-boundary/)
- [Halo轨道](/glossary/orbits/halo-orbit/)
- [低能转移轨道（Low Energy Transfer）](/glossary/orbits/low-energy-transfer/)

## 参考文献

- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[M]. 2011.
- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
