---
title: Optimal Control
description: Optimal control theory studies how to select control laws that optimize a performance index for a dynamical system, providing the theoretical foundation for orbital maneuver design and trajectory optimization.
keywords: Optimal Control, Variational Method, Maximum Principle, Orbital Maneuver, Trajectory Optimization
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/background/control/optimal-control/
---

# Optimal Control

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Optimal control theory is a central branch of modern control theory that addresses the problem of selecting control laws to extremize (minimize or maximize) a prescribed performance index for a given dynamical system. In space mission design, the performance index typically represents fuel consumption, time, or energy.

## Basic Elements

An optimal control problem is defined by:

- **State equation**: $\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}, t)$, describing system dynamics
- **Control variable**: $\mathbf{u}(t)$, designed by the controller
- **Boundary conditions**: initial state $\mathbf{x}(t_0)$ and terminal state $\mathbf{x}(t_f)$
- **Performance index**: $J = \phi(\mathbf{x}(t_f), t_f) + \int_{t_0}^{t_f} L(\mathbf{x}, \mathbf{u}, t) dt$
- **Constraints**: control constraints $|\mathbf{u}| \leq u_{\max}$, state constraints $\mathbf{x} \in \mathcal{X}$

## Principles

### Variational Calculus and the Euler-Lagrange Equations

For unconstrained optimal control, necessary conditions are derived via calculus of variations. Introducing Lagrange multipliers $\boldsymbol{\lambda}(t)$, the Hamiltonian is constructed:

$$H(\mathbf{x}, \mathbf{u}, \boldsymbol{\lambda}, t) = L(\mathbf{x}, \mathbf{u}, t) + \boldsymbol{\lambda}^T f(\mathbf{x}, \mathbf{u}, t)$$

The Euler-Lagrange equations give the state and costate evolution:

$$\dot{\mathbf{x}} = \frac{\partial H}{\partial \boldsymbol{\lambda}}, \quad \dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

### Pontryagin Maximum Principle

For optimal control problems with control constraints, the Maximum Principle gives the optimality condition for the control variable:

$$\mathbf{u}^*(t) = \arg\max_{\mathbf{u} \in \mathcal{U}} H(\mathbf{x}^*, \mathbf{u}, \boldsymbol{\lambda}^*, t)$$

This principle reduces the continuous optimization problem to selecting the optimal control at each instant.

## Applications in Cislunar Space

- **Minimum-fuel orbital transfer**: using the Pontryagin Maximum Principle to derive optimal low-thrust transfer trajectories in cislunar space, producing fuel-optimal delta-V trajectories
- **Low-thrust trajectory optimization**: trajectory design for low-thrust propulsion (ion thrusters, electric propulsion) —本质上是最优控制问题，常用间接法（极大值原理）或直接法（伪谱法）求解
- **Soft landing guidance**: fuel-optimal descent trajectory design for lunar/Mars landing with thrust magnitude, thrust direction, terminal altitude, and velocity constraints
- **Attitude maneuver optimization**: multi-objective time-fuel optimization for large-angle spacecraft attitude reorientation

## Related Concepts

- [Pseudospectral Methods](../math/pseudospectral/)
- [Shooting Method](./shooting-method/)
- [Model Predictive Control (MPC)](./mpc/)

## References

- Bryson A E, Ho Y C. Applied optimal control[M]. Taylor & Francis, 1975.
- Betts J T. Survey of numerical methods for trajectory optimization[J]. Journal of Guidance, Control, and Dynamics, 1998.
