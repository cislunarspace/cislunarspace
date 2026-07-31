---
title: Discrete Linear Quadratic Regulator (DLQR)
description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
keywords: Discrete Linear Quadratic Regulator, DLQR, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Discrete Linear Quadratic Regulator (DLQR)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Discrete Linear Quadratic Regulator (DLQR) Explained | Term Definition"
  description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Discrete Linear Quadratic Regulator (DLQR) Explained | Term Definition"
  description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
  image: /logo.png
permalink: /en/glossary/dynamics/discrete-linear-quadratic-regulator/
---

# Discrete Linear Quadratic Regulator (DLQR)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves the Riccati equation recursively to obtain the optimal feedback gain matrix. In station-keeping, DLQR gains can be pre-computed and stored, and the infinite-horizon form requires only current-segment information.

## Application Value

该概念是分析地月空间动力学行为的基础工具。在轨道设计和任务分析中具有重要应用价值。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Zhang et al., 2022
- Lian et al., 2014
