---
title: Multi-Revolution Halo Orbit
description: Periodic orbits in the Elliptic Restricted Three-Body Problem with periods that are integer multiples of the smaller primary's orbital period.
keywords: multi-revolution halo orbit, ERTBP, elliptic restricted three-body problem, arc-length continuation, periodic orbit
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Multi-Revolution Halo Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Multi-Revolution Halo Orbit Details | Orbit Mechanics
  description: Periodic orbits in the Elliptic Restricted Three-Body Problem with periods that are integer multiples of the smaller primary's orbital period.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multi-Revolution Halo Orbit Details | Orbit Mechanics
  description: Periodic orbits in the Elliptic Restricted Three-Body Problem with periods that are integer multiples of the smaller primary's orbital period.
  image: /logo.png
permalink: /en/glossary/orbits/multi-revolution-halo/
---

# Multi-Revolution Halo Orbit

> Author: [CislunarSpace](https://cislunarspace.cn)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Multi-revolution halo orbits are periodic orbits that exist in the Elliptic Restricted Three-Body Problem (ERTBP). In the ERTBP, the eccentricity of the smaller primary's orbit introduces periodic perturbations that break the continuous symmetry present in the Circular Restricted Three-Body Problem (CR3BP). As a result, only orbits whose periods are integer multiples of the smaller primary's orbital period can exist as periodic solutions.

Peng et al. employed arc-length continuation methods to compute these multi-revolution halo orbits, effectively resolving singularity issues that arise in single-parameter eccentricity continuation. This approach treats the eccentricity and orbital period as coupled parameters, allowing smooth continuation from CR3BP halo orbits to ERTBP periodic orbits as eccentricity increases from zero.

## Key Properties

- **Discrete symmetry:** Only specific period ratios (integer multiples of the primary's period) yield periodic solutions
- **Arc-length continuation:** Computed by parameterizing the solution branch with arc length rather than eccentricity alone
- **Singularity resolution:** The arc-length method avoids the fold bifurcations encountered in direct eccentricity continuation
- **Practical relevance:** More realistic than CR3BP halo orbits for systems with significant eccentricity, such as the Sun-Earth system

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [ERTBP](/en/glossary/dynamics/ertbp/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

## References

- Peng, H., et al. "Multi-Revolution Halo Orbits in the Elliptic Restricted Three-Body Problem."
