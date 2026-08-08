---
title: Damped Bisection Correction
description: A maneuver search algorithm for libration point orbit stationkeeping. When the differential correction iteration enters an erroneous region (integration reaches
keywords: Damped Bisection Correction
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Damped Bisection Correction
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Damped Bisection Correction Explained | Term Definition"
  description: A maneuver search algorithm for libration point orbit stationkeeping. When the differential correction iteration enters an erroneous region (integration reaches
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Damped Bisection Correction Explained | Term Definition"
  description: A maneuver search algorithm for libration point orbit stationkeeping. When the differential correction iteration enters an erroneous region (integration reaches
  image: /logo.png
permalink: /en/glossary/dynamics/damped-bisection-correction/
---

# Damped Bisection Correction

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A maneuver search algorithm for libration point orbit stationkeeping. When the differential correction iteration enters an erroneous region (integration reaches the time limit without satisfying constraints), it automatically halves the velocity correction and backtracks, progressively reducing the step size until the iteration escapes the erroneous region and finds a solution satisfying the termination condition. In the strongly nonlinear phase space near Halo orbits, standard differential correction tends to diverge; this method improves convergence robustness through progressive damping of the correction step.

## Application Value

Damped Bisection Correction plays an important role in orbit maneuver design, analysis, and transfer planning for cislunar missions.

## Related Concepts

- Deflection Angle
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- Summation Combination of Dual One-Way Ranging
- Map Projection

## References

- Folta et al. 2010
