---
title: Sun-Synchronous Orbit
description: A detailed analysis of sun-synchronous orbit — its definition, design conditions, inclination-altitude relationship, and application in remote sensing
keywords: sun-synchronous orbit, orbital precession, ascending node drift, remote sensing orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Sun-Synchronous Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Sun-Synchronous Orbit | Terminology Definition"
  description: A detailed analysis of sun-synchronous orbit — its design conditions and applications
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Sun-Synchronous Orbit | Terminology Definition"
  description: A detailed analysis of sun-synchronous orbit — its design conditions and applications
  image: /logo.png
permalink: /en/glossary/fundamentals/sun-synchronous-orbit/
---

# Sun-Synchronous Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A sun-synchronous orbit is a special retrograde orbit whose ascending node drifts eastward at the same rate as the apparent motion of the Sun around the Earth ($\dot{\Omega} = 0.9856°$/day). This keeps the relative geometry between the orbit plane and the Sun essentially constant. The orbit achieves this synchronization through the long-term drift of the ascending node caused by Earth's oblateness ($J_2$ term).

## Core Elements

### Design Conditions

For a sun-synchronous orbit, the inclination $i$ and semi-major axis $a$ must satisfy:

$$\cos i = -0.0989\left(\frac{a}{R_E}\right)^{7/2}(1-e^2)^2$$

Since $\cos i < 0$, the inclination of a sun-synchronous orbit is always greater than $90°$, making it a retrograde orbit.

### Inclination-Altitude Relationship

| Orbit Altitude | Inclination |
| :--- | :--- |
| 200 km | ~96° |
| 500 km | ~97.4° |
| 800 km | ~98.8° |
| 1000 km | ~100° |
| 6000 km | ~175° |

Higher inclinations correspond to greater orbit altitudes, but an upper altitude limit exists (approximately 6600 km).

### Orbital Characteristics

| Characteristic | Description |
| :--- | :--- |
| Stable illumination conditions | The angle between the Sun direction vector and the orbit plane varies only slightly |
| Consistent local solar time | When passing over the same ground target in the same direction, the local illumination conditions remain nearly constant |
| No maneuver required | Synchronization with the Sun is achieved through natural perturbation |

### Physical Mechanism

The additional gravitational attraction from the equatorial bulge exerts a torque on the orbit plane, causing angular momentum precession. When the precession rate equals the Earth's orbital angular velocity ($0.9856°$/day), the relative geometry between the orbit plane and the Sun remains unchanged.

## Application Value

Sun-synchronous orbits are widely used in remote sensing, reconnaissance, and meteorological satellite missions. Because illumination conditions are nearly identical on each pass over the same area, they facilitate image comparison, analysis, and change detection. They also benefit satellite thermal control and solar panel power generation. Typical applications include resource satellites, environmental monitoring satellites, and military reconnaissance satellites.

## Related Concepts

- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
