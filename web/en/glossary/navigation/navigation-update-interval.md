---
title: Navigation Update Interval
description: The time interval between two navigation measurements. In cislunar continuous-thrust station-keeping, the navigation system cannot provide real-time state information; a typical interval is two day...
keywords: Navigation Update Interval
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Navigation Update Interval
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Navigation Update Interval Explained | Term Definition
  description: The time interval between two navigation measurements. In cislunar continuous-thrust station-keeping, the navigation system cannot provide real-time state information; a typical interval is two day...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Navigation Update Interval Explained | Term Definition
  description: The time interval between two navigation measurements. In cislunar continuous-thrust station-keeping, the navigation system cannot provide real-time state information; a typical interval is two day...
  image: /logo.png
permalink: /en/glossary/navigation/navigation-update-interval/
---
# Navigation Update Interval

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The time interval between two navigation measurements. In cislunar continuous-thrust station-keeping, the navigation system cannot provide real-time state information; a typical interval is two days. The navigation update interval directly affects the error accumulation of the linearized dynamical model: longer intervals produce larger model errors. For near rectilinear halo orbits, shortening the interval (e.g., from two days to six hours) significantly improves the success rate, indicating that linearization model error is a key factor causing station-keeping failures for the 9:2 NRHO.

## Application Value

This term has significant application value in cislunar space missions。In the orbital design phase, engineers use relevant theories for trajectory optimization；In navigation and orbit determination, it is used to improve measurement accuracy；In attitude control and orbit maintenance tasks, it ensures stable spacecraft operation。In practical applications, parameter optimization and algorithm adaptation can be combined with mission requirements to improve mission success rate and resource utilization efficiency。

## Related Concepts

- [Characteristic Exponents](/en/glossary/dynamics/characteristic-exponents/)
- [Capture Docking Phase](/en/glossary/navigation/capture-docking-phase/)
- [Lunar Flyby Transfer](/en/glossary/orbits/lunar-flyby-transfer/)

## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints