---
title: K-Medoids聚类（K-Medoids Clustering）
description: 详细解析K-Medoids聚类算法的原理、与K-Means的区别及其在地月空间SSA架构聚类分析中的应用
keywords: K-Medoids, 聚类, Clustering, PAM, 架构设计, 地月空间, 态势感知, 分类
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: K-Medoids聚类详解
  description: 详细解析K-Medoids聚类算法的原理及在地月空间SSA架构聚类分析中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: K-Medoids聚类详解
  description: 详细解析K-Medoids聚类算法的原理及在地月空间SSA架构聚类分析中的应用
  image: /logo.png
permalink: /glossary/dynamics/k-medoids/
---

# K-Medoids聚类（K-Medoids Clustering）

## 定义

K-Medoids（也称 PAM，Partitioning Around Medoids）是一种基于实际数据点作为簇代表的聚类算法。与 K-Means 使用簇内均值作为质心不同，K-Medoids 始终选择簇内的一个实际数据点作为中心点（Medoid），因此对噪声和异常值更加鲁棒。

## 算法原理

### 目标函数

K-Medoids 最小化簇内数据点到簇中心的曼哈顿距离或其他距离度量：

$$\min \sum_{i=1}^{K} \sum_{\mathbf{x} \in \mathcal{C}_i} D(\mathbf{x}, \mathbf{m}_i)$$

其中 $\mathbf{m}_i$ 为第 $i$ 个簇的实际中心点，$D(\cdot, \cdot)$ 为距离函数。

### PAM 算法步骤

1. 随机选择 $K$ 个数据点作为初始 Medoids
2. 重复直至收敛：
   - **分配步骤**：将每个数据点分配到最近的 Medoid
   - **交换步骤**：尝试用非 Medoid 点替换当前 Medoid，若替换降低总代价则接受

### 与 K-Means 对比

| 特性 | K-Means | K-Medoids |
|:---|:---|:---|
| 中心点类型 | 簇内均值（可为非数据点） | 簇内实际数据点 |
| 对噪声鲁棒性 | 低 | 高 |
| 距离函数 | 欧氏距离 | 任意距离度量 |
| 计算复杂度 | $O(I \cdot N \cdot K \cdot d)$ | $O(I \cdot N^2 \cdot K \cdot d)$ |

## 在地月空间SSA架构分析中的应用

Klonowski（2025）使用 K-Medoids 聚类方法对地月空间 SSA 帕累托最优架构进行分类：
- K-Medoids 的中心点是实际架构配置，便于解释和决策
- 对帕累托前沿上的离群点不敏感
- 能够识别具有不同轨道族配置的架构类别

## 核心要素

### 数学定义
K-Medoids 将数据集 $\mathcal{X} = \{\mathbf{x}_1, ..., \mathbf{x}_N\}$ 划分为 $K$ 个簇，每个簇由一个实际数据点 $\mathbf{m}_i$ 代表，最小化总距离代价。

### 关键性质
K-Medoids 对噪声和异常值鲁棒，因为中心点是实际数据点而非均值。计算复杂度高于 K-Means，但结果更稳定。

### 应用场景
K-Medoids 适用于需要鲁棒聚类的场景，如异常检测、图像分割、文档聚类以及本文档重点关注的 SSA 架构分类。

## 相关概念

- [K-Means 聚类](/glossary/dynamics/k-means/)
- [NSGA II](/glossary/dynamics/nsga-ii/)
- [帕累托最优](/glossary/dynamics/pareto-optimal/)

## 参考文献

- Kaufman L, Rousseeuw P J. Finding groups in data: an introduction to cluster analysis[M]. John Wiley & Sons, 1990.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.