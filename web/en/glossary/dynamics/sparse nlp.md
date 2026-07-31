---
title: Sparse Nonlinear Programming
description: A large-scale nonlinear programming solution method that exploits sparse structures in constraint and objective function gradients to improve computational effi
keywords: Sparse Nonlinear Programming, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sparse Nonlinear Programming
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Sparse Nonlinear Programming Explained | Term Definition"
  description: A large-scale nonlinear programming solution method that exploits sparse structures in constraint and objective function gradients to improve computational effi
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Sparse Nonlinear Programming Explained | Term Definition"
  description: A large-scale nonlinear programming solution method that exploits sparse structures in constraint and objective function gradients to improve computational effi
  image: /logo.png
permalink: /en/glossary/dynamics/sparse nlp/
---

# Sparse Nonlinear Programming

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A large-scale nonlinear programming solution method that exploits sparse structures in constraint and objective function gradients to improve computational efficiency. In trajectory optimization, sparsity arises because local variables on each time segment only relate to local constraints, enabling efficient solution of large sparse NLP problems via sparse Sequential Quadratic Programming (SQP). This method was used to solve low-thrust transfer trajectory optimization problems with over 211,000 variables and 146,000 constraints.

## Application Value

The 稀疏非线性规划 concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- (No related concepts available)

## References

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
