---
title: 天球坐标系（Celestial Coordinate System）
description: 详细解析地平坐标系、时角赤道坐标系、赤道坐标系和黄道坐标系的定义、转换关系及在航天中的应用
keywords: 天球坐标系, 赤道坐标系, 地平坐标系, 黄道坐标系, 赤经, 赤纬, 方位角, 高度角, 坐标转换
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 天球坐标系（Celestial Coordinate System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 天球坐标系（Celestial Coordinate System）详解 | 术语定义
  description: 详细解析天球坐标系的定义、类型、转换关系及在航天中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 天球坐标系（Celestial Coordinate System）详解 | 术语定义
  description: 详细解析天球坐标系的定义、类型、转换关系及在航天中的应用
  image: /logo.png
permalink: /glossary/fundamentals/celestial-coordinate-system/
---

# 天球坐标系（Celestial Coordinate System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

天球坐标系是在天球上建立的坐标系，用于描述天体在天球上的视位置。根据基本圈和原点的不同，常用的天球坐标系有四种：地平坐标系、时角赤道坐标系、赤道坐标系和黄道坐标系。

## 核心要素

### 地平坐标系

以真地平圈为基本圈，天顶为极，南点为原点。

| 坐标 | 定义 | 范围 |
| :--- | :--- | :--- |
| 方位角 $A$ | 从南点沿地平圈顺时针量到天体所在垂直圈的角度 | 0°–360° |
| 高度角 $a$（或天顶距 $z$） | 天体沿垂直圈到地平圈的角度 | -90°–+90° |

应用场景：日常天文观测、气象仪器指向、日月食预报。

### 时角赤道坐标系

以天赤道为基本圈，北天极为极，天子午圈与天赤道的交点（上点）为原点。

| 坐标 | 定义 | 范围 |
| :--- | :--- | :--- |
| 时角 $t$ | 从上点沿天赤道向西量到天体所在时圈的角度 | 0h–24h |
| 赤纬 $\delta$ | 天体沿时圈到天赤道的角度 | -90°–+90° |

应用场景：天文观测时间规划、赤道式望远镜驱动、授时与历法制定。时角随地球自转以恒星时速率变化。

### 赤道坐标系（第二赤道坐标系）

以天赤道为基本圈，北天极为极，春分点 $\gamma$ 为原点。

| 坐标 | 定义 | 范围 |
| :--- | :--- | :--- |
| 赤经 $\alpha$ | 从春分点沿天赤道向东量到天体所在时圈的角度 | 0h–24h |
| 赤纬 $\delta$ | 同时角赤道坐标系 | -90°–+90° |

应用场景：星表编制、天体定位、天文数据标准化。赤经赤纬不随地球自转变化，是天文观测最常用的坐标系。

### 黄道坐标系

以黄道为基本圈，北黄极为极，春分点为原点。

| 坐标 | 定义 | 范围 |
| :--- | :--- | :--- |
| 黄经 $\lambda$ | 从春分点沿黄道向东量到天体所在黄经圈的角度 | 0°–360° |
| 黄纬 $\beta$ | 天体沿黄经圈到黄道的角度 | -90°–+90° |

应用场景：太阳系天体观测、天体力学研究、空间探测器轨道设计。

### 坐标系间转换

不同天球坐标系之间可通过球面三角公式相互转换。转换的关键参数包括：

- 地方恒星时 $\theta$：连接时角赤道坐标与赤道坐标
- 黄赤交角 $\varepsilon$：连接赤道坐标与黄道坐标
- 观测者地理纬度 $\varphi$：连接地平坐标与时角赤道坐标

## 应用价值

天球坐标系是航天导航和轨道力学的基础。卫星的轨道根数在赤道坐标系中定义，恒星敏感器在地平或赤道坐标系中工作，深空探测器的天文导航依赖精确的天球坐标转换。地月空间任务中的定轨和姿态确定同样需要多种天球坐标系的配合。

## 相关概念

- [天球（Celestial Sphere）](/glossary/fundamentals/celestial-sphere/)
- [岁差（Precession）](/glossary/fundamentals/precession/)
- [章动（Nutation）](/glossary/fundamentals/nutation/)
- [惯性导航系统（Inertial Navigation System）](/glossary/fundamentals/inertial-navigation-system/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 任萱, 肖峰. 人造地球卫星轨道力学[M]. 国防科技大学出版社.
