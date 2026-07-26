---
title: Earth-Centered Earth-Fixed Frame (ECEF)
description: A detailed analysis of the ECEF frame — its definition, conventional terrestrial systems, WGS-84/CGCS2000 datums, and application in navigation and positioning
keywords: ECEF, Earth-Centered Earth-Fixed, conventional terrestrial system, CTS, WGS-84, CGCS2000, Earth-fixed frame, coordinate frame
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Earth-Centered Earth-Fixed Frame (ECEF)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "ECEF Frame | Terminology Definition"
  description: A detailed analysis of the ECEF frame — its definition, WGS-84/CGCS2000 datums, and application in navigation and positioning
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "ECEF Frame | Terminology Definition"
  description: A detailed analysis of the ECEF frame — its definition, WGS-84/CGCS2000 datums, and application in navigation and positioning
  image: /logo.png
permalink: /en/glossary/fundamentals/ecef-frame/
---

# Earth-Centered Earth-Fixed Frame (ECEF)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Earth-Centered Earth-Fixed (ECEF) frame, also known as the Conventional Terrestrial System (CTS), is abbreviated in ballistic contexts as the geocentric frame or Earth-fixed frame. The ECEF frame has its origin at the Earth's center of mass, with axes fixed to and rotating with the Earth, making it a non-inertial frame. The ECEF frame is suitable for describing the position of a vehicle relative to the Earth's surface.

## Core Elements

### Frame Definition

| Element | Definition |
| :--- | :--- |
| Origin | Earth's center of mass |
| $X_E Y_E$ plane | Conventional equatorial plane of the Earth |
| $Z_E$ axis | Points toward the 1984.0 Conventional Terrestrial Pole (CTP) as defined by the BIH |
| $X_E$ axis | Lies in the conventional equatorial plane, pointing from the Earth's center toward the intersection of the conventional Greenwich meridian and the conventional equator |
| $Y_E$ axis | Completes the right-handed Cartesian coordinate system with $X_E$ and $Z_E$ |

### Conventional Terrestrial System Standards

| Standard | Used By | Characteristics |
| :--- | :--- | :--- |
| WGS-84 | GPS navigation system | Internally adopted; high accuracy |
| CGCS2000 | BeiDou navigation system | China's national geodetic datum |
| ITRF | International Terrestrial Reference Frame | Highest accuracy; includes plate motion model |

WGS-84 and CGCS2000 are the most widely used conventional terrestrial systems today, with only minor parametric differences between them.

### Conversion with the Geocentric Inertial Frame

The transformation between ECEF and ECI requires corrections for Earth rotation, precession, nutation, and polar motion:

$$\mathbf{r}_{ECI} = \mathbf{R}_{prec} \cdot \mathbf{R}_{nut} \cdot \mathbf{R}_{rot} \cdot \mathbf{R}_{pm} \cdot \mathbf{r}_{ECEF}$$

where $\mathbf{R}_{prec}$, $\mathbf{R}_{nut}$, $\mathbf{R}_{rot}$, and $\mathbf{R}_{pm}$ are the rotation matrices for precession, nutation, Earth rotation, and polar motion, respectively.

## Application Value

The ECEF frame is the fundamental reference frame for satellite navigation and positioning (GPS, BeiDou). User receiver positioning results are directly expressed in ECEF coordinates or geodetic coordinates (longitude, latitude, altitude). In aerospace engineering, the conversion between the launch frame and ECEF is used for launch alignment and trajectory computation. For cislunar missions, the ECEF frame is the foundation for ground tracking station positioning and Earth gravity field model computations.

## Related Concepts

<!-- EN mirrors for ECI, earth ellipsoid, precession, nutation, and UTC do not exist yet -->

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- NIMA. Department of Defense World Geodetic System 1984[S]. 2000.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
