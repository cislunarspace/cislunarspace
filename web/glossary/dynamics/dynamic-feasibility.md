---
title: 动力学可行性（Dynamic Feasibility）
description: 几何上定义的曲线能否由物理上可实现的推力历史驱动。对指数正弦曲线而言，可行性条件为 |k₁k₂²| < 1。论文推导出以出发航迹角 γ₁ 表示的可行性判据：当判别式 Δ > 0 时，γ₁ 位于两个根 tan γ₁m 和 tan γ₁M 之间的区间内，对应的指数正弦曲线均为可行轨迹。Δ < 0 意味着该形状参数族中不存在
keywords: 动力学可行性, Dynamic Feasibility, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 动力学可行性（Dynamic Feasibility）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动力学可行性详解 | 术语定义
  description: 几何上定义的曲线能否由物理上可实现的推力历史驱动。对指数正弦曲线而言，可行性条件为 |k₁k₂²| < 1。论文推导出以出发航迹角 γ₁ 表示的可行性判据：当判别式 Δ > 0 时，γ₁ 位于两个根 tan γ₁m 和 tan γ₁M 之间的区间内，对应的指数正弦曲线均为可行轨迹。Δ < 0 意味着该形状参数族中不存在
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动力学可行性详解 | 术语定义
  description: 几何上定义的曲线能否由物理上可实现的推力历史驱动。对指数正弦曲线而言，可行性条件为 |k₁k₂²| < 1。论文推导出以出发航迹角 γ₁ 表示的可行性判据：当判别式 Δ > 0 时，γ₁ 位于两个根 tan γ₁m 和 tan γ₁M 之间的区间内，对应的指数正弦曲线均为可行轨迹。Δ < 0 意味着该形状参数族中不存在
  image: /logo.png
permalink: /glossary/dynamics/dynamic-feasibility/
---

# 动力学可行性（Dynamic Feasibility）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

几何上定义的曲线能否由物理上可实现的推力历史驱动。对指数正弦曲线而言，可行性条件为 |k₁k₂²| < 1。论文推导出以出发航迹角 γ₁ 表示的可行性判据：当判别式 Δ > 0 时，γ₁ 位于两个根 tan γ₁m 和 tan γ₁M 之间的区间内，对应的指数正弦曲线均为可行轨迹。Δ < 0 意味着该形状参数族中不存在可行轨迹。

## 应用价值

动力学可行性在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
