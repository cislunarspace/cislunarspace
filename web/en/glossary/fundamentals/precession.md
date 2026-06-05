---
title: Precession
description: Definition of precession, the causes of lunisolar and planetary precession, effects on celestial coordinate systems, and the role in long-term orbit propagation
keywords: precession, lunisolar precession, planetary precession, general precession, vernal equinox, celestial coordinate system, orbit propagation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Precession
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Precession | Terminology Definition
  description: Definition of precession, causes, effects on celestial coordinate systems, and role in long-term orbit propagation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Precession | Terminology Definition
  description: Definition of precession, causes, effects on celestial coordinate systems, and role in long-term orbit propagation
  image: /logo.png
permalink: /en/glossary/fundamentals/precession/
---

# Precession

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Precession is the phenomenon of the Earth's rotation axis slowly precessing in space, causing the vernal equinox to drift westward along the ecliptic. Precession causes the reference directions of celestial coordinate systems (particularly the equatorial coordinate system) to change over time, and is a long-term effect that must be considered when establishing precise celestial reference frames.

## Core Elements

### Lunisolar Precession

The gravitational action of the Sun and Moon on the Earth's equatorial bulge causes the Earth's rotation axis to undergo conical motion around the ecliptic pole, with a period of approximately 25,800 years. Lunisolar precession causes the vernal equinox to drift westward along the ecliptic by approximately 50.3 arcseconds per year.

### Planetary Precession

Gravitational perturbations from other planets in the solar system on the Earth's orbital plane cause the ecliptic plane itself to undergo slow changes. Planetary precession causes the vernal equinox to drift eastward along the equator by approximately 12.5 arcseconds per year.

### General Precession

General precession is the combined effect of lunisolar and planetary precession. General precession causes the vernal equinox to drift westward along the equator by approximately 50.29 arcseconds per year (completing one cycle in approximately 26,000 years). General precession can be described by three components:

- **Precession in longitude $p$**: displacement of the vernal equinox along the ecliptic
- **Obliquity nutation $\Delta\varepsilon$**: change in the obliquity of the ecliptic
- **Precession in right ascension and declination**: changes in the equatorial coordinates of celestial bodies

### Effects on Celestial Coordinate Systems

Precession causes the equatorial coordinate system (right ascension, declination) referenced to the vernal equinox to change over time. Therefore, astronomical star catalogs and orbital elements must specify the corresponding epoch (e.g., J2000.0). Coordinates at different epochs require precession corrections before they can be compared.

The fundamental precession correction formula:

$$
\begin{pmatrix} \cos\delta\cos\alpha' \\ \cos\delta\sin\alpha' \\ \sin\delta' \end{pmatrix} = \mathbf{P}(t, t_0) \begin{pmatrix} \cos\delta\cos\alpha \\ \cos\delta\sin\alpha \\ \sin\delta \end{pmatrix}
$$

where $\mathbf{P}(t, t_0)$ is the precession rotation matrix.

## Application Value

Precession is a fundamental correction for long-term spacecraft orbit propagation and celestial navigation. For cislunar missions, precession correction ensures consistency of observation data taken at different times. High-precision orbit determination and deep-space probe navigation must account for precession effects.

## Related Concepts

- [Celestial Sphere](/en/glossary/fundamentals/celestial-sphere/)
- [Celestial Coordinate System](/en/glossary/fundamentals/celestial-coordinate-system/)
- [Nutation](/en/glossary/fundamentals/nutation/)
- [Earth Ellipsoid](/en/glossary/fundamentals/earth-ellipsoid/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
