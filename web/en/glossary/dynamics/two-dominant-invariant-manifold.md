---
title: Two-Dominant Invariant Manifold Method
description: A detailed analysis of the two-dominant invariant manifold method, its principles, and applications in libration point periodic orbit design
keywords: Two-Dominant Invariant Manifold, Two-Dominant Invariant Manifold Method, Principal Motion, Periodic Orbit, Reduced-Order Dynamics, Nonlinear Polynomial Relations, Orbit Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Two-Dominant Invariant Manifold Method
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Two-Dominant Invariant Manifold Method Explained | Libration Point Periodic Orbit Design"
  description: A detailed analysis of the two-dominant invariant manifold method, its principles, and applications in libration point periodic orbit design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Two-Dominant Invariant Manifold Method Explained | Libration Point Periodic Orbit Design"
  description: A detailed analysis of the two-dominant invariant manifold method, its principles, and applications in libration point periodic orbit design
  image: /logo.png
permalink: /en/glossary/dynamics/two-dominant-invariant-manifold/
---

# Two-Dominant Invariant Manifold Method

> Editor source: Guo Jianyu (2020) "Research on Libration Point Orbit Design and Station-Keeping Strategies Based on the Two-Dominant Invariant Manifold Method"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Two-Dominant Invariant Manifold Method (Invariant Manifold Technique with Two Dominant Motions) is a method for analyzing the dynamical characteristics of periodic orbits near libration points. The core idea of this method is to select two of the three motion directions of a periodic orbit as principal motions, and express the motion in the third direction through an expanded polynomial relation, thereby establishing nonlinear relationships among the three directions.

## Core Principles

### Selection of Principal Motions

In periodic orbits near libration points (such as Halo orbits and Lissajous orbits), the motion can be decomposed into three directions:

- $x$ direction: Along the line connecting the two primary bodies
- $y$ direction: Perpendicular to the connecting line
- $z$ direction: Perpendicular to the orbital plane

The two-dominant invariant manifold method selects two of these directions as principal motions, typically choosing $x$ and $y$ (in-plane motion), with $z$ as the subordinate motion.

### Nonlinear Polynomial Relations

Through the two-dominant invariant manifold method, a nonlinear polynomial relation is obtained:

$$\rho_z = f(\rho_x, \rho_y)$$

where $\rho_i$ represents the motion amplitude in each direction. This nonlinear relation reflects the intrinsic dynamical characteristics of periodic orbit motion.

### Reduced-Order Dynamic Equations

Using vibration theory to analyze periodic orbits, reduced-order dynamic equations can be obtained. This order reduction greatly simplifies the computational complexity of orbit design and station-keeping.

## Comparison with Traditional Methods

| Method | Characteristics | Applicable Scenario |
| :--- | :--- | :--- |
| Linearization method | Based on linear stability analysis | Small-amplitude orbits |
| Lindstedt-Poincare perturbation method | Provides analytical approximate solutions | Initial guess generation |
| Two-dominant invariant manifold method | Establishes nonlinear constraint relations | Orbit station-keeping constraints |

## Application Value

The main applications of the two-dominant invariant manifold method include:

- **Orbit design**: Using polynomial relations as new constraint conditions for the numerical design of libration point periodic orbits
- **Orbit station-keeping**: Using polynomial relation constraints instead of pre-designed nominal orbits, enabling more real-time and flexible station-keeping
- **Dynamic analysis**: Revealing intrinsic relationships among the three directions of motion in periodic orbits

## Key Elements

### Mathematical Definition

The two-dominant invariant manifold method selects two directions of periodic orbit motion as principal motions, and expresses the third direction through an expanded polynomial relation, establishing nonlinear relationships among the three directions.

### Key Properties

The nonlinear polynomial relations can reflect the intrinsic dynamical characteristics of periodic orbit motion. These relations can serve as new constraint conditions applied to orbit design and station-keeping at libration points.

### Numerical Methods

Through vibration theory analysis combined with Legendre polynomial expansion, reduced-order dynamic equations and multi-order polynomial coefficients are obtained.

## Related Concepts

- [Reduced-Order Dynamic Equations](/en/glossary/dynamics/reduced-order-dynamics/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Lindstedt-Poincare Perturbation Method](/en/glossary/dynamics/libration-point/)

## References

- Guo Jianyu. Research on Libration Point Orbit Design and Station-Keeping Strategies Based on the Two-Dominant Invariant Manifold Method[D]. Beijing University of Technology, 2020. [in Chinese]
- Shaw R G, Pierre C. Vibroacoustic response of engineering structures[R]. 1994.
