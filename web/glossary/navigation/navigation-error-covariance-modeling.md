---
title: 导航误差协方差建模（Navigation Error Covariance Modeling）
description: 在轨道保持仿真中，用协方差矩阵表征航天器位置和速度的导航不确定度，并据此生成随机误差样本的方法。具体做法：以导航解的估计误差对角阵为协方差矩阵，通过特征值分解得到标准差，在每次机动后添加三维位置和速度的三倍标准差随机误差。ARTEMIS 任务使用 1 km 位置和 1 cm/s 速度的一倍标准差误差，协方差矩阵取自地月
keywords: 导航误差协方差建模, Navigation Error Covariance Modeling
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 导航误差协方差建模（Navigation Error Covariance Modeling）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 导航误差协方差建模详解 | 术语定义
  description: 在轨道保持仿真中，用协方差矩阵表征航天器位置和速度的导航不确定度，并据此生成随机误差样本的方法。具体做法：以导航解的估计误差对角阵为协方差矩阵，通过特征值分解得到标准差，在每次机动后添加三维位置和速度的三倍标准差随机误差。ARTEMIS 任务使用 1 km 位置和 1 cm/s 速度的一倍标准差误差，协方差矩阵取自地月
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 导航误差协方差建模详解 | 术语定义
  description: 在轨道保持仿真中，用协方差矩阵表征航天器位置和速度的导航不确定度，并据此生成随机误差样本的方法。具体做法：以导航解的估计误差对角阵为协方差矩阵，通过特征值分解得到标准差，在每次机动后添加三维位置和速度的三倍标准差随机误差。ARTEMIS 任务使用 1 km 位置和 1 cm/s 速度的一倍标准差误差，协方差矩阵取自地月
  image: /logo.png
permalink: /glossary/navigation/navigation-error-covariance-modeling/
---

# 导航误差协方差建模（Navigation Error Covariance Modeling）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨道保持仿真中，用协方差矩阵表征航天器位置和速度的导航不确定度，并据此生成随机误差样本的方法。具体做法：以导航解的估计误差对角阵为协方差矩阵，通过特征值分解得到标准差，在每次机动后添加三维位置和速度的三倍标准差随机误差。ARTEMIS 任务使用 1 km 位置和 1 cm/s 速度的一倍标准差误差，协方差矩阵取自地月操作中实际导航解的对角元素。

## 应用价值

在导航系统设计与实现中，需要考虑观测几何、误差传播和信号传播延迟等因素。该概念支撑定位精度评估、导航滤波器设计和星座优化。

## 相关概念

- [月面接收机（Lunar Surface Receiver）](/glossary/navigation/lunar-surface-receiver/)
- [几何精度因子（Geometric Dilution of Precision, GDOP）](/glossary/navigation/geometric-dilution-of-precision-gdop/)
- [星间测距（Satellite-to-Satellite Tracking, SST）](/glossary/navigation/satellite-to-satellite-tracking-sst/)

## 参考文献

- Folta et al. 2010
