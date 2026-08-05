---
title: 相对运动最优控制（Optimal Relative Motion Control）
description: 在三体动力学中，控制伴随卫星相对于参考卫星的相对状态转移问题。给定参考轨道附近的初始相对状态 delta_x_0 和终端相对状态 delta_x_f，通过变分方程求解最优协态变量初值 delta_lambda_0。本文方法使任意边界条件的相对最优控制问题可在 O(m*n^3) 操作内近似求解。
keywords: Optimal Relative Motion Control, 坐标系, 相对运动最优控制, 航天器, 轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 相对运动最优控制（Optimal Relative Motion Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 相对运动最优控制详解 | 术语定义
  description: 在三体动力学中，控制伴随卫星相对于参考卫星的相对状态转移问题。给定参考轨道附近的初始相对状态 delta_x_0 和终端相对状态 delta_x_f，通过变分方程求解最优协态变量初值 delta_lambda_0。本文方法使任意边界条件的相对最优控制问题可在 O(m*n^3) 操作内近似求解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 相对运动最优控制详解 | 术语定义
  description: 在三体动力学中，控制伴随卫星相对于参考卫星的相对状态转移问题。给定参考轨道附近的初始相对状态 delta_x_0 和终端相对状态 delta_x_f，通过变分方程求解最优协态变量初值 delta_lambda_0。本文方法使任意边界条件的相对最优控制问题可在 O(m*n^3) 操作内近似求解。
  image: /logo.png
permalink: /glossary/fundamentals/optimal-relative-motion-control/
---

# 相对运动最优控制（Optimal Relative Motion Control）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在三体动力学中，控制伴随卫星相对于参考卫星的相对状态转移问题。给定参考轨道附近的初始相对状态 delta_x_0 和终端相对状态 delta_x_f，通过变分方程求解最优协态变量初值 delta_lambda_0。本文方法使任意边界条件的相对最优控制问题可在 O(m*n^3) 操作内近似求解。

## 应用价值

在航天器动力学分析与设计中，该方法用于实现航天器的精确姿态和轨道控制，是任务成功的关键技术。

## 相关概念

- [亚轨道（Suborbital）](/glossary/fundamentals/suborbital/)
- [火箭分级（Rocket Staging）](/glossary/fundamentals/rocket-staging/)
- [叉乘矩阵（Cross-Product Matrix / Skew-Symmetric Matrix）](/glossary/fundamentals/cross-product-matrix-skew-symmetric-matrix/)
- [拱线（Apsidal Line）](/glossary/fundamentals/apsidal-line/)

## 参考文献

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
