---
title: Terminal Penalty Term
description: A cost function term in model predictive control that replaces a hard terminal constraint. The terminal state constraint x(tf) = 0 is relaxed into a quadrati...
keywords: Terminal Penalty Term
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Terminal Penalty Term
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Terminal Penalty Term Explained | Term Definition
  description: A cost function term in model predictive control that replaces a hard terminal constraint. The terminal state constraint x(tf) = 0 is relaxed into a quadrati...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Terminal Penalty Term Explained | Term Definition
  description: A cost function term in model predictive control that replaces a hard terminal constraint. The terminal state constraint x(tf) = 0 is relaxed into a quadrati...
  image: /logo.png
permalink: /en/glossary/dynamics/terminal-penalty-term/
---

# Terminal Penalty Term

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A cost function term in model predictive control that replaces a hard terminal constraint. The terminal state constraint x(tf) = 0 is relaxed into a quadratic penalty gamma * x^T * R * x on the terminal state. This serves two purposes: preventing infeasibility of the optimization under disturbances, and potentially improving asymptotic stability. For large positive gamma, the penalty approximates a hard constraint.

## Application Value

在航天器控制系统设计中，This方法可used for设计姿态控制律或制导律，achieves对航天器姿态和轨道的精确控制。在实际任务中，基于This方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## Related Concepts

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## References

- Sanchez et al. 2020