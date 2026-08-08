---
title: Lobatto IIIA配点法（Lobatto IIIA Collocation Method）
description: 一种隐式龙格-库塔配点法，用于求解边值问题。在每个配点上同时满足状态方程和边界条件，将最优控制问题转化为非线性代数方程组。与打靶法不同，该方法需要在每个采样点提供状态和协态的初始猜测值，可直接利用周期轨道或不变流形的全场数据作为初值。
keywords: Lobatto IIIA配点法, Lobatto IIIA Collocation Method, 轨道设计, 最优控制, 动力学建模, 脉冲机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Lobatto IIIA配点法（Lobatto IIIA Collocation Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: Lobatto IIIA配点法详解 | 术语定义
  description: 一种隐式龙格-库塔配点法，用于求解边值问题。在每个配点上同时满足状态方程和边界条件，将最优控制问题转化为非线性代数方程组。与打靶法不同，该方法需要在每个采样点提供状态和协态的初始猜测值，可直接利用周期轨道或不变流形的全场数据作为初值。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lobatto IIIA配点法详解 | 术语定义
  description: 一种隐式龙格-库塔配点法，用于求解边值问题。在每个配点上同时满足状态方程和边界条件，将最优控制问题转化为非线性代数方程组。与打靶法不同，该方法需要在每个采样点提供状态和协态的初始猜测值，可直接利用周期轨道或不变流形的全场数据作为初值。
  image: /logo.png
permalink: /glossary/dynamics/lobatto-iiia-collocation-method/
---

# Lobatto IIIA配点法（Lobatto IIIA Collocation Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种隐式龙格-库塔配点法，用于求解边值问题。在每个配点上同时满足状态方程和边界条件，将最优控制问题转化为非线性代数方程组。与打靶法不同，该方法需要在每个采样点提供状态和协态的初始猜测值，可直接利用周期轨道或不变流形的全场数据作为初值。

## 应用价值

在Lobatto IIIA配点法的设计与分析中，可用于优化转移方案，减少燃料消耗 为航天器的精确控制提供理论依据，确保任务执行的可靠性 描述系统状态随时间的变化规律，是轨道预报的基础。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- 贝叶斯压缩感知（Bayesian Compressive Sensing）
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- 状态转移矩阵（State Transition Matrix）

## 参考文献

- Du et al., 2023, Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits
