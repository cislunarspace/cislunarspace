---
title: Recursive Forgetting Factor Estimation
description: An online parameter estimation method that weights historical data with an exponential forgetting factor lambda: recent data receives higher weight while older
keywords: Recursive Forgetting Factor Estimation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Recursive Forgetting Factor Estimation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Recursive Forgetting Factor Estimation Explained | Term Definition
  description: An online parameter estimation method that weights historical data with an exponential forgetting factor lambda: recent data receives higher weight while older
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Recursive Forgetting Factor Estimation Explained | Term Definition
  description: An online parameter estimation method that weights historical data with an exponential forgetting factor lambda: recent data receives higher weight while older
  image: /logo.png
permalink: /en/glossary/dynamics/recursive-forgetting-factor-estimation/
---

# Recursive Forgetting Factor Estimation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An online parameter estimation method that weights historical data with an exponential forgetting factor lambda: recent data receives higher weight while older data decays exponentially. Mathematical form: estimate = (e^{-lambda}/gamma_k) * (gamma_{k-1} * previous_estimate + new_observation). Suitable for scenarios where disturbance statistics change slowly, allowing the estimator to track time-varying parameters.

## Application Value

This concept is applicable in cislunar space mission design, orbit optimization, and trajectory planning for spacecraft transfers and maneuver strategies.

## Related Concepts

- [Flight-Path Angle](/en/glossary/dynamics/flight-path-angle/)
- [Spherical Harmonic Model](/en/glossary/dynamics/spherical-harmonic-model/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [Artificial Libration Point](/en/glossary/dynamics/artificial-libration-point/)

## References

- Sanchez et al. 2020
