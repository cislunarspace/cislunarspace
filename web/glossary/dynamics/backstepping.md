---
title: 反步法（Backstepping）
description: 一种递推式非线性控制设计方法。从最内层子系统开始，逐层设计虚拟控制量并构造Lyapunov函数，最终推导出实际系统的控制律。在轨道保持中，反步法与线性二次型调节器结合，可以避免反复求解Riccati方程，降低计算负担。
keywords: 反步法, Backstepping, 轨道优化, 控制理论, 非线性控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 反步法（Backstepping）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 反步法详解 | 术语定义
  description: 一种递推式非线性控制设计方法。从最内层子系统开始，逐层设计虚拟控制量并构造Lyapunov函数，最终推导出实际系统的控制律。在轨道保持中，反步法与线性二次型调节器结合，可以避免反复求解Riccati方程，降低计算负担。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 反步法详解 | 术语定义
  description: 一种递推式非线性控制设计方法。从最内层子系统开始，逐层设计虚拟控制量并构造Lyapunov函数，最终推导出实际系统的控制律。在轨道保持中，反步法与线性二次型调节器结合，可以避免反复求解Riccati方程，降低计算负担。
  image: /logo.png
permalink: /glossary/dynamics/backstepping/
---

# 反步法（Backstepping）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种递推式非线性控制设计方法。从最内层子系统开始，逐层设计虚拟控制量并构造Lyapunov函数，最终推导出实际系统的控制律。在轨道保持中，反步法与线性二次型调节器结合，可以避免反复求解Riccati方程，降低计算负担。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
