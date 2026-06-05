---
title: Walker Constellation
description: Detailed analysis of Walker Constellation configuration classification, parameter descriptions, and design methods
keywords: Walker Constellation, delta constellation, sigma constellation, rosette constellation, satellite constellation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Walker Constellation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Walker Constellation | Terminology Definition
  description: Detailed analysis of Walker Constellation configuration classification and parameter descriptions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Walker Constellation | Terminology Definition
  description: Detailed analysis of Walker Constellation configuration classification and parameter descriptions
  image: /logo.png
permalink: /en/glossary/fundamentals/walker-constellation/
---

# Walker Constellation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Walker Constellation is a class of uniformly symmetric satellite constellation configurations proposed by British scholar J. G. Walker. Its defining characteristics are: all satellites orbit at the same altitude and inclination on circular orbits; orbital planes are uniformly distributed along the equator; satellites are evenly distributed within each orbital plane; and the phasing between satellites in different orbital planes maintains a fixed relationship. Walker Constellations include $\delta$ constellations, $\sigma$ constellations, and rosette constellations.

## Core Elements

### $\delta$ Constellation

The $\delta$ constellation is the most widely used Walker Constellation, described by the notation $i:T/P/F$, where:

| Parameter | Meaning |
|:---|:---|
| $i$ | Orbital inclination |
| $T$ | Total number of satellites |
| $P$ | Number of orbital planes |
| $F$ | Phasing parameter ($0 \leq F \leq P-1$) |

The number of satellites per orbital plane is $S = T/P$, and the pattern unit is $PU = 2\pi/T$.

### $\sigma$ Constellation

The $\sigma$ constellation is a special subset of the $\delta$ constellation in which the ground tracks of all satellites coincide without self-intersection, forming a closed quasi-sinusoidal curve. It must satisfy $N - D = 1$, where $N$ is the number of revolutions and $D$ is the number of days.

### Rosette Constellation

A rosette constellation is a special case of the $\delta$ constellation where $P = T$, meaning each orbital plane contains exactly one satellite. The position of the $j$-th satellite is:

$$\Omega_j = j \cdot 2\pi/T, \quad u_j = m\Omega_j + nt$$

where different integer values of $m$ produce different rosette constellations.

### Constellation Earth Coverage

The coverage band width of a satellite ring is determined by the coverage angle $d$ and the number of satellites $k$:

$$\cos d_r = \frac{\cos d}{\cos(180°/k)}$$

Multiple satellite rings forming a constellation can eliminate blind spots and achieve global coverage.

## Application Value

Walker Constellations are the most efficient constellation configurations for global and latitude-band coverage, and most operational constellations adopt this configuration. Navigation constellations such as GPS, Galileo, and BeiDou, as well as communication constellations like Iridium and Globalstar, all employ Walker Constellations or variants thereof. By appropriately selecting the $T$, $P$, and $F$ parameters, an optimal balance between satellite count and coverage performance can be achieved.

## Related Concepts

- [Satellite Ring](/en/glossary/fundamentals/satellite-ring/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
