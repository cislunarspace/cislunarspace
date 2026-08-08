---
title: 测量雅可比矩阵（Measurement Jacobian）
description: "描述测量量对系统状态局部敏感程度的矩阵，即测量函数对状态向量的偏导数。在可观测性Gramian P(x₀) = ∫₀ᵀ Φ'(t)H'(t)H(t)Φ(t)dt 中，H即测量雅可比，与基本矩阵解 Φ 共同决定Gramian的各元素。"
keywords: 测量雅可比矩阵, Measurement Jacobian, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 测量雅可比矩阵（Measurement Jacobian）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 测量雅可比矩阵详解 | 术语定义
  description: "描述测量量对系统状态局部敏感程度的矩阵，即测量函数对状态向量的偏导数。在可观测性Gramian P(x₀) = ∫₀ᵀ Φ'(t)H'(t)H(t)Φ(t)dt 中，H即测量雅可比，与基本矩阵解 Φ 共同决定Gramian的各元素。"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 测量雅可比矩阵详解 | 术语定义
  description: "描述测量量对系统状态局部敏感程度的矩阵，即测量函数对状态向量的偏导数。在可观测性Gramian P(x₀) = ∫₀ᵀ Φ'(t)H'(t)H(t)Φ(t)dt 中，H即测量雅可比，与基本矩阵解 Φ 共同决定Gramian的各元素。"
  image: /logo.png
permalink: /glossary/dynamics/measurement-jacobian/
---

# 测量雅可比矩阵（Measurement Jacobian）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

描述测量量对系统状态局部敏感程度的矩阵，即测量函数对状态向量的偏导数。在可观测性Gramian P(x₀) = ∫₀ᵀ Φ'(t)H'(t)H(t)Φ(t)dt 中，H即测量雅可比，与基本矩阵解 Φ 共同决定Gramian的各元素。

## 应用价值

该矩阵在可观测性分析和滤波器设计中起关键作用。在编目系统中，该技术可提高对空间目标的探测、跟踪和编目能力。

## 相关概念

- 希尔球半径（Hill Sphere Radius）
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- Observability metrics for space-based cislunar domain awareness (Fowler & Paley, 2023)
