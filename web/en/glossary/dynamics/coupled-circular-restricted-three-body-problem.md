---
title: Coupled Circular Restricted Three-Body Problem
description: A trajectory modeling approach that patches two Circular Restricted Three-Body Problems together via coordinate transformation. Typically the Sun-Earth CR3BP mo
keywords: Coupled Circular Restricted Three-Body Problem
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Coupled Circular Restricted Three-Body Problem
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Coupled Circular Restricted Three-Body Problem Explained | Term Definition
  description: A trajectory modeling approach that patches two Circular Restricted Three-Body Problems together via coordinate transformation. Typically the Sun-Earth CR3BP mo
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Coupled Circular Restricted Three-Body Problem Explained | Term Definition
  description: A trajectory modeling approach that patches two Circular Restricted Three-Body Problems together via coordinate transformation. Typically the Sun-Earth CR3BP mo
  image: /logo.png
permalink: /en/glossary/dynamics/coupled-circular-restricted-three-body-problem/
---

# Coupled Circular Restricted Three-Body Problem

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory modeling approach that patches two Circular Restricted Three-Body Problems together via coordinate transformation. Typically the Sun-Earth CR3BP models the departure leg from a Sun-Earth libration point orbit, while the Earth-Moon CR3BP models the approach to the Moon. The two segments are connected at a specified point (usually the Earth-Moon barycenter location in the Sun-Earth synodic frame) by converting positions and velocities between the two rotating frames. This piecewise three-body approximation captures the essential dynamics of the full four-body problem at far lower computational cost.

## Application Value

This concept plays a key role in trajectory transfer design, helping evaluate transfer costs and flight time to provide quantitative basis for mission trade studies. Combined with global search algorithms, multiple solution families and Pareto frontiers can be identified to guide orbital design decisions.


## Related Concepts

- [Differential Correction](/glossary/fundamentals/differential-correction/)
- [Indirect Methods](/glossary/dynamics/indirect-methods/)
- [Resonance Condition](/glossary/dynamics/resonance-condition/)
- [Low Thrust Equilibrium Point](/glossary/dynamics/low-thrust-equilibrium-point/)


## References

- Van Der Weg and Vasile, 2016, Sun-Earth L1 and L2 to Moon Transfers Exploiting Natural Dynamics