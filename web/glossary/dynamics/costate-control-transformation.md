---
title: 协态控制变换法（Costate-Control Transformation）
description: 将最优控制问题的设计变量从协态初值替换为推力转向角及其变化率初值的方法。因为控制量比协态变量更具物理意义，可以改善优化算法的收敛性。
keywords: 协态控制变换法, Costate-Control Transformation, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 协态控制变换法（Costate-Control Transformation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 协态控制变换法详解 | 术语定义
  description: 将最优控制问题的设计变量从协态初值替换为推力转向角及其变化率初值的方法。因为控制量比协态变量更具物理意义，可以改善优化算法的收敛性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协态控制变换法详解 | 术语定义
  description: 将最优控制问题的设计变量从协态初值替换为推力转向角及其变化率初值的方法。因为控制量比协态变量更具物理意义，可以改善优化算法的收敛性。
  image: /logo.png
permalink: /glossary/dynamics/costate-control-transformation/
---

# 协态控制变换法（Costate-Control Transformation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将最优控制问题的设计变量从协态初值替换为推力转向角及其变化率初值的方法。因为控制量比协态变量更具物理意义，可以改善优化算法的收敛性。

## 应用价值

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。对于大质量航天器的长时间转移，该推进方式可大幅降低推进剂消耗。

## 相关概念

- 希尔球半径（Hill Sphere Radius）
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincare-section/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/differential-correction/)

## 参考文献

- Kluever and Pierson, 1997, Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion
