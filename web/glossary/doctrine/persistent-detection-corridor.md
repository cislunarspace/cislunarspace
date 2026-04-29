---
title: 持久探测走廊（Persistent Detection Corridor, PDC）
description: 详细解析持久探测走廊的定义、生成方法及其在地月空间态势感知中保障载人任务安全的应用
keywords: 持久探测走廊, Persistent Detection Corridor, PDC, 地月空间, 态势感知, 载人任务, 检测走廊, 轨迹规划
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 持久探测走廊（Persistent Detection Corridor）
  description: 详细解析持久探测走廊的定义、生成方法及其在地月空间态势感知中保障载人任务安全的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 持久探测走廊（Persistent Detection Corridor）
  description: 详细解析持久探测走廊的定义、生成方法及其在地月空间态势感知中保障载人任务安全的应用
  image: /logo.png
permalink: /glossary/doctrine/persistent-detection-corridor/
---

# 持久探测走廊（Persistent Detection Corridor, PDC）

## 定义

持久探测走廊（Persistent Detection Corridor，PDC）是 Klonowski 等人（2025）提出的概念，指在给定 SSA 架构下，航天器能够在不超出架构检测能力的情况下持续飞行的空间体积。PDC 保证了高价值资产（如载人飞船）在发生小扰动时仍能保持在架构的可检测区域内，为地月空间载人任务提供可预测的安全走廊。

## 生成方法

PDC 的生成包含以下步骤：

### 1. 图表示

将架构随时间演变的可检测区域编码为图结构：
- 节点：可检测区域的质心（Centroids）
- 边：相邻可检测区域之间的连通性
- 边权：穿越相邻区域的控制代价

### 2. 路径搜索

使用 A* 算法在检测图中搜索持续可检测路径：

$$\min \sum_{e \in \mathcal{P}} c_e$$

其中 $c_e$ 为边 $e$ 的遍历代价，$\mathcal{P}$ 为路径上的边集。

### 3. 轨迹优化

对搜索到的路径使用配点法（如 Hermite-Simpson）进行轨迹精化：
- 生成满足动力学约束的可行轨迹
- 最小化控制代价 $\Delta v$

## 核心要素

### 数学定义
PDC 是满足以下条件的空间体积 $\mathcal{C}$：对于任意参考轨迹 $\mathbf{x}(t) \in \mathcal{C}$，存在检测阈值 $\lambda$ 使得 $\|\mathbf{x}(t) - \mathcal{D}(t)\| \leq \lambda$，其中 $\mathcal{D}(t)$ 为 $t$ 时刻架构的可检测区域。

### 关键性质
- PDC 保证航天器在走廊内任意位置均可被架构检测
- 走廊宽度与允许的扰动幅度相关
- PDC 可用于轨迹优化和任务规划

### 应用场景
PDC 适用于地月空间载人任务规划，确保航天员在紧急情况下仍处于地面站或备用观测系统的检测范围内。

## 相关概念

- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)
- [A* 搜索算法](/glossary/dynamics/a-star-search/)
- [配点法（Direct Collocation）](/glossary/dynamics/direct-collocation/)

## 参考文献

- Klonowski M, Heidrich C, Owens-Fahrner N, et al. Persistent Detection Corridors for Crewed Missions and Cislunar Space Situational Awareness[J]. The Journal of Spacecraft and Rockets, 2025.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.