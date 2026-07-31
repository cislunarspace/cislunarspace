---
title: Chance-Constrained Model Predictive Control, CC-MPC (CC-MPC)
description: "A robust model predictive control method that relaxes state constraints from deterministic satisfaction to probabilistic: constraints are required to hold with"
keywords: Chance-Constrained Model Predictive Control, CC-MPC, dynamics terminology, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Chance-Constrained Model Predictive Control, CC-MPC
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Chance-Constrained Model Predictive Control, CC-MPC Explained | Term Definition"
  description: "A robust model predictive control method that relaxes state constraints from deterministic satisfaction to probabilistic: constraints are required to hold with"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Chance-Constrained Model Predictive Control, CC-MPC Explained | Term Definition"
  description: "A robust model predictive control method that relaxes state constraints from deterministic satisfaction to probabilistic: constraints are required to hold with"
  image: /logo.png
permalink: /en/glossary/dynamics/chance-constrained-model-predictive-control-cc-mpc/
---

# Chance-Constrained Model Predictive Control, CC-MPC

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A robust model predictive control method that relaxes state constraints from deterministic satisfaction to probabilistic: constraints are required to hold with a prescribed probability p rather than under all disturbances. The chance constraint is converted into a deterministic inequality via the chi-squared distribution and embedded in a quadratic program. Alongside tube-based MPC and worst-case methods, it is one of the three mainstream robust MPC strategies, offering a controllable computational burden while balancing safety and fuel economy.

## References

- Sanchez et al. 2020
