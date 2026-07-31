---
title: 适应度函数（Fitness Function）
description: 差分进化算法中用于评估个体解满足边界条件程度的加权残差范数。
keywords: 适应度函数, Fitness Function, 轨道力学, 三体问题, 非线性动力学, 轨道稳定性
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 适应度函数（Fitness Function）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 适应度函数详解 | 术语定义
  description: 差分进化算法中用于评估个体解满足边界条件程度的加权残差范数。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 适应度函数详解 | 术语定义
  description: 差分进化算法中用于评估个体解满足边界条件程度的加权残差范数。
  image: /logo.png
permalink: /glossary/dynamics/fitness-function/
---

# 适应度函数（Fitness Function）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

差分进化算法中用于评估个体解满足边界条件程度的加权残差范数。

## 应用价值

适应度函数在进化算法中用于评价解的质量，是驱动算法搜索的关键。在轨道优化中，适应度函数通常取为任务目标的某个度量（如速度增量、飞行时间），算法通过最大化或最小化适应度函数逐步改进解的质量。

## 相关概念

- [雅可比常数（Jacobi Constant, JC）](/glossary/dynamics/jacobi-constant-jc/)
- [希尔区域（Hill Region）](/glossary/fundamentals/hill-region/)
- [庞加莱映射（Poincaré Map）](/glossary/dynamics/poincar-map/)
- [稳定性（Stability）](/glossary/dynamics/stability/)
## 参考文献

- Pozzi 等 - 2025
