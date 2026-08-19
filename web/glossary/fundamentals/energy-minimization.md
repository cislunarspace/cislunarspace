---
title: 能量最小化（Energy Minimization）
description: 以控制量的L2范数（即控制能量）为代价函数的最优控制问题。相比最小燃料问题（L1范数），能量最小化问题的哈密顿量严格凹且光滑，控制律连续，射方程易求解。因此常作为同伦延拓的起点，逐步过渡到最小燃料问题。
keywords: 能量最小化, Energy Minimization, 基础, 理论, 方程
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 能量最小化（Energy Minimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 能量最小化详解 | 术语定义
  description: 以控制量的L2范数（即控制能量）为代价函数的最优控制问题。相比最小燃料问题（L1范数），能量最小化问题的哈密顿量严格凹且光滑，控制律连续，射方程易求解。因此常作为同伦延拓的起点，逐步过渡到最小燃料问题。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 能量最小化详解 | 术语定义
  description: 以控制量的L2范数（即控制能量）为代价函数的最优控制问题。相比最小燃料问题（L1范数），能量最小化问题的哈密顿量严格凹且光滑，控制律连续，射方程易求解。因此常作为同伦延拓的起点，逐步过渡到最小燃料问题。
  image: /logo.png
permalink: /glossary/fundamentals/energy-minimization/
---

# 能量最小化（Energy Minimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以控制量的L2范数（即控制能量）为代价函数的最优控制问题。相比最小燃料问题（L1范数），能量最小化问题的哈密顿量严格凹且光滑，控制律连续，射方程易求解。因此常作为同伦延拓的起点，逐步过渡到最小燃料问题。

## 应用价值

能量最小化是分析地月空间动力学问题的理论基础，为航天器轨道设计、任务规划和控制策略制定提供数学支撑。
在实际工程中，需要将能量最小化与数值方法相结合，求解满足边界条件的最优解或近似解。
在实际任务中，需要结合数值仿真和解析方法对能量最小化进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [时变系统（Time-Varying System）](/glossary/fundamentals/eom/)
- 利普希茨条件（Lipschitz Condition）
- [变时间瞄准（Variable-Time Targeting）](/glossary/dynamics/differential-correction/)
- 返回走廊（Return Corridor）

## 参考文献

- Caillau et al. 2012 - Minimum fuel control of the planar circular restricted three-body problem
