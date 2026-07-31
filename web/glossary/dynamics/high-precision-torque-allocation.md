---
title: 高精度力矩分配（High-Precision Torque Allocation）
description: 将控制器输出的期望力矩合理分配给推力矢量控制装置和姿控推力器的策略。主减速段尽量由推力矢量控制执行大力矩，低于其分辨率的小力矩由推力器补充，兼顾控制精度与推进剂效率。
keywords: 高精度力矩分配, High-Precision Torque Allocation, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 高精度力矩分配（High-Precision Torque Allocation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高精度力矩分配详解 | 术语定义
  description: 将控制器输出的期望力矩合理分配给推力矢量控制装置和姿控推力器的策略。主减速段尽量由推力矢量控制执行大力矩，低于其分辨率的小力矩由推力器补充，兼顾控制精度与推进剂效率。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高精度力矩分配详解 | 术语定义
  description: 将控制器输出的期望力矩合理分配给推力矢量控制装置和姿控推力器的策略。主减速段尽量由推力矢量控制执行大力矩，低于其分辨率的小力矩由推力器补充，兼顾控制精度与推进剂效率。
  image: /logo.png
permalink: /glossary/dynamics/high-precision-torque-allocation/
---

# 高精度力矩分配（High-Precision Torque Allocation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将控制器输出的期望力矩合理分配给推力矢量控制装置和姿控推力器的策略。主减速段尽量由推力矢量控制执行大力矩，低于其分辨率的小力矩由推力器补充，兼顾控制精度与推进剂效率。

## 应用价值

在实际任务中，高精度力矩分配直接影响转移轨道的燃料消耗和任务窗口选取，需要结合轨道优化算法进行详细设计。
针对高精度力矩分配的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对高精度力矩分配进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- 陈上上 等 - 2026 - 载人月面着陆GNC技术及验证
