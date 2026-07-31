---
title: 混合直接/间接法（Hybrid Direct/Indirect Method）
description: 将最优控制理论的必要条件用于参数化控制变量，再以非线性规划求解的轨迹优化方法。间接法提供协态微分方程来精确表达推力方向角时间历程，避免大量控制节点插值；直接法用序列二次规划处理终端约束和路径约束，降低两点边值问题的初值敏感性。两者结合兼顾精度与收敛性。
keywords: 混合直接/间接法, Hybrid Direct/Indirect Method, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 混合直接/间接法（Hybrid Direct/Indirect Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 混合直接/间接法详解 | 术语定义
  description: 将最优控制理论的必要条件用于参数化控制变量，再以非线性规划求解的轨迹优化方法。间接法提供协态微分方程来精确表达推力方向角时间历程，避免大量控制节点插值；直接法用序列二次规划处理终端约束和路径约束，降低两点边值问题的初值敏感性。两者结合兼顾精度与收敛性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 混合直接/间接法详解 | 术语定义
  description: 将最优控制理论的必要条件用于参数化控制变量，再以非线性规划求解的轨迹优化方法。间接法提供协态微分方程来精确表达推力方向角时间历程，避免大量控制节点插值；直接法用序列二次规划处理终端约束和路径约束，降低两点边值问题的初值敏感性。两者结合兼顾精度与收敛性。
  image: /logo.png
permalink: /glossary/dynamics/hybrid-direct-indirect-method/
---

# 混合直接/间接法（Hybrid Direct/Indirect Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将最优控制理论的必要条件用于参数化控制变量，再以非线性规划求解的轨迹优化方法。间接法提供协态微分方程来精确表达推力方向角时间历程，避免大量控制节点插值；直接法用序列二次规划处理终端约束和路径约束，降低两点边值问题的初值敏感性。两者结合兼顾精度与收敛性。

## 应用价值

混合直接/间接法在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Kluever and Pierson, 1995
