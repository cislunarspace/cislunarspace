---
title: Birkhoff-Gustavson Normal Form
description: A detailed explanation of the Birkhoff-Gustavson Normal Form definition, its application in Hamiltonian system canonical transformations, and its role in cislunar libration point orbit parameterization
keywords: Birkhoff-Gustavson Normal Form, Hamiltonian System, Canonical Transformation, Normal Form Theory, Libration Point Orbit, Legendre Expansion, Central Manifold
author: Tianjiang Talk
date: 2026-04-23
lastUpdated: 2026-04-26
wechatShare:
  title: Birkhoff-Gustavson Normal Form
  desc: One-stop learning for cislunar research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Birkhoff-Gustavson Normal Form | Hamiltonian System Canonical Transformation
  description: A detailed explanation of the Birkhoff-Gustavson Normal Form definition, its application in Hamiltonian system canonical transformations, and its role in cislunar libration point orbit parameterization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Birkhoff-Gustavson Normal Form | Hamiltonian System Canonical Transformation
  description: A detailed explanation of the Birkhoff-Gustavson Normal Form definition, its application in Hamiltonian system canonical transformations, and its role in cislunar libration point orbit parameterization
  image: /logo.png
permalink: /en/glossary/dynamics/birkhoff-gustavson/
---

# Birkhoff-Gustavson Normal Form

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Edited from: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Birkhoff-Gustavson Normal Form (B-G Normal Form) is a **canonical transformation method** that expands a Hamiltonian system near an equilibrium point into a diagonalized polynomial form. It was proposed by Birkhoff (1927) and later applied by Gustavson (1966) to stellar system problems in celestial mechanics.

In the Circular Restricted Three-Body Problem (CR3BP), the Birkhoff-Gustavson Normal Form performs **Legendre expansion** and **Lie transformation** on the Hamiltonian function near a libration point. Higher-order nonlinear terms are progressively eliminated, ultimately yielding a separable, diagonalized Hamiltonian expression that gives the system **integrability** under small perturbations.

## Mathematical Background

### From CR3BP to Polynomial Hamiltonian

The CR3BP Hamiltonian, after coordinate translation and normalization near a libration point, can be expanded into a sequence of homogeneous polynomials:

$$H = \sum_{n \geq 2} H_n = H_2 + H_3 + H_4 + \cdots$$

where $H_n$ is an $n$-th order homogeneous polynomial. Through Legendre expansion, the nonlinear terms $(1-\mu)/r_1$ and $\mu/r_2$ can be transformed into polynomial form:

$$\frac{1}{\sqrt{(x-A)^2+(y-B)^2+(z-C)^2}} = \frac{1}{D}\sum_{n=0}^{\infty}\left(\frac{\rho}{D}\right)^n P_n\left(\frac{Ax+By+Cz}{D\rho}\right)$$

where $P_n$ is the $n$-th order Legendre polynomial.

### Diagonalization of the Linear Term $H_2$

In the neighborhood of a libration point, the linearized Hamiltonian $H_2$ corresponds to a **saddle × center × center** dynamics structure:

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

where:

- $\lambda$: hyperbolic characteristic frequency (unstable direction)
- $\omega_p$, $\omega_\nu$: characteristic frequencies of the two center modes

Through a real linear symplectic transformation matrix $C$ (satisfying $C^TJC = J$), the original coordinates can be mapped to the diagonalized basis.

### Gustavson's Contribution

Gustavson (1966) proved that by normalizing the Hamiltonian to infinite order, **additional integrals** (beyond the Hamiltonian itself) can be obtained. This method is called the "indirect method," using Lie series to transform the Hamiltonian into Birkhoff-Gustavson Normal Form, thereby directly identifying the integrals.

## Lie Transformation Process

The construction of the normal form is achieved via **Lie transformation**. For an $n$-th order generating function $G_n$, the transformed Hamiltonian is:

$$\hat{H}_n = H_n + \{H_2, G_n\}$$

By choosing appropriate generating functions $G_n$, non-resonant terms can be progressively eliminated while resonant terms are retained (resonant terms are critical for understanding the bifurcation of Halo orbit families). Specifically:

- For third-order terms: use $G_3$ to eliminate terms with $i_1 \neq j_1$ (preserving the hyperbolic part $q_1 p_1$)
- For higher-order terms: use $G_n$ progressively for elimination

There is a trade-off between normalization precision and computational cost. Qiao et al. (2025) noted that when the expansion order $N$ exceeds 13, error reduction slows (limited by 15 significant digits of double-precision floating point), recommending $N=15$.

## Relationship with Other Methods

| Method | Precision | Integrability | Limitations |
|:---|:---|:---|:---|
| Linearization ($H_2$) | Low | Exactly integrable | Only applicable in the immediate vicinity of libration points |
| B-G Normal Form (low-medium order) | Medium | Approximately integrable | Resonant terms eliminated; large errors for high-amplitude orbits |
| **Complete B-G Normal Form ($N \to \infty$)** | **High** | **Integrable** | **Computational cost grows exponentially** |
| Central Manifold Theory | — | Semi-integrable | Only handles center directions |

Qiao et al. (2025) built on this foundation by introducing **central manifold theory**, decoupling the hyperbolic unstable direction from the central manifold to form a more complete parameterization system.

## Applications

In Qiao et al. (2025), Birkhoff-Gustavson Normal Form combined with central manifold theory is used to:

1. Decompose the CR3BP six-dimensional phase space into hyperbolic directions ($q_1, p_1$) and central manifold directions ($I_2, \theta_2, I_3, \theta_3$)
2. Establish a **bijective correspondence** from Cartesian coordinates to characteristic parameters
3. Establish a libration point orbit distribution map via Poincare sections

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Canonical Transformation](/en/glossary/canonical-transformation/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Lie Transformation
- Hamiltonian System
- Poincare Section

## References

- Birkhoff G D. Dynamical systems[M]. American Mathematical Society, 1927.
- Gustavson F G. On constructing formal integrals of a Hamiltonian system near an equilibrium point[J]. Astronomical Journal, 1966, 71: 670.
- Jorba A, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
