---
title: "Pontryagin's Maximum Principle"
description: "A detailed analysis of Pontryagin's Maximum Principle, the necessary conditions for optimal control, costate equations, switching functions, and applications in trajectory optimization"
keywords: "Pontryagin's Maximum Principle, Pontryagin, Optimal Control, Maximum Principle, Costate Equation, Hamiltonian, Switching Function, Fuel-Optimal"
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: "Pontryagin's Maximum Principle"
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Pontryagin's Maximum Principle Explained | The Cornerstone of Optimal Control Theory"
  description: "A detailed analysis of Pontryagin's Maximum Principle, the necessary conditions for optimal control, costate equations, switching functions, and applications in trajectory optimization"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Pontryagin's Maximum Principle Explained | The Cornerstone of Optimal Control Theory"
  description: "A detailed analysis of Pontryagin's Maximum Principle, the necessary conditions for optimal control, costate equations, switching functions, and applications in trajectory optimization"
  image: /logo.png
permalink: /en/glossary/dynamics/pontryagin-principle/
---

# Pontryagin's Maximum Principle

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Contributing institutions: School of Astronautics, Harbin Institute of Technology; National Key Laboratory of Rapid Design and Intelligent Swarm for Micro/Nano Spacecraft
>
> References: Guan Yutong et al. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous, Spacecraft Environment Engineering, 2026.

## Definition

Pontryagin's Maximum Principle is a core theorem of optimal control theory proposed by the Soviet mathematician Pontryagin and colleagues in 1958. It provides the first-order necessary conditions for solutions to continuous optimal control problems and serves as the theoretical foundation for indirect methods in solving optimal control problems.

## Core Formulas

### Hamiltonian

Construct the Hamiltonian:

$$H = \lambda_v^T f(x, u, t) + \lambda_x^T x + \lambda_m \dot{m}$$

where $\lambda = [\lambda_v; \lambda_x; \lambda_m]$ are the costate variables.

### Costate Equations

Costate variables satisfy:

$$\dot{\lambda} = -\frac{\partial H}{\partial x}$$

### Extremality Condition

For fuel-optimal control, the optimal thrust ratio satisfies:

$$u_j^* = \begin{cases} 0, & \rho_j > 0 \\ 1, & \rho_j < 0 \\ \in (0,1), & \rho_j = 0 \end{cases}$$

where $\rho_j = \frac{\partial H}{\partial u_j}$ is the switching function.

## Application in Trajectory Optimization

### Application by Zhao Han et al. (2026)

In spacecraft cooperative rendezvous fuel-optimal problems:

1. **Constructing the performance index**:
$$J = \sum_{j=1}^{2} \frac{F_j}{I_{sp}g_0} \int_{t_0}^{t_f} u_j dt$$

2. **Establishing costate equations**: Costate differential equations are obtained by taking partial derivatives of the Hamiltonian

3. **Determining optimal control**: Thrust direction and thrust ratio are determined from the extremality conditions

4. **Shooting solution**: The two-point boundary value problem is transformed into a shooting problem for solution

## Physical Meaning of Costate Variables

Costate variables have profound physical significance:

- **Position costate $\lambda_r$**: Related to position gradient, affects orbit shape
- **Velocity costate $\lambda_v$**: Related to velocity gradient, determines thrust direction
- **Mass costate $\lambda_m$**: Related to mass gradient, determines fuel consumption

## Relationship with Bang-Bang Control

Pontryagin's Maximum Principle directly leads to the bang-bang characteristic of fuel-optimal control:

- When the switching function $\rho_j > 0$, thrust is zero (coasting)
- When the switching function $\rho_j < 0$, thrust is at maximum
- Switching occurs when $\rho_j = 0$

## Related Concepts

- [Bang-Bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Costate Variables (Co-state Normalization)](/en/glossary/dynamics/co-state-normalization/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Shooting Method](/en/glossary/dynamics/shooting-method/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

## References

- Pontryagin L S, et al. The Mathematical Theory of Optimal Processes[M]. Wiley, 1962.
- Bryson A E, Ho Y C. Applied Optimal Control[M]. Hemisphere, 1975.
- Guan Yutong, Gao Changsheng, Hu Yudong, Zhao Han. Hyperparameter Auto-Tuning and Homotopy Methods for Spacecraft Long-Range Cooperative Rendezvous[J]. Spacecraft Environment Engineering, 2026. [in Chinese]
