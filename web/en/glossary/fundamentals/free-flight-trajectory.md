---
title: Free-Flight Trajectory
description: Detailed analysis of the free-flight trajectory definition, relationship with powered-phase terminal parameters, trajectory shape conditions, and applications in ballistic missiles
keywords: Free-Flight Trajectory, powered-phase terminal, engine cutoff, trajectory shape, two-body problem
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Free-Flight Trajectory
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Free-Flight Trajectory | Terminology Definition
  description: Detailed analysis of free-flight trajectory definition and its relationship with powered-phase terminal parameters
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Free-Flight Trajectory | Terminology Definition
  description: Detailed analysis of free-flight trajectory definition and its relationship with powered-phase terminal parameters
  image: /logo.png
permalink: /en/glossary/fundamentals/free-flight-trajectory/
---

# Free-Flight Trajectory

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The free-flight trajectory is the motion path of an aerospace vehicle during the unpowered, uncontrolled free-flight phase after engine cutoff. Since the free-flight phase occurs in near-vacuum with negligible aerodynamic forces, the vehicle can be treated as a point mass concentrated at its center of gravity, subject only to Earth's central gravitational attraction -- the two-body motion problem. The free-flight trajectory is a conic-section trajectory whose inertial spatial orientation, size, shape, and pointing remain constant.

## Core Elements

### Relationship with Powered-Phase Terminal Parameters

The inertial orientation, size, shape, and pointing of the free-flight trajectory are entirely determined by the position $\boldsymbol{r}_k$ and velocity $\boldsymbol{v}_k$ at the powered-phase terminal (engine cutoff point) K. Since the free-flight duration is less than one orbital period, the trajectory can be reduced from three dimensions to a two-dimensional planar trajectory, and the corresponding parameters simplify to:

| Parameter | Symbol | Definition |
|:---|:---|:---|
| Semi-latus rectum | $p$ | $p = r_k \gamma_k \cos^2 \Theta_k$ |
| Eccentricity | $e$ | $e = \sqrt{1 - \gamma_k(2-\gamma_k)\cos^2\Theta_k}$ |
| True anomaly | $f_k$ | $f_k = \cos^{-1}\left[\frac{1}{e}\left(\frac{p}{r_k}-1\right)\right]$ |

### Trajectory Shape Conditions

| Trajectory Type | Energy Parameter Condition | Velocity Condition |
|:---|:---|:---|
| Circular | $\gamma_k = 1$ | $v_k = \sqrt{\mu_E/r_k}$ |
| Elliptical | $0 < \gamma_k < 2$ | $v_k < \sqrt{2\mu_E/r_k}$ |
| Parabolic | $\gamma_k = 2$ | $v_k = \sqrt{2\mu_E/r_k}$ |
| Hyperbolic | $\gamma_k > 2$ | $v_k > \sqrt{2\mu_E/r_k}$ |

### Conditions for Satellite vs. Missile Trajectories

- **Satellite condition**: $0 < \gamma_k < 2$, with perigee radius $r_p > R_E + h_L$ ($h_L$ is the survivability altitude)
- **Missile condition**: $0 < \gamma_k < 2$, with perigee radius $r_p < R_E$

These are distinguished by the critical velocity inclination $\Theta_{k,\lim}$: when $\Theta_k \leq \Theta_{k,\lim}$, the trajectory is a satellite orbit; otherwise, it is a missile trajectory.

## Application Value

The free-flight trajectory constitutes the primary phase of ballistic missile flight, accounting for the vast majority of the total flight time. The free-flight trajectory characteristics are fully determined by the powered-phase terminal parameters, allowing the position and velocity at any point to be extrapolated. Free-flight trajectory analysis is the foundation of range calculation, flight time estimation, and error coefficient modeling.

## Related Concepts

- [Two-Body Problem](/en/glossary/fundamentals/two-body-problem/)
- [Vis-Viva Equation](/en/glossary/fundamentals/vis-viva-equation/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
- [Energy Parameter](/en/glossary/fundamentals/energy-parameter/)
- [Hit Equation](/en/glossary/fundamentals/hit-equation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
