---
title: NSGA II（非支配排序遗传算法 II）
description: 详细解析NSGA II算法的原理、特点及其在地月空间态势感知架构多目标优化中的应用
wechatShare:
  title: NSGA II（非支配排序遗传算法 II）
  desc: 详细解析NSGA II算法的原理、特点及其在地月空间态势感知架构多目标优化中的应用
  image: /logo.png
keywords: NSGA II, 非支配排序遗传算法, 多目标优化, 遗传算法, 进化算法, Pareto最优, 地月空间, 架构设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: NSGA II 算法详解 | 多目标进化算法
  description: 详细解析NSGA II算法的原理、特点及其在地月空间态势感知架构多目标优化中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: NSGA II 算法详解 | 多目标进化算法
  description: 详细解析NSGA II算法的原理、特点及其在地月空间态势感知架构多目标优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/nsga-ii/
---

# NSGA II（非支配排序遗传算法 II）

## 定义

NSGA II（Non-dominated Sorting Genetic Algorithm II）是由 Deb 等人于2002年提出的经典多目标进化算法，通过非支配排序和拥挤度距离机制在进化过程中维护帕累托前沿的多样性。NSGA II 具有计算效率高、收敛性好、帕累托前沿分布均匀等特点，是多目标优化领域应用最广泛的算法之一。

## 算法原理

### 非支配排序

NSGA II 首先对种群进行非支配排序：

1. 识别种群中的非支配解（帕累托前沿第一层）
2. 将这些解移除后，识别新的非支配解（帕累托前沿第二层）
3. 重复直至所有解被分类

### 拥挤度距离

为维护帕累托前沿的多样性，NSGA II 引入拥挤度距离：
$$d_i = \sum_{m=1}^{M} \frac{f_m^{i+1} - f_m^{i-1}}{f_m^{\max} - f_m^{\min}}$$

其中 $M$ 为目标函数个数，$f_m^{i+1}$ 和 $f_m^{i-1}$ 为相邻解在第 $m$ 个目标上的函数值。

### 选择机制

基于非支配排序等级和拥挤度距离，生成新种群：

1. 等级越高（前沿层数越大）的解被优先淘汰
2. 等级相同时，拥挤度距离小的解被优先淘汰

## 在地月空间SSA架构设计中的应用

Klonowski (2025) 在地月空间态势感知架构设计中，采用 MO-MCTS 和 NSGA II 的混合算法优化观测卫星配置：

- MO-MCTS 用于全局搜索帕累托最优架构
- NSGA II 用于局部优化和种群的更新维护
- 聚类分析（如 K-Medoids）用于识别不同类型的架构配置

## 核心要素

### 数学定义

NSGA II 通过非支配排序将 $N$ 个解分为多个前沿层 $\mathcal{F}_1, \mathcal{F}_2, ..., \mathcal{F}_k$，满足 $\bigcup_i \mathcal{F}_i = \mathcal{P}$（完整种群），$\bigcap_i \mathcal{F}_i = \emptyset$（层间无交集）。

### 关键性质

NSGA II 的计算复杂度为 $O(MN^2)$，其中 $M$ 为目标数，$N$ 为种群规模。拥挤度距离机制确保帕累托前沿的均匀分布。

### 应用场景

NSGA II 适用于连续和离散变量的多目标优化问题，广泛应用于工程设计、调度优化、机器学习超参数调优等领域。

## 相关概念

- 帕累托最优（Pareto Optimality）
- 多目标蒙特卡洛树搜索（MO-MCTS）
- K-Medoids 聚类

## 参考文献

- Deb K, Pratap A, Agarwal S, et al. A fast and elitist multiobjective genetic algorithm: NSGA-II[J]. IEEE Transactions on Evolutionary Computation, 2002.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.
