---
title: Axial Orbit
description: Detailed explanation of axial orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
keywords: Axial Orbit, libration point, L1, L2, L3, L4, L5, three-body problem, orbital dynamics, cislunar space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Axial Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Axial Orbit | Three-Dimensional Periodic Orbit at Libration Points
  description: Detailed explanation of axial orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Axial Orbit | Three-Dimensional Periodic Orbit at Libration Points
  description: Detailed explanation of axial orbits — definitions, dynamical characteristics, periodic motion near libration points, and applications in cislunar space missions
  image: /logo.png
permalink: /en/glossary/orbits/axial-orbit/
---

# Axial Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An **Axial Orbit** is a **three-dimensional periodic orbit family surrounding libration points**, belonging to an important category of Libration Point Orbits (LPO). The name derives from its motion characteristics — the orbit exhibits significant oscillation near the $x$-axis (the Earth-Moon line direction) while also undergoing periodic motion in the $z$-direction, forming a three-dimensional spatial configuration that extends along the axial direction. Axial orbits exist widely near the L1, L2, and L3 collinear libration points as well as the L4 and L5 triangular libration points of the Earth-Moon system.

## Core Elements

### Dynamical Characteristics of Axial Orbits

Axial orbits possess the following properties within the CR3BP framework:

- **Three-dimensional motion**: Axial orbits have the largest amplitude in the $x$-direction and also exhibit significant oscillation in the $z$-direction, forming a unique configuration that extends axially along the Earth-Moon line
- **Periodicity**: Axial orbits are strictly periodic, closing precisely in the rotating coordinate system
- **Symmetry**: Standard axial orbits are symmetric with respect to the $xOz$ plane
- **Wide energy coverage**: The Jacobi constant range of the axial orbit family is relatively broad, enabling connections between cislunar space regions at different energy levels

### Classification of Axial Orbits

Based on the libration point locations in the Earth-Moon system, axial orbits can be classified into the following families:

| Orbit Family | Parent Libration Point | Characteristics |
| :--- | :--- | :--- |
| A1 (Axial L1) | L1 | Located between Earth and Moon, period approximately 17 days |
| A2 (Axial L2) | L2 | Located on the far side of the Moon, period approximately 19 days |
| A3 (Axial L3) | L3 | Located on the far side of the Earth from the Moon, period approximately 27 days |
| A4/A5 (Axial L4/L5) | L4/L5 | Located near the triangular libration points |

### Orbital Parameter Characteristics

Using the Earth-Moon system as an example, the main parameter ranges for the axial orbit family are as follows (based on the dynamic catalog statistics by Guzzetti et al.):

| Orbit Family | Jacobi Constant Range | Period Range (days) | Stability Index Range |
| :--- | :--- | :--- | :--- |
| A1 | 2.9918 ~ 3.0214 | 17.15 ~ 17.65 | 200 ~ 254 |
| A2 | 2.9671 ~ 3.0138 | 18.72 ~ 19.20 | 128 ~ 168 |
| A3 | 0.0165 ~ 1.8588 | 27.19 ~ 27.21 | 1.05 ~ 1.16 |

The Jacobi constant ranges of the A1 and A2 axial orbits overlap significantly with the energy ranges of L1/L2 Lyapunov orbits, suggesting that low-cost orbit transfer corridors may exist between them.

### Relationship Between Axial Orbits and Other Libration Point Orbits

Axial orbits belong to the same libration point orbit family as Lyapunov orbits, Halo orbits, and Vertical orbits:

- **Relationship with Lyapunov orbits**: Axial orbits can be viewed as the extension of Lyapunov orbits into three-dimensional space; when the $z$-direction amplitude is small, they approach planar Lyapunov orbits
- **Relationship with Halo orbits**: Both axial orbits and Halo orbits have three-dimensional characteristics, but the dominant oscillation direction differs — Halo orbits are dominated by $z$-direction oscillation, while axial orbits are dominated by $x$-direction oscillation
- **Relationship with Vertical orbits**: Vertical orbits are characterized by $z$-direction oscillation, forming a complementary orbit family with axial orbits in three-dimensional space

### Stability and Mission Suitability

The stability characteristics of axial orbits give them unique value in mission design:

- L1/L2 axial orbits have relatively short periods (approximately 17–19 days) and moderate stability indices, making them suitable for long-duration station-keeping missions
- The Jacobi constants of A1/A2 axial orbits fall entirely within the energy range of L1/L2 Lyapunov orbits, indicating that they can serve as candidates for low-energy transfers
- In the long-term lunar infrastructure site selection analysis proposed by Guzzetti et al., L1/L2 axial orbits are listed as candidate orbit families due to their favorable period and stability characteristics

## Application Value

Axial orbits have the following potential applications in cislunar space missions:

- **Long-term infrastructure siting**: L1/L2 axial orbits have moderate orbital periods and stability, making them suitable for deploying long-term cislunar space infrastructure
- **Low-energy transfer nodes**: Due to the overlapping energy ranges with Lyapunov orbits, axial orbits can serve as important nodes in low-energy transfer networks
- **Orbit docking and resupply**: The periodic characteristics of axial orbits facilitate mission planning and orbit docking operations
- **Dynamical research foundation**: As an important component of the libration point orbit classification system, axial orbits are key to understanding the complex dynamical structure of cislunar space

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Vertical Orbit](/en/glossary/orbits/vertical-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
