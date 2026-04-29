---
title: GPS 时（GPS Time）
description: 详细解析GPS时间系统的定义、起点、与协调世界时的关系及在卫星导航中的核心作用
keywords: GPS 时, GPS Time, 原子时, UTC, 闰秒, 卫星导航, 时间系统, GPS周
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: GPS 时（GPS Time）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: GPS 时（GPS Time）详解 | 术语定义
  description: 详细解析GPS时间系统的定义、与UTC的关系及在卫星导航中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: GPS 时（GPS Time）详解 | 术语定义
  description: 详细解析GPS时间系统的定义、与UTC的关系及在卫星导航中的核心作用
  image: /logo.png
permalink: /glossary/fundamentals/gps-time/
---

# GPS 时（GPS Time）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

GPS 时（GPS Time）是全球定位系统（GPS）采用的原子时间系统，以铯原子频率标准为基准，起算点为 1980 年 1 月 6 日 0 时 UTC。GPS 时不引入闰秒，因此与国际原子时 TAI 保持固定的 19 秒偏差，与 UTC 之间的偏差随闰秒的累加而增大。

## 核心要素

### 时间起点与表示

GPS 时的时间起点（零时刻）为 1980 年 1 月 6 日 0 时 UTC（此时 UTC 与 TAI 相差 19 秒）。GPS 时采用"GPS 周 + 周内秒"的表示方式：

- **GPS 周（GPS Week）**：从起算点开始，每 7 天为一周，顺序编号
- **周内秒（Seconds of Week）**：每 GPS 周内从 0 开始计数的秒数（0–604799）

### 与 UTC、TAI 的关系

| 关系 | 公式 |
|:---|:---|
| GPS 时与 TAI | $\text{TAI} = \text{GPS Time} + 19\text{ s}$ |
| GPS 时与 UTC | $\text{GPS Time} = \text{UTC} + n\text{ s}$（$n$ 为累计闰秒数） |

截至 2026 年，GPS 时超前 UTC 18 秒。由于 GPS 时不随闰秒调整，其与 UTC 的偏差会随时间单调递增。

### 时间精度

GPS 卫星上搭载高精度原子钟，GPS 时的稳定度优于 $1 \times 10^{-13}$（日稳）。GPS 地面控制段通过监测和注入修正参数，保证 GPS 时与 UTC（USNO）的偏差保持在 ±20 ns 以内。

## 应用价值

GPS 时是卫星导航定位的时间基准，所有 GPS 卫星信号的时间戳均以 GPS 时标注。用户接收机通过测量信号传播时间计算伪距，需要将 GPS 时转换为 UTC 以满足日常应用。对于地月空间任务，GPS 时可作为星载时钟的参考基准，与惯性导航系统组合提供高精度的时间和频率同步。

## 相关概念

- [协调世界时（UTC）](/glossary/fundamentals/utc/)
- [儒略日（Julian Date）](/glossary/fundamentals/julian-date/)
- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [惯性导航系统（INS）](/glossary/fundamentals/inertial-navigation-system/)
- [地心固联坐标系（ECEF）](/glossary/fundamentals/ecef-frame/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- Kaplan E D, Hegarty C J. Understanding GPS/GNSS: Principles and Applications[M]. 3rd ed. Artech House, 2017.
- IS-GPS-200N. Global Positioning System Standard Positioning Service Performance Standard[S]. 2020.
