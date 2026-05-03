---
title: Lindstedt-Poincare Method (Lindstedt-Poincare Method)
description: Detailed analysis of Lindstedt-Poincare method principles, application in analytical solution of periodic orbits, and relationship with multiple shooting method
keywords: Lindstedt-Poincare Method, Lindstedt, Poincaré, Periodic Orbit, Analytical Solution, Perturbation Theory, Nonlinear Vibration
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lindstedt-Poincare Method
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Lindstedt-Poincare Method Explained | Periodic Orbit Analytical Solution
  description: Detailed analysis of Lindstedt-Poincare method principles, application in analytical solution of periodic orbits, and relationship with multiple shooting method
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lindstedt-Poincare Method Explained | Periodic Orbit Analytical Solution
  description: Detailed analysis of Lindstedt-Poincare method principles, application in analytical solution of periodic orbits, and relationship with multiple shooting method
  image: /logo.png
permalink: /en/glossary/dynamics/lindstedt-poincare/
---

# Lindstedt-Poincare Method (Lindstedt-Poincare Method)

> Author: 天疆说
>
> Reference: 钱霙婧(2014) "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Lindstedt-Poincare method is a perturbation analysis method for solving periodic solutions of nonlinear vibration systems, independently proposed by Lindstedt (1883) and Poincare (1892). This method eliminates secular terms by introducing scaled time (stretched time), obtaining uniformly valid expansions of periodic solutions.

In libration point orbit research, the Lindstedt-Poincare method is used to derive analytical approximations of Halo orbits, Lissajous orbits, and Lyapunov orbits, providing high-quality initial guesses for numerical computation.

## Method Principles

### Difficulties with Traditional Perturbation Methods

For nonlinear vibration equations:

$$\ddot{x} + \omega_0^2 x + \epsilon f(x, \dot{x}) = 0$$

Traditional perturbation methods assume a solution of the form:

$$x(t) = x_0(t) + \epsilon x_1(t) + \epsilon^2 x_2(t) + \cdots$$

Substituting into the equation produces **secular terms**, i.e., terms that grow linearly with time, destroying the periodic solution assumption.

### Core Idea of Lindstedt-Poincare Method

The Lindstedt-Poincare method eliminates secular terms through **time scaling transformation**:

$$\tau = \omega t$$

Where $\omega$ is an undetermined amplitude-dependent frequency. Rewriting the equation in terms of $\tau$ and selecting an appropriate expansion for $\omega$ eliminates secular terms.

### Algorithm Steps

1. **Scaled transformation**: Let $\tau = \omega t$, replacing time variable with $\tau$
2. **Frequency expansion**: Expand frequency as $\omega = \omega_0 + \epsilon \omega_1 + \epsilon^2 \omega_2 + \cdots$
3. **Solution expansion**: Expand solution as $x = x_0 + \epsilon x_1 + \epsilon^2 x_2 + \cdots$
4. **Solve order by order**: Solve by orders of $\epsilon$, selecting appropriate $\omega_i$ at each step to eliminate secular terms

## Application in Libration Point Orbit Research

### Analytical Solutions for Halo Orbits

Farquhar and Kamel (1973) used the Lindstedt-Poincare method to derive third-order and fourth-order approximate solutions for Halo orbits near the Earth-Moon L2 point.

### Analytical Solutions for Lyapunov Orbits

Richardson (1980) derived analytical solutions for libration point Lyapunov orbits, widely used as initial guesses for Halo and Lissajous orbits.

### Solution Accuracy

Analytical solutions from the Lindstedt-Poincare method have limited accuracy, typically used as initial guesses for numerical computation:

| Order | Accuracy | Applicable Scenario |
|:---|:---|:---|
| First order | ~10⁻³ | Qualitative analysis |
| Second order | ~10⁻⁵ | Initial guess |
| Third order | ~10⁻⁷ | High-precision initial guess |
| Fourth order | ~10⁻⁹ | Refined initial guess |

## Relationship with Multiple Shooting Method

The Lindstedt-Poincare method and multiple shooting method represent two levels of periodic orbit solving:

| Method | Type | Accuracy | Computational Efficiency |
|:---|:---|:---|:---|
| **Lindstedt-Poincare** | Analytical | Medium | High (closed-form solution) |
| **Multiple Shooting** | Numerical | High | Lower (requires iteration) |

Typical workflow:
1. Use Lindstedt-Poincare method to obtain analytical solution as initial guess
2. Use multiple shooting method for numerical refinement

## Limitations

1. **Convergence**: For large-amplitude orbits, higher-order terms may diverge
2. **Applicability**: Mainly suitable for weakly nonlinear systems
3. **Computational complexity**: Derivation of high-order expansions is tedious

## Related Concepts

- [Multiple Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

## References

- Lindstedt A. Uber die Integration einer für die Storungstheorie wichtigen Differentialgleichung[J]. Astronomische Nachrichten, 1883.
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973.
- Richardson D L. A halo orbit solution[J]. Celestial Mechanics, 1980.
