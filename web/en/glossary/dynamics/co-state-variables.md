---
title: Co-state Variables
description: Detailed explanation of co-state variables definition, physical meaning, mathematical formulation, and their central role in optimal control and trajectory optimization
keywords: Co-state Variables, Lagrange multiplier, optimal control, Pontryagin's Maximum Principle, Hamiltonian, trajectory optimization
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Co-state Variables
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Co-state Variables Details | Hidden Variables in Optimal Control Theory
  description: Detailed explanation of co-state variables definition, physical meaning, mathematical formulation, and their central role in optimal control and trajectory optimization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Co-state Variables Details | Hidden Variables in Optimal Control Theory
  description: Detailed explanation of co-state variables definition, physical meaning, mathematical formulation, and their central role in optimal control and trajectory optimization
  image: /logo.png
permalink: /en/glossary/dynamics/co-state-variables/
---

# Co-state Variables

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

Co-state Variables, also known as adjoint variables or Lagrange multipliers, are auxiliary variables introduced in optimal control theory paired with state variables. They do not correspond to any directly measurable physical quantity but rather describe the sensitivity of the optimal performance index with respect to state variables. Within the framework of Pontryagin's Maximum Principle, co-state variables form Hamilton's canonical equations together with state variables, determining the optimal trajectory and optimal control law.

## Mathematical Description

### Co-state Equations

Let the state variables be $\mathbf{x} = [\mathbf{r}; \mathbf{v}; m]^T$ and the co-state variables be $\boldsymbol{\lambda} = [\boldsymbol{\lambda}_r; \boldsymbol{\lambda}_v; \lambda_m]^T$. Given the Hamiltonian $H$, the co-state variables satisfy the differential equation:

$$\dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

Together with the state equations $\dot{\mathbf{x}} = \partial H / \partial \boldsymbol{\lambda}$, they form Hamilton's canonical equations, constituting a first-order differential equation boundary value problem.

### Co-state Variables in Spacecraft Trajectory Optimization

In spacecraft trajectory optimization, each co-state component has a specific mathematical role:

- **Position co-state $\boldsymbol{\lambda}_r$**: satisfies $\dot{\boldsymbol{\lambda}}_r = -\partial H / \partial \mathbf{r}$, related to gravitational gradients, influencing orbit shape
- **Velocity co-state $\boldsymbol{\lambda}_v$**: satisfies $\dot{\boldsymbol{\lambda}}_v = -\partial H / \partial \mathbf{v}$, directly determining the optimal thrust direction
- **Mass co-state $\lambda_m$**: satisfies $\dot{\lambda}_m = -\partial H / \partial m$, determining thrust on/off switching times

### Switching Function and Thrust Decisions

Co-state variables determine the optimal thrust ratio through the switching function $\rho$:

$$\rho_j = 1 - \lambda_{mj} - \frac{I_{sp}g_0}{m_j}\|\boldsymbol{\lambda}_{vj}\|$$

When $\rho_j < 0$, thrust is maximum; when $\rho_j > 0$, thrust is zero, forming a bang-bang control law.

## Role in Two-Point Boundary Value Problems

When solving optimal control problems via indirect methods, the initial state $\mathbf{x}(t_0)$ is known, but the initial co-state $\boldsymbol{\lambda}(t_0)$ is unknown. Co-state boundaries are determined by transversality conditions, and each co-state component can take values in $[-\infty, +\infty]$, leading to an extremely large solution space for the shooting problem. Co-state normalization constrains $\boldsymbol{\lambda}(t_0)$ to a unit sphere, effectively reducing the search dimension.

## Applications in Cislunar Space

In cislunar space trajectory optimization, co-state variables pervade the entire optimal control solution process. From fuel-optimal transfers from near-Earth orbit to DRO or NRHO, to multi-spacecraft cooperative rendezvous missions, the initial guess and iterative correction of co-state variables remain the central challenge of indirect methods. The normalization and physical interpretation of co-state variables serve as a critical bridge between mathematical optimality and engineering realizability.

## Related Concepts

- [Co-state Normalization](/en/glossary/dynamics/co-state-normalization/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagin-principle/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Fuel-optimal Control](/en/glossary/dynamics/fuel-optimal/)
