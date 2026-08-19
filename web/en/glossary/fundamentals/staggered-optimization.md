---
title: Staggered Optimization
description: A multi-stage strategy for solving optimal control problems. Stage 1 uses a differentiable cost function (e.g., sum of squared velocity increments) to find a...
keywords: Staggered Optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Staggered Optimization
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Staggered Optimization Explained | Term Definition"
  description: A multi-stage strategy for solving optimal control problems. Stage 1 uses a differentiable cost function (e.g., sum of squared velocity increments) to find a...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Staggered Optimization Explained | Term Definition"
  description: A multi-stage strategy for solving optimal control problems. Stage 1 uses a differentiable cost function (e.g., sum of squared velocity increments) to find a...
  image: /logo.png
permalink: /en/glossary/fundamentals/staggered-optimization/
---

# Staggered Optimization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A multi-stage strategy for solving optimal control problems. Stage 1 uses a differentiable cost function (e.g., sum of squared velocity increments) to find an initial optimum. Stage 2 switches to a physically meaningful but nondifferentiable cost (e.g., sum of absolute velocity increments) and refines the solution, removing maneuvers that fall below a threshold. Stage 3 re-optimizes with fewer maneuvers. Each stage uses the previous result as its initial guess.

## Application Value

Based on its definition, a multi-stage strategy for solving optimal control problems. stage 1 uses a differentiable cost function (e.g., sum of squared velocity increments) to find an initial optimum. stage 2 switches to a ph.

## Related Concepts

- 轨道力学（Orbital Mechanics）
- 坐标系（Coordinate Frame）
- 积分（Integration）

## References

- Serban et al., 2002, Acta Astronautica
