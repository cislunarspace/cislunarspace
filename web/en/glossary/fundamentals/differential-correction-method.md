---
title: Differential Correction Method
description: A numerical method that uses the linear approximation of the state transition matrix to iteratively correct initial state deviations so that terminal states...
keywords: Differential Correction Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Correction Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Differential Correction Method Explained | Term Definition"
  description: A numerical method that uses the linear approximation of the state transition matrix to iteratively correct initial state deviations so that terminal states...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Correction Method Explained | Term Definition"
  description: A numerical method that uses the linear approximation of the state transition matrix to iteratively correct initial state deviations so that terminal states...
  image: /logo.png
permalink: /en/glossary/fundamentals/differential-correction-method/
---

# Differential Correction Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method that uses the linear approximation of the state transition matrix to iteratively correct initial state deviations so that terminal states gradually satisfy constraint conditions. In the three-body Lambert problem, the differential correction method linearizes the nonlinear two-point boundary value problem, using the state transition matrix to establish the mapping between position deviations and velocity corrections. Equation (11) in the paper is the core differential correction equation.

## Application Value

The Differential Correction Method establishes a linear mapping between deviations and corrections using the state transition matrix, serving as the standard method for solving two-point boundary value problems in the three-body Lambert problem. Orbit designers use it to accurately compute libration point rendezvous orbits.
## Related Concepts

- [Laval Nozzle](/en/glossary/fundamentals/laval-nozzle/)
- [Multi-Body Dynamical Environment](/en/glossary/fundamentals/multi-body-dynamical-environment/)
- [Lagrange Point](/en/glossary/fundamentals/lagrange-point/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
## References

- 基于三体Lambert算法的平动点交会轨道设计
