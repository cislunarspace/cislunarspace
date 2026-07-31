---
title: Steering Law
description: Control algorithm that distributes desired control torques among multiple reaction wheels, using Moore-Penrose pseudoinverse to find wheel angular accelerati...
keywords: Steering Law
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Steering Law
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Steering Law Explained | Term Definition
  description: Control algorithm that distributes desired control torques among multiple reaction wheels, using Moore-Penrose pseudoinverse to find wheel angular accelerati...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Steering Law Explained | Term Definition
  description: Control algorithm that distributes desired control torques among multiple reaction wheels, using Moore-Penrose pseudoinverse to find wheel angular accelerati...
  image: /logo.png
permalink: /en/glossary/dynamics/steering-law/
---

# Steering Law

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Control algorithm that distributes desired control torques among multiple reaction wheels, using Moore-Penrose pseudoinverse to find wheel angular accelerations that best approximate the desired torque under given constraints.

## Application Value

在航天器控制系统设计中，This方法可used for设计姿态控制律或制导律，achieves对航天器姿态和轨道的精确控制。在实际任务中，基于This方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## Related Concepts

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## References

- Pozzi 等 - 2024 - Optimization, guidance, and control of low-thrust transfers from the lunar gateway to low lunar orbit