---
title: B 样条控制参数化（B-Spline Control Parameterization）
description: 用 B 样条基函数将连续推力控制信号参数化的方法。控制信号表示为 B 样条函数的加权和，权重（控制点）作为优化变量。q 阶 B 样条在内部节点不重复时保证 C^q 连续性。该方法将无限维连续推力问题转化为有限维参数优化问题，广泛用于轨迹优化和姿态控制。
keywords: 轨道, 动力学, 稳定性, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: B 样条控制参数化（B-Spline Control Parameterization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: B 样条控制参数化详解 | 术语定义
  description: 用 B 样条基函数将连续推力控制信号参数化的方法。控制信号表示为 B 样条函数的加权和，权重（控制点）作为优化变量。q 阶 B 样条在内部节点不重复时保证 C^q 连续性。该方法将无限维连续推力问题转化为有限维参数优化问题，广泛用于轨迹优化和姿态控制。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: B 样条控制参数化详解 | 术语定义
  description: 用 B 样条基函数将连续推力控制信号参数化的方法。控制信号表示为 B 样条函数的加权和，权重（控制点）作为优化变量。q 阶 B 样条在内部节点不重复时保证 C^q 连续性。该方法将无限维连续推力问题转化为有限维参数优化问题，广泛用于轨迹优化和姿态控制。
  image: /logo.png
permalink: /glossary/dynamics/b-spline-control-parameterization/
---

# B 样条控制参数化（B-Spline Control Parameterization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用 B 样条基函数将连续推力控制信号参数化的方法。控制信号表示为 B 样条函数的加权和，权重（控制点）作为优化变量。q 阶 B 样条在内部节点不重复时保证 C^q 连续性。该方法将无限维连续推力问题转化为有限维参数优化问题，广泛用于轨迹优化和姿态控制。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- 轨道内分量（In-Plane）
- Hill方程（Hill's Equations）
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Sanchez et al. 2020
