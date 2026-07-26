---
title: 儒略日（Julian Date, JD）
description: 详细解析儒略日的定义、计算方法、简化儒略日及在天文和航天工程中的时间计量应用
keywords: 儒略日, Julian Date, JD, 简化儒略日, MJD, 历元, 天文计时, 时间系统
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 儒略日（Julian Date）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 儒略日（Julian Date）详解 | 术语定义
  description: 详细解析儒略日的定义、计算方法及在天文和航天中的时间计量应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 儒略日（Julian Date）详解 | 术语定义
  description: 详细解析儒略日的定义、计算方法及在天文和航天中的时间计量应用
  image: /logo.png
permalink: /glossary/fundamentals/julian-date/
---

# 儒略日（Julian Date, JD）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

儒略日（Julian Date, JD）是天文学和航天工程中广泛使用的一种连续计日方法，以公元前 4713 年 1 月 1 日世界时 12 时为起点，逐日累计计数，不设年月之分。儒略日消除了公历中闰年、月份天数不等的复杂性，便于计算两个日期之间的天数间隔。

## 核心要素

### 儒略日的计算

对于公历日期，儒略日的计算公式为：

$$JD = 367Y - \text{INT}\left(\frac{7\left(Y + \text{INT}\left(\frac{M+9}{12}\right)\right)}{4}\right) + \text{INT}\left(\frac{275M}{9}\right) + D + 1721013.5 + \frac{UT}{24}$$

其中 $Y$、$M$、$D$ 分别为年、月、日，$UT$ 为世界时（小时），$\text{INT}$ 为取整函数。

### 简化儒略日（MJD）

由于儒略日数值较大，天文学中常使用简化儒略日（Modified Julian Date, MJD）：

$$MJD = JD - 2400000.5$$

MJD 的起点为 1858 年 11 月 17 日世界时 0 时，数值更小，使用更方便。

### 常用历元

| 历元 | 儒略日 | 说明 |
| :--- | :--- | :--- |
| J2000.0 | 2451545.0 | 2000 年 1 月 1 日 12 时 TDB |
| J1950.0 | 2433282.423 | 1950 年 1 月 0.923 日 |
| B1950.0 | 2433282.423 | 贝塞尔历元 |

J2000.0 历元是目前航天工程中最常用的标准历元，地心惯性坐标系（ECI）即以此历元定义。

## 应用价值

儒略日是天文观测、卫星轨道预报和深空探测中统一计时的基础工具。在地月空间任务中，星历表、轨道根数和观测数据的时间标注普遍采用儒略日或简化儒略日。不同时间系统（如 TAI、UTC、TDB）之间的转换也以儒略日为中介。

## 相关概念

- [协调世界时（UTC）](/glossary/fundamentals/utc/)
- [GPS 时（GPS Time）](/glossary/fundamentals/gps-time/)
- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [岁差（Precession）](/glossary/fundamentals/precession/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IAU SOFA. SOFA Time Scale and Calendar Tools[S].
