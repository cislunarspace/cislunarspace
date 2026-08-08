---
title: 对数障碍同伦法（Logarithmic Barrier Homotopy）
description: 一种处理bang-bang最优控制的同伦延拓方法。在代价函数中引入对数障碍项，使控制量既不能为零也不能达到饱和（0<|u|<1），从而保证极大化哈密顿量光滑可微。通过逐步减小障碍参数epsilon逼近原始最小燃料问题，克服了L2-L1同伦在低推力下精度恶化和无法验证二阶条件的困难。
keywords: 对数障碍同伦法, Logarithmic Barrier Homotopy, 轨道力学, 引力场, 坐标系统, 优化理论
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 对数障碍同伦法（Logarithmic Barrier Homotopy）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 对数障碍同伦法详解 | 术语定义
  description: 一种处理bang-bang最优控制的同伦延拓方法。在代价函数中引入对数障碍项，使控制量既不能为零也不能达到饱和（0<|u|<1），从而保证极大化哈密顿量光滑可微。通过逐步减小障碍参数epsilon逼近原始最小燃料问题，克服了L2-L1同伦在低推力下精度恶化和无法验证二阶条件的困难。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 对数障碍同伦法详解 | 术语定义
  description: 一种处理bang-bang最优控制的同伦延拓方法。在代价函数中引入对数障碍项，使控制量既不能为零也不能达到饱和（0<|u|<1），从而保证极大化哈密顿量光滑可微。通过逐步减小障碍参数epsilon逼近原始最小燃料问题，克服了L2-L1同伦在低推力下精度恶化和无法验证二阶条件的困难。
  image: /logo.png
permalink: /glossary/fundamentals/logarithmic-barrier-homotopy/
---

# 对数障碍同伦法（Logarithmic Barrier Homotopy）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种处理bang-bang最优控制的同伦延拓方法。在代价函数中引入对数障碍项，使控制量既不能为零也不能达到饱和（0<|u|<1），从而保证极大化哈密顿量光滑可微。通过逐步减小障碍参数epsilon逼近原始最小燃料问题，克服了L2-L1同伦在低推力下精度恶化和无法验证二阶条件的困难。

## 应用价值

为航天器的精确控制提供理论依据，确保任务执行的可靠性 用于评估导航系统的精度上限，指导滤波器设计。

## 相关概念

- [脉冲转向（Orbital Axis Slewing）](/glossary/fundamentals/orbital-axis-slewing/)
- 推进剂质量比（Propellant Mass Fraction）
- [Lyapunov轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- 状态转移矩阵（State Transition Matrix）

## 参考文献

- Caillau et al. 2012 - Minimum fuel control of the planar circular restricted three-body problem
