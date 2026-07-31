---
title: 惯性权重（Inertia Weight）
description: 粒子群算法中决定粒子保持上一时刻速度倾向的参数，较大的惯性权重有利于全局探索，较小的有利于局部收敛。
keywords: 惯性权重, Inertia Weight, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 惯性权重（Inertia Weight）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 惯性权重详解 | 术语定义
  description: 粒子群算法中决定粒子保持上一时刻速度倾向的参数，较大的惯性权重有利于全局探索，较小的有利于局部收敛。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 惯性权重详解 | 术语定义
  description: 粒子群算法中决定粒子保持上一时刻速度倾向的参数，较大的惯性权重有利于全局探索，较小的有利于局部收敛。
  image: /logo.png
permalink: /glossary/dynamics/inertia-weight/
---

# 惯性权重（Inertia Weight）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

粒子群算法中决定粒子保持上一时刻速度倾向的参数，较大的惯性权重有利于全局探索，较小的有利于局部收敛。

## 应用价值

惯性权重是粒子群算法中平衡全局探索与局部收敛的关键参数。较大的惯性权重有利于跳出局部最优进行全局搜索，较小的惯性权重有利于在当前搜索域内精细收敛。在轨道优化中，需要根据问题特性调整惯性权重以获得更好的优化结果。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- 李宸硕 等 - 2024 - 基于弱稳定边界理论的低能地月转移轨道设计
