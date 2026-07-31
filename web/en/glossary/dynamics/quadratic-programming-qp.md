---
title: Quadratic Programming, QP
description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and ..."
keywords: Quadratic Programming, QP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Quadratic Programming, QP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Quadratic Programming, QP Explained | Term Definition"
  description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and ..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Quadratic Programming, QP Explained | Term Definition"
  description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and ..."
  image: /logo.png
permalink: /en/glossary/dynamics/quadratic-programming-qp/
---

# Quadratic Programming, QP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and efficient solvers (e.g., Gurobi) that can solve it in polynomial time. Rendezvous MPC problems naturally reduce to QP after the chance constraints are linearized.

## Application Value

This term在cislunar space missions中has important application value. In orbit design, it can be used foroptimizing transfer trajectories, reducing mission fuel consumption. In attitude control and dynamics analysis, it helps understandthe motion characteristics of spacecraft in complex gravitational fields, providing theoretical support for mission planning. In navigation and orbit determination, methods based on this termcan improve orbit prediction accuracy, supporting the development of autonomous navigation algorithms. 


## Related Concepts

- [Periodicity Conditions in Relative Orbital Motion](/en/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [Helix Formation](/en/glossary/dynamics/helix-formation/)
- [Energy Dissipation Method](/en/glossary/dynamics/energy-dissipation-method/)
- [Unstable Manifold](/en/glossary/dynamics/unstable-manifold/)


## References

- Sanchez et al. 2020
- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment

