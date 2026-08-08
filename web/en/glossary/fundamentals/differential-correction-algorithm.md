---
title: Differential Correction Algorithm
description: A core iterative algorithm in trajectory design. It linearizes the nonlinear relationship between control variables and constraint variables via first-order Taylor expansion, yielding a Jacobian matri
keywords: Differential Correction Algorithm, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Correction Algorithm
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Differential Correction Algorithm Explained | Term Definition"
  description: A core iterative algorithm in trajectory design. It linearizes the nonlinear relationship between control variables and constraint variables via first-order Taylor expansion, yielding a Jacobian matri
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Correction Algorithm Explained | Term Definition"
  description: A core iterative algorithm in trajectory design. It linearizes the nonlinear relationship between control variables and constraint variables via first-order Taylor expansion, yielding a Jacobian matri
  image: /logo.png
permalink: /en/glossary/fundamentals/differential-correction-algorithm/
---

# Differential Correction Algorithm

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A core iterative algorithm in trajectory design. It linearizes the nonlinear relationship between control variables and constraint variables via first-order Taylor expansion, yielding a Jacobian matrix mapping, then solves for correction terms through the generalized inverse. Each iteration updates the control variables to progressively satisfy target constraints. Used in this paper to solve periapsis parameters of Earth-Moon transfer trajectories under a high-precision dynamical model.

## Application Value

微分修正算法 is orbitdesign中 of core迭代算法, through 一阶泰勒展开和广义逆solve修正量. is solveboundary值problem of foundationmethod.

## Related Concepts

- Orbital State Vector
- Coordinate Time
- [Hill Frame](/en/glossary/fundamentals/hill-frame/)
- Kepler's Laws

## References

- 曹鹏飞 等 - 2022 - 嫦娥五号探测器多圈调相地月转移应急轨道设计与分析
