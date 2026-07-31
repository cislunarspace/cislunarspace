---
title: 近月点偏差（Perilune Deviation）
description: 受控轨迹与基准轨迹在近月点时刻的差值，用于评估轨道保持控制器的相位跟踪性能。PC-SCoP通过引入相位约束使近月点偏差在整个仿真周期内保持有界。
keywords: 近月点偏差, Perilune Deviation, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 近月点偏差（Perilune Deviation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 近月点偏差详解 | 术语定义
  description: 受控轨迹与基准轨迹在近月点时刻的差值，用于评估轨道保持控制器的相位跟踪性能。PC-SCoP通过引入相位约束使近月点偏差在整个仿真周期内保持有界。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 近月点偏差详解 | 术语定义
  description: 受控轨迹与基准轨迹在近月点时刻的差值，用于评估轨道保持控制器的相位跟踪性能。PC-SCoP通过引入相位约束使近月点偏差在整个仿真周期内保持有界。
  image: /logo.png
permalink: /glossary/dynamics/perilune-deviation/
---

# 近月点偏差（Perilune Deviation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

受控轨迹与基准轨迹在近月点时刻的差值，用于评估轨道保持控制器的相位跟踪性能。PC-SCoP通过引入相位约束使近月点偏差在整个仿真周期内保持有界。

## 应用价值

近月点偏差在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Shimane et al. 2025
