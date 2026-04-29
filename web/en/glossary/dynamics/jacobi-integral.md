---
title: Jacobi Constant (Jacobi Integral)
description: Detailed analysis of the definition, formula, and physical significance of the Jacobi constant in the Circular Restricted Three-Body Problem
keywords: Jacobi Constant, Jacobi Integral, Zero-Velocity Surface, Three-Body Problem, Cislunar Space
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Jacobi Constant (Jacobi Integral)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Jacobi Constant Details | The Only Integral of Motion in CR3BP
  description: Detailed analysis of the definition, formula, and physical significance of the Jacobi constant in the Circular Restricted Three-Body Problem
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Jacobi Constant Details | The Only Integral of Motion in CR3BP
  description: Detailed analysis of the definition, formula, and physical significance of the Jacobi constant in the Circular Restricted Three-Body Problem
  image: /logo.png
permalink: /en/glossary/dynamics/jacobi-integral/
---

# Jacobi Constant

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Jacobi constant (Jacobi integral) is the only conserved quantity (integral of motion) in the Circular Restricted Three-Body Problem (CR3BP). It is analogous to the combination of energy and angular momentum in the two-body problem and plays a central role in analyzing orbit topology.

## Formula

$$C_J = 2U(x, y, z) - (\dot{x}^2 + \dot{y}^2 + \dot{z}^2)$$

where $U$ is the effective potential function:

$$U = \frac{1}{2}(x^2 + y^2) + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}$$

- $r_1$: distance to the larger primary body
- $r_2$: distance to the smaller primary body
- $\mu$: mass parameter

## Physical Significance

The Jacobi constant determines the accessible region of an orbit through zero-velocity surfaces (ZVS):

- When $C_J$ is large: the spacecraft is confined near one of the primary bodies or a libration point
- When $C_J$ is small: the spacecraft can move freely throughout cislunar space
- At critical values: the zero-velocity surfaces open at libration points, allowing transfers between regions

## Role in Orbit Design

The Jacobi constant is a key parameter for orbit classification and design:

- Different orbit families (DRO, Halo, Lissajous) occupy different ranges of $C_J$
- Transfer orbits must satisfy energy constraints imposed by $C_J$
- The value of $C_J$ determines which libration point regions are accessible

## Related Concepts

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
