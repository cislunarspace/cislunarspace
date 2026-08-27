---
title: L1 Near-Rectilinear Halo Orbit
description: Geometric characteristics, dynamical constraints, and typical mission applications of the Earth-Moon L1 Near-Rectilinear Halo Orbit (NRHO).
keywords: L1 NRHO, L1 halo orbit, Earth-Moon L1 point, halo orbit design
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/nrho/l1-nrho/
wechatShare:
  title: "Cislunar Space Guide | L1 Near-Rectilinear Halo Orbit"
  desc: "Geometric characteristics, dynamical constraints, and typical mission applications of the Earth-Moon L1 Near-Rectilinear Halo Orbit (NRHO)."
  image: "/logo.png"
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)
>
> Source: [https://cislunarspace.cn](https://cislunarspace.cn)

# L1 Near-Rectilinear Halo Orbit

## Position and Geometry

The Earth-Moon L1 libration point lies on the Earth-Moon line, about 15% of the Earth-Moon distance from the Moon — roughly 326,400 km from Earth (about 85% of the Earth-Moon distance). At this point, Earth's gravity, lunar gravity, and the centrifugal force of the rotating frame balance, allowing a spacecraft to maintain relative rest or oscillate slightly in the vicinity.

The L1 NRHO exhibits a near-rectilinear geometry in the rotating frame: the spacecraft traverses a path that is nearly straight but slightly curved, moving back and forth near the L1 point. Unlike standard circular or elliptical orbits, the NRHO trajectory projects onto a highly elongated closed curve that stands nearly perpendicular to the Earth–Moon line.

## Dynamical Characteristics

The core dynamical constraint of L1 NRHO arises from the conservation of the Jacobi constant in the Circular Restricted Three-Body Problem (CR3BP):

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2}$$

where $\mu = 0.0121505853$ is the Earth-Moon mass ratio parameter.

The quasi-periodicity of NRHO stems from the intersection of stable and unstable manifolds near the L1 point. In the linearized system, perturbations along the stable manifold direction decay exponentially; however, in a real ephemeris model, perturbations (such as solar gravity and the Moon's non-spherical terms) cause the orbit to gradually drift, requiring periodic orbit maintenance maneuvers.

Another notable feature of L1 NRHOs is their **near-polar geometry**: southern-family members sweep over the lunar north polar region and remain visible to the polar areas for long stretches — one reason Gateway-class missions favor this orbit class.

## Design Constraints

NRHO orbit design must satisfy the following key constraints:

1. **Amplitude constraint**: The NRHO amplitude ratio $A_z/A_x$ must exceed a certain threshold (typically $A_z/A_x > 0.5$) to maintain the near-rectilinear characteristic
2. **Jacobi constant**: The $C_J$ value must lie within the range where stable manifolds exist; too high or too low a value will lead to orbital escape
3. **Lunar collision avoidance**: The orbit design must ensure the spacecraft does not penetrate below the lunar surface

A typical L1 NRHO has a period of approximately 6.5–10 days (varying across family members), with perilune altitudes typically ranging from a few hundred to several thousand kilometers.

## Representative Missions

1. **Early missions**: Although ISE-3 (1978) was not strictly an NRHO, its orbital design already embodied the halo orbit concept near the libration points; ACE (1997) applied the same concept to a Sun–Earth L1 halo-type orbit
2. **Gateway missions**: NASA baselined Gateway on an orbit near the **L2** point (an L2 southern 9:2 synodic-resonant NRHO with a ≈ 6.56-day period); L1 NRHOs were systematically compared as an alternative family during planning

## Simulation Experiment
