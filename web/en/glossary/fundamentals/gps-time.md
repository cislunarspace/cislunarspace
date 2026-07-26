---
title: GPS Time
description: Definition of the GPS time system, its epoch, relationship with Coordinated Universal Time, and its core role in satellite navigation
keywords: GPS Time, GPS time system, atomic time, UTC, leap second, satellite navigation, time system, GPS week
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: GPS Time
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: GPS Time | Terminology Definition
  description: Definition of the GPS time system, its relationship with UTC, and its core role in satellite navigation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: GPS Time | Terminology Definition
  description: Definition of the GPS time system, its relationship with UTC, and its core role in satellite navigation
  image: /logo.png
permalink: /en/glossary/fundamentals/gps-time/
---

# GPS Time

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

GPS Time is the atomic time system adopted by the Global Positioning System (GPS). Based on the cesium frequency standard, its epoch is January 6, 1980, 00:00 UTC. GPS Time does not incorporate leap seconds, and therefore maintains a fixed 19-second offset from International Atomic Time (TAI). Its offset from UTC grows as leap seconds accumulate.

## Core Elements

### Epoch and Representation

The GPS Time epoch (zero point) is January 6, 1980, 00:00 UTC (at which time UTC differed from TAI by 19 seconds). GPS Time uses a "GPS Week + Seconds of Week" representation:

- **GPS Week**: sequential count of 7-day weeks elapsed since the epoch
- **Seconds of Week**: seconds counted from 0 within each GPS week (0--604799)

### Relationship with UTC and TAI

| Relationship | Formula |
| :--- | :--- |
| GPS Time and TAI | $\text{TAI} = \text{GPS Time} + 19\text{ s}$ |
| GPS Time and UTC | $\text{GPS Time} = \text{UTC} + n\text{ s}$ ($n$ is the cumulative number of leap seconds) |

As of 2026, GPS Time is 18 seconds ahead of UTC. Since GPS Time is not adjusted for leap seconds, its offset from UTC increases monotonically over time.

### Time Precision

GPS satellites carry high-precision atomic clocks. The stability of GPS Time is better than $1 \times 10^{-13}$ (daily stability). The GPS ground control segment monitors and uploads correction parameters to keep the GPS Time offset from UTC (USNO) within +/- 20 ns.

## Application Value

GPS Time is the time reference for satellite navigation and positioning. All GPS satellite signal timestamps are referenced to GPS Time. User receivers calculate pseudoranges by measuring signal propagation time and must convert GPS Time to UTC for everyday applications. For cislunar missions, GPS Time can serve as the reference standard for onboard clocks, providing high-precision time and frequency synchronization when combined with inertial navigation systems.

## Related Concepts

- [Coordinated Universal Time (UTC)](/en/glossary/fundamentals/utc/)
- [Julian Date](/en/glossary/fundamentals/julian-date/)
- [Geocentric Inertial Frame (ECI)](/en/glossary/fundamentals/geocentric-inertial-frame/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- Kaplan E D, Hegarty C J. Understanding GPS/GNSS: Principles and Applications[M]. 3rd ed. Artech House, 2017.
- IS-GPS-200N. Global Positioning System Standard Positioning Service Performance Standard[S]. 2020.
