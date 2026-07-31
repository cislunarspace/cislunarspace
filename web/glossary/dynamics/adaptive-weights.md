---
title: 自适应权重（Adaptive Weights）
description: MPC代价函数中随转移过程实时调整的权重策略。论文将位置权重 q r 表示为与目标相对距离、时间余量相关的自适应系数γ的函数，在远离目标时降低控制量，接近目标时提高控制量，避免大初始控制并确保在规定时间内完成转移。
keywords: 自适应权重, Adaptive Weights, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应权重（Adaptive Weights）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应权重详解 | 术语定义
  description: MPC代价函数中随转移过程实时调整的权重策略。论文将位置权重 q r 表示为与目标相对距离、时间余量相关的自适应系数γ的函数，在远离目标时降低控制量，接近目标时提高控制量，避免大初始控制并确保在规定时间内完成转移。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应权重详解 | 术语定义
  description: MPC代价函数中随转移过程实时调整的权重策略。论文将位置权重 q r 表示为与目标相对距离、时间余量相关的自适应系数γ的函数，在远离目标时降低控制量，接近目标时提高控制量，避免大初始控制并确保在规定时间内完成转移。
  image: /logo.png
permalink: /glossary/dynamics/adaptive-weights/
---

# 自适应权重（Adaptive Weights）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

MPC代价函数中随转移过程实时调整的权重策略。论文将位置权重 q r 表示为与目标相对距离、时间余量相关的自适应系数γ的函数，在远离目标时降低控制量，接近目标时提高控制量，避免大初始控制并确保在规定时间内完成转移。

## 应用价值

该方法在地月空间轨道保持与姿态控制中具有重要应用，可实现对航天器的稳定运行与精确机动。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
