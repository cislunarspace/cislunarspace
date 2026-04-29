---
title: 纬向风（Zonal Wind）
description: 详细解析纬向风的定义、形成机制、季节变化特征及其对平流层飞艇航迹规划的影响
keywords: 纬向风, Zonal Wind, 经向风, 西风, 东风, 大气环流, 平流层风场, 风场建模
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 纬向风（Zonal Wind）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 纬向风（Zonal Wind）详解 | 术语定义
  description: 详细解析纬向风的定义、形成机制、季节变化特征及其对平流层飞艇航迹规划的影响
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 纬向风（Zonal Wind）详解 | 术语定义
  description: 详细解析纬向风的定义、形成机制、季节变化特征及其对平流层飞艇航迹规划的影响
  image: /logo.png
permalink: /glossary/observation/zonal-wind/
---

# 纬向风（Zonal Wind）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

纬向风是沿纬线方向（东西向）吹拂的大气水平运动，是大气环流的重要组成部分。气象学中规定：吹向东方为西风（正），吹向西方为东风（负）。纬向风是平流层飞艇航迹规划和能源消耗估算的关键输入参数。

## 大气环流框架

### 三圈环流模型

| 环流圈 | 纬度范围 | 纬向风特征 |
|:---|:---|:---|
| 哈德莱环流 | 0-30° | 东北/东南信风（东风） |
| 费雷尔环流 | 30-60° | 温带西风（西风） |
| 极地环流 | 60-90° | 极地东风 |

### 平流层风系

| 高度层 | 风系 |
|:---|:---|
| 平流层底部（~25 km） | 西风（冬季）/ 东风（夏季） |
| 平流层中部（~35 km） | 西风急流 |
| 平流层顶部（~50 km） | 季节性 reversal |

## 形成机制

### 热力学驱动

纬向风的形成主要由以下因素驱动：

| 因素 | 作用机制 |
|:---|:---|
| 太阳辐射差 | 赤道热、极地冷 → 温度梯度 |
| 科氏力 | 北半球偏转右，南半球偏转左 |
| 角动量守恒 | 近地面自西向东输运 |

### 科氏力平衡

地转平衡条件下：

$$fu = -\frac{1}{\rho}\frac{\partial p}{\partial y}$$

其中 $f = 2\Omega\sin\phi$ 为科氏参数。

## 季节变化

### 高空纬向风典型值（@30°N）

| 季节 | 20 km | 25 km | 30 km |
|:---|:---|:---|:---|
| 冬季 | -20 m/s | -40 m/s | -60 m/s |
| 春季 | 0 m/s | -10 m/s | -30 m/s |
| 夏季 | +20 m/s | +30 m/s | +50 m/s |
| 秋季 | 0 m/s | +10 m/s | +20 m/s |

注：负值为西风，正值为东风

## 对平流层飞艇的影响

### 航迹规划

| 影响方面 | 描述 |
|:---|:---|
| 位置漂移 | 风致漂移率 = $v_{wind} \times t$ |
| 推进能耗 | 逆风航行需额外能耗 |
| 驻留半径 | 风速越大，维持半径越大 |

### 能源消耗估算

逆风航行时推进功率：

$$P_{prop} = \frac{1}{2}\rho v_{rel}^3 C_D S$$

其中 $v_{rel}$ 为相对风速。

## 风场建模

### 统计模型

基于历史数据的统计特征模型：

$$\bar{u}(h, \phi, t) = u_0(h) + \sum_{i=1}^{N} A_i(h) \cos(\omega_i t + \phi_i)$$

### 数值天气预报（NWP）

现代风场预报使用：

- WRF（Weather Research and Forecasting）
- ECMWF 全球模式
- GFS 全球预报系统

## 相关概念

- [准零风层（Quasi-zero Wind Layer）](/glossary/observation/quasi-zero-wind-layer/)
- [航迹规划（Trajectory Planning）](/glossary/navigation/trajectory-planning/)
- [区域驻留控制（Regional Station-keeping Control）](/glossary/dynamics/regional-station-keeping/)

## 参考文献

- Wallace J M, Hobbs P V. Atmospheric Science: An Introductory Survey[M]. Academic Press, 2023.
- NOAA. US Standard Atmosphere 1976[M]. US Government Printing Office, 1976.