---
title: Linear Periodic Control
description: A control method that designs a periodic time-varying state feedback law K(k) for linear time-periodic systems (coefficient matrices satisfying A(t+T)=A(t))...
keywords: Linear Periodic Control, cislunar space, orbital mechanics, navigation, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Linear Periodic Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Linear Periodic Control Explained | Term Definition"
  description: A control method that designs a periodic time-varying state feedback law K(k) for linear time-periodic systems (coefficient matrices satisfying A(t+T)=A(t))...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Linear Periodic Control Explained | Term Definition"
  description: A control method that designs a periodic time-varying state feedback law K(k) for linear time-periodic systems (coefficient matrices satisfying A(t+T)=A(t))...
  image: /logo.png
permalink: /en/glossary/orbits/linear-periodic-control/
---

# Linear Periodic Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A control method that designs a periodic time-varying state feedback law K(k) for linear time-periodic systems (coefficient matrices satisfying A(t+T)=A(t)) to place closed-loop eigenvalues at desired locations. The core idea exploits the system periodicity: a time-invariant transformation converts the periodic system to a time-invariant one, after which classical pole placement designs the feedback gain. The paper applies this to Halo orbit station-keeping: because of the Halo orbit periodicity, the first-order approximation of the error dynamics is a linear periodic system, and discretization at the maneuver interval enables pole placement for orbit stabilization.

## Application Value

This concept has practical applications in cislunar space science and engineering. Related research supports the planning, implementation, and operations of cislunar missions, forming an integral part of the knowledge system in this field.

## Related Concepts

- [Low-Energy Lunar Transfer](/en/glossary/orbits/low-energy-transfer/)
- [Inner and Outer Transfer](/en/glossary/orbits/low-energy-transfer/)
- [Phasing Trajectory](/en/glossary/orbits/phasing-trajectory/)
- [Periapsis Distance](/en/glossary/orbits/periapsis-distance/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
