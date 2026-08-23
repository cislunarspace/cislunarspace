---
title: 等待时间（Wait Time）
description: 航天器在初始轨道或特定停泊轨道上停留以等待目标轨道几何相位对齐的时间间隔。
keywords: 等待时间, Wait Time, WT, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 等待时间（Wait Time）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/wt/
---

# 等待时间（Wait Time）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

等待时间（Wait Time, WT）指追踪航天器到达特定的中间停泊轨道或同宿/异宿转移交会窗口前，在初始基准轨道上保持滑行以消除追踪星与目标星之间的相位角偏差、匹配最佳入轨几何所经历的时间跨度。

## 物理机制与工程价值

在地月空间非开普勒三体引力环境中，调相轨道与转移轨道的设计高度依赖于天体系统的共振特性与周期运动规律：

1. 相位差与脉冲能耗平衡：在NRHO轨道或Halo轨道等多脉冲调相策略中，若直接进行轨道机动强行消除初始相位偏差，往往需要极大的速度增量（Delta-V）。通过合理引入等待时间，利用航天器与目标轨道的自然会合周期（Synodic Period），能够在极小速度增量甚至零脉冲代价下实现轨道共振和相位重合。
2. 转移窗口网格搜索：在工程任务规划中，轨道设计人员常以固定时间步长（如30分钟）构建等待时间搜索网格，全面评估不同等待时间下的转移飞行时间（TOF）与推进剂消耗曲面，寻找全局帕累托最优解。
3. 约束权衡与任务弹性：等待时间的上限受到星载能源寿命、乘员生命保障系统承载能力及测控窗口可见性的约束。合理的等待时间规划为深空交会发射窗口提供了宝贵的时间弹性和应急冗余。

## 相关概念

- [有效飞行时间（Effective Time of Flight, ETOF）](/glossary/orbits/effective-time-of-flight/)
- [Halo轨道交会（Halo Orbit Rendezvous）](/glossary/navigation/halo-orbit-rendezvous/)
- [轨道交会（Orbital Rendezvous）](/glossary/navigation/orbital-rendezvous/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)

## 参考文献

- Fossà A, Topputo F, Bernelli-Zazzera F. Two and three impulses phasing strategy with a spacecraft orbiting on an Earth-Moon NRHO. *Acta Astronautica*, 2022, 194: 310-323.
- Davis D C, Bhatt S, Howell K C, et al. Orbit maintenance and navigation analysis for Near Rectilinear Halo Orbits in support of cislunar missions. *AAS/AIAA Astrodynamics Specialist Conference*, Stevenson, WA, 2017: AAS 17-644.
