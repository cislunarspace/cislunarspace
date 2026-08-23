---
title: 有效飞行时间（Effective Time of Flight, ETOF）
description: 在基于弱稳定边界或不变流形的低能转移轨道设计中，扣除航天器在周期轨道渐近盘旋阶段后的实际工程转移飞行时间。
keywords: 有效飞行时间, Effective Time of Flight, 轨道, 平动点, Halo轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 有效飞行时间（Effective Time of Flight, ETOF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/effective-time-of-flight/
---

# 有效飞行时间（Effective Time of Flight, ETOF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

有效飞行时间（Effective Time of Flight, ETOF）指在多体引力场低能转移轨道设计中，通过施加微小的轨道切断或插入机动跳过渐近稳定/不稳定流形在源轨道或目标周期轨道附近的无限渐近盘旋段后，航天器从出发点实质性飞抵目标区域所消耗的真实飞行时间。

## 物理机制与工程价值

动力系统理论中的不变流形在数学上表现为随时间趋于正负无穷大渐近逼近周期轨道：

1. 渐近盘旋动力学特性：理论上的无动力流形转移轨迹在接近目标周期轨道（如Lyapunov轨道或Halo轨道）时，会在其局部邻域内经历长时间的多圈螺旋缠绕，导致理论总飞行时间极长（可达数月甚至数年），这在工程实际中往往不可接受。
2. 脉冲截断与时间优化：工程设计中，通过在流形管与目标轨道之间引入极小量级（数米/秒）的轨道插入脉冲（Insertion Maneuver），能够提前切入目标轨道周期运动，直接省去数十天的低速盘旋弧段。
3. 帕累托前沿权衡：有效飞行时间是衡量深空探测任务时间成本与推进剂消耗（Delta-V）综合性能的核心指标，为低推力电推进和弱稳定边界轨道方案提供了具有现实指导意义的评价基准。

## 相关概念

- [最小能量地月转移（Minimum-Energy Cislunar Transfer）](/glossary/orbits/minimum-energy-cislunar-transfer/)
- [等待时间（Wait Time）](/glossary/navigation/wt/)
- [轨道维持成本（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)

## 参考文献

- Fantino E, Castelli R, Alessi E M. Low-energy transfers to the Moon with small insertion maneuvers. *Celestial Mechanics and Dynamical Astronomy*, 2010, 108(4): 347-369.
- Parker J S, Anderson R O. *Low-Energy Lunar Trajectory Design*. Hoboken: John Wiley & Sons, 2014.
