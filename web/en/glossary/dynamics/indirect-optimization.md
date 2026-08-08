---
title: Indirect Optimization
description: "A trajectory optimization approach that transforms the optimal control problem into a two-point boundary value problem using Pontryagin's Minimum Principle. Unl"
keywords: Indirect Optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Indirect Optimization
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Indirect Optimization Explained | Term Definition"
  description: "A trajectory optimization approach that transforms the optimal control problem into a two-point boundary value problem using Pontryagin's Minimum Principle. Unl"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Indirect Optimization Explained | Term Definition"
  description: "A trajectory optimization approach that transforms the optimal control problem into a two-point boundary value problem using Pontryagin's Minimum Principle. Unl"
  image: /logo.png
permalink: /en/glossary/dynamics/indirect-optimization/
---
# Indirect Optimization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory optimization approach that transforms the optimal control problem into a two-point boundary value problem using Pontryagin's Minimum Principle. Unlike direct methods that discretize state and control variables, indirect methods introduce co-state variables and derive control laws from analytical first-order necessary conditions, then solve the resulting BVP numerically. Advantages include strict optimality and high precision; disadvantages include narrow convergence domains and sensitivity to initial guesses.

## Related Concepts

- Powered Explicit Guidance, PEG
- Nonlinear Attitude Control
- Terminal Guidance

## References

- Singh et al., 2021
