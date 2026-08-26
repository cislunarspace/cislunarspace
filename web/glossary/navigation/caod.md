---
title: 组合自主定轨（Combined Autonomous Orbit Determination, CAOD）
description: 结合环月低轨卫星群与特殊大尺度轨道探测器星间链路联合解算以破除整体几何旋转秩亏的自主定轨架构。
keywords: 组合自主定轨, CAOD, 自主导航, 星间链路, 秩亏消除
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 组合自主定轨（Combined Autonomous Orbit Determination, CAOD）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/caod/
---

# 组合自主定轨（Combined Autonomous Orbit Determination, CAOD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

组合自主定轨（Combined Autonomous Orbit Determination, CAOD）是指在脱离地面测控站直接支持的条件下，通过将环月低轨卫星星座（如环月导航通信网）与处于特殊动力学大尺度轨道上的探测器（如地月平动点 Halo 轨道、近直线晕轨道 NRHO 或远距离逆行轨道 DRO 航天器）建立星间测距与测速链路，进行多源联合状态估计以确定全网各航天器绝对轨道参数的自主定轨体制。

## 物理机制与工程价值

在纯星间相对测距系统中，整个卫星星座的相对几何构型具有旋转不变性。如果仅依赖卫星之间的内部相对测距观测量，系统的法方程系数矩阵会出现 3 个旋转自由度的不可观测秩亏（Rank Deficiency），导致定轨结果在惯性空间中发生整体刚体旋转漂移。

CAOD 架构的物理机制与工程价值在于：

1. **利用非对称动力学破除秩亏**：平动点 Halo、DRO 或 NRHO 轨道具有强非对称的三体引力场敏感性与独特的不变流形拓扑，其轨道动力学特征直接绑定于地月旋转坐标系。大尺度探测器作为天然的惯性空间锚定基准，为环月低轨星座提供了绝对坐标系指向约束；
2. **极大提升几何观测构型（GDOP）**：大尺度特殊轨道航天器与环月近月星座形成超大基线高低轨测量几何，彻底消除了近月星间链路短基线带来的几何发散；
3. **实现全自主稳定定轨**：仿真与理论分析表明，在仅有星间双向测距条件下，CAOD 能使环月导航星座位置自主确定精度优于数十米，平动点卫星自主定轨精度达到米级。

该技术是月球综合 PNT（定位、导航与授时）体系摆脱地面依赖、实现星载分布式自主运行的核心支撑。

## 相关概念

- [双向对发星间测距（Bidirectional Inter-Satellite Ranging）](/glossary/navigation/bidirectional-inter-satellite-ranging/)
- [秩亏问题（Rank Deficiency Problem）](/glossary/navigation/rank-deficiency-problem/)
- [平动点导航星座（LPO Navigation Constellation）](/glossary/navigation/libration-point-navigation-constellation/)
- [无迹卡尔曼滤波（UKF）](/glossary/fundamentals/ukf/)

## 参考文献

- Liu, L., Xu, T., Yang, Y., et al. Application of two special orbits in the orbit determination of lunar satellites. Advances in Space Research, 2014, 54(10): 2153-2162.
- 丛佃伟, 郑晋生, 高为广, 等. 地月空间航天器自主导航技术及研究进展. 宇航学报, 2025, 46(1): 16-30.
