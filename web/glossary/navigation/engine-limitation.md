---
title: 发动机约束（Engine Limitation）
description: 推力器物理性能对控制指令的限制，包括最小推力（推力器点火阈值）和最大推力（推力器输出上限）。当指令推力低于最小推力时，实际控制输入为零；当指令推力超过最大推力时，实际控制输入被截断为最大值。在地月空间轨道保持中，典型取值为最小推力加速度10的负七次方米每二次方秒、最大推力加速度5乘以10的负四次方米每二次方秒。
keywords: 发动机约束, Engine Limitation
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 发动机约束（Engine Limitation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 发动机约束详解 | 术语定义
  description: 推力器物理性能对控制指令的限制，包括最小推力（推力器点火阈值）和最大推力（推力器输出上限）。当指令推力低于最小推力时，实际控制输入为零；当指令推力超过最大推力时，实际控制输入被截断为最大值。在地月空间轨道保持中，典型取值为最小推力加速度10的负七次方米每二次方秒、最大推力加速度5乘以10的负四次方米每二次方秒。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 发动机约束详解 | 术语定义
  description: 推力器物理性能对控制指令的限制，包括最小推力（推力器点火阈值）和最大推力（推力器输出上限）。当指令推力低于最小推力时，实际控制输入为零；当指令推力超过最大推力时，实际控制输入被截断为最大值。在地月空间轨道保持中，典型取值为最小推力加速度10的负七次方米每二次方秒、最大推力加速度5乘以10的负四次方米每二次方秒。
  image: /logo.png
permalink: /glossary/navigation/engine-limitation/
---

# 发动机约束（Engine Limitation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

推力器物理性能对控制指令的限制，包括最小推力（推力器点火阈值）和最大推力（推力器输出上限）。当指令推力低于最小推力时，实际控制输入为零；当指令推力超过最大推力时，实际控制输入被截断为最大值。在地月空间轨道保持中，典型取值为最小推力加速度10的负七次方米每二次方秒、最大推力加速度5乘以10的负四次方米每二次方秒。

## 应用价值

在导航系统设计与实现中，需要考虑观测几何、误差传播和信号传播延迟等因素。该概念支撑定位精度评估、导航滤波器设计和星座优化。

## 相关概念

- 月面接收机（Lunar Surface Receiver）
- 几何精度因子（Geometric Dilution of Precision, GDOP）
- [星间测距（Satellite-to-Satellite Tracking, SST）](/glossary/navigation/inter-satellite-ranging/)

## 参考文献

- Zhang and Wang 2022 Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints
