---
title: 逐级优化（Staggered Optimization）
description: 一种分阶段求解最优控制问题的策略。先用可微代价函数（如速度增量平方和）求解初始最优解，再切换到物理意义明确但不可微的代价函数（如速度增量绝对值之和）精化，最后将接近零的机动剔除、降低机动次数重新优化。每阶段以上一阶段的结果为初始猜测，逐步逼近工程可用的最优方案。
keywords: 逐级优化, Staggered Optimization, 三体问题, 坐标系, 积分
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 逐级优化（Staggered Optimization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 逐级优化详解 | 术语定义
  description: 一种分阶段求解最优控制问题的策略。先用可微代价函数（如速度增量平方和）求解初始最优解，再切换到物理意义明确但不可微的代价函数（如速度增量绝对值之和）精化，最后将接近零的机动剔除、降低机动次数重新优化。每阶段以上一阶段的结果为初始猜测，逐步逼近工程可用的最优方案。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 逐级优化详解 | 术语定义
  description: 一种分阶段求解最优控制问题的策略。先用可微代价函数（如速度增量平方和）求解初始最优解，再切换到物理意义明确但不可微的代价函数（如速度增量绝对值之和）精化，最后将接近零的机动剔除、降低机动次数重新优化。每阶段以上一阶段的结果为初始猜测，逐步逼近工程可用的最优方案。
  image: /logo.png
permalink: /glossary/fundamentals/staggered-optimization/
---

# 逐级优化（Staggered Optimization）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种分阶段求解最优控制问题的策略。先用可微代价函数（如速度增量平方和）求解初始最优解，再切换到物理意义明确但不可微的代价函数（如速度增量绝对值之和）精化，最后将接近零的机动剔除、降低机动次数重新优化。每阶段以上一阶段的结果为初始猜测，逐步逼近工程可用的最优方案。

## 应用价值

基于该术语的定义，一种分阶段求解最优控制问题的策略。先用可微代价函数（如速度增量平方和）求解初始最优解，再切换到物理意。

## 相关概念

- [轨道力学（Orbital Mechanics）](/glossary/fundamentals/orbital-mechanics/)
- [坐标系（Coordinate Frame）](/glossary/fundamentals/coordinate-frame/)
- [积分（Integration）](/glossary/fundamentals/integration/)

## 参考文献

- Serban et al., 2002, Acta Astronautica
