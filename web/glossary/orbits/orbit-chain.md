---
title: 轨道链（Orbit Chain）
description: 在限制性三体引力场中，通过依次拼接多个周期轨道的不变流形管而构建的大范围多目标连续轨道拓扑序列。
keywords: 轨道链, Orbit Chain, 动力系统, 不变流形, 轨道拼接
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道链（Orbit Chain）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/orbit-chain/
---

# 轨道链（Orbit Chain）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨道链（Orbit Chain）是指在多体动力学相空间中，利用不稳定周期轨道（如 Lyapunov 轨道、Halo 轨道、垂直周期轨道等）的稳定与不稳定不变流形，在公共庞加莱截面上寻找几何相交或微小速度跳变点，将多条异构周期轨道首尾相接、级联构造出的一套全局连续多段转移路径拓扑序列。

## 物理机制与工程价值

轨道链将非线性动力系统的流形几何结构转化为宏观空间航行的自然通道网络：
1. 异宿与同宿流形链结：当处于同一能量层级的一个周期轨道的不稳定流形与另一个周期轨道的稳定流形在相空间中发生横截相交时，航天器可实现零能耗异宿转移；对于非完全相交情况，通过庞加莱截面上的微分修正或微小脉冲即可完成流形管之间的平滑切换；
2. 跨区域巡游动力学：轨道链能够横跨地月 L1 点、L2 点、月球绕飞轨道以及地日引力区，允许单一航天器以极低的燃料代价先后访问地月系内多个平动点轨道，执行多目标深空巡游与多点科学观测；
3. 模块化轨迹搜索与规划：轨道链概念将原本极其复杂的非线性全轨道优化问题解耦为分段流形管拼接与局部脉冲优化，大幅降低了全局多脉冲轨迹搜索的维度与计算复杂度。

## 相关概念

- [地心弧段（Geocentric Arc）](/glossary/orbits/geocentric-arc/)
- [最小能量地月转移（Minimum-Energy Cislunar Transfer）](/glossary/orbits/minimum-energy-cislunar-transfer/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)

## 参考文献

- Parker, J. S., & Anderson, R. O. Chaining periodic three-body orbits in the Earth-Moon system. AAS/AIAA Space Flight Mechanics Meeting, 2010: AAS 10-238.
- Koon, W. S., Lo, M. W., Marsden, J. E., et al. Dynamical Systems, the Three-Body Problem and Space Mission Design. Springer, 2006.
