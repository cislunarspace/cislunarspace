---
title: Energy-to-Fuel Homotopy Continuation
description: A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homo...
keywords: Energy-to-Fuel Homotopy Continuation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Energy-to-Fuel Homotopy Continuation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Energy-to-Fuel Homotopy Continuation Explained | Term Definition
  description: A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homo...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Energy-to-Fuel Homotopy Continuation Explained | Term Definition
  description: A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homo...
  image: /logo.png
permalink: /en/glossary/orbits/energy-to-fuel-homotopy-continuation/
---

# Energy-to-Fuel Homotopy Continuation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homotopy parameter ε to 0, smoothly transitioning the solution to the fuel-optimal case. The parameter ε introduces a regularization term εu(1-u) in the objective function, progressively shrinking the throttle factor from continuous values to bang-bang (0 or 1).

## Application Value

在轨道力学分析和任务设计中，This概念为轨道特性评估和方案比选provides理论依据，有助于优化轨道设计参数，提高任务经济性。

## Related Concepts

- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)
- [准周期远距离逆行轨道（Quasi-Periodic Distant Retrograde Orbit, QPDRO）](/glossary/orbits/quasi-periodic-distant-retrograde-orbit/)

## References

- Zhang et al. 2015, JGCD, doi:10.2514/1.G001080; Jiang et al. 2012, JGCD