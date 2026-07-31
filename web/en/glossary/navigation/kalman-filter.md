---
title: Kalman Filter
description: An optimal recursive estimation algorithm based on state-space models that fuses prior estimates from system dynamics models with measurement information from observation data through a predict-upd...
keywords: Kalman Filter, KF
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Kalman Filter
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Kalman Filter Explained | Term Definition"
  description: An optimal recursive estimation algorithm based on state-space models that fuses prior estimates from system dynamics models with measurement information from observation data through a predict-upd...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Kalman Filter Explained | Term Definition"
  description: An optimal recursive estimation algorithm based on state-space models that fuses prior estimates from system dynamics models with measurement information from observation data through a predict-upd...
  image: /logo.png
permalink: /en/glossary/navigation/kalman-filter/
---
# Kalman Filter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimal recursive estimation algorithm based on state-space models that fuses prior estimates from system dynamics models with measurement information from observation data through a predict-update cycle, recursively estimating system states under the minimum mean-square error criterion. The paper identifies the Kalman filter as the most mature information fusion algorithm in integrated navigation, applicable to combining orbital dynamics models with optical sensor observations for estimating cislunar spacecraft orbital states. Liu Fucheng et al. used stellar aberration observations with Kalman filtering to achieve navigation accuracy of less than 3 km position error and 0.2 m/s velocity error (1-sigma RMS).

## Application Value

This term has significant application value in cislunar space missions。In the orbital design phase, engineers use relevant theories for trajectory optimization；In navigation and orbit determination, it is used to improve measurement accuracy；In attitude control and orbit maintenance tasks, it ensures stable spacecraft operation。In practical applications, parameter optimization and algorithm adaptation can be combined with mission requirements to improve mission success rate and resource utilization efficiency。

## Related Concepts

- [Characteristic Exponents](/en/glossary/dynamics/characteristic-exponents/)
- [Capture Docking Phase](/en/glossary/navigation/capture-docking-phase/)
- [Lunar Flyby Transfer](/en/glossary/orbits/lunar-flyby-transfer/)

## References

- 丛佃伟 等 - 2025 - 地月空间航天器自主导航技术及研究进展