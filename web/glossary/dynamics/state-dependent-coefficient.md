---
title: 状态依赖系数（State-Dependent Coefficient, SDC）
description: SDRE控制方法中将非线性系统表示为「A(x)x + B(x)u」形式时，状态依赖的系数矩阵A(x)和B(x)。SDC参数化不唯一，设计者可通过选择优化控制器性能。
keywords: 状态依赖系数, State-Dependent Coefficient, SDC, 轨道动力学, 多体问题
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态依赖系数（State-Dependent Coefficient, SDC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态依赖系数详解 | 术语定义
  description: SDRE控制方法中将非线性系统表示为「A(x)x + B(x)u」形式时，状态依赖的系数矩阵A(x)和B(x)。SDC参数化不唯一，设计者可通过选择优化控制器性能。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态依赖系数详解 | 术语定义
  description: SDRE控制方法中将非线性系统表示为「A(x)x + B(x)u」形式时，状态依赖的系数矩阵A(x)和B(x)。SDC参数化不唯一，设计者可通过选择优化控制器性能。
  image: /logo.png
permalink: /glossary/dynamics/state-dependent-coefficient/
---

# 状态依赖系数（State-Dependent Coefficient, SDC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

SDRE控制方法中将非线性系统表示为「A(x)x + B(x)u」形式时，状态依赖的系数矩阵A(x)和B(x)。SDC参数化不唯一，设计者可通过选择优化控制器性能。

## 应用价值

在轨道控制律设计中，该方法通过优化推力方向和大小实现燃料消耗最小化，是深空任务的核心技术。

## 相关概念

- [燃耗最优（Minimum-Fuel / Fuel-Optimal）](/glossary/dynamics/minimum-fuel-fuel-optimal/)
- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)

## 参考文献

- Bucchioni和Innocenti - 2021 - Rendezvous in Cis-Lunar Space near Rectilinear Halo Orbit Dynamics and Control Issues
