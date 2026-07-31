---
title: Visibility Matrix, A
description: A matrix describing the geometric relationship between a user and visible satellites in satellite navigation. Each row consists of the unit direction vector ...
keywords: Visibility Matrix, A, A, navigation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Visibility Matrix, A
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Visibility Matrix, A Explained | Term Definition
  description: A matrix describing the geometric relationship between a user and visible satellites in satellite navigation. Each row consists of the unit direction vector ...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Visibility Matrix, A Explained | Term Definition
  description: A matrix describing the geometric relationship between a user and visible satellites in satellite navigation. Each row consists of the unit direction vector ...
  image: /logo.png
permalink: /en/glossary/navigation/visibility-matrix/
---

# Visibility Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A matrix describing the geometric relationship between a user and visible satellites in satellite navigation. Each row consists of the unit direction vector from the user to a visible satellite and a clock bias term. It is the basis for computing GDOP via GDOP = sqrt(trace((A^T A)^{-1})). A higher condition number implies poorer positioning accuracy.

## Application Value

在航天器导航和定位中，该方法用于从传感器数据中提取有效信息，实现自主定轨和轨道预报. 支持地月空间探测任务的实时导航需求.

## Related Concepts

- [卫星钟差（Satellite Clock Bias）](/glossary/navigation/satellite-clock-bias/)
- [近距离靠拢段（Close-Range Approaching Section）](/glossary/navigation/closerange-approaching-section/)
- [航迹对航迹融合（Track-to-Track Fusion）](/glossary/navigation/tracktotrack-fusion/)
- [星间链路定轨（ISL-based Orbit Determination）](/glossary/navigation/islbased-orbit-determination/)

## References

- Conti and Circi, 2025, Design of halo orbit constellation for lunar global positioning and communication services; Kaplan and Hegarty, 2017, Understanding GPS/GNSS