---
title: 状态依赖旅行商问题（SDTSP）
description: 解析状态依赖旅行商问题的定义、与经典TSP的区别、在轨道部署中的应用以及动态规划求解方法
keywords: 状态依赖旅行商问题, SDTSP, State-dependent TSP, 部署序列优化, 动态规划, 旅行商问题
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 状态依赖旅行商问题（SDTSP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态依赖旅行商问题详解 | 轨道部署序列优化
  description: 解析状态依赖旅行商问题(SDTSP)的定义、与经典TSP的区别及其在轨道部署中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态依赖旅行商问题详解 | 轨道部署序列优化
  description: 解析状态依赖旅行商问题及其在轨道部署序列优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/state-dependent-tsp/
---

# 状态依赖旅行商问题（SDTSP）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

状态依赖旅行商问题（State-dependent Traveling Salesman Problem, SDTSP）是经典旅行商问题（TSP）的变体，其核心特征是转移成本不仅取决于起点和终点，还取决于当前的状态或阶段。

在轨道部署任务中，SDTSP的"状态"通常指执行转移的飞行器质量状态——由于每次部署卫星后飞行器质量发生离散阶跃，相同的起点到终点转移在不同质量状态下的成本不同。

## 与经典TSP的区别

| 特征 | 经典TSP | 状态依赖TSP |
|:---|:---|:---|
| 转移成本 | 仅依赖(i,j) | 依赖(i,j,k)，k为当前状态 |
| 解空间 | N! | N! × 状态数 |
| 最优性 | 全局最优解唯一 | 序列最优依赖于状态序列 |
| 应用场景 | 静态路径规划 | 动态、多阶段任务规划 |

## 数学模型

### 决策变量

部署序列 $\Pi = (\pi_1, \pi_2, \dots, \pi_N)$，其中 $\pi_k$ 是第k个部署的小卫星编号。

### 目标函数

最小化任务总成本：

$$\min J = C_f = \sum_{k=1}^{N} \Delta C_k(\Pi, u_k(t); \eta_{abs}, \eta_{rel})$$

其中 $\Delta C_k$ 为第k段转移的成本消耗。

### 贝尔曼方程

根据贝尔曼最优性原理，动态规划递推关系为：

$$J(S, j) = \min_{i \in S \setminus \{j\}} \{J(S \setminus \{j\}, i) + C(i, j, k)\}$$

其中 $C(i, j, k)$ 表示OTV在已部署k颗卫星后，从轨道i转移到轨道j的成本。

## 在轨道部署中的应用

### 问题转化

胡敏等（2026）将OTV批量部署任务建模为SDTSP：

- **节点**：目标轨道（卫星部署点）
- **边权**：状态依赖的轨道转移成本 $C(i, j, k)$
- **约束**：必须访问所有节点且每个节点仅访问一次
- **目标**：最小化总转移成本（工质消耗或时间）

### 状态依赖成本矩阵

成本矩阵 $C(i, j, k)$ 是三维的：
- i：起始轨道
- j：目标轨道
- k：已部署卫星数量（决定OTV质量状态）

该矩阵通过Q-law控制律离线仿真生成。

## 求解方法

### 动态规划

对于中等规模任务（N≤12），动态规划可保证全局最优解：

1. 定义状态 $(S, j)$：已访问集合S，当前停留在节点j
2. 使用贝尔曼方程自底向上递推
3. 通过状态压缩技术（位运算）提高计算效率

### 复杂度分析

- 时间复杂度：$O(N^2 \cdot 2^N)$
- 空间复杂度：$O(N \cdot 2^N)$
- 适用规模：N < 15的中等规模任务

### 与启发式算法对比

研究结果表明（胡敏等, 2026）：

| 算法 | 最优性保证 | 适用规模 |
|:---|:---|:---|
| 动态规划(DP) | 精确最优 | N ≤ 12 |
| 遗传算法(GA) | 启发式，概率收敛 | 任意规模 |
| 贪婪算法 | 局部最优 | N ≤ 8 |

## 核心要素

### 数学定义
SDTSP是经典TSP的状态依赖扩展，转移成本 $C_{ij}^k$ 依赖于当前状态k，使得问题更接近实际工程约束。

### 关键性质
状态依赖性使得问题更真实地反映物理现实，特别是在质量变化显著的航天任务中。

### 工程价值
精确的SDTSP建模是获得高质量部署方案的关键，状态无关模型会系统性低估后期成本。

## 相关概念

- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [动态规划（Dynamic Programming）](/glossary/dynamics/dynamic-programming/)
- [Q-law控制律](/glossary/dynamics/q-law/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)
- [贝尔曼最优性原理（Bellman's Principle of Optimality）](/glossary/dynamics/dynamic-programming/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Bellman R. Dynamic Programming[M]. Princeton: Princeton University Press, 2010.
- Narayanaswamy S, Wu B, Ludivig P, et al. Low-thrust rendezvous trajectory generation for multi-target active space debris removal using the RQ-law[J]. Advances in Space Research, 2023, 71(10): 4276-4287.