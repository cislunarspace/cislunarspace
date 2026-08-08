---
title: 时变系统（Time-Varying System）
description: 系统矩阵 A(t)、B(t)、C(t) 随时间变化的线性系统。在 CRTBP 框架下，两航天器相对运动的系数矩阵依赖于目标航天器在旋转坐标系中的瞬时位置，因此系统本身就是时变的。与「线性定常系统」的区别：时变系统的响应不满足叠加原理的时间平移不变性，求解和控制设计难度更大。
keywords: 时变系统, Time-Varying System, 基础, 理论, 方程
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 时变系统（Time-Varying System）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 时变系统详解 | 术语定义
  description: 系统矩阵 A(t)、B(t)、C(t) 随时间变化的线性系统。在 CRTBP 框架下，两航天器相对运动的系数矩阵依赖于目标航天器在旋转坐标系中的瞬时位置，因此系统本身就是时变的。与「线性定常系统」的区别：时变系统的响应不满足叠加原理的时间平移不变性，求解和控制设计难度更大。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 时变系统详解 | 术语定义
  description: 系统矩阵 A(t)、B(t)、C(t) 随时间变化的线性系统。在 CRTBP 框架下，两航天器相对运动的系数矩阵依赖于目标航天器在旋转坐标系中的瞬时位置，因此系统本身就是时变的。与「线性定常系统」的区别：时变系统的响应不满足叠加原理的时间平移不变性，求解和控制设计难度更大。
  image: /logo.png
permalink: /glossary/fundamentals/time-varying-system/
---

# 时变系统（Time-Varying System）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

系统矩阵 A(t)、B(t)、C(t) 随时间变化的线性系统。在 CRTBP 框架下，两航天器相对运动的系数矩阵依赖于目标航天器在旋转坐标系中的瞬时位置，因此系统本身就是时变的。与「线性定常系统」的区别：时变系统的响应不满足叠加原理的时间平移不变性，求解和控制设计难度更大。

## 应用价值

时变系统是分析地月空间动力学问题的理论基础，为航天器轨道设计、任务规划和控制策略制定提供数学支撑。
在实际工程中，需要将时变系统与数值方法相结合，求解满足边界条件的最优解或近似解。
在实际任务中，需要结合数值仿真和解析方法对时变系统进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- 利普希茨条件（Lipschitz Condition）
- [变时间瞄准（Variable-Time Targeting）](/glossary/fundamentals/variable-time-targeting/)
- 返回走廊（Return Corridor）
- [中间推力弧（Intermediate thrust arc）](/glossary/fundamentals/it/)

## 参考文献

- 地月空间航天器绕飞接近跟踪控制
