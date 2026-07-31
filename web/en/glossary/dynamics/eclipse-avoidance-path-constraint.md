---
title: Eclipse Avoidance Path Constraint
description: A path constraint embedded in the differential corrections process that forces transfer trajectories to remain outside the shadows of Earth and Moon. Formulated
keywords: Eclipse Avoidance Path Constraint, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Eclipse Avoidance Path Constraint
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Eclipse Avoidance Path Constraint Explained | Term Definition
  description: A path constraint embedded in the differential corrections process that forces transfer trajectories to remain outside the shadows of Earth and Moon. Formulated
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Eclipse Avoidance Path Constraint Explained | Term Definition
  description: A path constraint embedded in the differential corrections process that forces transfer trajectories to remain outside the shadows of Earth and Moon. Formulated
  image: /logo.png
permalink: /en/glossary/dynamics/eclipse-avoidance-path-constraint/
---

# Eclipse Avoidance Path Constraint

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A path constraint embedded in the differential corrections process that forces transfer trajectories to remain outside the shadows of Earth and Moon. Formulated based on the geometry of occluding-body shadow cones, it is implemented as an integral-type constraint. A Heaviside function activates the constraint when the spacecraft is on the shadowed side, with the integral evaluated via a Riemann sum. This constraint is applied within the multiple-shooting scheme in the ephemeris model and can be extended to limit eclipse duration for broader mission requirements.

## Application Value

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。该方法可用于精确修正轨道偏差，提高轨道预报精度。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Zimovan-Spreen et al. 2022
