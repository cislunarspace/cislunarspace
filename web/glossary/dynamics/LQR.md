---
title: LQR控制（Linear Quadratic Regulator）
description: 以最小化状态偏差与控制能量的加权和为目标的最优控制方法。基于线性化模型设计状态反馈增益矩阵，控制参数由加权矩阵Q（状态偏差权重）和R（控制能量权重）确定。在线性化模型附近控制效果好，但对非线性较强的系统精度有限。本文将其作为固定时间滑模控制的对比基准。
keywords: LQR控制, Linear Quadratic Regulator, LQR, 轨道动力学, 流形, 转移轨道, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: LQR控制（Linear Quadratic Regulator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: LQR控制详解 | 术语定义
  description: 以最小化状态偏差与控制能量的加权和为目标的最优控制方法。基于线性化模型设计状态反馈增益矩阵，控制参数由加权矩阵Q（状态偏差权重）和R（控制能量权重）确定。在线性化模型附近控制效果好，但对非线性较强的系统精度有限。本文将其作为固定时间滑模控制的对比基准。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: LQR控制详解 | 术语定义
  description: 以最小化状态偏差与控制能量的加权和为目标的最优控制方法。基于线性化模型设计状态反馈增益矩阵，控制参数由加权矩阵Q（状态偏差权重）和R（控制能量权重）确定。在线性化模型附近控制效果好，但对非线性较强的系统精度有限。本文将其作为固定时间滑模控制的对比基准。
  image: /logo.png
permalink: /glossary/dynamics/LQR/
---

# LQR控制（Linear Quadratic Regulator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

以最小化状态偏差与控制能量的加权和为目标的最优控制方法。基于线性化模型设计状态反馈增益矩阵，控制参数由加权矩阵Q（状态偏差权重）和R（控制能量权重）确定。在线性化模型附近控制效果好，但对非线性较强的系统精度有限。本文将其作为固定时间滑模控制的对比基准。

## 应用价值

该概念在地月空间研究和任务设计中具有应用价值。

## 相关概念

- [Weak Stability Boundary](/glossary/dynamics/weak-stability-boundary/)
- [Earth-Moon Manifold](/glossary/dynamics/earth-moon-manifold/)

## 参考文献

- 人工平动点附近混合推进航天器编队滑模控制保持。
