---
title: State Transition Tensor
description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect...
keywords: State Transition Tensor, cislunar space, orbital mechanics, navigation, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: State Transition Tensor
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "State Transition Tensor Explained | Term Definition"
  description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "State Transition Tensor Explained | Term Definition"
  description: The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect...
  image: /logo.png
permalink: /en/glossary/dynamics/state-transition-tensor/
---

# State Transition Tensor

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The second-order generalization of the State Transition Matrix (STM), capturing how small variations in initial orbital state nonlinearly propagate to affect terminal state. While the STM is a Jacobian (first-order), the STT includes Hessian (second-order) information, used in HDDP backward sweeps to construct second-order optimal control policies. Including second-order information accelerates convergence, especially in highly nonlinear many-revolution transfer problems.

## Application Value

This concept has practical applications in cislunar space science and engineering. Related research supports the planning, implementation, and operations of cislunar missions, forming an integral part of the knowledge system in this field.

## Related Concepts

- [Multiple Segment Trajectory Design](/en/glossary/dynamics/multiple-segment-trajectory-design/)
- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)
- [Null Vector](/en/glossary/dynamics/null-vector/)
- [Circular Restricted Three-Body Problem](/en/glossary/dynamics/circular-restricted-three-body-problem/)

## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
