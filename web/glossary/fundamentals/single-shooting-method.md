---
title: 单打靶法（Single Shooting Method）
description: 从初始条件出发、将整个积分区间作为一段进行积分的最优化方法。仅通过初始状态和控制参数满足终端约束。实现简单，但对初始猜测敏感，在长时间积分或强非线性问题中容易发散。
keywords: 单打靶法, Single Shooting Method, 轨道力学, 坐标系统, 引力
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单打靶法（Single Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单打靶法详解 | 术语定义
  description: 从初始条件出发、将整个积分区间作为一段进行积分的最优化方法。仅通过初始状态和控制参数满足终端约束。实现简单，但对初始猜测敏感，在长时间积分或强非线性问题中容易发散。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单打靶法详解 | 术语定义
  description: 从初始条件出发、将整个积分区间作为一段进行积分的最优化方法。仅通过初始状态和控制参数满足终端约束。实现简单，但对初始猜测敏感，在长时间积分或强非线性问题中容易发散。
  image: /logo.png
permalink: /glossary/fundamentals/single-shooting-method/
---

# 单打靶法（Single Shooting Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

从初始条件出发、将整个积分区间作为一段进行积分的最优化方法。仅通过初始状态和控制参数满足终端约束。实现简单，但对初始猜测敏感，在长时间积分或强非线性问题中容易发散。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- 月球自由返回轨道（Lunar Free-Return Orbit, LFO）
- 约束转化非线性规划（Constraint Conversion to Nonlinear Programming）
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- 姿态确定与控制系统（Attitude Determination and Control System）

## 参考文献

- Serban et al., 2002, Acta Astronautica
