---
title: Quasi-Bicircular Problem (QBCP)
description: A detailed explanation of the Quasi-Bicircular Problem model definition, Hamiltonian function, its application in cislunar space, and its relationship with CRTBP
keywords: Quasi-Bicircular Problem, QBCP, Cislunar Dynamics, Solar Perturbation, Hamiltonian Function, Four-Body Problem
author: Tianjiang Talk
date: 2026-04-04
lastUpdated: 2026-04-26
wechatShare:
  title: Quasi-Bicircular Problem (QBCP)
  desc: One-stop learning for cislunar research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Quasi-Bicircular Problem (QBCP) - High-Precision Cislunar Dynamics Model
  description: A detailed explanation of the Quasi-Bicircular Problem model definition, Hamiltonian function, its application in cislunar space, and its relationship with CRTBP
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Quasi-Bicircular Problem (QBCP) - High-Precision Cislunar Dynamics Model
  description: A detailed explanation of the Quasi-Bicircular Problem model definition, Hamiltonian function, its application in cislunar space, and its relationship with CRTBP
  image: /logo.png
permalink: /en/glossary/dynamics/qbcp/
---

# Quasi-Bicircular Problem

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Quasi-Bicircular Problem (QBCP) is a self-consistent dynamics model that accounts for solar gravitational perturbation in the Sun-Earth-Moon system. Proposed by Andreu and Simo in 1999, it is a refinement of the Bicircular Restricted Problem (BCP).

In the bicircular dynamics model, the two three-body models are independent of each other, which in fact does not satisfy Newton's second law, making the model non-self-consistent. To achieve self-consistency, the QBCP modifies the bicircular model so that the motions of the Sun, Earth, and Moon satisfy Newton's laws of motion, transforming the Hamiltonian function in the problem onto the central manifold, thereby obtaining a self-consistent dynamics description.

## Hamiltonian Function

For the Sun-Earth-Moon system, the Hamiltonian of the Quasi-Bicircular model is:

$$
H_{\mathrm{QBCP}} = \frac{1}{2}\alpha_1(p_x^2 + p_y^2) + \alpha_2(x p_x + y p_y) + \alpha_3(y p_x - x p_y) + \alpha_4 x + \alpha_5 y - \alpha_6\left( \frac{1 - \mu}{r_1} + \frac{\mu}{r_2} + \frac{m_{\mathrm{s}}}{r_{\mathrm{s}}} \right)
$$

The parameters $\alpha_k$ are time-periodic:

$$
\alpha_k(\theta) = \begin{cases}
\alpha_{k0} + \sum\limits_{j \ge 1}\alpha_{kj}\cos(j\theta), & k = 1,3,4,6,7 \\
\sum\limits_{j \ge 1}\alpha_{kj}\sin(j\theta), & k = 2,5,8
\end{cases}
$$

where $\theta = \omega_s t$, and $\omega_s$ is the normalized solar motion frequency.

## Relationship with Other Models

The QBCP occupies an intermediate position in the dynamics model precision hierarchy between CRTBP and the ephemeris model:

| Model | Precision | Self-Consistency | Characteristics |
|:---|:---|:---|:---|
| CRTBP | Low | Self-consistent | Solar perturbation and lunar eccentricity ignored |
| BCP | Medium | Non-self-consistent | Solar influence introduced but two three-body models independent |
| **QBCP** | **Medium-High** | **Self-consistent** | **Modified BCP to satisfy Newton's laws for three massive bodies** |
| Ephemeris Model | High | Self-consistent | Uses real ephemeris data |

## Applications

Based on the QBCP model, Andreu discussed invariant manifolds and low-energy transfers near Earth-Moon libration points. Guzman used the multiple-shooting method to achieve periodic and quasi-periodic orbit design near Earth-Moon libration points in the QBCP model, with results close to real ephemeris cases, validating the feasibility of the quasi-bicircular model in orbit design.

The QBCP provides a good intermediate level between simplified models and high-precision ephemeris models, commonly used in model conversion strategies such as homotopy methods.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Bicircular Restricted Problem (BCP)
- [Ephemeris Model](/en/glossary/ephemeris-model/)
- Homotopy Method

## References

- Andreu M A. The translunar halo orbit in the quasi-bicircular problem[D]. Universitat de Barcelona, 1999.
- Andreu M A. Dynamics in the center manifold of the collinear points in the quasi-bicircular problem[D]. Universitat de Barcelona, 2002.
- Guzman J. Spacecraft trajectory design in the context of a coherent restricted four-body problem[D]. Purdue University, 2001.
