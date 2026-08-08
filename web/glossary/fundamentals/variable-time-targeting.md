---
title: 变时间瞄准（Variable-Time Targeting）
description: 一种微分修正方法，将飞行时间作为自由变量与初始状态一同迭代，求解满足周期性等约束的精确轨道。与固定时间的瞄准方法相比，变时间瞄准的收敛域更大，适合从初始猜测快速生成周期轨道家族。本文用此方法系统计算L1和L2点附近的Halo轨道族和垂直轨道族。
keywords: 变时间瞄准, Variable-Time Targeting, 基础, 理论, 方程
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 变时间瞄准（Variable-Time Targeting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 变时间瞄准详解 | 术语定义
  description: 一种微分修正方法，将飞行时间作为自由变量与初始状态一同迭代，求解满足周期性等约束的精确轨道。与固定时间的瞄准方法相比，变时间瞄准的收敛域更大，适合从初始猜测快速生成周期轨道家族。本文用此方法系统计算L1和L2点附近的Halo轨道族和垂直轨道族。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 变时间瞄准详解 | 术语定义
  description: 一种微分修正方法，将飞行时间作为自由变量与初始状态一同迭代，求解满足周期性等约束的精确轨道。与固定时间的瞄准方法相比，变时间瞄准的收敛域更大，适合从初始猜测快速生成周期轨道家族。本文用此方法系统计算L1和L2点附近的Halo轨道族和垂直轨道族。
  image: /logo.png
permalink: /glossary/fundamentals/variable-time-targeting/
---

# 变时间瞄准（Variable-Time Targeting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种微分修正方法，将飞行时间作为自由变量与初始状态一同迭代，求解满足周期性等约束的精确轨道。与固定时间的瞄准方法相比，变时间瞄准的收敛域更大，适合从初始猜测快速生成周期轨道家族。本文用此方法系统计算L1和L2点附近的Halo轨道族和垂直轨道族。

## 应用价值

变时间瞄准是分析地月空间动力学问题的理论基础，为航天器轨道设计、任务规划和控制策略制定提供数学支撑。
在实际工程中，需要将变时间瞄准与数值方法相结合，求解满足边界条件的最优解或近似解。
在实际任务中，需要结合数值仿真和解析方法对变时间瞄准进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [时变系统（Time-Varying System）](/glossary/fundamentals/time-varying-system/)
- 利普希茨条件（Lipschitz Condition）
- 返回走廊（Return Corridor）
- [中间推力弧（Intermediate thrust arc）](/glossary/fundamentals/it/)

## 参考文献

- Grebow et al. 2008
