---
title: Piecewise Linear Interpolation
description: The interpolation strategy used in the polyhedral representation method. Within each rectangular cell of the parameter plane grid, state components are approximated using linear planar functions on fo...
keywords: Piecewise Linear Interpolation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Piecewise Linear Interpolation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Piecewise Linear Interpolation Explained | Term Definition
  description: The interpolation strategy used in the polyhedral representation method. Within each rectangular cell of the parameter plane grid, state components are approximated using linear planar functions on fo...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Piecewise Linear Interpolation Explained | Term Definition
  description: The interpolation strategy used in the polyhedral representation method. Within each rectangular cell of the parameter plane grid, state components are approximated using linear planar functions on fo...
  image: /logo.png
permalink: /en/glossary/dynamics/piecewise-linear-interpolation/
---
# Piecewise Linear Interpolation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The interpolation strategy used in the polyhedral representation method. Within each rectangular cell of the parameter plane grid, state components are approximated using linear planar functions on four triangles. Given any (ΔtP0, ΔtM) point, the method first searches for the containing triangle, then computes the interpolated result using the plane equation. This method offers high computational efficiency and is suitable for real-time mission planning.

## Application Value

描述系统状态随时间的变化规律，是轨道预报的基础 该概念为地月空间任务设计提供了重要的理论基础 在实际工程中可用于轨道设计、任务规划或控制系统分析。

## References

- Pontani和Teofilatto - 2016 - Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–moon system
