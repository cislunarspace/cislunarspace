---
title: Discrete Linear Quadratic Regulator
description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
keywords: Discrete Linear Quadratic Regulator, 轨道动力学, 流形, 转移轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Discrete Linear Quadratic Regulator
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Discrete Linear Quadratic Regulator Explained | Term Definition"
  description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Discrete Linear Quadratic Regulator Explained | Term Definition"
  description: An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves th
  image: /logo.png
permalink: /en/glossary/dynamics/DLQR/
---

# Discrete Linear Quadratic Regulator

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimal control strategy based on discrete dynamics. It constructs a quadratic performance index from state deviations and control increments, then solves the Riccati equation recursively to obtain the optimal feedback gain matrix. In station-keeping, DLQR gains can be pre-computed and stored, and the infinite-horizon form requires only current-segment information.

## Application Value

This concept has application value in cislunar space research and mission design.

## Related Concepts

- [Weak Stability Boundary](/en/glossary/dynamics/weak-stability-boundary/)
- [Earth-Moon Manifold](/en/glossary/dynamics/earth-moon-manifold/)

## References

- Zhang et al., 2022.
- Lian et al., 2014.
