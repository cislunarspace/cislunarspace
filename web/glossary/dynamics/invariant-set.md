---
title: 不变集（Invariant Set）
description: 非线性轨道控制中，当非开普勒加速度为零时系统状态保持不变的点集。包含四个子集：两个不稳定平衡态（鞍点）、一个不稳定平衡态（局部最大）和目标集（全局最小）。
keywords: 不变集, Invariant Set, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 不变集（Invariant Set）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 不变集详解 | 术语定义
  description: 非线性轨道控制中，当非开普勒加速度为零时系统状态保持不变的点集。包含四个子集：两个不稳定平衡态（鞍点）、一个不稳定平衡态（局部最大）和目标集（全局最小）。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 不变集详解 | 术语定义
  description: 非线性轨道控制中，当非开普勒加速度为零时系统状态保持不变的点集。包含四个子集：两个不稳定平衡态（鞍点）、一个不稳定平衡态（局部最大）和目标集（全局最小）。
  image: /logo.png
permalink: /glossary/dynamics/invariant-set/
---

# 不变集（Invariant Set）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

非线性轨道控制中，当非开普勒加速度为零时系统状态保持不变的点集。包含四个子集：两个不稳定平衡态（鞍点）、一个不稳定平衡态（局部最大）和目标集（全局最小）。

## 应用价值

不变集在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Pozzi 等 - 2024 - Optimization, guidance, and control of low-thrust transfers from the lunar gateway to low lunar orbit
- Belbruno 等 - 2010 - Weak stability boundary and invariant manifolds
