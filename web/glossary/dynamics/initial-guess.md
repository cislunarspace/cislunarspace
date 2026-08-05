---
title: 初始猜测（Initial Guess）
description: 迭代求解非线性规划或最优控制问题时提供的变量初始值。直接配点法对初始猜测有一定鲁棒性，但低推力轨迹问题高度非线性且解空间存在多个局部最优，需要构造物理意义明确的初始猜测。文中采用四步法构造：先假设沿正推力方向积分确定第一阶段状态，再逆向积分确定第三阶段状态，然后求解Lambert问题连接两阶段，最后用真近点角等距分布的
keywords: Initial Guess, 三体问题, 初始猜测, 动力学分叉, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 初始猜测（Initial Guess）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 初始猜测详解 | 术语定义
  description: 迭代求解非线性规划或最优控制问题时提供的变量初始值。直接配点法对初始猜测有一定鲁棒性，但低推力轨迹问题高度非线性且解空间存在多个局部最优，需要构造物理意义明确的初始猜测。文中采用四步法构造：先假设沿正推力方向积分确定第一阶段状态，再逆向积分确定第三阶段状态，然后求解Lambert问题连接两阶段，最后用真近点角等距分布的
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 初始猜测详解 | 术语定义
  description: 迭代求解非线性规划或最优控制问题时提供的变量初始值。直接配点法对初始猜测有一定鲁棒性，但低推力轨迹问题高度非线性且解空间存在多个局部最优，需要构造物理意义明确的初始猜测。文中采用四步法构造：先假设沿正推力方向积分确定第一阶段状态，再逆向积分确定第三阶段状态，然后求解Lambert问题连接两阶段，最后用真近点角等距分布的
  image: /logo.png
permalink: /glossary/dynamics/initial-guess/
---

# 初始猜测（Initial Guess）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

迭代求解非线性规划或最优控制问题时提供的变量初始值。直接配点法对初始猜测有一定鲁棒性，但低推力轨迹问题高度非线性且解空间存在多个局部最优，需要构造物理意义明确的初始猜测。文中采用四步法构造：先假设沿正推力方向积分确定第一阶段状态，再逆向积分确定第三阶段状态，然后求解Lambert问题连接两阶段，最后用真近点角等距分布的节点完成网格填充。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [最小范数解（Minimum Norm Solution）](/glossary/dynamics/minimum-norm-solution/)
- [刚体动力学（Rigid Body Dynamics）](/glossary/dynamics/rigid-body-dynamics/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/variable-size-design-space-vsds/)
- [分析梯度（Analytical Gradient）](/glossary/dynamics/analytical-gradient/)

## 参考文献

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
- Spreen 2021
- Conway - 2010 - Spacecraft trajectory optimization
