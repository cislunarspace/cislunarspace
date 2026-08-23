---
title: Phase Space & Phase Space Conduit (相空间与相空间通道)
description: The $2n$-dimensional space spanned by position and velocity (momentum) coordinates — the geometric foundation of dynamical systems theory. In the CR3BP the phase space is six-dimensional, constrained to a five-dimensional energy manifold by the Jacobi constant. A phase space conduit is a low-dimensional transport tube connecting regions of different energy, arising from gaps between invariant manifolds and zero-velocity surfaces — the dynamical root of weak-stability-boundary transfers.
keywords: Phase Space, Phase Space Conduit, transport tube, dynamical systems, CR3BP, invariant manifolds, zero-velocity surface, weak stability boundary, low-energy transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Phase Space & Phase Space Conduit
  desc: Dynamical systems geometry — from the 6D CR3BP phase space to transport tubes linking energy regions.
  image: /logo.png
og:
  title: Phase Space & Phase Space Conduit — Detailed Definition
  description: The $2n$-dimensional space spanned by position and velocity coordinates — the geometric foundation of dynamical systems. In the CR3BP the phase space is six-dimensional, constrained by the Jacobi constant; phase space conduits are transport tubes connecting distinct energy regions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Phase Space & Phase Space Conduit — Detailed Definition
  description: CR3BP phase space geometry — from the 6D space to low-dimensional transport tubes.
  image: /logo.png
permalink: /en/glossary/dynamics/phase-space/
---

# Phase Space & Phase Space Conduit (相空间与相空间通道)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Phase Space

The **phase space** is the abstract space formed by all possible states of a dynamical system. For a system with $n$ degrees of freedom, the phase space is $2n$-dimensional: $n$ position coordinates plus $n$ momentum (or velocity) coordinates. It is the natural geometric framework for analyzing system evolution: the state of the system at any instant corresponds to a point in phase space, and its evolution over time corresponds to a trajectory in phase space (Szebehely 1967; Wiggins 2003).

In the CR3BP, the third body (the spacecraft) in the synodic frame has 3 position coordinates $(x, y, z)$ and 3 velocity coordinates $(\dot{x}, \dot{y}, \dot{z})$, making the phase space **six-dimensional**. However, because the Jacobi constant $C_J$ is conserved (in the CR3BP), the actual dynamics are constrained to a **five-dimensional energy manifold**. The zero-velocity surface partitions this five-dimensional manifold into forbidden regions (where $C_J$ corresponds to a negative squared velocity) and accessible regions, forming the outermost flux barrier of the phase space. After further dimensionality reduction via a Poincaré section, the phase space of the planar CR3BP (PCRTBP) reduces to a discrete map on a two-dimensional section (Koon et al. 2011).

### Structural Elements of the Phase Space

In the CR3BP phase space, the following structures govern the global properties of spacecraft orbit evolution:

- **Equilibrium points (libration points)**: positions in phase space with zero velocity; in the CR3BP synodic frame there are five ($L_1$–$L_5$), which are steady-state solutions and serve as hubs for most dynamical structures.

- **Periodic orbits**: closed curves (one-dimensional tori) in phase space, including Lyapunov orbits, Halo orbits, DROs, etc. Each periodic orbit has a specific energy level (a specific $C_J$ value).

- **Invariant tori (quasi-periodic orbits)**: two-dimensional torus structures; Lissajous orbits are the representative example, driven by two incommensurable frequencies.

- **Invariant manifolds**: stable/unstable manifolds associated with periodic orbits and tori, comprising low-dimensional transport highways in phase space (Koon et al. 2011).

- **Zero-velocity surfaces**: the locus of positions where velocity vanishes for a given $C_J$; these are natural boundaries that the spacecraft cannot cross.

## Phase Space Conduit

A **phase space conduit** (also called a transport tube) is a low-dimensional phase-space structure that connects regions near similar but distinct energy levels. A spacecraft can traverse a forbidden region along such a conduit with very low (or even zero) propellant cost (Belló et al. 2010; Koon et al. 2011).

Geometrically, at a certain energy level where the zero-velocity surface has not yet fully sealed the boundary between two regions, the invariant manifolds (especially the stable/unstable manifold tubes of $L_1$ or $L_2$) pierce through what appears to be a closed forbidden zone, forming a narrow phase-space passage. A spacecraft that lies precisely on the manifold of such a conduit (or enters it via a small impulse) can achieve a natural low-energy transfer between the two regions. This is the core dynamical principle behind invariant-manifold-based weak-stability-boundary (WSB) transfer methods (Koon et al. 2011).

In cislunar space:

- The manifold tubes of the Earth-Moon $L_1$ and $L_2$ points form phase space conduits connecting the Earth neighborhood and the lunar neighborhood.

- Overlapping regions of Sun-Earth $L_1$/$L_2$ and Earth-Moon $L_1$/$L_2$ manifolds form phase space conduits for cross-system (Sun-Earth to Earth-Moon) transfers (Howell and Kakoi 2006).

- The opening and closing of the lunar $L_1$ and $L_2$ conduits depends on the Jacobi constant: the higher the energy (smaller $C_J$), the wider the conduit; below a critical value the conduit closes entirely.

## Related Concepts

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)

## References

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies (classical exposition of CR3BP phase space structure and linearized manifolds)

- Koon, Lo, Marsden, and Ross, 2011, Dynamical Systems, the Three-Body Problem and Space Mission Design (systematic theory of phase space conduits / transport tubes; manifold patching methods)

- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design (visualization and analysis of phase space conduits near libration points)

- Wiggins, 2003, Introduction to Applied Nonlinear Dynamical Systems and Chaos (mathematical foundations of phase space and invariant manifold theory)
