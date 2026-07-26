---
title: Reduced-Order Dynamic Equations
description: A detailed analysis of reduced-order dynamic equations, their application in the two-dominant invariant manifold method, and integration with the Lindstedt-Poincare perturbation method
keywords: Reduced-Order Dynamic Equations, Reduced-Order Dynamics, Two-Dominant Invariant Manifold, Legendre Polynomials, Nonlinear Relations, Libration Point Orbits
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Reduced-Order Dynamic Equations
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Reduced-Order Dynamic Equations Explained | Libration Point Orbit Design
  description: A detailed analysis of reduced-order dynamic equations, their application in the two-dominant invariant manifold method, and integration with the Lindstedt-Poincare perturbation method
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Reduced-Order Dynamic Equations Explained | Libration Point Orbit Design
  description: A detailed analysis of reduced-order dynamic equations, their application in the two-dominant invariant manifold method, and integration with the Lindstedt-Poincare perturbation method
  image: /logo.png
permalink: /en/glossary/dynamics/reduced-order-dynamics/
---

# Reduced-Order Dynamic Equations

> Editor source: Guo Jianyu (2020) "Research on Libration Point Orbit Design and Station-Keeping Strategies Based on the Two-Dominant Invariant Manifold Method"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Reduced-Order Dynamic Equations are dynamical equations with reduced order obtained through the two-dominant invariant manifold method. By selecting two principal motion directions of a periodic orbit, this method expresses the motion in the third direction as a nonlinear function of the first two, thereby achieving a reduction in the phase space dimensionality.

## Theoretical Foundation

### Origin

In the Circular Restricted Three-Body Problem (CR3BP), the equations of motion for periodic orbits near libration points can be represented as high-dimensional nonlinear systems. The two-dominant invariant manifold method achieves order reduction through the following steps:

1. Select two motion directions as principal motions (typically the $x$ and $y$ directions)
2. Use invariant manifold theory to establish the relationship between the third direction ($z$ direction) and the principal motions
3. Obtain nonlinear polynomial relations through Legendre polynomial expansion
4. Obtain the final reduced-order dynamical equations

### Mathematical Expression

Let the amplitudes of the principal motion directions be $\rho_1, \rho_2$; then the amplitude $\rho_3$ of the subordinate direction can be expressed as:

$$\rho_3 = \sum_{i,j} c_{ij} \rho_1^i \rho_2^j$$

where $c_{ij}$ are polynomial coefficients determined by the system's dynamical characteristics.

## Integration with Lindstedt-Poincare Perturbation Method

The reduced-order dynamic equations can be used in conjunction with the Lindstedt-Poincare perturbation method:

1. Solve the reduced-order dynamic equations using the Lindstedt-Poincare perturbation method
2. Obtain third-order approximate analytical solutions for Halo and Lissajous orbits
3. Use the analytical solutions as initial guesses, then refine through numerical orbit design methods to obtain accurate periodic orbits

## Application Value

The main applications of reduced-order dynamic equations include:

- **Orbit design**: Providing good initial guesses to reduce the number of numerical iterations
- **Orbit maintenance**: Polynomial relations can serve as constraint conditions for real-time orbit corrections
- **Dynamic analysis**: Simplifying the analysis of high-dimensional systems and revealing intrinsic laws of orbital motion

## Key Elements

### Mathematical Definition

Reduced-order dynamic equations are obtained through the two-dominant invariant manifold method by selecting two principal motion directions and expressing the third direction as a nonlinear function, yielding lower-order dynamical equations.

### Key Properties

Reduced-order equations preserve the principal dynamical characteristics of periodic orbits while greatly reducing computational complexity. The polynomial coefficients reflect the intrinsic dynamical structure of the system.

### Numerical Methods

Solved using Legendre polynomial expansion combined with the Lindstedt-Poincare perturbation method to obtain multi-order approximate analytical solutions.

## Related Concepts

- [Two-Dominant Invariant Manifold](/en/glossary/dynamics/two-dominant-invariant-manifold/)
- [Lindstedt-Poincare Perturbation Method](/en/glossary/dynamics/libration-point/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Guo Jianyu. Research on Libration Point Orbit Design and Station-Keeping Strategies Based on the Two-Dominant Invariant Manifold Method[D]. Beijing University of Technology, 2020. [in Chinese]
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the collinear libration points[J]. Celestial Mechanics, 1973, 7(3): 267-289.
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
