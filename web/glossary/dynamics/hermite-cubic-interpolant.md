---
title: 埃尔米特三次插值（Hermite Cubic Interpolant）
description: 一种保持函数值和导数值连续的三次多项式插值方法。文中用于近似JPL行星历表DE405，以避免重复的I/O操作，计算效率约为直接查表的3倍，同时保证行星位置和速度的连续性与可微性。
keywords: 埃尔米特三次插值, Hermite Cubic Interpolant, 轨道动力学, 姿态控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 埃尔米特三次插值（Hermite Cubic Interpolant）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 埃尔米特三次插值详解 | 术语定义
  description: 一种保持函数值和导数值连续的三次多项式插值方法。文中用于近似JPL行星历表DE405，以避免重复的I/O操作，计算效率约为直接查表的3倍，同时保证行星位置和速度的连续性与可微性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 埃尔米特三次插值详解 | 术语定义
  description: 一种保持函数值和导数值连续的三次多项式插值方法。文中用于近似JPL行星历表DE405，以避免重复的I/O操作，计算效率约为直接查表的3倍，同时保证行星位置和速度的连续性与可微性。
  image: /logo.png
permalink: /glossary/dynamics/hermite-cubic-interpolant/
---

# 埃尔米特三次插值（Hermite Cubic Interpolant）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种保持函数值和导数值连续的三次多项式插值方法。文中用于近似JPL行星历表DE405，以避免重复的I/O操作，计算效率约为直接查表的3倍，同时保证行星位置和速度的连续性与可微性。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [相对运动周期性条件（Periodicity Conditions in Relative Orbital Motion）](/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [螺旋式编队（Helix Formation）](/glossary/dynamics/helix-formation/)
- [能量耗散法（Energy Dissipation Method）](/glossary/dynamics/energy-dissipation-method/)
- [不稳定流形（Unstable Manifold）](/glossary/dynamics/unstable-manifold/)

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
