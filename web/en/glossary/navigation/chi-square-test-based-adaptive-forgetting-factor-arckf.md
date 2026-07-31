---
title: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF
description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
keywords: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Chi-Square Test-Based Adaptive Forgetting Factor ARCKF Explained | Term Definition"
  description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Chi-Square Test-Based Adaptive Forgetting Factor ARCKF Explained | Term Definition"
  description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
  image: /logo.png
permalink: /en/glossary/navigation/chi-square-test-based-adaptive-forgetting-factor-arckf/
---

# Chi-Square Test-Based Adaptive Forgetting Factor ARCKF

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal, the forgetting factor is increased to slow Q updating; when normal, it is decreased to accelerate convergence. Convergence speed improves by over 50% compared with standard ARCKF.

## Application Value

在组合导航系统中，该方法能够提高定轨精度和收敛速度，增强导航系统的鲁棒性，适用于地月空间的自主导航任务。

## Related Concepts

- [Range Bias](/en/glossary/navigation/range-bias/)
- [Dual Crosslink Orbit Determination](/en/glossary/navigation/dual-crosslink-orbit-determination/)
- [Spiraling Approach](/en/glossary/navigation/spiraling-approach/)
- [Elevation Angle](/en/glossary/navigation/elevation-angle/)

## References

- Xu et al. 2026
