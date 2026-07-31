---
title: 相对轨迹跟踪（Relative Trajectory Following）
description: 一种 DRO 编队轨道保持算法的思路：基于目标点法思想，在近月点处施加修正脉冲，利用状态转移矩阵预测下一目标点处的相对位置偏差，通过求解线性方程组计算速度增量，使副星在下一目标点处严格回归参考轨迹。该方法不依赖主星实时状态信息，使用方便，在参考轨迹跟踪精度方面略有优势。
keywords: 相对轨迹跟踪, Relative Trajectory Following, , 导航, 定位, 轨道确定, 滤波, 测控
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相对轨迹跟踪（Relative Trajectory Following）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相对轨迹跟踪（Relative Trajectory Following）详解 | 术语定义
  description: 一种 DRO 编队轨道保持算法的思路：基于目标点法思想，在近月点处施加修正脉冲，利用状态转移矩阵预测下一目标点处的相对位置偏差，通过求解线性方程组计算速度增量，使副星在下一目标点处严格回归参考轨迹。该方法不依赖主星实时状态信息，使用方便，在参考轨迹跟踪精度方面略有优势。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相对轨迹跟踪（Relative Trajectory Following）详解 | 术语定义
  description: 一种 DRO 编队轨道保持算法的思路：基于目标点法思想，在近月点处施加修正脉冲，利用状态转移矩阵预测下一目标点处的相对位置偏差，通过求解线性方程组计算速度增量，使副星在下一目标点处严格回归参考轨迹。该方法不依赖主星实时状态信息，使用方便，在参考轨迹跟踪精度方面略有优势。
  image: /logo.png
permalink: /glossary/navigation/relative-trajectory-following/
---

# 相对轨迹跟踪（Relative Trajectory Following）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种 DRO 编队轨道保持算法的思路：基于目标点法思想，在近月点处施加修正脉冲，利用状态转移矩阵预测下一目标点处的相对位置偏差，通过求解线性方程组计算速度增量，使副星在下一目标点处严格回归参考轨迹。该方法不依赖主星实时状态信息，使用方便，在参考轨迹跟踪精度方面略有优势。

## 应用价值

该术语在地月转移轨道设计中被广泛应用，用于优化转移轨迹、降低速度增量消耗。工程师在设计地月空间任务时，可以利用这一概念评估不同轨道的性能差异，选择满足任务约束的最优方案。此外，它也可用于分析轨道机动方案的可行性，支持任务规划与决策。

## 相关概念

- [碰撞规避机动（Collision Avoidance Maneuver）](/glossary/navigation/collision-avoidance-maneuver/)
- [状态估计（State Estimation）](/glossary/navigation/state-estimation/)
- [地月空间PNT服务（Positioning, Navigation and Timing Service in Cislunar Space, PNT）](/glossary/navigation/positioning-navigation-and-timing-service-in-cislunar-space-pnt/)
- [历表参数压缩（Ephemeris Parameter Compression）](/glossary/navigation/ephemeris-parameter-compression/)

## 参考文献

- 敖海跃等 2024
