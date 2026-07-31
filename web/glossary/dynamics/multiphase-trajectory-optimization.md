---
title: 多相轨迹优化（Multiphase Trajectory Optimization）
description: 将一条完整轨迹划分为多个相段（phase），各相段可有不同的动力学模型、控制变量、时间长度和离散网格，通过相段间的连续性约束连接为整体的优化方法。在 HDDP 中，多相设置可将引力辅助等动力学敏感段的影响限制在本相段内，也便于构造从不同周期轨道片段拼接而成的初始猜测。相段间约束通常要求位置、速度和质量连续。
keywords: 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多相轨迹优化（Multiphase Trajectory Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多相轨迹优化详解 | 术语定义
  description: 将一条完整轨迹划分为多个相段（phase），各相段可有不同的动力学模型、控制变量、时间长度和离散网格，通过相段间的连续性约束连接为整体的优化方法。在 HDDP 中，多相设置可将引力辅助等动力学敏感段的影响限制在本相段内，也便于构造从不同周期轨道片段拼接而成的初始猜测。相段间约束通常要求位置、速度和质量连续。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多相轨迹优化详解 | 术语定义
  description: 将一条完整轨迹划分为多个相段（phase），各相段可有不同的动力学模型、控制变量、时间长度和离散网格，通过相段间的连续性约束连接为整体的优化方法。在 HDDP 中，多相设置可将引力辅助等动力学敏感段的影响限制在本相段内，也便于构造从不同周期轨道片段拼接而成的初始猜测。相段间约束通常要求位置、速度和质量连续。
  image: /logo.png
permalink: /glossary/dynamics/multiphase-trajectory-optimization/
---

# 多相轨迹优化（Multiphase Trajectory Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将一条完整轨迹划分为多个相段（phase），各相段可有不同的动力学模型、控制变量、时间长度和离散网格，通过相段间的连续性约束连接为整体的优化方法。在 HDDP 中，多相设置可将引力辅助等动力学敏感段的影响限制在本相段内，也便于构造从不同周期轨道片段拼接而成的初始猜测。相段间约束通常要求位置、速度和质量连续。

## 应用价值

该轨道设计方法在地月空间任务中广泛应用。通过优化轨道参数，可以在保证任务需求的前提下最大限度降低推进剂消耗，提高任务经济效益，是当前地月空间任务设计的重要工具。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Lantoine & Russell 2012, JOTA; Aziz et al. 2019, JGCD
