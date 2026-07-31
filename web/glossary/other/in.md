---
title: 自适应退步搜索（自适应退步搜索）
description: 当微分修正迭代陷入错误区域（积分到达固定时间但航迹角不满足约束）时，自动将速度增量修正量减半并回退的搜索策略。在Halo轨道周围的强非线性相空间中，标准微分修正容易发散或收敛到大速度增量的轨道上。退步搜索通过逐步缩小修正步长，使迭代跳出错误区域后重新找到满足终止条件的解，从而提高算法的收敛鲁棒性。
keywords: 自适应退步搜索, A search strategy that automatically halves the velocity correction and backtracks when differential correction iteration enters an erroneous region (integration reaches the fixed time limit without satisfying the flight path angle constraint). In the strongly nonlinear phase space around Halo orbits, standard differential correction tends to diverge or converge to large-impulse trajectories. Backstepping search progressively reduces the correction step size until the iteration escapes the erroneous region and finds a solution satisfying the termination condition, improving convergence robustness., 星座, 轨道设计, 软件
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自适应退步搜索（自适应退步搜索）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自适应退步搜索详解 | 术语定义
  description: 当微分修正迭代陷入错误区域（积分到达固定时间但航迹角不满足约束）时，自动将速度增量修正量减半并回退的搜索策略。在Halo轨道周围的强非线性相空间中，标准微分修正容易发散或收敛到大速度增量的轨道上。退步搜索通过逐步缩小修正步长，使迭代跳出错误区域后重新找到满足终止条件的解，从而提高算法的收敛鲁棒性。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自适应退步搜索详解 | 术语定义
  description: 当微分修正迭代陷入错误区域（积分到达固定时间但航迹角不满足约束）时，自动将速度增量修正量减半并回退的搜索策略。在Halo轨道周围的强非线性相空间中，标准微分修正容易发散或收敛到大速度增量的轨道上。退步搜索通过逐步缩小修正步长，使迭代跳出错误区域后重新找到满足终止条件的解，从而提高算法的收敛鲁棒性。
  image: /logo.png
permalink: /glossary/other/in/
---

# 自适应退步搜索（自适应退步搜索）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：学术论文与专业资料整理
>
> 站长地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

当微分修正迭代陷入错误区域（积分到达固定时间但航迹角不满足约束）时，自动将速度增量修正量减半并回退的搜索策略。在Halo轨道周围的强非线性相空间中，标准微分修正容易发散或收敛到大速度增量的轨道上。退步搜索通过逐步缩小修正步长，使迭代跳出错误区域后重新找到满足终止条件的解，从而提高算法的收敛鲁棒性。

## 应用价值

自适应退步搜索通过逐步缩小修正步长跳出错误区域，提高微分修正在强非线性相空间中的收敛鲁棒性。在Halo轨道转移轨道设计中具有重要应用价值。

## 相关概念

- [小行星防御星座（Asteroid Defense Constellation）](/glossary/other/asteroid-defense-constellation/)
- [SNOPT（SNOPT）](/glossary/other/snopt/)

## 参考文献

- 彭坤 等 - 2016 - 基于不变流形的地月L2点Halo轨道转移轨道设计
