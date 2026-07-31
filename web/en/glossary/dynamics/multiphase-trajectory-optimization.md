---
title: Multiphase Trajectory Optimization
description: An optimization approach that divides a complete trajectory into multiple phases, each potentially with different dynamics, control variables, duration, and...
keywords: Multiphase Trajectory Optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Multiphase Trajectory Optimization
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Multiphase Trajectory Optimization Explained | Term Definition
  description: An optimization approach that divides a complete trajectory into multiple phases, each potentially with different dynamics, control variables, duration, and...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multiphase Trajectory Optimization Explained | Term Definition
  description: An optimization approach that divides a complete trajectory into multiple phases, each potentially with different dynamics, control variables, duration, and...
  image: /logo.png
permalink: /en/glossary/dynamics/multiphase-trajectory-optimization/
---

# Multiphase Trajectory Optimization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization approach that divides a complete trajectory into multiple phases, each potentially with different dynamics, control variables, duration, and discretization mesh, linked by inter-phase continuity constraints. In HDDP, multiphase formulation localizes the influence of dynamically sensitive segments (e.g., flybys) within their respective phases and facilitates construction of initial guesses from segments of different periodic orbits. Inter-phase constraints typically require continuity in position, velocity, and mass.


## Related Concepts


## References

- Lantoine & Russell 2012, JOTA; Aziz et al. 2019, JGCD
