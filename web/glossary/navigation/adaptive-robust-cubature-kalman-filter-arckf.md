---
title: 自适应鲁棒容积卡尔曼滤波（Adaptive Robust Cubature Kalman Filter, ARCKF）
description: 在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。
keywords: ARCKF, 定位, 导航, 轨道确定, 星座
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
permalink: /glossary/navigation/adaptive-robust-cubature-kalman-filter-arckf/
---

# 自适应鲁棒容积卡尔曼滤波（Adaptive Robust Cubature Kalman Filter, ARCKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在容积卡尔曼滤波基础上同时自适应估计过程噪声协方差Q和观测噪声协方差R，并引入鲁棒因子加权机制抑制测量异常值的滤波算法。比标准CKF能更快收敛且抗干扰更强。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [位置精度因子（Position Dilution of Precision）](/glossary/navigation/position-dilution-of-precision/)
- [甚长基线干涉测量（Very Long Baseline Interferometry）](/glossary/navigation/very-long-baseline-interferometry/)
- [轨道预报（Orbit Prediction）](/glossary/navigation/orbit-prediction/)
- [初值点（Initial Epoch Point）](/glossary/navigation/initial-epoch-point/)

## 参考文献

- Xu et al. 2026
