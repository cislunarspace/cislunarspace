---
title: Differential Dynamic Programming, DDP
description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nom
keywords: Differential Dynamic Programming, DDP, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Dynamic Programming, DDP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Differential Dynamic Programming, DDP Explained | Term Definition
  description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nom
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Differential Dynamic Programming, DDP Explained | Term Definition
  description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nom
  image: /logo.png
permalink: /en/glossary/dynamics/ddp/
---

# Differential Dynamic Programming, DDP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nominal trajectory, then iterates between a forward pass to propagate states and a backward sweep to compute control updates until optimality conditions are satisfied. DDP occupies a middle ground between indirect and direct methods, leveraging gradient and Hessian information while operating on a discrete time mesh. It is well suited to nonlinear optimal control problems, particularly trajectory optimization.

## Application Value

The 差分动态规划 concept provides technical support and analytical methods for cislunar space research and lunar exploration missions.

## Related Concepts

- [Hybrid Differential Dynamic Programming, HDDP](/en/glossary/dynamics/hddp/)
- [Multiple-Shooting Differential Dynamic Programming, MDDP](/en/glossary/dynamics/mddp/)

## References

- Mayne 1966, IJControl; Aziz et al. 2019, JGCD
