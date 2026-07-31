---
title: x轴穿越控制（x-Axis Crossing Control）
description: 一种用于地月平动点轨道保持的打靶法。XAC在近月点附近的xz平面穿越时刻施加机动，使预测轨迹与基准轨迹在穿越xz平面时的x方向速度分量相匹配。XAC利用了轨道关于xz平面对称的性质，但每次机动最多控制三个状态分量，存在相位偏差的固有缺陷。CAPSTONE任务和月球门户计划均采用或研究了XAC。
keywords: x轴穿越控制, x-Axis Crossing Control, XAC, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: x轴穿越控制（x-Axis Crossing Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: x轴穿越控制详解 | 术语定义
  description: 一种用于地月平动点轨道保持的打靶法。XAC在近月点附近的xz平面穿越时刻施加机动，使预测轨迹与基准轨迹在穿越xz平面时的x方向速度分量相匹配。XAC利用了轨道关于xz平面对称的性质，但每次机动最多控制三个状态分量，存在相位偏差的固有缺陷。CAPSTONE任务和月球门户计划均采用或研究了XAC。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: x轴穿越控制详解 | 术语定义
  description: 一种用于地月平动点轨道保持的打靶法。XAC在近月点附近的xz平面穿越时刻施加机动，使预测轨迹与基准轨迹在穿越xz平面时的x方向速度分量相匹配。XAC利用了轨道关于xz平面对称的性质，但每次机动最多控制三个状态分量，存在相位偏差的固有缺陷。CAPSTONE任务和月球门户计划均采用或研究了XAC。
  image: /logo.png
permalink: /glossary/dynamics/x-axis-crossing-control/
---

# x轴穿越控制（x-Axis Crossing Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 术语来源：Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种用于地月平动点轨道保持的打靶法。XAC在近月点附近的xz平面穿越时刻施加机动，使预测轨迹与基准轨迹在穿越xz平面时的x方向速度分量相匹配。XAC利用了轨道关于xz平面对称的性质，但每次机动最多控制三个状态分量，存在相位偏差的固有缺陷。CAPSTONE任务和月球门户计划均采用或研究了XAC。

## 应用价值

x轴穿越控制用于实现探测器轨道或姿态的精确跟踪与调节。在地月空间任务中，x轴穿越控制律的设计需要兼顾控制精度和推进剂消耗，通过反馈机制抑制各类扰动对轨道偏差的影响。

## 相关概念

- [多段轨迹设计（Multiple Segment Trajectory Design）](/glossary/dynamics/multiple-segment-trajectory-design/)
- [零速度面（Zero-Velocity Surface）](/glossary/dynamics/zero-velocity-surface/)
- [零向量（Null Vector）](/glossary/dynamics/null-vector/)
- [圆形限制性三体问题（Circular Restricted Three-Body Problem）](/glossary/dynamics/circular-restricted-three-body-problem/)

## 参考文献

- Shimane 等 - 2025 - Revolution-spaced output-feedback model predictive control for station keeping on near-rectilinear halo orbits
