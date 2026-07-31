---
title: 循环矩阵（Circulant Matrix）
description: 方阵，每列由前一列循环下移一位得到。在星座优化中，将可达性剖面的各循环移位排列成矩阵，使覆盖时间线的计算表达为矩阵与向量的乘法，便于构造整数线性规划约束。
keywords: 循环矩阵, Circulant Matrix, 轨道力学, 引力场, 坐标系统, 优化理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 循环矩阵（Circulant Matrix）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 循环矩阵详解 | 术语定义
  description: 方阵，每列由前一列循环下移一位得到。在星座优化中，将可达性剖面的各循环移位排列成矩阵，使覆盖时间线的计算表达为矩阵与向量的乘法，便于构造整数线性规划约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 循环矩阵详解 | 术语定义
  description: 方阵，每列由前一列循环下移一位得到。在星座优化中，将可达性剖面的各循环移位排列成矩阵，使覆盖时间线的计算表达为矩阵与向量的乘法，便于构造整数线性规划约束。
  image: /logo.png
permalink: /glossary/fundamentals/circulant-matrix/
---

# 循环矩阵（Circulant Matrix）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

方阵，每列由前一列循环下移一位得到。在星座优化中，将可达性剖面的各循环移位排列成矩阵，使覆盖时间线的计算表达为矩阵与向量的乘法，便于构造整数线性规划约束。

## 应用价值

结合数值优化算法，可实现高性能的轨迹规划 用于描述误差传播和灵敏度分析。

## 相关概念

- [脉冲转向（Orbital Axis Slewing）](/glossary/fundamentals/orbital-axis-slewing/)
- [推进剂质量比（Propellant Mass Fraction）](/glossary/fundamentals/propellant-mass-fraction/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Patel et al., 2024
