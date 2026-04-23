---
title: Birkhoff-Gustavson Normal Form
description: Detailed explanation of the Birkhoff-Gustavson Normal Form — a canonical transformation method for diagonalizing Hamiltonian systems near equilibrium points, with applications in cislunar libration point orbit parameterization
keywords: Birkhoff-Gustavson Normal Form, Hamiltonian system, canonical transformation, normal form theory, libration point orbit, Legendre expansion, central manifold
author: CislunarSpace
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Birkhoff-Gustavson Normal Form
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Birkhoff-Gustavson Normal Form | Hamiltonian Canonical Transformation
  description: Detailed explanation of the Birkhoff-Gustavson Normal Form — a canonical transformation method for diagonalizing Hamiltonian systems near equilibrium points
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Birkhoff-Gustavson Normal Form | Hamiltonian Canonical Transformation
  description: Detailed explanation of the Birkhoff-Gustavson Normal Form — a canonical transformation method for diagonalizing Hamiltonian systems
  image: /logo.png
permalink: /en/glossary/birkhoff-gustavson/
---

# Birkhoff-Gustavson Normal Form

> Source: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **Birkhoff-Gustavson Normal Form** (B-G Normal Form) is a canonical transformation technique that diagonalizes a Hamiltonian system near an equilibrium point into a polynomial form. Proposed by Birkhoff (1927) and later applied to galactic mechanics by Gustavson (1966), it enables the conversion of nonlinear dynamics into an integrable system through Legendre expansion and Lie transformation.

In the Circular Restricted Three-Body Problem (CR3BP), applying the Birkhoff-Gustavson Normal Form near libration points transforms the Hamiltonian into a diagonalized polynomial expression, endowing the system with **approximate integrability** under small perturbations.

## Mathematical Background

### From CR3BP to Polynomial Hamiltonian

The CR3BP Hamiltonian, after coordinate translation and normalization near a libration point, can be expanded as a series of homogeneous polynomials:

$$H = \sum_{n \geq 2} H_n = H_2 + H_3 + H_4 + \cdots$$

where $H_n$ is a homogeneous polynomial of order $n$. The nonlinear gravitational terms $(1-\mu)/r_1$ and $\mu/r_2$ are converted to polynomial form via Legendre expansion:

$$\frac{1}{\sqrt{(x-A)^2+(y-B)^2+(z-C)^2}} = \frac{1}{D}\sum_{n=0}^{\infty}\left(\frac{\rho}{D}\right)^n P_n\left(\frac{Ax+By+Cz}{D\rho}\right)$$

where $P_n$ is the $n$-th order Legendre polynomial.

### Diagonalization of the Linear Part $H_2$

Near a collinear libration point, the linearized Hamiltonian $H_2$ exhibits a **saddle × center × center** dynamical structure:

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

where:
- $\lambda$: hyperbolic eigenfrequency (unstable direction)
- $\omega_p$, $\omega_\nu$: eigenfrequencies of the two center modes

A real linear symplectic transformation matrix $C$ (satisfying $C^TJC = J$) maps the original coordinates to the diagonalized basis.

### Gustavson's Contribution

Gustavson (1966) demonstrated that by normalizing the Hamiltonian to infinite order, **additional integrals** beyond the Hamiltonian itself can be obtained. This "indirect method" uses Lie series to transform the Hamiltonian into Birkhoff-Gustavson Normal Form, immediately revealing the integrals.

## Lie Transformation Process

The construction of the normal form is achieved via **Lie transformation**. For an $n$-th order generating function $G_n$, the transformed Hamiltonian is:

$$\hat{H}_n = H_n + \{H_2, G_n\}$$

By selecting appropriate generating functions $G_n$, non-resonant terms are progressively eliminated while resonant terms (critical for understanding bifurcations in the Halo orbit family) are retained. Specifically:

- For cubic terms: $G_3$ eliminates terms with $i_1 \neq j_1$ (preserving the hyperbolic part $q_1 p_1$)
- For higher-order terms: $G_n$ is applied order by order

There is a trade-off between normalization order and computational cost. Qiao et al. (2025) found that when the expansion order $N$ exceeds 13, error reduction slows (limited by double-precision 15 significant digits), recommending $N = 15$.

## Relationship to Other Methods

| Method | Precision | Integrability | Limitation |
|:---|:---|:---|:---|
| Linearization ($H_2$) | Low | Exactly integrable | Only valid very close to libration point |
| B-G Normal Form (low-mid order) | Medium | Approximately integrable | Resonant terms eliminated; large-amplitude orbits have large errors |
| **Full B-G Normal Form ($N \to \infty$)** | **High** | **Integrable** | **Exponential growth in computation** |
| Central Manifold Theory | — | Semi-integrable | Only handles center directions |

Qiao et al. (2025) combine the Birkhoff-Gustavson Normal Form with **central manifold theory** to decouple the hyperbolic unstable direction from the central manifold, forming a more complete parameterization system.

## Applications

In Qiao et al. (2025), the Birkhoff-Gustavson Normal Form combined with central manifold theory is used to:

1. Decompose the CR3BP six-dimensional phase space into hyperbolic directions ($q_1, p_1$) and central manifold directions ($I_2, \theta_2, I_3, \theta_3$)
2. Establish a **bijective correspondence** between Cartesian coordinates and characteristic parameters
3. Build a distribution map of libration point orbits via Poincaré sections

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Canonical Transformation](/en/glossary/canonical-transformation/) (if exists)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Poincaré Section](/en/glossary/poincare-section/)
- [Orbit Identification](/en/glossary/orbit-identification/)
- Lie Transformation
- Hamiltonian System
- Invariant Manifold

## References

- Birkhoff G D. Dynamical systems[M]. American Mathematical Society, 1927.
- Gustavson F G. On constructing formal integrals of a Hamiltonian system near an equilibrium point[J]. Astronomical Journal, 1966, 71: 670.
- Jorba À, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
