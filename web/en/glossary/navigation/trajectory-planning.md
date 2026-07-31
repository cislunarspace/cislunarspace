---
title: Trajectory Planning
description: A detailed analysis of trajectory planning definitions, objective functions, constraint conditions, and typical algorithms for stratospheric airships
keywords: Trajectory Planning, Path Planning, Optimal Control, Receding Horizon Optimization, Low Energy, Stratospheric Airship
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: "Trajectory Planning | Airship Navigation"
  description: A detailed analysis of trajectory planning definitions, objective functions, constraint conditions, and typical algorithms for stratospheric airships
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Trajectory Planning | Airship Navigation"
  description: A detailed analysis of trajectory planning definitions, objective functions, constraint conditions, and typical algorithms for stratospheric airships
  image: /logo.png
permalink: /en/glossary/navigation/trajectory-planning/
wechatShare:
  title: "Cislunar Space Guide | Trajectory Planning"
  desc: "A detailed analysis of trajectory planning definitions, objective functions, constraint conditions, and typical algorithms for stratospheric airships"
  image: "/logo.png"
---

# Trajectory Planning

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Trajectory planning designs optimal or near-optimal flight paths from start to target for stratospheric airships under given mission constraints. For long-endurance regional station-keeping missions, trajectory planning must simultaneously consider energy efficiency, station-keeping precision, and flight time.

## Problem Formulation

### State Space

$$\mathbf{x} = [x, y, z, \dot{x}, \dot{y}, \dot{z}, m]^T$$

### Control Input

$$\mathbf{u} = [T_x, T_y, T_z, \dot{m}_{ballast}]^T$$

### Objective Function

$$J = \int_{t_0}^{t_f} L(\mathbf{x}, \mathbf{u}, t) dt + \phi(\mathbf{x}(t_f))$$

Typical objectives:

| Objective | Expression |
| :--- | :--- |
| Minimum energy | $\min \int P_{prop} dt$ |
| Minimum time | $\min (t_f - t_0)$ |
| Minimum path length | $\min \int | \mathbf{v} | dt$ |
| Maximum station-keeping precision | $\min \int | | \mathbf{p} - \mathbf{p}_d | | dt$ |

## Constraint Conditions

### Path Constraints

| Constraint | Requirement |
| :--- | :--- |
| Station-keeping region | $\mathbf{p} \in \mathcal{R}_{station}$ |
| Maximum range | $d_{total} \leq D_{max}$ |
| No-fly zone | $\mathbf{p} \notin \mathcal{R}_{forbidden}$ |

## Typical Algorithms

### Intelligent Optimization

| Method | Characteristics |
| :--- | :--- |
| Particle Swarm Optimization (PSO) | Global search |
| Genetic Algorithm (GA) | Strong robustness |
| Deep Reinforcement Learning (DRL) | Handles complex constraints |

## Low-energy Trajectory

### Principle

Utilize wind field energy to reduce propulsion consumption:

$$E_{prop} = \int \frac{1}{2}\rho | \mathbf{v}_{rel} |^3 C_D S \cdot dt$$

### Optimal Strategy

| Strategy | Condition |
| :--- | :--- |
| Downwind navigation | $\mathbf{v}_{wind}$ pointing toward target |
| Altitude scheduling | Utilizing vertical wind shear |
| Wait/drift | During no-fly zones or low-wind periods |

## Related Concepts

- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)
- [Zonal Wind](/en/glossary/observation/zonal-wind/)
- [Altitude Regulation](/en/glossary/navigation/altitude-regulation/)

## References

- Betts J T. Practical Methods for Optimal Control and Estimation Using Nonlinear Programming[M]. SIAM, 2023.
- Zhang Y, et al. Trajectory Optimization for High Altitude Airship[J]. AIAA Journal of Aerospace Systems, 2024.
