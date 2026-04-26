---
title: DRO (Distant Retrograde Orbit)
description: "Overview of DRO (Distant Retrograde Orbit): definition, dynamical background, comparison with NRHO, and primary mission applications."
keywords: DRO, Distant Retrograde Orbit, CR3BP, cislunar space
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/dro/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: [CislunarSpace](https://cislunarspace.cn)

# DRO (Distant Retrograde Orbit)

## Definition

DRO (Distant Retrograde Orbit) is a special class of periodic orbit in the Circular Restricted Three-Body Problem (CR3BP). In the Earth-Moon rotating frame, DROs exhibit retrograde characteristics — meaning the spacecraft's orbital motion is opposite to the rotation direction of the Earth-Moon line ($\dot{\theta} < 0$). However, the orbital radius of a DRO is much larger than the distance of the L1/L2 Lagrange points, maintaining a significant dynamical distance within the Earth-Moon system.

The "Distant" in DRO refers to the fact that its orbital radius typically lies in the range of 0.5 to 2 times the Earth-Moon distance, substantially larger than the Near-Rectilinear Halo Orbit (NRHO) which is tightly bound to the L1/L2 regions.

## Dynamical Background

The dynamical constraints of DRO are also governed by the Jacobi constant $C_J$ in the CR3BP:

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2}$$

Unlike NRHOs, DROs correspond to $C_J$ values typically greater than 3, placing them in a relatively stable region of the CR3BP phase space. The retrograde nature (interacting with the Coriolis effect) gives DROs relatively high natural stability within the CR3BP model.

In the Earth-Moon rotating frame, a DRO's orbital morphology is approximately elliptical, with periods typically ranging from several days to several weeks, depending on the semi-major axis and eccentricity.

## Comparison with NRHO

| Property | DRO | NRHO |
|----------|-----|------|
| Orbital distance | Large (0.5-2× Earth-Moon distance) | Near L1/L2 points |
| Retrograde/prograde | Retrograde ($\dot{\theta} < 0$) | Near-rectilinear (mixed) |
| Intrinsic stability | Higher | Moderate |
| Maintenance ΔV | 5-20 m/s/yr | 30-80 m/s/yr |
| Lunar surface accessibility | Poor | Good |
| Communication coverage | Moderate | Good (L2 NRHO) |
| Flight heritage | Verified by CAPSTONE | First use by Gateway |

## Orbit Family Classification

DROs can also be classified by their libration point into L1 DRO and L2 DRO families:
- **L1 DRO**: Located inside the L1 point (toward Earth), with a smaller orbital radius
- **L2 DRO**: Located outside the L2 point (away from Earth), with a larger orbital radius

Additionally, DROs exist in two north-south symmetric families, located on the northern and southern sides of the Earth-Moon rotating frame respectively.

## Mission Applications

The primary engineering applications of DROs include:
1. **Cislunar space staging**: Serving as a fuel-efficient waypoint for deep space missions
2. **Contingency return trajectories**: A low ΔV corridor from DRO to atmospheric reentry
3. **Relay and communications**: For missions with high field-of-view coverage requirements
4. **Formation flying and constellations**: Multi-spacecraft cooperative operations

## Simulation Experiments

Explore the orbital morphology of DROs interactively in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/), and understand its retrograde characteristics in the rotating frame.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [NRHO (Near-Rectilinear Halo Orbit)](/en/cislunar-orbits/nrho/)
- [Distant Retrograde Orbit (DRO) Glossary Entry](/en/glossary/orbits/dro/)
