---
title: Economic Model Predictive Control, Economic MPC
description: A model predictive control variant that uses the true economic cost of system operation (e.g., fuel consumption) as its objective function. Unlike conventional MPC with quadratic tracking error, ec...
keywords: Economic Model Predictive Control, Economic MPC
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Economic Model Predictive Control, Economic MPC
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Economic Model Predictive Control, Economic MPC Explained | Term Definition
  description: A model predictive control variant that uses the true economic cost of system operation (e.g., fuel consumption) as its objective function. Unlike conventional MPC with quadratic tracking error, ec...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Economic Model Predictive Control, Economic MPC Explained | Term Definition
  description: A model predictive control variant that uses the true economic cost of system operation (e.g., fuel consumption) as its objective function. Unlike conventional MPC with quadratic tracking error, ec...
  image: /logo.png
permalink: /en/glossary/dynamics/economic-model-predictive-control-economic-mpc/
---
# Economic Model Predictive Control, Economic MPC

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A model predictive control variant that uses the true economic cost of system operation (e.g., fuel consumption) as its objective function. Unlike conventional MPC with quadratic tracking error, economic MPC directly optimizes physical quantities. In station-keeping, the economic MPC cost function corresponds to propellant mass via Tsiolkovsky's equation, directly reflecting fuel expenditure.

## Application Value

This term has significant application value in cislunar space missions。In the orbital design phase, engineers use relevant theories for trajectory optimization；In navigation and orbit determination, it is used to improve measurement accuracy；In attitude control and orbit maintenance tasks, it ensures stable spacecraft operation。In practical applications, parameter optimization and algorithm adaptation can be combined with mission requirements to improve mission success rate and resource utilization efficiency。

## Related Concepts

- [Characteristic Exponents](/en/glossary/dynamics/characteristic-exponents/)
- [Capture Docking Phase](/en/glossary/navigation/capture-docking-phase/)
- [Lunar Flyby Transfer](/en/glossary/orbits/lunar-flyby-transfer/)

## References

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits