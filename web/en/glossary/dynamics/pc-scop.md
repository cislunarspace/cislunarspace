---
title: Phase-Constrained Sequential Cone Program
description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v
keywords: Phase-Constrained Sequential Cone Program, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Phase-Constrained Sequential Cone Program
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Phase-Constrained Sequential Cone Program Explained | Term Definition"
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Phase-Constrained Sequential Cone Program Explained | Term Definition"
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v
  image: /logo.png
permalink: /en/glossary/dynamics/pc-scop/
---

# Phase-Constrained Sequential Cone Program

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v objective and explicit constraints on state deviation and phase deviation, replacing the heuristic weight in differential correction. The NLP is solved sequentially via linearization, yielding a series of second-order cone programs.

## Application Value

This term has significant practical applications in cislunar mission planning and execution.

## Related Concepts

- [Hidden-Genes Genetic Algorithm, HGGA](/en/glossary/dynamics/hgga/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/vsds/)
- [Station-Keeping](/en/glossary/dynamics/sk/)
- [Target Point Method](/en/glossary/dynamics/tp/)

## References

- Shimane et al. 2025
