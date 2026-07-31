---
title: 自适应系数（Adaptation Coefficient, γ）
description: 自适应权重策略中用于缩放位置权重的系数，定义为α的β次幂，其中α为当前相对距离与目标距离阈值之比，β为与相对速度和时间余量相关的指数。该系数使MPC在远离目标时产生较小控制量，接近目标时产生较大控制量。
keywords: 自适应系数, Adaptation Coefficient, γ, γ, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应系数（Adaptation Coefficient, γ）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应系数详解 | 术语定义
  description: 自适应权重策略中用于缩放位置权重的系数，定义为α的β次幂，其中α为当前相对距离与目标距离阈值之比，β为与相对速度和时间余量相关的指数。该系数使MPC在远离目标时产生较小控制量，接近目标时产生较大控制量。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应系数详解 | 术语定义
  description: 自适应权重策略中用于缩放位置权重的系数，定义为α的β次幂，其中α为当前相对距离与目标距离阈值之比，β为与相对速度和时间余量相关的指数。该系数使MPC在远离目标时产生较小控制量，接近目标时产生较大控制量。
  image: /logo.png
permalink: /glossary/dynamics/adaptation-coefficient/
---

# 自适应系数（Adaptation Coefficient, γ）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

自适应权重策略中用于缩放位置权重的系数，定义为α的β次幂，其中α为当前相对距离与目标距离阈值之比，β为与相对速度和时间余量相关的指数。该系数使MPC在远离目标时产生较小控制量，接近目标时产生较大控制量。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
