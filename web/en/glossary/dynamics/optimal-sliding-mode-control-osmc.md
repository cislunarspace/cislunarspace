---
title: Optimal Sliding Mode Control (OSMC)
description: A composite control method combining optimal control with sliding mode control, embedding linear quadratic optimal control feedback gains in the sliding surface for quadratic performance optimization while using discontinuous switching to compensate for uncertainties and disturbances.
keywords: Optimal Sliding Mode Control, OSMC, OSMC, orbital mechanics, optimal control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Optimal Sliding Mode Control (OSMC)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Optimal Sliding Mode Control (OSMC) Explained | Term Definition
  description: A composite control method combining optimal control with sliding mode control, embedding linear quadratic optimal control feedback gains in the sliding surface for quadratic performance optimization.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Optimal Sliding Mode Control (OSMC) Explained | Term Definition
  description: A composite control method combining optimal control with sliding mode control, embedding linear quadratic optimal control feedback gains in the sliding surface for quadratic performance optimization.
  image: /logo.png
permalink: /en/glossary/dynamics/optimal-sliding-mode-control-osmc/
---

# Optimal Sliding Mode Control (OSMC)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A composite control method combining optimal control with sliding mode control. The sliding surface embeds the feedback gain of linear quadratic optimal control so that sliding motion is optimal with respect to a quadratic performance index, while a discontinuous switching term compensates for uncertainties and disturbances. Compared with pure optimal control, it offers stronger robustness; compared with pure sliding mode control, it achieves lower fuel consumption. In cislunar station-keeping, it performs comparably to LQR under weak perturbations and yields smaller position deviations under strong perturbations such as solar radiation pressure.

## Application Value

This method has important applications in cislunar space station-keeping and attitude control, enabling stable operation and precise maneuvering of spacecraft.

## Related Concepts

- [Deflection Angle](/en/glossary/dynamics/deflection-angle/)
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- [Summation Combination of Dual One-Way Ranging](/en/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [Map Projection](/en/glossary/fundamentals/map-projection/)

## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
