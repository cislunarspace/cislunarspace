---
title: Local Truncation Error
description: The error introduced in a single step of numerical integration due to approximating the exact integral with a finite-order method. Adaptive step-size integra...
keywords: Local Truncation Error
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Local Truncation Error
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Local Truncation Error Explained | Term Definition"
  description: The error introduced in a single step of numerical integration due to approximating the exact integral with a finite-order method. Adaptive step-size integra...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Local Truncation Error Explained | Term Definition"
  description: The error introduced in a single step of numerical integration due to approximating the exact integral with a finite-order method. Adaptive step-size integra...
  image: /logo.png
permalink: /en/glossary/fundamentals/local-truncation-error/
---

# Local Truncation Error

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The error introduced in a single step of numerical integration due to approximating the exact integral with a finite-order method. Adaptive step-size integrators estimate this error and compare it with a tolerance to automatically adjust step size: reducing it when error is too large, increasing it when error is small. In orbital element integration, rapid changes in elements increase local truncation error, leading to step size reduction and decreased computational efficiency.

## Application Value

Based on its definition, the error introduced in a single step of numerical integration due to approximating the exact integral with a finite-order method. adaptive step-size integrators estimate this error and compare it wit.

## Related Concepts

- [轨道力学（Orbital Mechanics）](/en/glossary/fundamentals/orbital-mechanics/)
- [坐标系（Coordinate Frame）](/en/glossary/fundamentals/coordinate-frame/)
- [积分（Integration）](/en/glossary/fundamentals/integration/)

## References

- 适用于圆锥曲线的统一根数在地月空间目标轨道预报的应用
