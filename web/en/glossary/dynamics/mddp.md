---
title: Multiple-Shooting Differential Dynamic Programming, MDDP
description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where 
keywords: Multiple-Shooting Differential Dynamic Programming, MDDP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Multiple-Shooting Differential Dynamic Programming, MDDP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Multiple-Shooting Differential Dynamic Programming, MDDP Explained | Term Definition"
  description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Multiple-Shooting Differential Dynamic Programming, MDDP Explained | Term Definition"
  description: An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where 
  image: /logo.png
permalink: /en/glossary/dynamics/mddp/
---

# Multiple-Shooting Differential Dynamic Programming, MDDP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization framework that decomposes multi-phase trajectories into independent segments, each running its own HDDP iteration. Unlike multiphase HDDP where derivatives couple across the full trajectory, MDDP optimizes each segment independently in every iteration, then updates initial and target states of each segment via an outer trust-region step. This localizes the influence of sensitive segments (e.g., gravity assists) and allows parallel computation across segments. It is suited to long-duration trajectories with multiple flybys or complex maneuvers.

## Application Value

The multiple-shooting differential dynamic programming concept provides technical support and analytical methods for cislunar space research and lunar exploration missions.

## Related Concepts

- [Hybrid Differential Dynamic Programming, HDDP](/en/glossary/dynamics/hddp/)
- Differential Dynamic Programming, DDP

## References

- Pellegrini & Russell 2017, AAS 17-453; Aziz et al. 2019, JGCD
