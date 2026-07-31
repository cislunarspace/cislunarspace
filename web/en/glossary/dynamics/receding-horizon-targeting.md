---
title: Receding Horizon Targeting
description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to m
keywords: Receding Horizon Targeting, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Receding Horizon Targeting
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Receding Horizon Targeting Explained | Term Definition"
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to m
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Receding Horizon Targeting Explained | Term Definition"
  description: A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to m
  image: /logo.png
permalink: /en/glossary/dynamics/receding-horizon-targeting/
---

# Receding Horizon Targeting

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method for constructing long-duration nominal orbits in the ephemeris model. It decomposes the integration into short segments, applying targeting corrections at each segment boundary to maintain accuracy. Suitable for cases like NRHOs where direct differential correction over years fails to converge, at the cost of small velocity discontinuities (~1 mm/s per revolution).

## Related Concepts

- [Jacobi Constant, JC](/en/glossary/dynamics/jacobi-constant-jc/)
- [Hill Region](/en/glossary/fundamentals/hill-region/)
- [Poincaré Map](/en/glossary/dynamics/poincar-map/)
- [Stability](/en/glossary/dynamics/stability/)
## References

- Zhang et al., 2022
- - Williams et al., 2017
