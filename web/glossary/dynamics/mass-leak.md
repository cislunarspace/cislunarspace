---
title: 质量泄漏（Mass Leak）
description: 在含推力输入的轨道动力学方程中人为引入微小质量流率的技术，用于避免优化过程中质量变量为零或推力方向计算出现奇异性。小推力轨迹优化中，当发动机不工作时质量保持不变，但这种不连续性会导致梯度信息丢失或数值不稳定。质量泄漏通过在零推力阶段也允许极微量的质量流失，使动力学方程处处光滑，优化器可以稳定地搜索最优解。
keywords: Mass Leak, 三体问题, 动力学分叉, 质量泄漏, 轨道力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 质量泄漏（Mass Leak）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 质量泄漏详解 | 术语定义
  description: 在含推力输入的轨道动力学方程中人为引入微小质量流率的技术，用于避免优化过程中质量变量为零或推力方向计算出现奇异性。小推力轨迹优化中，当发动机不工作时质量保持不变，但这种不连续性会导致梯度信息丢失或数值不稳定。质量泄漏通过在零推力阶段也允许极微量的质量流失，使动力学方程处处光滑，优化器可以稳定地搜索最优解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 质量泄漏详解 | 术语定义
  description: 在含推力输入的轨道动力学方程中人为引入微小质量流率的技术，用于避免优化过程中质量变量为零或推力方向计算出现奇异性。小推力轨迹优化中，当发动机不工作时质量保持不变，但这种不连续性会导致梯度信息丢失或数值不稳定。质量泄漏通过在零推力阶段也允许极微量的质量流失，使动力学方程处处光滑，优化器可以稳定地搜索最优解。
  image: /logo.png
permalink: /glossary/dynamics/mass-leak/
---

# 质量泄漏（Mass Leak）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在含推力输入的轨道动力学方程中人为引入微小质量流率的技术，用于避免优化过程中质量变量为零或推力方向计算出现奇异性。小推力轨迹优化中，当发动机不工作时质量保持不变，但这种不连续性会导致梯度信息丢失或数值不稳定。质量泄漏通过在零推力阶段也允许极微量的质量流失，使动力学方程处处光滑，优化器可以稳定地搜索最优解。

## 应用价值

在轨道设计和控制中，该概念对理解航天器在地月空间中的运动特性和任务设计具有重要作用。

## 相关概念

- 最小范数解（Minimum Norm Solution）
- 刚体动力学（Rigid Body Dynamics）
- 变长设计空间（Variable-Size Design Space, VSDS）
- 分析梯度（Analytical Gradient）

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
