---
title: 转移轨道（Transfer Orbit）
description: 详细解析转移轨道的定义、设计原理、能量权衡及其在地月空间转移任务中的应用
keywords: 转移轨道, Transfer Orbit, 地月转移, 霍曼转移, 轨道设计, 脉冲机动, 燃料优化, 轨道力学
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 转移轨道（Transfer Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 转移轨道（Transfer Orbit）详解 | 轨道力学核心概念
  description: 详细解析转移轨道的定义、设计原理、能量权衡及其在地月空间转移任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 转移轨道（Transfer Orbit）详解 | 轨道力学核心概念
  description: 详细解析转移轨道的定义、设计原理、能量权衡及其在地月空间转移任务中的应用
  image: /logo.png
permalink: /glossary/orbits/transfer-orbit/
---

# 转移轨道（Transfer Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

转移轨道（Transfer Orbit）是航天器从初始轨道转移至目标轨道所需的**过渡轨道**。在地月空间任务中，转移轨道设计是轨道力学的核心问题之一，需要在转移时间和燃料消耗之间进行综合权衡。转移轨道的形状取决于出发轨道和目标轨道的几何关系、可用推力大小以及任务时间约束。

## 核心要素

### 转移轨道的基本类型

根据推力模式的不同，转移轨道可分为以下几类：

- **脉冲转移（Impulsive Transfer）**：假设推力在瞬间完成，通过有限次速度增量 $\Delta V$ 实现轨道变换。经典的霍曼转移（Hohmann Transfer）即为两脉冲转移的代表，适用于近圆轨道之间的转移。
- **低推力转移（Low-Thrust Transfer）**：推力持续作用但幅值较小，转移轨道呈现为缓慢演化的螺旋线。电推进系统常采用此模式，虽转移时间较长但燃料效率更高。
- **借力转移（Gravity-Assisted Transfer）**：利用天体引力实现轨道能量和方向的改变，无需额外燃料消耗。月球借力是地月转移中的关键技术。

### 能量-时间权衡

转移轨道设计的核心挑战在于能量与时间的帕累托最优。转移时间 $t_f$ 与总速度增量 $\Delta V_{\text{total}}$ 之间存在反比关系：

$$\Delta V_{\text{total}} = \sum_{i=1}^{n} |\Delta \mathbf{v}_i|$$

其中 $n$ 为脉冲次数。一般而言，转移时间越短，所需的 $\Delta V$ 越大；反之，较慢的转移可节省燃料但延长任务周期。

### 地月转移的特殊性

地月转移与行星际转移的主要区别在于：

- **三体引力场**：地月系统中地球和月球的引力同时作用，转移轨道需在限制性三体问题框架下设计
- **月球借力窗口**：通过精确控制近月点高度，可利用月球引力实现轨道能量的大幅改变
- **多目标轨道**：目标轨道包括 DRO、NRHO、Halo 轨道等，不同目标轨道对转移轨道的设计约束各异

## 应用价值

转移轨道设计在地月空间任务中具有关键应用：

- **载人登月任务**：从地球停泊轨道出发，经地月转移轨道到达月球轨道或月面
- **货运补给任务**：向 DRO 或 NRHO 等任务轨道运送物资，需优化燃料消耗以增加载荷质量
- **星座部署**：通过一箭多星结合精巧的转移轨道设计，将多颗卫星分别送入不同目标轨道
- **应急返回**：自由返回转移轨道为载人任务提供无需额外推进即可安全返回地球的能力

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [月球借力（Lunar Gravity Assist）](/glossary/other/lunar-gravity-assist/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [停泊轨道（Parking Orbit）](/glossary/orbits/parking-orbit/)
- [自由返回轨道（Free-Return Trajectory）](/glossary/orbits/free-return-trajectory/)

## 参考文献

- Hohmann W. Die Erreichbarkeit der Himmelskörper[M]. 1925.
- 魏赞等. 地月远距离逆行轨道族月球借力转移入轨研究[J]. 2026.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
