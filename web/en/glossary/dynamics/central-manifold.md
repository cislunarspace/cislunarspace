---
title: Central Manifold
description: A detailed explanation of the role of central manifold theory in CR3BP libration point orbit parameterization, and the decoupling method for hyperbolic and center directions
keywords: Central Manifold, CR3BP, Libration Points, Hyperbolic Invariant Manifold, Stable Manifold, Unstable Manifold, Orbit Parameterization
author: Tianjiang Talk
date: 2026-04-23
lastUpdated: 2026-04-26
wechatShare:
  title: Central Manifold
  desc: One-stop learning for cislunar research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Central Manifold | CR3BP Libration Point Orbit Parameterization
  description: A detailed explanation of the role of central manifold theory in CR3BP libration point orbit parameterization, and the decoupling method for hyperbolic and center directions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Central Manifold | CR3BP Libration Point Orbit Parameterization
  description: A detailed explanation of the role of central manifold theory in CR3BP libration point orbit parameterization, and the decoupling method for hyperbolic and center directions
  image: /logo.png
permalink: /en/glossary/dynamics/central-manifold/
---

# Central Manifold

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Edited from: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Central Manifold is the invariant manifold composed of the **neutral stable directions** in the phase space decomposition near an equilibrium point of a Hamiltonian system. In the dynamics study of cislunar libration points (especially collinear libration points $L_1, L_2, L_3$), central manifold theory is the core tool for dimension reduction of high-dimensional phase space and revealing orbital geometric structure.

In the neighborhood of CR3BP collinear libration points, the linearized dynamics exhibit a **saddle × center × center** structure:

- **Hyperbolic directions** (saddle/unstable): along unstable and stable manifolds, state variables grow or decay exponentially
- **Center directions** (center/stable): the two center modes move along elliptical orbits, with bounded oscillatory state variables

The central manifold corresponds to the collection of both **center directions**, forming the low-dimensional invariant manifold on which libration point orbit families (such as Halo orbits, Lyapunov orbits, and Lissajous orbits) reside.

## Dynamics Structure

For the linearized Hamiltonian of CR3BP collinear libration points:

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

The three eigenvalues correspond to the following motion patterns:

| Eigenvalue | Symbol | Motion Character |
|:---|:---|:---|
| $\lambda$ | Square root of $\eta_1 < 0$ | Hyperbolic: $q_1$ grows exponentially, $p_1$ decays exponentially |
| $\omega_p$ | Square root of $\eta_2 > 0$ | Center: elliptical motion in the $XY$ plane |
| $\omega_\nu$ | Square root of $\eta_3 > 0$ | Center: oscillatory motion in the $Z$ direction |

## Decoupling from Hyperbolic Invariant Manifolds

One of the core contributions of Qiao et al. (2025) is the decoupling of the hyperbolic directions from the central manifold via **canonical transformation**. The decoupled Hamiltonian takes the form:

$$\hat{H} = H_2 + \hat{H}_N(q_1 p_1, I_2, I_3, \theta_2, \theta_3) + R_N(q,p)$$

where $R_N$ is the high-order remainder beyond order $N$. The key effect of this decoupling is:

- The hyperbolic directions $q_1, p_1$ appear in the higher-order terms only as the **product form** $q_1 p_1$, no longer coupled with the center direction coordinates
- Motion on the central manifold is described by only four parameters $(I_2, \theta_2, I_3, \theta_3)$

This decoupling enables **independent treatment** of hyperbolic escape/capture dynamics (stable/unstable manifolds) and periodic/quasi-periodic orbital motion when studying libration point orbit families.

## Motion on the Central Manifold

On the central manifold, motion can be described by **action-angle variables**. Let the central manifold Hamiltonian be:

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

Then:

- Actions $I_2, I_3$ are constant in the linear part (integrals), with long-period perturbation oscillations arising from higher-order terms
- Angle variables $\theta_2, \theta_3$ vary linearly: $\theta = \omega t + \theta_0$, with small-amplitude vibrations superimposed from higher-order terms

### Poincare Section Analysis

Motion on the central manifold is a two-dimensional torus motion in a four-dimensional phase space. Using a Poincare section ($\theta_2 = 0$ or $\theta_3 = \pi/2$) reduces the phase space dimension for visualization.

On the Poincare section:

- **Lyapunov orbits**: section intersection curves corresponding to $I_3 = 0$
- **Vertical Lyapunov orbits**: section intersection curves corresponding to $I_2 = 0$
- **Halo orbits**: the torus contracts to the central point, corresponding to specific energy layers near $\theta_3 = \pi/2$ or $3\pi/2$
- **Lissajous orbits**: ergodic trajectories on the section, where $\theta_3$ traverses the entire section in $[0, 2\pi)$
- **Quasi-Halo orbits**: locally forming torus structures

## Definition of Invariant Manifolds

Based on the decoupled characteristic parameters, the stable manifold $W_s$ and unstable manifold $W_u$ can be succinctly defined as:

$$W_s = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ q_1 = 0\}$$

$$W_u = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ p_1 = 0\}$$

- When $q_1 = 0$, $p_1 \neq 0$: $p_1$ decays exponentially to zero over time → stable manifold (approaching the libration point)
- When $p_1 = 0$, $q_1 \neq 0$: $q_1$ grows exponentially over time → unstable manifold (departing from the libration point)

## Role in Orbit Parameterization

Qiao et al. (2025) used central manifold theory to establish a six-dimensional characteristic parameter system for the neighborhood of Earth-Moon collinear libration points:

| Parameter | Description | Physical Meaning |
|:---|:---|:---|
| $q_1$ | Hyperbolic direction coordinate | Degree of entry along the unstable manifold |
| $p_1$ | Hyperbolic direction momentum | Degree of entry along the stable manifold |
| $I_2$ | Central manifold action 1 | Amplitude of motion in the $XY$ plane |
| $\theta_2$ | Central manifold angle 1 | Phase in the $XY$ plane |
| $I_3$ | Central manifold action 2 | Amplitude of motion in the $Z$ direction |
| $\theta_3$ | Central manifold angle 2 | Phase in the $Z$ direction |

## Related Concepts

- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Poincare Section](/en/glossary/poincare-section/)
- [Canonical Transformation](/en/glossary/canonical-transformation/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Hyperbolic Invariant Manifold
- Stable/Unstable Manifold
- Halo Orbit (Lissajous Orbit)

## References

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Jorba A, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
