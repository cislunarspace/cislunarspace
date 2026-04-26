---
title: Action-Angle Variables
description: A detailed explanation of the definition of action-angle variables, their role in integrable Hamiltonian systems, and their specific application in characterizing cislunar libration point orbit parameters
keywords: Action-Angle Variables, Hamilton System, Integrable System, Canonical Transformation, Libration Point Orbit, Characteristic Parameters, Central Manifold
author: Tianjiang Talk
date: 2026-04-23
lastUpdated: 2026-04-26
wechatShare:
  title: Action-Angle Variables
  desc: One-stop learning for cislunar research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Action-Angle Variables | Integrability of Hamiltonian Systems
  description: A detailed explanation of the definition of action-angle variables, their role in integrable Hamiltonian systems, and their specific application in characterizing cislunar libration point orbit parameters
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Action-Angle Variables | Integrability of Hamiltonian Systems
  description: A detailed explanation of the definition of action-angle variables, their role in integrable Hamiltonian systems, and their specific application in characterizing cislunar libration point orbit parameters
  image: /logo.png
permalink: /en/glossary/dynamics/action-angle/
---

# Action-Angle Variables

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Edited from: Qiao et al. (2025) "Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Action-Angle Variables are standard tools for analyzing **integrable Hamiltonian systems**, consisting of a pair of conjugate variables $(I, \theta)$:

- **Action** $I$: an integral constant along a closed orbit, describing the "size" of the orbit
- **Angle** $\theta$: the phase of the orbital periodic motion, increasing linearly

For a one-dimensional integrable Hamiltonian system, the introduction of action-angle variables makes the Hamiltonian depend only on the action $H = H(I)$, and the conjugate equation for the angle variable gives a constant angular velocity $\dot{\theta} = \partial H / \partial I$.

## Significance in Hamiltonian Systems

Action-angle variables are new canonical variables obtained from canonical coordinates $(q, p)$ via a **canonical transformation** $(q, p) \to (I, \theta)$. The generating function of the transformation is a generating function of the form $S(q, \theta)$. The action is defined as:

$$I = \frac{1}{2\pi}\oint p \, dq$$

The integration is performed over one complete circuit along the closed orbit. As the angle variable $\theta$ varies from $0$ to $2\pi$, the action $I$ remains constant.

After introducing action-angle variables, the phase space geometry of an integrable Hamiltonian system becomes extremely clear: $I$ describes the radial section of an **invariant torus**, and $\theta$ describes the rotational phase of the orbit on the torus.

## Definition in Linearized Dynamics at Libration Points

The linearized Hamiltonian of the CR3BP collinear libration points, after Birkhoff-Gustavson normalization, has a saddle × center × center structure. For the center modes, Qiao et al. (2025) adopt the following action-angle variable definitions:

**Center mode**:

$$I_c = \frac{1}{2}(q^2 + p^2), \quad \theta_c = \arctan\left(\frac{q}{p}\right)$$

**Saddle mode**:

$$I_s = qp, \quad \theta_s = \ln\frac{\sqrt{q}}{\sqrt{p}}$$

where the subscript $c$ denotes the center motion mode and $s$ denotes the saddle/hyperbolic motion mode.

## Application in Orbit Characteristic Parameters

Qiao et al. (2025) ultimately select a six-dimensional characteristic parameter set:

| Parameter | Type | Definition | Physical Meaning |
|:---|:---|:---|:---|
| $q_1$ | Saddle coordinate | Retained directly (no action-angle transformation) | Degree of entry along the unstable manifold |
| $p_1$ | Saddle momentum | Retained directly (no action-angle transformation) | Degree of entry along the stable manifold |
| $I_2$ | Center action 1 | $I_2 = \frac{1}{2}(q_2^2 + p_2^2)$ | Amplitude of motion in the $XY$ plane |
| $\theta_2$ | Center angle 1 | $\theta_2 = \arctan(q_2/p_2)$ | Phase in the $XY$ plane |
| $I_3$ | Center action 2 | $I_3 = \frac{1}{2}(q_3^2 + p_3^2)$ | Amplitude of motion in the $Z$ direction |
| $\theta_3$ | Center angle 2 | $\theta_3 = \arctan(q_3/p_3)$ | Phase in the $Z$ direction |

**Why not convert $q_1, p_1$ to action-angle form?**

Qiao et al. (2025) give two reasons:
1. The angle variable definition for the saddle involves complex variables, with abstract physical meaning, making practical application inconvenient.
2. The numerical values of $q_1, p_1$ themselves are sufficient to describe the spacecraft's degree of entry into the unstable/stable manifold ($q_1$ growing exponentially indicates moving away along the unstable manifold, $p_1$ decaying exponentially to zero indicates approaching along the stable manifold).

## Equations of Motion on the Central Manifold

After introducing action-angle variables, the central manifold Hamiltonian is:

$$H_{CM} = H_2(I_2, I_3) + H_N(I_2, I_3, \theta_2, \theta_3)$$

From this, the canonical equations are derived:

- Action variation: $\dot{I}_j = \{I_j, H_{CM}\} = \{I_j, H_N\}$ (only higher-order terms contribute)
- Angular velocity: $\dot{\theta}_j = \{\theta_j, H_{CM}\} = \omega_j + \{\theta_j, H_N\}$ (linear part + higher-order perturbation)

This shows that under action-angle variables, the motion on the central manifold has a clear integrable structure (linear part) + perturbation correction.

## Related Concepts

- [Central Manifold](/en/glossary/central-manifold/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/birkhoff-gustavson/)
- [Poincare Section](/en/glossary/poincare-section/)
- [Canonical Transformation](/en/glossary/canonical-transformation/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Invariant Torus
- Integrable System

## References

- Arnol'd V I. Mathematical methods of classical mechanics[M]. Springer, 1989.
- Peterson L T, Scheeres D J. Local orbital elements for the circular restricted three-body problem[J]. J Guid Control Dyn, 2023, 46(12): 2275-2289.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
