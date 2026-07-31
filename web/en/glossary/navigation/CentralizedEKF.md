---
title: Centralized Extended Kalman Filter
description: A centralized nonlinear state estimation method that aggregates all inter-satellite link measurements to a central processor, jointly estimating position, veloc
keywords: Centralized Extended Kalman Filter, navigation, orbit determination, positioning
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Centralized Extended Kalman Filter
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Centralized Extended Kalman Filter Explained | Term Definition"
  description: A centralized nonlinear state estimation method that aggregates all inter-satellite link measurements to a central processor, jointly estimating position, veloc
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Centralized Extended Kalman Filter Explained | Term Definition"
  description: A centralized nonlinear state estimation method that aggregates all inter-satellite link measurements to a central processor, jointly estimating position, veloc
  image: /logo.png
permalink: /en/glossary/navigation/CentralizedEKF/
---

# Centralized Extended Kalman Filter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A centralized nonlinear state estimation method that aggregates all inter-satellite link measurements to a central processor, jointly estimating position, velocity, and equipment delay for each satellite.

## Application Value

An EKF architecture that centrally processes all navigation satellite observations for state estimation, offering higher accuracy than distributed methods at the cost of greater computational load.

## Related Concepts

- [Extended Kalman Filter](/en/glossary/navigation/扩展卡尔曼滤波/)
- [Real-Time Orbit Determination](/en/glossary/navigation/实时定轨/)
- [Autonomous Orbit Determination](/en/glossary/navigation/自主定轨/)

## References

- Chen 等 - 2026
