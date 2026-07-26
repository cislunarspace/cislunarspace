---
title: 指向约束（Pointing Constraint）
description: 详细解析指向约束的定义、在地月空间光学探测中的作用及其对SSA架构设计的限制
wechatShare:
  title: 指向约束（Pointing Constraint）
  desc: 详细解析指向约束的定义、在地月空间光学探测中的作用及其对SSA架构设计的限制
  image: /logo.png
keywords: 指向约束, Pointing Constraint, 太阳回避, 光学探测, 态势感知, 传感器限制, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 指向约束（Pointing Constraint）
  description: 详细解析指向约束的定义及其在地月空间光学探测中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 指向约束（Pointing Constraint）
  description: 详细解析指向约束的定义及其在地月空间光学探测中的作用
  image: /logo.png
permalink: /glossary/observation/pointing-constraint/
---

# 指向约束（Pointing Constraint）

## 定义

指向约束（Pointing Constraint）是指光学传感器为避免太阳光直射损伤探测器或产生饱和，必须与太阳保持一定角距的限制。传感器指向目标时，其视轴与太阳方向的夹角必须大于规定的最小排除角（exclusion angle），这一区域在地月空间 SSA 领域常被称为"耻辱锥"（Cone of Shame）。

## 太阳排除角

### 定义

太阳排除角 $\theta_{\text{ex}}$ 是传感器视轴与太阳方向之间的最小允许夹角：

$$\theta_{\text{ex}} = \theta_{\text{det}} + \theta_{\text{sun}}$$

其中 $\theta_{\text{det}}$ 为传感器指向目标的视线角，$\theta_{\text{sun}}$ 为太阳的视角半径（约 $0.27°$）。

### 典型值

| 传感器类型 | 最小排除角 |
| :--- | :--- |
| 地面光学望远镜 | 15° - 45° |
| 天基光学传感器 | 30° - 90° |

## 在SSA架构设计中的影响

Klonowski（2025）在 SSA 架构设计中同时考虑光照约束和指向约束：

### 双重约束

目标必须同时满足：

1. 被太阳照射（光照约束）
2. 传感器指向目标时与太阳保持足够角距（指向约束）

### 检测区域计算

可检测区域 $\mathcal{D}(t)$ 定义为：

$$\mathcal{D}(t) = \{\mathbf{x} \mid \mathbf{x} \in \mathcal{V}, \gamma_{\text{illum}}(\mathbf{x}, t) > 0, \gamma_{\text{point}}(\mathbf{x}, t) > \theta_{\text{ex}}\}$$

其中 $\mathcal{V}$ 为观测体积，$\gamma_{\text{illum}}$ 为光照条件，$\gamma_{\text{point}}$ 为传感器-目标-太阳夹角。

## 核心要素

### 数学定义

指向约束要求传感器视轴 $\mathbf{d}$ 与太阳方向 $\mathbf{s}$ 之间的夹角满足：

$$\cos^{-1}(\mathbf{d} \cdot \mathbf{s}) > \theta_{\text{ex}}$$

### 关键性质

指向约束与光照约束共同决定了可检测区域的几何形状。在地月空间中，两个约束的交互导致检测覆盖呈现复杂的时变特性。

### 应用场景

指向约束影响 SSA 架构的观测调度、卫星指向规划和覆盖评估，是光学探测任务规划的重要约束。

## 相关概念

- [光照约束（Illumination Constraint）](/glossary/observation/illumination-constraint/)
- [月球眩光区（Lunar Glare Zone）](/glossary/observation/lunar-glare-zone/)
- [信噪比（SNR）](/glossary/observation/signal-to-noise-ratio/)

## 参考文献

- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
- Vendl A, Holzinger M J. Observability of space objects in cislunar space[J]. 2016.
