---
title: 最优滑模控制（Optimal Sliding Mode Control, OSMC）
description: 将最优控制与滑模控制相结合的复合控制方法。在滑模面设计中嵌入线性二次型最优控制的反馈增益，使系统在滑模面上的运动对预定义的二次型性能指标最优；同时通过不连续切换项补偿不确定性和外部扰动。相比纯最优控制，鲁棒性更强；相比纯滑模控制，燃料消耗更低。该方法在地月空间轨道保持中表现出优势：弱扰动下与线性二次型调节器性能相...
keywords: 最优滑模控制, Optimal Sliding Mode Control, OSMC, OSMC, 轨道力学, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 最优滑模控制（Optimal Sliding Mode Control, OSMC）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 最优滑模控制详解 | 术语定义
  description: 将最优控制与滑模控制相结合的复合控制方法。在滑模面设计中嵌入线性二次型最优控制的反馈增益，使系统在滑模面上的运动对预定义的二次型性能指标最优；同时通过不连续切换项补偿不确定性和外部扰动。相比纯最优控制，鲁棒性更强；相比纯滑模控制，燃料消耗更低。该方法在地月空间轨道保持中表现出优势：弱扰动下与线性二次型调节器性能相...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 最优滑模控制详解 | 术语定义
  description: 将最优控制与滑模控制相结合的复合控制方法。在滑模面设计中嵌入线性二次型最优控制的反馈增益，使系统在滑模面上的运动对预定义的二次型性能指标最优；同时通过不连续切换项补偿不确定性和外部扰动。相比纯最优控制，鲁棒性更强；相比纯滑模控制，燃料消耗更低。该方法在地月空间轨道保持中表现出优势：弱扰动下与线性二次型调节器性能相...
  image: /logo.png
permalink: /glossary/dynamics/optimal-sliding-mode-control-osmc/
---

# 最优滑模控制（Optimal Sliding Mode Control, OSMC）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将最优控制与滑模控制相结合的复合控制方法。在滑模面设计中嵌入线性二次型最优控制的反馈增益，使系统在滑模面上的运动对预定义的二次型性能指标最优；同时通过不连续切换项补偿不确定性和外部扰动。相比纯最优控制，鲁棒性更强；相比纯滑模控制，燃料消耗更低。该方法在地月空间轨道保持中表现出优势：弱扰动下与线性二次型调节器性能相当，强扰动（如太阳辐射压量级）下位置偏差更小。

## 应用价值

该方法在地月空间轨道保持与姿态控制中具有重要应用，可实现对航天器的稳定运行与精确机动。

## 相关概念

- [偏转角（Deflection Angle）](/glossary/dynamics/deflection-angle/)
- [时间最优转移（Time-Optimal Transfer）](/glossary/dynamics/time-optimal-transfer/)
- [双程测距求和组合（Summation Combination of Dual One-Way Ranging）](/glossary/navigation/summation-combination-of-dual-one-way-ranging/)
- [地图投影（Map Projection）](/glossary/fundamentals/map-projection/)

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
