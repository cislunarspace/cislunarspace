---
title: Unscented Kalman Filter
description: A Kalman filter variant that estimates nonlinear system states by approximating probability distributions through statistical sampling (sigma points).
keywords: Unscented Kalman Filter, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Unscented Kalman Filter
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Unscented Kalman Filter Explained | Term Definition
  description: A Kalman filter variant that estimates nonlinear system states by approximating probability distributions through statistical sampling (sigma points).
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Unscented Kalman Filter Explained | Term Definition
  description: A Kalman filter variant that estimates nonlinear system states by approximating probability distributions through statistical sampling (sigma points).
  image: /logo.png
permalink: /en/glossary/dynamics/UKF/
---

# Unscented Kalman Filter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Kalman filter variant that estimates nonlinear system states by approximating probability distributions through statistical sampling (sigma points). Does not require system Jacobian, directly propagating sample points through nonlinear equations.

## Application Value

Using unscented transformations for nonlinear estimation, more accurate than extended Kalman filters, suitable for nonlinear system navigation.

## Related Concepts

- [Uncertain Multiple-Revolution Lambert Problem](/en/glossary/dynamics/UMRLP/)
- [Upper Confidence Bounds Applied to Trees, UCT](/en/glossary/dynamics/UCT/)
- [Maximum Acceleration](/en/glossary/dynamics/umax/)
- [Linear Kalman Filter](/en/glossary/dynamics/KMF/)

## References

- Rendezvous and Proximity Operations in Cislunar Space Using Linearized Dynamics for Estimation.
