---
title: 相位锁定环（Phase-Locked Loop）
description: GNSS 接收机中用于跟踪载波相位的反馈环路。通过锁定接收信号的载波相位，提取伪距变化率（多普勒）观测量。其相位噪声方差取决于相干积分时间和环路带宽。
keywords: 相位锁定环, Phase-Locked Loop, PLL
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相位锁定环（Phase-Locked Loop）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相位锁定环详解 | 术语定义
  description: GNSS 接收机中用于跟踪载波相位的反馈环路。通过锁定接收信号的载波相位，提取伪距变化率（多普勒）观测量。其相位噪声方差取决于相干积分时间和环路带宽。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相位锁定环详解 | 术语定义
  description: GNSS 接收机中用于跟踪载波相位的反馈环路。通过锁定接收信号的载波相位，提取伪距变化率（多普勒）观测量。其相位噪声方差取决于相干积分时间和环路带宽。
  image: /logo.png
permalink: /glossary/navigation/phase-locked-loop/
---

# 相位锁定环（Phase-Locked Loop）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

GNSS 接收机中用于跟踪载波相位的反馈环路。通过锁定接收信号的载波相位，提取伪距变化率（多普勒）观测量。其相位噪声方差取决于相干积分时间和环路带宽。

## 应用价值

在导航系统设计与实现中，需要考虑观测几何、误差传播和信号传播延迟等因素。该概念支撑定位精度评估、导航滤波器设计和星座优化。

## 相关概念

- [月面接收机（Lunar Surface Receiver）](/glossary/navigation/lunar-surface-receiver/)
- [几何精度因子（Geometric Dilution of Precision, GDOP）](/glossary/navigation/geometric-dilution-of-precision-gdop/)
- [星间测距（Satellite-to-Satellite Tracking, SST）](/glossary/navigation/satellite-to-satellite-tracking-sst/)

## 参考文献

- Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits (Qi & Oguri, 2023)
