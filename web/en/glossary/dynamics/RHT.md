---
title: Receding Horizon Targeting
description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
keywords: Receding Horizon Targeting, 轨道动力学, 流形, 转移轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Receding Horizon Targeting
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Receding Horizon Targeting Explained | Term Definition"
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Receding Horizon Targeting Explained | Term Definition"
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
  image: /logo.png
permalink: /en/glossary/dynamics/RHT/
---

# Receding Horizon Targeting

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to maintain accuracy. Suitable for cases like NRHOs where direct differential correction over years fails to converge, at the cost of small velocity discontinuities (~1 mm/s per revolution).

## Application Value

This concept plays an important role in cislunar space orbit design and optimization, providing theoretical support for orbital transfer and station-keeping operations.

## Related Concepts

- [Weak Stability Boundary](/en/glossary/dynamics/weak-stability-boundary/)
- [Earth-Moon Manifold](/en/glossary/dynamics/earth-moon-manifold/)

## References

- Zhang et al., 2022.
- Williams et al., 2017.
