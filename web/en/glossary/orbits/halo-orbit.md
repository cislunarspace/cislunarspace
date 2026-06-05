---
title: Halo Orbit
description: Detailed explanation of Halo orbit definition, dynamic characteristics, three-dimensional periodic motion around libration points, and applications in cislunar missions
keywords: Halo Orbit, libration point, L1 point, L2 point, three-body problem, cislunar space, Gateway, orbital design
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Halo Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Halo Orbit Explained | Cislunar Space
  description: Detailed explanation of Halo orbit definition, dynamic characteristics, three-dimensional periodic motion around libration points, and applications in cislunar missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Halo Orbit Explained | Cislunar Space
  description: Detailed explanation of Halo orbit definition, dynamic characteristics, three-dimensional periodic motion around libration points, and applications in cislunar missions
  image: /logo.png
permalink: /en/glossary/orbits/halo-orbit/
---

# Halo Orbit

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Halo orbit is a **three-dimensional periodic orbit surrounding a libration point**, appearing as a halo or ring shape in the synodic reference frame. Halo orbits are a class of exact periodic solutions in the Circular Restricted Three-Body Problem (CR3BP), existing primarily near the L1, L2, and L3 libration points of the Earth-Moon system. Among these, Halo orbits near the Earth-Moon L2 point have the most extensive applications in current deep-space exploration.

## Key Elements

### Dynamic Characteristics of Halo Orbits

Halo orbits have the following characteristics in the CR3BP framework:

- **Three-dimensional motion**: Unlike planar Lyapunov orbits, Halo orbits have large-amplitude oscillations in the $xOy$ plane combined with significant periodic motion in the $z$ direction, forming ring-shaped trajectories in three-dimensional space
- **Periodicity**: Halo orbits are strictly periodic, precisely closing in the synodic reference frame
- **Symmetry**: Standard Halo orbits are symmetric about the $xOz$ plane; when the orbit crosses this plane, the $x$ and $z$ velocity components are zero
- **Amplitude parameterization**: Halo orbit families are described by the amplitude parameter $A_z$ (maximum displacement in the $z$ direction); larger amplitude means the orbit is farther from the libration point

The relationship between Halo orbit period $T$ and amplitude can be approximately expressed as:

$$T \approx T_0 + \alpha A_z^2$$

where $T_0$ is the natural period of linearized motion near the libration point and $\alpha$ is a coefficient related to system parameters.

### Linear Approximation of Halo Orbits

Near the libration point, the CR3BP equations of motion can be linearized. For collinear libration points (L1, L2, L3), the linearized motion has two real eigenvalues in the plane (corresponding to stable/unstable manifolds) and a pair of conjugate imaginary eigenvalues (corresponding to periodic oscillation), with another pair of conjugate imaginary eigenvalues in the $z$ direction. The existence condition for Halo orbits is that the oscillation frequencies in-plane and in the $z$ direction satisfy a resonance relationship:

$$\omega_z / \omega_{xy} \approx 1$$

Richardson (1980) used the Lindstedt-Poincaré method to derive a third-order approximate analytical solution for Halo orbits, providing excellent initial guesses for numerically precise solutions.

### Stability and Station-Keeping Control

Most Halo orbits are **unstable** -- their stable and unstable manifolds point toward and away from the orbit respectively. Therefore:

- Spacecraft on Halo orbits require periodic station-keeping maneuvers
- Control strategies are typically based on Floquet theory, eliminating components that grow along the unstable manifold
- Typical station-keeping for L2 Halo orbits requires approximately several m/s per year

### Near-Rectilinear Halo Orbit (NRHO)

NRHO is a special subclass of Halo orbits with extremely elongated shapes, where the perilune is close to the lunar surface and the apolune extends into deep space. NRHO is the target orbit for NASA's Gateway space station, combining the three-dimensional coverage advantages of Halo orbits with the communication/observation advantages of low perilune.

## Application Value

Halo orbits have core application value in cislunar missions:

- **Gateway space station**: NASA's Artemis program Gateway station is deployed in a lunar L2 NRHO
- **Relay communications**: L2 Halo orbits can provide continuous communication relay for the lunar far side
- **Scientific observation**: Halo orbits offer unique observation geometries, suitable for space science and astronomical observation
- **Deep space exploration stepping stone**: Halo orbits can serve as transfer orbits for deeper space missions

## Related Concepts
- [Earth-Moon L1/L2 Halo Orbit (EML1/EML2 Halo)](/en/glossary/orbits/eml-halo/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Farquhar R W. The utilization of halo orbits in advanced lunar operations[R]. NASA, 1971.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025.
