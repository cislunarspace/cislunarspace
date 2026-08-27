---
title: Cislunar Spacecraft Orbits
description: Overview of cislunar orbital dynamics, covering the circular restricted three-body problem (CR3BP), libration point orbit families, Near-Rectilinear Halo Orbits (NRHO), Distant Retrograde Orbits (DRO), and transfer corridors.
keywords: cislunar orbits, CR3BP, libration points, NRHO, DRO, Halo orbits, transfer orbits
author: CislunarSpace
date: 2026-03-07
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/
wechatShare:
  title: Cislunar Orbital Dynamics Architecture
  desc: Typical orbit families and design principles under multi-body dynamics.
  image: /logo.png
og:
  title: Overview of Cislunar Orbital Dynamics Architecture
  description: Typical orbit families and design principles under multi-body dynamics.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Overview of Cislunar Orbital Dynamics Architecture
  description: Typical orbit families and design principles under multi-body dynamics.
  image: /logo.png
---

# Cislunar Orbital Dynamics Architecture

In near-Earth space, spacecraft motion is predominantly governed by Earth's central gravity, resulting in strictly closed Keplerian ellipses. Upon entering cislunar space, the gravitational forces of Earth and the Moon become closely coupled, rendering the classical two-body model invalid. Spacecraft motion is governed by the Circular Restricted Three-Body Problem (CR3BP), where a diverse array of periodic and quasi-periodic orbit families emerge within the phase space.

Understanding the dynamical origins and geometric properties of these orbit families is fundamental to lunar mission design, deep-space station-keeping, and orbital selection for cislunar space stations.

## Fundamental Differences from Near-Earth Orbits

Transitioning from two-body Keplerian orbits to a three-body dynamical system introduces three fundamental shifts in orbital design:

1. **Reference Frame: From Inertial to Rotating Pulsating System**: Formulated in a rotating coordinate system aligned with the Earth–Moon line, centrifugal and Coriolis inertial forces are introduced. Spacecraft experience zero net force at specific equilibrium positions known as Lagrange libration points ($L_1$–$L_5$).
2. **Conservation Law: From Mechanical Energy to the Jacobi Integral**: The sum of kinetic energy and effective potential yields an invariant Jacobi constant $C$, which rigorously defines the zero-velocity curves (ZVC) that delineate accessible and forbidden regions.
3. **Orbital Geometry: From 2D Planar Ellipses to 3D Spatial Orbit Families**: The phase space hosts three-dimensional Halo orbits crossing the orbital plane, vertical axial orbits, and large-amplitude retrograde orbits enclosing the Moon.

## Typical Core Mission Orbit Families

| Orbit Family | Dynamical Characteristics | Typical Period & Maintenance Cost | Primary Mission Scenarios |
| :--- | :--- | :---: | :--- |
| **Near-Rectilinear Halo Orbit (NRHO)** | Large-amplitude Halo orbits around $L_1$/$L_2$ with extremely low perilune and high apolune | Period on the order of one week (9:2 synodic-resonant members: 6.56 days); annual station-keeping $\Delta V$ of a few m/s | Continuous lunar south pole coverage, Lunar Gateway staging, surface landing relay |
| **Distant Retrograde Orbit (DRO)** | Planar retrograde lunar orbit; period grows with orbital amplitude (typical mission-relevant members near two weeks) | Period: 10–15 days; linearly stable in the CR3BP, practically no station-keeping needed | Long-term staging depots, deep-space logistics hubs, space-based astronomy |
| **Libration Point Halo Orbits** | 3D periodic orbits around $L_1$/$L_2$/$L_3$ libration points, categorized into northern and southern branches | Period: 10–16 days; requires periodic small station-keeping maneuvers | Lunar farside relay communications (e.g., Queqiao), science observation platforms |
| **Low-Energy Transfer Corridors** | Ballistic propagation along invariant manifold tubes in three-body phase space, utilizing Weak Stability Boundary (WSB) capture | Transfer time: weeks to months; Saves $>15\%\ \Delta V$ compared to Hohmann transfer | Cargo logistics, CubeSat lunar exploration, propellant-constrained missions |

## Topic Navigation

This section provides in-depth mathematical derivations and numerical computation cases for the three most critical orbit types in engineering practice:

- **Near-Rectilinear Halo Orbit**: Explore [NRHO (Near-Rectilinear Halo Orbit)](/en/cislunar-orbits/nrho/) to learn about bifurcation branches, design parameters, and high-fidelity ephemeris corrections.
- **Distant Retrograde Orbit**: Explore [DRO (Distant Retrograde Orbit)](/en/cislunar-orbits/dro/) to master dynamical stability mechanisms, phasing maneuvers, and formation flying design.
- **Earth–Moon Transfer Orbits**: Explore [Earth–Moon Transfer Orbits](/en/cislunar-orbits/transfer/) to understand Hohmann fast transfers, weak stability boundary low-energy capture, and launch window analysis.

## Supporting Foundations & Algorithms

To delve deeper into the mathematical and algorithmic toolkits for orbital computation, refer to our background theoretical modules:

- **Differential Correction & Boundary Value Problems**: [Shooting Method](/en/background/math/shooting-method/)
- **Parametric Continuation & Bifurcation**: [Arc-Length Continuation](/en/background/math/continuation/)
- **Long-Term Structure-Preserving Integration**: [Symplectic Integrators](/en/background/math/symplectic-integrator/)
- **Multi-Body Perturbation Theory**: [Perturbation Theory](/en/background/mechanics/perturbation/)
