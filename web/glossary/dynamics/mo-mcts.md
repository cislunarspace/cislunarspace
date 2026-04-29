---
title: 多目标蒙特卡洛树搜索（MO-MCTS）
description: 详细解析多目标蒙特卡洛树搜索算法的原理、在地月空间态势感知架构设计中的应用及其优势
keywords: 多目标蒙特卡洛树搜索, MO-MCTS, Monte Carlo Tree Search, 多目标优化, 地月空间, 架构设计, 人工智能, 强化学习
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 多目标蒙特卡洛树搜索（MO-MCTS）
  description: 详细解析多目标蒙特卡洛树搜索算法的原理及在地月空间态势感知架构设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多目标蒙特卡洛树搜索（MO-MCTS）
  description: 详细解析多目标蒙特卡洛树搜索算法的原理及在地月空间态势感知架构设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/mo-mcts/
---

# 多目标蒙特卡洛树搜索（MO-MCTS）

## 定义

多目标蒙特卡洛树搜索（Multi-Objective Monte Carlo Tree Search，MO-MCTS）是将蒙特卡洛树搜索扩展到多目标优化问题的一种算法框架。MO-MCTS 在每次模拟中同时评估多个目标函数，通过 Upper Confidence Bound (UCB) 类公式平衡探索与利用，适用于具有离散决策空间和复杂约束的优化问题。

## 算法原理

MO-MCTS 的核心是修改标准 MCTS 的选择（Selection）、扩展（Expansion）、模拟（Simulation）和回溯（Backpropagation）四个步骤以处理多目标：

### 选择阶段
使用多目标 UCB 公式选择子节点：

$$UCB_i = \bar{X}_i + C \sqrt{\frac{\ln N}{n_i}}$$

其中 $\bar{X}_i$ 为第 $i$ 个目标的平均奖励，$N$ 为父节点访问次数，$n_i$ 为子节点访问次数，$C$ 为探索常数。

### 扩展与模拟
在扩展阶段添加新的决策节点，在模拟阶段同时计算所有目标函数的奖励值。

### 回溯阶段
将多目标奖励值回溯传播，更新路径上所有节点的统计信息。

## 在地月空间SSA架构设计中的应用

Klonowski (2025) 首次将 MO-MCTS 应用于地月空间态势感知架构设计，优化分布式观测卫星的配置。目标函数包括：
1. 最大化对地月转移轨迹的覆盖率
2. 最大化对关键体积空间的覆盖率
3. 最小化架构总成本（观测卫星数量和能力）

该方法能够在离散化的决策空间中高效搜索帕累托最优架构配置，避免了传统梯度优化方法在非凸、多模态问题上的局限性。

## 核心要素

### 数学定义
MO-MCTS 将多目标优化问题建模为多目标马尔可夫决策过程（MO-MDP），通过树搜索在离散决策空间中寻找帕累托最优解。

### 关键性质
MO-MCTS 结合了 MCTS 的自适应采样优势和多目标优化的权衡分析能力，能够处理目标函数评估成本较高的问题。

### 应用场景
MO-MCTS 适用于决策空间离散、目标函数计算成本高、需要帕累托前沿近似的问题，如卫星架构设计、任务规划等。

## 相关概念

- [帕累托最优（Pareto Optimality）](/glossary/dynamics/pareto-optimal/)
- [NSGA II](/glossary/dynamics/nsga-ii/)
- [蒙特卡洛树搜索（MCTS）](/glossary/dynamics/monte-carlo-tree-search/)

## 参考文献

- Klonowski M, Holzinger M J, Owens-Fahrner N. Optimal Cislunar Architecture Design Using Monte Carlo Tree Search Methods[J]. The Journal of the Astronautical Sciences, 2023.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.