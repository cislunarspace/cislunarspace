---
title: Mass Leak Technique
description: A technique that adds a small constant εT to the thrust magnitude formula T=√(Tx²+Ty²+Tz²+εT) to avoid numerical singularities during coast arcs where thrust is zero. Without this regularization, deri...
keywords: Mass Leak Technique
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Mass Leak Technique
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Mass Leak Technique Explained | Term Definition"
  description: A technique that adds a small constant εT to the thrust magnitude formula T=√(Tx²+Ty²+Tz²+εT) to avoid numerical singularities during coast arcs where thrust is zero. Without this regularization, deri...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Mass Leak Technique Explained | Term Definition"
  description: A technique that adds a small constant εT to the thrust magnitude formula T=√(Tx²+Ty²+Tz²+εT) to avoid numerical singularities during coast arcs where thrust is zero. Without this regularization, deri...
  image: /logo.png
permalink: /en/glossary/dynamics/mass-leak-technique/
---
# Mass Leak Technique

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A technique that adds a small constant εT to the thrust magnitude formula T=√(Tx²+Ty²+Tz²+εT) to avoid numerical singularities during coast arcs where thrust is zero. Without this regularization, derivatives of the mass flow rate with respect to Cartesian control variables become undefined at zero thrust. The technique trades a tiny loss of accuracy (εT typically 10⁻⁸ to 10⁻¹⁶) for numerical stability during coast phases. By progressively reducing εT and seeding from the previous solution, the optimizer converges toward an exact bang-bang control profile.

## Application Value

为航天器的精确控制提供理论依据，确保任务执行的可靠性 结合数值优化算法，可实现高性能的轨迹规划 用于评估导航系统的精度上限，指导滤波器设计。

## References

- McConaghy & Longuski 2004, AIAA 2004-5403; Aziz et al. 2019, JGCD
