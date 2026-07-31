---
title: Sequential Linearization
description: A numerical method that transforms a nonlinear optimal control problem into an iterative sequence of linear subproblems. At each step, the dynamics are lineariz
keywords: Sequential Linearization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sequential Linearization
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Sequential Linearization Explained | Term Definition
  description: A numerical method that transforms a nonlinear optimal control problem into an iterative sequence of linear subproblems. At each step, the dynamics are lineariz
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sequential Linearization Explained | Term Definition
  description: A numerical method that transforms a nonlinear optimal control problem into an iterative sequence of linear subproblems. At each step, the dynamics are lineariz
  image: /logo.png
permalink: /en/glossary/dynamics/sequential-linearization/
---

# Sequential Linearization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method that transforms a nonlinear optimal control problem into an iterative sequence of linear subproblems. At each step, the dynamics are linearized about the current predicted trajectory, the resulting convex optimization is solved, and the reference trajectory is updated with the new solution. Iteration continues until the linearized solution agrees with nonlinear propagation. This method decomposes a nonconvex problem into a series of convex subproblems, balancing accuracy and tractability.

## Application Value

Sequential Linearization has practical applications in cislunar space mission design and analysis.


## Related Concepts
- [Deflection Angle](/en/glossary/dynamics/deflection-angle/)
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- [Summation Combination of Dual One-Way Ranging](/en/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [Map Projection](/en/glossary/fundamentals/map-projection/)


## References

- Shimane et al. 2025
