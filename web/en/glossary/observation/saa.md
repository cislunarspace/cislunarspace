---
title: Shift-and-Add, SAA
description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
keywords: Shift-and-Add, SAA, observation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shift-and-Add, SAA
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Shift-and-Add, SAA Explained | Term Definition
  description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shift-and-Add, SAA Explained | Term Definition
  description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
  image: /logo.png
permalink: /en/glossary/observation/saa/
---

# Shift-and-Add, SAA

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecutive frames accordingly, and stacks them to boost the signal-to-noise ratio, enabling detection of objects invisible in individual frames. Originally developed for resolution enhancement, it is now widely used in near-Earth object and cislunar object surveys. The algorithm iterates over candidate displacement pairs (dx, dy), stacks frames for each trial, extracts candidate sources, and filters real targets using motion continuity.

## Application Value

The 移位叠加法 concept is applied in cislunar space research, providing technical support or analytical methods for lunar exploration missions.

## Related Concepts

- (No related concepts available)

## References

- Sun et al. 2026, Optical Survey for Cislunar Moving Objects Using Image Stacking
