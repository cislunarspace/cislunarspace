---
title: Particle Swarm Optimization
description: A detailed analysis of particle swarm optimization principles, algorithm flow, parameter settings, and applications in stratospheric airship trajectory planning
keywords: Particle Swarm Optimization, PSO, Swarm Intelligence, Optimization Algorithm, Global Optimization, Trajectory Planning
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Particle Swarm Optimization | Metaheuristic Optimization
  description: A detailed analysis of particle swarm optimization principles, algorithm flow, parameter settings, and applications in stratospheric airship trajectory planning
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Particle Swarm Optimization | Metaheuristic Optimization
  description: A detailed analysis of particle swarm optimization principles, algorithm flow, parameter settings, and applications in stratospheric airship trajectory planning
  image: /logo.png
permalink: /en/glossary/dynamics/particle-swarm-optimization/
wechatShare:
  title: "Cislunar Space Guide | Particle Swarm Optimization"
  desc: "A detailed analysis of particle swarm optimization principles, algorithm flow, parameter settings, and applications in stratospheric airship trajectory planning"
  image: "/logo.png"
---

# Particle Swarm Optimization

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Particle Swarm Optimization (PSO) is a metaheuristic optimization algorithm based on swarm intelligence, simulating bird foraging behavior to find optimal solutions in multi-dimensional space through individual experience and group collaboration. PSO is simple, fast-converging, with few parameters, widely used in continuous space optimization.

## Algorithm Origin

Proposed by Kennedy and Eberhart in 1995 based on social cognitive models:

| Source | Correspondence |
| :--- | :--- |
| Bird flock foraging | Optimization search |
| Individual experience | Individual best pbest |
| Group collaboration | Global best gbest |

## Basic Principles

### Particle Representation

Each particle represents a candidate solution:

$$\mathbf{x}_i = (x_{i1}, x_{i2}, ..., x_{iD})$$

Where $D$ is dimensionality.

### Velocity Update

$$\mathbf{v}_i^{n+1} = w \mathbf{v}_i^n + c_1 r_1 (\mathbf{pbest}_i - \mathbf{x}_i^n) + c_2 r_2 (\mathbf{gbest} - \mathbf{x}_i^n)$$

### Position Update

$$\mathbf{x}_i^{n+1} = \mathbf{x}_i^n + \mathbf{v}_i^{n+1}$$

## Parameter Description

| Parameter | Meaning | Typical Value |
| :--- | :--- | :--- |
| $w$ | Inertia weight | 0.4-0.9 |
| $c_1$ | Individual learning factor | 2.0 |
| $c_2$ | Social learning factor | 2.0 |
| $r_1, r_2$ | [0,1] random numbers | - |
| $v_{max}$ | Maximum velocity | $0.1 \times x_{max}$ |

## Applications in Stratospheric Airships

### Trajectory Optimization

| Optimization Variable | Dimension | Range |
| :--- | :--- | :--- |
| Heading angle sequence | $N \times 1$ | $[0, 2\pi)$ |
| Altitude profile | $N \times 1$ | $[h_{min}, h_{max}]$ |
| Time allocation | $N \times 1$ | $[0, T_{max}]$ |

### Objective Function

$$\min J = \int_0^T P_{prop}(\mathbf{x}, t) dt + \lambda_1 |h_{error}| + \lambda_2 |d_{station} - R_{target}|$$

## Related Concepts

- [Trajectory Planning](/en/glossary/navigation/trajectory-planning/)
- [Variational Mode Decomposition](/en/glossary/dynamics/variational-mode-decomposition/)
- [Deep Reinforcement Learning](/en/glossary/dynamics/deep-reinforcement-learning/)

## References

- Kennedy J, Eberhart R. Particle Swarm Optimization[C]. IEEE International Conference on Neural Networks, 1995.
- Zhang Y, et al. PSO-based Trajectory Optimization for Stratospheric Airship[J]. AIAA Journal of Aerospace Systems, 2025.
