---
title: Shooting Method
description: The shooting method converts a two-point boundary value problem into an initial value problem solved by iterative correction, widely used in orbit design and periodic orbit generation.
keywords: Shooting Method, Boundary Value Problem, Initial Value Problem, Orbit Design, Differential Correction
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/background/math/shooting-method/
---

# Shooting Method

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Shooting Method is a numerical technique that transforms a Two-Point Boundary Value Problem (TPBVP) into an initial value problem solved by iterative correction. Its core idea is: guess the initial state, integrate to the terminal constraint, compute the deviation, correct the initial guess, and iterate until convergence.

## Principles

In orbital mechanics, the shooting method is commonly used to generate periodic orbits. Taking Halo orbits as an example, the procedure is:

1. Select an initial guess $\mathbf{x}_0 = (x_0, 0, z_0, 0, \dot{y}_0, 0)$ on a reference manifold (e.g., the $xOz$ plane)
2. Integrate until the orbit crosses the periodic constraint surface (e.g., the $xOz$ plane again)
3. Compute the state deviation $\Delta \mathbf{x}_f = \mathbf{x}_f - \mathbf{x}_0$
4. Linearize using the State Transition Matrix (STM) $\mathbf{\Phi}$: $\Delta \mathbf{x}_f = \mathbf{\Phi} \cdot \Delta \mathbf{x}_0$
5. Correct the initial guess iteratively until the periodic condition is satisfied

### Deviation Correction

The key in shooting is selecting the shooting variables and targeting equations. For Halo orbits, $z_0$ and $\dot{y}_0$ are typically chosen as shooting variables, with targeting equations $y=0$ and $z=0$ at the crossing surface.

## Applications in Cislunar Space

The shooting method is widely used in cislunar orbit design:

- **NRHO initial condition generation**: Zimovan (2017) systematically summarized single-shooting and multi-shooting strategies for Earth-Moon L1/L2 NRHO
- **DRO orbit generation**: Exploiting $x$-axis symmetry, initial points are selected on the $x$-axis only, with $\dot{y}_0$ and period $T$ as shooting variables
- **Halo orbit family continuation**: Starting from planar Lyapunov orbits, arc-length continuation gradually increases $A_z$ amplitude, with shooting at each step

The shooting method is typically combined with **arc-length continuation** and **differential correction** to improve convergence and global coverage.

## Related Concepts

- [Arc-length Continuation](../continuation/)
- [Symplectic Integrator](./symplectic-integrator/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Liu X, Baoyin H, Ma X. Design of optimal lunar landing trajectories with plane change[J]. Advances in Space Research, 2022.
