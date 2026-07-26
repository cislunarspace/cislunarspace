---
title: Sequential Quadratic Programming
description: Basic principles, iterative process, and application of the SQP algorithm in trajectory optimization
keywords: Sequential Quadratic Programming, SQP, Nonlinear Programming, Trajectory Optimization
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Sequential Quadratic Programming
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Sequential Quadratic Programming | Terminology Definition
  description: Basic principles and iterative process of the SQP algorithm
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sequential Quadratic Programming | Terminology Definition
  description: Basic principles and iterative process of the SQP algorithm
  image: /logo.png
permalink: /en/glossary/fundamentals/sequential-quadratic-programming/
---

# Sequential Quadratic Programming

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Sequential Quadratic Programming (SQP) is one of the most effective methods for solving nonlinear programming (NLP) problems, possessing both global convergence and local superlinear convergence properties. Its fundamental idea is to convert the original NLP problem into a sequence of quadratic programming (QP) subproblems.

## Core Elements

### Problem Formulation

A general NLP problem can be stated as:

$$\min \quad J = F(y)$$
$$\text{s.t.} \quad h_i(y) = 0, \quad i = 1, 2, \ldots, r$$
$$g_j(y) \leq 0, \quad j = r+1, r+2, \ldots, s$$

where $y$ includes both state variables and control variables.

### Lagrangian Function

The Lagrangian of the NLP problem is:

$$L(y, \lambda) = F(y) + \sum_{i=1}^{r} \lambda_i h_i(y) + \sum_{j=r+1}^{s} \lambda_j g_j(y)$$

### QP Subproblem

At each iteration, the constraints are approximated by a first-order Taylor series and the objective function by a second-order Taylor series, converting the NLP problem into a QP subproblem:

$$\min_{d_k} \nabla F(y_k)^{\mathrm{T}} d_k + \frac{1}{2} d_k^{\mathrm{T}} H_k d_k$$

where $H_k$ is an approximate positive-definite form of the Lagrangian Hessian matrix, updated using the modified BFGS formula:

$$H_{k+1} = H_k + \frac{s_k s_k^{\mathrm{T}}}{s_k^{\mathrm{T}} \delta_k} - \frac{(H_k \delta_k)(H_k \delta_k)^{\mathrm{T}}}{(H_k \delta_k)^{\mathrm{T}} \delta_k}$$

### Iteration Steps

1. Given an initial point $y_0$, initial matrix $H_0$, and tolerance $\varepsilon$
2. Solve the QP subproblem to determine the search direction $d_k$ and Lagrange multipliers $\lambda_k$
3. Determine the step size $\alpha_k$ via exact line search, and compute the new iterate $y_{k+1} = y_k + \alpha_k d_k$
4. If $\|y_{k+1} - y_k\| \leq \varepsilon$, stop; otherwise update $H_k$ and return to step 2

### Comparison with Other Optimization Methods

| Method | Characteristics | Applicable Scenarios |
| :--- | :--- | :--- |
| SQP | Gradient-based, fast convergence, local optimum | Continuously differentiable NLP problems |
| Genetic Algorithm | Global search, gradient-free | Discrete or non-smooth problems |
| Simulated Annealing | Global search, avoids local optima | Complex multimodal problems |

## Application Value

SQP is one of the core methods for trajectory optimization. In launch vehicle and ballistic missile trajectory optimization, SQP is used to solve NLP problems where the objective function is payload capacity or impact accuracy, subject to orbital insertion conditions and path constraints. Its fast convergence makes it widely used in engineering design.

## Related Concepts

- [Newton's Iteration Method](/en/glossary/fundamentals/newton-iteration-method/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics [空天飞行力学](M). National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics [远程火箭弹道学](M). National University of Defense Technology Press.
