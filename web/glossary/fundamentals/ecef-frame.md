---
title: 地心固联坐标系（Earth-Centered Earth-Fixed Frame, ECEF）
description: 详细解析地心固联坐标系的定义、协议地球坐标系、WGS-84/CGCS2000基准及在导航定位中的应用
keywords: 地心固联坐标系, ECEF, 协议地球坐标系, CTS, WGS-84, CGCS2000, 地固坐标系, 坐标系
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地心固联坐标系（ECEF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地心固联坐标系（ECEF）详解 | 术语定义
  description: 详细解析地心固联坐标系的定义、WGS-84/CGCS2000基准及在导航定位中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地心固联坐标系（ECEF）详解 | 术语定义
  description: 详细解析地心固联坐标系的定义、WGS-84/CGCS2000基准及在导航定位中的应用
  image: /logo.png
permalink: /glossary/fundamentals/ecef-frame/
---

# 地心固联坐标系（Earth-Centered Earth-Fixed Frame, ECEF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地心固联坐标系（ECEF，Earth-Centered Earth-Fixed）又称协议地球坐标系（CTS，Conventional Terrestrial System），在弹道学中还简称为地心坐标系或地固坐标系。ECEF 以地球质心为原点，坐标轴固联在地球上随地球自转，因此是非惯性系。ECEF 适用于描述飞行器相对于地球表面的位置。

## 核心要素

### 坐标系定义

| 要素 | 定义 |
| :--- | :--- |
| 原点 | 地球质心 |
| $X_E Y_E$ 平面 | 地球协议赤道面 |
| $Z_E$ 轴 | 指向 BIH 定义的 1984.0 国际协议地极（CTP） |
| $X_E$ 轴 | 在协议赤道面内，由地心指向协议格林尼治起始子午圈与协议赤道的交点 |
| $Y_E$ 轴 | 与 $X_E$、$Z_E$ 轴成右手直角坐标系 |

### 协议地球坐标系标准

| 标准 | 使用系统 | 特点 |
| :--- | :--- | :--- |
| WGS-84 | GPS 导航系统 | 国际通用，精度高 |
| CGCS2000 | 北斗导航系统 | 中国国家大地坐标系 |
| ITRF | 国际地球参考框架 | 最高精度，含板块运动模型 |

WGS-84 和 CGCS2000 是目前最常使用的协议地球坐标系，两者在参数上仅有微小差异。

### 与地心惯性坐标系的转换

ECEF 与 ECI 之间的转换需要考虑地球自转、岁差、章动和极移等修正：

$$\mathbf{r}_{ECI} = \mathbf{R}_{prec} \cdot \mathbf{R}_{nut} \cdot \mathbf{R}_{rot} \cdot \mathbf{R}_{pm} \cdot \mathbf{r}_{ECEF}$$

其中 $\mathbf{R}_{prec}$、$\mathbf{R}_{nut}$、$\mathbf{R}_{rot}$、$\mathbf{R}_{pm}$ 分别为岁差、章动、地球自转和极移的旋转矩阵。

## 应用价值

ECEF 是卫星导航定位（GPS、北斗）的基本参考坐标系，用户接收机的定位结果直接以 ECEF 坐标或大地坐标（经度、纬度、高程）表示。在航天工程中，发射坐标系与 ECEF 之间的转换用于发射瞄准和弹道计算。对于地月空间任务，ECEF 是地面测控站定位和地球引力场模型计算的基础。

## 相关概念

- [地心惯性坐标系（ECI）](/glossary/fundamentals/geocentric-inertial-frame/)
- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)
- [岁差（Precession）](/glossary/fundamentals/precession/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)
- [协调世界时（UTC）](/glossary/fundamentals/utc/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- NIMA. Department of Defense World Geodetic System 1984[S]. 2000.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
