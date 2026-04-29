---
title: 拟双圆四体模型（Quasi-Bicircular Four-Body Problem）
description: 详细解析拟双圆四体模型的定义、自洽性保证、不变流形分析，以及在地月低能量转移中的应用
keywords: 拟双圆四体模型, Quasi-Bicircular Four-Body Problem, 自洽四体模型, Andreu, 不变流形, 低能量转移, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 拟双圆四体模型（Quasi-Bicircular Four-Body Problem）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 拟双圆四体模型详解 | 自洽四体动力学与低能量转移
  description: 详细解析拟双圆四体模型的定义、自洽性保证、不变流形分析，以及在地月低能量转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 拟双圆四体模型详解 | 自洽四体动力学与低能量转移
  description: 详细解析拟双圆四体模型的定义、自洽性保证、不变流形分析，以及在地月低能量转移中的应用
  image: /logo.png
permalink: /glossary/dynamics/quasi-bicircular-four-body/
---

# 拟双圆四体模型

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

拟双圆四体模型（Quasi-Bicircular Four-Body Problem, QBCP）是由Andreu于1998年提出的自洽四体动力学模型，用于克服传统双圆四体模型的非自洽性问题。QBCP要求日-地-月的运动满足三体问题的精确解（即圆型限制性三体问题中特定的周期解），从而保证整个四体系统的自洽性。

基于QBCP可以讨论平衡点的不变流形与低能量转移，以及地月平衡点附近的周期轨道和拟周期轨道设计。与精确星历模型相比，QBCP的分析结果仍具有较好的近似性，同时保留了解析处理的可能性。

## 核心要素

### 自洽性保证

QBCP的自洽性通过以下方式实现：

1. **三体解约束**：要求三个主天体（太阳、地球、月球）的运动是某个三体问题的精确解
2. **近圆轨道假设**：日-地-月系统的实际轨道接近圆型，满足CR3BP的假设
3. **约束运动方程**：在自洽约束下，测试粒子的运动方程中包含显式的时间周期项

测试粒子在QBCP中的运动方程为：

$$\ddot{\mathbf{r}} + 2\boldsymbol{\omega}(t) \times \dot{\mathbf{r}} = -\nabla U_{QBCP}(\mathbf{r}, t)$$

其中 $\boldsymbol{\omega}(t)$ 和 $U_{QBCP}$ 均为时间的周期函数，周期等于月球公转周期。

### 平衡点与不变流形

QBCP下的平衡点具有以下特征：

- **周期平衡点**：由于显含时间，QBCP中的平衡点不是固定点，而是随时间周期运动的"平衡轨道"
- **不变流形**：平衡点附近存在稳定流形和不稳定流形，这些流形为低能量转移提供了自然通道
- **与CR3BP的对比**：QBCP的不变流形是三维的（包含时间维度），比CR3BP的二维流形更复杂

### 周期轨道与拟周期轨道

在QBCP框架下可以设计多种轨道类型：

| 轨道类型 | 特征 | 应用价值 |
|:---|:---|:---|
| 周期轨道 | 精确的周期解 | 中继通信、科学观测基准轨道 |
| 拟周期轨道 | 限制在不变环面上的准周期运动 | Lissajous轨道设计 |
| 不变流形轨道 | 沿稳定/不稳定流形的转移轨道 | 低能量转移设计 |

### 与双圆四体模型的对比

| 对比项 | 双圆四体模型 | QBCP |
|:---|:---|:---|
| 自洽性 | 非自洽 | 自洽 |
| 数学基础 | 两个独立CR3BP叠加 | 三体问题精确解约束 |
| 能量积分 | 不存在 | 存在（时间周期） |
| 计算复杂度 | 较低 | 中等 |
| 物理保真度 | 有限 | 较高 |

### 低能量转移设计

QBCP在地月低能量转移设计中的应用：

1. **不变流形通道**：利用地月 $L_1$ 和 $L_2$ 点的不稳定流形设计从地球轨道到月球轨道的转移
2. **捕获轨道设计**：利用稳定流形实现探测器对月球的弹道捕获
3. **轨道族延拓**：从QBCP的周期解出发，通过延拓方法探索轨道族

## 相关概念

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [双圆四体模型（Bicircular Four-Body Problem）](/glossary/dynamics/bicircular-four-body/)
- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)

## 参考文献

- Andreu M A. The quasi-bicircular problem[D]. University of Barcelona, 1998.
- Simó C, Gómez G, Llibre J, et al. Dynamics and mission design near libration point orbits — Vol. 3: Advanced methods for collinear points[M]. World Scientific, 2001.
- Gómez G, Mondelo J M. The dynamics around the collinear equilibrium points of the RTBP[J]. Physica D, 2001, 157(4): 283-321.

## 应用价值

拟双圆四体模型为地月低能量转移轨道设计提供了自洽的四体动力学框架。基于QBCP的不变流形分析，设计者能够利用地月L1和L2点的稳定与不稳定流形设计从地球轨道到月球轨道的低能量转移通道，显著节省燃料消耗。QBCP还支持地月平动点附近的周期轨道和拟周期轨道设计，为月球背面通信中继、科学观测等任务提供轨道方案参考。
