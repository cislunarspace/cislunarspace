---
title: 序贯线性化（Sequential Linearization）
description: 一种将非线性最优控制问题转化为迭代求解线性子问题的数值方法。每一步在当前预测轨迹附近对动力学方程做线性化，求解所得凸优化问题，再用新解更新参考轨迹并重新线性化。迭代持续到线性化解与非线性传播轨迹一致为止。该方法将非凸问题拆解为一系列凸子问题，兼顾精度与可解性。
keywords: 序贯线性化, Sequential Linearization, 轨道力学, 最优控制, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 序贯线性化（Sequential Linearization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 序贯线性化详解 | 术语定义
  description: 一种将非线性最优控制问题转化为迭代求解线性子问题的数值方法。每一步在当前预测轨迹附近对动力学方程做线性化，求解所得凸优化问题，再用新解更新参考轨迹并重新线性化。迭代持续到线性化解与非线性传播轨迹一致为止。该方法将非凸问题拆解为一系列凸子问题，兼顾精度与可解性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 序贯线性化详解 | 术语定义
  description: 一种将非线性最优控制问题转化为迭代求解线性子问题的数值方法。每一步在当前预测轨迹附近对动力学方程做线性化，求解所得凸优化问题，再用新解更新参考轨迹并重新线性化。迭代持续到线性化解与非线性传播轨迹一致为止。该方法将非凸问题拆解为一系列凸子问题，兼顾精度与可解性。
  image: /logo.png
permalink: /glossary/dynamics/sequential-linearization/
---

# 序贯线性化（Sequential Linearization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种将非线性最优控制问题转化为迭代求解线性子问题的数值方法。每一步在当前预测轨迹附近对动力学方程做线性化，求解所得凸优化问题，再用新解更新参考轨迹并重新线性化。迭代持续到线性化解与非线性传播轨迹一致为止。该方法将非凸问题拆解为一系列凸子问题，兼顾精度与可解性。

## 应用价值

该方法在地月空间轨道保持与姿态控制中具有重要应用，可实现对航天器的稳定运行与精确机动。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
