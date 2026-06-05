---
title: Dynamic Target Method
description: Detailed analysis of the dynamic target method for low-energy orbit keeping using differential evolution optimization
keywords: Dynamic Target Method, Orbit Keeping, Differential Evolution, Low-Energy Control, DRO
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Dynamic Target Method
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Dynamic Target Method Details | Improved Low-Energy Orbit Keeping Strategy
  description: Detailed analysis of the dynamic target method for low-energy orbit keeping using differential evolution optimization
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Dynamic Target Method Details | Improved Low-Energy Orbit Keeping Strategy
  description: Detailed analysis of the dynamic target method for low-energy orbit keeping using differential evolution optimization
  image: /logo.png
permalink: /en/glossary/dynamics/dynamic-target-method/
---

# Dynamic Target Method

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The dynamic target method is an improved orbit keeping strategy proposed in Chen Yuju's 2024 dissertation. Unlike the traditional targeting method that uses fixed control parameters, the dynamic target method employs the Differential Evolution (DE) algorithm to dynamically optimize control parameters at each control epoch, achieving lower fuel consumption for DRO orbit keeping.

## Key Innovation

The dynamic target method improves upon the traditional targeting method by:

1. **Dynamic optimization**: Instead of using fixed control parameters, the DE algorithm searches for the optimal parameters at each control epoch
2. **Global search**: DE's population-based search avoids local optima that gradient-based methods may converge to
3. **Adaptive parameters**: Control timing, direction, and magnitude are jointly optimized

## Process

1. **Determine** current orbit state through navigation
2. **Define** the search space for control parameters (timing, direction, magnitude)
3. **Apply** DE algorithm to find the parameter set that minimizes fuel consumption
4. **Execute** the optimal maneuver
5. **Repeat** at the next control cycle

## Comparison with Traditional Targeting Method

| Feature | Traditional Targeting | Dynamic Target |
|:---|:---|:---|
| Parameter selection | Fixed or locally optimized | Globally optimized by DE |
| Search method | Gradient-based | Population-based (DE) |
| Fuel consumption | Moderate | Lower |
| Computational cost | Lower | Higher |
| Convergence | Local optimum possible | Global optimum seeking |

## Related Concepts

- [Targeting Method](/en/glossary/dynamics/targeting-method/)
- [Differential Evolution](/en/glossary/dynamics/differential-evolution/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
