---
title: 定位导航授时（PNT）
description: 详细解析PNT（定位、导航、授时）的定义、组成、发展历程及其在现代社会中的重要应用
keywords: 定位导航授时, PNT, Positioning Navigation and Timing, GPS, 北斗, BDS, GNSS, 卫星导航, 导航系统
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 定位导航授时（PNT）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 定位导航授时（PNT）详解 | 术语定义
  description: 详细解析PNT的定义和应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 定位导航授时（PNT）详解 | 术语定义
  description: 详细解析PNT的定义和应用
  image: /logo.png
permalink: /glossary/navigation/pnt/
---

# 定位导航授时（PNT）

>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

PNT是定位（Positioning）、导航（Navigation）和授时（Timing）的统称，是现代社会最重要的基础设施之一。PNT系统为用户提供精确的位置信息、导航引导和时间同步服务，是国家安全、经济运行和日常生活不可或缺的技术基础。

## 组成要素

### 定位（Positioning）

确定用户在空间中的精确位置，通常用三维坐标表示：

- **坐标系统**：WGS-84、CGCS2000等
- **精度指标**：米级、分米级、厘米级等
- **定位模式**：单点定位、差分定位、精密单点定位

### 导航（Navigation）

为用户提供从当前位置到目标位置的路径引导：

- **导航算法**：最短路径、最省燃料等
- **实时更新**：动态路径规划
- **多模导航**：多系统融合

### 授时（Timing）

提供精确的时间同步服务：

- **时间标准**：UTC、GPS时、北斗时等
- **同步精度**：纳秒级、微秒级、毫秒级
- **时间传递**：卫星授时、网络授时、光纤授时

## 全球导航卫星系统

### GPS（美国）

- **运营方**：美国太空军
- **卫星数量**：31颗在轨运行
- **信号频段**：L1、L2、L5
- **精度**：水平2-5米，垂直5-10米

### BDS（中国北斗）

- **运营方**：中国卫星导航系统管理办公室
- **卫星数量**：45颗在轨运行（含GEO、MEO、IGSO）
- **信号频段**：B1、B2、B3
- **精度**：水平2-5米，垂直5-10米
- **特色服务**：短报文通信、星基增强

### Galileo（欧盟）

- **运营方**：欧盟空间计划局（EUSPA）
- **卫星数量**：30颗在轨运行
- **信号频段**：E1、E5、E6
- **精度**：水平2-5米

### GLONASS（俄罗斯）

- **运营方**：俄罗斯联邦航天局
- **卫星数量**：24颗在轨运行
- **信号频段**：L1、L2、L3
- **精度**：水平2-5米

## PNT服务类型

### 开放服务

- 向所有用户免费提供的基本PNT服务
- 精度：米级至十米级
- 应用：车载导航、手机定位、运动追踪

### 授权服务

- 向授权用户提供的增强PNT服务
- 精度：分米级至厘米级
- 应用：测绘、精准农业、航空

### 星基增强（SBAS）

- 通过地球静止轨道卫星播发增强信息
- 提高定位精度和可靠性
- 典型系统：WAAS、EGNOS、SDCM

### 地基增强（GBAS）

- 通过地面基准站网络提供增强服务
- 精度可达厘米级
- 应用：机场精密进近、测绘

## PNT在地月空间的应用

### 地月空间PNT挑战

地月空间的PNT面临独特挑战：

- **GNSS信号覆盖**：传统GNSS信号在Cislunar空间极其微弱
- **多系统融合**：需要多系统联合定位
- **时间同步**：地月空间任务的高精度时间同步需求

### 解决方案

- **增强GNSS**：利用高灵敏度接收机增强微弱信号
- **脉冲星导航**：X射线脉冲星导航作为备份
- **光学导航**：利用自然天体进行导航
- **星座导航**：建立专用地月空间导航星座

### 典型应用

- 月球探测任务的导航
- 地月转移轨道的轨道确定
- 月面活动的定位导航

## 相关概念

- [X射线脉冲星导航](/glossary/navigation/xray-pulsar-navigation/)
- [北斗卫星系统](/glossary/communication/beidou-satellite-system/)
- [Inter-Satellite Link（星间链路）](/glossary/communication/inter-satellite-link/)
- [低轨导航增强](/glossary/navigation/LEO-navigation/)

## 参考文献

- GPS.gov, "GPS Performance Standards", 2024.
- 中国卫星导航系统管理办公室, "北斗卫星导航系统发展报告", 2024.
- ESA, "Galileo Services", 2024.