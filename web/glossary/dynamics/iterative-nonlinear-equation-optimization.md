---
title: 非线性方程组迭代优化（Iterative Nonlinear Equation Optimization）
description: NRHO调相优化的第三阶段：将位置修正后的调相问题建模为输入输出系统（输入为脉冲速度增量和转移时间，输出为位置误差和总速度增量），构造非线性方程组，通过逐步缩小速度增量目标值并迭代求解，进一步降低燃料消耗。
keywords: 非线性方程组迭代优化, Iterative Nonlinear Equation Optimization, 轨道动力学, 控制理论, 最优控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 非线性方程组迭代优化（Iterative Nonlinear Equation Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 非线性方程组迭代优化详解 | 术语定义
  description: NRHO调相优化的第三阶段：将位置修正后的调相问题建模为输入输出系统（输入为脉冲速度增量和转移时间，输出为位置误差和总速度增量），构造非线性方程组，通过逐步缩小速度增量目标值并迭代求解，进一步降低燃料消耗。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 非线性方程组迭代优化详解 | 术语定义
  description: NRHO调相优化的第三阶段：将位置修正后的调相问题建模为输入输出系统（输入为脉冲速度增量和转移时间，输出为位置误差和总速度增量），构造非线性方程组，通过逐步缩小速度增量目标值并迭代求解，进一步降低燃料消耗。
  image: /logo.png
permalink: /glossary/dynamics/iterative-nonlinear-equation-optimization/
---

# 非线性方程组迭代优化（Iterative Nonlinear Equation Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

NRHO调相优化的第三阶段：将位置修正后的调相问题建模为输入输出系统（输入为脉冲速度增量和转移时间，输出为位置误差和总速度增量），构造非线性方程组，通过逐步缩小速度增量目标值并迭代求解，进一步降低燃料消耗。

## 应用价值

非线性方程组迭代优化在轨道设计和轨迹优化中用于将连续控制问题离散化，通过非线性规划求解最优控制序列。 在地月空间任务中，该方法可应用于转移轨道设计、轨道维持和再入轨迹规划等关键环节。 利用该方法可以降低计算复杂度，提高收敛速度，适合在轨自主制导应用。

## 相关概念

- [控制参数化（Control Parametrization）](/glossary/dynamics/control-parametrization/)
- [推力器调制器（Thruster Modulator）](/glossary/dynamics/thruster-modulator/)
- [粒子群优化器（Particle Swarm Optimizer）](/glossary/dynamics/particle-swarm-optimizer/)
- [脉冲间隔（Impulse Interval）](/glossary/dynamics/impulse-interval/)

## 参考文献

- Li et al., 2026, Chinese Journal of Space Science, 46(1):175-188
