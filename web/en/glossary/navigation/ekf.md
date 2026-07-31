---
title: Extended Kalman Filter
description: An estimation algorithm that linearizes the nonlinear state and measurement equations via first-order Taylor expansion around the current estimate, then applies
keywords: Extended Kalman Filter, EKF, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Extended Kalman Filter
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Extended Kalman Filter Explained | Term Definition"
  description: An estimation algorithm that linearizes the nonlinear state and measurement equations via first-order Taylor expansion around the current estimate, then applies
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Extended Kalman Filter Explained | Term Definition"
  description: An estimation algorithm that linearizes the nonlinear state and measurement equations via first-order Taylor expansion around the current estimate, then applies
  image: /logo.png
permalink: /en/glossary/navigation/ekf/
---

# Extended Kalman Filter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An estimation algorithm that linearizes the nonlinear state and measurement equations via first-order Taylor expansion around the current estimate, then applies standard Kalman filter recursive formulas. The paper uses EKF for libration point orbit celestial navigation: the state equation is the three-body problem dynamics, the measurement equation is the nonlinear relation between starlight angle and position, and a first-order linearized state transition matrix suffices for accuracy. Simulation results show EKF in the barycentric rotating frame converges position error to approximately 7.5 km (2 navigation stars, 10 s sampling period).

## Application Value

The extended Kalman filter handles nonlinear problems through linearization, widely used in libration point orbit celestial navigation, converging to high accuracy.

## Related Concepts

- [Geometric Dilution of Precision](/en/glossary/navigation/gdop/)
- [Very Long Baseline Interferometry](/en/glossary/navigation/vlbi/)
- [Deep Space Network](/en/glossary/navigation/dsn/)

## References

- 赵书阁 等 - 2013 - 日地系统L2点Halo轨道自主天文导航及精度分析
- Colagrossi 等 - 2021
- Pesce 等 - 2023 - Modern spacecraft guidance, navigation, and control
