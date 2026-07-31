---
title: 显式制导律（Explicit Guidance Law）
description: 根据航天器当前运动状态，按照泛函的显式表达式实时计算控制量的制导方法。与标称轨迹制导需要预先存储最优轨迹不同，显式制导在轨计算量小、实时性好，适合星载计算机执行。在动力下降段中，通过引入哈密尔顿函数和协态变量，可推导出加速度和推力方向角的解析表达式。
keywords: 显式制导律, Explicit Guidance Law, 轨道动力学, 三体问题, 平动点
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 显式制导律（Explicit Guidance Law）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 显式制导律详解 | 术语定义
  description: 根据航天器当前运动状态，按照泛函的显式表达式实时计算控制量的制导方法。与标称轨迹制导需要预先存储最优轨迹不同，显式制导在轨计算量小、实时性好，适合星载计算机执行。在动力下降段中，通过引入哈密尔顿函数和协态变量，可推导出加速度和推力方向角的解析表达式。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 显式制导律详解 | 术语定义
  description: 根据航天器当前运动状态，按照泛函的显式表达式实时计算控制量的制导方法。与标称轨迹制导需要预先存储最优轨迹不同，显式制导在轨计算量小、实时性好，适合星载计算机执行。在动力下降段中，通过引入哈密尔顿函数和协态变量，可推导出加速度和推力方向角的解析表达式。
  image: /logo.png
permalink: /glossary/dynamics/explicit-guidance-law/
---

# 显式制导律（Explicit Guidance Law）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

根据航天器当前运动状态，按照泛函的显式表达式实时计算控制量的制导方法。与标称轨迹制导需要预先存储最优轨迹不同，显式制导在轨计算量小、实时性好，适合星载计算机执行。在动力下降段中，通过引入哈密尔顿函数和协态变量，可推导出加速度和推力方向角的解析表达式。

## 应用价值

在航天器控制系统设计中，该方法可用于设计姿态控制律或制导律，实现对航天器姿态和轨道的精确控制。在实际任务中，基于该方法的控制器能够提高姿态稳定性和轨迹跟踪精度。

## 相关概念

- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [约束转化非线性规划（Constraint Conversion to Nonlinear Programming）](/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [全局搜索（Global Search）](/glossary/fundamentals/global-search/)
- [姿态确定与控制系统（Attitude Determination and Control System）](/glossary/fundamentals/attitude-determination-and-control-system/)

## 参考文献

- 赵弘骞等 - 2021 - 基于动态规划的月面定点着陆快速制导方法
