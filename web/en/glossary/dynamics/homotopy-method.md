---
title: Homotopy Method (Homotopy Method)
description: Detailed analysis of homotopy method definition, smooth transition principle from energy-optimal to fuel-optimal, and application in orbit optimization
keywords: Homotopy Method, Continuation Method, Fuel-optimal, Energy-optimal, Bang-bang Control, Orbit Optimization, Co-state Normalization
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Homotopy Method (Homotopy Method)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Homotopy Method Explained | Smooth Transition from Energy-Optimal to Fuel-Optimal
  description: Detailed analysis of homotopy method definition, smooth transition principle from energy-optimal to fuel-optimal, and application in orbit optimization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Homotopy Method Explained | Smooth Transition from Energy-Optimal to Fuel-Optimal
  description: Detailed analysis of homotopy method definition, smooth transition principle from energy-optimal to fuel-optimal, and application in orbit optimization
  image: /logo.png
permalink: /en/glossary/dynamics/homotopy-method/
---

# Homotopy Method (Homotopy Method)

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft
>
> Reference: 关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## Definition

The Homotopy Method is an iterative numerical method for solving nonlinear problems. Its basic idea is to construct a continuous deformation process from simple problems to complex problems, solving a series of intermediate problems to finally obtain the solution to the target problem. In orbit optimization, homotopy methods are often used to transition from easily solvable energy-optimal problems to difficult-to-directly-solve fuel-optimal problems.

## Principles

### Fuel-Optimal vs Energy-Optimal

In spacecraft rendezvous optimal control problems:

- **Fuel-optimal problem**: Minimizes fuel consumption, with discontinuous bang-bang control law
- **Energy-optimal problem**: Minimizes thrust energy, with continuous control law, easy to solve

### Homotopy Construction

Introduce homotopy parameter $\varepsilon \in [0,1]$, construct performance index:

$$J = \sum_{j=1}^{2} \frac{\lambda_{j0}F_j}{I_{sp}g_0} \int_{t_0}^{t_f} \left[u_j - \varepsilon u_j(1-u_j)\right] dt$$

- When $\varepsilon = 1$: Degenerates to energy-optimal problem (continuous control)
- When $\varepsilon \to 0$: Approaches fuel-optimal problem (bang-bang control)

### Smooth Transition Mechanism

The homotopy method achieves smooth transition from energy-optimal to fuel-optimal by gradually decreasing $\varepsilon$:

$$\varepsilon_d = 10^{-(d/15)}, \quad d = 1, 2, \cdots, N$$

Each step uses the co-state from the previous step as initial guess, effectively enlarging the convergence domain.

## Application in Orbit Optimization

### Solving Bang-bang Control Non-smooth Integration Problem

The bang-bang characteristics of fuel-optimal control cause discontinuities on the right-hand side of differential equations, preventing direct numerical integration. The homotopy method addresses this by:

1. When $\varepsilon > 0$, control law is continuous and differentiable
2. Gradually decrease $\varepsilon$ to zero to obtain fuel-optimal solution
3. Effectively avoids numerical difficulties from directly solving bang-bang control

### Application by Zhao Haihan et al. (2026)

Zhao Haihan et al. combined RLEPSO with homotopy method:
- RLEPSO quickly obtains high-quality energy-optimal initial co-states
- Homotopy method smoothly transitions to fuel-optimal control
- Solved fuel-optimal problem for long-distance cooperative rendezvous under J₂ perturbation

## Comparison with Continuation Method

| Characteristic | Homotopy Method | Continuation Method |
|:---|:---|:---|
| Purpose | Problem smoothing | Orbit family exploration |
| Parameter | Homotopy parameter $\varepsilon$ | Orbit parameter (amplitude, period, etc.) |
| Application | Optimal control transition | Periodic orbit family generation |
| Initial solution requirement | Low (energy-optimal easily obtained) | High (periodic solution required) |

## Related Concepts

- [Reinforced Learning Enhanced PSO (RLEPSO)](/en/glossary/dynamics/rlepeso/)
- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Co-state Normalization](/en/glossary/dynamics/co-state-normalization/)
- [Continuation Method](/en/glossary/dynamics/continuation/)
- [Shooting Method](/en/glossary/dynamics/shooting-method/)

## References

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Topputo F, et al. A survey on direct optimal control via homotopy continuation[C]. AIAA/AAS Astrodynamics Specialist Conference, 2014.
