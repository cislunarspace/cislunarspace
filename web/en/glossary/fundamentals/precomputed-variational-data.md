---
title: Precomputed Variational Data
description: A strategy of precomputing and storing state transition matrices and tensors by integrating variational equations around a reference trajectory. The time span...
keywords: Precomputed Variational Data
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Precomputed Variational Data
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Precomputed Variational Data Explained | Term Definition"
  description: A strategy of precomputing and storing state transition matrices and tensors by integrating variational equations around a reference trajectory. The time span...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Precomputed Variational Data Explained | Term Definition"
  description: A strategy of precomputing and storing state transition matrices and tensors by integrating variational equations around a reference trajectory. The time span...
  image: /logo.png
permalink: /en/glossary/fundamentals/precomputed-variational-data/
---

# Precomputed Variational Data

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A strategy of precomputing and storing state transition matrices and tensors by integrating variational equations around a reference trajectory. The time span is divided into 2^m equal intervals, on each of which first- and second-order variational equations are integrated and stored. During the online phase, cocycle conditions compose the precomputed data, avoiding numerical integration for each new optimal control problem.

## Application Value

This concept is essential for understanding motion characteristics in spacecraft dynamics analysis and design, and plays a vital role in mission success.

## Related Concepts

- [Suborbital](/en/glossary/fundamentals/suborbital/)
- [Optimal Relative Motion Control](/en/glossary/fundamentals/optimal-relative-motion-control/)
- [Rocket Staging](/en/glossary/fundamentals/rocket-staging/)
- [Cross-Product Matrix / Skew-Symmetric Matrix](/en/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)

## References

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
