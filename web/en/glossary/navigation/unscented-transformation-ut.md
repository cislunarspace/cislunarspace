---
title: Unscented Transformation (UT)
description: The core transformation mechanism of the Unscented Kalman Filter. It selects a set of deterministic sigma points from the prior distribution with matching mean and covariance, propagates them through a nonlinear function, and uses the propagated points to re-estimate mean and covariance. Compared to the first-order linearization of the Extended Kalman Filter, the UT captures second-order moment information without requiring Jacobian computation.
keywords: Unscented Transformation, UT, sigma point, Unscented Kalman Filter, covariance propagation, nonlinear filtering
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Unscented Transformation (UT)
  desc: Cislunar space research frontiers, term definitions, and tool resources.
  image: /logo.png
og:
  title: Unscented Transformation (UT) Explained | Term Definition
  description: The core transformation mechanism of the Unscented Kalman Filter. It selects a set of deterministic sigma points from the prior distribution with matching mean and covariance, propagates them through a nonlinear function, and uses the propagated points to re-estimate mean and covariance.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Unscented Transformation (UT) Explained | Term Definition
  description: The core transformation mechanism of the Unscented Kalman Filter. It selects a set of deterministic sigma points from the prior distribution with matching mean and covariance, propagates them through a nonlinear function, and uses the propagated points to re-estimate mean and covariance.
  image: /logo.png
permalink: /en/glossary/navigation/unscented-transformation-ut/
---

# Unscented Transformation (UT)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The core transformation mechanism of the Unscented Kalman Filter. It selects a set of deterministic sigma points from the prior distribution with matching mean and covariance, propagates them through a nonlinear function, and uses the propagated points to re-estimate mean and covariance. Compared to the first-order linearization of the Extended Kalman Filter, the UT captures second-order moment information without requiring Jacobian computation.

## Application Value

This concept has significant application value in cislunar space orbit design, navigation control, or mission analysis. Understanding its essence helps master the core knowledge in related fields.

## Related Concepts

- [Liaison Navigation](/en/glossary/navigation/liaison-navigation/)
- [Deficient Rank](/en/glossary/navigation/deficient-rank/)
- [Doppler Velocity Measurement](/en/glossary/navigation/doppler-velocity-measurement/)
- [Astrometric Angle Measurement](/en/glossary/navigation/astronometric-angle-measurement/)

## References

- Li et al. - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
