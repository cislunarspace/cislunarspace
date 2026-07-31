---
title: 变阶Adams积分法（Variable-Order Adams Method）
description: 一种自适应常微分方程数值积分方法，通过动态调整多项式阶数来平衡精度和计算效率。本文使用的DIVA积分器属于此类方法，积分容差设为1e-12，适用于星历模型中长时间高精度轨道传播。
keywords: 变阶Adams积分法, Variable-Order Adams Method, 基础, 理论, 方程
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 变阶Adams积分法（Variable-Order Adams Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 变阶Adams积分法详解 | 术语定义
  description: 一种自适应常微分方程数值积分方法，通过动态调整多项式阶数来平衡精度和计算效率。本文使用的DIVA积分器属于此类方法，积分容差设为1e-12，适用于星历模型中长时间高精度轨道传播。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 变阶Adams积分法详解 | 术语定义
  description: 一种自适应常微分方程数值积分方法，通过动态调整多项式阶数来平衡精度和计算效率。本文使用的DIVA积分器属于此类方法，积分容差设为1e-12，适用于星历模型中长时间高精度轨道传播。
  image: /logo.png
permalink: /glossary/fundamentals/variable-order-adams-method/
---

# 变阶Adams积分法（Variable-Order Adams Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种自适应常微分方程数值积分方法，通过动态调整多项式阶数来平衡精度和计算效率。本文使用的DIVA积分器属于此类方法，积分容差设为1e-12，适用于星历模型中长时间高精度轨道传播。

## 应用价值

变阶Adams积分法是分析地月空间动力学问题的理论基础，为航天器轨道设计、任务规划和控制策略制定提供数学支撑。
在实际工程中，需要将变阶Adams积分法与数值方法相结合，求解满足边界条件的最优解或近似解。
在实际任务中，需要结合数值仿真和解析方法对变阶Adams积分法进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [时变系统（Time-Varying System）](/glossary/fundamentals/time-varying-system/)
- [利普希茨条件（Lipschitz Condition）](/glossary/fundamentals/lipschitz-condition/)
- [变时间瞄准（Variable-Time Targeting）](/glossary/fundamentals/variable-time-targeting/)
- [返回走廊（Return Corridor）](/glossary/fundamentals/return-corridor/)

## 参考文献

- Anderson and Parker, 2012, J. Guidance, Control, and Dynamics
