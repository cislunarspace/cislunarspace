---
title: Coverage Angle
description: Definition of satellite Earth-coverage angle, calculation methods, and coverage band width analysis
keywords: Coverage Angle, Coverage Band, Earth Coverage, Minimum Elevation Angle
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Coverage Angle
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Coverage Angle | Terminology Definition
  description: Definition and calculation methods for satellite Earth-coverage angle
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Coverage Angle | Terminology Definition
  description: Definition and calculation methods for satellite Earth-coverage angle
  image: /logo.png
permalink: /en/glossary/fundamentals/coverage-angle/
---

# Coverage Angle

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The coverage angle $d$ is a measure of a satellite's Earth-coverage capability, defined as the geocentric angle subtended by the tangent lines from the satellite to the Earth. The coverage angle determines the ground area observable by the satellite at any given instant. The region within the coverage angle is called the coverage zone, and the region outside it is called the coverage blind zone.

## Core Elements

### Basic Formula

Given the satellite's instantaneous altitude $h$, the coverage angle satisfies:

$$d = \arccos\left(\frac{a_E}{a_E + h}\right)$$

where $a_E$ is the Earth's radius.

### Coverage Band Parameters

| Parameter | Formula | Description |
|:---|:---|:---|
| Half field-of-view angle | $\alpha = 90° - d$ | Angle between the satellite line of sight and the local horizon |
| Coverage band width | $S_w = 2a_E d$ | Ground coverage band width |
| Coverage area | $A = 2\pi a_E^2(1 - \cos d)$ | Spherical cap area |
| Area coverage ratio | $A_r = \sin^2(d/2) \times 100\%$ | Coverage area as a fraction of the global surface |

### Minimum Elevation Angle Constraint

When the minimum elevation angle $\sigma$ is taken into account, the coverage angle reduces to:

$$d_\sigma = \arccos\left(\frac{a_E \cos\sigma}{a_E + h}\right) - \sigma$$

For example, a geostationary orbit satellite ($h=35787$ km): without constraint $d=81.31°$, with $\sigma=5°$ the effective coverage angle is $d_\sigma=76.35°$.

### Minimum Coverage Band Width

The minimum coverage band width for a circular orbit satellite is:

$$\Delta\lambda_d = \arctan\left(\frac{\tan d}{\sin i}\right)$$

When adjacent coverage bands are contiguous at the equator, the satellite achieves equatorial global coverage.

## Application Value

The coverage angle is the core parameter for analyzing satellite Earth-coverage performance. From the coverage angle, one can compute the coverage area, band width, and coverage multiplicity, providing quantitative foundations for constellation design and orbit selection. The fact that three equally spaced geostationary satellites over the equator can achieve global communication coverage (excluding the polar regions) is a direct conclusion derived from coverage angle analysis.

## Related Concepts

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics (远程火箭弹道学)[M]. National University of Defense Technology Press.
