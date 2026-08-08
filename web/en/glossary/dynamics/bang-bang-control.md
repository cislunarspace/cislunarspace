---
title: Bang-bang Control (Bang-bang Control)
description: Detailed analysis of bang-bang control definition, time-optimal properties, application in fuel-optimal control, and relationship with homotopy methods
keywords: "Bang-bang control, time-optimal control, fuel-optimal, thrust switching control, optimal control, Pontryagin's Maximum Principle, homotopy method"
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Bang-bang Control (Bang-bang Control)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "Bang-bang Control Explained | Time-optimal Properties of Fuel-optimal Control"
  description: Detailed analysis of bang-bang control definition, time-optimal properties, application in fuel-optimal control, and relationship with homotopy methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Bang-bang Control Explained | Time-optimal Properties of Fuel-optimal Control"
  description: Detailed analysis of bang-bang control definition, time-optimal properties, application in fuel-optimal control, and relationship with homotopy methods
  image: /logo.png
permalink: /en/glossary/dynamics/bang-bang-control/
---

# Bang-bang Control (Bang-bang Control)

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft
>
> Reference: 关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## Definition

Bang-bang control is a time-optimal control law characterized by control inputs switching only between two extreme values of the allowable range: maximum thrust and zero thrust, with no intermediate values. The name derives from the "bang" sound when the thrust switches.

## Mathematical Description

For the fuel-optimal control problem, according to Pontryagin's Maximum Principle, the optimal thrust ratio satisfies:

$$u_j^* = \begin{cases} 0, & \rho_j > 0 \\ 1, & \rho_j < 0 \\ \in (0,1), & \rho_j = 0 \end{cases}$$

Where $\rho_j = 1 - \lambda_{mj} - \frac{I_{sp}g_0}{m_j}\|\lambda_{vj}\|$ is the switching function.

When the thrust ratio is 0 or 1, the control system is in the "off" or "on" extreme state, forming bang-bang control.

## Properties

### Time Optimality

Bang-bang control is the optimal control law for linear systems with time-optimal properties:

- Thrust is always maximum or zero
- No sustained burning at intermediate thrust values
- Minimization of switching times

### Numerical Difficulties

Main numerical difficulties of bang-bang control:

- Discontinuities on the right-hand side of differential equations
- Direct numerical integration not possible
- Precise determination of switching times is difficult

## Relationship with Homotopy Methods

### Smoothing Effect of Homotopy Methods

Homotopy methods transform bang-bang control into continuous control by introducing a regularized performance index:

$$J = \sum_{j=1}^{2} \frac{\lambda_{j0}F_j}{I_{sp}g_0} \int_{t_0}^{t_f} \left[u_j - \varepsilon u_j(1-u_j)\right] dt$$

When $\varepsilon > 0$, the optimal control becomes:

$$u_j^* = \begin{cases} 0, & \rho_j > \varepsilon \\ 1, & \rho_j < -\varepsilon \\ \frac{1}{2} - \frac{\rho_j}{2\varepsilon}, & |\rho_j| \leq \varepsilon \end{cases}$$

The control law is continuously differentiable within the boundary layer.

### Transition Strategy

赵海涵等 (2026) used the homotopy parameter sequence:
$$\varepsilon_d = 10^{-(d/15)}, \quad d = 1, 2, \cdots, 60$$

Gradually transitioning $\varepsilon$ from 1 to 0 to obtain fuel-optimal bang-bang control.

## Application in Spacecraft Rendezvous

In spacecraft cooperative rendezvous problems:

- The fuel-optimal control law takes bang-bang form
- Suitable for finite-thrust propulsion systems
- Homotopy methods effectively solve its numerical integration difficulties

## Related Concepts

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- Co-state Normalization
- [Fuel-optimal Control](/en/glossary/dynamics/fuel-optimal/)

## References

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Pontryagin L S, et al. The Mathematical Theory of Optimal Processes[M]. Wiley, 1962.
- Bryson A E, Ho Y C. Applied Optimal Control[M]. Hemisphere, 1975.
