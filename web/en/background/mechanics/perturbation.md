---
title: Perturbation Theory
description: Perturbation theory studies the motion of celestial bodies under perturbations (third-body gravity, atmospheric drag, solar radiation pressure, etc.) on top of the primary body's gravitational attraction.
keywords: Perturbation Theory, Celestial Mechanics, Third-body Gravity, Atmospheric Drag, Solar Radiation Pressure
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/background/mechanics/perturbation/
---

# Perturbation Theory

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Perturbation theory studies the motion of celestial bodies under perturbations on top of the primary body's gravitational attraction. In spacecraft orbital dynamics, perturbation theory analyzes the effects of various perturbing forces — beyond the central body's gravity — on orbits.

## Principles

Perturbation theory decomposes the forces acting on a body as:

$$\mathbf{F} = \mathbf{F}_0 + \mathbf{F}_p$$

where $\mathbf{F}_0$ is the primary gravitational force (analytically solvable) and $\mathbf{F}_p$ is the perturbing force (typically much smaller than the primary).

### Small Parameter Expansion

Introducing a small parameter $\varepsilon$, the equations of motion are written as:

$$\ddot{\mathbf{r}} = \mathbf{F}_0(\mathbf{r}) + \varepsilon \mathbf{F}_p(\mathbf{r}, \dot{\mathbf{r}}, t)$$

Expanding the solution in a Taylor series about $\varepsilon = 0$ yields successive approximations.

### Common Perturbative Forces

| Perturbation | Source | Magnitude |
|:---|:---|:---|
| J2 term | Earth's non-spherical gravity | $10^{-3}$ (LEO) |
| Third-body gravity | Moon, Sun | $10^{-4}$–$10^{-8}$ |
| Atmospheric drag | Earth's atmosphere | $10^{-7}$–$10^{-10}$ (LEO) |
| Solar radiation pressure | Solar photons | $10^{-7}$–$10^{-9}$ |
| Tidal forces | Body deformations | $10^{-10}$–$10^{-12}$ |

## Applications in Cislunar Space

- **J2 perturbation**: Earth's non-spherical gravity (J2 term) significantly affects LEO orbit lifetime and right ascension of ascending node drift — critical for LEO orbit design
- **Third-body gravity**: Major impact on long-term stability of Earth-Moon transfer orbits and L1/L2 orbits; third-body perturbation is a key factor in NRHO long-term stability
- **Lunar gravity non-sphericity**: Lunar J2 term affects lunar satellite orbit lifetime and orbital plane evolution
- **Resonance effects**: gravitational perturbations from asteroid belt objects on probes can be exploited for low-energy transfer trajectory design

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [Hill Three-Body Problem](./hill-three-body/)

## References

- Vallado D A. Fundamentals of astrodynamics and applications[M]. Springer, 2007.
- Marchand B G, Howell K C. Asymptotic representation of the motion of chaotic quasi-periodic orbits about libration points[J]. Advances in Space Research, 2022.
