---
title: 自适应鲁棒容积卡尔曼滤波（Adaptive Robust Cubature Kalman Filter, ARCKF）
description: 在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。
keywords: 自适应鲁棒容积卡尔曼滤波, Adaptive Robust Cubature Kalman Filter, ARCKF, ARCKF, GNSS, 定位, 测距, 定轨
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应鲁棒容积卡尔曼滤波（Adaptive Robust Cubature Kalman Filter, ARCKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应鲁棒容积卡尔曼滤波详解 | 术语定义
  description: 在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应鲁棒容积卡尔曼滤波详解 | 术语定义
  description: 在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。
  image: /logo.png
permalink: /glossary/navigation/ARCKF/
---

# 自适应鲁棒容积卡尔曼滤波（Adaptive Robust Cubature Kalman Filter, ARCKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。

## 应用价值

该技术在地月空间导航与定轨中发挥关键作用，为探测器提供高精度位置和速度信息。

## 相关概念

- [Autonomous Orbit Determination](/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/glossary/navigation/inter-satellite-link/)

## 参考文献

- Xu et al. 2026。
