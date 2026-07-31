---
title: Complete Controllability
description: The property that a linear system can reach any target state from any initial state in finite time. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete
keywords: Complete Controllability, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Complete Controllability
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Complete Controllability Explained | Term Definition
  description: The property that a linear system can reach any target state from any initial state in finite time. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Complete Controllability Explained | Term Definition
  description: The property that a linear system can reach any target state from any initial state in finite time. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete
  image: /logo.png
permalink: /en/glossary/fundamentals/complete-controllability/
---

# Complete Controllability

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The property that a linear system can reach any target state from any initial state in finite time. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete controllability is that the controllability matrix [B | AB | ... | A^{n-1}B] has full rank. After applying the time-invariant transformation to the Halo orbit error dynamics, the paper verifies this rank condition holds, proving the system is completely controllable within the small-deviation range.

## Application Value

Complete controllability guarantees that a system can eliminate arbitrary initial errors through a finite number of control maneuvers. In Halo orbit station-keeping control, verifying full rank of the controllability matrix is the theoretical prerequisite for linear controller design.

## Related Concepts

- [Orbital State Vector](/en/glossary/fundamentals/orbital-state-vector/)
- [Coordinate Time](/en/glossary/fundamentals/coordinate-time/)
- [Hill Frame](/en/glossary/fundamentals/hill-frame/)
- [Kepler's Laws](/en/glossary/fundamentals/keplers-laws/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略