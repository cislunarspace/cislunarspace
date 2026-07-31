---
title: Nutation
description: Definition of nutation, physical causes, principal periodic components, and its role in high-precision celestial reference frames
keywords: nutation, Earth rotation axis, lunar gravitation, nutation series, celestial reference frame, coordinate transformation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Nutation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Nutation | Terminology Definition"
  description: Definition of nutation, physical causes, principal periodic components, and its role in high-precision reference frames
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Nutation | Terminology Definition"
  description: Definition of nutation, physical causes, principal periodic components, and its role in high-precision reference frames
  image: /logo.png
permalink: /en/glossary/fundamentals/nutation/
---

# Nutation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Nutation is the short-period small oscillation superimposed on the precessional motion of the Earth's rotation axis. Unlike the long-term slow variation of precession, nutation periods range from a few days to 18.6 years, with a maximum amplitude of approximately 9.2 arcseconds (the nutation constant). Nutation results from the gravitational action of the Moon and the Sun on the Earth's equatorial bulge.

## Core Elements

### Physical Cause

Nutation is primarily caused by the motion of the lunar orbital plane (the lunar orbital plane). The line of intersection of the lunar orbital plane and the ecliptic rotates with a period of approximately 18.6 years, causing periodic changes in the gravitational torque exerted by the Moon on the Earth's equatorial bulge. This results in periodic oscillation of the Earth's rotation axis on the precessional cone.

### Principal Components

Nutation can be decomposed into two components:

| Component | Definition | Typical Value |
| :--- | :--- | :--- |
| Obliquity nutation $\Delta\varepsilon$ | Variation in the obliquity of the ecliptic | Maximum approximately +/- 9.2 arcsec |
| Longitude nutation $\Delta\psi$ | Periodic displacement of the vernal equinox along the ecliptic | Maximum approximately +/- 17.2 arcsec |

### Nutation Series

Nutation can be described by a series (nutation series) containing multiple periodic components:

$$\Delta\psi = \sum_{i} (A_i + B_i t) \sin(\text{argument}_i)$$

$$\Delta\varepsilon = \sum_{i} (C_i + D_i t) \cos(\text{argument}_i)$$

where the argument is obtained from a linear combination of fundamental parameters such as the longitude of the lunar ascending node and the mean anomaly of the Sun. The IAU 2000A nutation model contains 678 periodic components.

### Distinction from Precession

| Characteristic | Precession | Nutation |
| :--- | :--- | :--- |
| Period | Approximately 25,800 years | A few days to 18.6 years |
| Amplitude | Approximately 50 arcsec/year | Maximum approximately 9.2 arcsec |
| Trajectory | Smooth cone | Oscillation on the cone surface |
| Cause | Average effect of solar and lunar gravitation | Periodic variations in solar and lunar gravitation |

## Application Value

Nutation is a fundamental correction for establishing high-precision celestial reference frames. For precise orbit determination of cislunar missions and deep-space probe navigation, the accuracy of nutation correction directly affects position and velocity determination. The choice of nutation model (e.g., IAU 1980, IAU 2000A) depends on the precision requirements of the mission.

## Related Concepts

- [Precession](/en/glossary/fundamentals/precession/)
- [Celestial Coordinate System](/en/glossary/fundamentals/celestial-coordinate-system/)
- [Celestial Sphere](/en/glossary/fundamentals/celestial-sphere/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IAU SOFA. IAU 2000A Nutation Model[S].
