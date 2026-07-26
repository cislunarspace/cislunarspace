---
title: 光照约束（Illumination Constraint）
description: 详细解析光照约束的定义、在地月空间光学探测中的作用及其对SSA架构设计的限制
wechatShare:
  title: 光照约束（Illumination Constraint）
  desc: 详细解析光照约束的定义、在地月空间光学探测中的作用及其对SSA架构设计的限制
  image: /logo.png
keywords: 光照约束, Illumination Constraint, 地月空间, 光学探测, 态势感知, 太阳照射, 阴影, 可见性
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 光照约束（Illumination Constraint）
  description: 详细解析光照约束的定义及其在地月空间光学探测中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 光照约束（Illumination Constraint）
  description: 详细解析光照约束的定义及其在地月空间光学探测中的作用
  image: /logo.png
permalink: /glossary/observation/illumination-constraint/
---

# 光照约束（Illumination Constraint）

## 定义

光照约束（Illumination Constraint）是指地月空间中的目标必须被太阳照射才能被光学传感器检测的物理限制。光学传感器依赖目标反射的太阳光进行探测，因此在地月空间的阴影区域（如地球阴影、月球阴影）中的目标无法被光学 SSA 架构检测。

## 阴影区域

### 地球阴影

地球阴影是指目标进入地球投射的阴影锥内，无法被太阳照射的区域。阴影锥的半角 $\theta$ 满足：

$$\tan \theta = \frac{R_\oplus}{d_E}$$

其中 $R_\oplus$ 为地球半径，$d_E$ 为目标到地球的距离。

### 月球阴影

月球阴影类似，月球阴影锥的半角：

$$\tan \theta = \frac{R_M}{d_M}$$

其中 $R_M$ 为月球半径，$d_M$ 为目标到月球的距离。

## 在SSA架构设计中的影响

Klonowski（2025）在 SSA 架构设计中系统考虑了光照约束的影响：

### 动态覆盖分析

- 架构的检测能力随太阳-地球-月球几何关系变化
- 阴影区域的时间演化导致检测覆盖出现周期性盲区
- 需要优化观测卫星轨道以最小化光照约束的影响

### 轨道共振设计

- 选择与太阳-月球几何周期共振的轨道可提高持续覆盖能力
- 轨道初相的选择影响长期覆盖性能

## 核心要素

### 数学定义

目标被太阳照射的条件为：目标位于地球和月球阴影锥外部，即：

$$\mathbf{n}_{\text{sun}} \cdot (\mathbf{r} - \mathbf{r}_{\text{E/M}}) > 0$$

其中 $\mathbf{n}_{\text{sun}}$ 为太阳方向单位向量，$\mathbf{r}$ 为目标位置，$\mathbf{r}_{\text{E/M}}$ 为主天体位置。

### 关键性质

光照约束是时间周期性的，周期为太阳-月球 synodic 周期（约 29.5 天）。在阴影区域，光学传感器无法检测目标。

### 应用场景

光照约束影响 SSA 架构的轨道设计、观测调度和覆盖评估，是光学探测任务规划的重要约束。

## 相关概念

- [指向约束（Pointing Constraint）](/glossary/observation/pointing-constraint/)
- [信噪比（SNR）](/glossary/observation/signal-to-noise-ratio/)
- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)

## 参考文献

- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
- Vendl A, Holzinger M J. Observability of space objects in cislunar space[J]. 2016.
