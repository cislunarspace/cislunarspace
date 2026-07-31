---
title: Cubature Kalman Filter, CKF
description: A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear
keywords: Cubature Kalman Filter, CKF, CKF
author: Tianjiang Shuo
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
permalink: /en/glossary/navigation/cubature-kalman-filter-ckf/
---

# Cubature Kalman Filter, CKF

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A recursive Bayesian filter for nonlinear systems. It draws equally weighted cubature points from a Gaussian distribution, propagates them through the nonlinear model, then reconstructs the mean and covariance by weighted summation. Compared with the unscented Kalman filter, CKF avoids negative weights and offers better numerical stability.

## Application Value

CKF provides stable nonlinear state estimation using equally weighted cubature points, avoiding negative weights and numerical instability of unscented Kalman filters.

## Related Concepts

- [Angles-Only Navigation](/en/glossary/navigation/angles-only-navigation/)
- [Crosscovariance](/en/glossary/navigation/crosscovariance/)
- [Inter-Satellite Link Ranging](/en/glossary/observation/inter-satellite-link-ranging/)
- [Relative Navigation](/en/glossary/navigation/relative-navigation/)


## References

- Xu et al. 2026
