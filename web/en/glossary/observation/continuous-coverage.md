---
title: Continuous Coverage (CP)
description: Detailed analysis of the continuous coverage metric, its calculation, and application in situational awareness missions
keywords: Continuous Coverage, CP, Observation Performance, Situational Awareness, DRO, Orbital Coverage
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Continuous Coverage (CP)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Continuous Coverage Details | Observation Performance Metric
  description: Detailed analysis of the continuous coverage metric, its calculation, and application in situational awareness missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Continuous Coverage Details | Observation Performance Metric
  description: Detailed analysis of the continuous coverage metric, its calculation, and application in situational awareness missions
  image: /logo.png
permalink: /en/glossary/observation/continuous-coverage/
---

# Continuous Coverage

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Continuous Coverage (CP) is a metric measuring the coverage performance of a single satellite observing a target orbit, defined as the ratio of covered arc length to the total orbit length.

## Calculation

$$CP = 1 - S_{ave}$$

where $S_{ave}$ is the average obscuration ratio caused by the Moon over one orbital period:

$$S_{ave} = \frac{\sum_{i=1,2...} \frac{L_{s,i}}{L}}{n}$$

- $L_{s,i}$: obscured arc length when observing the target orbit from observation point $i$
- $L$: total orbit length of the target orbit over one period
- $n$: total number of discrete observation points

The obscuration angle $\theta$ is calculated as:

$$\theta = 2 \cdot \arcsin\left(\frac{r_{moon}}{l_1}\right)$$

where $l_1$ is the distance from the observation satellite to the Moon's center, and $r_{moon}$ is the Moon's radius.

## Simulation Results

For DRO orbits designed for situational awareness missions:

**Observing DRO-M:**
- CR3BP model: maximum CP = 99.1%, minimum CP = 98.1%
- Ephemeris model: maximum CP = 99.1%, minimum CP = 98.1%

**Observing South/North family NRHO:**
- Maximum CP = 100%, minimum CP = 98.5%

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Cislunar Space Situational Awareness](/en/glossary/doctrine/cislunar-space-situational-awareness/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
