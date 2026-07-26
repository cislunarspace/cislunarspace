---
title: 标准大气（Standard Atmosphere）
description: 详细解析标准大气的定义、大气分层结构、温度/气压/密度随高度的分布及在气动力计算中的应用
keywords: 标准大气, Standard Atmosphere, 大气分层, 对流层, 平流层, 气动力, 大气密度, 大气阻力
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 标准大气（Standard Atmosphere）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 标准大气（Standard Atmosphere）详解 | 术语定义
  description: 详细解析标准大气的定义、大气分层结构及在气动力计算中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 标准大气（Standard Atmosphere）详解 | 术语定义
  description: 详细解析标准大气的定义、大气分层结构及在气动力计算中的应用
  image: /logo.png
permalink: /glossary/fundamentals/standard-atmosphere/
---

# 标准大气（Standard Atmosphere）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

标准大气（Standard Atmosphere）是国际上公认的、描述地球大气参数（温度、气压、密度）随海拔高度变化规律的参考模型。标准大气基于理想气体状态方程和实测数据，为飞行器气动力计算、弹道设计和大气阻力估算提供统一的参考基准。

## 核心要素

### 大气分层结构

地球大气按温度变化特征分为五层：

| 层 | 高度范围 | 温度变化 | 特点 |
| :--- | :--- | :--- | :--- |
| 对流层 | 0–11 km | 约 -6.5°C/km | 天气现象主要发生层 |
| 平流层 | 11–50 km | 先不变后升高 | 臭氧层吸收紫外线 |
| 中间层 | 50–85 km | 约 -3°C/km | 大气最冷的区域 |
| 热成层 | 85–500 km | 显著升高 | 太阳紫外辐射加热 |
| 外逸层 | >500 km | 趋于常数 | 大气粒子可逃逸地球 |

### 温度、气压、密度随高度的分布

在对流层和标准大气模型中，各参数随高度的分布规律为：

**温度**（对流层内）：

$$T(h) = T_0 - \beta h$$

其中 $T_0 = 288.15$ K，$\beta = 0.0065$ K/m。

**气压**（基于静力学方程和理想气体状态方程）：

$$p(h) = p_0 \left(1 - \frac{\beta h}{T_0}\right)^{\frac{g_0}{\beta R}}$$

其中 $p_0 = 101325$ Pa，$R = 287.05287$ J/(kg·K)。

**密度**：

$$\rho(h) = \rho_0 \left(1 - \frac{\beta h}{T_0}\right)^{\frac{g_0}{\beta R} - 1}$$

其中 $\rho_0 = 1.225$ kg/m³。

### 理想气体状态方程

标准大气模型基于理想气体状态方程：

$$p = \rho R T$$

该方程将气压、密度和温度三个基本参数联系起来，是大气参数计算的基础。

### 编制标准大气表

标准大气表将温度、气压、密度等参数以表格形式给出，覆盖从地面到约 1000 km 的高度范围。常用的标准大气模型包括：

- **US Standard Atmosphere 1976**：美国标准，国际通用
- **CIRA**：国际参考大气，包含季节和纬度变化
- **Jacchia 系列**：用于高层大气（>200 km）的精密模型

## 应用价值

标准大气是空天飞行器气动力计算和弹道设计的基础输入。在主动段飞行中，大气密度决定了气动阻力的大小；在再入段中，大气参数决定了气动加热和减速特性。对于低轨航天器，高层大气密度是轨道衰减分析的关键参数。

## 相关概念

- [地球椭球体（Earth Ellipsoid）](/glossary/fundamentals/earth-ellipsoid/)
- [空天飞行器（Aerospace Vehicle）](/glossary/fundamentals/aerospace-vehicle/)
- [主动段（Powered Phase）](/glossary/fundamentals/powered-phase/)
- [再入段（Reentry Phase）](/glossary/fundamentals/reentry-phase/)
- [升阻比（Lift-to-Drag Ratio）](/glossary/fundamentals/lift-to-drag-ratio/)

## 参考文献

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- NOAA. U.S. Standard Atmosphere 1976[S]. 1976.
