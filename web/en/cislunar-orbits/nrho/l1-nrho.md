---
title: L1 Near-Rectilinear Halo Orbit
description: Geometric characteristics, dynamical constraints, and typical mission applications of the Earth-Moon L1 Near-Rectilinear Halo Orbit (NRHO).
keywords: L1 NRHO, L1 halo orbit, Earth-Moon L1 point, halo orbit design
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/l1-nrho/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)
>
> Source: [https://cislunarspace.cn](https://cislunarspace.cn)

# L1 Near-Rectilinear Halo Orbit

## Position and Geometry

The Earth-Moon L1 libration point lies on the Earth-Moon line at approximately 84% of the Earth-Moon distance from Earth (about 326,400 km). At this point, the gravitational pull of Earth and the Moon balance each other, allowing a spacecraft to maintain relative rest or oscillate slightly in the vicinity.

The L1 NRHO exhibits a near-rectilinear geometry in the rotating frame: the spacecraft traverses a path that is nearly straight but slightly curved, moving back and forth near the L1 point. Unlike standard circular or elliptical orbits, the NRHO trajectory's projection in the $x$-$z$ plane resembles an elongated "figure-8" or crescent shape.

## Dynamical Characteristics

The core dynamical constraint of L1 NRHO arises from the conservation of the Jacobi constant in the Circular Restricted Three-Body Problem (CR3BP):

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2}$$

where $\mu = 0.0121505853$ is the Earth-Moon mass ratio parameter.

The quasi-periodicity of NRHO stems from the intersection of stable and unstable manifolds near the L1 point. In the linearized system, perturbations along the stable manifold direction decay exponentially; however, in a real ephemeris model, perturbations (such as solar gravity and the Moon's non-spherical terms) cause the orbit to gradually drift, requiring periodic orbit maintenance maneuvers.

Another dynamical characteristic of L1 NRHO is the **frozen inclination**: in the CR3BP model, there exists a special inclination value (corresponding to the frozen-dipole condition) that reduces the orbit's sensitivity to certain perturbations.

## Design Constraints

NRHO orbit design must satisfy the following key constraints:

1. **Amplitude constraint**: The NRHO amplitude ratio $A_z/A_x$ must exceed a certain threshold (typically $A_z/A_x > 0.5$) to maintain the near-rectilinear characteristic
2. **Jacobi constant**: The $C_J$ value must lie within the range where stable manifolds exist; too high or too low a value will lead to orbital escape
3. **Lunar collision avoidance**: The orbit design must ensure the spacecraft does not penetrate below the lunar surface

A typical L1 NRHO has a period of approximately 6.5-8 Earth days, with a lateral amplitude $A_x$ reaching 3,000-4,000 km.

## Representative Missions

1. **Early missions**: Although ISE-3 (1978) was not strictly an NRHO, its orbital design already embodied the halo orbit concept near L1; the ACE mission (1997) also operated in an L1 orbit of this type
2. **Gateway missions**: NASA's selected Gateway NRHO is located near the L1 point with $A_x \approx 3100$ km and a period of approximately 6.5 days, supporting the Artemis lunar surface missions

## Simulation Experiment

You can set L1 NRHO initial conditions in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) to observe its orbital morphology in the rotating frame.
