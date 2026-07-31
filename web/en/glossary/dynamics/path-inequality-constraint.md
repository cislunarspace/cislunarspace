---
title: Path Inequality Constraint
description: Inequality constraints that must be satisfied at every point or stage along a trajectory, such as thrust magnitude not exceeding a maximum value or spacecraf...
keywords: Path Inequality Constraint
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Path Inequality Constraint
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Path Inequality Constraint Explained | Term Definition
  description: Inequality constraints that must be satisfied at every point or stage along a trajectory, such as thrust magnitude not exceeding a maximum value or spacecraf...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Path Inequality Constraint Explained | Term Definition
  description: Inequality constraints that must be satisfied at every point or stage along a trajectory, such as thrust magnitude not exceeding a maximum value or spacecraf...
  image: /logo.png
permalink: /en/glossary/dynamics/path-inequality-constraint/
---

# Path Inequality Constraint

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Inequality constraints that must be satisfied at every point or stage along a trajectory, such as thrust magnitude not exceeding a maximum value or spacecraft-to-body distance staying above a minimum radius. Unlike terminal constraints applied only at endpoints, path constraints apply throughout the flight. In HDDP, control bounds like thrust limits are enforced by direct truncation; state constraints like minimum radius are handled softly via penalty methods, permitting small violations at the cost of additional penalty.

## Application Value

在航天器控制系统设计中，This方法可used for设计姿态控制律或制导律，achieves对航天器姿态和轨道的精确控制。在实际任务中，基于This方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## Related Concepts

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## References

- Aziz et al. 2019, JGCD