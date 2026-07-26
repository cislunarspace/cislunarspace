---
title: A*搜索算法（A* Search）
description: 详细解析A*搜索算法的原理、在持久探测走廊路径搜索中的应用及其在地月空间轨迹规划中的优势
wechatShare:
  title: A*搜索算法（A* Search）
  desc: 详细解析A*搜索算法的原理、在持久探测走廊路径搜索中的应用及其在地月空间轨迹规划中的优势
  image: /logo.png
keywords: A*搜索, A* Search, 路径规划, 图搜索, 启发式搜索, 持久探测走廊, 地月空间, 轨迹优化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: A*搜索算法详解
  description: 详细解析A*搜索算法的原理及其在地月空间持久探测走廊路径搜索中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: A*搜索算法详解
  description: 详细解析A*搜索算法的原理及其在地月空间持久探测走廊路径搜索中的应用
  image: /logo.png
permalink: /glossary/dynamics/a-star-search/
---

# A*搜索算法（A* Search）

## 定义

A*搜索算法（A* Search）是由 Hart、Nilsson 和 Raphael 于1968年提出的最优路径搜索算法，结合了 Dijkstra 算法的最短路径保证和贪婪最佳优先搜索的启发式效率。A*算法在有权图搜索中能够保证找到从起点到目标点的最小代价路径。

## 算法原理

### 评价函数

A*算法使用以下评价函数选择下一个扩展节点：

$$f(n) = g(n) + h(n)$$

其中：

- $g(n)$：从起点到当前节点 $n$ 的实际代价
- $h(n)$：从节点 $n$ 到目标的启发式估计代价

### 启发式函数

A*算法的性能取决于启发式函数 $h(n)$ 的设计：

| 条件 | 性质 | 结果 |
| :--- | :--- | :--- |
| $h(n) = 0$ | 退化为 Dijkstra | 保证最优 |
| $h(n) \leq h^*(n)$ | 可采纳（Admissible） | 保证最优 |
| $h(n) > h^*(n)$ | 过度估计 | 可能非最优 |

### 算法步骤

1. 将起点加入开放列表
2. 重复：
   - 从开放列表中选择 $f(n)$ 最小的节点 $n$
   - 若 $n$ 为目标，路径找到
   - 将 $n$ 移至关闭列表
   - 对 $n$ 的每个邻居 $m$：
     - 若 $m$ 在关闭列表中或不可达，跳过
     - 若新路径更优，更新 $m$ 的父节点和代价

## 在持久探测走廊中的应用

Klonowski（2025）在持久探测走廊（PDC）的生成中，使用 A*算法在检测图中搜索持续可检测路径：

- 节点：可检测区域的质心
- 边：相邻可检测区域之间的连通性
- 边权：穿越相邻区域的控制代价

A*算法确保找到控制代价最小的持续可检测路径，为后续轨迹优化提供初始猜测。

## 核心要素

### 数学定义

A*算法在图 $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ 上搜索最小代价路径，最优性条件为启发式函数 $h(n)$ 可采纳。

### 关键性质

A*算法的时间复杂度为 $O(|E| \log|V|)$，空间复杂度为 $O(|V|)$。启发式函数的设计直接影响算法效率。

### 应用场景

A*算法适用于路径规划、游戏 AI、机器人导航、地月空间轨迹搜索等场景。

## 相关概念

- [持久探测走廊（PDC）](/glossary/doctrine/persistent-detection-corridor/)
- [KDTrees](/glossary/dynamics/kdtrees/)
- [图搜索（Graph Search）](/glossary/dynamics/detection-graph/)

## 参考文献

- Hart P E, Nilsson N J, Raphael B. A formal basis for the heuristic determination of minimum cost paths[J]. IEEE Transactions on Systems Science and Cybernetics, 1968.
- Klonowski M, Heidrich C, Owens-Fahrner N, et al. Persistent Detection Corridors for Crewed Missions and Cislunar Space Situational Awareness[J]. The Journal of Spacecraft and Rockets, 2025.
