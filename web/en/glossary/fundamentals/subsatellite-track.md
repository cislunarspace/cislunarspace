---
title: Subsatellite Track
description: Definition of the subsatellite track, calculation methods, and factors influencing its geometry
keywords: subsatellite track, ground track, orbit design, coverage characteristics
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Subsatellite Track
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Subsatellite Track | Terminology Definition
  description: Definition of the subsatellite track and its calculation methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Subsatellite Track | Terminology Definition
  description: Definition of the subsatellite track and its calculation methods
  image: /logo.png
permalink: /en/glossary/fundamentals/subsatellite-track/
---

# Subsatellite Track

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The subsatellite track is the path traced by a satellite's subpoint on the Earth's surface during its orbital motion. There are two definitions of the subpoint: (1) $G'$, the intersection of the line from the spacecraft to the Earth's center with the Earth ellipsoid; and (2) $G$, the vertical projection of the satellite onto the Earth ellipsoid. Connecting the subpoints at successive times produces a continuous curve on the Earth's surface, which is the subsatellite track.

## Core Elements

### Subsatellite Track Without Earth Rotation

When the Earth is stationary with respect to inertial space, the subpoint can be expressed in terms of right ascension $\alpha$ and declination $\delta$:

$$\delta = \arcsin(\sin i \sin u)$$

$$\alpha = \Omega + \alpha'$$

where $i$ is the orbital inclination, $u$ is the argument of latitude, and $\Omega$ is the right ascension of the ascending node.

### Subsatellite Track With Earth Rotation

When Earth rotation is taken into account, the subpoint is described by geocentric longitude and latitude $(\varphi, \lambda)$:

$$\varphi = \arcsin(\sin i \sin u)$$

$$\lambda = \arctan(\cos i \tan u) + \Omega - \overline{S}(t)$$

where $\overline{S}(t)$ is the Greenwich mean sidereal time.

### Influence of Orbital Elements on Track Geometry

| Orbital Element | Effect |
| :--- | :--- |
| Semi-major axis $a$ | Determines orbital period; affects longitude span and track density |
| Eccentricity $e$ | Affects north-south symmetry; higher $e$ produces greater asymmetry |
| Argument of perigee $\omega$ | Affects the smoothness/sharpness of tracks in the northern and southern hemispheres |
| Orbital inclination $i$ | Determines the maximum latitude attainable by the track |
| Right ascension of ascending node $\Omega$ | Only affects the longitudinal shift of the track |
| True anomaly $\nu$ | Only affects the satellite's instantaneous position on the track |

### "Loiter" Points on the Subsatellite Track

When $i \neq 0$ deg, the subsatellite track may form a figure-eight pattern with points where $\dot{\lambda} = 0$, called "loiter" points. At a loiter point the satellite appears to hover over that region.

## Application Value

The subsatellite track is the foundation for spacecraft orbit design and Earth-coverage analysis. By analyzing the geometric distribution of the subsatellite track, one can determine the orbit's coverage capability for ground targets, illumination conditions, and communication visibility, providing the basis for orbit selection in reconnaissance, communication, navigation, and other space missions.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
