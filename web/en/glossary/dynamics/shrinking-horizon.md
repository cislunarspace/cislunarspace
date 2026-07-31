---
title: Shrinking Horizon
description: A prediction horizon management strategy for MPC that uses a variable-dimension prediction window where the initial time shifts forward while the final time is...
keywords: Shrinking Horizon
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shrinking Horizon
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Shrinking Horizon Explained | Term Definition
  description: A prediction horizon management strategy for MPC that uses a variable-dimension prediction window where the initial time shifts forward while the final time is...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shrinking Horizon Explained | Term Definition
  description: A prediction horizon management strategy for MPC that uses a variable-dimension prediction window where the initial time shifts forward while the final time is...
  image: /logo.png
permalink: /en/glossary/dynamics/shrinking-horizon/
---

# Shrinking Horizon

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A prediction horizon management strategy for MPC that uses a variable-dimension prediction window where the initial time shifts forward while the final time is fixed at the desired transfer completion instant. Its advantage is direct control over time of flight, but long transfers may require many points within the window, and increasing the step size may affect optimization accuracy.

## Application Value

This concept is essential for understanding motion characteristics in orbital design and control, and plays a vital role in mission success.

## Related Concepts

- [Minimum Norm Solution](/en/glossary/dynamics/minimum-norm-solution/)
- [Rigid Body Dynamics](/en/glossary/dynamics/rigid-body-dynamics/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/variable-size-design-space-vsds/)
- [Analytical Gradient](/en/glossary/dynamics/analytical-gradient/)

## References

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment