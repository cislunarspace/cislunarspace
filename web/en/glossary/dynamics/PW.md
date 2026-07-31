---
title: Progressive Widening, PW
description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C *...
keywords: Progressive Widening, PW, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Progressive Widening, PW
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Progressive Widening, PW Explained | Term Definition"
  description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C *...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Progressive Widening, PW Explained | Term Definition"
  description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C *...
  image: /logo.png
permalink: /en/glossary/dynamics/PW/
---

# Progressive Widening, PW

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C * j^alpha) with visit count j, thereby constraining branching early to reach deeper states and gradually expanding to improve solution diversity.

## Application Value

A strategy in tree search algorithms gradually expanding search scope, suitable for balancing exploration and exploitation to improve global search efficiency.

## Related Concepts

- [Prescribed Performance Control, PPC](/en/glossary/dynamics/PPC/)
- [Prescribed Performance Function, PPF](/en/glossary/dynamics/PPF/)
- [Powered Descent Guidance](/en/glossary/dynamics/PDG/)
- [Planar Bicircular Restricted Four-Body Problem](/en/glossary/dynamics/PBR4BP/)

## References

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents.
