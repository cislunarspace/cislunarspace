---
title: 协调世界时（Coordinated Universal Time, UTC）
description: 详细解析协调世界时的定义、闰秒机制、与原子时和世界时的关系及在航天工程中的应用
keywords: 协调世界时, UTC, 闰秒, 原子时, 世界时, TAI, UT1, 时间系统
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 协调世界时（UTC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 协调世界时（UTC）详解 | 术语定义
  description: 详细解析协调世界时的定义、闰秒机制及在航天工程中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协调世界时（UTC）详解 | 术语定义
  description: 详细解析协调世界时的定义、闰秒机制及在航天工程中的应用
  image: /logo.png
permalink: /glossary/fundamentals/utc/
---

# 协调世界时（Coordinated Universal Time, UTC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

协调世界时（Coordinated Universal Time, UTC）是当今国际上统一采用的时间标准，以原子时秒长为基础，通过闰秒机制与世界时 UT1 保持近似同步（偏差不超过 0.9 秒）。UTC 兼顾了原子时的高精度和世界时与地球自转的对应关系，是日常生活、通信、导航和航天工程中使用最广泛的时间基准。

## 核心要素

### 原子时与世界时的协调

| 时间系统 | 基准 | 特点 |
| :--- | :--- | :--- |
| 国际原子时 TAI | 铯原子跃迁频率 | 极其均匀，不反映地球自转不均匀性 |
| 世界时 UT1 | 地球自转 | 反映地球实际指向，但不均匀 |
| 协调世界时 UTC | 原子时秒长 + 闰秒 | 兼顾精度与天文对应关系 |

UTC 与 TAI 的关系：

$$\text{TAI} = \text{UTC} + n \text{（秒）}$$

其中 $n$ 为累计闰秒数（截至 2026 年为 37 秒）。

### 闰秒机制

由于地球自转速度存在长期减慢和不规则变化，原子时与世界时之间会逐渐产生偏差。当 UTC 与 UT1 的偏差接近 0.9 秒时，国际地球自转与参考系服务（IERS）会宣布在 6 月 30 日或 12 月 31 日的最后一秒插入（或删除）一个闰秒，使 UTC 与 UT1 的偏差保持在 ±0.9 秒以内。

### UT1 的作用

UT1 是经极移修正后的世界时，一般用于建立天球坐标系与地球坐标系的连接，对地面站的指向至关重要。UTC 通过闰秒机制与 UT1 保持近似同步。

## 应用价值

UTC 是全球通信、导航和航天任务的时间基准。GPS 系统时间、北斗系统时间均以 UTC 为参考。在地月空间任务中，UTC 用于地面测控站的时间同步、任务调度和遥测数据时间戳。飞行器上的星载计算机通常采用 GPS 时间或原子时，与 UTC 之间有已知的固定偏移。

## 相关概念

- [GPS 时（GPS Time）](/glossary/fundamentals/gps-time/)
- [儒略日（Julian Date）](/glossary/fundamentals/julian-date/)
- [恒星时（Sidereal Time）](/glossary/fundamentals/celestial-sphere/)
- [岁差（Precession）](/glossary/fundamentals/precession/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IERS. IERS Conventions [2010](S).
