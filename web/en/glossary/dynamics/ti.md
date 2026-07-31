---
title: Two-Impulse Maneuver (TI)
description: Transfer strategy between collinear libration point orbits using two impulsive velocity changes, solved via State Transition Matrix.
keywords: Two-Impulse Maneuver, TI, libration point orbit, orbital transfer, impulsive maneuver, state transition matrix
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Two-Impulse Maneuver (TI)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Two-Impulse Maneuver Explained | Term Definition"
  description: Transfer strategy between collinear libration point orbits using two impulsive velocity changes, solved via State Transition Matrix.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Two-Impulse Maneuver Explained | Term Definition"
  description: Transfer strategy between collinear libration point orbits using two impulsive velocity changes, solved via State Transition Matrix.
  image: /logo.png
permalink: /en/glossary/dynamics/ti/
---

# Two-Impulse Maneuver (TI)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Transfer strategy between collinear libration point orbits using two impulsive velocity changes, solved via State Transition Matrix.

## Application Value

The two-impulse maneuver is a fundamental strategy for transfer between libration point orbits in cislunar space. Transfer between Halo orbits, Lissajous orbits, and other collinear libration point orbits can be completed with only two impulses. The solution method is based on the State Transition Matrix (STM) to linearize relative dynamics, calculating the deviation between the target orbit state and the current state at the initial impulse, propagating through the STM to the target point, and then solving for the impulsive velocity increment that satisfies the terminal conditions. This method has high computational efficiency and is suitable for onboard guidance, but requires iterative solutions to compensate for linearization errors under high-precision requirements.

## Related Concepts

- [Multi-Impulse Maneuver (MI)](/en/glossary/dynamics/multi-impulse-maneuver/)
- [State Transition Matrix](/en/glossary/dynamics/state-transition-matrix/)
- [Collinear Libration Point Orbit](/en/glossary/orbits/collinear-libration-point-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- Cuevas del Valle et al. - 2022
