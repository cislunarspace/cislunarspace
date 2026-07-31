---
title: 集中式扩展卡尔曼滤波（Centralized Extended Kalman Filter）
description: 一种集中式非线性状态估计方法，将所有卫星的星间链路量测汇集到中心处理器，统一估计各卫星的位置、速度、设备时延等参数。
keywords: 集中式扩展卡尔曼滤波, Centralized Extended Kalman Filter, Centralized EKF, 导航, 定轨, 定位
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 集中式扩展卡尔曼滤波（Centralized Extended Kalman Filter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 集中式扩展卡尔曼滤波详解 | 术语定义
  description: 一种集中式非线性状态估计方法，将所有卫星的星间链路量测汇集到中心处理器，统一估计各卫星的位置、速度、设备时延等参数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 集中式扩展卡尔曼滤波详解 | 术语定义
  description: 一种集中式非线性状态估计方法，将所有卫星的星间链路量测汇集到中心处理器，统一估计各卫星的位置、速度、设备时延等参数。
  image: /logo.png
permalink: /glossary/navigation/CentralizedEKF/
---

# 集中式扩展卡尔曼滤波（Centralized Extended Kalman Filter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种集中式非线性状态估计方法，将所有卫星的星间链路量测汇集到中心处理器，统一估计各卫星的位置、速度、设备时延等参数。

## 应用价值

集中处理所有导航卫星观测量进行状态估计的扩展卡尔曼滤波架构，相比分布式方法精度更高但计算量更大，是卫星导航的经典算法。

## 相关概念

- [扩展卡尔曼滤波（Extended Kalman Filter）](/glossary/navigation/扩展卡尔曼滤波/)
- [实时定轨（Real-Time Orbit Determination）](/glossary/navigation/实时定轨/)
- [自主定轨（Autonomous Orbit Determination）](/glossary/navigation/自主定轨/)

## 参考文献

- Chen 等 - 2026
