---
title: 积分型滑模面（Integral Sliding Surface）
description: 滑模控制中的一种滑动面设计形式，在常规状态偏差项的基础上加入状态偏差的积分项。积分项使滑模面包含系统从初始时刻到当前时刻的累积偏差信息，从而消除稳态误差。在轨道保持中，积分型滑模面的等效控制恰好等于最优控制律，因此在滑模面上的运动对二次型性能指标是最优的。
keywords: 积分型滑模面, Integral Sliding Surface, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 积分型滑模面（Integral Sliding Surface）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 积分型滑模面详解 | 术语定义
  description: 滑模控制中的一种滑动面设计形式，在常规状态偏差项的基础上加入状态偏差的积分项。积分项使滑模面包含系统从初始时刻到当前时刻的累积偏差信息，从而消除稳态误差。在轨道保持中，积分型滑模面的等效控制恰好等于最优控制律，因此在滑模面上的运动对二次型性能指标是最优的。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 积分型滑模面详解 | 术语定义
  description: 滑模控制中的一种滑动面设计形式，在常规状态偏差项的基础上加入状态偏差的积分项。积分项使滑模面包含系统从初始时刻到当前时刻的累积偏差信息，从而消除稳态误差。在轨道保持中，积分型滑模面的等效控制恰好等于最优控制律，因此在滑模面上的运动对二次型性能指标是最优的。
  image: /logo.png
permalink: /glossary/dynamics/integral-sliding-surface/
---

# 积分型滑模面（Integral Sliding Surface）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

滑模控制中的一种滑动面设计形式，在常规状态偏差项的基础上加入状态偏差的积分项。积分项使滑模面包含系统从初始时刻到当前时刻的累积偏差信息，从而消除稳态误差。在轨道保持中，积分型滑模面的等效控制恰好等于最优控制律，因此在滑模面上的运动对二次型性能指标是最优的。

## 应用价值

积分型滑模面在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
