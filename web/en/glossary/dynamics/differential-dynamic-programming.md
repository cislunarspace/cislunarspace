---
title: Differential Dynamic Programming (DDP)
description: "An iterative nonlinear optimal control algorithm based on Bellman's principle of optimality. Instead of directly minimizing the global cost function, it..."
keywords: Differential Dynamic Programming
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Dynamic Programming (DDP)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Differential Dynamic Programming (DDP) Explained | Term Definition"
  description: "An iterative nonlinear optimal control algorithm based on Bellman's principle of optimality. Instead of directly minimizing the global cost function, it..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Dynamic Programming (DDP) Explained | Term Definition"
  description: "An iterative nonlinear optimal control algorithm based on Bellman's principle of optimality. Instead of directly minimizing the global cost function, it..."
  image: /logo.png
permalink: /en/glossary/dynamics/differential-dynamic-programming/
---

# Differential Dynamic Programming

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An iterative nonlinear optimal control algorithm based on Bellman's principle of optimality. Instead of directly minimizing the global cost function, it quadratically approximates the cost-to-go and reformulates the optimal control problem as a recursive sequence of local optimizations. Compared to direct methods (which discretize trajectories as nonlinear programs), DDP is more computationally efficient for long-duration multi-stage problems. The HDDP used in this paper is an enhanced variant of DDP.


## Related Concepts


## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
