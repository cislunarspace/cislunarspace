---
title: Fuel-optimal Control
description: Detailed explanation of fuel-optimal control definition, mathematical formulation, relationship with bang-bang control, and applications in cislunar space trajectory transfers
keywords: Fuel-optimal control, bang-bang control, trajectory optimization, propulsion efficiency, optimal control, homotopy method
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Fuel-optimal Control
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Fuel-optimal Control Details | Minimum Propellant Trajectory Design"
  description: Detailed explanation of fuel-optimal control definition, mathematical formulation, relationship with bang-bang control, and applications in cislunar space trajectory transfers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Fuel-optimal Control Details | Minimum Propellant Trajectory Design"
  description: Detailed explanation of fuel-optimal control definition, mathematical formulation, relationship with bang-bang control, and applications in cislunar space trajectory transfers
  image: /logo.png
permalink: /en/glossary/dynamics/fuel-optimal/
---

# Fuel-optimal Control

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

Fuel-optimal control is a class of optimal control problems that minimizes total propellant consumption as the performance index. In deep space exploration missions, spacecraft carry limited propellant, and fuel consumption directly determines mission lifetime and reachable range. Therefore, fuel-optimal control is one of the most important optimization objectives in trajectory design. According to Pontryagin's Maximum Principle, the fuel-optimal control law exhibits bang-bang characteristics.

## Mathematical Description

### Performance Index

The fuel-optimal control performance index is defined as:

$$J = \frac{F}{I_{sp}g_0} \int_{t_0}^{t_f} u \, dt$$

where $F$ is the maximum thrust, $I_{sp}$ is the specific impulse, $g_0$ is the standard gravitational acceleration, and $u \in [0, 1]$ is the thrust ratio.

### Optimal Control Law

The optimal thrust ratio derived from Pontryagin's Maximum Principle satisfies:

$$u^* = \begin{cases} 0, & \rho > 0 \\ 1, & \rho < 0 \\ \in (0,1), & \rho = 0 \end{cases}$$

where $\rho$ is the switching function:

$$\rho = 1 - \lambda_m - \frac{I_{sp}g_0}{m}\|\boldsymbol{\lambda}_v\|$$

$\boldsymbol{\lambda}_v$ is the velocity co-state variable, and $\lambda_m$ is the mass co-state variable.

### Time-optimal vs. Fuel-optimal

| Characteristic | Time-optimal | Fuel-optimal |
| :--- | :--- | :--- |
| Performance index | $J = t_f - t_0$ (minimum time) | $J = \int u \, dt$ (minimum fuel) |
| Thrust characteristic | Always maximum thrust | Bang-bang (on/off switching) |
| Switching function | Linear function | Nonlinear function with co-state norm |

## Numerical Challenges

Fuel-optimal control presents unique numerical challenges:

- **Discontinuity**: The bang-bang control law is discontinuous at switching points, with discontinuities in the right-hand side of the differential equations
- **Singular arcs**: When the switching function remains identically zero over a finite time interval, singular arcs arise where the thrust ratio cannot be uniquely determined by the extremum condition
- **Homotopy smoothing**: By introducing a regularization parameter $\varepsilon$, the bang-bang control is smoothed into continuous control, with $\varepsilon \to 0$ gradually converging to the fuel-optimal solution

## Applications in Cislunar Space

Fuel-optimal control has broad applications in cislunar space missions:

- **Low-energy transfer trajectories**: Transfers from near-Earth orbit to DRO or NRHO maximize the use of three-body dynamical structures through fuel-optimal design
- **Multi-spacecraft cooperative rendezvous**: Minimization of total fuel consumption is a key optimization objective in formation spacecraft rendezvous problems
- **Lunar Gateway orbit maintenance**: Long-term station-keeping of mission orbits such as NRHO requires periodic orbit corrections, where fuel-optimal strategies directly affect mission lifetime

## Related Concepts

- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Switching Function](/en/glossary/dynamics/switching-function/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
