---
title: Backstepping
description: A recursive nonlinear control design method. Starting from the innermost subsystem, it designs virtual control inputs and constructs Lyapunov functions layer by
keywords: Backstepping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Backstepping
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Backstepping Explained | Term Definition
  description: A recursive nonlinear control design method. Starting from the innermost subsystem, it designs virtual control inputs and constructs Lyapunov functions layer by
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Backstepping Explained | Term Definition
  description: A recursive nonlinear control design method. Starting from the innermost subsystem, it designs virtual control inputs and constructs Lyapunov functions layer by
  image: /logo.png
permalink: /en/glossary/dynamics/backstepping/
---

# Backstepping

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A recursive nonlinear control design method. Starting from the innermost subsystem, it designs virtual control inputs and constructs Lyapunov functions layer by layer, ultimately deriving the actual system control law. In station-keeping, combining backstepping with the linear quadratic regulator avoids repeatedly solving the Riccati equation and reduces computational burden.

## Application Value

This concept plays a key role in trajectory transfer design, helping evaluate transfer costs and flight time to provide quantitative basis for mission trade studies. Combined with global search algorithms, multiple solution families and Pareto frontiers can be identified to guide orbital design decisions.


## Related Concepts

- [Differential Correction](/glossary/fundamentals/differential-correction/)
- [Indirect Methods](/glossary/dynamics/indirect-methods/)
- [Resonance Condition](/glossary/dynamics/resonance-condition/)
- [Low Thrust Equilibrium Point](/glossary/dynamics/low-thrust-equilibrium-point/)


## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints