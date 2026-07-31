---
title: 超体积指标（Hyper-volume Indicator, HVI）
description: 衡量多目标优化解集质量的指标。以参考点为基准，计算帕累托前沿在目标空间中占优区域所覆盖的超体积。HVI 越大，解集在各目标维度上的综合表现越好。在多目标蒙特卡洛树搜索中，HVI 既用于评估帕累托集的迭代进展，也替代单目标 UCT 的动作值函数来引导搜索。
keywords: 超体积指标, Hyper-volume Indicator, HVI, HVI, 动力学, 控制, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 超体积指标（Hyper-volume Indicator, HVI）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 超体积指标（Hyper-volume Indicator, HVI）详解 | 术语定义
  description: 衡量多目标优化解集质量的指标。以参考点为基准，计算帕累托前沿在目标空间中占优区域所覆盖的超体积。HVI 越大，解集在各目标维度上的综合表现越好。在多目标蒙特卡洛树搜索中，HVI 既用于评估帕累托集的迭代进展，也替代单目标 UCT 的动作值函数来引导搜索。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 超体积指标（Hyper-volume Indicator, HVI）详解 | 术语定义
  description: 衡量多目标优化解集质量的指标。以参考点为基准，计算帕累托前沿在目标空间中占优区域所覆盖的超体积。HVI 越大，解集在各目标维度上的综合表现越好。在多目标蒙特卡洛树搜索中，HVI 既用于评估帕累托集的迭代进展，也替代单目标 UCT 的动作值函数来引导搜索。
  image: /logo.png
permalink: /glossary/dynamics/hyper-volume-indicator-hvi/
---

# 超体积指标（Hyper-volume Indicator, HVI）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

衡量多目标优化解集质量的指标。以参考点为基准，计算帕累托前沿在目标空间中占优区域所覆盖的超体积。HVI 越大，解集在各目标维度上的综合表现越好。在多目标蒙特卡洛树搜索中，HVI 既用于评估帕累托集的迭代进展，也替代单目标 UCT 的动作值函数来引导搜索。

## 应用价值

该方法在多目标轨迹优化中用于平衡冲突目标（如燃料消耗与飞行时间）。通过分析帕累托前沿，设计者可以理解性能边界，选择符合任务约束的最优解。

## 相关概念

- [雅可比积分（Jacobi Integral）](/glossary/dynamics/jacobi-integral/)
- [科氏定理（Coriolis Theorem）](/glossary/dynamics/coriolis-theorem/)
- [速度函数（Velocity Function）](/glossary/dynamics/velocity-function/)

## 参考文献

- Klonowski et al., 2023
- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
