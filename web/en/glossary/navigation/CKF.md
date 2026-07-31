---
title: Cubature Kalman Filter, CKF
description: A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear
keywords: Cubature Kalman Filter, CKF, GNSS, 定位, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Cubature Kalman Filter, CKF
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Cubature Kalman Filter, CKF Explained | Term Definition
  description: A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cubature Kalman Filter, CKF Explained | Term Definition
  description: A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear
  image: /logo.png
permalink: /en/glossary/navigation/CKF/
---

# Cubature Kalman Filter, CKF

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear model, then reconstructs the mean and covariance by weighted summation. Compared with the unscented Kalman filter, CKF avoids negative weights and offers better numerical stability.

## Application Value

This technique is crucial for cislunar navigation and orbit determination, providing high-precision position and velocity information for spacecraft.

## Related Concepts

- [Autonomous Orbit Determination](/en/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/en/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/en/glossary/navigation/inter-satellite-link/)

## References

- Xu et al. 2026.
