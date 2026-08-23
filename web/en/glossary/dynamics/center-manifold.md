---
title: Center Manifold & NHIM (Center Manifold & Normally Hyperbolic Invariant Manifold)
description: Spectral decomposition of the center manifold near collinear libration points, action-angle parameterization, relative center manifolds, and the definition of normally hyperbolic invariant manifolds (NHIMs).
keywords: Center Manifold, NHIM, Normally Hyperbolic Invariant Manifold, Action-Angle Variables, Relative Center Manifold, Libration Point
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Center Manifold & NHIM (Center Manifold & NHIM)
  desc: Center manifolds, NHIMs, and their role in orbit reduction near libration points.
  image: /logo.png
og:
  title: Center Manifold & NHIM Explained | Libration-Point Dynamics
  description: Spectral decomposition of the center manifold near collinear libration points, action-angle parameterization, relative center manifolds, and the definition of NHIMs.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Center Manifold & NHIM Explained | Libration-Point Dynamics
  description: Spectral decomposition of the center manifold near collinear libration points, action-angle parameterization, relative center manifolds, and the definition of NHIMs.
  image: /logo.png
permalink: /en/glossary/dynamics/center-manifold/
---

# Center Manifold & NHIM (Center Manifold & Normally Hyperbolic Invariant Manifold)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Near an equilibrium of a dynamical system, the eigenvalues of the linearized matrix are classified by their real parts: negative (stable), positive (unstable), and zero (center). The local invariant manifold spanned by the center directions is called the **center manifold**. At the collinear libration points $L_1$, $L_2$, and $L_3$ of the CR3BP, the linearized spectrum consists of one real pair $\pm d_1$ (hyperbolic directions) and two pure-imaginary pairs $\pm i\omega_1$, $\pm i\omega_2$ (center directions). Hence there exists locally a 4-D center manifold together with 1-D stable and 1-D unstable manifolds (Szebehely 1967; Gómez et al. 2001).

Motion on the center manifold is bounded; Lissajous, Lyapunov, and halo orbits all lie on the center manifold or its analytic continuation. The stable and unstable manifolds approach or depart from the equilibrium exponentially along the hyperbolic directions.

## Reduction and Action-Angle Variables

The existence of the center manifold allows the high-dimensional system to be reduced locally to a lower-dimensional Hamiltonian system. In center-manifold coordinates the motion can be described by action-angle variables $(I_2,I_3;\theta_2,\theta_3)$. $I_2$ is usually associated with the in-plane amplitude in the rotating $XY$ plane, and $I_3$ with the out-of-plane $Z$ amplitude. Using suitable canonical transformations and the Lyapunov center theorem, families of periodic orbits on the center manifold can be constructed systematically (Gómez et al. 2001; Meyer & Hall 1992).

## Normally Hyperbolic Invariant Manifold (NHIM)

A **NHIM** is a generalization of the center-manifold idea: it is an invariant manifold that may itself be multi-dimensional, with strong hyperbolicity in the normal directions (exponential contraction/expansion) and neutral or weakly hyperbolic behavior in the tangential directions. In the CR3BP, a libration-point periodic orbit itself is a 1-D NHIM: the direction tangent to the orbit is neutral, while the normal directions contain stable, unstable, and center components. NHIMs act as bottlenecks controlling phase-space transport and form the foundation for heteroclinic cycles and invariant tori (Wiggins 1994; Ross 2022).

## Relative Center Manifold

In relative orbital dynamics, neutral directions of the linearized relative motion span a **relative center manifold**. Motion on this manifold is periodic or quasi-periodic and is used for formation flying and deputy-spacecraft analysis near libration-point orbits.

## Relation to Invariant Tori

Inside the center manifold the two center frequencies approximate the libration-point characteristic frequencies for small amplitudes. When their ratio is irrational and non-resonant, a 2-D invariant torus exists and is covered by quasi-periodic orbits; when the ratio is rational, the torus may break and produce periodic orbits. KAM theory guarantees the persistence of many invariant tori under small perturbations. Thus the center manifold is the common geometric stage for understanding invariant tori and the Lissajous and halo orbit families.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Invariant Torus](/en/glossary/fundamentals/invariant-torus/)

- [KAM Theorem](/en/glossary/dynamics/kam-theory/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

## References

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*.

- Gómez, G., et al. (2001). *Dynamics and Mission Design Near Libration Points*, Vol. I/III.

- Meyer, K. R., & Hall, G. R. (1992). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*.

- Wiggins, S. (1994). *Normally Hyperbolic Invariant Manifolds in Dynamical Systems*.

- Ross, S. D., et al. (2022). *Dynamical systems, the three-body problem, and space mission design*.
