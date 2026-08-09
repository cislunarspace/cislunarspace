---
title: 松弛法（Relaxation Method）
description: 直接法求解最优控制问题的一种策略，将非凸动力学或操作约束松弛为凸约束，从而将原问题转化为可高效求解的凸优化问题。典型应用包括火星着陆动力下降制导中的二阶锥规划松弛。
keywords: 松弛法, Relaxation Method, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 松弛法（Relaxation Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 松弛法详解 | 术语定义
  description: 直接法求解最优控制问题的一种策略，将非凸动力学或操作约束松弛为凸约束，从而将原问题转化为可高效求解的凸优化问题。典型应用包括火星着陆动力下降制导中的二阶锥规划松弛。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 松弛法详解 | 术语定义
  description: 直接法求解最优控制问题的一种策略，将非凸动力学或操作约束松弛为凸约束，从而将原问题转化为可高效求解的凸优化问题。典型应用包括火星着陆动力下降制导中的二阶锥规划松弛。
  image: /logo.png
permalink: /glossary/dynamics/relaxation-method/
---

# 松弛法（Relaxation Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

直接法求解最优控制问题的一种策略，将非凸动力学或操作约束松弛为凸约束，从而将原问题转化为可高效求解的凸优化问题。典型应用包括火星着陆动力下降制导中的二阶锥规划松弛。

## 应用价值

在轨道设计阶段，该方法可用于求解低能量转移轨道，减少推进剂消耗。该优化方法计算效率高，适合处理带约束的轨迹优化问题。

## 相关概念

- 希尔球半径（Hill Sphere Radius）
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincare-section/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/differential-correction/)

## 参考文献

- You and Dai, 2022, JGCD, doi:10.2514/1.G006815
