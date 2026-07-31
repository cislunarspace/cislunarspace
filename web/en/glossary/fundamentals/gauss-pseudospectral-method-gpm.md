---
title: Gauss Pseudospectral Method (GPM)
description: A direct method for solving optimal control problems. It discretizes the continuous optimal control problem into a nonlinear programming (NLP) problem using Legendre-Gauss collocation points. Dynamics constraints depend only on the current node state, keeping the parameter space small.
keywords: Gauss Pseudospectral Method, GPM, optimal control, pseudospectral method, Legendre-Gauss collocation, trajectory optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gauss Pseudospectral Method (GPM)
  desc: Cislunar space research frontiers, term definitions, and tool resources.
  image: /logo.png
og:
  title: "Gauss Pseudospectral Method (GPM) Explained | Term Definition"
  description: A direct method for solving optimal control problems. It discretizes the continuous optimal control problem into a nonlinear programming (NLP) problem using Legendre-Gauss collocation points. The KKT conditions at collocation points are equivalent to the first-order optimality conditions of the Pontryagin maximum principle.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Gauss Pseudospectral Method (GPM) Explained | Term Definition"
  description: A direct method for solving optimal control problems. It discretizes the continuous optimal control problem into a nonlinear programming (NLP) problem using Legendre-Gauss collocation points. The KKT conditions at collocation points are equivalent to the first-order optimality conditions of the Pontryagin maximum principle.
  image: /logo.png
permalink: /en/glossary/fundamentals/gauss-pseudospectral-method-gpm/
---

# Gauss Pseudospectral Method (GPM)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A direct method for solving optimal control problems. It discretizes the continuous optimal control problem into a nonlinear programming (NLP) problem using Legendre-Gauss collocation points. Dynamics constraints depend only on the current node state, keeping the parameter space small. The KKT conditions at collocation points are equivalent to the first-order optimality conditions of the Pontryagin maximum principle, yielding high accuracy. It inherits the exponential convergence property of pseudospectral methods. In libration point orbit transfer design, combined with shape-based methods providing initial guesses, iteration counts can be reduced by more than 55%.

## Application Value

In orbit design and transfer trajectory optimization, this method is used to determine optimal transfer timing and orbit shapes to minimize propellant consumption or flight time. Through numerical simulation and iterative optimization, feasible trajectory solutions satisfying mission constraints can be obtained.

## Related Concepts

- [Synodic Rotating Frame](/en/glossary/fundamentals/synodic-rotating-frame/)
- [Grid Search](/en/glossary/fundamentals/grid-search/)
- [Gauss Quadrature Formula](/en/glossary/fundamentals/gauss-quadrature-formula/)
- [Constellation Pattern Vector](/en/glossary/fundamentals/constellation-pattern-vector/)

## References

- Gauss pseudospectral method for low-thrust transfer between libration point periodic orbits
