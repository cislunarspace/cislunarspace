---
title: Phase-Constrained Sequential Cone Program, PC-SCoP
description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm...
keywords: Phase-Constrained Sequential Cone Program, PC-SCoP, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Phase-Constrained Sequential Cone Program, PC-SCoP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Phase-Constrained Sequential Cone Program, PC-SCoP Explained | Term Definition
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Phase-Constrained Sequential Cone Program, PC-SCoP Explained | Term Definition
  description: An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm...
  image: /logo.png
permalink: /en/glossary/dynamics/PC-SCoP/
---

# Phase-Constrained Sequential Cone Program, PC-SCoP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization-based station-keeping algorithm for libration point orbits. It formulates x-axis crossing control as a nonlinear program with a two-norm delta-v objective and explicit constraints on state deviation and phase deviation, replacing the heuristic weight in differential correction. The NLP is solved sequentially via linearization, yielding a series of second-order cone programs.

## Application Value

Formulating libration point orbit station-keeping as a second-order cone program with explicit state and phase constraints, avoiding heuristic weight tuning, suitable for engineering application.

## Related Concepts

- [Prescribed Performance Control, PPC](/en/glossary/dynamics/PPC/)
- [Prescribed Performance Function, PPF](/en/glossary/dynamics/PPF/)
- [Powered Descent Guidance](/en/glossary/dynamics/PDG/)
- [Planar Bicircular Restricted Four-Body Problem](/en/glossary/dynamics/PBR4BP/)

## References

- Shimane et al. 2025.
