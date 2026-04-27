---
title: Clohessy-Wiltshire (CW) Equation
description: The Clohessy-Wiltshire equation is a set of linearized equations describing relative orbital motion between two spacecraft, widely used in rendezvous, formation flying, and proximity operations.
keywords: Clohessy-Wiltshire equation, CW equation, relative orbital motion, rendezvous, Hill equation, LVLH frame
author: CislunarSpace
date: 2026-04-27
lastUpdated: 2026-04-27
og:
  title: Clohessy-Wiltshire (CW) Equation | Relative Orbital Dynamics
  description: Linearized equations of relative orbital motion between two spacecraft, used in rendezvous and formation flying
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Clohessy-Wiltshire (CW) Equation | Relative Orbital Dynamics
  description: Linearized equations of relative orbital motion between two spacecraft, used in rendezvous and formation flying
  image: /logo.png
permalink: /en/glossary/clohessy-wiltshire/
---

# Clohessy-Wiltshire (CW) Equation

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Clohessy-Wiltshire (CW) equation, also known as the Hill-Clohessy-Wiltshire (HCW) equation, is a set of linearized dynamical equations describing the relative motion of a chaser spacecraft with respect to a target spacecraft in a near-circular reference orbit. Expressed in the target's Local Vertical Local Horizontal (LVLH) coordinate frame, the equations decompose relative motion into radial, along-track, and cross-track components.

The equations originate from Hill's (1878) work on Earth-Moon relative motion and were applied to spacecraft rendezvous by Clohessy and Wiltshire (1960), becoming a cornerstone of relative orbital dynamics.

## Mathematical Form

In the LVLH frame, with relative position $(x, y, z)$ and velocity $(\dot{x}, \dot{y}, \dot{z})$, and reference orbit mean motion $n = \sqrt{\mu / a^3}$, the CW equations in matrix form are:

$$
\begin{pmatrix} \ddot{x} \\ \ddot{y} \\ \ddot{z} \end{pmatrix} = \begin{pmatrix} 3n^2 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -n^2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} + \begin{pmatrix} 0 & 2n & 0 \\ -2n & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{pmatrix}
$$

Expanded scalar form:

- **Radial (x):** $\ddot{x} - 3n^2 x - 2n\dot{y} = 0$
- **Along-track (y):** $\ddot{y} + 2n\dot{x} = 0$
- **Cross-track (z):** $\ddot{z} + n^2 z = 0$

## Assumptions

The derivation of the CW equations relies on:

- **Near-circular reference orbit**: The target spacecraft is in a circular or near-circular orbit (eccentricity $e \approx 0$)
- **Small relative distance**: The separation between chaser and target is much smaller than the reference orbit radius ($\rho \ll a$)
- **Two-body gravity field**: Only the central body's gravity is considered; perturbations (drag, SRP, third-body) are neglected
- **Linearization**: The nonlinear relative equations are Taylor-expanded to first order, dropping higher-order terms

Due to the linearization, CW equations are accurate only when $\rho / a < 0.01$. For large-scale relative motion in cislunar space, more precise nonlinear models are required.

## Analytical Solution

The CW equations admit closed-form analytical solutions. Given initial state $(x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0)$:

$$
x(t) = \frac{\dot{x}_0}{n}\sin(nt) - \left(\frac{2\dot{y}_0}{n} + 3x_0\right)\cos(nt) + \left(\frac{2\dot{y}_0}{n} + 4x_0\right)
$$

$$
y(t) = \frac{2\dot{x}_0}{n}\cos(nt) + 2\left(\frac{2\dot{y}_0}{n} + 3x_0\right)\sin(nt) - (3\dot{y}_0 + 6nx_0)t + \left(y_0 - \frac{2\dot{x}_0}{n}\right)
$$

$$
z(t) = \frac{\dot{z}_0}{n}\sin(nt) + z_0\cos(nt)
$$

The cross-track motion (z) is an independent harmonic oscillation, decoupled from the in-plane motion. The in-plane motion (x-y plane) contains periodic terms and a secular drift term (proportional to $t$), meaning uncontrolled relative motion is generally unstable.

## Applications

CW equations are widely used in spacecraft engineering:

- **Rendezvous and docking**: Designing transfer trajectories from far-range approach to final docking, foundational for space station logistics
- **Formation flying**: Designing relative orbit configurations and control strategies for satellite formations
- **Proximity operations**: Relative motion planning for debris removal, on-orbit servicing
- **Spacecraft intention recognition**: Comparing observed relative motion data against CW-predicted trajectory patterns to infer noncooperative target motion intentions (e.g., approach, flyby, rendezvous)
- **Collision risk assessment**: Propagating covelliances to compute collision probabilities

## Relation to CR3BP

Both CW equations and the Circular Restricted Three-Body Problem (CR3BP) describe relative motion, but they apply in different regimes:

| Feature | CW Equations | CR3BP |
|---------|-------------|-------|
| Gravitational bodies | Two-body (central body + reference spacecraft) | Three-body (two primaries + massless particle) |
| Orbit type | Relative motion near a circular orbit | Periodic/quasi-periodic orbits near libration points |
| Linearization | Yes | Nonlinear (can be linearized near equilibrium points) |
| Typical applications | Rendezvous, formation flying | DRO, NRHO, Halo orbit design |

In cislunar missions, CW equations are used for relative motion analysis near space stations (e.g., Tianzhou cargo spacecraft rendezvous with the space station), while CR3BP is used for larger-scale orbit design (e.g., DRO formations, NRHO missions).

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Spacecraft Intention Recognition](/en/glossary/spacecraft-intention-recognition/)
- [Noncooperative Target](/en/glossary/noncooperative-target/)

## References

- Clohessy W H, Wiltshire R S. Terminal guidance system for satellite rendezvous[J]. Journal of the Aerospace Sciences, 1960, 27(9): 653-658.
- Hill G W. Researches in the lunar theory[J]. American Journal of Mathematics, 1878, 1(1): 5-26.
- Curtis H D. Orbital Mechanics for Engineering Students[M]. 4th ed. Butterworth-Heinemann, 2020.
- Jing H, Sun Q, Dang Z, Wang H. Intention Recognition of Space Noncooperative Targets Using Large Language Models. Space Sci. Technol. 2025;5:0271.
