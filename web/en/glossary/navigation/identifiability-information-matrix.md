---
title: Identifiability Information Matrix
description: In navigation state estimation, a matrix constructed from the Jacobian of the observation function with respect to the initial state. Defined as the...
keywords: Identifiability Information Matrix
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Identifiability Information Matrix
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Identifiability Information Matrix Explained | Term Definition
  description: In navigation state estimation, a matrix constructed from the Jacobian of the observation function with respect to the initial state. Defined as the...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Identifiability Information Matrix Explained | Term Definition
  description: In navigation state estimation, a matrix constructed from the Jacobian of the observation function with respect to the initial state. Defined as the...
  image: /logo.png
permalink: /en/glossary/navigation/identifiability-information-matrix/
---

# Identifiability Information Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In navigation state estimation, a matrix constructed from the Jacobian of the observation function with respect to the initial state. Defined as the accumulated sum of the transpose of the Jacobian multiplied by itself over all measurement epochs. If the matrix is full rank, the epoch state is locally identifiable; its singular value decomposition reveals the identifiability order of each state component, while its condition number reflects the overall identifiability capability.

## Application Value

This concept is essential for understanding motion characteristics in mission planning and analysis, and plays a vital role in mission success.

## Related Concepts

- [Far-Range Guidance Section](/en/glossary/navigation/far-range-guidance-section/)
- [Cross-Product Matrix / Skew-Symmetric Matrix](/en/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)
- [Combined Covariance Matrix](/en/glossary/fundamentals/combined-covariance-matrix/)
- [Force Model Simplification](/en/glossary/navigation/force-model-simplification/)

## References

- 钱霙婧等, 2013, 宇航学报