---
title: 逐次凸优化（Successive Convex Optimization）
description: 通过迭代方式逐步更新参考轨迹，将非线性最优控制问题转化为系列凸优化问题求解的方法。在每轮迭代中，以当前最优轨迹作为参考轨迹进行线性化，构造凸优化子问题并求解，直至收敛。
keywords: 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 逐次凸优化（Successive Convex Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逐次凸优化详解 | 术语定义
  description: 通过迭代方式逐步更新参考轨迹，将非线性最优控制问题转化为系列凸优化问题求解的方法。在每轮迭代中，以当前最优轨迹作为参考轨迹进行线性化，构造凸优化子问题并求解，直至收敛。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逐次凸优化详解 | 术语定义
  description: 通过迭代方式逐步更新参考轨迹，将非线性最优控制问题转化为系列凸优化问题求解的方法。在每轮迭代中，以当前最优轨迹作为参考轨迹进行线性化，构造凸优化子问题并求解，直至收敛。
  image: /logo.png
permalink: /glossary/dynamics/successive-convex-optimization/
---

# 逐次凸优化（Successive Convex Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

通过迭代方式逐步更新参考轨迹，将非线性最优控制问题转化为系列凸优化问题求解的方法。在每轮迭代中，以当前最优轨迹作为参考轨迹进行线性化，构造凸优化子问题并求解，直至收敛。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- 轨道内分量（In-Plane）
- Hill方程（Hill's Equations）
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Kayama 等 - 2022 - Low-thrust trajectory design with successive convex optimization for libration point orbits
