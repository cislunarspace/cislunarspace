---
title: Perilune Database
description: A trajectory segment database constructed through Monte Carlo trajectory shooting, storing the spacecraft state vectors at perilune arrival, velocity changes...
keywords: Perilune Database
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Perilune Database
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Perilune Database Explained | Term Definition"
  description: A trajectory segment database constructed through Monte Carlo trajectory shooting, storing the spacecraft state vectors at perilune arrival, velocity changes...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Perilune Database Explained | Term Definition"
  description: A trajectory segment database constructed through Monte Carlo trajectory shooting, storing the spacecraft state vectors at perilune arrival, velocity changes...
  image: /logo.png
permalink: /en/glossary/dynamics/perilune-database/
---

# Perilune Database

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory segment database constructed through Monte Carlo trajectory shooting, storing the spacecraft state vectors at perilune arrival, velocity changes before and after impulse application, and characteristic information such as perilune altitude and velocity direction. Database entries are matched by conditions including perilune altitude, velocity direction, and distance from the Earth-Moon orbital plane, serving as the core data source for trajectory patching.

## Application Value

The Perilune Database stores extensive Monte Carlo trajectory shooting results. During spacecraft trajectory planning, state vectors under matching conditions can be directly queried to quickly obtain key parameters such as perilune altitude and velocity direction, enabling efficient trajectory segment patching.

## Related Concepts

- [Asymptotic Solution](/en/glossary/dynamics/asymptotic-solution/)
- [Non-axisymmetric Satellite](/en/glossary/dynamics/non-axisymmetric-satellite/)
- [Libration Point Orbit Cataloging](/en/glossary/orbits/libration-point-periodic-orbit/)
- [Floquet Modal Method](/en/glossary/dynamics/floquet-modal-method/)

## References

- Peng et al. 2024, AIAA Journal of Spacecraft and Rockets, doi:10.2514/1.A35623
