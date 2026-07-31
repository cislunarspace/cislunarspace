---
title: 推力缩放因子（Thrust Scaling Factor）
description: 电推进系统中用于调节实际推力大小的无量纲参数，取值范围 [0,1]。与推力角一起构成推力方向和大小的控制自由度，是优化过程中的控制变量。论文将推力缩放因子和推力角离散化为控制向量的分量，通过非线性规划优化各电推进弧段的推力律。
keywords: 推力缩放因子, Thrust Scaling Factor, 轨道优化, 控制理论, 非线性控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 推力缩放因子（Thrust Scaling Factor）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 推力缩放因子详解 | 术语定义
  description: 电推进系统中用于调节实际推力大小的无量纲参数，取值范围 [0,1]。与推力角一起构成推力方向和大小的控制自由度，是优化过程中的控制变量。论文将推力缩放因子和推力角离散化为控制向量的分量，通过非线性规划优化各电推进弧段的推力律。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 推力缩放因子详解 | 术语定义
  description: 电推进系统中用于调节实际推力大小的无量纲参数，取值范围 [0,1]。与推力角一起构成推力方向和大小的控制自由度，是优化过程中的控制变量。论文将推力缩放因子和推力角离散化为控制向量的分量，通过非线性规划优化各电推进弧段的推力律。
  image: /logo.png
permalink: /glossary/dynamics/thrust-scaling-factor/
---

# 推力缩放因子（Thrust Scaling Factor）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

电推进系统中用于调节实际推力大小的无量纲参数，取值范围 [0,1]。与推力角一起构成推力方向和大小的控制自由度，是优化过程中的控制变量。论文将推力缩放因子和推力角离散化为控制向量的分量，通过非线性规划优化各电推进弧段的推力律。

## 应用价值

基于该术语的定义，它在地月空间任务中具有重要应用价值。例如在轨道设计中，可利用其特性进行转移轨道优化；在轨道维持中，能够实现精确的轨道控制；在导航定轨中，可用于提高状态估计精度；在任务规划中，可辅助决策轨道转移时机和策略。具体的工程应用需结合任务约束和轨道特性进行综合分析。

## 相关概念

- [微分改正法](/glossary/fundamentals/differential-correction/)
- [间接法](/glossary/dynamics/indirect-methods/)
- [共振条件](/glossary/dynamics/resonance-condition/)
- [低推力平衡点](/glossary/dynamics/low-thrust-equilibrium-point/)
## 参考文献

- Pergola 等 - 2010 - Three-body invariant manifold transition with electric propulsion
