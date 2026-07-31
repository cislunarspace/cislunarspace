---
title: Coordinated Universal Time
description: Definition of Coordinated Universal Time (UTC), the leap second mechanism, its relationship with atomic time and Universal Time, and applications in aerospace engineering
keywords: Coordinated Universal Time, UTC, leap second, atomic time, Universal Time, TAI, UT1, time system
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Coordinated Universal Time (UTC)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Coordinated Universal Time (UTC) | Terminology Definition"
  description: Definition of UTC, the leap second mechanism, and applications in aerospace engineering
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Coordinated Universal Time (UTC) | Terminology Definition"
  description: Definition of UTC, the leap second mechanism, and applications in aerospace engineering
  image: /logo.png
permalink: /en/glossary/fundamentals/utc/
---

# Coordinated Universal Time (UTC)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Coordinated Universal Time (UTC) is the internationally adopted time standard. Based on the SI second of atomic time, UTC maintains approximate synchronization with Universal Time UT1 through a leap second mechanism (deviation not exceeding 0.9 seconds). UTC balances the high precision of atomic time with the correspondence between Universal Time and Earth's rotation, and is the most widely used time reference in daily life, communications, navigation, and aerospace engineering.

## Core Elements

### Coordination Between Atomic Time and Universal Time

| Time System | Basis | Characteristics |
| :--- | :--- | :--- |
| International Atomic Time (TAI) | Cesium atomic transition frequency | Extremely uniform; does not reflect irregularities in Earth's rotation |
| Universal Time (UT1) | Earth's rotation | Reflects actual Earth orientation, but non-uniform |
| Coordinated Universal Time (UTC) | Atomic-time second + leap seconds | Balances precision with astronomical correspondence |

The relationship between UTC and TAI:

$$\text{TAI} = \text{UTC} + n \text{ (seconds)}$$

where $n$ is the cumulative number of leap seconds (37 seconds as of 2026).

### Leap Second Mechanism

Because the Earth's rotation rate undergoes long-term slowing and irregular variations, a gradual offset accumulates between atomic time and Universal Time. When the deviation between UTC and UT1 approaches 0.9 seconds, the International Earth Rotation and Reference Systems Service (IERS) announces the insertion (or deletion) of a leap second at the end of June 30 or December 31, keeping the UTC-UT1 deviation within +/- 0.9 seconds.

### Role of UT1

UT1 is Universal Time corrected for polar motion. It is generally used to establish the connection between celestial and terrestrial coordinate systems and is critical for ground station pointing. UTC maintains approximate synchronization with UT1 through the leap second mechanism.

## Application Value

UTC is the time reference for global communications, navigation, and space missions. GPS system time and BeiDou system time both reference UTC. For cislunar missions, UTC is used for time synchronization of ground tracking and control stations, mission scheduling, and telemetry data timestamps. Onboard computers typically use GPS time or atomic time, which have known fixed offsets from UTC.

## Related Concepts

- [GPS Time](/en/glossary/fundamentals/gps-time/)
- [Julian Date](/en/glossary/fundamentals/julian-date/)
- [Precession](/en/glossary/fundamentals/precession/)
- [Nutation](/en/glossary/fundamentals/nutation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IERS. IERS Conventions [2010](S).
