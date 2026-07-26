---
title: K维树（KD-Tree）
description: 详细解析KD-Tree数据结构的原理、在地月空间可检测区域邻居查询中的应用及其效率优势
wechatShare:
  title: K维树（KD-Tree）
  desc: 详细解析KD-Tree数据结构的原理、在地月空间可检测区域邻居查询中的应用及其效率优势
  image: /logo.png
keywords: KD-Tree, K维树, 最近邻搜索, 空间分割, 数据结构, 可检测区域, 邻居查询, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: K维树（KD-Tree）
  description: 详细解析KD-Tree数据结构的原理及其在地月空间可检测区域邻居查询中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: K维树（KD-Tree）
  description: 详细解析KD-Tree数据结构的原理及其在地月空间可检测区域邻居查询中的应用
  image: /logo.png
permalink: /glossary/dynamics/kdtrees/
---

# K维树（KD-Tree）

## 定义

K维树（KD-Tree，K-Dimensional Tree）是一种 $k$ 维空间中的空间分割数据结构，用于高效地进行最近邻搜索和范围查询。KD-Tree 通过递归地在不同维度上划分数据点，将 $k$ 维空间组织成二叉树结构，使得最近邻查询的时间复杂度从线性 $O(N)$ 降低到平均 $O(\log N)$。

## 数据结构

### 树节点结构

```python
class KDNode:
    point: k-dimensional point
    split_dim: splitting dimension
    left: left subtree
    right: right subtree
```

### 构建算法

KD-Tree 的构建过程：

1. 选择分割维度：通常选择方差最大的维度
2. 选择分割点：选择该维度上的中位数点
3. 递归划分：将数据点分为左右两部分，递归构建子树

### 平衡条件

为保证查询效率，KD-Tree 应尽量平衡。构建时可使用中位数选择确保平衡。

## 在持久探测走廊中的应用

Klonowski（2025）在持久探测走廊（PDC）的图表示构建中，使用 KD-Tree 高效查询可检测区域的邻居节点：

### 邻居查询步骤

1. 在 KD-Tree 中插入所有可检测区域质心
2. 对于每个质心，使用 KD-Tree 查询 $k$ 个最近邻
3. 根据空间距离阈值判断邻居关系
4. 构建检测图：节点为质心，边为邻居关系

### 效率优势

| 方法 | 最近邻查询复杂度 | $N=10^6$ 耗时 |
| :--- | :--- | :--- |
| 暴力搜索 | $O(N)$ | ~1s |
| KD-Tree | $O(\log N)$ | ~0.001s |

## 核心要素

### 数学定义

KD-Tree 将 $k$ 维空间 $\mathbb{R}^k$ 递归划分为超矩形区域，每个节点对应一个超矩形划分面。

### 关键性质

KD-Tree 的查询效率依赖于数据分布。在高维空间（$k > 20$）中，KD-Tree 的效率会退化，称为"维度灾难"。

### 应用场景

KD-Tree 适用于点云处理、机器学习中的 $k$ 近邻算法、碰撞检测、轨迹规划等领域。

## 相关概念

- [持久探测走廊（PDC）](/glossary/doctrine/persistent-detection-corridor/)
- [A*搜索算法](/glossary/dynamics/a-star-search/)
- [K-Means 聚类](/glossary/dynamics/k-means/)

## 参考文献

- Bentley J L. Multidimensional binary search trees used for associative searching[J]. Communications of the ACM, 1975.
- Klonowski M, Heidrich C, Owens-Fahrner N, et al. Persistent Detection Corridors for Crewed Missions and Cislunar Space Situational Awareness[J]. The Journal of Spacecraft and Rockets, 2025.
