---
title: 帕累托最优（Pareto Optimality）
description: 详细解析帕累托最优的定义、多目标优化中的帕累托前沿、帕累托支配关系及其在地月空间架构设计中的应用
keywords: 帕累托最优, Pareto Optimal, 多目标优化, Pareto Front, Pareto Dominance, 帕累托前沿, 地月空间, 架构设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: 帕累托最优详解 | 多目标优化核心概念
  description: 详细解析帕累托最优的定义、帕累托前沿及在地月空间架构设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 帕累托最优详解 | 多目标优化核心概念
  description: 详细解析帕累托最优的定义、帕累托前沿及在地月空间架构设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/pareto-optimal/
---

# 帕累托最优（Pareto Optimality）

## 定义

帕累托最优（Pareto Optimal）是指在多目标优化问题中，当不存在任何一个可行解能够在不使至少一个目标变差的情况下使所有目标都变优时的解集。帕累托最优解又称为非劣解（Pareto-optimal solution），代表了在多个相互冲突的目标之间的最优权衡。

## 帕累托前沿

帕累托前沿（Pareto Front）是所有帕累托最优解在目标空间中所形成的边界。对于 $n$ 个目标函数 $f_1, f_2, ..., f_n$，帕累托前沿定义为：

$$\mathcal{PF} = \{ \mathbf{f}(\mathbf{x}) \in \mathbb{R}^n \mid \mathbf{x} \in \mathcal{X}_{PF} \}$$

其中 $\mathcal{X}_{PF}$ 为帕累托最优解集，$\mathbf{f}(\mathbf{x})$ 为目标函数向量。

### 帕累托支配关系

在多目标优化中，解之间的支配关系定义为：

- **解 A 支配解 B**：当且仅当 A 在所有目标上都不差于 B，且至少在一个目标上严格优于 B
- **非支配解**：不存在任何其他解能支配该解

## 在地月空间SSA架构设计中的应用

Klonowski (2025) 在地月空间态势感知架构设计中采用多目标优化方法，同时最大化架构对转移轨迹的覆盖率和对地月空间体积的覆盖率，最小化观测卫星数量和成本。帕累托最优解集为决策者提供了不同目标之间的权衡曲线，便于根据实际需求选择合适的架构配置。

## 核心要素

### 数学定义
帕累托最优指不存在可行解 $\mathbf{x}$ 使得 $f_i(\mathbf{x}) \leq f_i(\mathbf{x}^*)$ 对所有 $i$ 成立，且至少一个不等式严格成立。帕累托前沿是目标空间中非支配解形成的边界。

### 关键性质
帕累托前沿代表多目标优化问题的最优权衡集。帕累托最优解之间的权衡可通过沿帕累托前沿移动来量化。

### 数值方法
帕累托前沿的计算通常采用进化算法（如 NSGA-II、MO-MCTS）或标量化方法（如加权求和法、UTOPIS 法）。

## 相关概念

- [多目标蒙特卡洛树搜索（MO-MCTS）](/glossary/dynamics/mo-mcts/)
- [NSGA II](/glossary/dynamics/nsga-ii/)
- [地月空间态势感知架构设计](/glossary/doctrine/cislunar-space-situational-awareness/)

## 参考文献

- Deb K. Multi-objective optimization using evolutionary algorithms[M]. John Wiley & Sons, 2001.
- Klonowski M. Cislunar Space Situational Awareness Architecture Design and Analysis[D]. University of Colorado Boulder, 2025.