---
title: Recursive Feasibility
description: "A theoretical property of model predictive control: if the optimization problem is feasible at the current time step, it remains feasible at the next. Recursive"
keywords: Recursive Feasibility
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Recursive Feasibility
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Recursive Feasibility Explained | Term Definition
  description: "A theoretical property of model predictive control: if the optimization problem is feasible at the current time step, it remains feasible at the next. Recursive"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Recursive Feasibility Explained | Term Definition
  description: "A theoretical property of model predictive control: if the optimization problem is feasible at the current time step, it remains feasible at the next. Recursive"
  image: /logo.png
permalink: /en/glossary/dynamics/recursive-feasibility/
---

# Recursive Feasibility

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A theoretical property of model predictive control: if the optimization problem is feasible at the current time step, it remains feasible at the next. Recursive feasibility guarantees the controller never encounters an infeasible problem during operation. For NRHO station-keeping, this is ensured by the controllability of the linearized system about the reference orbit and the propulsion system's maximum thrust being significantly larger than what station-keeping requires.

## Application Value

This concept plays an important role in cislunar space mission design and orbital dynamics analysis.

## Related Concepts

- [Control Parametrization](/en/glossary/dynamics/control-parametrization/)
- [Thruster Modulator](/en/glossary/dynamics/thruster-modulator/)
- [Particle Swarm Optimizer](/en/glossary/dynamics/particle-swarm-optimizer/)
- [Impulse Interval](/en/glossary/dynamics/impulse-interval/)


## References

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
