---
title: 高斯平滑技术（Gaussian Smoothing Technique, GST）
description: 一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。
keywords: 高斯平滑技术, Gaussian Smoothing Technique, GST, GST, 轨道动力学, 控制理论, 非线性控制, 最优控制
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
permalink: /glossary/dynamics/GST/
---

# 高斯平滑技术（Gaussian Smoothing Technique, GST）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。

## 应用价值

高斯平滑技术用于减少噪声影响，是数据处理和轨道滤波中的基础方法。

## 相关概念

- [高斯伪谱法（Gauss Pseudospectral Method, GPM）](/glossary/dynamics/GPM/)
- [有限时间收敛微分器（Finite-Time-Convergent Differentiator, FTCD）](/glossary/dynamics/FTCD/)
- [规定性能控制（Prescribed Performance Control, PPC）](/glossary/dynamics/PPC/)
- [规定性能函数（Prescribed Performance Function, PPF）](/glossary/dynamics/PPF/)

## 参考文献

- Zhang Z et al. 2026, Space Sci. Technol. 6:0441。
