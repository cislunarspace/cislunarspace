---
title: Covariance Analysis
description: A method that evaluates the theoretical accuracy of orbit determination parameters using the inverse of the normal equation matrix. The observation equations ar
keywords: Covariance Analysis
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Covariance Analysis
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Covariance Analysis Explained | Term Definition
  description: A method that evaluates the theoretical accuracy of orbit determination parameters using the inverse of the normal equation matrix. The observation equations ar
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Covariance Analysis Explained | Term Definition
  description: A method that evaluates the theoretical accuracy of orbit determination parameters using the inverse of the normal equation matrix. The observation equations ar
  image: /logo.png
permalink: /en/glossary/fundamentals/covariance-analysis/
---

# Covariance Analysis

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method that evaluates the theoretical accuracy of orbit determination parameters using the inverse of the normal equation matrix. The observation equations are linearized about a reference state via Taylor expansion, and the normal equation is constructed from the observation partial derivative matrix. Its inverse yields the covariance matrix of estimated parameters, reflecting the theoretical uncertainty of orbital position and velocity components under given tracking arc length, measurement precision, and dynamical model conditions. This method enables simulated accuracy assessment without real observation data, complementing actual orbit determination solutions.

## Application Value

This concept plays a key role in trajectory transfer design, helping evaluate transfer costs and flight time to provide quantitative basis for mission trade studies. Combined with global search algorithms, multiple solution families and Pareto frontiers can be identified to guide orbital design decisions.


## Related Concepts

- [Orbital Period](/glossary/fundamentals/orbital-period/)
- [Nondimensionalization](/glossary/fundamentals/nondimensionalization/)
- [Inertial Reference Frame](/glossary/fundamentals/inertial-reference-frame/)
- [Hamiltonian](/glossary/fundamentals/hamiltonian/)


## References

- 曹建峰 等, 2025, 地月空间探测器星间链路定轨能力分析