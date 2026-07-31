---
title: RKF7数值积分（Runge-Kutta-Fehlberg 7(8) Numerical Integration）
description: 一种自适应步长龙格库塔积分方法，通过7阶和8阶公式的比较自动调整步长，在保证精度的同时提高计算效率。本文中用于高保真轨道传播，积分容差设置为相对误差1×10^-12、绝对误差1×10^-9。
keywords: RKF7数值积分, Runge-Kutta-Fehlberg 7(8) Numerical Integration, RKF7(8), 轨道动力学, 控制理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: RKF7数值积分（Runge-Kutta-Fehlberg 7(8) Numerical Integration）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: RKF7数值积分详解 | 术语定义
  description: 一种自适应步长龙格库塔积分方法，通过7阶和8阶公式的比较自动调整步长，在保证精度的同时提高计算效率。本文中用于高保真轨道传播，积分容差设置为相对误差1×10^-12、绝对误差1×10^-9。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: RKF7数值积分详解 | 术语定义
  description: 一种自适应步长龙格库塔积分方法，通过7阶和8阶公式的比较自动调整步长，在保证精度的同时提高计算效率。本文中用于高保真轨道传播，积分容差设置为相对误差1×10^-12、绝对误差1×10^-9。
  image: /logo.png
permalink: /glossary/dynamics/rungekuttafehlberg-78-numerical-integration/
---

# RKF7数值积分（Runge-Kutta-Fehlberg 7(8) Numerical Integration）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应步长龙格库塔积分方法，通过7阶和8阶公式的比较自动调整步长，在保证精度的同时提高计算效率。本文中用于高保真轨道传播，积分容差设置为相对误差1×10^-12、绝对误差1×10^-9。

## 应用价值

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间。通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案。

## 相关概念

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)
## 参考文献

- Chen 等 - 2026
