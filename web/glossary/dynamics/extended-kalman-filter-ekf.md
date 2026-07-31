---
title: 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）
description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
keywords: 扩展卡尔曼滤波器, Extended Kalman Filter, EKF, EKF, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 扩展卡尔曼滤波器详解 | 术语定义
  description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 扩展卡尔曼滤波器详解 | 术语定义
  description: 将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。
  image: /logo.png
permalink: /glossary/dynamics/extended-kalman-filter-ekf/
---

# 扩展卡尔曼滤波器（Extended Kalman Filter, EKF）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将卡尔曼滤波推广到非线性系统的状态估计方法，通过对非线性函数进行一阶泰勒展开近似，在预测步传播状态向量和误差协方差矩阵，在校正步融合测量数据得到后验估计。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [相对运动周期性条件（Periodicity Conditions in Relative Orbital Motion）](/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [螺旋式编队（Helix Formation）](/glossary/dynamics/helix-formation/)
- [能量耗散法（Energy Dissipation Method）](/glossary/dynamics/energy-dissipation-method/)
- [不稳定流形（Unstable Manifold）](/glossary/dynamics/unstable-manifold/)

## 参考文献

- Clareson 等 - 2025
