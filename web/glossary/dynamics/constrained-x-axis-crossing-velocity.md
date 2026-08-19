---
title: 约束X轴穿越速度（Constrained X-Axis Crossing Velocity）
description: ARTEMIS任务采用的平动点轨道保持策略：在地月会合坐标系X轴附近施加控制，约束X轴穿越时刻X方向速度为零。该策略已在日地平动点任务中验证，可用微分修正或优化方法计算单个目标参数，但存在过度约束导致控制消耗增大的缺点。
keywords: 约束X轴穿越速度, Constrained X-Axis Crossing Velocity, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 约束X轴穿越速度（Constrained X-Axis Crossing Velocity）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 约束X轴穿越速度详解 | 术语定义
  description: ARTEMIS任务采用的平动点轨道保持策略：在地月会合坐标系X轴附近施加控制，约束X轴穿越时刻X方向速度为零。该策略已在日地平动点任务中验证，可用微分修正或优化方法计算单个目标参数，但存在过度约束导致控制消耗增大的缺点。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 约束X轴穿越速度详解 | 术语定义
  description: ARTEMIS任务采用的平动点轨道保持策略：在地月会合坐标系X轴附近施加控制，约束X轴穿越时刻X方向速度为零。该策略已在日地平动点任务中验证，可用微分修正或优化方法计算单个目标参数，但存在过度约束导致控制消耗增大的缺点。
  image: /logo.png
permalink: /glossary/dynamics/constrained-x-axis-crossing-velocity/
---

# 约束X轴穿越速度（Constrained X-Axis Crossing Velocity）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

ARTEMIS任务采用的平动点轨道保持策略：在地月会合坐标系X轴附近施加控制，约束X轴穿越时刻X方向速度为零。该策略已在日地平动点任务中验证，可用微分修正或优化方法计算单个目标参数，但存在过度约束导致控制消耗增大的缺点。

## 应用价值

在约束X轴穿越速度的分析中，研究者首先需要建立描述航天器运动的数学模型，通过数值积分或解析方法求解该术语所对应的动力学方程，进而评估航天器在不同初始条件下的运动特性。
在实际任务中，约束X轴穿越速度直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
在实际任务中，需要结合数值仿真和解析方法对约束X轴穿越速度进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 双变量高斯分布（Bivariate Gaussian Distribution）
- 中途脉冲（Midcourse Impulse）
- 零推力参考轨迹（Zero-Thrust Reference Trajectory）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Folta D C, Pavlak T A, Howell K C, et al. Station keeping of Lissajous trajectories in the Earth-Moon system with applications to ARTEMIS[C]. 20th AAS/AIAA Space Flight Mechanics Meeting, 2010
