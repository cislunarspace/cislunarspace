---
title: Progressive Widening, PW
description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C * j^...
keywords: Progressive Widening, PW, cislunar space, PW
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Progressive Widening, PW
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Progressive Widening, PW Explained | Term Definition
  description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C * j^...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Progressive Widening, PW Explained | Term Definition
  description: A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C * j^...
  image: /logo.png
permalink: /en/glossary/dynamics/pw/
---

# Progressive Widening, PW

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A heuristic method for controlling the branching factor in Monte Carlo tree search. It increases the number of allowable actions at each node as k = ceil(C * j^alpha) with visit count j, thereby constraining branching early to reach deeper states and gradually expanding to improve solution diversity.

## Application Value

Progressive Widening, PW plays an important role in orbital mechanics and mission planning, applicable for analyzing spacecraft motion characteristics and optimizing transfer trajectories.

## Related Concepts

- [Libration Point Orbit](/en/glossary/orbits/lpo/)
- [State Transition Matrix](/en/glossary/dynamics/stm/)
- [Six-Degree-of-Freedom](/en/glossary/fundamentals/6-dof/)
- [Gauss Pseudospectral Method](/en/glossary/dynamics/gpm/)

## References

Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
