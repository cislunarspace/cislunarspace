---
title: 选择算子（Selection Operator）
description: 微分进化算法中，根据目标函数值比较试验向量与目标向量，保留较优者进入下一代的操作。确保种群逐步向最优解进化。
keywords: 选择算子, Selection Operator, 微分进化, 目标函数, 进化算法, 优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 选择算子（Selection Operator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 选择算子详解 | 术语定义
  description: 微分进化算法中，根据目标函数值比较试验向量与目标向量，保留较优者进入下一代的操作。确保种群逐步向最优解进化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 选择算子详解 | 术语定义
  description: 微分进化算法中，根据目标函数值比较试验向量与目标向量，保留较优者进入下一代的操作。确保种群逐步向最优解进化。
  image: /logo.png
permalink: /glossary/dynamics/selection-operator/
---

# 选择算子（Selection Operator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

微分进化算法中，根据目标函数值比较试验向量与目标向量，保留较优者进入下一代的操作。确保种群逐步向最优解进化。

## 应用价值

选择算子是进化算法的核心机制之一，决定了"适者生存"的淘汰规则。在微分进化算法中，试验向量与目标向量一一竞争，保留目标函数值更优的个体进入下一代。在 Halo 轨道转移和低推力轨道优化等复杂问题中，选择算子驱动种群逐步收敛到全局最优解。良好的选择机制可以平衡探索与开发，避免早熟收敛同时保证收敛速度。在实际轨道优化中，选择算子与其他进化算子配合，使算法能够在大规模搜索空间中找到传统梯度方法难以发现的最优或近优解。

## 相关概念

- [微分进化算法（Differential Evolution）](/glossary/dynamics/differential-evolution/)
- [目标函数（Objective Function）](/glossary/fundamentals/objective-function/)
- [进化算法（Evolutionary Algorithm）](/glossary/dynamics/evolutionary-algorithm/)
- [全局优化（Global Optimization）](/glossary/fundamentals/global-optimization/)

## 参考文献

- Neelakantan和Ramanan - 2022 - Two-impulse transfer to multi-revolution halo orbits in the Earth–moon elliptic restricted three bod
