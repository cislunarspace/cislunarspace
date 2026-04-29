---
title: 逆向稳定集（Backward Stability Set）
description: 详细解析逆向稳定集的定义、与正向稳定集的结合，以及在低能量捕获轨道设计中的应用
keywords: 逆向稳定集, Backward Stability Set, 稳定集, 弱稳定边界, 低能量捕获, 弹道捕获, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 逆向稳定集（Backward Stability Set）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逆向稳定集详解 | 时间逆向积分下的稳定区域分析
  description: 详细解析逆向稳定集的定义、与正向稳定集的结合，以及在低能量捕获轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逆向稳定集详解 | 时间逆向积分下的稳定区域分析
  description: 详细解析逆向稳定集的定义、与正向稳定集的结合，以及在低能量捕获轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/backward-stability-set/
---

# 逆向稳定集

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

逆向稳定集（Backward Stability Set）是描述探测器沿时间逆向积分对应运动稳定性的概念。在圆型限制性三体问题中，给定终态 $\mathbf{x}_f$，通过逆向数值积分（$t \to -\infty$）可以判断该状态在时间逆向演化下是否保持在指定区域内。

逆向稳定集与正向稳定集（Forward Stability Set）相结合，构成了描述完整轨道稳定性的双向框架：正向稳定集描述从初始状态出发的长期行为，逆向稳定集描述到达终态之前的长期来源。两者的交集为低能量捕获轨道设计提供了理论基础。

## 核心要素

### 数学定义

逆向稳定集 $\mathcal{S}^-$ 定义为：

$$\mathcal{S}^- = \{ \mathbf{x}_f : \|\phi(t, \mathbf{x}_f)\| \leq R_{\max}, \quad \forall t \in [-T, 0] \}$$

其中 $R_{\max}$ 为逃逸判据距离，$T$ 为逆向积分时间。物理含义是：从状态 $\mathbf{x}_f$ 开始逆向积分时间 $T$，轨迹始终保持在以主天体为中心、半径为 $R_{\max}$ 的区域内。

### 正向与逆向稳定集的关系

| 对比项 | 正向稳定集 $\mathcal{S}^+$ | 逆向稳定集 $\mathcal{S}^-$ |
|:---|:---|:---|
| 积分方向 | $t > 0$（正向） | $t < 0$（逆向） |
| 物理意义 | 从当前状态的未来行为 | 到达当前状态的过去来源 |
| 应用场景 | 轨道保持、逃逸分析 | 捕获轨道设计 |
| 拓扑特征 | 多连通区域 | 多连通区域 |

### 正向-逆向双向分析框架

正向与逆向稳定集的结合为轨道设计提供了双向分析框架：

1. **捕获条件识别**：探测器要实现弹道捕获，其终态必须同时属于正向稳定集（未来不逃逸）和逆向稳定集（过去来源于无穷远）
2. **转移通道设计**：$\mathcal{S}^+ \cap \mathcal{S}^-$ 的非空区域提供了弹道捕获的参数空间
3. **能量效率优化**：在双向稳定集的交集中搜索最优捕获轨道

### 在火星高轨道捕获中的应用

Li等将逆向稳定集思想应用于火星高轨道的捕获，主要贡献包括：

- **WSB轨道应用**：利用弱稳定边界理论中的弹道捕获概念
- **火星捕获轨道设计**：设计从地球出发、经WSB通道到达火星高轨道的转移轨道
- **参数空间分析**：通过逆向稳定集分析确定捕获轨道的可行参数范围
- **能量节省**：相比传统Hohmann转移，弹道捕获可显著减少燃料消耗

### 计算方法

逆向稳定集的数值计算通常采用以下步骤：

1. **网格划分**：在相空间中建立初始状态网格
2. **逆向积分**：对每个网格点进行长时间逆向数值积分
3. **逃逸判据**：监测轨迹是否超出指定区域
4. **集合标记**：将未逃逸的状态标记为逆向稳定集成员
5. **可视化**：绘制逆向稳定集在相空间中的分布

## 相关概念

- [稳定集（Stability Set）](/glossary/dynamics/stability-set/)
- [弱稳定边界（Weak Stability Boundary）](/glossary/other/weak-stability-boundary/)
- [捕获集（Capture Set）](/glossary/dynamics/capture-set/)
- [弹道捕获轨道（Ballistic Capture）](/glossary/orbits/ballistic-capture/)

## 参考文献

- García F, Gómez G. A note on weak stability boundaries[J]. Celestial Mechanics and Dynamical Astronomy, 2007, 97(2): 87-100.
- Li M, Zheng J, et al. Low-energy capture options for high Mars orbits[J]. Celestial Mechanics and Dynamical Astronomy, 2018.
- Belbruno E. Capture Dynamics and Chaotic Motions in Celestial Mechanics[M]. Princeton University Press, 2004.

## 应用价值

逆向稳定集为地月空间低能量捕获轨道设计提供了关键的理论工具。通过正向与逆向稳定集的双向分析框架，设计者能够系统地识别弹道捕获的可行参数空间，为月球探测任务规划燃料效率最优的转移轨道。逆向稳定集方法还可应用于火星等行星的高轨道捕获任务设计，显著降低深空探测的燃料需求，支撑地月空间及更远距离的低成本探索活动。
