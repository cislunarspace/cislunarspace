---
title: 轨迹拼接（Trajectory Patching）
description: 将转移轨道分为多段独立计算，再通过在拼接点处求解速度脉冲使各段连续衔接的两步法。先用GPU并行粗搜匹配对，再用CPU精修。该方法把高维优化问题分解为低维子问题，使百万级可行解的搜索成为可能。
keywords: 轨迹拼接, Trajectory Patching, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨迹拼接（Trajectory Patching）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨迹拼接详解 | 术语定义
  description: 将转移轨道分为多段独立计算，再通过在拼接点处求解速度脉冲使各段连续衔接的两步法。先用GPU并行粗搜匹配对，再用CPU精修。该方法把高维优化问题分解为低维子问题，使百万级可行解的搜索成为可能。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨迹拼接详解 | 术语定义
  description: 将转移轨道分为多段独立计算，再通过在拼接点处求解速度脉冲使各段连续衔接的两步法。先用GPU并行粗搜匹配对，再用CPU精修。该方法把高维优化问题分解为低维子问题，使百万级可行解的搜索成为可能。
  image: /logo.png
permalink: /glossary/dynamics/trajectory-patching/
---

# 轨迹拼接（Trajectory Patching）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将转移轨道分为多段独立计算，再通过在拼接点处求解速度脉冲使各段连续衔接的两步法。先用GPU并行粗搜匹配对，再用CPU精修。该方法把高维优化问题分解为低维子问题，使百万级可行解的搜索成为可能。

## 应用价值

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。脉冲机动是轨道修正和转移的基本操作方式。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
