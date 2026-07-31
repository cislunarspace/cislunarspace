---
title: Model Predictive Guidance and Control, MPC
description: A guidance and control strategy based on numerical optimization that minimizes a cost function within a prediction horizon, obtains a control sequence by...
keywords: Model Predictive Guidance and Control, MPC, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Model Predictive Guidance and Control, MPC
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Model Predictive Guidance and Control, MPC Explained | Term Definition
  description: A guidance and control strategy based on numerical optimization that minimizes a cost function within a prediction horizon, obtains a control sequence by...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Model Predictive Guidance and Control, MPC Explained | Term Definition
  description: A guidance and control strategy based on numerical optimization that minimizes a cost function within a prediction horizon, obtains a control sequence by...
  image: /logo.png
permalink: /en/glossary/dynamics/MPC/
---

# Model Predictive Guidance and Control, MPC

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A guidance and control strategy based on numerical optimization that minimizes a cost function within a prediction horizon, obtains a control sequence by solving a quadratic programming problem, and executes only the first control before entering the next horizon loop. Its advantage lies in explicitly handling state and control constraints, suitable for nonlinear and time-varying systems.

## Application Value

A real-time guidance and control strategy based on numerical optimization using receding horizon optimization to handle state and control constraints, suitable for nonlinear time-varying systems.

## Related Concepts

- [Prescribed Performance Control, PPC](/en/glossary/dynamics/PPC/)
- [Terminal Sliding Mode Control, TSMC](/en/glossary/dynamics/TSMC/)
- [Adaptive Multi-phase Pseudospectral Convex Optimization](/en/glossary/dynamics/MPPCvx/)
- [Modified Equinoctial Elements, MEEs](/en/glossary/dynamics/MEEs/)

## References

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment.
