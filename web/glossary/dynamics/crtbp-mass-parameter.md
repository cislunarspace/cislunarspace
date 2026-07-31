---
title: CRTBP 质量参数（CRTBP Mass Parameter）
description: 圆型限制性三体问题的基本参数，定义为月球质量与地月总质量之比，即 μ = M₂/(M₁+M₂)。地月系统的质量参数约为 0.01215。在归一化条件下，该参数完全确定系统的动力学特性，包括拉格朗日点位置、零速度曲线形状和轨道族结构。
keywords: CRTBP 质量参数, CRTBP Mass Parameter, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: CRTBP 质量参数（CRTBP Mass Parameter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: CRTBP 质量参数详解 | 术语定义
  description: 圆型限制性三体问题的基本参数，定义为月球质量与地月总质量之比，即 μ = M₂/(M₁+M₂)。地月系统的质量参数约为 0.01215。在归一化条件下，该参数完全确定系统的动力学特性，包括拉格朗日点位置、零速度曲线形状和轨道族结构。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: CRTBP 质量参数详解 | 术语定义
  description: 圆型限制性三体问题的基本参数，定义为月球质量与地月总质量之比，即 μ = M₂/(M₁+M₂)。地月系统的质量参数约为 0.01215。在归一化条件下，该参数完全确定系统的动力学特性，包括拉格朗日点位置、零速度曲线形状和轨道族结构。
  image: /logo.png
permalink: /glossary/dynamics/crtbp-mass-parameter/
---

# CRTBP 质量参数（CRTBP Mass Parameter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

圆型限制性三体问题的基本参数，定义为月球质量与地月总质量之比，即 μ = M₂/(M₁+M₂)。地月系统的质量参数约为 0.01215。在归一化条件下，该参数完全确定系统的动力学特性，包括拉格朗日点位置、零速度曲线形状和轨道族结构。

## 应用价值

CRTBP 质量参数在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- 基于三体Lambert算法的平动点交会轨道设计
