---
title: Shift-and-Add, SAA (SAA)
description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
keywords: Shift-and-Add, SAA, SAA
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shift-and-Add, SAA (SAA)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Shift-and-Add, SAA (SAA) Explained | Term Definition"
  description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Shift-and-Add, SAA (SAA) Explained | Term Definition"
  description: An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecuti
  image: /logo.png
permalink: /en/glossary/observation/shift-and-add-saa/
---

# Shift-and-Add, SAA

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An image-processing technique for detecting faint moving celestial objects. It assumes a series of trial displacements for the target, shifts multiple consecutive frames accordingly, and stacks them to boost the signal-to-noise ratio, enabling detection of objects invisible in individual frames. Originally developed for resolution enhancement, it is now widely used in near-Earth object and cislunar object surveys. The algorithm iterates over candidate displacement pairs (dx, dy), stacks frames for each trial, extracts candidate sources, and filters real targets using motion continuity.

## Application Value

This concept is applicable in cislunar space mission design, orbit optimization, and trajectory planning for spacecraft transfers and maneuver strategies.

## Related Concepts

- [Area Staring Mode](/en/glossary/observation/area-staring-mode/)
- [Payload Field of View, PFOV](/en/glossary/observation/payload-field-of-view-pfov/)
- [Landmark Integration](/en/glossary/observation/landmark-integration/)
- [Cooperative Agent, CA](/en/glossary/observation/cooperative-agent-ca/)

## References

- Sun et al. 2026, Optical Survey for Cislunar Moving Objects Using Image Stacking
