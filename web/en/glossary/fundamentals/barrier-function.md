---
title: Barrier Function
description: A penalty function used in trajectory optimization to approximate hard constraints. As the spacecraft approaches an obstacle (e.g., the lunar surface), the f...
keywords: Barrier Function
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Barrier Function
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Barrier Function Explained | Term Definition
  description: A penalty function used in trajectory optimization to approximate hard constraints. As the spacecraft approaches an obstacle (e.g., the lunar surface), the f...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Barrier Function Explained | Term Definition
  description: A penalty function used in trajectory optimization to approximate hard constraints. As the spacecraft approaches an obstacle (e.g., the lunar surface), the f...
  image: /logo.png
permalink: /en/glossary/fundamentals/barrier-function/
---

# Barrier Function

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A penalty function used in trajectory optimization to approximate hard constraints. As the spacecraft approaches an obstacle (e.g., the lunar surface), the function value increases sharply, driving the optimizer away from hazardous regions. This paper employs an exponential barrier function ε·exp(-(r-R_moon)/ε), whose cost grows exponentially as altitude approaches zero, effectively preventing collision without explicit inequality constraints. Compared to direct minimum-altitude constraints, barrier functions are smoother numerically, aiding gradient-based optimization convergence.

## Application Value

In low-thrust trajectory optimization, minimum-time trajectories serve as a prerequisite, first determining the minimum flight time, then using it as the terminal time constraint for the fuel-optimal problem. This hierarchical optimization strategy significantly reduces the computational complexity of multi-objective trajectory design.

## Related Concepts

- [Scheduled and Pinpoint Landing](/en/glossary/fundamentals/scheduled-and-pinpoint-landing/)
- [Surface of Section, SOS](/en/glossary/fundamentals/surface-of-section-sos/)
- [Truncation Strategy](/en/glossary/fundamentals/truncation-strategy/)

## References

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
