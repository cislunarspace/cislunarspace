---
title: 阻尼二分修正法（Damped Bisection Correction）
description: 一种用于平动点轨道保持的机动搜索算法。当微分修正迭代进入错误区域（积分到达时间上限仍未满足约束条件）时，自动将速度修正量减半并回退，逐步缩小修正步长，直至迭代跳出错误区域并找到满足终止条件的解。在 Halo 轨道附近的强非线性相空间中，标准微分修正容易发散或收敛到大脉冲轨迹，该方法通过逐步衰减修正步长来提高收敛鲁棒性。
keywords: 阻尼二分修正法, Damped Bisection Correction, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 阻尼二分修正法（Damped Bisection Correction）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 阻尼二分修正法详解 | 术语定义
  description: 一种用于平动点轨道保持的机动搜索算法。当微分修正迭代进入错误区域（积分到达时间上限仍未满足约束条件）时，自动将速度修正量减半并回退，逐步缩小修正步长，直至迭代跳出错误区域并找到满足终止条件的解。在 Halo 轨道附近的强非线性相空间中，标准微分修正容易发散或收敛到大脉冲轨迹，该方法通过逐步衰减修正步长来提高收敛鲁棒性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 阻尼二分修正法详解 | 术语定义
  description: 一种用于平动点轨道保持的机动搜索算法。当微分修正迭代进入错误区域（积分到达时间上限仍未满足约束条件）时，自动将速度修正量减半并回退，逐步缩小修正步长，直至迭代跳出错误区域并找到满足终止条件的解。在 Halo 轨道附近的强非线性相空间中，标准微分修正容易发散或收敛到大脉冲轨迹，该方法通过逐步衰减修正步长来提高收敛鲁棒性。
  image: /logo.png
permalink: /glossary/dynamics/damped-bisection-correction/
---

# 阻尼二分修正法（Damped Bisection Correction）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于平动点轨道保持的机动搜索算法。当微分修正迭代进入错误区域（积分到达时间上限仍未满足约束条件）时，自动将速度修正量减半并回退，逐步缩小修正步长，直至迭代跳出错误区域并找到满足终止条件的解。在 Halo 轨道附近的强非线性相空间中，标准微分修正容易发散或收敛到大脉冲轨迹，该方法通过逐步衰减修正步长来提高收敛鲁棒性。

## 应用价值

该概念在地月空间轨道设计与转移规划中具有重要作用，可用于分析轨道特性与设计低能量转移方案。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Folta et al. 2010
