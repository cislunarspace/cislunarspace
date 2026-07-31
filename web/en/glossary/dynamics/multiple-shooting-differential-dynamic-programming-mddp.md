---
title: Multiple-Shooting Differential Dynamic Programming, MDDP
description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where derivatives couple across the full traje...
keywords: Multiple-Shooting Differential Dynamic Programming, MDDP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Multiple-Shooting Differential Dynamic Programming, MDDP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Multiple-Shooting Differential Dynamic Programming, MDDP Explained | Term Definition"
  description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where derivatives couple across the full traje...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Multiple-Shooting Differential Dynamic Programming, MDDP Explained | Term Definition"
  description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where derivatives couple across the full traje...
  image: /logo.png
permalink: /en/glossary/dynamics/multiple-shooting-differential-dynamic-programming-mddp/
---
# Multiple-Shooting Differential Dynamic Programming, MDDP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where derivatives couple across the full trajectory, MDDP optimizes each segment independently in every iteration, then updates initial and target states of each segment via an outer trust-region step. This localizes the influence of sensitive segments (e.g., gravity assists) and allows parallel computation across segments. It is suited to long-duration trajectories with multiple flybys or complex maneuvers.

## Application Value

为航天器的精确控制提供理论依据，确保任务执行的可靠性 结合数值优化算法，可实现高性能的轨迹规划 用于分析航天器在复杂引力场中的运动特性。

## References

- Pellegrini & Russell 2017, AAS 17-453; Aziz et al. 2019, JGCD
