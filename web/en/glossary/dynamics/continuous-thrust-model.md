---
title: Continuous Thrust Model
description: A mathematical model where the propulsion system outputs a sustained force over time. Unlike impulsive thrust model, continuous thrust applies control acceleration u(t) continuously, typically representing electric propulsion.
keywords: Continuous Thrust Model, electric propulsion, control acceleration, B-spline, Fourier series
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Continuous Thrust Model
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Continuous Thrust Model Explained | Term Definition"
  description: A mathematical model where the propulsion system outputs a sustained force over time, with control acceleration applied continuously, typically for electric propulsion.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Continuous Thrust Model Explained | Term Definition"
  description: A mathematical model where the propulsion system outputs a sustained force over time, with control acceleration applied continuously, typically for electric propulsion.
  image: /logo.png
permalink: /en/glossary/dynamics/continuous-thrust-model/
---

# Continuous Thrust Model

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A mathematical model where the propulsion system outputs a sustained force over time. Unlike the impulsive thrust model (instantaneous velocity change), the continuous thrust model applies a control acceleration u(t) continuously, typically representing electric propulsion. In trajectory optimization, continuous thrust signals are commonly parameterized by B-splines or Fourier series, converting the control into finite-dimensional parameters.

## Application Value

The continuous thrust model is the core mathematical framework for electric propulsion orbital design. Unlike chemical propulsion's impulsive model, electric propulsion thrusts small but continuously for months, requiring time-continuous functions to describe control acceleration. In trajectory optimization, using B-splines or Fourier series parameterization substantially reduces optimization variable dimensionality, transforming an originally infinite-dimensional optimal control problem into a solvable numerical optimization problem. This model has wide applications in Earth-Moon transfers, lunar landing ascent, and interplanetary missions, particularly suited for mission profiles characterized by small thrust but long flight time.

## Related Concepts

- Impulsive Thrust Model
- [Electric Propulsion](/en/glossary/fundamentals/ep/)
- Trajectory Optimization
- Thrust Arc

## References

- Sanchez et al. 2020
