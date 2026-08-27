---
title: Unscented Transformation, UT
description: The core transformation technique of the Unscented Kalman Filter. A set of deterministic sigma points are drawn from the prior distribution such that their mean
keywords: Unscented Transformation, UT, navigation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Unscented Transformation, UT
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Unscented Transformation, UT Explained | Term Definition"
  description: The core transformation technique of the Unscented Kalman Filter. A set of deterministic sigma points are drawn from the prior distribution such that their mean
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Unscented Transformation, UT Explained | Term Definition"
  description: The core transformation technique of the Unscented Kalman Filter. A set of deterministic sigma points are drawn from the prior distribution such that their mean
  image: /logo.png
permalink: /en/glossary/navigation/ut/
---

# Unscented Transformation, UT

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The core transformation technique of the Unscented Kalman Filter. A set of deterministic sigma points are drawn from the prior distribution such that their mean and covariance match the original; these points are propagated through the nonlinear function, and the propagated set is used to re-estimate mean and covariance. Compared to the first-order linearization of EKF, UT captures second-order moment information without requiring Jacobian computation.

## Application Value

The Unscented Transformation concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- (No related concepts available)

## References

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
