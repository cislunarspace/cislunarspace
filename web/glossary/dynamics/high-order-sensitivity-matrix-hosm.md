---
title: 高阶灵敏度矩阵（High-Order Sensitivity Matrix, HOSM）
description: 通过泰勒展开构造多项式模型来替代逐样本积分的可达域计算方法。将状态传播函数在初始状态处截断到指定阶数展开，利用加权求和在有限采样点上完成高维积分，避免蒙特卡洛方法随维度指数增长的计算开销。精度和效率取决于展开阶数：二阶计算快但误差大，五阶精度高但耗时约为二阶的44倍。
keywords: 高阶灵敏度矩阵, High-Order Sensitivity Matrix, HOSM, HOSM, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 高阶灵敏度矩阵（High-Order Sensitivity Matrix, HOSM）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 高阶灵敏度矩阵详解 | 术语定义
  description: 通过泰勒展开构造多项式模型来替代逐样本积分的可达域计算方法。将状态传播函数在初始状态处截断到指定阶数展开，利用加权求和在有限采样点上完成高维积分，避免蒙特卡洛方法随维度指数增长的计算开销。精度和效率取决于展开阶数：二阶计算快但误差大，五阶精度高但耗时约为二阶的44倍。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 高阶灵敏度矩阵详解 | 术语定义
  description: 通过泰勒展开构造多项式模型来替代逐样本积分的可达域计算方法。将状态传播函数在初始状态处截断到指定阶数展开，利用加权求和在有限采样点上完成高维积分，避免蒙特卡洛方法随维度指数增长的计算开销。精度和效率取决于展开阶数：二阶计算快但误差大，五阶精度高但耗时约为二阶的44倍。
  image: /logo.png
permalink: /glossary/dynamics/high-order-sensitivity-matrix-hosm/
---

# 高阶灵敏度矩阵（High-Order Sensitivity Matrix, HOSM）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过泰勒展开构造多项式模型来替代逐样本积分的可达域计算方法。将状态传播函数在初始状态处截断到指定阶数展开，利用加权求和在有限采样点上完成高维积分，避免蒙特卡洛方法随维度指数增长的计算开销。精度和效率取决于展开阶数：二阶计算快但误差大，五阶精度高但耗时约为二阶的44倍。

## 应用价值

由于高阶灵敏度矩阵具有不稳定性，轨道设计时必须考虑主动控制或定期修正策略，以避免初始误差随时间指数增长导致任务失败。
针对高阶灵敏度矩阵的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对高阶灵敏度矩阵进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- Li 等 - 2025 - Efficient reachable domain search-tracking for cislunar non-cooperative targets via designed quadrature
