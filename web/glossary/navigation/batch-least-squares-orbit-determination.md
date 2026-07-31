---
title: 最小二乘批处理定轨（Batch Least-Squares Orbit Determination）
description: 将一段弧长内的全部观测数据集中处理，通过最小二乘法同时估计卫星初始状态、动力学参数和钟差的定轨方法。相比逐历元滤波，批处理法对大量数据的利用更充分、算法更稳健，定轨精度通常更高。
keywords: 最小二乘批处理定轨, Batch Least-Squares Orbit Determination, 导航, 轨道确定, 测量
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 最小二乘批处理定轨（Batch Least-Squares Orbit Determination）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 最小二乘批处理定轨详解 | 术语定义
  description: 将一段弧长内的全部观测数据集中处理，通过最小二乘法同时估计卫星初始状态、动力学参数和钟差的定轨方法。相比逐历元滤波，批处理法对大量数据的利用更充分、算法更稳健，定轨精度通常更高。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 最小二乘批处理定轨详解 | 术语定义
  description: 将一段弧长内的全部观测数据集中处理，通过最小二乘法同时估计卫星初始状态、动力学参数和钟差的定轨方法。相比逐历元滤波，批处理法对大量数据的利用更充分、算法更稳健，定轨精度通常更高。
  image: /logo.png
permalink: /glossary/navigation/batch-least-squares-orbit-determination/
---

# 最小二乘批处理定轨（Batch Least-Squares Orbit Determination）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将一段弧长内的全部观测数据集中处理，通过最小二乘法同时估计卫星初始状态、动力学参数和钟差的定轨方法。相比逐历元滤波，批处理法对大量数据的利用更充分、算法更稳健，定轨精度通常更高。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [钟差（Clock Bias）](/glossary/navigation/clock-bias/)
- [视直径（Apparent Diameter）](/glossary/navigation/apparent-diameter/)
- [核心航天器（Core Spacecraft）](/glossary/navigation/core-spacecraft/)
- [码伪距（Code Pseudo-range）](/glossary/navigation/code-pseudo-range/)

## 参考文献

- https://doi.org/10.1016/j.asr.2024.04.016
