---
title: Elastic Variable
description: Auxiliary slack variables introduced in Sequential Quadratic Programming (SQP) algorithms to handle constraint violations. When constraints are difficult to sat
keywords: Elastic Variable
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Elastic Variable
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Elastic Variable Explained | Term Definition
  description: Auxiliary slack variables introduced in Sequential Quadratic Programming (SQP) algorithms to handle constraint violations. When constraints are difficult to sat
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Elastic Variable Explained | Term Definition
  description: Auxiliary slack variables introduced in Sequential Quadratic Programming (SQP) algorithms to handle constraint violations. When constraints are difficult to sat
  image: /logo.png
permalink: /en/glossary/dynamics/elastic-variable/
---
# Elastic Variable

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Auxiliary slack variables introduced in Sequential Quadratic Programming (SQP) algorithms to handle constraint violations. When constraints are difficult to satisfy strictly, elastic variables allow controlled constraint violation, with the algorithm balancing constraint violation against the original objective via penalty terms in the objective function. The SNOPT algorithm uses elastic variable techniques for large-scale constrained optimization.

## Related Concepts

- [Libration Point / Lagrange Point](/en/glossary/dynamics/libration-point-lagrange-point/)

## References

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon

