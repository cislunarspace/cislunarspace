---
title: 终端滑模控制（Terminal Sliding Mode Control, TSMC）
description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
keywords: 终端滑模控制, Terminal Sliding Mode Control, TSMC, TSMC, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 终端滑模控制（Terminal Sliding Mode Control, TSMC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 终端滑模控制详解 | 术语定义
  description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 终端滑模控制详解 | 术语定义
  description: 在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。
  image: /logo.png
permalink: /glossary/dynamics/terminal-sliding-mode-control-tsmc/
---

# 终端滑模控制（Terminal Sliding Mode Control, TSMC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在传统滑模面中引入非线性项的变结构控制方法。滑模面设计为 s = ė + c·sig^α(e)，其中 α ∈ (0,1)，使得系统状态在有限时间内到达平衡点，而非传统线性滑模的渐近收敛。优点是有限时间收敛、对匹配不确定性有强鲁棒性；缺点是控制量在接近平衡点时可能出现高频抖振，消耗较多能量。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [相对运动周期性条件（Periodicity Conditions in Relative Orbital Motion）](/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [螺旋式编队（Helix Formation）](/glossary/dynamics/helix-formation/)
- [能量耗散法（Energy Dissipation Method）](/glossary/dynamics/energy-dissipation-method/)
- [不稳定流形（Unstable Manifold）](/glossary/dynamics/unstable-manifold/)

## 参考文献

- https://doi.org/10.1177/0954410020940892
