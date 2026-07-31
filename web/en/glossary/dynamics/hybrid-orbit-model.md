---
title: Hybrid Orbit Model
description: An orbit computation model that combines an analytical two-body model with a high-fidelity numerical propagation model. In the preliminary design of three-impul
keywords: Hybrid Orbit Model, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hybrid Orbit Model
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hybrid Orbit Model Explained | Term Definition
  description: An orbit computation model that combines an analytical two-body model with a high-fidelity numerical propagation model. In the preliminary design of three-impul
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hybrid Orbit Model Explained | Term Definition
  description: An orbit computation model that combines an analytical two-body model with a high-fidelity numerical propagation model. In the preliminary design of three-impul
  image: /logo.png
permalink: /en/glossary/dynamics/hybrid-orbit-model/
---

# Hybrid Orbit Model

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An orbit computation model that combines an analytical two-body model with a high-fidelity numerical propagation model. In the preliminary design of three-impulse maneuver orbits, the analytical two-body model provides initial estimates, which are then refined by the high-fidelity model through iterative correction, balancing computational speed and solution accuracy. The pure two-body model alone struggles to converge to high-fidelity solutions for long transfer times; the hybrid model effectively addresses this limitation.

## Application Value

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。脉冲机动是轨道修正和转移的基本操作方式。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- 陆林 等 - 2021 - 载人月球极地探测地月转移轨道设计
