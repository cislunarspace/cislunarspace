---
title: Quadratic Programming, QP
description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and eff"
keywords: Quadratic Programming, QP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Quadratic Programming, QP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Quadratic Programming, QP Explained | Term Definition
  description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and eff"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Quadratic Programming, QP Explained | Term Definition
  description: "An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and eff"
  image: /logo.png
permalink: /en/glossary/dynamics/qp/
---

# Quadratic Programming, QP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimization problem with a quadratic objective function and linear constraints. Standard form: min (1/2)x^T H x + f^T x, s.t. Ax <= b. QP has mature and efficient solvers (e.g., Gurobi) that can solve it in polynomial time. Rendezvous MPC problems naturally reduce to QP after the chance constraints are linearized.

## Application Value

The 二次规划 concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- [Sequential Quadratic Programming](/en/glossary/dynamics/sqp/)

## References

- Sanchez et al. 2020
- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
