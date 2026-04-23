---
title: Poincaré Section
description: Detailed explanation of the Poincaré Section — a dimensional reduction technique for visualizing high-dimensional phase space dynamics, with applications in cislunar libration point orbit family identification
keywords: Poincaré section, phase space visualization, central manifold, invariant torus, orbit identification, cislunar space
author: CislunarSpace
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Poincaré Section
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Poincaré Section | Libration Point Orbit Distribution Visualization
  description: Detailed explanation of the Poincaré Section and its application in visualizing cislunar libration point orbit families
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Poincaré Section | Libration Point Orbit Distribution Visualization
  description: Detailed explanation of the Poincaré Section and its application in visualizing cislunar libration point orbit families
  image: /logo.png
permalink: /en/glossary/poincare-section/
---

# Poincaré Section

> Source: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Poincaré Section** (also called Poincaré map or surface of section) is a lower-dimensional cross-section formed by the intersection of a high-dimensional manifold in phase space with a designated hypersurface. It is used to visualize the dynamical structure of Hamiltonian systems and distinguish between different types of periodic and quasi-periodic orbits. In cislunar libration point research, the Poincaré section is the core tool for dimensional reduction and visualization of the 4D central manifold phase space.

## Principles

For phase spaces with more than two dimensions, direct orbital visualization is impractical. The Poincaré section technique records the points where an orbit repeatedly crosses a lower-dimensional section. When the orbit's intersection points on the section form:

- **Closed curves**: corresponding to quasi-periodic orbits (torus)
- **Isolated discrete points**: corresponding to periodic orbits
- **Chaotic scatter points**: corresponding to chaotic motion

Since Hamiltonian systems conserve energy, trajectories are confined to an $N-1$ dimensional energy surface. For the CR3BP collinear libration point central manifold ($N=4$), the Poincaré section is 2D.

## Application to Cislunar Libration Points

Qiao et al. (2025) employ two types of sections:

### 1. $\theta_2 = 0$ Section

Taking $\theta_2 = 0$ as the section in central manifold coordinates (verified numerically to have the most frequent phase flow crossings). At a fixed energy level $C$, the section equation is:

$$H_{CM}(I_2, 0, I_3, \theta_3) = C$$

A uniform grid of points is selected on the section, initial conditions on the central manifold are computed and integrated, and crossing points are marked to produce the section diagram.

### 2. $\theta_3 = \pi/2$ Section (Energy-Aggregate Section)

To display all orbit families (particularly the Halo orbit family at the torus center) on a single section, Qiao et al. (2025) select the $\theta_3 = \pi/2$ section and overlay contour lines for different energy levels $C$, producing a "map" containing all orbit families near the libration point.

## Orbit Family Signatures on the Section

On the $\theta_3 = \pi/2$ section of Earth-Moon collinear libration points, different orbit families exhibit distinctly different geometric features:

| Orbit Family | Section Signature |
|:---|:---|
| **Lyapunov orbit** | Intersection curve with $I_3 = 0$ |
| **Vertical Lyapunov orbit** | Intersection curve with $I_2 = 0$ |
| **Lissajous orbit** | Trajectory fills the entire available region as $\theta_3$ varies over $[0, 2\pi)$ |
| **Quasi-Halo orbit** | Locally forms **toroidal structures** |
| **Halo orbit** | Torus shrinks to a point at specific $I_2, I_3$ values |
| **Northern/Southern family** | Two toroidal structures centered at $\theta_3 = \pi/2$ and $\theta_3 = 3\pi/2$ respectively |

### Key Findings

- At low energy levels, **no Halo orbits exist** in the section — this shows that Halo orbits originate from **bifurcation** of Lyapunov orbits as energy increases
- Northern and southern Halo orbit families are **indistinguishable** on the $\theta_3 = \pi/2$ section (symmetry); determining which family requires examining the $\theta_3$ value
- Near $L_3$, neither Halo nor vertical Lyapunov orbits appear in the section because their bifurcation occurs far from the libration point (near Earth), where strong nonlinearity causes B-G expansion failure

## Application to Orbit Identification

Qiao et al. (2025) develop the Poincaré section into a **distribution map** for libration point orbits, used for:

1. Given an observed spacecraft state sequence, convert to characteristic parameters $(I_2, I_3)$
2. Locate the nearest reference orbit on the section diagram
3. Use optimization (Bayesian optimization) to find the reference orbit with minimum MSE

This method bypasses the difficulties of direct numerical integration in chaotic environments, achieving orbit identification through "map lookup."

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Orbit Identification](/en/glossary/orbit-identification/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Invariant Torus
- Bifurcation
- Quasi-periodic Orbit

## References

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
