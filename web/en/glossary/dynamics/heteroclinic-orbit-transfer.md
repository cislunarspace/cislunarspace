---
title: Heteroclinic Orbit Transfer (Heteroclinic Orbit Transfer / Homoclinic Connections)
description: Heteroclinic and homoclinic connections between libration-point periodic orbits in the restricted three-body problem: definition, Poincaré-section intersection, phasing strategies, and the Interplanetary Superhighway.
keywords: Heteroclinic Orbit, Homoclinic Orbit, Heteroclinic Connection, Homoclinic Connection, Phasing, Interplanetary Superhighway, Low-Energy Transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Heteroclinic Orbit Transfer (Heteroclinic Orbit Transfer)
  desc: Manifold-tube intersections, heteroclinic/homoclinic connections, and the interplanetary superhighway.
  image: /logo.png
og:
  title: Heteroclinic Orbit Transfer Explained | Interplanetary Superhighway
  description: Heteroclinic and homoclinic connections between libration-point periodic orbits in the restricted three-body problem, including Poincaré-section intersection and phasing.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Heteroclinic Orbit Transfer Explained | Interplanetary Superhighway
  description: Heteroclinic and homoclinic connections between libration-point periodic orbits in the restricted three-body problem, including Poincaré-section intersection and phasing.
  image: /logo.png
permalink: /en/glossary/dynamics/heteroclinic-orbit-transfer/
---

# Heteroclinic Orbit Transfer (Heteroclinic Orbit Transfer / Homoclinic Connections)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **heteroclinic orbit** connects two different invariant sets (equilibrium points or periodic orbits); if the departure and arrival sets are the same, the orbit is called **homoclinic**. In the CR3BP, heteroclinic connections commonly appear as geometric intersections of the stable manifold of one libration-point periodic orbit with the unstable manifold of another (Koon et al. 1999).

Let $\mathcal{A}$ and $\mathcal{B}$ be two periodic orbits and denote by $\mathcal{H}_{\mathcal{AB}}$ a heteroclinic orbit from $\mathcal{A}$ to $\mathcal{B}$. Then

$$\lim_{t\to-\infty}\phi^t(x)\to\mathcal{A},\qquad \lim_{t\to+\infty}\phi^t(x)\to\mathcal{B}.$$

When both $\mathcal{H}_{\mathcal{AB}}$ and $\mathcal{H}_{\mathcal{BA}}$ exist, they form a **heteroclinic cycle**. A homoclinic orbit $\mathcal{H}_{\mathcal{AA}}$ is already a cycle by itself.

## Intersection via Poincaré Sections

A heteroclinic connection corresponds to a transverse intersection of two manifold tubes. Directly intersecting two 2-D tubes in 6-D phase space is difficult. Using the Jacobi integral reduces the space to 5-D; taking a transverse **Poincaré section** reduces the intersection of each tube with the section to a 1-D curve, and the intersection of two curves yields candidate heteroclinic connections (Koon et al. 1999).

For example, to construct a connection from an $L_2$ periodic orbit to an $L_1$ periodic orbit:

1. Compute the unstable manifold of the $L_2$ orbit and integrate it forward to the section;
2. Compute the stable manifold of the $L_1$ orbit and integrate it backward to the same section;
3. Locate intersections of the two resulting curves on the section;
4. Integrate forward and backward from the intersection and differentially correct to obtain the heteroclinic orbit.

This reduction from a surface-surface intersection problem to a curve-curve intersection problem is the core of the space-manifold-dynamics design approach.

## Homoclinic / Heteroclinic Phasing

Homoclinic and heteroclinic connections can also be used for **indirect phasing**. A spacecraft leaves a target orbit along its unstable manifold, evolves along a connecting orbit, and returns along the stable manifold of another (or the same) periodic orbit. By choosing different connection combinations, a desired phase shift can be accumulated while paying only the small impulses needed to enter and exit the libration-point orbits.

## Interplanetary Superhighway and Mission Examples

The network formed by libration-point manifold tubes together with their heteroclinic and homoclinic connections is called the **Interplanetary Superhighway**. Its characteristics include:

- **Low energy**: trajectories follow natural dynamical channels with very small fuel cost;

- **Networked**: manifolds of different systems splice together, forming a solar-system-scale transfer network;

- **Long time scales**: transfer times are often measured in months or years rather than days.

A canonical example is the Genesis return trajectory. The spacecraft moved from a Sun–Earth $L_1$ halo orbit through an $L_2$-region heteroclinic cycle and back to the $L_1$ neighborhood, covering millions of kilometers with only a few m/s of deterministic $\Delta V$ (Koon et al. 1999; Lo 2002).

## Related Concepts

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (1999). The Genesis trajectory and heteroclinic connections.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (2006/2011). *Dynamical systems, the three-body problem and space mission design*.

- Lo, M. W. (2002). The Interplanetary Superhighway and the Genesis Mission. JPL.

- Gómez, G., et al. (2001). *Invariant manifolds, the spatial three-body problem and space mission design*.

- Ren, Y., et al. (2011). On the mechanisms of natural transport in the solar system.

- Guo, J. (2020). Libration-point orbit design and maintenance based on double-baseline invariant manifolds. Beijing University of Technology.
