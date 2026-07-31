---
title: Non-Product Designed Quadrature
description: A numerical integration method that minimizes the number of quadrature points. Unlike tensor-product quadrature whose point count grows exponentially with di...
keywords: Non-Product Designed Quadrature, cislunar space, orbital mechanics, navigation, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Non-Product Designed Quadrature
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Non-Product Designed Quadrature Explained | Term Definition"
  description: A numerical integration method that minimizes the number of quadrature points. Unlike tensor-product quadrature whose point count grows exponentially with di...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Non-Product Designed Quadrature Explained | Term Definition"
  description: A numerical integration method that minimizes the number of quadrature points. Unlike tensor-product quadrature whose point count grows exponentially with di...
  image: /logo.png
permalink: /en/glossary/dynamics/non-product-designed-quadrature/
---

# Non-Product Designed Quadrature

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical integration method that minimizes the number of quadrature points. Unlike tensor-product quadrature whose point count grows exponentially with dimension, it directly optimizes point positions and weights via Gauss-Newton iteration to match moment conditions of mixed distributions. Applied to reachable domain computation, it achieves high-dimensional integration over mixed densities (uniform for maneuver time, spherical uniform for maneuver velocity) with minimal sample points.

## Application Value

This concept has practical applications in cislunar space science and engineering. Related research supports the planning, implementation, and operations of cislunar missions, forming an integral part of the knowledge system in this field.

## Related Concepts

- [Multiple Segment Trajectory Design](/en/glossary/dynamics/multiple-segment-trajectory-design/)
- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)
- [Null Vector](/en/glossary/dynamics/null-vector/)
- [Circular Restricted Three-Body Problem](/en/glossary/dynamics/circular-restricted-three-body-problem/)

## References

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
