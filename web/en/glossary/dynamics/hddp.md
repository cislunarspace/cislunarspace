---
title: Hybrid Differential Dynamic Programming, HDDP
description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
keywords: Hybrid Differential Dynamic Programming, HDDP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hybrid Differential Dynamic Programming, HDDP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Hybrid Differential Dynamic Programming, HDDP Explained | Term Definition"
  description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Hybrid Differential Dynamic Programming, HDDP Explained | Term Definition"
  description: A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regulariz
  image: /logo.png
permalink: /en/glossary/dynamics/hddp/
---

# Hybrid Differential Dynamic Programming, HDDP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory optimization algorithm that extends differential dynamic programming (DDP) with augmented Lagrangian constraint handling and trust-region regularization. Proposed by Lantoine and Russell, HDDP adjoins terminal constraints using both Lagrange multipliers and quadratic penalty terms, converting constrained optimization into a sequence of unconstrained subproblems solved iteratively. It handles equality and inequality constraints with greater tolerance for poor initial guesses than standard DDP. As a local optimizer, it does not explore multiple local minima.

## Application Value

The 混合差分动态规划 concept provides technical support and analytical methods for cislunar space research and lunar exploration missions.

## Related Concepts

- [Differential Dynamic Programming, DDP](/en/glossary/dynamics/ddp/)
- [Multiple-Shooting Differential Dynamic Programming, MDDP](/en/glossary/dynamics/mddp/)

## References

- Aziz et al. 2019, JGCD, DOI: 10.2514/1.G003617
