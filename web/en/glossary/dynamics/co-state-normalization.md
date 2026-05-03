---
title: Co-state Normalization (Co-state Normalization)
description: Detailed analysis of co-state normalization definition, application in two-point boundary value problems, normalization methods, and search strategies when co-state boundaries are unknown
keywords: Co-state Normalization, Co-state Variables, Two-Point Boundary Value Problem, Orbit Optimization, Shooting Method, Unit Sphere, Search Space Reduction
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Co-state Normalization (Co-state Normalization)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Co-state Normalization Explained | Search Space Reduction in Orbit Optimization
  description: Detailed analysis of co-state normalization definition, application in two-point boundary value problems, normalization methods, and search strategies when co-state boundaries are unknown
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Co-state Normalization Explained | Search Space Reduction in Orbit Optimization
  description: Detailed analysis of co-state normalization definition, application in two-point boundary value problems, normalization methods, and search strategies when co-state boundaries are unknown
  image: /logo.png
permalink: /en/glossary/dynamics/co-state-normalization/
---

# Co-state Normalization (Co-state Normalization)

> Author: 天疆说
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft
>
> Reference: 关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## Definition

Co-state Normalization is the technique of dividing co-state variables by the Euclidean norm of their initial values, mapping infinitely many co-state solutions onto the unit sphere. In the shooting method solution of optimal control problems, co-state boundaries are typically unknown, leading to an overly large search space. Normalization effectively reduces the search space and improves the probability of finding convergent initial guesses.

## Mathematical Description

### Normalization Formula

For the co-state vector $\boldsymbol{\lambda}(t) = [\lambda_0; \boldsymbol{\lambda}_r(t); \boldsymbol{\lambda}_v(t); \lambda_m(t)]$, normalization is defined as:

$$\bar{\boldsymbol{\lambda}} \triangleq \frac{\boldsymbol{\lambda}}{\|\boldsymbol{\lambda}(t_0)\|}$$

After normalization:

$$\|\bar{\boldsymbol{\lambda}}(t_0)\| = 1$$

### Physical Significance

The physical significance of co-state normalization:
- Constrains co-state variables to the unit sphere
- Eliminates solution non-uniqueness (co-state multiplied by any non-zero constant still satisfies the equation)
- Reduces the search space from infinite to the unit sphere

## Application in Two-Point Boundary Value Problems

### Problem Description

In the indirect method for spacecraft orbit optimization, the optimal control problem is transformed into a Two-Point Boundary Value Problem (TPBVP):

- **Initial state**: Known $\mathbf{r}(t_0), \mathbf{v}(t_0), m(t_0)$
- **Terminal state**: Must satisfy $\mathbf{r}(t_f) = \mathbf{r}_{target}, \mathbf{v}(t_f) = \mathbf{v}_{target}$
- **Unknown**: Initial co-state $\boldsymbol{\lambda}(t_0)$

### Complexity of Co-state Boundaries

Co-state boundaries are free (determined by transversality conditions), with each co-state component ranging in $[-\infty, +\infty]$. This leads to an almost infinite solution space for the shooting function.

### Advantages of Normalization

Through co-state normalization:
1. Initial co-state is constrained to the unit sphere (7-dimensional manifold in 8-dimensional space)
2. Seven angular variables $\chi_\vartheta (\vartheta = 1, 2, \cdots, 7)$ are defined
3. Angular variables are mapped to optimization variables $X_\vartheta$ in $[0, 1]$ interval

### Angular Variable Mapping

| Variable Range | Mapping Formula |
|:---|:---|
| $[0, \pi/2]$ | $\chi_\vartheta = \frac{\pi}{2}X_\vartheta, \quad \vartheta = 1,2,3$ |
| $[-\pi/2, \pi/2]$ | $\chi_\vartheta = \pi\left(X_\vartheta - \frac{1}{2}\right), \quad \vartheta = 4,5$ |
| $[0, 2\pi]$ | $\chi_\vartheta = 2\pi X_\vartheta, \quad \vartheta = 6,7$ |

## Application by 赵海涵 et al. (2026)

In the RLEPSO-Homotopy method:
1. RLEPSO optimizes normalized co-states (7 angular variables + terminal time = 8 dimensional optimization variables)
2. Normalized co-states serve as initial guesses for homotopy shooting
3. Homotopy parameter decreases to zero to obtain fuel-optimal co-states

## Related Concepts

- [Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagin-principle/)

## References

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Betts J T. Practical Methods for Optimal Control and Estimation Using Nonlinear Programming[M]. SIAM, 2010.
