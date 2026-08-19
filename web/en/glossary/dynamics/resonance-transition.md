---
title: Resonance Transition (Resonance Hopping)
description: The process by which a celestial body or spacecraft transitions from one mean-motion resonance ratio to another through phase-space channels formed by invariant manifold tubes in the restricted three-body problem, covering natural comet dynamics (Oterma, Gehrels 3) and SMART-1-like low-energy lunar transfers.
keywords: resonance transition, resonance hopping, invariant manifold, phase-space transport, temporary capture, low-energy transfer, SMART-1, weak stability boundary, Oterma, Gehrels 3, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Resonance Transition (Resonance Hopping)
  desc: From Oterma comet to SMART-1 — manifold-driven resonance-ratio hopping and low-energy capture.
  image: /logo.png
og:
  title: Resonance Transition (Resonance Hopping) Explained | Term Definition
  description: The process by which a celestial body or spacecraft transitions from one mean-motion resonance ratio to another through invariant-manifold phase-space channels in the restricted three-body problem—the dynamical basis for low-energy transfer design.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Resonance Transition (Resonance Hopping) Explained | Term Definition
  description: The process by which a celestial body or spacecraft transitions from one mean-motion resonance ratio to another through invariant-manifold phase-space channels in the restricted three-body problem—the dynamical basis for low-energy transfer design.
  image: /logo.png
permalink: /en/glossary/dynamics/resonance-transition/
---

# Resonance Transition (Resonance Hopping)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Resonance transition** (also **resonance hopping**) is the dynamical process by which a celestial body or spacecraft moves from one mean-motion resonance ratio $(p_1:q_1)$ to another $(p_2:q_2)$ under multi-body gravitational influence. The transition is not a smooth drift of orbital elements but a "jump" across the neck regions near collinear libration points $L_1$ and $L_2$, mediated by the stable and unstable invariant manifold tubes of unstable periodic orbits (Koon et al. 2001; Perozzi & Ferraz-Mello 2010).

## Dynamical Mechanism

In the CR3BP, periodic orbits near $L_1$ and $L_2$ possess center, stable, and unstable subspaces; their stable/unstable manifolds form tube-like structures in phase space. These tubes do not remain local—they extend globally and, at the scale of the solar system, weave into interlocking "dynamical channels." Where the unstable manifolds of different resonance islands intersect transversely, homoclinic/heteroclinic tangles form, producing chaotic transport (Perozzi & Ferraz-Mello 2010).

From the orbital-elements perspective: each time the spacecraft crosses an $L_1$ neck and swings by $P_2$ (e.g., the Moon), its heliocentric semi-major axis jumps discontinuously—equivalent to switching to a different mean-motion resonance ratio. Successive neck crossings couple discrete resonance-ratio changes with the continuous decrease of the Jacobi constant, producing the "hopping" phenomenology.

## Natural Examples

- **Comets Oterma and Gehrels 3**: In the Sun-Jupiter CR3BP, these comets are temporarily captured from a 3:2 exterior resonance, pass through the $L_2$ neck, jump to a 2:3 interior resonance, and are then released back into heliocentric orbit. The entire sequence is a heteroclinic connection between unstable resonant orbits (Koon et al. 2001).

- **Shoemaker-Levy 9**: was in a 2:3 resonance with Jupiter just before impact, after a complex dynamical history involving resonance and close encounters (Perozzi & Ferraz-Mello 2010).

## Engineering Applications

- **SMART-1-like low-energy Earth-Moon transfers**: exploiting solar perturbations, the spacecraft repeatedly crosses the Earth-Moon $L_1$ neck, hopping from one near-resonant state to another at lower energy until reaching lunar capture energy. This is a manifestation of the weak stability boundary (WSB) transfer in the invariant-manifold framework (Scott 2010; Perozzi & Ferraz-Mello 2010).

- **Planetary moon tours**: the Jupiter Europa Orbiter (JEO) "endgame" phase uses transitions between two different resonance ratios (e.g. 3:5 and 4:6) to lower orbital energy and achieve capture; the flight path can be built from intersecting resonant-orbit manifolds (Escribano & Howell 2013).

## Application Highlights

1. Resonance transitions rely on the "stickiness" of chaotic regions—a spacecraft can linger near a resonance boundary for long intervals, providing a window for low-thrust or natural drag to achieve permanent capture (Scott 2010).
2. Design workflow: identify manifold intersections on Poincare sections between different resonance islands, then patch the arcs together via differential correction.
3. Compared with pure two-body Hohmann transfers, resonance hopping can drastically reduce $\Delta V$ at the cost of longer flight times.

## Related Concepts

- [Weak Stability Boundary](/en/glossary/dynamics/wsb/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Resonant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [DRO Low-energy Capture](/en/glossary/dynamics/ballistic-capture/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Orbital Resonance](/en/glossary/dynamics/orbital-resonance/)

## References

- Koon, W. S., Lo, M. W., Marsden, J. E. & Ross, S. D., 2001, "Resonance and capture of Jupiter comets," *Celestial Mechanics and Dynamical Astronomy*, 81 (1):27–38

- Perozzi, E. & Ferraz-Mello, S. (eds.), 2010, *Space Manifold Dynamics*

- Scott, C. J., 2010, *Transfer and Capture into Distant Retrograde Orbits* (Ph.D. dissertation, Penn State University)

- Fantino, E. et al., 2010, "Resonance hopping in the comet Oterma," *Celestial Mechanics and Dynamical Astronomy*

- Escribano, T. M. V. & Howell, K. C., 2013, *Spacecraft Transfer Trajectory Design Exploiting Resonant Orbits in Multi-Body Environments* (Ph.D. dissertation, Purdue University)
