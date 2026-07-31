---
title: Cramér-Rao Lower Bound, CRLB
description: The theoretical lower bound on parameter estimation accuracy, representing the minimum variance achievable by an unbiased estimator under optimal conditions. In autonomous orbit determination, the CRLB validates observability of the measurement system.
keywords: Cramér-Rao Lower Bound, CRLB, parameter estimation, bound, orbit determination, observability, navigation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Cramér-Rao Lower Bound, CRLB
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Cramér-Rao Lower Bound, CRLB Explained | Term Definition
  description: The theoretical lower bound on parameter estimation accuracy, representing the minimum variance achievable by an unbiased estimator under optimal conditions. In autonomous orbit determination, the CRLB validates observability of the measurement system.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cramér-Rao Lower Bound, CRLB Explained | Term Definition
  description: The theoretical lower bound on parameter estimation accuracy, representing the minimum variance achievable by an unbiased estimator under optimal conditions. In autonomous orbit determination, the CRLB validates observability of the measurement system.
  image: /logo.png
permalink: /en/glossary/fundamentals/cramr-rao-lower-bound-crlb/
---

# Cramér-Rao Lower Bound, CRLB

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The theoretical lower bound on parameter estimation accuracy, representing the minimum variance achievable by an unbiased estimator under optimal conditions. In autonomous orbit determination, the CRLB validates observability of the measurement system: if the CRLB indicates that position accuracy can converge to a certain order of magnitude, the actual filter can at least achieve that precision under ideal conditions. The CRLB uses the reference orbit (not the estimated orbit) and excludes process noise.

## Application Value

The Cramér-Rao Lower Bound represents the theoretical lower bound on parameter estimation accuracy, indicating the minimum variance achievable by an unbiased estimator under optimal conditions. In autonomous orbit determination, the CRLB is used to validate the observability of measurement systems and evaluate the positioning accuracy achievable under ideal conditions, making it an important theoretical tool for designing and evaluating navigation system performance.

## Related Concepts

- [Center-of-Mass Rotating Frame](/en/glossary/fundamentals/center-of-mass-rotating-frame/)
- [Mass Parameter](/en/glossary/fundamentals/mass-parameter/)
- [Jacobi Constant, JC](/en/glossary/dynamics/jacobi-constant-jc/)
- [Normalized Units](/en/glossary/fundamentals/normalized-units/)

## References

- Chen et al., 2025, Aerospace 12, 576
