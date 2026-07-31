---
title: 灵敏度分析（Sensitivity Analysis）
description: 研究最优解随问题参数变化的分析方法。在最优控制框架中，通过约束对应的拉格朗日乘子直接获得最优代价对参数的一阶灵敏度，无需重新求解优化问题。对Genesis任务，该方法揭示了最优燃料消耗与发射速度误差、首次修正机动延迟时间之间的近线性关系。
keywords: 灵敏度分析, Sensitivity Analysis, 轨道力学, 基础概念, 参考系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 灵敏度分析（Sensitivity Analysis）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 灵敏度分析详解 | 术语定义
  description: 研究最优解随问题参数变化的分析方法。在最优控制框架中，通过约束对应的拉格朗日乘子直接获得最优代价对参数的一阶灵敏度，无需重新求解优化问题。对Genesis任务，该方法揭示了最优燃料消耗与发射速度误差、首次修正机动延迟时间之间的近线性关系。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 灵敏度分析详解 | 术语定义
  description: 研究最优解随问题参数变化的分析方法。在最优控制框架中，通过约束对应的拉格朗日乘子直接获得最优代价对参数的一阶灵敏度，无需重新求解优化问题。对Genesis任务，该方法揭示了最优燃料消耗与发射速度误差、首次修正机动延迟时间之间的近线性关系。
  image: /logo.png
permalink: /glossary/fundamentals/sensitivity-analysis/
---

# 灵敏度分析（Sensitivity Analysis）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

研究最优解随问题参数变化的分析方法。在最优控制框架中，通过约束对应的拉格朗日乘子直接获得最优代价对参数的一阶灵敏度，无需重新求解优化问题。对Genesis任务，该方法揭示了最优燃料消耗与发射速度误差、首次修正机动延迟时间之间的近线性关系。

## 应用价值

在线性二次型最优控制框架下，通过选取合适的权重矩阵Q和R，可以在跟踪精度与控制能耗之间取得平衡，适用于地月空间轨道保持的实时控制。

## 相关概念

- [月心旋转坐标系（Moon-Centered Rotating Frame）](/glossary/fundamentals/moon-centered-rotating-frame/)
- [有效势能（Effective Pseudo-Potential）](/glossary/fundamentals/effective-pseudo-potential/)
- [比冲（Specific Impulse）](/glossary/fundamentals/specific-impulse/)
- [月球二体能量（Two-Body Energy with Respect to the Moon）](/glossary/fundamentals/two-body-energy-with-respect-to-the-moon/)

## 参考文献

- Serban et al., 2002, Acta Astronautica
