---
title: 并行打靶法（Parallel Shooting Method）
description: 打靶法的改进版本，适用于高阶不动点的求解。该方法在Poincaré截面之间引入多个中间截面，将长周期轨迹分割为若干段，每段分别在各自截面上设置网格并独立打靶。不同截面上的节点组合构成初值猜测集。论文以七阶不动点为例，设置两个中间截面（轨迹第二次和第四次穿越Poincaré截面的位置），虽然计算时间显著增加，但能检测到任
keywords: 并行打靶法, Parallel Shooting Method, , 动力学, 非线性, 稳定性, 流形, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 并行打靶法（Parallel Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 并行打靶法（Parallel Shooting Method）详解 | 术语定义
  description: 打靶法的改进版本，适用于高阶不动点的求解。该方法在Poincaré截面之间引入多个中间截面，将长周期轨迹分割为若干段，每段分别在各自截面上设置网格并独立打靶。不同截面上的节点组合构成初值猜测集。论文以七阶不动点为例，设置两个中间截面（轨迹第二次和第四次穿越Poincaré截面的位置），虽然计算时间显著增加，但能检测到任
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 并行打靶法（Parallel Shooting Method）详解 | 术语定义
  description: 打靶法的改进版本，适用于高阶不动点的求解。该方法在Poincaré截面之间引入多个中间截面，将长周期轨迹分割为若干段，每段分别在各自截面上设置网格并独立打靶。不同截面上的节点组合构成初值猜测集。论文以七阶不动点为例，设置两个中间截面（轨迹第二次和第四次穿越Poincaré截面的位置），虽然计算时间显著增加，但能检测到任
  image: /logo.png
permalink: /glossary/dynamics/parallel-shooting-method/
---

# 并行打靶法（Parallel Shooting Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

打靶法的改进版本，适用于高阶不动点的求解。该方法在Poincaré截面之间引入多个中间截面，将长周期轨迹分割为若干段，每段分别在各自截面上设置网格并独立打靶。不同截面上的节点组合构成初值猜测集。论文以七阶不动点为例，设置两个中间截面（轨迹第二次和第四次穿越Poincaré截面的位置），虽然计算时间显著增加，但能检测到任意阶数的不动点。

## 应用价值

该概念在地月空间轨道设计中具有重要应用价值，可用于分析周期轨道的共振特性与稳定性。在任务窗口规划、轨道维持控制等场景下，利用共振特性可以简化任务设计、降低燃料消耗，为长期在轨任务提供高效的轨道管理方案。

## 相关概念

- [椭圆限制性三体问题（Elliptic Restricted Three-Body Problem）](/glossary/dynamics/er3bp/)
- 动力一致性（Dynamical Consistency）
- 组合协方差（Combined Covariance）
- [尼霍罗舍夫估计（Nekhorosev Estimates）](/glossary/dynamics/nekhorosev-estimates/)

## 参考文献

- Ren 等 - 2011 - On the mechanisms of natural transport in the solar system
- Gómez et al. 2001, Chapter 7
- Gómez et al. 2001, Ch.1,3
- Gómez 等 - 2001
