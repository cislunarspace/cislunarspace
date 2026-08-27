---
title: Energy-to-Fuel Homotopy Continuation
description: A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homo...
keywords: Energy-to-Fuel Homotopy Continuation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Energy-to-Fuel Homotopy Continuation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Energy-to-Fuel Homotopy Continuation Explained | Term Definition"
  description: A numerical strategy for solving low-thrust fuel-optimal problems. It first solves the easier minimum-energy problem (ε=1), then gradually decreases the homo...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Energy-to-Fuel Homotopy Continuation Explained | Term Definition"
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

In orbital mechanics analysis and mission design, this concept provides the theoretical basis for evaluating orbit characteristics and comparing schemes, helping optimize orbital design parameters and improve mission cost-effectiveness.

## Related Concepts

- [Operational Orbit Library](/glossary/orbits/operational-orbit-library/)
- Lunar Free-Return Orbit (LFO)
- Critical Orbit
- Quasi-Periodic Distant Retrograde Orbit (QPDRO)

## References

- Zhang et al. 2015, JGCD, doi:10.2514/1.G001080; Jiang et al. 2012, JGCD
