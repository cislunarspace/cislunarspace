---
title: Differential Evolution (DE) Algorithm
description: Detailed analysis of the differential evolution algorithm and its applications in orbital mechanics
keywords: Differential Evolution, DE, Optimization Algorithm, Evolutionary Algorithm, Orbit Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Differential Evolution (DE) Algorithm
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Differential Evolution Details | Global Optimization for Orbit Design
  description: Detailed analysis of the differential evolution algorithm and its applications in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Differential Evolution Details | Global Optimization for Orbit Design
  description: Detailed analysis of the differential evolution algorithm and its applications in orbital mechanics
  image: /logo.png
permalink: /en/glossary/dynamics/differential-evolution/
---

# Differential Evolution Algorithm

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Differential Evolution (DE) is a population-based stochastic optimization algorithm that belongs to the family of evolutionary algorithms. It is particularly effective for continuous optimization problems and has been widely applied in orbital mechanics for trajectory design, orbit determination, and control optimization.

## Core Operations

DE evolves a population of candidate solutions through three operations:

1. **Mutation**: For each candidate $\mathbf{x}_i$, create a mutant vector:
   $$\mathbf{v}_i = \mathbf{x}_{r1} + F \cdot (\mathbf{x}_{r2} - \mathbf{x}_{r3})$$
   where $r1, r2, r3$ are random indices and $F$ is the mutation factor.

2. **Crossover**: Combine the mutant with the original to create a trial vector:
   $$u_{i,j} = \begin{cases} v_{i,j} & \text{if } rand < CR \\ x_{i,j} & \text{otherwise} \end{cases}$$
   where $CR$ is the crossover rate.

3. **Selection**: Keep the better of the original and trial vectors:
   $$\mathbf{x}_i^{(t+1)} = \begin{cases} \mathbf{u}_i & \text{if } f(\mathbf{u}_i) \leq f(\mathbf{x}_i) \\ \mathbf{x}_i & \text{otherwise} \end{cases}$$

## Applications in Orbital Mechanics

| Application | Description |
|:---|:---|
| Initial value search | Finding initial conditions for DRO computation in ephemeris models |
| Orbit keeping optimization | Optimizing control parameters for station-keeping maneuvers |
| Transfer orbit design | Searching for low-energy transfer trajectories |
| Multi-objective optimization | Balancing fuel consumption, orbit accuracy, and observation coverage |

## Advantages

- **Global search capability**: Population-based approach avoids local optima
- **Derivative-free**: No gradient computation required
- **Few control parameters**: Only $F$ and $CR$ need tuning
- **Parallelizable**: Population members can be evaluated independently

## Related Concepts

- [Dynamic Target Method](/en/glossary/dynamics/dynamic-target-method/)
- [Initial Value Optimization](/en/glossary/dynamics/initial-value-optimization/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
