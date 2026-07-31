---
title: 固定时间滑模控制（Fixed-Time Sliding Mode Control）
description: 一种鲁棒控制方法，通过设计含分数幂的滑模面和趋近律，使系统在固定时间内收敛到平衡点。收敛时间上界仅取决于控制器参数，与初始状态无关（比有限时间控制更强）。本文设计的固定时间滑模面同时包含大于1和小于1的分数幂项，前者保证远离平衡点时的快速收敛，后者保证接近平衡点时的高精度。
keywords: 固定时间滑模控制, Fixed-Time Sliding Mode Control, 轨道动力学, 多体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 固定时间滑模控制（Fixed-Time Sliding Mode Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 固定时间滑模控制详解 | 术语定义
  description: 一种鲁棒控制方法，通过设计含分数幂的滑模面和趋近律，使系统在固定时间内收敛到平衡点。收敛时间上界仅取决于控制器参数，与初始状态无关（比有限时间控制更强）。本文设计的固定时间滑模面同时包含大于1和小于1的分数幂项，前者保证远离平衡点时的快速收敛，后者保证接近平衡点时的高精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 固定时间滑模控制详解 | 术语定义
  description: 一种鲁棒控制方法，通过设计含分数幂的滑模面和趋近律，使系统在固定时间内收敛到平衡点。收敛时间上界仅取决于控制器参数，与初始状态无关（比有限时间控制更强）。本文设计的固定时间滑模面同时包含大于1和小于1的分数幂项，前者保证远离平衡点时的快速收敛，后者保证接近平衡点时的高精度。
  image: /logo.png
permalink: /glossary/dynamics/fixedtime-sliding-mode-control/
---

# 固定时间滑模控制（Fixed-Time Sliding Mode Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种鲁棒控制方法，通过设计含分数幂的滑模面和趋近律，使系统在固定时间内收敛到平衡点。收敛时间上界仅取决于控制器参数，与初始状态无关（比有限时间控制更强）。本文设计的固定时间滑模面同时包含大于1和小于1的分数幂项，前者保证远离平衡点时的快速收敛，后者保证接近平衡点时的高精度。

## 应用价值

固定时间滑模控制的收敛时间上界仅取决于控制器参数与初始状态无关，比有限时间控制更强。设计的滑模面同时包含大于1和小于1的分数幂项，保证全局收敛性能。

## 相关概念

- [平动点轨道（Libration Point Orbit）](/glossary/dynamics/libration-point-orbit/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [脉冲机动（Impulsive Maneuver）](/glossary/dynamics/impulsive-maneuver/)
- [Halo轨道（Halo Orbit）](/glossary/dynamics/halo-orbit/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持
