---
title: Heteroclinic Connection
description: Detailed explanation of heteroclinic connection definition, dynamical characteristics, invariant manifold connections between libration point periodic orbits, and applications in trajectory design
keywords: Heteroclinic Connection, invariant manifold, libration point, low-energy transfer, CR3BP, orbital dynamics
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Heteroclinic Connection
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Heteroclinic Connection Details | Invariant Manifold Channel Between Libration Point Orbits
  description: Detailed explanation of heteroclinic connection definition, dynamical characteristics, invariant manifold connections between libration point periodic orbits, and applications in trajectory design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Heteroclinic Connection Details | Invariant Manifold Channel Between Libration Point Orbits
  description: Detailed explanation of heteroclinic connection definition, dynamical characteristics, invariant manifold connections between libration point periodic orbits, and applications in trajectory design
  image: /logo.png
permalink: /en/glossary/orbits/heteroclinic-connection/
---

# Heteroclinic Connection

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

A **Heteroclinic Connection** is a **path formed by the intersection of invariant manifolds between two different periodic orbits** in a dynamical system. Specifically, when the unstable manifold of one orbit coincides with the stable manifold of another orbit, a heteroclinic connection is formed — the spacecraft can naturally transition from one periodic orbit to another along this path without applying control thrust. In the Circular Restricted Three-Body Problem (CR3BP), heteroclinic connections widely exist between periodic orbits near the collinear libration points (L1, L2), serving as the core dynamical mechanism for designing low-energy transfer trajectories.

## Core Elements

### Mathematical Description

Let $P_1$ and $P_2$ be two distinct periodic orbits in the CR3BP, $W^u(P_1)$ be the unstable manifold of $P_1$, and $W^s(P_2)$ be the stable manifold of $P_2$. If a non-empty intersection exists:

$$W^u(P_1) \cap W^s(P_2) \neq \emptyset$$

then this intersection constitutes a heteroclinic connection from $P_1$ to $P_2$. Along this connection, the orbit approaches $P_1$ as $t \to -\infty$ and approaches $P_2$ as $t \to +\infty$.

### Dynamical Characteristics

Heteroclinic connections have the following dynamical properties:

- **Zero velocity increment**: In the ideal CR3BP, a heteroclinic connection is an exact natural dynamical path requiring no propellant expenditure during transfer
- **Sensitivity to perturbations**: Heteroclinic connections exist at low-dimensional intersections within high-dimensional phase space, making them extremely sensitive to initial conditions and model parameters
- **Energy matching constraint**: The two periodic orbits must have identical Jacobi constants (energy); otherwise, the manifolds will not intersect

### Typical Heteroclinic Connections

In the Earth-Moon system, typical heteroclinic connections include:

| Connection Type | Connected Objects | Characteristics |
|:---|:---|:---|
| L1-L2 connection | L1 Halo ↔ L2 Halo | Connects collinear libration point regions on both sides of the Moon |
| L1-Lyapunov ↔ L2-Lyapunov | L1 planar orbit ↔ L2 planar orbit | Low-energy transfer channel within the orbital plane |
| Butterfly orbit internal connection | L1 Halo ↔ L2 Halo (large amplitude) | Butterfly orbits themselves embody heteroclinic connections |

## Applications in Cislunar Space

Heteroclinic connections have significant application value in cislunar space mission design:

- **Low-energy transfer trajectories**: By concatenating heteroclinic connection segments, low-energy transfer trajectories from near-Earth orbit to orbits near the Moon can be designed, significantly reducing propellant requirements
- **L1-L2 region interconnection**: Heteroclinic connections provide natural dynamical channels between the Lunar Gateway and the far side of the Moon, supporting diverse mission topologies
- **Formation reconfiguration**: Using heteroclinic connections, formation spacecraft can collectively transfer from one periodic orbit to another, enabling global transformation of formation configurations

## Related Concepts

- [Butterfly Orbit](/en/glossary/orbits/butterfly-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Low-energy Transfer](/en/glossary/orbits/low-energy-transfer/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Fuel-optimal Control](/en/glossary/dynamics/fuel-optimal/)

## References

- Koon W S, Lo M W, Marsden J E, et al. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics[J]. Chaos, 2000, 10(2): 427-469.
- Haapala A, Vaquero M, Pavlak T A, et al. Trajectory selection strategy for tours in the Earth-Moon system[C]. AAS/AIAA Astrodynamics Specialist Conference, 2013.
