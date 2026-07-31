---
title: Empirical Local Observability Gramian
description: An observability metric matrix computed via simulation. Perturbed target trajectories are propagated and their measurement outputs compared against the nominal 
keywords: Gramian, Empirical Local Observability Gramian
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Empirical Local Observability Gramian
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Empirical Local Observability Gramian Explained | Term Definition
  description: An observability metric matrix computed via simulation. Perturbed target trajectories are propagated and their measurement outputs compared against the nominal 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Empirical Local Observability Gramian Explained | Term Definition
  description: An observability metric matrix computed via simulation. Perturbed target trajectories are propagated and their measurement outputs compared against the nominal 
  image: /logo.png
permalink: /en/glossary/dynamics/empirical-local-observability-gramian/
---

# Empirical Local Observability Gramian

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An observability metric matrix computed via simulation. Perturbed target trajectories are propagated and their measurement outputs compared against the nominal trajectory. The (i,j) element is assembled as P(x₀)_(i,j) = 1/(4ε²) ∫₀ᵀ [y⁺ⁱ(t) - y⁻ⁱ(t)]ᵀ[y⁺ʲ(t) - y⁻ⁱ(t)] dt. Requires only the ability to simulate the dynamics, making it suitable for complex systems like the three-body problem.

## Application Value

Empirical Local Observability Gramian plays an important role in orbit maneuver design, analysis, and transfer planning for cislunar missions.


## Related Concepts
- [Deflection Angle](/en/glossary/dynamics/deflection-angle/)
- [Time-Optimal Transfer](/en/glossary/dynamics/time-optimal-transfer/)
- [Summation Combination of Dual One-Way Ranging](/en/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [Map Projection](/en/glossary/fundamentals/map-projection/)


## References

- Observability metrics for space-based cislunar domain awareness (Fowler & Paley, 2023)
