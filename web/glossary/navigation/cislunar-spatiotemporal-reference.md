---
title: 地月空间时空基准 (Cislunar Spatiotemporal Reference)
description: 详细解析地月空间时空基准的定义、构建方法、溯源与传递机制，及其在深空探测和月球开发中的应用价值
keywords: 地月空间时空基准, 时空坐标框架, 星历模型, 引力场模型, 时空传递, 精密定轨
author: 天疆说
date: 2026-04-24
lastUpdated: 2026-04-24
wechatShare:
  title: 地月空间时空基准
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地月空间时空基准详解 | 地月空间核心概念
  description: 详细解析地月空间时空基准的定义、构建方法、溯源与传递机制，及其在深空探测和月球开发中的应用价值
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地月空间时空基准详解 | 地月空间核心概念
  description: 详细解析地月空间时空基准的定义、构建方法、溯源与传递机制，及其在深空探测和月球开发中的应用价值
  image: /logo.png
permalink: /glossary/navigation/cislunar-spatiotemporal-reference/
---

# 地月空间时空基准

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地月空间时空基准（Cislunar Spatiotemporal Reference）是为地月空间航天活动提供统一时空坐标的基础框架，包括地月系统的高精度星历模型（Ephemeris Model）、动力学模型（Dynamical Model）和引力场模型（Gravity Field Model）。它是确保地月空间导航、定位、通信及航天器精密操控的基础性前提。

## 核心组成

### 星历模型

高精度星历模型描述了地球、月球以及其他天体在地月空间中的精确位置和运动规律。与近地空间主要依赖地球引力场不同，地月空间需同时考虑地球、月球以及太阳的多体引力效应。目前，广泛使用的星历模型包括 JPL 的 DE (Development Ephemeris) 系列，其对月球位置的内符合精度约为数米量级。

### 引力场模型

地月空间的引力场模型需要精确表征地球和月球的非球形引力及其在空间中的梯度分布。月球引力场的复杂程度远高于同等尺度下的地球引力场模型近似（由于质瘤（mascon）的显著存在），因此在地月空间任务中，需要高分辨率月球引力场模型加以补偿。

### 时空传递与溯源

时空基准的应用依赖于从地球表面基准站向地月空间的精确传递与溯源。其主要技术手段包括：

- **双向时频传递**（Two-way Time and Frequency Transfer, TWTT）：利用微波或激光链路在地球站台与空间飞行器间交换时频信号，实现时间同步。
- **甚长基线干涉测量**（Very Long Baseline Interferometry, VLBI）：利用地面多台射电望远镜对深空探测器进行差分观测，实现角秒至亚角秒级的角位置精密测定。
- **激光测月**（Lunar Laser Ranging, LLR）：通过测量地月间的激光往返时间，精确标定月球轨道和相对距离。

## 关键挑战

- 地月空间（3.8×10⁵ km 尺度）远大于近地空间，对稳定时间频率基准的保持和传递提出了更高要求。
- 月球的质瘤分布使引力场的不确定性在低月球轨道尤为显著，进而影响精密定轨和预报精度。
- 太阳辐射压、地球大气阻力等非保守力在长时间弧段内累积不可忽略，需建立精细动力学补偿模型。

## 核心要素

### 导航原理

地月空间时空基准通过建立高精度星历模型、引力场模型和时空传递体系，为航天器提供统一的时空坐标参考。核心在于精确描述地球、月球和太阳的多体引力效应，并通过双向时频传递、VLBI 和激光测月等手段实现基准从地球向地月空间的传递与溯源。

### 关键指标

- **时间同步精度**：双向时频传递可达亚纳秒级
- **角位置精度**：VLBI 观测可达亚角秒级
- **地月距离精度**：激光测月可达毫米级
- **星历模型精度**：DE 系列对月球位置精度约数米量级

### 系统组成

- **地面基准站**：VLBI 观测网、激光测月台站、时间频率基准实验室
- **星历与引力场模型**：JPL DE 系列星历、高分辨率月球引力场模型
- **星载终端**：航天器搭载的时频接收机和激光角反射器

## 应用价值

- **登月任务导航**：为载人登月、无人采样返回等任务提供高精度自主导航能力。
- **月球资源开发**：为着陆点精密选址、原位资源利用设施的精准布设提供空间坐标框架。
- **国际月球科研站**：作为多国多任务协同所需的统一时空服务体系，支撑月球科研站的长期运行。
- **深空飞行器操控**：为各类地月空间及深空飞行器的高精度轨道机动和交会对接提供时空参考基准。

## 相关概念

- [星历模型（Ephemeris Model）](/glossary/dynamics/ephemeris-model/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [拟双圆四体问题（QBCP）](/glossary/dynamics/qbcp/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/orbits/nrho/)
- [地月 L1/L2 晕轨道](/glossary/orbits/eml-halo/)

## 参考文献

- 2026年宇航领域科学问题和技术难题发布, 中国航天大会 (CSC2026), 2026.
- Park R S, Folkner W M, Williams J G, et al. The JPL planetary and lunar ephemerides DE440 and DE441[J]. The Astronomical Journal, 2021.
- Mazarico E, Barker M K, Neumann G A, et al. Advanced illumination modeling for data analysis and calibration of the Lunar Reconnaissance Orbiter[J]. 2020.
