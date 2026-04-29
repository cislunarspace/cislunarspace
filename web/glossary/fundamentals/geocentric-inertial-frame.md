---
title: 地心惯性坐标系（Earth-Centered Inertial Frame, ECI）
description: 详细解析地心惯性坐标系的定义、J2000.0协议天球坐标系、与地心固联坐标系的区别及在轨道力学中的应用
keywords: 地心惯性坐标系, ECI, J2000.0, 协议天球坐标系, CIS, 惯性系, 轨道力学, 坐标系
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地心惯性坐标系（ECI）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地心惯性坐标系（ECI）详解 | 术语定义
  description: 详细解析地心惯性坐标系的定义、J2000.0协议天球坐标系及在轨道力学中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地心惯性坐标系（ECI）详解 | 术语定义
  description: 详细解析地心惯性坐标系的定义、J2000.0协议天球坐标系及在轨道力学中的应用
  image: /logo.png
permalink: /glossary/fundamentals/geocentric-inertial-frame/
---

# 地心惯性坐标系（Earth-Centered Inertial Frame, ECI）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地心惯性坐标系（ECI，Earth-Centered Inertial）是以地球质心为原点、坐标轴指向惯性空间固定方向的参考坐标系，也称为协议惯性坐标系（CIS，Conventional Inertial System）或标准历元平天球坐标系。ECI 是描述地球卫星轨道、弹道导弹飞行弹道和航天器运动的标准惯性参考框架。

## 核心要素

### J2000.0 地心惯性坐标系

目前最广泛使用的 ECI 是 J2000.0 地心惯性坐标系，其定义为：

| 要素 | 定义 |
|:---|:---|
| 原点 | 地球质心 |
| $X_I Y_I$ 平面 | J2000.0 天球平赤道面 |
| $X_I$ 轴 | 由地球质心指向 J2000.0 平春分点 |
| $Z_I$ 轴 | 指向 J2000.0 平北天极方向 |
| $Y_I$ 轴 | 与 $X_I$、$Z_I$ 轴成右手系 |
| 标准历元 | 2000 年 1 月 1.5 日 TDB（儒略日 2451545.0） |

### 与地心固联坐标系的区别

| 特征 | 地心惯性坐标系（ECI） | 地心固联坐标系（ECEF） |
|:---|:---|:---|
| 坐标轴 | 指向惯性空间固定方向 | 随地球自转 |
| 是否惯性系 | 是（近似） | 否（非惯性系） |
| 典型应用 | 轨道力学、弹道计算 | 地面定位、地图投影 |
| 需要岁差/章动修正 | 是 | 否 |

### ICRS 的发展趋势

目前天球坐标系逐步从 J2000.0 协议天球坐标系向国际天球参考系（ICRS）转变。ICRS 通过河外射电源定义且不依赖于历元，精度更高，是未来航天工程的首选。但 J2000.0 坐标系更便于理解，在相当长时间内两者会并用。J2000.0 和 ICRS 有几十毫角秒的系统差，可通过转换矩阵进行修正。

## 应用价值

地心惯性坐标系是轨道力学和弹道计算的基本参考框架。在 ECI 中，牛顿运动定律和万有引力定律可以直接应用，无需引入惯性力修正。地球卫星的轨道根数、弹道导弹的飞行弹道、航天器的交会对接均在 ECI 中描述。对于地月空间任务，ECI 是连接地球和月球参考框架的桥梁。

## 相关概念

- [地心固联坐标系（ECEF）](/glossary/fundamentals/ecef-frame/)
- [发射坐标系（Launch Frame）](/glossary/fundamentals/celestial-coordinate-system/)
- [岁差（Precession）](/glossary/fundamentals/precession/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)
- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- IAU SOFA. IERS Conventions (2010)[S].
