---
title: APC分解法（Access-profile-Pattern-Coverage Decomposition, APC Decomposition）
description: 将星座覆盖优化问题分解为三个层次的方法：可达性剖面描述单颗卫星对目标的可见时段，星座构型向量描述同一轨道上多颗卫星的相对相位分布，覆盖时间线由前两者循环卷积得到。三层结合后构造整数线性规划问题，求解最少卫星数的星座方案。
keywords: APC分解法, Access-profile-Pattern-Coverage Decomposition, APC Decomposition, APC, 轨道力学, 引力场, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: APC分解法（Access-profile-Pattern-Coverage Decomposition, APC Decomposition）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: APC分解法详解 | 术语定义
  description: 将星座覆盖优化问题分解为三个层次的方法：可达性剖面描述单颗卫星对目标的可见时段，星座构型向量描述同一轨道上多颗卫星的相对相位分布，覆盖时间线由前两者循环卷积得到。三层结合后构造整数线性规划问题，求解最少卫星数的星座方案。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: APC分解法详解 | 术语定义
  description: 将星座覆盖优化问题分解为三个层次的方法：可达性剖面描述单颗卫星对目标的可见时段，星座构型向量描述同一轨道上多颗卫星的相对相位分布，覆盖时间线由前两者循环卷积得到。三层结合后构造整数线性规划问题，求解最少卫星数的星座方案。
  image: /logo.png
permalink: /glossary/fundamentals/access-profile-pattern-coverage-decomposition-apc-decomposition/
---

# APC分解法（Access-profile-Pattern-Coverage Decomposition, APC Decomposition）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将星座覆盖优化问题分解为三个层次的方法：可达性剖面描述单颗卫星对目标的可见时段，星座构型向量描述同一轨道上多颗卫星的相对相位分布，覆盖时间线由前两者循环卷积得到。三层结合后构造整数线性规划问题，求解最少卫星数的星座方案。

## 应用价值

在APC分解法的设计与分析中，可用于优化转移方案，减少燃料消耗 结合数值优化算法，可实现高性能的轨迹规划。

## 相关概念

- [脉冲转向（Orbital Axis Slewing）](/glossary/fundamentals/orbital-axis-slewing/)
- [推进剂质量比（Propellant Mass Fraction）](/glossary/fundamentals/propellant-mass-fraction/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Lee et al., 2020, Satellite Constellation Pattern Optimization for Complex Regional Coverage
- Patel et al., 2024
