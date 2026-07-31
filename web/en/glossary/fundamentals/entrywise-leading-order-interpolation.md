---
title: Entrywise Leading Order Interpolation
description: A short-time interpolation scheme for state transition tensors that assigns different powers of the interpolation parameter alpha to each entry of the STM an...
keywords: Entrywise Leading Order Interpolation, cislunar space, orbital mechanics, navigation, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Entrywise Leading Order Interpolation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Entrywise Leading Order Interpolation Explained | Term Definition
  description: A short-time interpolation scheme for state transition tensors that assigns different powers of the interpolation parameter alpha to each entry of the STM an...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Entrywise Leading Order Interpolation Explained | Term Definition
  description: A short-time interpolation scheme for state transition tensors that assigns different powers of the interpolation parameter alpha to each entry of the STM an...
  image: /logo.png
permalink: /en/glossary/fundamentals/entrywise-leading-order-interpolation/
---

# Entrywise Leading Order Interpolation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A short-time interpolation scheme for state transition tensors that assigns different powers of the interpolation parameter alpha to each entry of the STM and STT, rather than uniform linear interpolation. The power for each entry is determined by the first nonzero power of the Jacobian matrix for that element. It achieves the same operation count as entrywise linear interpolation but with higher-order accuracy for most entries.

## Application Value

This concept has practical applications in cislunar space science and engineering. Related research supports the planning, implementation, and operations of cislunar missions, forming an integral part of the knowledge system in this field.

## Related Concepts

- [Stretching Direction of Error Hyper-Ellipsoid](/en/glossary/fundamentals/stretching-direction-of-error-hyper-ellipsoid/)
- [Bayesian Update](/en/glossary/fundamentals/bayesian-update/)
- [Real-Valued Stability Index](/en/glossary/fundamentals/real-valued-stability-index/)
- [Flight-Path Angle](/en/glossary/fundamentals/flight-path-angle/)

## References

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
