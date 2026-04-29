---
title: 动态规划（Dynamic Programming）
description: 解析动态规划的基本原理、贝尔曼最优性原理、以及在轨道部署序列优化中的应用
keywords: 动态规划, Dynamic Programming, 贝尔曼最优性原理, Bellman, 序列优化, 部署序列, SDTSP
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 动态规划（Dynamic Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动态规划详解 | 序列决策优化
  description: 解析动态规划的基本原理及其在轨道部署序列优化中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动态规划详解 | 序列决策优化
  description: 解析动态规划的原理和在轨道部署序列优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/dynamic-programming/
---

# 动态规划（Dynamic Programming）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>Bellman R. Dynamic Programming[M]. Princeton University Press, 2010.
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

动态规划（Dynamic Programming, DP）是解决多阶段决策过程最优化的数学方法，通过将复杂问题分解为相互关联的子问题，自底向上求解并逐步构建最优解。

动态规划的核心特征是：
- **最优子结构**：全局最优解包含局部最优子问题的最优解
- **无后效性**：当前状态的选择只影响后续决策，不影响已做出的选择
- **重叠子问题**：子问题被多次重复计算，可存储复用

## 贝尔曼最优性原理

### 原理表述

贝尔曼最优性原理（Bellman's Principle of Optimality）是动态规划的理论基础：

> "一个最优策略具有这样的性质：无论初始状态和初始决策是什么，其余的决策相对于初始决策产生的状态必须构成最优策略。"

### 数学表达

对于状态依赖旅行商问题（SDTSP），贝尔曼方程为：

$$J(S, j) = \min_{i \in S \setminus \{j\}} \{J(S \setminus \{j\}, i) + C(i, j, k)\}$$

其中：
- $J(S, j)$：规划节点$(S, j)$对应的最小累积成本
- $S$：已访问轨道的集合
- $j$：当前所在轨道
- $C(i, j, k)$：从轨道i转移到轨道j的成本（依赖于状态k）

### 物理意义

到达当前状态$(S, j)$的最优路径，必然包含一条抵达某个前驱状态$(S \setminus \{j\}, i)$的最优路径，然后再从轨道i转移到轨道j。

## 在轨道部署中的应用

### 问题建模

胡敏等（2026）将OTV批量部署任务建模为SDTSP并用动态规划求解：

1. **规划节点**：二元组$(S, j)$唯一确定
   - $S \subseteq V$：已访问轨道的子集
   - $j \in S$：当前OTV所在的轨道

2. **状态转移**：每部署一颗卫星，状态更新
   $$k = |S| - 1$$
   其中k为已部署卫星数量

3. **价值函数**：$J(S, j)$表示从起始轨道出发，访问集合S中所有轨道并停留在轨道j的最小累积成本

### 起始子问题

递推的基础是仅访问起始轨道的规模最小子问题：

$$J(\{i_{start}\}, i_{start}) = 0$$

### 最终返回

完成所有部署后，还需计算返回起始轨道的成本：

$$J_{final} = \min_{u \in V} (J(V, u) + C(u, i_{start}, N))$$

## 算法实现

### 状态压缩技术

为提高计算效率，胡敏等（2026）采用状态压缩技术：

- 将轨道子集S映射为二进制整数位掩码
- 集合包含判断转化为高效的位运算
- 算法复杂度从指数级降到多项式级

### 算法流程

```
输入: 目标总数N、状态依赖成本矩阵C、起始轨道i_start
1. 初始化J为无穷大，J[i_start, i_start] = 0
2. 遍历所有可能的轨道子集m和当前节点u
3. 更新累积成本 J[S_new, v]
4. 回溯提取最优部署序列Π
输出: 最优成本J和部署序列Π
```

### 复杂度分析

| 指标 | 复杂度 | 说明 |
|:---|:---|:---|
| 时间 | $O(N^2 \cdot 2^N)$ | 遍历所有状态组合 |
| 空间 | $O(N \cdot 2^N)$ | 存储最优代价数组 |

## 性能对比

研究结果表明（胡敏等, 2026），在中高轨批量部署任务中：

| 算法 | N=8工质(kg) | N=12工质(kg) | 最优性 |
|:---|:---|:---|:---|
| DP（本文方法） | 487.7 | 632.1 | 精确最优 |
| GA | 507.8 | 632.1 | 启发式 |
| Greedy | 502.2 | 669.1* | 局部最优 |

*表示超出初始工质总量

动态规划在N≤12的中等规模任务中表现最优，具有以下优势：
- **全局最优保证**：确保找到最优部署序列
- **计算效率高**：CPU时间仅需毫秒级
- **鲁棒性好**：不受初始解影响

## 与其他算法对比

| 特性 | 动态规划 | 遗传算法 | 贪婪算法 |
|:---|:---|:---|:---|
| 最优性 | 精确最优 | 概率收敛 | 局部最优 |
| 时间复杂度 | $O(N^2 \cdot 2^N)$ | 可调 | $O(N^2)$ |
| 空间复杂度 | $O(N \cdot 2^N)$ | 中等 | $O(N)$ |
| 适用规模 | N < 15 | 任意规模 | N < 10 |

## 相关概念

- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [贝尔曼最优性原理（Bellman's Principle of Optimality）](/glossary/dynamics/dynamic-programming/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)
- [Q-law控制律](/glossary/dynamics/q-law/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Bellman R. Dynamic Programming[M]. Princeton: Princeton University Press, 2010.
- Narayanaswamy S, Wu B, Ludivig P, et al. Low-thrust rendezvous trajectory generation for multi-target active space debris removal using the RQ-law[J]. Advances in Space Research, 2023, 71(10): 4276-4287.