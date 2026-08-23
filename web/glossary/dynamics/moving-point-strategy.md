---
title: 动点策略（Moving Point Strategy）
description: 在Halo轨道转移优化中，通过沿出发和到达轨道移动转移端点（即调整轨道参数tau_M和tau_N），将点对点最优解推广为轨道间最优解的方法。也称终点同伦。沿轨道滑动端点可降低所需推力，但会增加飞行时间。
keywords: 动点策略, Moving Point Strategy, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 动点策略（Moving Point Strategy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动点策略详解 | 术语定义
  description: 在Halo轨道转移优化中，通过沿出发和到达轨道移动转移端点（即调整轨道参数tau_M和tau_N），将点对点最优解推广为轨道间最优解的方法。也称终点同伦。沿轨道滑动端点可降低所需推力，但会增加飞行时间。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动点策略详解 | 术语定义
  description: 在Halo轨道转移优化中，通过沿出发和到达轨道移动转移端点（即调整轨道参数tau_M和tau_N），将点对点最优解推广为轨道间最优解的方法。也称终点同伦。沿轨道滑动端点可降低所需推力，但会增加飞行时间。
  image: /logo.png
permalink: /glossary/dynamics/moving-point-strategy/
---

# 动点策略（Moving Point Strategy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在Halo轨道转移优化中，通过沿出发和到达轨道移动转移端点（即调整轨道参数tau_M和tau_N），将点对点最优解推广为轨道间最优解的方法。也称终点同伦。沿轨道滑动端点可降低所需推力，但会增加飞行时间。

## 应用价值

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。该轨道类型可作为地月空间运输网络的中转站或任务的目标轨道。在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。对于大质量航天器的长时间转移，该推进方式可大幅降低推进剂消耗。

## 相关概念

- 希尔球半径（Hill Sphere Radius）
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincare-section/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/differential-correction/)

## 参考文献

- Du et al., 2023, Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits
