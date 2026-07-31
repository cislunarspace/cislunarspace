---
title: 地平线光学导航（Horizon-Based Optical Navigation）
description: 一种光学导航方法，通过在图像中识别天体地平线并提取地平线矢量，利用 Cholesky 因子分解和最小二乘法求解天体中心方向，进而确定航天器相对于天体的三维位置。Christian-Robinson 算法是该方法的代表性非迭代实现。
keywords: 地平线光学导航, Horizon-Based Optical Navigation, 导航, 定轨, 制导, 滤波器
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 地平线光学导航（Horizon-Based Optical Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 地平线光学导航详解 | 术语定义
  description: 一种光学导航方法，通过在图像中识别天体地平线并提取地平线矢量，利用 Cholesky 因子分解和最小二乘法求解天体中心方向，进而确定航天器相对于天体的三维位置。Christian-Robinson 算法是该方法的代表性非迭代实现。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 地平线光学导航详解 | 术语定义
  description: 一种光学导航方法，通过在图像中识别天体地平线并提取地平线矢量，利用 Cholesky 因子分解和最小二乘法求解天体中心方向，进而确定航天器相对于天体的三维位置。Christian-Robinson 算法是该方法的代表性非迭代实现。
  image: /logo.png
permalink: /glossary/navigation/horizon-based-optical-navigation/
---

# 地平线光学导航（Horizon-Based Optical Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种光学导航方法，通过在图像中识别天体地平线并提取地平线矢量，利用 Cholesky 因子分解和最小二乘法求解天体中心方向，进而确定航天器相对于天体的三维位置。Christian-Robinson 算法是该方法的代表性非迭代实现。

## 应用价值

为航天器提供位置和速度估计能力，是实现地月空间自主导航的核心技术支撑。
该概念在地月空间任务中具有重要的应用价值，值得深入研究。

## 相关概念

- [简化动力学法定轨（Simplified Dynamic Orbit Determination）](/glossary/navigation/simplified-dynamic-orbit-determination/)
- [集中式扩展卡尔曼滤波（Centralized Extended Kalman Filter）](/glossary/navigation/centralized-extended-kalman-filter/)
- [动力显式制导（Powered Explicit Guidance, PEG）](/glossary/navigation/powered-explicit-guidance-peg/)
- [星际卫星轨道自主导航（Linked, Autonomous, Interplanetary Satellite Orbit Navigation, LiAISON）](/glossary/navigation/linked-autonomous-interplanetary-satellite-orbit-navigation-liaison/)

## 参考文献

- Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits (Qi & Oguri, 2023)
