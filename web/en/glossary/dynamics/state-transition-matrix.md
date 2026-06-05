---
title: State Transition Matrix (STM)
description: Detailed analysis of the definition, computation method, and applications of the State Transition Matrix in orbital mechanics
keywords: State Transition Matrix, STM, Variational Equations, Orbital Mechanics, Sensitivity Analysis
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: State Transition Matrix (STM)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: State Transition Matrix Details | Fundamental Tool for Orbital Analysis
  description: Detailed analysis of the definition, computation method, and applications of the State Transition Matrix in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: State Transition Matrix Details | Fundamental Tool for Orbital Analysis
  description: Detailed analysis of the definition, computation method, and applications of the State Transition Matrix in orbital mechanics
  image: /logo.png
permalink: /en/glossary/dynamics/state-transition-matrix/
---

# State Transition Matrix

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The State Transition Matrix (STM), denoted $\Phi(t, t_0)$, is a matrix that relates small changes in the initial state of a dynamical system to changes at a later time. It describes how perturbations propagate along a reference orbit.

$$\delta \mathbf{x}(t) = \Phi(t, t_0) \delta \mathbf{x}(t_0)$$

## Computation

The STM is computed by integrating the variational equations simultaneously with the equations of motion:

$$\dot{\Phi}(t, t_0) = A(t) \Phi(t, t_0), \quad \Phi(t_0, t_0) = I$$

where $A(t)$ is the Jacobian matrix of the dynamics and $I$ is the identity matrix.

For the CR3BP, the state vector is 6-dimensional (position and velocity), so $\Phi$ is a $6 \times 6$ matrix.

## Applications

| Application | Description |
|:---|:---|
| Stability analysis | Eigenvalues of the monodromy matrix determine orbital stability |
| Differential correction | Used to solve boundary value problems for periodic orbits |
| Orbit design | Sensitivity analysis for trajectory optimization |
| Station-keeping | Control law design based on linearized dynamics |

## Related Concepts

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)
- [Stability Index](/en/glossary/dynamics/stability-index/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
