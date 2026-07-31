---
title: Particle Filter, PF
description: A recursive Bayesian filter based on Sequential Monte Carlo methods that approximates arbitrary probability densities using a set of weighted particles. Each particle represents a possible state sampl
keywords: Particle Filter, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Particle Filter, PF
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Particle Filter, PF Explained | Term Definition"
  description: A recursive Bayesian filter based on Sequential Monte Carlo methods that approximates arbitrary probability densities using a set of weighted particles. Each particle represents a possible state sampl
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Particle Filter, PF Explained | Term Definition"
  description: A recursive Bayesian filter based on Sequential Monte Carlo methods that approximates arbitrary probability densities using a set of weighted particles. Each particle represents a possible state sampl
  image: /logo.png
permalink: /en/glossary/navigation/particle-filter-pf/
---

# Particle Filter, PF

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A recursive Bayesian filter based on Sequential Monte Carlo methods that approximates arbitrary probability densities using a set of weighted particles. Each particle represents a possible state sample; weights are adjusted through system propagation and measurement update, with resampling to prevent particle degeneracy. It handles non-Gaussian and strongly nonlinear problems but suffers from the curse of dimensionality in high-dimensional state spaces.

## Application Value

粒子滤波用带权粒子逼近概率密度, canprocess非high斯强非线性problem, 但high维状态空间中面临维度灾难. In cislunar spacenavigation中need and othermethod结合use.

## Related Concepts

- [Single-Difference Observation](/en/glossary/navigation/singledifference-observation/)
- [Chip Scale Atomic Clock](/en/glossary/navigation/chip-scale-atomic-clock/)
- [Orbit Determination Error](/en/glossary/navigation/orbit-determination-error/)

## References

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature