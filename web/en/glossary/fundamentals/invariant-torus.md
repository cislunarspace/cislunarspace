---
title: Invariant Torus & Quasi-Periodic Tori (Invariant Torus & Quasi-Periodic Tori)
description: Invariant tori and quasi-periodic invariant tori in the restricted three-body problem, torus manifolds in the bicircular four-body problem, and applications to formation flying and station-keeping.
keywords: Invariant Torus, Quasi-Periodic Invariant Tori, QPT, Bicircular Four-Body Problem, Formation Flying, Station-Keeping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Invariant Torus & Quasi-Periodic Tori (Invariant Torus & QPT)
  desc: Invariant tori, quasi-periodic orbits, and their mission applications in the three-body problem.
  image: /logo.png
og:
  title: Invariant Torus & Quasi-Periodic Tori Explained | Cislunar Dynamics
  description: Invariant tori and quasi-periodic invariant tori in the restricted three-body problem, torus manifolds in the bicircular four-body problem, and applications to formation flying and station-keeping.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Invariant Torus & Quasi-Periodic Tori Explained | Cislunar Dynamics
  description: Invariant tori and quasi-periodic invariant tori in the restricted three-body problem, torus manifolds in the bicircular four-body problem, and applications to formation flying and station-keeping.
  image: /logo.png
permalink: /en/glossary/fundamentals/invariant-torus/
---

# Invariant Torus & Quasi-Periodic Tori (Invariant Torus & Quasi-Periodic Tori)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An **invariant torus** is a closed higher-dimensional surface in phase space spanned by two or more independent frequencies. If the frequency ratio in the two angular coordinates is irrational, the orbit never closes and is called **quasi-periodic**; it densely covers the torus. In the CR3BP, invariant tori often surround a reference periodic orbit and provide the geometric foundation for quasi-periodic Lissajous and quasi-periodic halo orbit families (Gómez et al. 2001; Meyer & Offin 2017).

## Two-Dimensional Invariant Tori and Lissajous / Halo Orbits

The two center frequencies in the center manifold of a collinear libration point can be parameterized by action-angle variables. For given amplitudes, an irrational frequency ratio yields a 2-D invariant torus. When one amplitude vanishes, the torus degenerates to a planar Lyapunov orbit; when the frequencies satisfy a resonance relation, periodic solutions such as halo orbits can bifurcate. Thus periodic orbits can be viewed as resonant slices or bifurcation products of invariant torus families.

## Quasi-Periodic Invariant Tori (QPT)

**QPTs** are bounded closed surfaces covered by quasi-periodic non-resonant orbits in the CRTBP. Unlike strictly periodic halo orbits, QPT orbits do not repeat and naturally drift around the reference periodic orbit, forming a natural enclosing structure. Because motion on the torus is bounded, QPTs are useful for designing long-term stable relative trajectories for formation flying: spacecraft placed on different sections of the same torus family remain naturally bounded relative to each other (Capannolo et al. 2023).

## Torus Manifolds in the Bicircular Four-Body Problem

In the bicircular restricted four-body problem (BCR4BP), the Sun appears as a fourth body that periodically perturbs the Earth–Moon system. Invariant tori can still exist approximately on the Earth–Moon side, and their stable/unstable manifolds are called **torus manifolds**. Computationally, one propagates the state-transition matrix along an invariant curve and uses its eigenvalues and eigenvectors to determine the local stable/unstable directions of the torus, which then serve as initial guesses for continuation into the four-body model (Ren et al. 2012).

## Application Highlights

- **Formation flying**: use different initial phases on the same QPT family to build long-term passive deputy trajectories;

- **Station-keeping**: quasi-periodic orbits are more flexible than periodic orbits and can reduce station-keeping cost in some missions;

- **Model transition**: tori and their manifolds provide initial structures for transitioning solutions from the CR3BP to high-fidelity ephemeris models.

## Related Concepts

- [Center Manifold](/en/glossary/dynamics/center-manifold/)

- [KAM Theorem](/en/glossary/dynamics/kam-theory/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

## References

- Gómez, G., et al. (2001). *Dynamics and Mission Design Near Libration Points*, Vol. I/II.

- Meyer, K. R., & Offin, D. C. (2017). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*.

- Capannolo, L., et al. (2023). Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment.

- Ren, Y., et al. (2012). Manifolds of quasi-periodic orbits in the bicircular restricted four-body problem. *Celestial Mechanics and Dynamical Astronomy*.
