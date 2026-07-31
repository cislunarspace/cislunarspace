---
title: 飞行时间优化（Time-of-Flight Optimization）
description: 在制导问题中搜索最优飞行时间使某个性能指标最小化的技术。Burns和Scherock（2004）用Powell方法优化拦截器飞行时间，使速度匹配机动的燃料消耗最小。其物理机理是：飞行时间决定了拦截器与目标轨迹的交会角度，交会角度越小，所需速度匹配增量越低。
keywords: 飞行时间优化, Time-of-Flight Optimization, 轨道力学, 最优控制, 轨迹优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 飞行时间优化（Time-of-Flight Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 飞行时间优化详解 | 术语定义
  description: 在制导问题中搜索最优飞行时间使某个性能指标最小化的技术。Burns和Scherock（2004）用Powell方法优化拦截器飞行时间，使速度匹配机动的燃料消耗最小。其物理机理是：飞行时间决定了拦截器与目标轨迹的交会角度，交会角度越小，所需速度匹配增量越低。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 飞行时间优化详解 | 术语定义
  description: 在制导问题中搜索最优飞行时间使某个性能指标最小化的技术。Burns和Scherock（2004）用Powell方法优化拦截器飞行时间，使速度匹配机动的燃料消耗最小。其物理机理是：飞行时间决定了拦截器与目标轨迹的交会角度，交会角度越小，所需速度匹配增量越低。
  image: /logo.png
permalink: /glossary/dynamics/time-of-flight-optimization/
---

# 飞行时间优化（Time-of-Flight Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在制导问题中搜索最优飞行时间使某个性能指标最小化的技术。Burns和Scherock（2004）用Powell方法优化拦截器飞行时间，使速度匹配机动的燃料消耗最小。其物理机理是：飞行时间决定了拦截器与目标轨迹的交会角度，交会角度越小，所需速度匹配增量越低。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [混合差分动态规划（Hybrid Differential Dynamic Programming）](/glossary/dynamics/hybrid-differential-dynamic-programming/)
- [形状法（Shape Method）](/glossary/dynamics/shape-method/)
- [差分动态规划（Differential Dynamic Programming, DDP）](/glossary/dynamics/differential-dynamic-programming-ddp/)
- [二阶锥规划（Second-Order Cone Programming, SOCP）](/glossary/dynamics/second-order-cone-programming-socp/)

## 参考文献

- Burns和Scherock - 2004
