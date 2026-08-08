---
title: Control Acceleration
description: The acceleration produced per unit mass under continuous thrust, serving as the control input for orbit maintenance. In the paper, the control input vector U=[U
keywords: Control Acceleration
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Control Acceleration
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Control Acceleration Explained | Term Definition"
  description: The acceleration produced per unit mass under continuous thrust, serving as the control input for orbit maintenance. In the paper, the control input vector U=[U
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Control Acceleration Explained | Term Definition"
  description: The acceleration produced per unit mass under continuous thrust, serving as the control input for orbit maintenance. In the paper, the control input vector U=[U
  image: /logo.png
permalink: /en/glossary/orbits/control-acceleration/
---

# Control Acceleration

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The acceleration produced per unit mass under continuous thrust, serving as the control input for orbit maintenance. In the paper, the control input vector U=[U_x, U_y, U_z]^T represents three-axis control accelerations, applied to the velocity components of the dynamics through the input matrix B=[0_{3x3}; I_{3x3}]^T. Simulation results show the maximum control acceleration occurs at the initial time, on the order of 10^{-7} m/s^2 per axis, converging toward zero after stabilization.

## Application Value

This class of orbits has significant application value in lunar mission site selection and space station deployment, providing spacecraft with a stable dwelling environment and favorable mission geometry.

## Related Concepts

- [Synodic Resonant Periodic Orbit](/en/glossary/orbits/resonant-orbit-family/)
- [Halo Orbit Amplitude](/en/glossary/orbits/halo-orbit/)
- Near Rectilinear Halo Orbit
- [Orbital Stability Index](/en/glossary/orbits/orbital-stability-index/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略
