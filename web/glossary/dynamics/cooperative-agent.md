---
title: 合作代理（Cooperative Agent, CA）
description: 详细解析合作代理的定义、在地月空间态势感知架构设计中的作用及其与SSA架构的交互模型
wechatShare:
  title: 合作代理（Cooperative Agent, CA）
  desc: 详细解析合作代理的定义、在地月空间态势感知架构设计中的作用及其与SSA架构的交互模型
  image: /logo.png
keywords: 合作代理, Cooperative Agent, CA, 地月空间, 态势感知, 架构设计, 轨迹优化, 多目标优化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 合作代理（Cooperative Agent）
  description: 详细解析合作代理的定义及其在地月空间态势感知架构设计中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 合作代理（Cooperative Agent）
  description: 详细解析合作代理的定义及其在地月空间态势感知架构设计中的作用
  image: /logo.png
permalink: /glossary/dynamics/cooperative-agent/
---

# 合作代理（Cooperative Agent, CA）

## 定义

合作代理（Cooperative Agent，CA）是 Klonowski（2025）在地月空间态势感知架构设计中引入的概念，指依赖于 SSA 架构进行任务支持的地月空间航天器。CA 与 SSA 架构协同工作：CA 一方面利用架构的检测能力完成自身任务，另一方面其任务轨迹也作为架构覆盖率优化的输入。

## CA 模型

在地月空间 SSA 架构设计中，CA 被建模为从 GEO 出发前往 L1 或 L2 的转移航天器：

### 转移轨迹生成

CA 通过多目标优化生成转移轨迹，同时优化：

1. **光度检测阈值最大化**：利用架构的光学检测能力
2. **控制代价最小化**：最小化 $\Delta v$ 消耗

### 轨迹方程

CA 的转移轨迹满足圆型限制性三体问题（CR3BP）动力学：

$$\ddot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$$

### 边界条件

| 目的地 | 初始轨道 | 目标轨道 |
| :--- | :--- | :--- |
| L1 | GEO | L1 晕轨道 |
| L2 | GEO | L2 晕轨道 |

## 架构-代理交互

CA 与 SSA 架构的交互体现为成本分配问题：

- 架构设计需考虑对 CA 转移轨迹的覆盖
- CA 可通过调整轨迹来适应现有架构的检测能力
- 帕累托最优前沿描述了架构成本与 CA 成本之间的权衡

## 核心要素

### 数学定义

CA 是一个满足 CR3BP 动力学的转移轨迹 $\tau(t)$，在给定边界条件下最小化多目标泛函：

$$\min J(\tau) = [-\text{photometric\ detection}, \Delta v]$$

### 关键性质

CA 的轨迹生成涉及多目标优化，需要在检测能力利用和燃料消耗之间权衡。CA 与架构的交互形成双层优化问题。

### 应用场景

CA 概念适用于地月空间载人任务、商业月球任务等依赖 SSA 支持的高价值资产任务规划。

## 相关概念

- [帕累托最优（Pareto Optimality）](/glossary/dynamics/pareto-optimal/)
- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)
- [L1/L2 转移轨道](/glossary/orbits/lt-transfer/)

## 参考文献

- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.
