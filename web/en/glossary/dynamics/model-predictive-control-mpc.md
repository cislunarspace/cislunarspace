---
title: Model Predictive Control (MPC)
description: "An online rolling-horizon optimal control strategy: at each sampling instant, it solves a finite-horizon optimal control problem, applies the first control action, and re-solves at the next instant. It handles state and input constraints but faces challenges for computationally intensive scenarios like low-energy Earth-Moon transfers."
keywords: Model Predictive Control, MPC, optimal control, receding horizon, state constraint, input constraint
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Model Predictive Control (MPC)
  desc: Cislunar space research frontiers, term definitions, and tool resources.
  image: /logo.png
og:
  title: Model Predictive Control (MPC) Explained | Term Definition
  description: "An online rolling-horizon optimal control strategy: at each sampling instant, it solves a finite-horizon optimal control problem, applies the first control action, and re-solves at the next instant. It handles state and input constraints but faces challenges for computationally intensive scenarios."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Model Predictive Control (MPC) Explained | Term Definition
  description: "An online rolling-horizon optimal control strategy: at each sampling instant, it solves a finite-horizon optimal control problem, applies the first control action, and re-solves at the next instant. It handles state and input constraints but faces challenges for computationally intensive scenarios."
  image: /logo.png
permalink: /en/glossary/dynamics/model-predictive-control-mpc/
---

# Model Predictive Control (MPC)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An online rolling-horizon optimal control strategy: at each sampling instant, it solves a finite-horizon optimal control problem, applies the first control action, and re-solves at the next instant. It handles state and input constraints but faces challenges for computationally intensive scenarios like low-energy Earth-Moon transfers, where repeatedly solving optimal control problems in real time onboard is demanding.

## Application Value

The design of control strategies directly impacts spacecraft mission performance and longevity. A well-designed control approach can ensure mission success while minimizing propellant consumption.

## Related Concepts

- [Lyapunov Stability](/en/glossary/dynamics/lyapunov-stability/)
- [Adams-Cowell Integrator](/en/glossary/dynamics/adams-cowell-integrator/)
- [Hansen Coefficients](/en/glossary/dynamics/hansen-coefficients/)
- [Control Curve](/en/glossary/dynamics/control-curve-ui/)

## References

- Wang et al. - 2024 - Low-energy earth-moon transfer autonomous guidance considering high-fidelity orbital dynamics
- Starek et al. - 2016 - Spacecraft autonomy challenges for next-generation space missions
