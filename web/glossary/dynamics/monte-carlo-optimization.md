---
title: 蒙特卡洛优化（Monte Carlo Optimization）
description: 一种随机优化方法，通过大量随机采样参数向量来估计可行解域。论文用简化蒙特卡洛优化（参数向量为[θ₀, ΔV₀]）搜索Transit轨道转移方案中目标DRO的Pareto最优集，获得不同转移时间与速度增量之间的权衡关系。
keywords: 蒙特卡洛优化, Monte Carlo Optimization, 轨道力学, 姿态控制, 相对运动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 蒙特卡洛优化（Monte Carlo Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 蒙特卡洛优化详解 | 术语定义
  description: 一种随机优化方法，通过大量随机采样参数向量来估计可行解域。论文用简化蒙特卡洛优化（参数向量为[θ₀, ΔV₀]）搜索Transit轨道转移方案中目标DRO的Pareto最优集，获得不同转移时间与速度增量之间的权衡关系。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 蒙特卡洛优化详解 | 术语定义
  description: 一种随机优化方法，通过大量随机采样参数向量来估计可行解域。论文用简化蒙特卡洛优化（参数向量为[θ₀, ΔV₀]）搜索Transit轨道转移方案中目标DRO的Pareto最优集，获得不同转移时间与速度增量之间的权衡关系。
  image: /logo.png
permalink: /glossary/dynamics/monte-carlo-optimization/
---

# 蒙特卡洛优化（Monte Carlo Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种随机优化方法，通过大量随机采样参数向量来估计可行解域。论文用简化蒙特卡洛优化（参数向量为[θ₀, ΔV₀]）搜索Transit轨道转移方案中目标DRO的Pareto最优集，获得不同转移时间与速度增量之间的权衡关系。

## 应用价值

该动力学概念在地月空间任务设计、分析和控制中具有重要作用，掌握其特性有助于优化轨道方案、降低任务燃料消耗、提高任务成功率。

## 相关概念

- [逆行（Retrograde Motion）](/glossary/dynamics/retrograde-motion/)
- [绝对相位偏置（Absolute Phase Bias）](/glossary/dynamics/absolute-phase-bias/)
- [相对姿态四元数（Relative Attitude Quaternion）](/glossary/dynamics/relative-attitude-quaternion/)
- [径向-切向-法向坐标系（Radial-Tangential-Normal Coordinate System, RTN）](/glossary/dynamics/radial-tangential-normal-coordinate-system-rtn/)

## 参考文献

- Transfer to Distant Retrograde Orbits Using Manifold Theory
