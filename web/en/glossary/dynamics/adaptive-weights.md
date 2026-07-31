---
title: Adaptive Weights
description: A weight tuning strategy in the MPC cost function that adjusts in real time during the transfer. The paper expresses the position weight q r as a function of an
keywords: Adaptive Weights
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Adaptive Weights
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Adaptive Weights Explained | Term Definition
  description: A weight tuning strategy in the MPC cost function that adjusts in real time during the transfer. The paper expresses the position weight q r as a function of an
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Adaptive Weights Explained | Term Definition
  description: A weight tuning strategy in the MPC cost function that adjusts in real time during the transfer. The paper expresses the position weight q r as a function of an
  image: /logo.png
permalink: /en/glossary/dynamics/adaptive-weights/
---

# Adaptive Weights

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A weight tuning strategy in the MPC cost function that adjusts in real time during the transfer. The paper expresses the position weight q r as a function of an adaptation coefficient γ related to relative distance from target and remaining time, reducing control effort when far from target and increasing it when approaching, thus avoiding large initial control actions while ensuring transfer completion within the specified time.

## Application Value

Adaptive Weights has practical applications in cislunar space mission design and analysis.


## Related Concepts
- [Deflection Angle](/en/glossary/dynamics/deflection-angle/)
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- [Summation Combination of Dual One-Way Ranging](/en/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [Map Projection](/en/glossary/fundamentals/map-projection/)


## References

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
