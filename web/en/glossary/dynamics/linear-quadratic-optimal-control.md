---
title: Linear Quadratic Optimal Control
description: For linear systems, a control design that minimizes a weighted quadratic cost of state deviation and control input. The optimal state-feedback gain is obtained by solving the Riccati equation; the wei...
keywords: Linear Quadratic Optimal Control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Linear Quadratic Optimal Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Linear Quadratic Optimal Control Explained | Term Definition"
  description: For linear systems, a control design that minimizes a weighted quadratic cost of state deviation and control input. The optimal state-feedback gain is obtained by solving the Riccati equation; the wei...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Linear Quadratic Optimal Control Explained | Term Definition"
  description: For linear systems, a control design that minimizes a weighted quadratic cost of state deviation and control input. The optimal state-feedback gain is obtained by solving the Riccati equation; the wei...
  image: /logo.png
permalink: /en/glossary/dynamics/linear-quadratic-optimal-control/
---
# Linear Quadratic Optimal Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

For linear systems, a control design that minimizes a weighted quadratic cost of state deviation and control input. The optimal state-feedback gain is obtained by solving the Riccati equation; the weight matrices trade off tracking accuracy against control effort. In cislunar station-keeping, where nondimensional position and velocity errors are of similar magnitude, typical weights Q=10I and R=I yield favorable tracking performance.

## Application Value

This control method can be applied to spacecraft attitude stabilization, orbit keeping, and maneuver trajectory optimization in cislunar space missions, improving mission execution flexibility and reliability.

## References

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
