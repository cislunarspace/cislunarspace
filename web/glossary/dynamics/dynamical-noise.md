---
title: 动力学噪声（Dynamical Noise）
description: 描述动力学模型不确定性的过程噪声协方差矩阵，用于吸收未建模加速度扰动的影响。其方差大小直接影响滤波器的状态估计精度。
keywords: 动力学噪声, Dynamical Noise, 轨道动力学, 多体问题, 摄动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 动力学噪声（Dynamical Noise）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 动力学噪声详解 | 术语定义
  description: 描述动力学模型不确定性的过程噪声协方差矩阵，用于吸收未建模加速度扰动的影响。其方差大小直接影响滤波器的状态估计精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 动力学噪声详解 | 术语定义
  description: 描述动力学模型不确定性的过程噪声协方差矩阵，用于吸收未建模加速度扰动的影响。其方差大小直接影响滤波器的状态估计精度。
  image: /logo.png
permalink: /glossary/dynamics/dynamical-noise/
---

# 动力学噪声（Dynamical Noise）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述动力学模型不确定性的过程噪声协方差矩阵，用于吸收未建模加速度扰动的影响。其方差大小直接影响滤波器的状态估计精度。

## 应用价值

在自主导航滤波算法中，该方法通过自适应调整滤波器参数提高收敛速度，适用于地月空间的实时定轨任务。

## 相关概念

- [月球飞越法（Lunar Fly-by Method）](/glossary/dynamics/lunar-fly-by-method/)
- [可达集（Reachability Set）](/glossary/dynamics/reachability-set/)
- [最大能量逃逸轨迹（Maximum-Energy Escape Trajectory）](/glossary/dynamics/maximum-energy-escape-trajectory/)
- [拉普拉斯方法（Laplace Method）](/glossary/dynamics/laplace-method/)

## 参考文献

- Analysis of Autonomous Orbit Determination in Various Near-Moon Periodic Orbits (Qi & Oguri, 2023)
