---
title: DRO Family Classification
description: L1/L2 classification, period-amplitude characteristics, bifurcation relations, and north-south symmetry of Distant Retrograde Orbits.
keywords: DRO classification, L1 DRO, L2 DRO, north-south symmetry, bifurcation, Lyapunov orbit
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/dro/family-classification/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: https://cislunarspace.cn

# DRO Family Classification

## L1 DRO vs L2 DRO

The DRO family can be divided into two categories based on the libration point they orbit:

**L1 DRO**: The orbit center is near the L1 point, with an x-coordinate in the rotating frame of approximately $x_{L1} \approx 0.836$ (dimensionless). L1 DROs typically have smaller orbital radii, ranging from about 0.5 to 0.8 times the Earth-Moon distance from the Earth-Moon barycenter.

**L2 DRO**: The orbit center is near the L2 point, with an x-coordinate of approximately $x_{L2} \approx 1.166$. L2 DROs generally have larger orbital radii, ranging from 0.8 to 2.0 times the Earth-Moon distance.

| Property | L1 DRO | L2 DRO |
|----------|--------|--------|
| Libration point position (dimensionless x) | $x \approx 0.836$ | $x \approx 1.166$ |
| Orbital radius range | 0.5-0.8 Earth-Moon distances | 0.8-2.0 Earth-Moon distances |
| Typical period | 8-15 days | 12-25 days |
| One-way Earth communication delay | ~1.0 s | ~1.5-2.0 s |
| Lunar farside coverage | Poor | Poor |

## Period and Amplitude

There is a one-to-one correspondence between DRO period and the Jacobi constant $C_J$. Typical DRO parameters:

| Parameter | L1 DRO | L2 DRO |
|----------|--------|--------|
| Period range | 8-15 days | 12-25 days |
| Semi-major axis $A_x$ | 20,000-50,000 km | 50,000-100,000 km |
| Amplitude $A_z$ | 5,000-20,000 km | 10,000-40,000 km |
| Jacobi constant $C_J$ | 3.03-3.08 | 3.00-3.06 |

The relationship between period and $C_J$ can be approximated as $T \propto \sqrt{C_J - C_J^{crit}}$, where $C_J^{crit} \approx 3.0$ is the critical Jacobi constant for the existence of the DRO family in the CR3BP.

## Bifurcation Diagram

There exists a rich **bifurcation** relationship between DROs and L1/L2 Lyapunov periodic orbits. Specifically:

- When $C_J$ gradually increases from low values, DRO orbits progressively "shrink" and eventually merge with L1/L2 Lyapunov orbits at the bifurcation point
- Conversely, when $C_J$ decreases from high values, Lyapunov orbits transform into DROs through bifurcation

This bifurcation relationship can be identified through changes in Floquet multipliers: when Floquet multipliers cross the unit circle ($|\lambda| = 1$) as real numbers, a bifurcation occurs.

On the bifurcation diagram, L1 DRO ↔ L1 Lyapunov ↔ L2 Lyapunov ↔ L2 DRO form a continuous energy evolution chain.

## North-South Symmetry

The rotating frame of the CR3BP possesses reflection symmetry about the $x$-$y$ plane ($z \to -z$ leaves the equations of motion unchanged). This symmetry divides the DRO family into **Northern** and **Southern** families, which are mirror images of each other.

For a given L1/L2 DRO, its northern and southern families share identical dynamical properties (period, $C_J$, Floquet multipliers), but differ in their spatial orientation. Mission design can select the northern or southern family based on lighting conditions (solar angle) and communication geometry.

## Orbit Family Illustration

![DRO orbit schematic](/glossary/Figures/DRO/质心旋转坐标系及DRO轨道示意图.png)

The figure above shows the morphology of DRO orbits in the Earth-Moon rotating frame, clearly demonstrating their retrograde characteristic (motion opposite to the rotating frame).

## Simulation Experiment

You can set up different $C_J$ values for L1/L2 DRO initial conditions in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) to observe how the orbit family evolves with parameters.
