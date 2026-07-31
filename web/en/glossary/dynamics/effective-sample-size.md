---
title: Effective Sample Size
description: A metric measuring the degeneracy level of the particle set in particle filtering. Defined as the inverse of the sum of squared normalized particle weights. Whe
keywords: Effective Sample Size
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Effective Sample Size
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Effective Sample Size Explained | Term Definition"
  description: A metric measuring the degeneracy level of the particle set in particle filtering. Defined as the inverse of the sum of squared normalized particle weights. Whe
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Effective Sample Size Explained | Term Definition"
  description: A metric measuring the degeneracy level of the particle set in particle filtering. Defined as the inverse of the sum of squared normalized particle weights. Whe
  image: /logo.png
permalink: /en/glossary/dynamics/effective-sample-size/
---

# Effective Sample Size

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A metric measuring the degeneracy level of the particle set in particle filtering. Defined as the inverse of the sum of squared normalized particle weights. When weights concentrate on a few particles, ESS drops rapidly, meaning most particles contribute negligibly to the estimation. Resampling is triggered when ESS falls below a preset threshold (typically half the total particle count) to restore particle diversity.

## Application Value

在自主导航滤波算法中，该方法通过自适应调整滤波器参数提高收敛速度，适用于地月空间的实时定轨任务。

## Related Concepts

- [Lunar Fly-by Method](/en/glossary/dynamics/lunar-fly-by-method/)
- [Reachability Set](/en/glossary/dynamics/reachability-set/)
- [Maximum-Energy Escape Trajectory](/en/glossary/dynamics/maximum-energy-escape-trajectory/)
- [Laplace Method](/en/glossary/dynamics/laplace-method/)

## References

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
