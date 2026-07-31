---
title: Target Point Method
description: A station-keeping method that selects target points at future times along the trajectory and determines correction maneuvers by minimizing a weighted sum of control energy and predicted deviations.
keywords: Target Point Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Target Point Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Target Point Method Explained | Term Definition
  description: A station-keeping method that selects target points at future times along the trajectory and determines correction maneuvers by minimizing a weighted sum of control energy and predicted deviations.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Target Point Method Explained | Term Definition
  description: A station-keeping method that selects target points at future times along the trajectory and determines correction maneuvers by minimizing a weighted sum of control energy and predicted deviations.
  image: /logo.png
permalink: /en/glossary/dynamics/target-point-method/
---
# Target Point Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A station-keeping method that selects target points at future times along the trajectory and determines correction maneuvers by minimizing a weighted sum of control energy and predicted deviations.

## Application Value

目标点法适用于平动点轨道的长期轨道保持任务。通过将连续轨道离散化为有限个目标点，可以将无限维的最优控制问题转化为参数优化问题，利用梯度下降或序列二次规划求解。该方法在L1和L2点Halo轨道的维持控制中广泛应用，计算效率高于实时求解庞特里亚金极值原理。目标点法的关键在于目标点数量和分布的选取，数量过少会丢失轨道信息，过多则增加计算负担。

## References

- Perozzi和Ferraz-Mello - 2010 - Space manifold dynamics
