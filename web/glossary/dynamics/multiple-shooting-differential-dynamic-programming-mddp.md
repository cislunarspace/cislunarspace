---
title: 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）
description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
keywords: 多重打靶差分动态规划, Multiple-Shooting Differential Dynamic Programming, MDDP, MDDP, 轨道设计, 最优控制, 动力学建模
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多重打靶差分动态规划详解 | 术语定义
  description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多重打靶差分动态规划详解 | 术语定义
  description: 将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。
  image: /logo.png
permalink: /glossary/dynamics/multiple-shooting-differential-dynamic-programming-mddp/
---

# 多重打靶差分动态规划（Multiple-Shooting Differential Dynamic Programming, MDDP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将多相轨迹分解为多个独立相段、各自运行 HDDP 迭代的优化框架。与多相 HDDP 中全轨迹导数耦合不同，MDDP 在每次迭代中先独立优化各相段，再通过外层信赖域步骤更新各相段的初始状态和目标状态，从而将引力辅助等敏感段的影响限制在本相段内。各相段可并行计算，适合含多个引力辅助或复杂机动的长周期轨迹。

## 应用价值

为航天器的精确控制提供理论依据，确保任务执行的可靠性 结合数值优化算法，可实现高性能的轨迹规划 用于分析航天器在复杂引力场中的运动特性。

## 相关概念

- [对偶控制变换（Adjoint-Control Transformation）](/glossary/dynamics/adjoint-control-transformation/)
- [贝叶斯压缩感知（Bayesian Compressive Sensing）](/glossary/dynamics/bayesian-compressive-sensing/)
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [状态转移矩阵（State Transition Matrix）](/glossary/dynamics/state-transition-matrix/)

## 参考文献

- Pellegrini & Russell 2017, AAS 17-453; Aziz et al. 2019, JGCD
