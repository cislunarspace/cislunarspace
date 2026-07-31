---
title: Detection Likelihood Function
description: A probability function of successfully detecting a target given its state and sensor configuration. It is a piecewise function of sensor field-of-view constr...
keywords: Detection Likelihood Function
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Detection Likelihood Function
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Detection Likelihood Function Explained | Term Definition
  description: A probability function of successfully detecting a target given its state and sensor configuration. It is a piecewise function of sensor field-of-view constr...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Detection Likelihood Function Explained | Term Definition
  description: A probability function of successfully detecting a target given its state and sensor configuration. It is a piecewise function of sensor field-of-view constr...
  image: /logo.png
permalink: /en/glossary/observation/detection-likelihood-function/
---

# Detection Likelihood Function

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A probability function of successfully detecting a target given its state and sensor configuration. It is a piecewise function of sensor field-of-view constraints: within the FOV, the value is a probability determined by distance and angle (between 0 and 1); outside the FOV, it is zero. In the reachable domain search framework, sensor pointing parameters are optimized to maximize the expected detection likelihood, improving target acquisition probability.

## Application Value

This term在cislunar space missions中has important application value. In orbit design, it can be used foroptimizing transfer trajectories, reducing mission fuel consumption. In attitude control and dynamics analysis, it helps understandthe motion characteristics of spacecraft in complex gravitational fields, providing theoretical support for mission planning. In navigation and orbit determination, methods based on this termcan improve orbit prediction accuracy, supporting the development of autonomous navigation algorithms. 


## Related Concepts

- [Angles-only Measurement](/en/glossary/observation/angles-only-measurement/)
- [JPL Ephemeris](/en/glossary/observation/jpl-ephemeris/)
- [Measurement Matrix](/en/glossary/observation/measurement-matrix/)


## References

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature

