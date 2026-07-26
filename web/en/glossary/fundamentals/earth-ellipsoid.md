---
title: Earth Ellipsoid
description: Definition of the Earth ellipsoid, reference ellipsoid parameters, ground-point coordinate systems, and its foundational role in orbital mechanics and navigation
keywords: Earth ellipsoid, reference ellipsoid, WGS-84, geodetic latitude, geocentric latitude, geocentric distance, Earth shape
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Earth Ellipsoid
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Earth Ellipsoid | Terminology Definition
  description: Definition of the Earth ellipsoid, reference ellipsoid parameters, ground-point coordinate systems, and its foundational role
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth Ellipsoid | Terminology Definition
  description: Definition of the Earth ellipsoid, reference ellipsoid parameters, ground-point coordinate systems, and its foundational role
  image: /logo.png
permalink: /en/glossary/fundamentals/earth-ellipsoid/
---

# Earth Ellipsoid

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Earth ellipsoid is the oblate spheroid that most closely approximates the shape of the Earth, used to describe the Earth's geometry. The Earth is not a perfect sphere but an ellipsoid that is slightly bulged at the equator and slightly flattened at the poles. The reference ellipsoid is the standard mathematical model used in geodesy and orbital mechanics to describe the Earth's shape.

## Core Elements

### Reference Ellipsoid Parameters

The Earth ellipsoid is determined by two fundamental parameters:

| Parameter | Symbol | WGS-84 Value |
| :--- | :--- | :--- |
| Semi-major axis (equatorial radius) | $a$ | 6,378,137.0 m |
| Flattening | $f$ | 1/298.257223563 |
| Semi-minor axis (polar radius) | $b$ | 6,356,752.314 m |
| First eccentricity | $e$ | 0.0818192 |

WGS-84 (World Geodetic System 1984) is currently the most widely used reference ellipsoid internationally and is the standard adopted by the GPS system.

### Ground-Point Coordinate Systems

The position of a point on the Earth's surface can be described using two coordinate systems:

| Coordinate System | Coordinates | Definition |
| :--- | :--- | :--- |
| Geodetic system | Geodetic latitude $B$, geodetic longitude $L$, geodetic height $H$ | Latitude is the angle between the ellipsoid normal and the equatorial plane |
| Geocentric system | Geocentric latitude $\varphi$, geocentric longitude $\lambda$, geocentric distance $r$ | Latitude is the angle between the geocentric line and the equatorial plane |

The relationship between geodetic and geocentric latitude:

$$\tan\varphi = (1 - e^2) \tan B$$

The difference between the two is zero at the equator and reaches a maximum of approximately 11.5 arcminutes at latitude 45 deg.

### Higher-Order Description of Earth's Shape

Differences exist between the actual Earth's surface (the geoid) and the reference ellipsoid (geoid undulation), which can be described using spherical harmonic expansions. Earth gravity field models (such as JGM-3 and EGM96) provide high-precision descriptions of the Earth's shape and gravity field through spherical harmonic coefficients.

## Application Value

The Earth ellipsoid is the foundational model for spacecraft orbital mechanics and navigation. The launch coordinate system depends on the reference ellipsoid, conversion between orbital elements and ground-point coordinates requires ellipsoid parameters, and GPS positioning is directly based on the WGS-84 ellipsoid. For cislunar missions, the precision of the Earth ellipsoid model directly affects launch alignment and orbit determination accuracy.

## Related Concepts

- [Celestial Sphere](/en/glossary/fundamentals/celestial-sphere/)
- [Celestial Coordinate System](/en/glossary/fundamentals/celestial-coordinate-system/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- NIMA. Department of Defense World Geodetic System 1984[S]. 2000.
