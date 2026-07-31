---
title: 状态相关系数参数化（State Dependent Coefficient Parameterization, SDC Parameterization）
description: 将非线性系统状态矩阵写为状态本身函数形式的技术。通过将非线性方程改写为ẋ=A(x)x+B(x)u的伪线性形式，使SDRE方法得以将非线性问题转化为每个时刻的时变线性LQR问题求解。
keywords: 状态相关系数参数化, State Dependent Coefficient Parameterization, SDC Parameterization, SDC, 动力学, 轨道, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 状态相关系数参数化（State Dependent Coefficient Parameterization, SDC Parameterization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 状态相关系数参数化详解 | 术语定义
  description: 将非线性系统状态矩阵写为状态本身函数形式的技术。通过将非线性方程改写为ẋ=A(x)x+B(x)u的伪线性形式，使SDRE方法得以将非线性问题转化为每个时刻的时变线性LQR问题求解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 状态相关系数参数化详解 | 术语定义
  description: 将非线性系统状态矩阵写为状态本身函数形式的技术。通过将非线性方程改写为ẋ=A(x)x+B(x)u的伪线性形式，使SDRE方法得以将非线性问题转化为每个时刻的时变线性LQR问题求解。
  image: /logo.png
permalink: /glossary/dynamics/state-dependent-coefficient-parameterization-sdc-parameterization/
---

# 状态相关系数参数化（State Dependent Coefficient Parameterization, SDC Parameterization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将非线性系统状态矩阵写为状态本身函数形式的技术。通过将非线性方程改写为ẋ=A(x)x+B(x)u的伪线性形式，使SDRE方法得以将非线性问题转化为每个时刻的时变线性LQR问题求解。

## 应用价值

针对状态相关系数参数化的深入研究有助于理解地月空间复杂动力学环境，为未来任务设计提供理论支撑和工程参考。
在实际任务中，需要结合数值仿真和解析方法对状态相关系数参数化进行分析验证，确保设计方案满足任务约束和性能指标。

## 相关概念

- [双变量高斯分布（Bivariate Gaussian Distribution）](/glossary/dynamics/bivariate-gaussian-distribution/)
- [中途脉冲（Midcourse Impulse）](/glossary/dynamics/midcourse-impulse/)
- [零推力参考轨迹（Zero-Thrust Reference Trajectory）](/glossary/dynamics/zero-thrust-reference-trajectory/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)

## 参考文献

- https://doi.org/10.1007/s10569-021-10041-3
