---
title: Maneuver Reconstruction
description: The process of further determining the time, location, and velocity change magnitude and direction of a maneuver, building on maneuver detection (determining...
keywords: Maneuver Reconstruction
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Maneuver Reconstruction
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Maneuver Reconstruction Explained | Term Definition
  description: The process of further determining the time, location, and velocity change magnitude and direction of a maneuver, building on maneuver detection (determining...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Maneuver Reconstruction Explained | Term Definition
  description: The process of further determining the time, location, and velocity change magnitude and direction of a maneuver, building on maneuver detection (determining...
  image: /logo.png
permalink: /en/glossary/dynamics/maneuver-reconstruction/
---

# Maneuver Reconstruction

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The process of further determining the time, location, and velocity change magnitude and direction of a maneuver, building on maneuver detection (determining whether a maneuver occurred). Maneuver detection answers 'whether', while maneuver reconstruction answers 'where, when, and how much'. This paper uses forward-backward numerical integration within maneuver windows identified by 2DCNN for reconstruction, achieving high-accuracy maneuver parameter recovery even on noisy data.

## Application Value

This术语在地月空间任务的设计、分析和控制中具有important应用价值，为相关技术领域的研究和工程实践provides理论支撑。

## Related Concepts

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/geocentric-celestial-reference-frame/)
- [内部频率（Inner Frequencies）](/glossary/dynamics/inner-frequencies/)
- [功能连接理论（Theory of Functional Connections）](/glossary/dynamics/theory-of-functional-connections/)
- [双脉冲变轨（Two-impulse Maneuver）](/glossary/dynamics/two-impulse-maneuver/)

## References

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network