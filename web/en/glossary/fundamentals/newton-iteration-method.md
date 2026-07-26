---
title: Newton's Iteration Method
description: Basic principles of Newton's iteration method, its application in trajectory design, and partial derivative computation methods
keywords: Newton's Iteration Method, Newton-Raphson Method, Trajectory Design, Nonlinear Equation Solver
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Newton's Iteration Method
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Newton's Iteration Method | Terminology Definition
  description: Basic principles and application of Newton's iteration method in trajectory design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Newton's Iteration Method | Terminology Definition
  description: Basic principles and application of Newton's iteration method in trajectory design
  image: /logo.png
permalink: /en/glossary/fundamentals/newton-iteration-method/
---

# Newton's Iteration Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Newton's iteration method (also known as the Newton-Raphson method) is a classical numerical method for finding the roots of a nonlinear equation $f(x) = 0$. Its fundamental idea is to expand the nonlinear equation in a Taylor series around the current iterate, retain the linear part as an approximation, and successively approach the true solution.

## Core Elements

### Basic Formula

Assuming $f(x)$ is continuously differentiable on an interval containing $x_k$, the linear approximation of the Taylor expansion yields the iteration formula:

$$x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}, \quad k = 0, 1, 2, \ldots$$

### Geometric Interpretation

The geometric meaning of Newton's iteration method is: draw the tangent to $f(x)$ at the point $(x_k, f(x_k))$, and the intersection of this tangent with the $x$-axis gives the next iterate $x_{k+1}$. For this reason, it is also called the tangent method.

### Application in Trajectory Design

Trajectory design problems can be reduced to finding the roots of a nonlinear system $F(x) = 0$. For a ballistic missile, the design variables are the launch azimuth $A_0$ and the pitch program angle rate $\dot{\varphi}_{pr}$, and the terminal constraint is zero impact point deviation:

$$\begin{bmatrix} \dot{\varphi}_{pr}^{(k+1)} \\ A_0^{(k+1)} \end{bmatrix} = \begin{bmatrix} \dot{\varphi}_{pr}^{(k)} \\ A_0^{(k)} \end{bmatrix} + \begin{bmatrix} \frac{\partial \Delta L}{\partial \dot{\varphi}_{pr}} & \frac{\partial \Delta L}{\partial A_0} \\ \frac{\partial \Delta H}{\partial \dot{\varphi}_{pr}} & \frac{\partial \Delta H}{\partial A_0} \end{bmatrix}^{-1} \begin{bmatrix} -\Delta L^{(k)} \\ -\Delta H^{(k)} \end{bmatrix}$$

### Partial Derivative Computation

The accuracy of partial derivatives significantly affects convergence. Common methods:

| Method | Characteristics | Computational Cost |
| :--- | :--- | :--- |
| Finite difference | Simple to implement, sensitive to step size selection | Low (1 extra trajectory per parameter) |
| Richardson extrapolation | High accuracy, insensitive to step size | High (4 extra trajectories per parameter) |

The finite-difference partial derivative approximation:

$$\frac{\partial f}{\partial x_i} \approx \frac{f(x_i + \delta x_i) - f(x_i)}{\delta x_i}$$

### Convergence Properties

| Property | Description |
| :--- | :--- |
| Fast convergence | Local superlinear convergence |
| Sensitive to initial guess | Poor initial guess may cause divergence |
| Finds a feasible solution | Only locates a solution satisfying the constraints, not necessarily the optimal one |

## Application Value

Newton's iteration method is the core numerical method for powered-phase trajectory design of ballistic missiles and launch vehicles. By reformulating the trajectory design problem as a nonlinear equation system, it can rapidly determine the flight program angle and launch azimuth that satisfy terminal constraints. The method is simple to implement and converges quickly, making it widely used in engineering.

## Related Concepts

- [Sequential Quadratic Programming](/en/glossary/fundamentals/sequential-quadratic-programming/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics [空天飞行力学](M). National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics [远程火箭弹道学](M). National University of Defense Technology Press.
