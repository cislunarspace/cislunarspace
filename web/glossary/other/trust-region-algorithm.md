---
title: 信赖域算法（Trust-Region Algorithm）
description: 一类迭代优化算法。每步在当前点附近划定一个信赖域，用二次模型逼近目标函数，在域内求解子问题得到试探步；若试探步使目标函数充分下降则接受并可能扩大信赖域，否则拒绝并缩小信赖域。结合牛顿法的快速收敛和梯度下降法的稳健性，适用于无约束和有约束优化。
keywords: 信赖域算法, Trust-Region Algorithm, , 算法, 数值方法, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 信赖域算法（Trust-Region Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 信赖域算法详解 | 术语定义
  description: 一类迭代优化算法。每步在当前点附近划定一个信赖域，用二次模型逼近目标函数，在域内求解子问题得到试探步；若试探步使目标函数充分下降则接受并可能扩大信赖域，否则拒绝并缩小信赖域。结合牛顿法的快速收敛和梯度下降法的稳健性，适用于无约束和有约束优化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 信赖域算法详解 | 术语定义
  description: 一类迭代优化算法。每步在当前点附近划定一个信赖域，用二次模型逼近目标函数，在域内求解子问题得到试探步；若试探步使目标函数充分下降则接受并可能扩大信赖域，否则拒绝并缩小信赖域。结合牛顿法的快速收敛和梯度下降法的稳健性，适用于无约束和有约束优化。
  image: /logo.png
permalink: /glossary/other/trust-region-algorithm/
---

# 信赖域算法（Trust-Region Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文来源：[地月空间入门指南](https://cislunarspace.cn)

## 定义

一类迭代优化算法。每步在当前点附近划定一个信赖域，用二次模型逼近目标函数，在域内求解子问题得到试探步；若试探步使目标函数充分下降则接受并可能扩大信赖域，否则拒绝并缩小信赖域。结合牛顿法的快速收敛和梯度下降法的稳健性，适用于无约束和有约束优化。

## 应用价值

信赖域算法结合牛顿法的快速收敛和梯度下降法的稳健性，适用于轨道优化中的无约束和有约束问题，是求解转移轨道优化问题的有效工具。

## 相关概念

- [FreeFlyer（FreeFlyer）](/glossary/other/freeflyer/)
- [水平起降运载器（Horizontal Take-off Horizontal Landing）](/glossary/other/horizontal-take-off-horizontal-landing/)
- [轻量化全连接神经网络（Lightweight Fully-Connected Neural Network）](/glossary/fundamentals/lightweight-fully-connected-neural-network/)
- [CUDAjectory（CUDAjectory）](/glossary/other/cudajectory/)

## 参考文献

- Li et al., 2026, Chinese Journal of Space Science, 46(1):175-188; Byrd et al., 1988, Mathematical Programming, 40(1):247-263
