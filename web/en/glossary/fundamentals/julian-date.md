---
title: Julian Date
description: Definition of the Julian Date system, calculation methods, Modified Julian Date, and its use in astronomical and aerospace timekeeping
keywords: Julian Date, JD, Modified Julian Date, MJD, epoch, astronomical timekeeping, time system
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Julian Date
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Julian Date | Terminology Definition"
  description: Definition of the Julian Date system, calculation methods, and its use in astronomical and aerospace timekeeping
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Julian Date | Terminology Definition"
  description: Definition of the Julian Date system, calculation methods, and its use in astronomical and aerospace timekeeping
  image: /logo.png
permalink: /en/glossary/fundamentals/julian-date/
---

# Julian Date (JD)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Julian Date (JD) is a continuous day-counting method widely used in astronomy and aerospace engineering. It starts from noon Universal Time on January 1, 4713 BC and accumulates day by day without year or month divisions. The Julian Date eliminates the complexities of leap years and varying month lengths in the Gregorian calendar, making it easy to calculate the number of days between two dates.

## Core Elements

### Julian Date Calculation

For a Gregorian calendar date, the Julian Date is calculated by:

$$JD = 367Y - \text{INT}\left(\frac{7\left(Y + \text{INT}\left(\frac{M+9}{12}\right)\right)}{4}\right) + \text{INT}\left(\frac{275M}{9}\right) + D + 1721013.5 + \frac{UT}{24}$$

where $Y$, $M$, and $D$ are the year, month, and day respectively, $UT$ is Universal Time (in hours), and $\text{INT}$ is the integer function.

### Modified Julian Date (MJD)

Because the Julian Date values are large, the Modified Julian Date (MJD) is commonly used in astronomy:

$$MJD = JD - 2400000.5$$

The MJD epoch starts at midnight Universal Time on November 17, 1858, yielding smaller and more convenient values.

### Common Epochs

| Epoch | Julian Date | Description |
| :--- | :--- | :--- |
| J2000.0 | 2451545.0 | January 1, 2000, 12:00 TDB |
| J1950.0 | 2433282.423 | January 0.923, 1950 |
| B1950.0 | 2433282.423 | Besselian epoch |

The J2000.0 epoch is the most commonly used standard epoch in aerospace engineering. The Geocentric Inertial Frame (ECI) is defined with respect to this epoch.

## Application Value

The Julian Date is the fundamental unified timekeeping tool for astronomical observation, satellite orbit prediction, and deep-space exploration. In cislunar missions, ephemerides, orbital elements, and observation data are universally tagged with Julian Dates or Modified Julian Dates. Conversions between different time systems (such as TAI, UTC, and TDB) also use the Julian Date as an intermediary.

## Related Concepts

- [Coordinated Universal Time (UTC)](/en/glossary/fundamentals/utc/)
- [GPS Time](/en/glossary/fundamentals/gps-time/)
- [Geocentric Inertial Frame (ECI)](/en/glossary/fundamentals/geocentric-inertial-frame/)
- [Precession](/en/glossary/fundamentals/precession/)
- [Nutation](/en/glossary/fundamentals/nutation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IAU SOFA. SOFA Time Scale and Calendar Tools[S].
