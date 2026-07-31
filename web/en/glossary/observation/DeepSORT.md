---
title: Deep Simple Online and Realtime Tracking
description: A multi-object tracking algorithm that extends SORT by incorporating appearance features from person re-identification. It fuses motion cues (Kalman filter pred
keywords: Deep Simple Online and Realtime Tracking, 可见性, 光学观测, 覆盖
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Deep Simple Online and Realtime Tracking
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Deep Simple Online and Realtime Tracking Explained | Term Definition
  description: A multi-object tracking algorithm that extends SORT by incorporating appearance features from person re-identification. It fuses motion cues (Kalman filter pred
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Deep Simple Online and Realtime Tracking Explained | Term Definition
  description: A multi-object tracking algorithm that extends SORT by incorporating appearance features from person re-identification. It fuses motion cues (Kalman filter pred
  image: /logo.png
permalink: /en/glossary/observation/DeepSORT/
---

# Deep Simple Online and Realtime Tracking

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A multi-object tracking algorithm that extends SORT by incorporating appearance features from person re-identification. It fuses motion cues (Kalman filter prediction and Mahalanobis distance) with appearance cues (cosine distance) through a cascade matching mechanism, using the Hungarian algorithm for optimal association to mitigate identity switches after prolonged occlusions.

## Application Value

This technology has broad applications in deep space communication and TT&C, forming an essential part of ground support for cislunar missions.

## Related Concepts

- [Apparent Magnitude](/en/glossary/observation/apparent-magnitude/)

## References

- Wojke et al., 2017.
- Pujara and Bhamare, 2022.
- 王磊等, 2025.
