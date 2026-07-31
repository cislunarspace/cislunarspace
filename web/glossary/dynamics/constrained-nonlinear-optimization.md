---
title: 约束非线性优化（Constrained Nonlinear Optimization）
description: 在给定约束条件下寻找目标函数最优解的非线性优化方法。本文用MATLAB的fmincon优化直接转移轨迹，以DRO插入速度增量最小化为目标。
keywords: 约束非线性优化, Constrained Nonlinear Optimization, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 约束非线性优化（Constrained Nonlinear Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 约束非线性优化详解 | 术语定义
  description: 在给定约束条件下寻找目标函数最优解的非线性优化方法。本文用MATLAB的fmincon优化直接转移轨迹，以DRO插入速度增量最小化为目标。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 约束非线性优化详解 | 术语定义
  description: 在给定约束条件下寻找目标函数最优解的非线性优化方法。本文用MATLAB的fmincon优化直接转移轨迹，以DRO插入速度增量最小化为目标。
  image: /logo.png
permalink: /glossary/dynamics/constrained-nonlinear-optimization/
---

# 约束非线性优化（Constrained Nonlinear Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在给定约束条件下寻找目标函数最优解的非线性优化方法。本文用MATLAB的fmincon优化直接转移轨迹，以DRO插入速度增量最小化为目标。

## 应用价值

在轨道控制律设计中，该方法通过优化推力方向和大小实现燃料消耗最小化，是深空任务的核心技术。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- Welch et al., 2015, Mission Considerations for Transfers to a Distant Retrograde Orbit
