---
title: Hill's Region and the Hill Problem (Hill's Region & Hill Problem)
description: The allowed region of motion in the restricted three-body problem bounded by the Jacobi constant (zero-velocity surfaces) and its topological configurations, together with the Hill problem limit model as the mass parameter goes to zero — covering the five region configurations, Hill stability, periodic orbit families, and the Hill-model Lambert solution.
keywords: Hill region, Hill's region, Hill stability, Hill problem, Hill model, zero-velocity surface, Jacobi constant, forbidden region, allowed region, periodic orbit family
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Hill's Region and the Hill Problem
  desc: Allowed region, topological configurations, and the Hill limit model of the restricted three-body problem.
  image: /logo.png
og:
  title: Hill's Region and the Hill Problem Explained | Glossary
  description: The allowed region bounded by zero-velocity surfaces and the Hill problem limit model in the restricted three-body problem.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill's Region and the Hill Problem Explained | Glossary
  description: Hill region configurations and the Hill limit model.
  image: /logo.png
permalink: /en/glossary/dynamics/hill-region-and-hill-problem/
---

# Hill's Region and the Hill Problem (Hill's Region & Hill Problem)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Hill's region is the region of configuration space in which a third body is allowed to move in the circular restricted three-body problem. In the synodic frame the third body's energy is measured by the Jacobi constant (see [Jacobi Integral](/glossary/dynamics/jacobi-integral/)); for a given value $C$, the zero-velocity surfaces (see [Zero-Velocity Surface](/glossary/dynamics/zero-velocity-surface/)) split position space into allowed and forbidden regions, and Hill's region is the projection of the energy manifold onto position space (Szebehely 1967; Topputo 2013). Intuition: in a forbidden region the potential energy exceeds the total energy, so the body cannot reach it.

## Five Topological Configurations

The values of the Jacobi constant $C$ at the five libration points, $C(L_1), C(L_2), C(L_3), C(L_4)=C(L_5)$, separate the problem into five geometric configurations (Sousa-Silva et al. 2018; Szebehely 1967):

1. $C > C(L_1)$: two disconnected neighborhoods of the primaries; the body cannot pass between them;
2. $C(L_2) < C < C(L_1)$: the two regions join through the neck between the Earth and L1; the body can pass between primaries;
3. $C(L_3) < C < C(L_2)$: both the L1 and L2 necks open; the allowed region surrounds the inner region and extends outward;
4. $C(L_4) < C < C(L_3)$: the L3 neck opens, giving access from the inner region to the far exterior;
5. $C < C(L_4)$: all space is allowed except the two singular neighborhoods; the equilateral libration neighborhoods become passable.

Smaller $C$ means a larger allowed region and stronger connectivity. This criterion decides whether a probe can cross freely between the Earth and Moon gravity domains and when it needs gravity assist or maneuvers — the basis of qualitative reachability analysis (the "Hill region configuration" refers precisely to these five configurations).

## Hill Stability

Hill stability is the condition that mutual distances in a three-body system remain bounded: when the Jacobi constant satisfies $C > C(L_1)$ (for the CR3BP), or the corresponding energy criterion holds in the general three-body problem, the smaller primary cannot escape the other; distances remain bounded. It generalizes partially to the general three-body problem (Marchal 1990; Szebehely 1967) and is a common tool for judging long-term boundedness and distinguishing escape/non-escape and bounded motion.

## The Hill Problem: the Limit Model as the Mass Parameter Vanishes

The Hill problem is the limiting approximation of the restricted three-body problem as the mass parameter $\mu \to 0$ (third body near the smaller primary): shift the origin to the smaller body and expand locally; the equations retain first-order gravity plus centrifugal/Coriolis terms, giving an autonomous Hamiltonian system

$\ddot{x} - 2\dot{y} = 3x - \frac{x}{r^3}$, $\ddot{y} + 2\dot{x} = -\frac{y}{r^3}$, $\ddot{z} = -\frac{z}{r^3}$

(nondimensionalized, $r=\sqrt{x^2+y^2+z^2}$). This model preserves the main features of the restricted problem: a Jacobi-type integral, periodic orbits organized in one-parameter families (Hénon's classic classification), and period $2\pi$ in the rotating frame. It is the theoretical starting point for deriving and classifying basic periodic orbit families for Earth-Moon transfers and an entry model for more complex three-body dynamics (Hénon 1969; Mingotti et al. 2012; Gómez et al. 2001). Gómez and Marcote provide high-order analytical solutions of Hill's equations (Gómez and Marcote 2006).

## The Hill Model and Three-Body Lambert Solutions

In engineering literature "Hill model" has another use: approximate the restricted three-body problem by Hill-equation form when the spacecraft motion range is far smaller than the primary separation, so that the three-body Lambert problem can be solved by a two-layer iteration correcting initial/final position vectors; Sukhanov and Prado based a Lambert solver with good convergence on this model (Sukhanov and Prado 2004). This usage refers to a different object from "Hill's region" and "Hill problem" — keep them distinct.

## Related Concepts

- [Jacobi Integral](/glossary/dynamics/jacobi-integral/)

- [Zero-Velocity Surface](/glossary/dynamics/zero-velocity-surface/)

- [Synodic Frame](/glossary/fundamentals/synodic-frame/)

- [Poincaré Section](/glossary/dynamics/poincare-section/)

- [Invariant Manifold](/glossary/dynamics/invariant-manifold/)

## References

- Szebehely, 1967, Theory of Orbits: The Restricted Problem of Three Bodies (Hill's region and the five configurations)

- Marchal, 1990, The Three-Body Problem (Hill stability)

- Hénon, 1969, Numerical exploration of the restricted problem. V (Hill-problem periodic orbit families)

- Gómez and Marcote, 2006, High-order analytical solutions of Hill's equations

- Mingotti et al., 2012, Transfers to distant periodic orbits around the Moon via their invariant manifolds

- Sukhanov and Prado, 2004 (Hill-model Lambert solution)

- Sousa-Silva et al., 2018, Fast Earth-Moon transfers with ballistic capture (five Hill region configurations)

- Topputo, 2013 (energy-manifold projection and reachable sets)
