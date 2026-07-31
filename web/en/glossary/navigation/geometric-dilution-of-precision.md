---
title: Geometric Dilution of Precision
description: A factor measuring the effect of the geometric distribution of navigation satellites on positioning accuracy. Defined as the square root of the trace of (H^T...
keywords: Geometric Dilution of Precision, GDOP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Geometric Dilution of Precision
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Geometric Dilution of Precision Explained | Term Definition"
  description: A factor measuring the effect of the geometric distribution of navigation satellites on positioning accuracy. Defined as the square root of the trace of (H^T...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Geometric Dilution of Precision Explained | Term Definition"
  description: A factor measuring the effect of the geometric distribution of navigation satellites on positioning accuracy. Defined as the square root of the trace of (H^T...
  image: /logo.png
permalink: /en/glossary/navigation/geometric-dilution-of-precision/
---

# Geometric Dilution of Precision

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A factor measuring the effect of the geometric distribution of navigation satellites on positioning accuracy. Defined as the square root of the trace of (H^T H)^{-1}, where H is the coefficient matrix of the positioning solution. Smaller GDOP indicates better satellite geometry and higher positioning accuracy. GDOP < 5 is generally considered to provide high navigation accuracy.

## Application Value

几何精度衰减因子表征观测几何对定位精度的影响，导航系统设计师通过选择最佳观测几何最小化GDOP，提高定位精度。
## Related Concepts

- [Satellite-to-Satellite Tracking, SST](/en/glossary/navigation/satellite-to-satellite-tracking-sst/)
- [Closest Approach Vector, CAV](/en/glossary/navigation/closest-approach-vector-cav/)
- [Space-based Tracking Station](/en/glossary/navigation/space-based-tracking-station/)
- [Semi-Physical Simulation](/en/glossary/navigation/semi-physical-simulation/)
## References

- Zhang 等 - 2025 - Cislunar space constellation design for future lunar resource development and utilization
- Acta Phys. Sin. 63, 248402 (2014)
- Chen 等 - 2026
