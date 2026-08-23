---
permalink: /en/background/mechanics/
title: Mechanics Foundations
description: Celestial mechanics, restricted three-body dynamical models, and multi-source orbital perturbation analysis in cislunar space.
keywords: celestial mechanics, restricted three-body problem, CR3BP, ER3BP, perturbation theory, Jacobi constant, zero-velocity surfaces, state transition matrix
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-20
wechatShare:
  title: Cislunar Mechanics Foundations
  desc: Celestial mechanics theory and perturbation analysis supporting cislunar orbital research.
  image: /logo.png
---

# Mechanics Foundations

Cislunar space lies within the dynamic transition zone where the gravitational fields of Earth and the Moon strongly compete, meaning spacecraft acceleration is no longer dominated by a single central body. Classical two-body Keplerian approximations break down completely in this regime, necessitating a unified modeling framework grounded in multi-body celestial mechanics and nonlinear astrodynamics.

This section covers the physical dynamical models, governing equations of motion, and multi-source perturbation mechanics governing cislunar spaceflight.

## Dynamical Modeling Hierarchy

```mermaid
flowchart LR
    M1[Two-Body Keplerian Problem<br>Analytical Conic Sections] --> M2[Circular Restricted Three-Body Problem (CR3BP)<br>Conservative System / Jacobi Constant]
    M2 --> M3[Elliptic Restricted Three-Body Problem (ER3BP)<br>Non-Conservative / Pulsating Frame]
    M3 --> M4[Four-Body & N-Body Models<br>Sun-Earth-Moon-Spacecraft]
    M4 --> M5[High-Fidelity Ephemeris Force Models<br>Non-Spherical Harmonics + SRP + Relativistic Effects]
```

### 1. The Restricted Three-Body Problem (RTBP)

The restricted three-body problem formulates the motion of an infinitesimal spacecraft moving under the combined gravitational attraction of two primary bodies (Earth and Moon) orbiting their mutual center of mass.

- **Circular Restricted Three-Body Problem (CR3BP)**: Assumes primaries move in uniform circular orbits. In the rotating (synodic) reference frame, the system possesses a time-invariant conservative energy integral: the **Jacobi Constant** ($C_J$). The five Lagrange libration points ($L_1$ to $L_5$) and associated Zero-Velocity Surfaces (ZVS) establish geometric boundaries between accessible regions and forbidden zones.
- **State Transition Matrix (STM) & Monodromy Matrix**: Characterizes the linear propagation of phase-space perturbations over time. The eigenspectrum (Floquet Multipliers) of the monodromy matrix rigorously dictates orbital asymptotic stability, bifurcation conditions, and the spatial geometry of stable/unstable invariant manifold tubes.

### 2. Celestial Mechanics & Perturbation Theory

In operational spaceflight environments, spacecraft motion is modulated by complex environmental perturbing forces beyond the idealized three-body gravitational field:

- **Solar Gravitational Tidal Perturbations**: Dominates the outer cislunar regime (such as beyond the $L_2$ point or in the Weak Stability Boundary region), serving as the driving mechanism behind low-energy ballistic capture transfers.
- **Lunar Non-Spherical Gravitational Harmonics ($J_2, C_{22}$, and Mascons)**: The lunar gravitational field exhibits pronounced spatial irregularities. While causing rapid eccentricity drift and inclination variations in Low Lunar Orbits (LLO), its impact on large-amplitude Distant Retrograde Orbits (DRO) or high-altitude NRHOs remains moderate and manageable.
- **Solar Radiation Pressure (SRP)**: For spacecraft featuring large deployable solar arrays or lightweight planar structures, SRP accelerations induce secular orbital resonance and long-term semi-major axis drifts.
- In-depth Topic: [Celestial Mechanics & Perturbation Order-of-Magnitude Analysis](/en/background/mechanics/perturbation/)
