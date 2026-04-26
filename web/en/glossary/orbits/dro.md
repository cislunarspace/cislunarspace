---
title: Distant Retrograde Orbit (DRO)
description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
keywords: Distant Retrograde Orbit, DRO, Distant Retrograde Orbit, cislunar orbit, resonance orbit, orbital stability, orbital design
author: Tianjiang Says
date: 2026-04-04
lastUpdated: 2026-04-26
wechatShare:
  title: Distant Retrograde Orbit (DRO)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Distant Retrograde Orbit (DRO) Details | Key Mission Orbit in Cislunar Space
  description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Distant Retrograde Orbit (DRO) Details | Key Mission Orbit in Cislunar Space
  description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
  image: /logo.png
permalink: /en/glossary/orbits/dro/
---

# Distant Retrograde Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Distant Retrograde Orbit (DRO) is a **stable periodic orbit** around the Moon in the Circular Restricted Three-Body Problem (CRTBP). In the synodic reference frame, a DRO moves in the opposite direction to the Moon's orbit around Earth, hence the term "retrograde" orbit.


![DRO Orbit Schematic](/glossary/Figures/DRO/DRO示意图.png)
*DRO orbit shape in the Earth-Moon synodic reference frame*


![Schematic of barycentric rotating reference frame and DRO orbit](/glossary/Figures/DRO/质心旋转坐标系及DRO轨道示意图.png)
*Geometric configuration of DRO in the barycentric rotating reference frame*



## Geometric Characteristics

In the synodic reference frame, a planar DRO appears as an approximately elliptical closed curve with the Moon as its geometric center. Its main parameters are:

- **$x$-direction amplitude $A_x$**: The distance from the intersection of the orbit with the Earth-Moon line to the Moon, which is the primary parameter describing the DRO configuration
  - When $A_x$ is small, the DRO is close to the Moon, approximating a circular lunar orbit
  - As $A_x$ increases, the DRO moves farther from the Moon, and the orbit shape evolves from nearly circular to an ellipse with significant eccentricity
- **$z$-direction amplitude $A_z$**: Introducing a $z$-direction amplitude yields a three-dimensional non-planar DRO, which exhibits both retrograde motion within the $xOy$ plane and periodic oscillation in the $z$ direction

## Resonance Relationships

DROs exhibit resonance relationships with the Moon's orbital period. When the DRO's orbital period $T$ and the Moon's orbital period $T_M$ satisfy $T/T_M \approx n/m$ (where $n$ and $m$ are positive integers), it is referred to as an $m:n$ resonant DRO.

| Resonance Ratio | Characteristics |
|:---|:---|
| 1:1, 2:1 (low-order resonance) | Closer to the Moon, with stronger stability |
| 3:1, 4:1 (high-order resonance) | Farther from the Moon, larger orbital amplitude, providing greater potential energy advantage for transfers to cislunar space |

For example, a 2:1 resonant DRO has an orbital period approximately half that of the Moon's orbital period -- meaning the spacecraft completes two orbits around the Moon for every one orbit the Moon completes around Earth.

## Dynamic Symmetry

In the CRTBP, DROs exhibit dynamic symmetry about the $x$-axis: when the orbit crosses the $x$-axis, there is only a $y$-direction velocity component $\dot{y}_0$, while the $y$-direction position and the $x$ and $z$ direction velocities are all zero. This symmetry means that one only needs to select an initial point on the $x$-axis, use $\dot{y}_0$ and period $T$ as free variables, integrate for half a period, and verify whether the orbit returns to the $x$-axis -- enabling iterative convergence to a closed periodic orbit.

## Behavior in Ephemeris Models

In perturbative environments such as ephemeris models, where celestial body positions change over time, DROs no longer maintain strict periodicity and evolve into **quasi-periodic orbits** that wind within a limited region. Their trajectories do not close, but the overall shape remains stable.

## Application Value

With excellent long-term stability (requiring no or only minimal orbital maneuvers to maintain) and advantageous orbital position, DROs have become the preferred mission orbit for cislunar space infrastructure. Application scenarios include:

- **Situation awareness constellation** deployment
- **Cislunar space navigation system** networking
- **Deep space relay communications**
- **Material storage and strategic station-keeping**

NASA's Lunar Reconnaissance Orbiter (LRO) mission has validated the application value of DROs in lunar exploration. Recent research has shown that non-planar DROs with $z$-direction amplitude can avoid solar eclipses, further improving observer effectiveness.

## Related Concepts
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Earth-Moon L1/L2 Halo Orbits (EML1/EML2 Halo)](/en/glossary/eml-halo/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Ephemeris Model](/en/glossary/ephemeris-model/)
- [Starshade](/en/glossary/starshade/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Poincaré Section](/en/glossary/poincare-section/)
- Resonance orbit
- Quasi-periodic orbit

## References

- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
