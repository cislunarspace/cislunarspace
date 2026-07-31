---
title: State Transition Tensor
description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect te
keywords: State Transition Tensor, STT, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: State Transition Tensor
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "State Transition Tensor Explained | Term Definition"
  description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect te
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "State Transition Tensor Explained | Term Definition"
  description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect te
  image: /logo.png
permalink: /en/glossary/dynamics/stt/
---

# State Transition Tensor

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect terminal state. While the STM is a Jacobian (first-order), the STT includes Hessian (second-order) information, used in HDDP backward sweeps to construct second-order optimal control policies. Including second-order information accelerates convergence, especially in highly nonlinear many-revolution transfer problems.

## Application Value

State transition tensors contain second-order sensitivity information, used in HDDP backward sweeps to construct second-order optimal control laws and accelerate convergence.

## Related Concepts

- [Nonlinear Programming](/en/glossary/dynamics/nlp/)
- [Zero-Velocity Curve](/en/glossary/dynamics/zvc/)
- [Shape-Based Method](/en/glossary/dynamics/shape-based-method/)

## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
