---
title: 多星联合定轨（Multi-Satellite Joint Orbit Determination）
description: 利用多颗卫星间的相互观测数据同时解算各卫星轨道及相关参数的方法。与单星轨道计算相比，联合定轨需要统一管理不同卫星的运动学参数、动力学参数和测量系统误差参数，通过逐个卫星积分星历和状态转移矩阵，逐条处理观测数据加权构建法方程，经迭代改进直至收敛。引入高精度已知轨道卫星的自定位数据作为绝对约束时，可显著缩短定轨所需观测弧段
keywords: 多星联合定轨, Multi-Satellite Joint Orbit Determination, 轨道确定, 姿态确定, 滤波算法, 测距测速
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多星联合定轨（Multi-Satellite Joint Orbit Determination）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多星联合定轨详解 | 术语定义
  description: 利用多颗卫星间的相互观测数据同时解算各卫星轨道及相关参数的方法。与单星轨道计算相比，联合定轨需要统一管理不同卫星的运动学参数、动力学参数和测量系统误差参数，通过逐个卫星积分星历和状态转移矩阵，逐条处理观测数据加权构建法方程，经迭代改进直至收敛。引入高精度已知轨道卫星的自定位数据作为绝对约束时，可显著缩短定轨所需观测弧段
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多星联合定轨详解 | 术语定义
  description: 利用多颗卫星间的相互观测数据同时解算各卫星轨道及相关参数的方法。与单星轨道计算相比，联合定轨需要统一管理不同卫星的运动学参数、动力学参数和测量系统误差参数，通过逐个卫星积分星历和状态转移矩阵，逐条处理观测数据加权构建法方程，经迭代改进直至收敛。引入高精度已知轨道卫星的自定位数据作为绝对约束时，可显著缩短定轨所需观测弧段
  image: /logo.png
permalink: /glossary/navigation/multi-satellite-joint-orbit-determination/
---

# 多星联合定轨（Multi-Satellite Joint Orbit Determination）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

利用多颗卫星间的相互观测数据同时解算各卫星轨道及相关参数的方法。与单星轨道计算相比，联合定轨需要统一管理不同卫星的运动学参数、动力学参数和测量系统误差参数，通过逐个卫星积分星历和状态转移矩阵，逐条处理观测数据加权构建法方程，经迭代改进直至收敛。引入高精度已知轨道卫星的自定位数据作为绝对约束时，可显著缩短定轨所需观测弧段。

## 应用价值

在多星联合定轨的设计与分析中，可用于优化转移方案，减少燃料消耗 支撑自主导航系统的开发，提高轨道确定精度 用于分析航天器在复杂引力场中的运动特性。

## 相关概念

- [自适应高斯混合滤波（Adaptive Gaussian Mixture Filtering）](/glossary/navigation/adaptive-gaussian-mixture-filtering/)
- [脉冲到达时间（Time of Arrival）](/glossary/navigation/time-of-arrival/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- 曹建峰 等, 2025, 地月空间探测器星间链路定轨能力分析
