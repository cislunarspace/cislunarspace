---
title: 随机分形搜索（Stochastic Fractal Search, SFS）
description: 一种受分形生长现象启发的元启发式全局优化算法。通过扩散阶段（以高斯游走生成候选个体，保留最优）和更新阶段（个体间交换信息加速收敛）迭代搜索最优解。在低月球轨道转移设计中，SFS 用于在不逐点积分高保真运动方程的条件下高效探索参数空间。
keywords: 随机分形搜索, Stochastic Fractal Search, SFS, SFS, 动力学, 轨道力学, 控制理论, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 随机分形搜索（Stochastic Fractal Search, SFS）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 随机分形搜索详解 | 术语定义
  description: 一种受分形生长现象启发的元启发式全局优化算法。通过扩散阶段（以高斯游走生成候选个体，保留最优）和更新阶段（个体间交换信息加速收敛）迭代搜索最优解。在低月球轨道转移设计中，SFS 用于在不逐点积分高保真运动方程的条件下高效探索参数空间。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 随机分形搜索详解 | 术语定义
  description: 一种受分形生长现象启发的元启发式全局优化算法。通过扩散阶段（以高斯游走生成候选个体，保留最优）和更新阶段（个体间交换信息加速收敛）迭代搜索最优解。在低月球轨道转移设计中，SFS 用于在不逐点积分高保真运动方程的条件下高效探索参数空间。
  image: /logo.png
permalink: /glossary/dynamics/stochastic-fractal-search-sfs/
---

# 随机分形搜索（Stochastic Fractal Search, SFS）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种受分形生长现象启发的元启发式全局优化算法。通过扩散阶段（以高斯游走生成候选个体，保留最优）和更新阶段（个体间交换信息加速收敛）迭代搜索最优解。在低月球轨道转移设计中，SFS 用于在不逐点积分高保真运动方程的条件下高效探索参数空间。

## 应用价值

在轨道设计阶段，可用于分析航天器在地月空间中的运动特性，评估不同轨道方案的可行性与效率。
在轨迹优化问题中，用于寻找燃料消耗最少或时间最短的最优飞行方案。
在地月转移任务中，用于设计低能量或快速转移轨道方案。
用于分析周期轨道的稳定性与转移特性，支撑地月空间站轨道设计方案。

## 相关概念

- [低月球轨道（Low Lunar Orbit, LLO）](/glossary/orbits/low-lunar-orbit-llo/)
- [复合周期轨道（Complex Periodic Orbit）](/glossary/orbits/complex-periodic-orbit/)
- [轨道转移级（Orbital Transfer Stage）](/glossary/other/orbital-transfer-stage/)
- [Halo轨道插入（Halo Orbit Insertion, HOI）](/glossary/orbits/halo-orbit-insertion-hoi/)

## 参考文献

- Salimi, 2015, Knowledge-Based Systems 75, 1-18; Sanna et al., 2024, Aerospace 11, 460
