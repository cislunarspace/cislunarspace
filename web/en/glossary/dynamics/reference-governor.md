---
title: Reference Governor
description: In a cascaded control architecture, the outer-layer module preceding the inner-loop controller. It pre-generates a sequence of constraint-satisfying, bounded references based on a simplified plant mod
keywords: Reference Governor, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Reference Governor
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Reference Governor Explained | Term Definition
  description: In a cascaded control architecture, the outer-layer module preceding the inner-loop controller. It pre-generates a sequence of constraint-satisfying, bounded references based on a simplified plant mod
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Reference Governor Explained | Term Definition
  description: In a cascaded control architecture, the outer-layer module preceding the inner-loop controller. It pre-generates a sequence of constraint-satisfying, bounded references based on a simplified plant mod
  image: /logo.png
permalink: /en/glossary/dynamics/reference-governor/
---

# Reference Governor

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In a cascaded control architecture, the outer-layer module preceding the inner-loop controller. It pre-generates a sequence of constraint-satisfying, bounded references based on a simplified plant model and desired reference trajectories for the inner-loop controller to track. In cislunar station-keeping, the multi-rate planner serves as a reference governor, feeding feasible reference trajectories to MPC, thereby simplifying the optimization problem and guaranteeing recursive feasibility.

## Application Value

参考调控器In 级联control架构中位于内环control器之前, for 内环提供满足constraint of 参考序列. In cislunar spaceorbitmaintain中, 参考调控器可保证 MPC of 递推可行性.

## Related Concepts

- [Libration Point Orbit](/en/glossary/dynamics/libration-point-orbit/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)
- [Halo Orbit](/en/glossary/dynamics/halo-orbit/)

## References

- Elobaid et al. 2022