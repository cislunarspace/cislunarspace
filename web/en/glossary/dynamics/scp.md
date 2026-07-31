---
title: Sequential Convex Programming, SCP
description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification. At each itera
keywords: Sequential Convex Programming, SCP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sequential Convex Programming, SCP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Sequential Convex Programming, SCP Explained | Term Definition
  description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification. At each itera
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sequential Convex Programming, SCP Explained | Term Definition
  description: A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification. At each itera
  image: /logo.png
permalink: /en/glossary/dynamics/scp/
---

# Sequential Convex Programming, SCP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method that approximates a non-convex optimal control problem as a series of convex optimization subproblems through successive convexification. At each iteration, non-convex constraints are convexified about the current solution, the convex subproblem is solved, and the reference point is updated. It exhibits good convergence and real-time performance but requires customized interior-point solvers, increasing engineering implementation complexity.

## Application Value

The 序列凸规划 concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- [Sequential Quadratic Programming](/en/glossary/dynamics/sqp/)

## References

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
