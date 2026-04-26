---
title: Central Manifold
description: Detailed explanation of central manifold theory in CR3BP libration point orbit parameterization — decoupling hyperbolic and central directions in phase space
keywords: central manifold, CR3BP, libration point, hyperbolic invariant manifold, stable manifold, unstable manifold, orbit parameterization
author: CislunarSpace
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Central Manifold
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Central Manifold | CR3BP Libration Point Orbit Parameterization
  description: Detailed explanation of central manifold theory in CR3BP libration point orbit parameterization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Central Manifold | CR3BP Libration Point Orbit Parameterization
  description: Detailed explanation of central manifold theory in CR3BP libration point orbit parameterization
  image: /logo.png
permalink: /en/glossary/central-manifold/
---

# Central Manifold

> Source: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **central manifold** is the neutral-stable invariant manifold formed by the center directions in the phase space decomposition near a Hamiltonian system equilibrium point. In cislunar space libration point (particularly collinear libration points $L_1, L_2, L_3$) dynamics, central manifold theory is the core tool for dimensionality reduction and revealing orbital geometric structure.

In the linearized CR3BP near collinear libration points, the dynamics have a **saddle × center × center** structure:

- **Hyperbolic directions** (saddle/unstable): along stable and unstable manifolds, state variables grow or decay exponentially
- **Center directions** (center/stable): two center modes exhibit bounded oscillatory motion along elliptical orbits

The central manifold corresponds to the totality of the two **center directions**, forming the low-dimensional invariant manifold on which libration point orbit families (Halo orbits, Lyapunov orbits, Lissajous orbits) reside.

## Dynamical Structure

For the linearized CR3BP Hamiltonian near a collinear libration point:

$$H_2 = \lambda q_1 p_1 + \frac{\omega_p}{2}(q_2^2 + p_2^2) + \frac{\omega_\nu}{2}(q_3^2 + p_3^2)$$

The three eigenmodes correspond to:

| Eigenvalue | Symbol | Motion Character |
|:---|:---|:---|
| $\lambda$ | $\sqrt{-\eta_1}$ | Hyperbolic: $q_1$ grows exponentially, $p_1$ decays exponentially |
| $\omega_p$ | $\sqrt{\eta_2}$ | Center: elliptical motion in the $XY$ plane |
| $\omega_\nu$ | $\sqrt{\eta_3}$ | Center: oscillatory motion in the $Z$ direction |

## Decoupling from Hyperbolic Invariant Manifold

A core contribution of Qiao et al. (2025) is the **decoupling** of hyperbolic directions from the central manifold via canonical transformation. After decoupling, the Hamiltonian takes the form:

$$\hat{H} = H_2 + \hat{H}_N(q_1 p_1, I_2, I_3, \theta_2, \theta_3) + R_N(q,p)$$

where $R_N$ is the remainder beyond order $N$. The key effect of decoupling is:

- The hyperbolic coordinates $q_1, p_1$ appear in higher-order terms **only as the product** $q_1 p_1$, with no coupling to center coordinates
- Motion on the central manifold is described solely by the four parameters $(I_2, \theta_2, I_3, \theta_3)$

This decoupling allows **independent treatment** of hyperbolic escape/capture dynamics (stable/unstable manifolds) and periodic/quasi-periodic orbital motion.

## Motion on the Central Manifold

On the central manifold, motion is described by **action-angle variables**. With the central manifold Hamiltonian:

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

we have:

- Action variables $I_2, I_3$ are constant in the linear part (integrals), with higher-order terms introducing long-period oscillatory perturbations
- Angle variables $\theta_2, \theta_3$ vary linearly: $\theta = \omega t + \theta_0$, with higher-order terms adding small-amplitude vibrations

### Poincaré Section Analysis

Motion on the central manifold is a 2D torus in 4D phase space. Using a Poincaré section ($\theta_2 = 0$ or $\theta_3 = \pi/2$) reduces the phase space dimensionality for visualization.

On the Poincaré section:

- **Lyapunov orbits**: intersection curve with $I_3 = 0$
- **Vertical Lyapunov orbits**: intersection curve with $I_2 = 0$
- **Halo orbits**: torus shrinks to a central point at specific energy levels, corresponding to $\theta_3 = \pi/2$ or $3\pi/2$
- **Lissajous orbits**: section trajectory fills the entire available region as $\theta_3$ varies over $[0, 2\pi)$
- **Quasi-Halo orbits**: locally form toroidal structures

## Stable and Unstable Manifolds

Based on the decoupled characteristic parameters, the stable manifold $W_s$ and unstable manifold $W_u$ are defined as:

$$W_s = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ q_1 = 0\}$$

$$W_u = \{[q_1, p_1, I_2, \theta_2, I_3, \theta_3] \mid H_{CM} = C, \ p_1 = 0\}$$

- When $q_1 = 0$, $p_1 \neq 0$: $p_1$ decays exponentially to zero over time → stable manifold (approaching the libration point)
- When $p_1 = 0$, $q_1 \neq 0$: $q_1$ grows exponentially over time → unstable manifold (departing from the libration point)

## Role in Orbit Parameterization

Qiao et al. (2025) leverage central manifold theory to establish a six-dimensional characteristic parameter system for the collinear libration point region:

| Parameter | Description | Physical Meaning |
|:---|:---|:---|
| $q_1$ | Hyperbolic coordinate | Degree of entry along the unstable manifold |
| $p_1$ | Hyperbolic momentum | Degree of entry along the stable manifold |
| $I_2$ | Central action 1 | Amplitude of motion in the $XY$ plane |
| $\theta_2$ | Central angle 1 | Phase in the $XY$ plane |
| $I_3$ | Central action 2 | Amplitude of motion in the $Z$ direction |
| $\theta_3$ | Central angle 2 | Phase in the $Z$ direction |

## Related Concepts

- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Poincaré Section](/en/glossary/poincare-section/)
- [Action-Angle Variables](/en/glossary/action-angle/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Orbit Identification](/en/glossary/orbit-identification/)
- Hyperbolic Invariant Manifold
- Stable/Unstable Manifold
- Halo Orbit / Lissajous Orbit

## References

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Jorba À, Masdemont J. Dynamics in the center manifold of the collinear points of the restricted three body problem[J]. Phys D, 1999, 132(1-2): 189-213.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
