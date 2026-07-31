---
title: Hybrid Differential Dynamic Programming, HDDP (HDDP)
description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
keywords: Hybrid Differential Dynamic Programming, HDDP, HDDP, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hybrid Differential Dynamic Programming, HDDP (HDDP)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hybrid Differential Dynamic Programming, HDDP (HDDP) Explained | Term Definition
  description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hybrid Differential Dynamic Programming, HDDP (HDDP) Explained | Term Definition
  description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
  image: /logo.png
permalink: /en/glossary/dynamics/hybrid-differential-dynamic-programming-hddp/
---

# Hybrid Differential Dynamic Programming, HDDP (HDDP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regularization. Proposed by Lantoine and Russell, HDDP adjoins terminal constraints using both Lagrange multipliers and quadratic penalty terms, converting constrained optimization into a sequence of unconstrained subproblems solved iteratively. It handles equality and inequality constraints with greater tolerance for poor initial guesses than standard DDP. As a local optimizer, it does not explore multiple local minima.

## Application Value

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Aziz et al. 2019, JGCD, DOI: 10.2514/1.G003617
