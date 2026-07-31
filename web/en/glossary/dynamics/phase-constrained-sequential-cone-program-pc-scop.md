---
title: Phase-Constrained Sequential Cone Program, PC-SCoP
description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delt...
keywords: Phase-Constrained Sequential Cone Program, PC-SCoP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Phase-Constrained Sequential Cone Program, PC-SCoP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Phase-Constrained Sequential Cone Program, PC-SCoP Explained | Term Definition"
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delt...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Phase-Constrained Sequential Cone Program, PC-SCoP Explained | Term Definition"
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delt...
  image: /logo.png
permalink: /en/glossary/dynamics/phase-constrained-sequential-cone-program-pc-scop/
---

# Phase-Constrained Sequential Cone Program, PC-SCoP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v objective and explicit constraints on state deviation and phase deviation, replacing the heuristic weight in differential correction. The NLP is solved sequentially via linearization, yielding a series of second-order cone programs.

## Application Value

This term在cislunar space missions中has important application value. In orbit design, it can be used foroptimizing transfer trajectories, reducing mission fuel consumption. In attitude control and dynamics analysis, it helps understandthe motion characteristics of spacecraft in complex gravitational fields, providing theoretical support for mission planning. In navigation and orbit determination, methods based on this termcan improve orbit prediction accuracy, supporting the development of autonomous navigation algorithms. 


## Related Concepts

- [Periodicity Conditions in Relative Orbital Motion](/en/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [Helix Formation](/en/glossary/dynamics/helix-formation/)
- [Energy Dissipation Method](/en/glossary/dynamics/energy-dissipation-method/)
- [Unstable Manifold](/en/glossary/dynamics/unstable-manifold/)


## References

- Shimane et al. 2025

