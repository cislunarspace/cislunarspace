---
title: Trajectory Optimization
description: A detailed analysis of trajectory optimization problem formulation, constraint types, and commonly used optimization methods
keywords: Trajectory Optimization, Optimal Control, Trajectory Design, Launch Vehicle Capability
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Trajectory Optimization
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Trajectory Optimization | Terminology Definition"
  description: A detailed analysis of trajectory optimization problem formulation and commonly used optimization methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Trajectory Optimization | Terminology Definition"
  description: A detailed analysis of trajectory optimization problem formulation and commonly used optimization methods
  image: /logo.png
permalink: /en/glossary/fundamentals/trajectory-optimization/
---

# Trajectory Optimization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Trajectory optimization is the problem of optimizing a specific performance index on the basis of trajectory design to obtain the optimal flight trajectory. Trajectory optimization formulates the trajectory design problem as an optimal control problem, solved using numerical optimization methods, to obtain the flight trajectory that is optimal with respect to a given performance index.

## Core Elements

### Problem Formulation

The trajectory optimization problem can be uniformly expressed as:

$$\max \quad J = J(\dot{\varphi}_{pr}(t), A_0)$$

The constraints fall into three categories:

| Constraint Type | Description | Example |
| :--- | :--- | :--- |
| Dynamic equations | Differential equations governing center-of-mass motion | Equations of motion |
| Initial/terminal state | Motion states at liftoff and engine cutoff | Orbit insertion elements, impact point location |
| Path constraints | Limitations to be satisfied during flight | Load factor, dynamic pressure, debris impact zone |

### Optimization Objectives

Determined by the flight mission, typical optimization objectives include:

| Mission Type | Optimization Objective |
| :--- | :--- |
| Launch vehicle | Maximum payload mass (equivalent to maximum residual propellant mass) |
| Ballistic missile | Minimum impact point deviation |
| General | Minimum fuel consumption, minimum flight time |

### Optimization Variables

Using a GTO insertion trajectory as an example, the optimization variables include the launch azimuth and pitch program angle parameters for each stage:

$$U = (A_0, \alpha_m, \dot{\varphi}_{p2}, t_{22}, \dot{\varphi}_{p31}, \dot{\varphi}_{p3h}, \dot{\varphi}_{p32}, t_{32}, \ldots, t_{k32})^{\mathrm{T}}$$

### Solution Methods

| Method Category | Typical Algorithms | Characteristics |
| :--- | :--- | :--- |
| Shooting method | Genetic algorithms, simulated annealing | Global search, gradient-free |
| Collocation method | Pseudospectral methods, convex optimization | Discretizes continuous problem |
| Gradient-based | SQP | Fast convergence, local optimum |

### Distinction from Trajectory Design

| Comparison Item | Trajectory Design | Trajectory Optimization |
| :--- | :--- | :--- |
| Objective | Find a feasible solution satisfying constraints | Find the solution with optimal performance index |
| Method | Newton iteration, etc. | SQP, genetic algorithms, etc. |
| Number of solutions | One feasible solution | Optimal solution |
| Computational cost | Relatively low | Relatively high |

## Application Value

Trajectory optimization is an important means of fully exploiting vehicle capability. By optimizing the flight program, maximum payload capacity, minimum impact point deviation, or other optimized performance indices can be achieved while satisfying all constraints. With advances in computing power and optimization algorithms, trajectory optimization is being applied increasingly broadly in spacecraft design.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
