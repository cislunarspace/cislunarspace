---
title: 正向-后向数值积分（Forward-Backward Numerical Integration）
description: 一种机动重构方法：在已识别的机动时间窗口两端，分别沿时间正向和反向进行自然演化动力学模型的数值积分，得到两条「假设无机动」的轨迹。两条轨迹在同一时刻的位置差最小处即为机动发生时刻，该时刻位置的平均值为机动位置，速度差为速度增量。该方法将机动参数估计转化为两条参考轨迹的差异分析，避免了直接求解非线性方程的困难。
keywords: Forward-Backward Numerical Integration, 三体问题, 动力学分叉, 正向-后向数值积分, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 正向-后向数值积分（Forward-Backward Numerical Integration）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 正向-后向数值积分详解 | 术语定义
  description: 一种机动重构方法：在已识别的机动时间窗口两端，分别沿时间正向和反向进行自然演化动力学模型的数值积分，得到两条「假设无机动」的轨迹。两条轨迹在同一时刻的位置差最小处即为机动发生时刻，该时刻位置的平均值为机动位置，速度差为速度增量。该方法将机动参数估计转化为两条参考轨迹的差异分析，避免了直接求解非线性方程的困难。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 正向-后向数值积分详解 | 术语定义
  description: 一种机动重构方法：在已识别的机动时间窗口两端，分别沿时间正向和反向进行自然演化动力学模型的数值积分，得到两条「假设无机动」的轨迹。两条轨迹在同一时刻的位置差最小处即为机动发生时刻，该时刻位置的平均值为机动位置，速度差为速度增量。该方法将机动参数估计转化为两条参考轨迹的差异分析，避免了直接求解非线性方程的困难。
  image: /logo.png
permalink: /glossary/dynamics/forward-backward-numerical-integration/
---

# 正向-后向数值积分（Forward-Backward Numerical Integration）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种机动重构方法：在已识别的机动时间窗口两端，分别沿时间正向和反向进行自然演化动力学模型的数值积分，得到两条「假设无机动」的轨迹。两条轨迹在同一时刻的位置差最小处即为机动发生时刻，该时刻位置的平均值为机动位置，速度差为速度增量。该方法将机动参数估计转化为两条参考轨迹的差异分析，避免了直接求解非线性方程的困难。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [最小范数解（Minimum Norm Solution）](/glossary/dynamics/minimum-norm-solution/)
- [刚体动力学（Rigid Body Dynamics）](/glossary/dynamics/rigid-body-dynamics/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/variable-size-design-space-vsds/)
- [分析梯度（Analytical Gradient）](/glossary/dynamics/analytical-gradient/)

## 参考文献

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network