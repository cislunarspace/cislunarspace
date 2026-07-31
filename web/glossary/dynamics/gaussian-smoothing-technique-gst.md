---
title: 高斯平滑技术（Gaussian Smoothing Technique, GST）
description: 一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。
keywords: 高斯平滑技术, Gaussian Smoothing Technique, GST, GST, 动力学, 轨道, 控制
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
permalink: /glossary/dynamics/gaussian-smoothing-technique-gst/
---

# 高斯平滑技术（Gaussian Smoothing Technique, GST）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种基于高斯误差函数的间断控制剖面逼近方法。用参数化S型曲线逐步近似不连续的signum函数，通过逐步缩小平滑参数rho使曲线从光滑逐步逼近间断，从而改善间接优化方法的收敛性并避免陷入局部次优解。与广义高斯平滑同伦法不同，GST直接用高斯误差函数逼近间断，而非对系统做时间域卷积。

## 应用价值

由于高斯平滑技术具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
在实际任务中，高斯平滑技术直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
在实际任务中，需要结合数值仿真和解析方法对高斯平滑技术进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Zhang Z et al. 2026, Space Sci. Technol. 6:0441
