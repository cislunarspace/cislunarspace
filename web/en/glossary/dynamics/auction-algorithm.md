---
title: Auction Algorithm
description: A low-computational-cost scheduling method that allocates customer satellites to servicers through a bidding mechanism while accounting for phasing constraints.
keywords: Auction Algorithm, AA, scheduling, spacecraft allocation, phasing constraints
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Auction Algorithm
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Auction Algorithm Explained | Term Definition
  description: A low-computational-cost scheduling method that allocates customer satellites to servicers through a bidding mechanism.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Auction Algorithm Explained | Term Definition
  description: A low-computational-cost scheduling method that allocates customer satellites to servicers through a bidding mechanism.
  image: /logo.png
permalink: /en/glossary/dynamics/auction-algorithm/
---

# Auction Algorithm

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A low-computational-cost scheduling method that allocates customer satellites to servicers through a bidding mechanism while accounting for phasing constraints.

## Application Value

In multi-spacecraft cooperative service scenarios, the auction algorithm achieves near-optimal task allocation with low computational complexity. Service spacecraft bid on each customer satellite task, with the lowest bid (or highest benefit) service task being prioritized. Considering phasing constraints means the algorithm accounts for the orbital phase relationship between target satellites and service spacecraft, ensuring tasks are completed within physically achievable windows. This method is well suited for on-orbit service scheduling in lunar space multi-satellite formation missions, maximizing service returns under propellant-limited conditions.


## Related Concepts

- [Orbital Transfer](/en/glossary/dynamics/orbital-transfer/)
- [Multi-Satellite Formation Flying](/en/glossary/programs/multi-satellite-formation/)
- [Rendezvous](/en/glossary/dynamics/rendezvous/)
- [Scheduling Optimization](/en/glossary/dynamics/scheduling-optimization/)


## References

- Waldecker & Howell 2025
