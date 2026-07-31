---
title: Receding Horizon Targeting
description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
keywords: Receding Horizon Targeting, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Receding Horizon Targeting
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Receding Horizon Targeting Explained | Term Definition
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Receding Horizon Targeting Explained | Term Definition
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting c
  image: /logo.png
permalink: /en/glossary/dynamics/rht/
---

# Receding Horizon Targeting

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to maintain accuracy. Suitable for cases like NRHOs where direct differential correction over years fails to converge, at the cost of small velocity discontinuities (~1 mm/s per revolution).

## Application Value

This term has significant practical applications in cislunar mission planning and execution.

## Related Concepts

- [Hidden-Genes Genetic Algorithm, HGGA](/en/glossary/dynamics/hgga/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/vsds/)
- [Station-Keeping](/en/glossary/dynamics/sk/)
- [Target Point Method](/en/glossary/dynamics/tp/)

## References

- Zhang et al., 2022
- Williams et al., 2017
