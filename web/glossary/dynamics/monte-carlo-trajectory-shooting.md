---
title: 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）
description: 将初始轨道参数空间离散并进行大规模正向数值积分与特征过滤的全局轨道搜索方法。
keywords: 蒙特卡洛轨迹射击法, Monte Carlo Trajectory Shooting, 动力学, 轨道搜索, 弱稳定性边界
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/monte-carlo-trajectory-shooting/
---

# 蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

蒙特卡洛轨迹射击法（Monte Carlo Trajectory Shooting）是一种基于统计随机抽样或高维均匀网格分布的全局轨道搜索策略。该方法在设定的初始参数域（如出发脉冲幅值、出发历元、推力方向角、太阳相位角及近月点高度）内生成海量初始条件，通过高并发正反向数值积分构建轨迹流数据库，并依据终端目标几何约束与能量判据筛选可行解。

## 物理机制与工程价值

在地月空间低能转移与弱稳定性边界（WSB）轨道设计中，受地日地月引力共振与摄动耦合影响，状态空间具有强烈的混沌性与多局部极小值分布。传统的基于梯度的局部优化算法（如序列二次规划、牛顿微分修正）高度依赖初值，容易陷入局部极值或发生迭代发散。

蒙特卡洛轨迹射击法通过全域覆盖，有效解耦了强非线性系统的初值敏感性：

1. 大范围扫描初始速度增量 $\Delta v$ 和历元空间，揭示不同雅可比常数下通往月球捕获区的动力学通道分布；
2. 利用生成的离散轨迹拓扑数据库，与目标周期轨道流形或近月停泊轨道进行庞加莱截面特征匹配；
3. 为后续高精度两步法优化提供收敛裕度极大的优质初值解。

在月球低能捕获、DRO/Halo 往返运输系统设计中，该方法是挖掘非常规航线与全局最优低能转移路径的核心手段。

## 相关概念

- [庞加莱截面（Poincare Section）](/glossary/dynamics/poincare-section/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [网格划分方法（Grid Division Method）](/glossary/navigation/grid-division-method/)
- [n体动力学（N-Body Dynamics）](/glossary/dynamics/n-body-dynamics/)

## 参考文献

- Peng, K., Bao, C., Shen, H., et al. Global search of low-energy cislunar transfers using Monte Carlo trajectory shooting. AIAA Journal of Spacecraft and Rockets, 2024, 61(3): 890-903.
- Belbruno, E. Capture Dynamics and Chaotic Motions in Celestial Mechanics. Princeton University Press, 2004.
