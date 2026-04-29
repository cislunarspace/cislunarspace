---
title: 稳定集（Stability Set）
description: 详细解析稳定集的定义、与弱稳定边界的关系，以及在低能量捕获轨道设计中的应用
keywords: 稳定集, Stability Set, 弱稳定边界, 弹道捕获, 低能量轨道, 地月空间, García, Gómez
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 稳定集（Stability Set）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 稳定集详解 | 低能量捕获轨道的稳定区域分析
  description: 详细解析稳定集的定义、与弱稳定边界的关系，以及在低能量捕获轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 稳定集详解 | 低能量捕获轨道的稳定区域分析
  description: 详细解析稳定集的定义、与弱稳定边界的关系，以及在低能量捕获轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/stability-set/
---

# 稳定集

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

稳定集（Stability Set）是由García和Gómez提出的概念，用于描述质量较小主天体附近的运动稳定区域。研究发现，该稳定区域并非以天体为中心的简单闭合区域，而是呈现出复杂的拓扑结构：随着初始半径的增大，稳定区域和不稳定区域交替出现。

稳定集是若干个闭合区域的集合，其内部可能不包含主天体本身。这一发现修正了传统上对"稳定范围"的简单理解，为低能量轨道设计提供了更精细的理论框架。稳定集可以看作弱稳定边界（Weak Stability Boundary, WSB）理论的拓展与精细化描述。

## 核心要素

### 基本定义

在圆型限制性三体问题中，给定初始状态 $\mathbf{x}_0$，通过长时间数值积分可以判断该状态是否属于稳定集。具体而言：

- **正向稳定集**：从初始状态正向积分，在给定时间 $T$ 内不逃逸出指定区域的状态集合
- **逆向稳定集**：从初始状态逆向积分，在给定时间 $T$ 内不逃逸出指定区域的状态集合

数学上，稳定集 $\mathcal{S}$ 定义为：

$$\mathcal{S} = \{ \mathbf{x}_0 : \|\phi(t, \mathbf{x}_0)\| \leq R_{\max}, \quad \forall t \in [0, T] \}$$

其中 $R_{\max}$ 为逃逸判据距离，$T$ 为积分时间。

### 拓扑结构

稳定集的拓扑结构具有以下特征：

- **非单连通**：稳定集不是以主天体为中心的简单闭合区域
- **交替出现**：随半径增大，稳定和不稳定区域交替出现
- **不包含主天体**：某些稳定集的内部区域可能不包含主天体
- **边界复杂**：稳定集的边界具有分形特征

| 半径范围 | 稳定性特征 | 物理意义 |
|:---|:---|:---|
| 近距离（$r < r_1$） | 通常不稳定 | 受主天体强引力影响，轨道敏感 |
| 中等距离（$r_1 < r < r_2$） | 稳定区域 | 轨道保持能力较好 |
| 远距离（$r_2 < r < r_3$） | 不稳定区域 | 受另一主天体扰动较大 |
| 更远距离（$r > r_3$） | 可能出现新稳定区 | 弱引力环境下的特殊稳定机制 |

### 与弱稳定边界的关系

稳定集与弱稳定边界（WSB）的概念密切相关但有所不同：

- **WSB**关注的是探测器在两个主天体之间的转移通道，强调"弱引力"环境下的轨道行为
- **稳定集**更精细地描述了单一主天体附近的稳定区域结构
- 稳定集可视为WSB在单个主天体附近的精细化描述

### 在低能量轨道设计中的应用

稳定集为低能量轨道设计提供了重要的理论指导：

1. **轨道筛选**：利用稳定集的拓扑结构筛选出具有长期稳定性的初始条件
2. **捕获窗口识别**：通过稳定集分析确定弹道捕获的参数窗口
3. **轨道保持策略**：基于稳定集边界制定轨道保持控制策略
4. **转移轨道设计**：利用稳定集之间的连接关系设计低能量转移轨道

## 相关概念

- [弱稳定边界（Weak Stability Boundary）](/glossary/other/weak-stability-boundary/)
- [逆向稳定集（Backward Stability Set）](/glossary/dynamics/backward-stability-set/)
- [捕获集（Capture Set）](/glossary/dynamics/capture-set/)
- [弹道捕获轨道（Ballistic Capture）](/glossary/orbits/ballistic-capture/)

## 参考文献

- García F, Gómez G. A note on weak stability boundaries[J]. Celestial Mechanics and Dynamical Astronomy, 2007, 97(2): 87-100.
- Belbruno E. Capture Dynamics and Chaotic Motions in Celestial Mechanics[M]. Princeton University Press, 2004.
- Topputo F, Vasile M, Bernelli-Zazzera F. Low energy interplanetary transfers exploiting invariant manifolds of the restricted three-body problem[J]. Journal of the Astronautical Sciences, 2005, 53(4): 353-372.

## 应用价值

稳定集为地月空间低能量轨道设计提供了精细的理论框架。通过分析稳定集的拓扑结构，设计者能够筛选出具有长期稳定性的初始条件，识别弹道捕获的参数窗口，并制定基于稳定集边界的轨道保持策略。稳定集与弱稳定边界理论的结合，为月球探测任务的低能量转移轨道设计和轨道稳定性评估提供了重要的理论支撑。
