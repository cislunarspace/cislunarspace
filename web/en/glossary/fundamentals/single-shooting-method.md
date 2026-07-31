---
title: Single Shooting Method
description: An optimization method that integrates the entire trajectory as a single segment from initial conditions to terminal time, satisfying terminal constraints th...
keywords: Single Shooting Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Single Shooting Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Single Shooting Method Explained | Term Definition
  description: An optimization method that integrates the entire trajectory as a single segment from initial conditions to terminal time, satisfying terminal constraints th...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Single Shooting Method Explained | Term Definition
  description: An optimization method that integrates the entire trajectory as a single segment from initial conditions to terminal time, satisfying terminal constraints th...
  image: /logo.png
permalink: /en/glossary/fundamentals/single-shooting-method/
---

# Single Shooting Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization method that integrates the entire trajectory as a single segment from initial conditions to terminal time, satisfying terminal constraints through the initial state and control parameters. Simple to implement but sensitive to initial guesses; prone to divergence in long-duration or strongly nonlinear problems.

## Application Value

在航天器控制系统设计中，This方法可used for设计姿态控制律或制导律，achieves对航天器姿态和轨道的精确控制。在实际任务中，基于This方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## Related Concepts

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## References

- Serban et al., 2002, Acta Astronautica