---
title: K-Means聚类（K-Means Clustering）
description: 详细解析K-Means聚类算法的原理、在地月空间SSA架构分类中的应用及其与K-Medoids的对比
wechatShare:
  title: K-Means聚类（K-Means Clustering）
  desc: 详细解析K-Means聚类算法的原理、在地月空间SSA架构分类中的应用及其与K-Medoids的对比
  image: /logo.png
keywords: K-Means, 聚类, Clustering, K-Medoids, 架构设计, 地月空间, 态势感知, 分类
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: K-Means聚类详解
  description: 详细解析K-Means聚类算法的原理及在地月空间SSA架构分类中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: K-Means聚类详解
  description: 详细解析K-Means聚类算法的原理及在地月空间SSA架构分类中的应用
  image: /logo.png
permalink: /glossary/dynamics/k-means/
---

# K-Means聚类（K-Means Clustering）

## 定义

K-Means 是一种经典的基于质心的聚类算法，通过将数据划分为 $K$ 个簇，最小化簇内数据点到簇质心的平方欧氏距离之和。K-Means 算法简单高效，广泛应用于数据挖掘、模式识别、图像分割等领域。

## 算法原理

### 目标函数

K-Means 的目标是最小化簇内误差平方和（SSE）：

$$\min \sum_{i=1}^{K} \sum_{\mathbf{x} \in \mathcal{C}_i} \|\mathbf{x} - \boldsymbol{\mu}_i\|^2$$

其中 $\boldsymbol{\mu}_i$ 为第 $i$ 个簇的质心，$\mathcal{C}_i$ 为第 $i$ 个簇的数据点集合。

### 算法步骤

1. 随机初始化 $K$ 个质心
2. 重复直至收敛：
   - **分配步骤**：将每个数据点分配到最近的质心
   - **更新步骤**：重新计算各簇质心为簇内数据点的均值

### 收敛性

K-Means 算法在有限迭代后必定收敛，但可能陷入局部最优。常用 $K$-Means++ 初始化方法改善初始质心选择。

## 在地月空间SSA架构分析中的应用

Klonowski（2025）在分析地月空间 SSA 架构设计问题时，使用 K-Means 和 K-Medoids 聚类方法对帕累托最优架构进行分类：

### 特征提取

从架构配置中提取特征向量：
- 观测卫星数量
- 轨道族分布
- 覆盖性能指标
- 成本指标

### 聚类分析

1. 对帕累托最优解集进行 K-Means 聚类
2. 识别不同类型的架构配置
3. 分析各簇的特点和适用场景

## 核心要素

### 数学定义
K-Means 将数据集 $\mathcal{X} = \{\mathbf{x}_1, ..., \mathbf{x}_N\}$ 划分为 $K$ 个不相交的簇 $\mathcal{C} = \{\mathcal{C}_1, ..., \mathcal{C}_K\}$，最小化 SSE 目标函数。

### 关键性质
K-Means 的时间复杂度为 $O(I \cdot N \cdot K \cdot d)$，其中 $I$ 为迭代次数，$N$ 为数据点数，$K$ 为簇数，$d$ 为维度。算法假设簇为球形、球形大小相近。

### 与 K-Medoids 对比

| 特性 | K-Means | K-Medoids |
|:---|:---|:---|
| 质心类型 | 簇内均值（可为非数据点） | 簇内实际数据点 |
| 对噪声鲁棒性 | 低 | 高 |
| 计算复杂度 | 低 | 较高 |

## 相关概念

- [K-Medoids 聚类](/glossary/dynamics/k-medoids/)
- [NSGA II](/glossary/dynamics/nsga-ii/)
- [帕累托最优](/glossary/dynamics/pareto-optimal/)

## 参考文献

- MacQueen J. Some methods for classification and analysis of multivariate observations[C]. Berkeley Symposium on Mathematical Statistics and Probability, 1967.
- Klonowski M, Owens-Fahrner N, Heidrich C, et al. Cislunar space domain awareness architecture design and analysis for cooperative agents[J]. The Journal of the Astronautical Sciences, 2024.