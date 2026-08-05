---
title: Numerical Continuation Strategy
description: A numerical method that progressively varies parameters to continuously trace a family of orbits based on an already-solved trajectory. In the paper, the SQP al
keywords: Numerical Continuation Strategy
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Numerical Continuation Strategy
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Numerical Continuation Strategy Explained | Term Definition"
  description: A numerical method that progressively varies parameters to continuously trace a family of orbits based on an already-solved trajectory. In the paper, the SQP al
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Numerical Continuation Strategy Explained | Term Definition"
  description: A numerical method that progressively varies parameters to continuously trace a family of orbits based on an already-solved trajectory. In the paper, the SQP al
  image: /logo.png
permalink: /en/glossary/dynamics/numerical-continuation-strategy/
---

# Numerical Continuation Strategy

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method that progressively varies parameters to continuously trace a family of orbits based on an already-solved trajectory. In the paper, the SQP algorithm first optimizes a transfer trajectory to a specific insertion point (phase 90 degrees), then the solution of each trajectory is used as the initial guess for the adjacent insertion point, recursively computing the transfer trajectory family over all insertion phases. This strategy exploits the continuity of adjacent solutions to accelerate convergence, and is well suited for large-scale orbital characteristic analysis.

## Application Value

Numerical Continuation Strategy plays an important role in orbit maneuver design, analysis, and transfer planning for cislunar missions.

## Related Concepts

- [Deflection Angle](/en/glossary/dynamics/deflection-angle/)
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- [Summation Combination of Dual One-Way Ranging](/en/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [Map Projection](/en/glossary/fundamentals/map-projection/)

## References

- 曹鹏飞 等 - 2019 - 地月L2点空间站转移轨道设计与特性分析
- Lu et al., 2021
