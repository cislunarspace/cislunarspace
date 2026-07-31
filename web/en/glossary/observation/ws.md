---
title: Window Slicing Method
description: A data preprocessing method that segments a long observation sequence into overlapping or non-overlapping short time windows using a fixed width and step size, 
keywords: Window Slicing Method, WS, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Window Slicing Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Window Slicing Method Explained | Term Definition
  description: A data preprocessing method that segments a long observation sequence into overlapping or non-overlapping short time windows using a fixed width and step size, 
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Window Slicing Method Explained | Term Definition
  description: A data preprocessing method that segments a long observation sequence into overlapping or non-overlapping short time windows using a fixed width and step size, 
  image: /logo.png
permalink: /en/glossary/observation/ws/
---

# Window Slicing Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A data preprocessing method that segments a long observation sequence into overlapping or non-overlapping short time windows using a fixed width and step size, with each window treated as an independent sample fed to a classifier for maneuver detection. This paper uses a slice width of 20 time steps (900 s time resolution) and a slice step of 10 time steps, ensuring at most one maneuver event per window. The window slicing method transforms continuous trajectory maneuver detection into a local window binary classification problem, compatible with models requiring fixed-size inputs like CNN.

## Application Value

This concept has important application value in cislunar space research and mission design, involving orbit design, navigation control, or mission planning.

## Related Concepts

- [Space Surveillance Network](/en/glossary/observation/ssn/)
- [Space-Based Space Surveillance](/en/glossary/observation/sbss/)
- [EU Space Surveillance and Tracking](/en/glossary/observation/eu sst/)

## References

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network
