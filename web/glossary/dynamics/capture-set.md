---
title: 捕获集（Capture Set）
description: 详细解析捕获集的定义、偏心率对捕获轨道的影响，以及在低能量捕获轨道设计中的应用
keywords: 捕获集, Capture Set, 弹道捕获, 低能量轨道, 弱稳定边界, 行星偏心率, 地月空间, Hyeraci, Topputo
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 捕获集（Capture Set）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 捕获集详解 | 弹道捕获轨道的参数空间分析工具
  description: 详细解析捕获集的定义、偏心率对捕获轨道的影响，以及在低能量捕获轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 捕获集详解 | 弹道捕获轨道的参数空间分析工具
  description: 详细解析捕获集的定义、偏心率对捕获轨道的影响，以及在低能量捕获轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/capture-set/
---

# 捕获集

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

捕获集（Capture Set）是由Hyeraci和Topputo提出的概念，用于描述天体系统中可实现弹道捕获（Ballistic Capture）的初始状态集合。在圆型限制性三体问题框架下，捕获集定义为所有能够使探测器在不施加主动控制的情况下被目标天体自然"捕获"的初始条件的集合。

捕获集的大小和形状受行星公转轨道偏心率的显著影响：偏心率越大，越有利于生成捕获轨道，捕获集也越大。捕获集为低能量捕获轨道设计提供了参数空间分析工具，使得设计者可以在相空间中系统地搜索满足捕获条件的初始状态。

## 核心要素

### 基本定义

在限制性三体问题中，捕获集 $\mathcal{C}$ 定义为：

$$\mathcal{C} = \{ \mathbf{x}_0 : \phi(t, \mathbf{x}_0) \in \mathcal{B}_{\text{capt}}, \quad \forall t \in [t_1, t_2] \}$$

其中 $\mathcal{B}_{\text{capt}}$ 为捕获区域（通常定义为以目标天体为中心的某个区域），$[t_1, t_2]$ 为捕获持续时间。物理含义是：从状态 $\mathbf{x}_0$ 出发的轨迹在时间 $[t_1, t_2]$ 内始终保持在捕获区域内。

### 偏心率的影响

行星公转轨道偏心率对捕获集的影响体现在：

| 偏心率范围 | 捕获集特征 | 物理机制 |
| :--- | :--- | :--- |
| $e \approx 0$（圆轨道） | 捕获集较小或不存在 | 引力场近似对称，捕获困难 |
| $0 < e < 0.1$ | 捕获集较小 | 轻微非对称性提供有限捕获窗口 |
| $e > 0.1$ | 捕获集显著增大 | 强非对称性产生丰富的捕获通道 |
| $e > 0.3$ | 捕获集覆盖较大参数空间 | 偏心率效应主导，捕获轨道丰富 |

偏心率增大的物理机制：

1. **引力不对称性增强**：行星在近星点和远星点处的引力场差异增大
2. **拉格朗日点位置变化**：$L_1$ 和 $L_2$ 点与行星的距离随偏心率变化
3. **稳定区域扩展**：偏心率增大使得行星附近的稳定区域扩展
4. **能量交换窗口增多**：轨道偏心率创造了更多的引力辅助机会

### 与其他概念的关系

捕获集与相关概念的关系：

- **弱稳定边界（WSB）**：WSB定义了两个主天体之间的转移通道，捕获集聚焦于单个目标天体附近的捕获条件
- **稳定集**：捕获集可以视为稳定集的一个子集，专注于满足捕获条件的初始状态
- **逆向稳定集**：捕获集的边界分析常结合逆向稳定集方法

### 参数空间分析方法

捕获集的参数空间分析通常包括以下步骤：

1. **参数选择**：选择关键参数（如近星点高度、速度倾角、轨道倾角等）
2. **网格生成**：在参数空间中建立网格
3. **捕获判据**：对每个网格点计算轨迹，判断是否满足捕获条件
4. **集合绘制**：绘制捕获集在参数空间中的分布
5. **灵敏度分析**：分析捕获集对各参数的敏感性

### 在低能量轨道设计中的应用

捕获集为低能量轨道设计提供了以下应用：

- **参数窗口识别**：通过捕获集分析确定弹道捕获的可行参数范围
- **能量效率评估**：比较不同捕获方案的燃料消耗
- **任务窗口规划**：利用捕获集的时间特性规划发射窗口
- **多目标优化**：在捕获集内搜索满足多重约束的最优捕获轨道

## 相关概念

- [弱稳定边界（Weak Stability Boundary）](/glossary/other/weak-stability-boundary/)
- [弹道捕获轨道（Ballistic Capture）](/glossary/orbits/ballistic-capture/)
- [稳定集（Stability Set）](/glossary/dynamics/stability-set/)
- [逆向稳定集（Backward Stability Set）](/glossary/dynamics/backward-stability-set/)

## 参考文献

- Hyeraci N, Topputo F. The role of true anomaly in ballistic capture[J]. Celestial Mechanics and Dynamical Astronomy, 2010, 108(2): 169-183.
- Topputo F. On optimal two-impulse Earth–Moon transfers in a four-body model[J]. Celestial Mechanics and Dynamical Astronomy, 2013, 117(3): 279-313.
- Belbruno E. Capture Dynamics and Chaotic Motions in Celestial Mechanics[M]. Princeton University Press, 2004.

## 应用价值

捕获集为地月空间和行星际低能量轨道设计提供了系统的参数空间分析方法。通过捕获集分析，设计者能够在相空间中快速识别满足弹道捕获条件的可行参数范围，优化发射窗口规划和轨道方案选择。捕获集对偏心率敏感性的研究还有助于理解不同天体系统中弹道捕获轨道的丰富程度，为月球、火星等目标的低成本捕获任务设计提供理论支撑。
