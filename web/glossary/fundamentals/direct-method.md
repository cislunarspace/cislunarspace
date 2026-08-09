---
title: 直接法（Direct Method）
description: 将轨迹和控制量离散化，把最优控制问题转化为非线性规划问题求解的方法。优点是对初值不敏感，缺点是结果可能存在次优性。
keywords: 直接法, Direct Method, 轨道力学, 基础概念, 参考系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 直接法（Direct Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 直接法详解 | 术语定义
  description: 将轨迹和控制量离散化，把最优控制问题转化为非线性规划问题求解的方法。优点是对初值不敏感，缺点是结果可能存在次优性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 直接法详解 | 术语定义
  description: 将轨迹和控制量离散化，把最优控制问题转化为非线性规划问题求解的方法。优点是对初值不敏感，缺点是结果可能存在次优性。
  image: /logo.png
permalink: /glossary/fundamentals/direct-method/
---

# 直接法（Direct Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将轨迹和控制量离散化，把最优控制问题转化为非线性规划问题求解的方法。优点是对初值不敏感，缺点是结果可能存在次优性。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- 月心旋转坐标系（Moon-Centered Rotating Frame）
- [有效势能（Effective Pseudo-Potential）](/glossary/dynamics/jacobi-integral/)
- 比冲（Specific Impulse）
- 月球二体能量（Two-Body Energy with Respect to the Moon）

## 参考文献

- Zhang et al. - 2025 - Smoothing technique for indirect low-thrust trajectory optimization in cislunar space
