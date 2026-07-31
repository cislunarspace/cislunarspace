---
title: Upper Confidence Bounds Applied to Trees, UCT
description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the...
keywords: Upper Confidence Bounds Applied to Trees, UCT, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Upper Confidence Bounds Applied to Trees, UCT
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Upper Confidence Bounds Applied to Trees, UCT Explained | Term Definition"
  description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Upper Confidence Bounds Applied to Trees, UCT Explained | Term Definition"
  description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the...
  image: /logo.png
permalink: /en/glossary/dynamics/UCT/
---

# Upper Confidence Bounds Applied to Trees, UCT

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the action value estimate and N(s), N(s,a) are visit counts. In MO-MCTS, Q(s,a) is replaced by the HVI to handle multi-objective cases.

## Application Value

Applying upper confidence bound concepts to tree search algorithms, widely used in game tree search and path planning.

## Related Concepts

- [Uncertain Multiple-Revolution Lambert Problem](/en/glossary/dynamics/UMRLP/)
- [Maximum Acceleration](/en/glossary/dynamics/umax/)
- [Unscented Kalman Filter](/en/glossary/dynamics/UKF/)

## References

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents.
