---
title: 地球椭球体（Earth Ellipsoid）
description: 详细解析地球椭球体的定义、参考椭球参数、地面点坐标系及在轨道力学和导航中的基础作用
keywords: 地球椭球体, Earth Ellipsoid, 参考椭球, WGS-84, 大地纬度, 地心纬度, 地心距, 地球形状
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 地球椭球体（Earth Ellipsoid）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地球椭球体（Earth Ellipsoid）详解 | 术语定义
  description: 详细解析地球椭球体的定义、参考椭球参数、地面点坐标系及基础作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地球椭球体（Earth Ellipsoid）详解 | 术语定义
  description: 详细解析地球椭球体的定义、参考椭球参数、地面点坐标系及基础作用
  image: /logo.png
permalink: /glossary/fundamentals/earth-ellipsoid/
---

# 地球椭球体（Earth Ellipsoid）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地球椭球体（Earth Ellipsoid）是与地球形状最接近的旋转椭球体，用于近似描述地球的几何形状。地球并非完美球体，而是赤道略鼓、两极略扁的椭球体。参考椭球体是大地测量和轨道力学中描述地球形状的标准数学模型。

## 核心要素

### 参考椭球参数

地球椭球体由两个基本参数确定：

| 参数 | 符号 | WGS-84 值 |
|:---|:---|:---|
| 半长轴（赤道半径） | $a$ | 6,378,137.0 m |
| 扁率 | $f$ | 1/298.257223563 |
| 半短轴（极半径） | $b$ | 6,356,752.314 m |
| 第一偏心率 | $e$ | 0.0818192 |

WGS-84（World Geodetic System 1984）是目前国际上最广泛使用的参考椭球体，GPS 系统即采用此标准。

### 地面点坐标系

地面点的位置可以用两种坐标系描述：

| 坐标系 | 坐标 | 定义 |
|:---|:---|:---|
| 大地坐标系 | 大地纬度 $B$、大地经度 $L$、大地高 $H$ | 纬度为椭球面法线与赤道面的夹角 |
| 地心坐标系 | 地心纬度 $\varphi$、地心经度 $\lambda$、地心距 $r$ | 纬度为地心连线与赤道面的夹角 |

大地纬度与地心纬度的关系：

$$\tan\varphi = (1 - e^2) \tan B$$

两者的差异在赤道处为零，在纬度 45° 时达到最大值约 11.5'。

### 地球形状的高阶描述

实际地球表面（大地水准面）与参考椭球体之间存在差异（大地水准面差距），可以用球谐函数展开描述。地球引力场模型（如 JGM-3、EGM96）通过球谐系数给出了地球形状和引力场的高精度描述。

## 应用价值

地球椭球体是航天器轨道力学和导航的基础模型。发射坐标系的定义依赖于参考椭球体，轨道根数与地面点坐标的转换需要椭球体参数，GPS 定位直接基于 WGS-84 椭球体。地月空间任务中，地球椭球体模型的精度直接影响发射瞄准和轨道确定的精度。

## 相关概念

- [天球（Celestial Sphere）](/glossary/fundamentals/celestial-sphere/)
- [天球坐标系（Celestial Coordinate System）](/glossary/fundamentals/celestial-coordinate-system/)
- [惯性导航系统（Inertial Navigation System）](/glossary/fundamentals/inertial-navigation-system/)
- [标准大气（Standard Atmosphere）](/glossary/fundamentals/standard-atmosphere/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
- NIMA. Department of Defense World Geodetic System 1984[S]. 2000.
