---
title: Error Dynamics
description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
keywords: Error Dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Error Dynamics
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Error Dynamics Explained | Term Definition"
  description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Error Dynamics Explained | Term Definition"
  description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
  image: /logo.png
permalink: /en/glossary/dynamics/error-dynamics/
---

# Error Dynamics

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference delta_X = X_A - X_H into the CR3BP dynamics and performing a first-order Taylor expansion around the nominal orbit. After first-order approximation, the error dynamics is a linear periodic system: dot{delta_X} = A(t) delta_X + BU, where A(t) = df/dX|_{X_H(t)} is the periodic matrix obtained by partial differentiation along the nominal orbit. This is the starting point for the paper's controller design.

## Application Value

在轨道设计阶段，可usingThis轨道类型构建候选轨道池，为星座部署和任务轨道选择provides参考。在轨运行时，This轨道特性可used for轨道维持策略设计，降低推进剂消耗。在轨道转移规划中，其稳定流形结构可指导低能量转移走廊的搜索。

## Related Concepts

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/gcrf/)
- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- 月球自由返回轨道（Lunar Free-Return Orbit, LFO）
- 临界轨道（Critical Orbit）

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
