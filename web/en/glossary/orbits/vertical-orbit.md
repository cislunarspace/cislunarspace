---
title: Vertical Orbit
description: Detailed explanation of vertical orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
keywords: Vertical Orbit, libration point, L1, L2, L3, L4, L5, three-body problem, orbital dynamics, cislunar space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Vertical Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Vertical Orbit | Three-Dimensional Periodic Orbit at Libration Points
  description: Detailed explanation of vertical orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Vertical Orbit | Three-Dimensional Periodic Orbit at Libration Points
  description: Detailed explanation of vertical orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
  image: /logo.png
permalink: /en/glossary/orbits/vertical-orbit/
---

# Vertical Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Vertical Orbit** is a **three-dimensional periodic orbit family surrounding libration points**, belonging to an important category of Libration Point Orbits (LPO). Unlike the planar motion of Lyapunov orbits, vertical orbits have a significant periodic oscillation component in the $z$-direction while maintaining a certain range of motion in the $xOy$ plane, forming a unique three-dimensional spatial configuration. Vertical orbits exist near the L1, L2, and L3 collinear libration points as well as the L4 and L5 triangular libration points of the Earth-Moon system.

## Core Elements

### Dynamical Characteristics of Vertical Orbits

Vertical orbits possess the following properties within the CR3BP framework:

- **Three-dimensional motion**: Vertical orbits have non-zero amplitudes in the $x$, $y$, and $z$ directions; the $z$-direction oscillation is the source of their name and the most significant distinction from Lyapunov orbits
- **Periodicity**: Vertical orbits are strictly periodic, closing precisely in the rotating coordinate system
- **Symmetry**: Standard vertical orbits are symmetric with respect to the $xOz$ plane
- **Amplitude parameterization**: The vertical orbit family can be parameterized by $z$-direction amplitude; different amplitudes correspond to different energy levels (Jacobi constant) and orbital periods

### Classification of Vertical Orbits

Based on the libration point locations in the Earth-Moon system, vertical orbits can be classified into the following families:

| Orbit Family | Parent Libration Point | Characteristics |
| :--- | :--- | :--- |
| V1 (Vertical L1) | L1 | Located between Earth and Moon, moderate $z$-direction amplitude |
| V2 (Vertical L2) | L2 | Located on the far side of the Moon, large $z$-direction amplitude |
| V3 (Vertical L3) | L3 | Located on the far side of the Earth from the Moon, long period |
| V4/V5 (Vertical L4/L5) | L4/L5 | Located near the triangular libration points, good stability |

### Orbital Parameter Characteristics

Using the Earth-Moon system as an example, the main parameter ranges for the vertical orbit family are as follows (based on the dynamic catalog statistics by Guzzetti et al.):

| Orbit Family | Jacobi Constant Range | Period Range (days) | Stability Index |
| :--- | :--- | :--- | :--- |
| V1 | Approximately 2.5 ~ 3.0 | Approximately 24 | Relatively high |
| V2 | Approximately 0.8 ~ 3.0 | Approximately 16 | Moderate |
| V3 | Approximately 2.5 ~ 3.0 | Relatively long | Relatively low |

There is a nonlinear relationship between the Jacobi constant and orbital period of vertical orbits; as amplitude increases, orbital energy decreases (Jacobi constant decreases) and the period changes accordingly.

### Relationship Between Vertical Orbits and Other Libration Point Orbits

Vertical orbits belong to the same libration point orbit family as Lyapunov orbits, Halo orbits, and Axial orbits:

- **Relationship with Lyapunov orbits**: Lyapunov orbits lie strictly in the $xOy$ plane and can be viewed as the degenerate form of vertical orbits when the $z$-direction amplitude approaches zero
- **Relationship with Halo orbits**: Halo orbits are symmetric with respect to the $xOz$ plane, while vertical orbits also have significant $y$-direction amplitudes; both have three-dimensional characteristics but with different geometric configurations
- **Relationship with Axial orbits**: Both Axial orbits and vertical orbits have three-dimensional characteristics, but their dominant oscillation directions differ

### Stability Analysis

The stability of vertical orbits varies depending on the associated libration point:

- Vertical orbits near L1, L2, and L3 typically have unstable modes and require station-keeping maneuvers
- Vertical orbits near L4 and L5 may have members with good long-term stability due to the inherent stability of the triangular libration points
- The stability index is a key metric for evaluating the local stability of vertical orbits; an index closer to 1 indicates a more stable orbit

## Application Value

Vertical orbits have the following potential applications in cislunar space missions:

- **Scientific observation platform**: The three-dimensional characteristics of vertical orbits enable unique observation geometries, suitable for space science and astronomical observation missions
- **Communication relay**: L1/L2 vertical orbits can serve as Earth-Moon communication relays, covering both the near and far sides of the Moon
- **Orbit transfer corridors**: The stable and unstable manifolds of vertical orbits can serve as low-energy transfer corridors connecting different regions of cislunar space
- **Mission design reference**: As an important component of the libration point orbit classification system, vertical orbits are fundamental to understanding cislunar dynamical structures and designing complex mission trajectories

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Axial Orbit](/en/glossary/orbits/axial-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
