---
title: Engine Limitation
description: Physical constraints of the thruster on control commands, including minimum thrust (ignition threshold) and maximum thrust (output ceiling).
keywords: Engine Limitation, Engine Limitation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Engine Limitation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Engine Limitation Explained | Term Definition
  description: Physical constraints of the thruster on control commands, including minimum thrust (ignition threshold) and maximum thrust (output ceiling).
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Engine Limitation Explained | Term Definition
  description: Physical constraints of the thruster on control commands, including minimum thrust (ignition threshold) and maximum thrust (output ceiling).
  image: /logo.png
permalink: /en/glossary/navigation/engine-limitation/
---

# Engine Limitation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Physical constraints of the thruster on control commands, including minimum thrust (ignition threshold) and maximum thrust (output ceiling). When commanded thrust falls below the minimum, actual control input is zero; when it exceeds the maximum, actual input is saturated. Typical values for cislunar station-keeping are minimum thrust acceleration of 10^-7 m/s^2 and maximum of 5x10^-4 m/s^2.

## Application Value

Navigation system design and implementation must account for observation geometry, error propagation, and signal transmission delay. This concept supports positioning accuracy evaluation, navigation filter design, and constellation optimization.


## Related Concepts

- [Lunar Surface Receiver](/en/glossary/navigation/lunar-surface-receiver/)
- [Geometric Dilution of Precision, GDOP](/en/glossary/navigation/geometric-dilution-of-precision-gdop/)
- [Satellite-to-Satellite Tracking, SST](/en/glossary/navigation/satellite-to-satellite-tracking-sst/)


## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
