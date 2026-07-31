---
title: Differential Dynamic Programming, DDP
description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nominal trajectory, then iterates between a...
keywords: Differential Dynamic Programming, DDP, DDP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Dynamic Programming, DDP
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Differential Dynamic Programming, DDP Explained | Term Definition"
  description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nominal trajectory, then iterates between a...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Dynamic Programming, DDP Explained | Term Definition"
  description: A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nominal trajectory, then iterates between a...
  image: /logo.png
permalink: /en/glossary/dynamics/differential-dynamic-programming-ddp/
---
# Differential Dynamic Programming, DDP

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A second-order trajectory optimization algorithm introduced by Mayne in 1966. It performs second-order expansions of the dynamics and cost function around a nominal trajectory, then iterates between a forward pass to propagate states and a backward sweep to compute control updates until optimality conditions are satisfied. DDP occupies a middle ground between indirect and direct methods, leveraging gradient and Hessian information while operating on a discrete time mesh. It is well suited to nonlinear optimal control problems, particularly trajectory optimization.


## Application Value

In a linear quadratic optimal control framework, selecting appropriate weight matrices Q and R achieves a balance between tracking accuracy and control energy consumption, making it suitable for real-time control in cislunar orbit keeping.


## References

- Mayne 1966, IJControl; Aziz et al. 2019, JGCD

