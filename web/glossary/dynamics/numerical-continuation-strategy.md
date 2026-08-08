---
title: 数值延拓策略（Numerical Continuation Strategy）
description: 在已求解的轨道基础上，逐步改变参数以连续追踪轨道族的数值方法。论文中先用SQP算法优化一条到达特定插入点（相位90度）的转移轨道，再以前一条轨道的解作为相邻插入点的初值，逐条递推计算出覆盖全部插入点相位的转移轨道族。该策略利用相邻轨道解的连续性加速收敛，适合大规模轨道特性分析。
keywords: 数值延拓策略, Numerical Continuation Strategy, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 数值延拓策略（Numerical Continuation Strategy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 数值延拓策略详解 | 术语定义
  description: 在已求解的轨道基础上，逐步改变参数以连续追踪轨道族的数值方法。论文中先用SQP算法优化一条到达特定插入点（相位90度）的转移轨道，再以前一条轨道的解作为相邻插入点的初值，逐条递推计算出覆盖全部插入点相位的转移轨道族。该策略利用相邻轨道解的连续性加速收敛，适合大规模轨道特性分析。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 数值延拓策略详解 | 术语定义
  description: 在已求解的轨道基础上，逐步改变参数以连续追踪轨道族的数值方法。论文中先用SQP算法优化一条到达特定插入点（相位90度）的转移轨道，再以前一条轨道的解作为相邻插入点的初值，逐条递推计算出覆盖全部插入点相位的转移轨道族。该策略利用相邻轨道解的连续性加速收敛，适合大规模轨道特性分析。
  image: /logo.png
permalink: /glossary/dynamics/numerical-continuation-strategy/
---

# 数值延拓策略（Numerical Continuation Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在已求解的轨道基础上，逐步改变参数以连续追踪轨道族的数值方法。论文中先用SQP算法优化一条到达特定插入点（相位90度）的转移轨道，再以前一条轨道的解作为相邻插入点的初值，逐条递推计算出覆盖全部插入点相位的转移轨道族。该策略利用相邻轨道解的连续性加速收敛，适合大规模轨道特性分析。

## 应用价值

该概念在地月空间轨道设计与转移规划中具有重要作用，可用于分析轨道特性与设计低能量转移方案。

## 相关概念

- 偏转角（Deflection Angle）
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- 双程测距求和组合（Summation Combination of Dual One-Way Ranging）
- 地图投影（Map Projection）

## 参考文献

- 曹鹏飞 等 - 2019 - 地月L2点空间站转移轨道设计与特性分析
- Lu et al., 2021
