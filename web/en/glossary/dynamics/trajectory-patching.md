---
title: Trajectory Patching
description: A two-step method that divides a transfer trajectory into independently computed segments and then connects them by solving for velocity impulses at patching po
keywords: Trajectory Patching, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Trajectory Patching
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Trajectory Patching Explained | Term Definition
  description: A two-step method that divides a transfer trajectory into independently computed segments and then connects them by solving for velocity impulses at patching po
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Trajectory Patching Explained | Term Definition
  description: A two-step method that divides a transfer trajectory into independently computed segments and then connects them by solving for velocity impulses at patching po
  image: /logo.png
permalink: /en/glossary/dynamics/trajectory-patching/
---

# Trajectory Patching

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A two-step method that divides a transfer trajectory into independently computed segments and then connects them by solving for velocity impulses at patching points to ensure state continuity. It first performs coarse matching in parallel on GPUs, then refines solutions on CPUs. This decomposition reduces a high-dimensional optimization problem into lower-dimensional sub-problems, enabling the search for millions of feasible solutions.

## Application Value

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。脉冲机动是轨道修正和转移的基本操作方式。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
