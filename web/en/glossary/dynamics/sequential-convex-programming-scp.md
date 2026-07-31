---
title: Sequential Convex Programming, SCP
description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification.
keywords: Sequential Convex Programming, SCP, Sequential Convex Programming, SCP, SCP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sequential Convex Programming, SCP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Sequential Convex Programming, SCP Explained | Term Definition"
  description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Sequential Convex Programming, SCP Explained | Term Definition"
  description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification.
  image: /logo.png
permalink: /en/glossary/dynamics/sequential-convex-programming-scp/
---

# Sequential Convex Programming, SCP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification. At each iteration, non-convex constraints are convexified about the current solution, the convex subproblem is solved, and the reference point is updated. It exhibits good convergence and real-time performance but requires customized interior-point solvers, increasing engineering implementation complexity.

## Application Value

In orbital design, analysis, and control, dynamics models are used to predict spacecraft trajectories, with equations of motion solved numerically or analytically. This concept underpins critical mission capabilities including orbital maneuver design, orbit improvement, and formation flying.


## Related Concepts

- [Orbit Improvement](/en/glossary/dynamics/orbit-improvement/)
- [Cluster Aggregation](/en/glossary/dynamics/cluster-aggregation/)
- [Pseudospectral Method](/en/glossary/dynamics/pseudospectral-method/)


## References

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
