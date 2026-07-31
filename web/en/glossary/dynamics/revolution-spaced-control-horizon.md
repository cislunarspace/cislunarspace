---
title: Revolution-Spaced Control Horizon
description: A model predictive control horizon design in which consecutive maneuvers are spaced exactly one orbital period apart. This arrangement balances two requireme...
keywords: Revolution-Spaced Control Horizon
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Revolution-Spaced Control Horizon
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Revolution-Spaced Control Horizon Explained | Term Definition
  description: A model predictive control horizon design in which consecutive maneuvers are spaced exactly one orbital period apart. This arrangement balances two requireme...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Revolution-Spaced Control Horizon Explained | Term Definition
  description: A model predictive control horizon design in which consecutive maneuvers are spaced exactly one orbital period apart. This arrangement balances two requireme...
  image: /logo.png
permalink: /en/glossary/dynamics/revolution-spaced-control-horizon/
---

# Revolution-Spaced Control Horizon

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A model predictive control horizon design in which consecutive maneuvers are spaced exactly one orbital period apart. This arrangement balances two requirements: multiple maneuvers provide sufficient control authority to track all six translational state components, while at most one maneuver per revolution satisfies mission operations constraints. On NRHO, an 8-maneuver revolution-spaced horizon spans approximately 50 days.

## Application Value

在轨道设计阶段，可usingThis轨道类型构建候选轨道池，为星座部署和任务轨道选择provides参考。在轨运行时，This轨道特性可used for轨道维持策略设计，降低推进剂消耗。在轨道转移规划中，其稳定流形结构可指导低能量转移走廊的搜索。

## Related Concepts

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)

## References

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits