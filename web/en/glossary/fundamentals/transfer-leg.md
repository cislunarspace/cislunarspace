---
title: Transfer Leg
description: A single optimal trajectory segment between two adjacent patch points in a patched multi-segment low-thrust transfer, independently solved as a two-point boundary value problem.
keywords: Transfer Leg, two-point boundary value problem, patch point, low-thrust transfer, costate
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Transfer Leg
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Transfer Leg Explained | Term Definition
  description: A single optimal trajectory segment between two adjacent patch points in a patched multi-segment low-thrust transfer.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Transfer Leg Explained | Term Definition
  description: A single optimal trajectory segment between two adjacent patch points in a patched multi-segment low-thrust transfer.
  image: /logo.png
permalink: /en/glossary/fundamentals/transfer-leg/
---

# Transfer Leg

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A single optimal trajectory segment between two adjacent patch points in a patched multi-segment low-thrust transfer. Each leg is independently solved as a two-point boundary value problem, with state continuity enforced at patch points while costate discontinuities are permitted during coast arcs. This segmentation approach makes problems with extremely long flight times and very low thrust acceleration computationally convergent.

## Application Value

In low-thrust transfer missions to the Moon or beyond, flight times can extend to months or even years. The segmentation strategy of transfer legs decomposes this very long problem into several independently solvable two-point boundary value problems, substantially improving convergence of each subproblem. In engineering practice, orbits can be re-estimated at each patch point and control strategies corrected, effectively suppressing long-term integration error accumulation. This method is particularly important for halo orbit deployment and Lunar Gateway resupply missions, handling trajectory optimization challenges under extremely low thrust acceleration such as electric propulsion.


## Related Concepts

- [Two-Point Boundary Value Problem](/en/glossary/fundamentals/two-point-boundary-value-problem/)
- [Thrust Arc](/en/glossary/fundamentals/thrust-arc/)
- [Coast Arc](/en/glossary/fundamentals/coast-arc/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)


## References

- Patrick et al. - 2023 - Hybrid optimization of high-fidelity low-thrust transfers to the lunar gateway
