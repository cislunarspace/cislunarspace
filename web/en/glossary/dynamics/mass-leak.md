---
title: Mass Leak
description: A technique of introducing a tiny mass flow rate into the equations of motion with thrust input, to avoid singularities when mass approaches zero or when...
keywords: Mass Leak
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Mass Leak
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Mass Leak Explained | Term Definition"
  description: A technique of introducing a tiny mass flow rate into the equations of motion with thrust input, to avoid singularities when mass approaches zero or when...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Mass Leak Explained | Term Definition"
  description: A technique of introducing a tiny mass flow rate into the equations of motion with thrust input, to avoid singularities when mass approaches zero or when...
  image: /logo.png
permalink: /en/glossary/dynamics/mass-leak/
---

# Mass Leak

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A technique of introducing a tiny mass flow rate into the equations of motion with thrust input, to avoid singularities when mass approaches zero or when thrust direction computation becomes ill-conditioned during optimization. In low-thrust trajectory optimization, mass remains constant during coast arcs, but this discontinuity can cause loss of gradient information or numerical instability. Mass leak allows infinitesimal mass depletion even during zero-thrust phases, keeping the dynamics smooth everywhere so the optimizer can stably search for optimal solutions.

## Application Value

This concept is essential for understanding motion characteristics in orbital design and control, and plays a vital role in mission success.

## Related Concepts

- [Minimum Norm Solution](/en/glossary/dynamics/minimum-norm-solution/)
- [Rigid Body Dynamics](/en/glossary/dynamics/rigid-body-dynamics/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/variable-size-design-space-vsds/)
- [Analytical Gradient](/en/glossary/dynamics/analytical-gradient/)

## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming