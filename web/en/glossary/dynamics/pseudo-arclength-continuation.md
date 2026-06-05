---
title: Pseudo-Arclength Continuation
description: A detailed analysis of the pseudo-arclength continuation method, its differences from ordinary continuation, and applications in large-scale orbit family tracking
keywords: Pseudo-Arclength Continuation, Pseudo-Arclength, Continuation Method, Arc-Length Method, Orbit Family Tracking, Bifurcation Analysis
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Pseudo-Arclength Continuation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Pseudo-Arclength Continuation Explained | Orbit Family Tracking Method
  description: A detailed analysis of the pseudo-arclength continuation method, its differences from ordinary continuation, and applications in large-scale orbit family tracking
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pseudo-Arclength Continuation Explained | Orbit Family Tracking Method
  description: A detailed analysis of the pseudo-arclength continuation method, its differences from ordinary continuation, and applications in large-scale orbit family tracking
  image: /logo.png
permalink: /en/glossary/dynamics/pseudo-arclength-continuation/
---

# Pseudo-Arclength Continuation

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Reference: Qian Yingjing (2014) Research on Autonomous Navigation and Orbit Maintenance of Spacecraft on Quasi-Periodic Orbits in Cislunar Space
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Pseudo-Arclength Continuation is a numerical continuation method for solving families of nonlinear equations. By introducing arc-length parameters as an additional degree of freedom, it overcomes the inability of ordinary continuation methods to cross **limit points** (fold/fold points).

Pseudo-arclength continuation was systematically presented by Keller (1977) and is a powerful tool for tracking periodic orbit families, bifurcation curves, and families of equilibrium solutions. In libration point orbit research, this method is used to track Halo orbit families, Lyapunov orbit families, and analyze the stability evolution of orbits.

## Ordinary Continuation and Its Limitations

### Ordinary Continuation

Ordinary continuation tracks a solution curve through continuous variation of a parameter $\lambda$:

$$F(x, \lambda) = 0$$

Given a known solution $(x_0, \lambda_0)$, it predicts the next solution point along the tangent direction, then corrects it through Newton iteration.

### Limit Point Problem

When the solution curve exhibits a **limit point** (i.e., the tangent is perpendicular to the parameter axis), ordinary continuation fails:

- The prediction direction is orthogonal to the solution curve
- Newton iteration cannot converge to the correct branch

This frequently occurs in periodic orbit family tracking — when the orbit amplitude reaches an extremum, the sensitivity of the parameter to state changes undergoes a sudden shift.

## Pseudo-Arclength Continuation Principles

### Arc-Length Parameter Introduction

Pseudo-arclength continuation introduces an arc-length parameter $s$ as a new variable, replacing the original parameter $\lambda$:

$$\frac{ds}{d\lambda} = \frac{1}{\|\frac{\partial F}{\partial x}\|}$$

### Extended System of Equations

The original equation is combined with an arc-length constraint equation:

$$\begin{cases}
F(x, \lambda) = 0 \\
N(x, \lambda, \dot{x}, \dot{\lambda}; s) = 0
\end{cases}$$

where $N$ is the pseudo-arclength constraint, requiring the solution curve to be continuous under the arc-length parameter $s$.

### Prediction-Correction Steps

1. **Prediction**: Move a small step along the current tangent direction in arc-length parameter space
2. **Correction**: Solve the extended system of equations on the hyperplane perpendicular to the tangent
3. **Convergence**: Newton iteration converges to the new solution point

## Application in Orbit Family Tracking

### Halo Orbit Family Tracking

Halo orbits at the Earth-Moon L1/L2 points form a continuous family, ranging from small amplitude to large amplitude:

1. Starting from small-amplitude Halo orbits (approximating Lissajous orbits)
2. As amplitude increases, the orbit morphology transitions from "Lissajous" to "Halo" type
3. After reaching the maximum amplitude, tracking continues along another branch

At the maximum amplitude point, ordinary continuation fails, while pseudo-arclength continuation can proceed smoothly.

### Lyapunov Orbit Family Tracking

Planar Lyapunov orbit families also have limit points, and pseudo-arclength continuation is a necessary tool for tracking complete orbits.

### Bifurcation Analysis

Pseudo-arclength continuation can detect the following bifurcation phenomena:

- **Saddle-Node Bifurcation**: Extremum points appear in the orbit family
- **Period-Doubling Bifurcation**: Periodic orbits lose stability and bifurcate into new branches
- **Hopf Bifurcation**: Equilibrium solutions lose stability and produce limit cycles

## Algorithm Implementation Key Points

### Tangent Calculation

The tangent vector $(dx/ds, d\lambda/ds)$ along the arc-length direction is obtained by solving a linear system:

$$\frac{\partial F}{\partial x} \frac{dx}{ds} + \frac{\partial F}{\partial \lambda} \frac{d\lambda}{ds} = 0$$

### Step Size Control

The step size $ds$ needs to be appropriately adjusted:
- When solution curve curvature is large: decrease step size
- When solution curve is smooth: increase step size

### Convergence Criteria

The convergence criteria are:
$$\|F(x, \lambda)\| < \epsilon_{F}, \quad |N| < \epsilon_{N}$$

## Comparison with Other Methods

| Method | Application Scenario | Advantages | Disadvantages |
|:---|:---|:---|:---|
| Ordinary Continuation | Smooth curves without limit points | Simple and efficient | Cannot handle limit points |
| **Pseudo-Arclength Continuation** | Curves with limit points | Robust | Higher computational cost |
| Direct Arc-Length Method | Complex bifurcation structures | Suitable for complex cases | Complex implementation |

## Related Concepts

- [Continuation Method](/en/glossary/dynamics/continuation-method/)
- [Multiple Shooting](/en/glossary/dynamics/shooting-method/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Period-Doubling Bifurcation](/en/glossary/other/period-doubling-bifurcation/)

## References

- Keller H B. Numerical methods in boundary-layer theory[J]. Annual Review of Fluid Mechanics, 1978.
- Qian Yingjing. Research on Autonomous Navigation and Orbit Maintenance of Spacecraft on Quasi-Periodic Orbits in Cislunar Space[D]. Harbin Institute of Technology, 2014. [in Chinese]
