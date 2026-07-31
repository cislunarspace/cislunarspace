---
title: 高斯平滑技术（Gaussian Smoothing Technique, GST）
description: 一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。
keywords: 高斯平滑技术, Gaussian Smoothing Technique, GST, GST, 地月空间, cislunar
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 高斯平滑技术（Gaussian Smoothing Technique, GST）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高斯平滑技术详解 | 术语定义
  description: 一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高斯平滑技术详解 | 术语定义
  description: 一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。
  image: /logo.png
permalink: /glossary/dynamics/gst/
---

# 高斯平滑技术（Gaussian Smoothing Technique, GST）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。

## 应用价值

高斯平滑技术在轨道力学和任务规划中具有重要作用，可用于分析航天器的运动特性和优化转移轨道。

## 相关概念

- [利差点轨道（Libration Point Orbit）](/glossary/orbits/lpo/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/stm/)
- [六自由度（Six-Degree-of-Freedom）](/glossary/fundamentals/6-dof/)
- [高斯伪谱法（Gauss Pseudospectral Method）](/glossary/dynamics/gpm/)

## 参考文献

Zhang Z et al. 2026, Space Sci. Technol. 6:0441
