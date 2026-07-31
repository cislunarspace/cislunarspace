---
title: 收缩视地平（Shrinking Horizon）
description: MPC的一种预测时域管理策略，采用可变尺寸的预测窗口，初始时间前移而终止时间固定为转移完成时刻。优点在于可对飞行时间进行直接控制，但若转移时间较长则需要在窗口内设置大量点位，增大步长又可能影响优化精度。
keywords: Shrinking Horizon, 三体问题, 动力学分叉, 收缩视地平, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 收缩视地平（Shrinking Horizon）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 收缩视地平详解 | 术语定义
  description: MPC的一种预测时域管理策略，采用可变尺寸的预测窗口，初始时间前移而终止时间固定为转移完成时刻。优点在于可对飞行时间进行直接控制，但若转移时间较长则需要在窗口内设置大量点位，增大步长又可能影响优化精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 收缩视地平详解 | 术语定义
  description: MPC的一种预测时域管理策略，采用可变尺寸的预测窗口，初始时间前移而终止时间固定为转移完成时刻。优点在于可对飞行时间进行直接控制，但若转移时间较长则需要在窗口内设置大量点位，增大步长又可能影响优化精度。
  image: /logo.png
permalink: /glossary/dynamics/shrinking-horizon/
---

# 收缩视地平（Shrinking Horizon）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

MPC的一种预测时域管理策略，采用可变尺寸的预测窗口，初始时间前移而终止时间固定为转移完成时刻。优点在于可对飞行时间进行直接控制，但若转移时间较长则需要在窗口内设置大量点位，增大步长又可能影响优化精度。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- [最小范数解（Minimum Norm Solution）](/glossary/dynamics/minimum-norm-solution/)
- [刚体动力学（Rigid Body Dynamics）](/glossary/dynamics/rigid-body-dynamics/)
- [变长设计空间（Variable-Size Design Space, VSDS）](/glossary/dynamics/variable-size-design-space-vsds/)
- [分析梯度（Analytical Gradient）](/glossary/dynamics/analytical-gradient/)

## 参考文献

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment