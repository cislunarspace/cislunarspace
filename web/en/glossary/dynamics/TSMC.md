---
title: Terminal Sliding Mode Control, TSMC
description: A variable structure control method incorporating nonlinear terms into the conventional sliding surface.
keywords: Terminal Sliding Mode Control, TSMC, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Terminal Sliding Mode Control, TSMC
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Terminal Sliding Mode Control, TSMC Explained | Term Definition
  description: A variable structure control method incorporating nonlinear terms into the conventional sliding surface.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Terminal Sliding Mode Control, TSMC Explained | Term Definition
  description: A variable structure control method incorporating nonlinear terms into the conventional sliding surface.
  image: /logo.png
permalink: /en/glossary/dynamics/TSMC/
---

# Terminal Sliding Mode Control, TSMC

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A variable structure control method incorporating nonlinear terms into the conventional sliding surface. The sliding surface s = ė + c·sig^α(e) with α ∈ (0,1) ensures the system state reaches the equilibrium in finite time rather than asymptotically. It provides finite-time convergence and strong robustness against matched uncertainties, but may exhibit chattering near equilibrium that wastes energy.

## Application Value

It provides finite-time convergence characteristics, suitable for orbital maneuver missions with strict convergence speed requirements. Its inherent robustness to matched uncertainties makes it appropriate for Mars landing and cislunar transfer scenarios.

## Related Concepts

- [Prescribed Performance Control, PPC](/en/glossary/dynamics/PPC/)
- [Theory of Functional Connections, TFC](/en/glossary/dynamics/TFC/)
- [Time of Flight, ToF](/en/glossary/dynamics/ToF/)
- [Model Predictive Guidance and Control, MPC](/en/glossary/dynamics/MPC/)

## References

- https://doi.org/10.1177/0954410020940892.
