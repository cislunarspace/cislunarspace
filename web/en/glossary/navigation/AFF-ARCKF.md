---
title: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF
description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
keywords: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF, GNSS, 定位, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF Explained | Term Definition"
  description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF Explained | Term Definition"
  description: "An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal"
  image: /logo.png
permalink: /en/glossary/navigation/AFF-ARCKF/
---

# Chi-Square Test-Based Adaptive Forgetting Factor ARCKF, AFF-ARCKF

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An extension of ARCKF that dynamically adjusts the forgetting factor via a chi-square test on the normalized innovation squared: when the innovation is abnormal, the forgetting factor is increased to slow Q updating; when normal, it is decreased to accelerate convergence. Convergence speed improves by over 50% compared with standard ARCKF.

## Application Value

This technique is crucial for cislunar navigation and orbit determination, providing high-precision position and velocity information for spacecraft.

## Related Concepts

- [Autonomous Orbit Determination](/en/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/en/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/en/glossary/navigation/inter-satellite-link/)

## References

- Xu et al. 2026.
