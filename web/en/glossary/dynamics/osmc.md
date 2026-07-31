---
title: Optimal Sliding Mode Control, OSMC
description: A composite control method combining optimal control with sliding mode control. The sliding surface embeds the feedback gain of linear quadratic optimal control
keywords: Optimal Sliding Mode Control, OSMC, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Optimal Sliding Mode Control, OSMC
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Optimal Sliding Mode Control, OSMC Explained | Term Definition
  description: A composite control method combining optimal control with sliding mode control. The sliding surface embeds the feedback gain of linear quadratic optimal control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Optimal Sliding Mode Control, OSMC Explained | Term Definition
  description: A composite control method combining optimal control with sliding mode control. The sliding surface embeds the feedback gain of linear quadratic optimal control
  image: /logo.png
permalink: /en/glossary/dynamics/osmc/
---

# Optimal Sliding Mode Control, OSMC

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A composite control method combining optimal control with sliding mode control. The sliding surface embeds the feedback gain of linear quadratic optimal control so that sliding motion is optimal with respect to a quadratic performance index, while a discontinuous switching term compensates for uncertainties and disturbances. Compared with pure optimal control, it offers stronger robustness; compared with pure sliding mode control, it achieves lower fuel consumption. In cislunar station-keeping, it performs comparably to LQR under weak perturbations and yields smaller position deviations under strong perturbations such as solar radiation pressure.

## Application Value

The 最优滑模控制 concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- [Non-Singular Fast Terminal Sliding Mode Control, NFTSM](/en/glossary/dynamics/nftsm/)
- [Double Threshold Sliding Mode Control, DTSM](/en/glossary/dynamics/dtsm/)

## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
