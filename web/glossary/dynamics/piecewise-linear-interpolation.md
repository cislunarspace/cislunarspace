---
title: 片线性插值（Piecewise Linear Interpolation）
description: 多面体表示法使用的插值策略。在参数平面矩形网格的每个矩形内，用四个三角形上的线性平面函数近似状态分量。给定任意(ΔtP0, ΔtM)点，先搜索该点所属三角形，再利用平面方程计算插值结果。该方法计算效率高，适合实时任务规划。
keywords: 片线性插值, Piecewise Linear Interpolation, 轨道设计, 最优控制, 动力学建模, 脉冲机动
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 片线性插值（Piecewise Linear Interpolation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 片线性插值详解 | 术语定义
  description: 多面体表示法使用的插值策略。在参数平面矩形网格的每个矩形内，用四个三角形上的线性平面函数近似状态分量。给定任意(ΔtP0, ΔtM)点，先搜索该点所属三角形，再利用平面方程计算插值结果。该方法计算效率高，适合实时任务规划。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 片线性插值详解 | 术语定义
  description: 多面体表示法使用的插值策略。在参数平面矩形网格的每个矩形内，用四个三角形上的线性平面函数近似状态分量。给定任意(ΔtP0, ΔtM)点，先搜索该点所属三角形，再利用平面方程计算插值结果。该方法计算效率高，适合实时任务规划。
  image: /logo.png
permalink: /glossary/dynamics/piecewise-linear-interpolation/
---

# 片线性插值（Piecewise Linear Interpolation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多面体表示法使用的插值策略。在参数平面矩形网格的每个矩形内，用四个三角形上的线性平面函数近似状态分量。给定任意(ΔtP0, ΔtM)点，先搜索该点所属三角形，再利用平面方程计算插值结果。该方法计算效率高，适合实时任务规划。

## 应用价值

描述系统状态随时间的变化规律，是轨道预报的基础 该概念为地月空间任务设计提供了重要的理论基础 在实际工程中可用于轨道设计、任务规划或控制系统分析。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Pontani和Teofilatto - 2016 - Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–moon system
