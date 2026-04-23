---
title: Action-Angle Variables
description: Detailed explanation of action-angle variables in integrable Hamiltonian systems, and their specific application in cislunar libration point orbit characterization
keywords: action-angle variables, Hamiltonian system, integrable system, canonical transformation, libration point orbit, characteristic parameters, central manifold
author: CislunarSpace
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Action-Angle Variables
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Action-Angle Variables | Integrable Hamiltonian Systems
  description: Detailed explanation of action-angle variables in integrable Hamiltonian systems and their application in cislunar libration point orbit characterization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Action-Angle Variables | Integrable Hamiltonian Systems
  description: Detailed explanation of action-angle variables in integrable Hamiltonian systems and their application in cislunar libration point orbit characterization
  image: /logo.png
permalink: /en/glossary/action-angle/
---

# Action-Angle Variables

> Source: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
>Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Action-Angle Variables** are the standard tool for analyzing integrable Hamiltonian systems. A pair of conjugate variables $(I, \theta)$:

- **Action** $I$: an integral along a closed orbit, describing the "size" of the orbit
- **Angle** $\theta$: the phase along the periodic orbital motion, increasing linearly

For a one-dimensional integrable Hamiltonian system, after introducing action-angle variables, the Hamiltonian depends only on the action: $H = H(I)$. The conjugate equation for the angle gives a constant angular velocity $\dot{\theta} = \partial H / \partial I$.

## Significance in Hamiltonian Systems

Action-angle variables are canonical coordinates $(q, p)$ transformed via a **canonical transformation** $(q, p) \to (I, \theta)$ using a generating function of the form $S(q, \theta)$. The action is defined as:

$$I = \frac{1}{2\pi}\oint p \, dq$$

The integral is taken around one period of the closed orbit. As $\theta$ varies from $0$ to $2\pi$, the action $I$ remains constant.

With action-angle variables, the phase space geometry of an integrable Hamiltonian system becomes transparent: $I$ describes the cross-sectional radius of the **invariant torus**, and $\theta$ describes the rotational phase on the torus.

## Definitions in Linearized Libration Point Dynamics

After Birkhoff-Gustavson normalization, the CR3BP collinear libration point linearized Hamiltonian has a saddle × center × center structure. For the center modes, Qiao et al. (2025) use:

**Center mode (center mode)**:

$$I_c = \frac{1}{2}(q^2 + p^2), \quad \theta_c = \arctan\left(\frac{q}{p}\right)$$

**Saddle mode (hyperbolic mode)**:

$$I_s = qp, \quad \theta_s = \ln\frac{\sqrt{q}}{\sqrt{p}}$$

where subscript $c$ denotes center motion mode and $s$ denotes the saddle/hyperbolic motion mode.

## Application in Orbital Characteristic Parameters

Qiao et al. (2025) select six characteristic parameters:

| Parameter | Type | Definition | Physical Meaning |
|:---|:---|:---|:---|
| $q_1$ | Saddle coordinate | Retained directly (no action-angle transform) | Degree of entry along unstable manifold |
| $p_1$ | Saddle momentum | Retained directly (no action-angle transform) | Degree of entry along stable manifold |
| $I_2$ | Center action 1 | $I_2 = \frac{1}{2}(q_2^2 + p_2^2)$ | Amplitude of motion in the $XY$ plane |
| $\theta_2$ | Center angle 1 | $\theta_2 = \arctan(q_2/p_2)$ | Phase in the $XY$ plane |
| $I_3$ | Center action 2 | $I_3 = \frac{1}{2}(q_3^2 + p_3^2)$ | Amplitude of motion in the $Z$ direction |
| $\theta_3$ | Center angle 2 | $\theta_3 = \arctan(q_3/p_3)$ | Phase in the $Z$ direction |

**Why not convert $q_1, p_1$ to action-angle form?**

Qiao et al. (2025) give two reasons:
1. The saddle angle variable definition involves complex variables; the physical meaning is abstract in practical applications
2. The values of $q_1, p_1$ alone fully represent the degree to which a spacecraft enters the unstable/stable manifold ($q_1$ exponential growth indicates departure along unstable manifold; $p_1$ exponential decay toward zero indicates approach along stable manifold)

## Equations of Motion on the Central Manifold

With action-angle variables, the central manifold Hamiltonian is:

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

The canonical equations are:

- Action variation: $\dot{I}_j = \{I_j, H_{CM}\} = \{I_j, H_N\}$ (only higher-order terms contribute)
- Angular velocity: $\dot{\theta}_j = \{\theta_j, H_{CM}\} = \omega_j + \{\theta_j, H_N\}$ (linear part + higher-order perturbation)

This shows that with action-angle variables, central manifold motion has a clear integrable structure (linear part) + perturbation correction.

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Poincaré Section](/en/glossary/poincare-section/)
- [Orbit Identification](/en/glossary/orbit-identification/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Invariant Torus
- Integrable System

## References

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Peterson L T, Scheeres D J. Local orbital elements for the circular restricted three-body problem[J]. J Guid Control Dyn, 2023, 46(12): 2275-2289.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
