---
title: Celestial Coordinate System
description: Definition of the horizontal, hour-angle equatorial, equatorial, and ecliptic coordinate systems, their transformations, and applications in aerospace
keywords: celestial coordinate system, equatorial coordinate system, horizontal coordinate system, ecliptic coordinate system, right ascension, declination, azimuth, altitude, coordinate transformation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Celestial Coordinate System
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Celestial Coordinate System | Terminology Definition
  description: Definition of celestial coordinate system types, transformations, and applications in aerospace
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Celestial Coordinate System | Terminology Definition
  description: Definition of celestial coordinate system types, transformations, and applications in aerospace
  image: /logo.png
permalink: /en/glossary/fundamentals/celestial-coordinate-system/
---

# Celestial Coordinate System

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A celestial coordinate system is a coordinate framework established on the celestial sphere, used to describe the apparent positions of celestial bodies. Depending on the choice of fundamental circle and origin, four commonly used celestial coordinate systems exist: the horizontal coordinate system, the hour-angle equatorial coordinate system, the equatorial coordinate system, and the ecliptic coordinate system.

## Core Elements

### Horizontal Coordinate System

Uses the true horizon as the fundamental circle, the zenith as the pole, and the south point as the origin.

| Coordinate | Definition | Range |
| :--- | :--- | :--- |
| Azimuth $A$ | Angle from the south point clockwise along the horizon to the vertical circle passing through the object | 0 deg -- 360 deg |
| Altitude $a$ (or zenith distance $z$) | Angle along the vertical circle from the object to the horizon | -90 deg -- +90 deg |

Applications: routine astronomical observation, meteorological instrument pointing, solar and lunar eclipse prediction.

### Hour-Angle Equatorial Coordinate System

Uses the celestial equator as the fundamental circle, the north celestial pole as the pole, and the intersection of the celestial meridian and the celestial equator (the upper culmination point) as the origin.

| Coordinate | Definition | Range |
| :--- | :--- | :--- |
| Hour angle $t$ | Angle from the upper culmination point westward along the celestial equator to the hour circle through the object | 0h -- 24h |
| Declination $\delta$ | Angle along the hour circle from the object to the celestial equator | -90 deg -- +90 deg |

Applications: observation time planning, equatorial telescope drive, timekeeping and calendar systems. The hour angle changes at the sidereal rate due to Earth's rotation.

### Equatorial Coordinate System (Second Equatorial System)

Uses the celestial equator as the fundamental circle, the north celestial pole as the pole, and the vernal equinox $\gamma$ as the origin.

| Coordinate | Definition | Range |
| :--- | :--- | :--- |
| Right ascension $\alpha$ | Angle from the vernal equinox eastward along the celestial equator to the hour circle through the object | 0h -- 24h |
| Declination $\delta$ | Same as in the hour-angle equatorial system | -90 deg -- +90 deg |

Applications: star catalog compilation, celestial body positioning, astronomical data standardization. Right ascension and declination do not change with Earth's rotation, making this the most commonly used coordinate system in astronomical observation.

### Ecliptic Coordinate System

Uses the ecliptic as the fundamental circle, the north ecliptic pole as the pole, and the vernal equinox as the origin.

| Coordinate | Definition | Range |
| :--- | :--- | :--- |
| Ecliptic longitude $\lambda$ | Angle from the vernal equinox eastward along the ecliptic to the ecliptic longitude circle through the object | 0 deg -- 360 deg |
| Ecliptic latitude $\beta$ | Angle along the ecliptic longitude circle from the object to the ecliptic | -90 deg -- +90 deg |

Applications: solar system body observation, celestial mechanics research, space probe trajectory design.

### Inter-System Transformations

Different celestial coordinate systems can be converted to one another using spherical trigonometry formulas. The key transformation parameters include:

- Local sidereal time $\theta$: connects hour-angle equatorial and equatorial coordinates
- Obliquity of the ecliptic $\varepsilon$: connects equatorial and ecliptic coordinates
- Observer's geographic latitude $\varphi$: connects horizontal and hour-angle equatorial coordinates

## Application Value

Celestial coordinate systems are the foundation of spacecraft navigation and orbital mechanics. Satellite orbital elements are defined in the equatorial coordinate system, star trackers operate in the horizontal or equatorial system, and celestial navigation of deep-space probes relies on precise celestial coordinate transformations. Orbit determination and attitude determination for cislunar missions likewise require the coordination of multiple celestial coordinate systems.

## Related Concepts

- [Celestial Sphere](/en/glossary/fundamentals/celestial-sphere/)
- [Precession](/en/glossary/fundamentals/precession/)
- [Nutation](/en/glossary/fundamentals/nutation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
