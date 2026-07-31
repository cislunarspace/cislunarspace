---
title: 差分动态规划（Differential Dynamic Programming）
description: 基于贝尔曼最优性原理的非线性最优控制迭代算法。不直接最小化全局代价函数，而是对代价函数进行二次展开，将最优控制问题转化为递推形式，逐段求解最优控制量。相比直接法（将轨迹离散为非线性规划），DDP在长时段多段问题上计算效率更高。本文所用的HDDP是DDP的增强版本。
keywords: DDP, 轨道, 动力学, 控制, 稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 差分动态规划（Differential Dynamic Programming）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 差分动态规划详解 | 术语定义
  description: 基于贝尔曼最优性原理的非线性最优控制迭代算法。不直接最小化全局代价函数，而是对代价函数进行二次展开，将最优控制问题转化为递推形式，逐段求解最优控制量。相比直接法（将轨迹离散为非线性规划），DDP在长时段多段问题上计算效率更高。本文所用的HDDP是DDP的增强版本。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 差分动态规划详解 | 术语定义
  description: 基于贝尔曼最优性原理的非线性最优控制迭代算法。不直接最小化全局代价函数，而是对代价函数进行二次展开，将最优控制问题转化为递推形式，逐段求解最优控制量。相比直接法（将轨迹离散为非线性规划），DDP在长时段多段问题上计算效率更高。本文所用的HDDP是DDP的增强版本。
  image: /logo.png
permalink: /glossary/dynamics/differential-dynamic-programming/
---

# 差分动态规划（Differential Dynamic Programming）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于贝尔曼最优性原理的非线性最优控制迭代算法。不直接最小化全局代价函数，而是对代价函数进行二次展开，将最优控制问题转化为递推形式，逐段求解最优控制量。相比直接法（将轨迹离散为非线性规划），DDP在长时段多段问题上计算效率更高。本文所用的HDDP是DDP的增强版本。

## 应用价值

该方法在航天器轨道控制和状态估计中发挥关键作用。通过合理的控制策略设计或滤波算法选择，可以有效抑制扰动影响，提高航天器轨道保持精度和定轨收敛速度。

## 相关概念

- [L4（L4）](/glossary/dynamics/l4/)
- [轨道内分量（In-Plane）](/glossary/dynamics/in-plane/)
- [Hill方程（Hill's Equations）](/glossary/dynamics/hills-equations/)
- [雅可比能量（Jacobi Energy）](/glossary/dynamics/jacobi-energy/)

## 参考文献

- Oue等 - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
