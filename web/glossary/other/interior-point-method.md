---
title: 内点法（Interior-Point Method）
description: 一类求解有约束优化问题的算法。从可行域内部出发，通过引入障碍函数或互补松弛条件，将约束优化转化为一系列无约束或等式约束子问题迭代求解。在轨道优化中用于局部修正位置误差，使解满足终端约束。
keywords: 内点法, Interior-Point Method, 数值优化, 算法, 计算方法
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 内点法（Interior-Point Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 内点法详解 | 术语定义
  description: 一类求解有约束优化问题的算法。从可行域内部出发，通过引入障碍函数或互补松弛条件，将约束优化转化为一系列无约束或等式约束子问题迭代求解。在轨道优化中用于局部修正位置误差，使解满足终端约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 内点法详解 | 术语定义
  description: 一类求解有约束优化问题的算法。从可行域内部出发，通过引入障碍函数或互补松弛条件，将约束优化转化为一系列无约束或等式约束子问题迭代求解。在轨道优化中用于局部修正位置误差，使解满足终端约束。
  image: /logo.png
permalink: /glossary/other/interior-point-method/
---

# 内点法（Interior-Point Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一类求解有约束优化问题的算法。从可行域内部出发，通过引入障碍函数或互补松弛条件，将约束优化转化为一系列无约束或等式约束子问题迭代求解。在轨道优化中用于局部修正位置误差，使解满足终端约束。

## 应用价值

在内点法的设计与分析中，可用于优化转移方案，减少燃料消耗 结合数值优化算法，可实现高性能的轨迹规划 用于评估导航系统的精度上限，指导滤波器设计。

## 相关概念

- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)
- [脉冲转向（Orbital Axis Slewing）](/glossary/fundamentals/orbital-axis-slewing/)
- [Hill-Clohessy-Wiltshire方程（Hill Clohessy Wiltshire Equations）](/glossary/dynamics/hill-clohessy-wiltshire-equations/)

## 参考文献

- Li et al., 2026, Chinese Journal of Space Science, 46(1):175-188; Waltz et al., 2006, Mathematical Programming, 107(3):391-408
- Acikse和Ploen - 2007
