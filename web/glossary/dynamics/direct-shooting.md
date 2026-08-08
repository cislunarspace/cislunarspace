---
title: 直接打靶（Direct-Shooting）
description: 轨迹优化中的一种直接优化方法，将连续控制问题离散化，通过迭代搜索满足边界约束的控制参数。论文用直接打靶法优化脉冲转移轨道的总速度增量，以切向约束连接LEO停车轨道和目标DRO，求解两脉冲和三脉冲转移的最优参数。
keywords: 直接打靶, Direct-Shooting, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 直接打靶（Direct-Shooting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 直接打靶详解 | 术语定义
  description: 轨迹优化中的一种直接优化方法，将连续控制问题离散化，通过迭代搜索满足边界约束的控制参数。论文用直接打靶法优化脉冲转移轨道的总速度增量，以切向约束连接LEO停车轨道和目标DRO，求解两脉冲和三脉冲转移的最优参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接打靶详解 | 术语定义
  description: 轨迹优化中的一种直接优化方法，将连续控制问题离散化，通过迭代搜索满足边界约束的控制参数。论文用直接打靶法优化脉冲转移轨道的总速度增量，以切向约束连接LEO停车轨道和目标DRO，求解两脉冲和三脉冲转移的最优参数。
  image: /logo.png
permalink: /glossary/dynamics/direct-shooting/
---

# 直接打靶（Direct-Shooting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

轨迹优化中的一种直接优化方法，将连续控制问题离散化，通过迭代搜索满足边界约束的控制参数。论文用直接打靶法优化脉冲转移轨道的总速度增量，以切向约束连接LEO停车轨道和目标DRO，求解两脉冲和三脉冲转移的最优参数。

## 应用价值

在直接打靶的分析中，研究者首先需要建立描述航天器运动的数学模型，通过数值积分或解析方法求解该术语所对应的动力学方程，进而评估航天器在不同初始条件下的运动特性。
在实际任务中，直接打靶直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
在实际任务中，需要结合数值仿真和解析方法对直接打靶进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 双变量高斯分布（Bivariate Gaussian Distribution）
- 中途脉冲（Midcourse Impulse）
- 零推力参考轨迹（Zero-Thrust Reference Trajectory）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Transfer to Distant Retrograde Orbits Using Manifold Theory
