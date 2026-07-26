---
title: 可达集（Reachable Set）
description: 详细解析可达集的定义、计算方法及其在地月空间态势感知架构韧性分析中的应用
wechatShare:
  title: 可达集（Reachable Set）
  desc: 详细解析可达集的定义、计算方法及其在地月空间态势感知架构韧性分析中的应用
  image: /logo.png
keywords: 可达集, Reachable Set, Reachability, 地月空间, 态势感知, 韧性分析, 低推力, 轨迹分析
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 可达集（Reachable Set）
  description: 详细解析可达集的定义、计算方法及其在地月空间态势感知架构韧性分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 可达集（Reachable Set）
  description: 详细解析可达集的定义、计算方法及其在地月空间态势感知架构韧性分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/reachable-set/
---

# 可达集（Reachable Set）

## 定义

可达集（Reachable Set）是指在给定初始条件集合和控制输入下，系统所有可能到达状态的集合。可达集理论（Reachability Theory）是分析系统能力和约束的重要工具，在地月空间态势感知中用于量化架构对低推力航天器的持续检测能力。

## 数学描述

### 动力学系统

考虑非线性动力学系统：

$$\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}), \quad \mathbf{u} \in \mathcal{U}$$

其中 $\mathbf{x}$ 为状态，$\mathbf{u}$ 为控制输入，$\mathcal{U}$ 为允许的控制集合。

### 前向可达集

从初始集 $\mathcal{X}_0$ 出发，经过时间 $t$ 后的可达集为：

$$\mathcal{R}^t(\mathcal{X}_0) = \{ \mathbf{x}(t) \mid \mathbf{x}(0) \in \mathcal{X}_0, \mathbf{u}(\tau) \in \mathcal{U}, 0 \leq \tau \leq t \}$$

### 低推力航天器可达集

对于低推力航天器，控制输入 $\mathbf{u}$ 受限：

$$\|\mathbf{u}\| \leq u_{\max}$$

可达集描述了航天器在给定时间内从初始位置可达的所有状态。

## 在地月空间SSA架构韧性分析中的应用

Klonowski（2025）利用可达集理论分析 SSA 架构的韧性：

1. **预计算可达集**：在地月空间的网格点上预计算低推力航天器的可达集
2. **覆盖分析**：将可达集与架构的检测区域对比，识别覆盖盲区
3. **韧性地图**：生成热图可视化架构对任意初始位置航天器的检测能力随时间演变

## 核心要素

### 数学定义

可达集 $\mathcal{R}^t(\mathcal{X}_0)$ 包含从初始集 $\mathcal{X}_0$ 出发、在允许控制输入下、系统在时刻 $t$ 可达的所有状态。

### 关键性质

可达集的边界描述了系统的能力极限。对于低推力航天器，可达集形状受推力大小和方向约束影响。

### 数值方法

可达集的数值计算方法包括：

- 超矩形（Hyperrectangle）逼近
- 流函数（Flow pipe）近似
- Level set 方法

## 相关概念

- [韧性地图（Resilience Map）](/glossary/doctrine/resilience-map/)
- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)
- [低推力转移轨道](/glossary/orbits/low-energy-transfer/)

## 参考文献

- Klonowski M, Holzinger M J. Resilience of Architectures for Cislunar Space Situational Awareness Using Low-Thrust Reachable Sets[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
