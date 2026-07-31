---
title: Complete Observability
description: The property that the initial state can be uniquely determined from the system's outputs. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete observability is that the observability matrix [C^T | A^T C^T | ... | (A^{n-1})^T C^T] has full rank. In the paper, when the observation matrix C=I_{6x6}, all states are completely measurable; when C=[I_{3x3}, 0_{3x3}], only positions are measurable and velocities require estimation via filtering. The paper only addresses the full state feedback case.
keywords: Complete Observability, fundamentals
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Complete Observability
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Complete Observability Explained | Term Definition
  description: The property that the initial state can be uniquely determined from the system's outputs. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete observability is that the observability matrix [C^T | A^T C^T | ... | (A^{n-1})^T C^T] has full rank. In the paper, when the observation matrix C=I_{6x6}, all states are completely measurable; when C=[I_{3x3}, 0_{3x3}], only positions are measurable and velocities require estimation via filtering. The paper only addresses the full state feedback case.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Complete Observability Explained | Term Definition
  description: The property that the initial state can be uniquely determined from the system's outputs. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete observability is that the observability matrix [C^T | A^T C^T | ... | (A^{n-1})^T C^T] has full rank. In the paper, when the observation matrix C=I_{6x6}, all states are completely measurable; when C=[I_{3x3}, 0_{3x3}], only positions are measurable and velocities require estimation via filtering. The paper only addresses the full state feedback case.
  image: /logo.png
permalink: /en/glossary/fundamentals/complete-observability/
---

# Complete Observability

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The property that the initial state can be uniquely determined from the system's outputs. For discrete-time linear time-invariant systems, the necessary and sufficient condition for complete observability is that the observability matrix [C^T | A^T C^T | ... | (A^{n-1})^T C^T] has full rank. In the paper, when the observation matrix C=I_{6x6}, all states are completely measurable; when C=[I_{3x3}, 0_{3x3}], only positions are measurable and velocities require estimation via filtering. The paper only addresses the full state feedback case.

## Application Value

This concept provides fundamental support in cislunar space research and mission design. In practical applications, the appropriate analysis method should be selected based on specific mission scenarios and constraints.

## Related Concepts

- [On-Board Software](/en/glossary/fundamentals/on-board-software/)
- [Barycentric Coordinate Time, TCB](/en/glossary/fundamentals/barycentric-coordinate-time-tcb/)
- [Horizontal Coordinate System](/en/glossary/fundamentals/horizontal-coordinate-system/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
