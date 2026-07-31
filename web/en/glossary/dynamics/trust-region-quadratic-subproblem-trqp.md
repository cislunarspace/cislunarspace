---
title: Trust-Region Quadratic Subproblem, TRQP (TRQP)
description: A constrained quadratic optimization subproblem solved at each step within a trust-region framework. In HDDP, the control update δu at each stage must satisfy ‖D·δu‖≤Δ, where D is a scaling matrix ...
keywords: Trust-Region Quadratic Subproblem, TRQP, TRQP, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Trust-Region Quadratic Subproblem, TRQP (TRQP)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Trust-Region Quadratic Subproblem, TRQP (TRQP) Explained | Term Definition"
  description: A constrained quadratic optimization subproblem solved at each step within a trust-region framework. In HDDP, the control update δu at each stage must satisfy ‖D·δu‖≤Δ, where D is a scaling matrix ...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Trust-Region Quadratic Subproblem, TRQP (TRQP) Explained | Term Definition"
  description: A constrained quadratic optimization subproblem solved at each step within a trust-region framework. In HDDP, the control update δu at each stage must satisfy ‖D·δu‖≤Δ, where D is a scaling matrix ...
  image: /logo.png
permalink: /en/glossary/dynamics/trust-region-quadratic-subproblem-trqp/
---

# Trust-Region Quadratic Subproblem, TRQP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition
A constrained quadratic optimization subproblem solved at each step within a trust-region framework. In HDDP, the control update δu at each stage must satisfy ‖D·δu‖≤Δ, where D is a scaling matrix and Δ is the trust-region radius. The subproblem balances the gradient descent direction against the Hessian curvature: too small a radius yields conservative, slow progress; too large a radius risks leaving the region where the quadratic model is valid. The radius adapts based on the ratio of actual to predicted improvement.

## Application Value
This term has application value in the design and analysis of cislunar space missions, supporting trajectory design, mission planning, and system optimization. Researchers can analyze its physical mechanisms and engineering applicability based on specific mission requirements to advance cislunar space exploration technology.

## Related Concepts
- [Elliptic Restricted Three-Body Problem](/en/glossary/dynamics/elliptic-restricted-three-body-problem/)
- [Dynamical Consistency](/en/glossary/dynamics/dynamical-consistency/)
- [Combined Covariance](/en/glossary/dynamics/combined-covariance/)
- [Nekhorosev Estimates](/en/glossary/dynamics/nekhorosev-estimates/)

## References
- Conn et al. 2000, Trust-Region Methods; Lantoine & Russell 2012, JOTA